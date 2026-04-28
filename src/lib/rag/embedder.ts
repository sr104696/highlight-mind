import { pipeline, env } from "@huggingface/transformers";

// Public mirrors only. No tokens. Allow remote models (HF hub, anonymous).
env.allowLocalModels = false;
env.allowRemoteModels = true;

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
    // res.tolist() gives nested array; res.data is flat. Use slicing per item.
    const dim = res.dims[res.dims.length - 1];
    const data = res.data as Float32Array;
    for (let j = 0; j < slice.length; j++) {
      out.push(new Float32Array(data.buffer, data.byteOffset + j * dim * 4, dim).slice());
    }
    onProgress?.(`Embedded ${Math.min(i + batch, texts.length)}/${texts.length}`);
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
  return new Float32Array(data.buffer, data.byteOffset, dim).slice();
}

export async function rerank(
  query: string,
  passages: string[]
): Promise<number[]> {
  if (!passages.length) return [];
  const ce = await getReranker();
  const inputs = passages.map((p) => ({ text: query, text_pair: p }));
  const out = await ce(inputs, { topk: 1 });
  // returns array of {label, score}
  return (out as any[]).map((r) => r.score);
}