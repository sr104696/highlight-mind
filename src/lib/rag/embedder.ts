import {
  pipeline,
  env,
  AutoTokenizer,
  AutoModelForSequenceClassification,
} from "@huggingface/transformers";

// Public mirrors only. No tokens. Allow remote models (HF hub, anonymous).
env.allowLocalModels = false;
env.allowRemoteModels = true;
// Bug #10: persist ONNX weights in CacheStorage; tune wasm threads.
env.useBrowserCache = true;
if (env.backends?.onnx?.wasm) {
  env.backends.onnx.wasm.numThreads = (self as any).crossOriginIsolated
    ? Math.min(4, navigator.hardwareConcurrency || 2)
    : 1;
}

let embedderPromise: Promise<any> | null = null;

export type ProgressCb = (msg: string, pct?: number) => void;

async function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    p,
    new Promise<T>((_, rej) =>
      setTimeout(() => rej(new Error(`${label} timed out after ${ms}ms`)), ms)
    ),
  ]);
}

export function getEmbedder(onProgress?: ProgressCb) {
  if (!embedderPromise) {
    embedderPromise = pipeline(
      "feature-extraction",
      "Xenova/bge-small-en-v1.5",
      {
        progress_callback: (p: any) => {
          if (onProgress && p.status === "progress" && p.file?.endsWith?.(".onnx")) {
            onProgress(`Loading embedder: ${p.file}`, p.progress);
          } else if (onProgress && p.status === "ready") {
            onProgress("Embedder ready", 100);
          }
        },
      }
    ).catch((err) => {
      embedderPromise = null; // allow retry on next call
      throw err;
    });
  }
  return embedderPromise;
}

export async function embedTexts(
  texts: string[],
  onProgress?: ProgressCb
): Promise<Float32Array[]> {
  const ext = await getEmbedder(onProgress);
  const out: Float32Array[] = [];
  let dimCached: number | null = null;
  const batch = 4; // smaller batch = lower peak memory, smoother progress
  for (let i = 0; i < texts.length; i += batch) {
    const slice = texts.slice(i, i + batch);
    let res: any;
    try {
      res = await withTimeout(
        ext(slice, {
          pooling: "mean",
          normalize: true,
          truncation: true,
          max_length: 512,
        }),
        30000,
        `Embed batch ${i}`
      );
    } catch (err) {
      console.warn(`[embedder] batch ${i} failed, zero-padding:`, err);
      const dim = dimCached ?? 384; // bge-small-en-v1.5 fallback
      for (let j = 0; j < slice.length; j++) out.push(new Float32Array(dim));
      const done = Math.min(i + batch, texts.length);
      onProgress?.(`Embedded ${done}/${texts.length}`, (done / texts.length) * 100);
      await new Promise((r) => setTimeout(r, 0));
      continue;
    }
    const dim = res.dims[res.dims.length - 1];
    if (dimCached === null) dimCached = dim;
    const flat = Array.from(res.data as Float32Array);
    for (let j = 0; j < slice.length; j++) {
      const v = new Float32Array(dim);
      for (let d = 0; d < dim; d++) v[d] = flat[j * dim + d];
      out.push(v);
    }
    if (typeof (res as any).dispose === "function") (res as any).dispose();
    const done = Math.min(i + batch, texts.length);
    onProgress?.(`Embedded ${done}/${texts.length}`, (done / texts.length) * 100);
    // Yield to the event loop — repaints progress, prevents "page unresponsive"
    await new Promise((r) => setTimeout(r, 0));
  }
  return out;
}

export async function embedQuery(text: string): Promise<Float32Array> {
  const ext = await getEmbedder();
  // BGE query instruction
  const q = "Represent this sentence for searching relevant passages: " + text;
  const res = await ext([q], { pooling: "mean", normalize: true });
  const dim = res.dims[res.dims.length - 1];
  const data = res.data as Float32Array;
  const v = new Float32Array(dim);
  for (let d = 0; d < dim; d++) v[d] = data[d];
  if (typeof (res as any).dispose === "function") (res as any).dispose();
  return v;
}

// Bug #2: cross-encoder direct model call — pipeline shape is wrong for pairs.
let ceTok: any = null;
let ceModel: any = null;
async function loadCE() {
  if (ceModel) return;
  try {
    ceTok = await AutoTokenizer.from_pretrained(
      "Xenova/ms-marco-MiniLM-L-6-v2"
    );
    ceModel = await AutoModelForSequenceClassification.from_pretrained(
      "Xenova/ms-marco-MiniLM-L-6-v2"
    );
  } catch (err) {
    ceTok = null;
    ceModel = null;
    throw err;
  }
}

export async function rerank(
  query: string,
  passages: string[]
): Promise<number[]> {
  if (!passages.length) return [];
  await loadCE();
  const scores: number[] = [];
  for (const p of passages) {
    const inputs = ceTok(query, p, {
      padding: true,
      truncation: true,
    });
    const { logits } = await ceModel(inputs);
    scores.push(Number((logits.data as Float32Array)[0]));
    // Yield to event loop so the UI can repaint between cross-encoder passes.
    await new Promise((r) => setTimeout(r, 0));
  }
  return scores;
}