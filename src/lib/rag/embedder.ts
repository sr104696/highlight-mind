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
  env.backends.onnx.wasm.numThreads = Math.min(
    4,
    (typeof navigator !== "undefined" && navigator.hardwareConcurrency) || 2
  );
}

let embedderPromise: Promise<any> | null = null;
let rerankerPromise: Promise<any> | null = null;

export type ProgressCb = (msg: string, pct?: number) => void;

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
    );
  }
  return embedderPromise;
}

export function getReranker(onProgress?: ProgressCb) {
  if (!rerankerPromise) {
    rerankerPromise = pipeline(
      "text-classification",
      "Xenova/ms-marco-MiniLM-L-6-v2",
      {
        progress_callback: (p: any) => {
          if (onProgress && p.status === "progress" && p.file?.endsWith?.(".onnx")) {
            onProgress(`Loading reranker: ${p.file}`, p.progress);
          } else if (onProgress && p.status === "ready") {
            onProgress("Reranker ready", 100);
          }
        },
      }
    );
  }
  return rerankerPromise;
}

export async function embedTexts(
  texts: string[],
  onProgress?: ProgressCb
): Promise<Float32Array[]> {
  const ext = await getEmbedder(onProgress);
  const out: Float32Array[] = [];
  const batch = 8;
  for (let i = 0; i < texts.length; i += batch) {
    const slice = texts.slice(i, i + batch);
    const res = await ext(slice, { pooling: "mean", normalize: true });
    // Bug #1: index-based copy avoids byteOffset corruption across batch items.
    const dim = res.dims[res.dims.length - 1];
    const data = res.data as Float32Array;
    const flat = Array.from(data);
    for (let j = 0; j < slice.length; j++) {
      const v = new Float32Array(dim);
      for (let d = 0; d < dim; d++) v[d] = flat[j * dim + d];
      out.push(v);
    }
    // Bug #9: pass percent so progress bar advances during embedding.
    const done = Math.min(i + batch, texts.length);
    onProgress?.(`Embedded ${done}/${texts.length}`, (done / texts.length) * 100);
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
  // Bug #1: same index-based copy.
  const v = new Float32Array(dim);
  const src = data as Float32Array;
  for (let d = 0; d < dim; d++) v[d] = src[d];
  return v;
}

// Bug #2: cross-encoder direct model call — pipeline shape is wrong for pairs.
let ceTok: any = null;
let ceModel: any = null;
async function loadCE() {
  if (ceModel) return;
  ceTok = await AutoTokenizer.from_pretrained(
    "Xenova/ms-marco-MiniLM-L-6-v2"
  );
  ceModel = await AutoModelForSequenceClassification.from_pretrained(
    "Xenova/ms-marco-MiniLM-L-6-v2"
  );
}

export async function rerank(
  query: string,
  passages: string[]
): Promise<number[]> {
  if (!passages.length) return [];
  await loadCE();
  const scores: number[] = [];
  for (const p of passages) {
    const inputs = await ceTok(query, {
      text_pair: p,
      padding: true,
      truncation: true,
      return_tensors: "pt",
    });
    const { logits } = await ceModel(inputs);
    scores.push(Number((logits.data as Float32Array)[0]));
  }
  return scores;
}