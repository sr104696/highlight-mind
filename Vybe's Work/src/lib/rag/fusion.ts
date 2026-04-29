import type { RankedChunk } from "./types";

/**
 * Reciprocal Rank Fusion. INVARIANT: the relative order within each input
 * list matters; absolute list lengths need NOT match, but for fairness
 * pass comparable candidate pools (same retrievalK) from each retriever.
 */
export function rrf(lists: RankedChunk[][], k = 60, weights?: number[]): RankedChunk[] {
  const scores = new Map<number, number>();
  const payload = new Map<number, RankedChunk>();
  lists.forEach((list, li) => {
    const w = weights?.[li] ?? 1;
    list.forEach((item, rank) => {
      const key = item.id;
      scores.set(key, (scores.get(key) || 0) + w / (k + rank + 1));
      payload.set(key, item);
    });
  });
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([id, score]) => ({ ...(payload.get(id) as RankedChunk), score }));
}

export function cosineSearch(
  qvec: Float32Array,
  chunks: { id: number; vector?: Float32Array }[],
  topN: number
) {
  // Normalize query (chunk vectors are already normalized by BGE pooling)
  let qnorm = 0;
  for (let i = 0; i < qvec.length; i++) qnorm += qvec[i] * qvec[i];
  qnorm = Math.sqrt(qnorm);
  if (qnorm < 1e-8) return [];
  const out: { id: number; score: number }[] = [];
  for (const c of chunks) {
    if (!c.vector) continue;
    const v = c.vector;
    if (v.length !== qvec.length) continue;
    let s = 0;
    for (let i = 0; i < v.length; i++) s += v[i] * qvec[i];
    out.push({ id: c.id, score: s / qnorm });
  }
  out.sort((a, b) => b.score - a.score);
  return out.slice(0, topN);
}

/** Maximal Marginal Relevance — diversifies top-K. */
export function mmr<T extends { id: number; vector?: Float32Array; score: number }>(
  candidates: T[],
  k: number,
  lambda = 0.7
): T[] {
  if (candidates.length <= k) return candidates;
  const picked: T[] = [];
  const remaining = [...candidates];
  remaining.sort((a, b) => b.score - a.score);
  picked.push(remaining.shift()!);
  while (picked.length < k && remaining.length) {
    let bestIdx = 0;
    let bestVal = -Infinity;
    for (let i = 0; i < remaining.length; i++) {
      const cand = remaining[i];
      let maxSim = 0;
      if (cand.vector) {
        for (const p of picked) {
          if (!p.vector || p.vector.length !== cand.vector.length) continue;
          let s = 0;
          for (let d = 0; d < cand.vector.length; d++) s += cand.vector[d] * p.vector[d];
          if (s > maxSim) maxSim = s;
        }
      }
      const val = lambda * cand.score - (1 - lambda) * maxSim;
      if (val > bestVal) { bestVal = val; bestIdx = i; }
    }
    picked.push(remaining.splice(bestIdx, 1)[0]);
  }
  return picked;
}
