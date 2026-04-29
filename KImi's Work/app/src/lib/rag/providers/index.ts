import { embedTexts, embedQuery, rerank, type ProgressCb } from "../embedder";

export interface EmbeddingProvider {
  embedTexts(texts: string[], onProgress?: ProgressCb, signal?: AbortSignal): Promise<Float32Array[]>;
  embedQuery(text: string): Promise<Float32Array>;
  rerank(query: string, passages: string[]): Promise<number[]>;
}

export const LocalProvider: EmbeddingProvider = {
  embedTexts: (t, p, s) => embedTexts(t, p, s),
  embedQuery: (t) => embedQuery(t),
  rerank: (q, p) => rerank(q, p),
};

// Placeholder remote provider — wire to /api/embed behind a feature flag.
export const RemoteProvider: EmbeddingProvider = {
  async embedTexts() {
    throw new Error("RemoteProvider not configured");
  },
  async embedQuery() {
    throw new Error("RemoteProvider not configured");
  },
  async rerank() {
    throw new Error("RemoteProvider not configured");
  },
};

export const defaultProvider = LocalProvider;
