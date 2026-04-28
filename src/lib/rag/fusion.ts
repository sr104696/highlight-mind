import type { RankedChunk } from "./types";

export function rrf(lists: RankedChunk[][], k = 60): RankedChunk[] {
  const scores = new Map<number, number>();
  const payload = new Map<number, RankedChunk>();
  for (const list of lists) {
    list.forEach((item, rank) => {
      const key = item.id;
      scores.set(key, (scores.get(key) || 0) + 1 / (k + rank + 1));
      // Bug #11: always overwrite — RRF score is what matters.
      payload.set(key, item);
    });
  }
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id, score]) => ({ ...(payload.get(id) as RankedChunk), score }));
}

export function cosineSearch(
  qvec: Float32Array,
  chunks: { id: number; vector?: Float32Array }[],
  topN: number
) {
  const out: { id: number; score: number }[] = [];
  for (const c of chunks) {
    if (!c.vector) continue;
    let s = 0;
    const v = c.vector;
    const len = Math.min(v.length, qvec.length);
    for (let i = 0; i < len; i++) s += v[i] * qvec[i];
    out.push({ id: c.id, score: s });
  }
  out.sort((a, b) => b.score - a.score);
  return out.slice(0, topN);
}