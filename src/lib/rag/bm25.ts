import type { Chunk, RankedChunk } from "./types";

const STOP = new Set(
  "a an the and or but if of to in on for with by is are was were be been being this that these those it its as at from".split(
    " "
  )
);

export function tokenize(s: string): string[] {
  return (s.toLowerCase().match(/[a-z0-9]+/g) || []).filter(
    (t) => t.length > 1 && !STOP.has(t)
  );
}

export class BM25 {
  private k1 = 1.5;
  private b = 0.75;
  private avgdl = 0;
  private df = new Map<string, number>();
  private idf = new Map<string, number>();
  private docs: { tokens: string[]; tf: Map<string, number>; len: number }[] = [];

  constructor(private chunks: Chunk[]) {
    let total = 0;
    for (const c of chunks) {
      const toks = tokenize(c.text);
      const tf = new Map<string, number>();
      for (const t of toks) tf.set(t, (tf.get(t) || 0) + 1);
      this.docs.push({ tokens: toks, tf, len: toks.length });
      total += toks.length;
      const seen = new Set(toks);
      for (const t of seen) this.df.set(t, (this.df.get(t) || 0) + 1);
    }
    this.avgdl = total / Math.max(1, chunks.length);
    const N = chunks.length;
    for (const [t, df] of this.df) {
      this.idf.set(t, Math.log(1 + (N - df + 0.5) / (df + 0.5)));
    }
  }

  search(query: string, topN: number): RankedChunk[] {
    const q = tokenize(query);
    const scores = new Float32Array(this.docs.length);
    for (let i = 0; i < this.docs.length; i++) {
      const { tf, len } = this.docs[i];
      let s = 0;
      for (const term of q) {
        const f = tf.get(term);
        if (!f) continue;
        const idf = this.idf.get(term) || 0;
        const denom = f + this.k1 * (1 - this.b + (this.b * len) / this.avgdl);
        s += idf * ((f * (this.k1 + 1)) / denom);
      }
      scores[i] = s;
    }
    const idx = Array.from(scores.keys()).sort((a, b) => scores[b] - scores[a]);
    const out: RankedChunk[] = [];
    for (let r = 0; r < Math.min(topN, idx.length); r++) {
      const i = idx[r];
      if (scores[i] <= 0) break;
      out.push({ ...this.chunks[i], score: scores[i] });
    }
    return out;
  }
}