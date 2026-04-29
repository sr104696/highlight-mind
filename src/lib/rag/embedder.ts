// Lazy dynamic-import of @huggingface/transformers — keeps initial JS bundle small.
type Pipeline = any;
type Tokenizer = any;
type Model = any;

let _envInitialized = false;
async function ensureEnv() {
  const mod: any = await import("@huggingface/transformers");
  if (!_envInitialized) {
    mod.env.allowLocalModels = false;
    mod.env.allowRemoteModels = true;
    mod.env.useBrowserCache = true;
    if (mod.env.backends?.onnx?.wasm) {
      mod.env.backends.onnx.wasm.numThreads = (self as any).crossOriginIsolated
        ? Math.min(4, navigator.hardwareConcurrency || 2)
        : 1;
    }
    _envInitialized = true;
  }
  return mod;
}

export type ProgressCb = (msg: string, pct?: number) => void;

async function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    p,
    new Promise<T>((_, rej) =>
      setTimeout(() => rej(new Error(`${label} timed out after ${ms}ms`)), ms)
    ),
  ]);
}

async function withRetry<T>(fn: () => Promise<T>, attempts = 3, baseMs = 500): Promise<T> {
  let last: any;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      last = e;
      await new Promise((r) => setTimeout(r, baseMs * 2 ** i));
    }
  }
  throw last;
}

let embedderPromise: Promise<Pipeline> | null = null;
let embedderModelId = "Xenova/bge-small-en-v1.5";

export function setEmbedderModel(modelId: string) {
  if (modelId !== embedderModelId) {
    embedderModelId = modelId;
    embedderPromise = null;
  }
}

export function getEmbedder(onProgress?: ProgressCb) {
  if (!embedderPromise) {
    embedderPromise = (async () => {
      const { pipeline } = await ensureEnv();
      // Friendly preflight ping
      try {
        await fetch("https://huggingface.co/", { method: "HEAD", mode: "no-cors" });
      } catch {
        throw new Error("Cannot reach huggingface.co — check your network or CSP.");
      }
      return withRetry(() =>
        pipeline("feature-extraction", embedderModelId, {
          progress_callback: (p: any) => {
            if (!onProgress) return;
            if (p.status === "progress" && p.file?.match?.(/\.(onnx|json|txt)$/)) {
              const pct = typeof p.progress === "number" ? p.progress : undefined;
              onProgress(`Loading ${p.file}`, pct);
            } else if (p.status === "ready") {
              onProgress("Embedder ready", 100);
            }
          },
        })
      );
    })().catch((err) => {
      embedderPromise = null;
      throw err;
    });
  }
  return embedderPromise;
}

export async function embedTexts(
  texts: string[],
  onProgress?: ProgressCb,
  signal?: AbortSignal
): Promise<Float32Array[]> {
  const ext = await getEmbedder(onProgress);
  const out: Float32Array[] = [];
  let dimCached: number | null = null;
  let firstBatchDone = false;
  const batch = 4;
  for (let i = 0; i < texts.length; i += batch) {
    if (signal?.aborted) throw new Error("aborted");
    const slice = texts.slice(i, i + batch);
    let res: any;
    try {
      const call = ext(slice, {
        pooling: "mean",
        normalize: true,
        truncation: true,
        max_length: 512,
      });
      res = firstBatchDone ? await withTimeout(call, 30000, `Embed batch ${i}`) : await call;
      firstBatchDone = true;
    } catch (err) {
      console.warn(`[embedder] batch ${i} failed, zero-padding:`, err);
      const dim = dimCached ?? 384;
      for (let j = 0; j < slice.length; j++) out.push(new Float32Array(dim));
      const done = Math.min(i + batch, texts.length);
      onProgress?.(`Embedded ${done}/${texts.length}`, (done / texts.length) * 100);
      await new Promise((r) => setTimeout(r, 0));
      continue;
    }
    try {
      const dim = res.dims[res.dims.length - 1];
      if (dimCached === null) dimCached = dim;
      const flat = res.data as Float32Array;
      for (let j = 0; j < slice.length; j++) {
        const v = new Float32Array(dim);
        for (let d = 0; d < dim; d++) v[d] = flat[j * dim + d];
        out.push(v);
      }
    } finally {
      if (typeof res?.dispose === "function") res.dispose();
    }
    const done = Math.min(i + batch, texts.length);
    onProgress?.(`Embedded ${done}/${texts.length}`, (done / texts.length) * 100);
    await new Promise((r) => setTimeout(r, 0));
  }
  return out;
}

export async function embedQuery(text: string, onProgress?: ProgressCb): Promise<Float32Array> {
  const ext = await getEmbedder(onProgress);
  const q = "Represent this sentence for searching relevant passages: " + text;
  let res: any;
  try {
    res = await ext([q], { pooling: "mean", normalize: true });
    const dim = res.dims[res.dims.length - 1];
    const data = res.data as Float32Array;
    const v = new Float32Array(dim);
    for (let d = 0; d < dim; d++) v[d] = data[d];
    return v;
  } finally {
    if (typeof res?.dispose === "function") res.dispose();
  }
}

let cePromise: Promise<{ tok: Tokenizer; model: Model }> | null = null;
function loadCE() {
  if (!cePromise) {
    cePromise = (async () => {
      const { AutoTokenizer, AutoModelForSequenceClassification } = await ensureEnv();
      return withRetry(async () => {
        const tok = await AutoTokenizer.from_pretrained("Xenova/ms-marco-MiniLM-L-6-v2");
        const model = await AutoModelForSequenceClassification.from_pretrained(
          "Xenova/ms-marco-MiniLM-L-6-v2"
        );
        return { tok, model };
      });
    })().catch((err) => {
      cePromise = null;
      throw err;
    });
  }
  return cePromise;
}

export async function rerank(query: string, passages: string[]): Promise<number[]> {
  if (!passages.length) return [];
  const { tok, model } = await loadCE();
  // Single batched forward pass
  const inputs = tok(Array(passages.length).fill(query), passages, {
    padding: true,
    truncation: true,
  });
  let out: any;
  try {
    out = await model(inputs);
    const flat = out.logits.data as Float32Array;
    return Array.from(flat);
  } finally {
    if (typeof out?.logits?.dispose === "function") out.logits.dispose();
  }
}
