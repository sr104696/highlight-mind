export type ProgressCb = (e: { status: "start" | "progress" | "done"; loaded: number; total: number; progress: number }) => void;
export const EMBEDDING_DIM = 384;
export const PROVIDER_ID = "lexical-hash-v1";

function tokenize(text: string) {
  return text.toLowerCase("en-US").normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ").split(/\s+/)
    .map(t => t.trim()).filter(t => t.length > 1);
}
function hashToken(token: string) {
  let hash = 2166136261;
  for (let i = 0; i < token.length; i++) {
    hash ^= token.charCodeAt(i);
    hash = Math.imul(hash, 16777619); // 32-bit FNV-1a
  }
  return hash >>> 0;
}
function assertNotAborted(signal?: AbortSignal) {
  if (signal?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
}
function embedOne(text: string) {
  const v = new Float32Array(EMBEDDING_DIM);
  for (const token of tokenize(text)) {
    const h = hashToken(token); const slot = h % EMBEDDING_DIM; const sign = h & 1 ? 1 : -1;
    v[slot] += sign * (1 + Math.log2(2 + token.length));
  }
  const norm = Math.sqrt(v.reduce((s, x) => s + x * x, 0));
  if (norm === 0) { v[0] = 1; return v; }
  for (let i = 0; i < v.length; i++) v[i] /= norm;
  return v;
}
export async function embedTexts(texts: string[], onProgress?: ProgressCb, signal?: AbortSignal) {
  assertNotAborted(signal);
  onProgress?.({ status: "start", loaded: 0, total: texts.length, progress: 0 });
  const out: Float32Array[] = [];
  for (let i = 0; i < texts.length; i++) {
    assertNotAborted(signal);
    out.push(embedOne(texts[i]));
    onProgress?.({ status: "progress", loaded: i + 1, total: texts.length,
      progress: texts.length === 0 ? 100 : Math.round(((i + 1) / texts.length) * 100) });
    await Promise.resolve();
  }
  onProgress?.({ status: "done", loaded: texts.length, total: texts.length, progress: 100 });
  return out;
}
export async function embedQuery(text: string) { const [v] = await embedTexts([text]); return v; }
export async function rerank(query: string, passages: string[]) {
  const qt = new Set(tokenize(query));
  const nq = query.trim().toLowerCase("en-US");
  return passages.map(p => {
    const pt = tokenize(p); const ps = new Set(pt);
    let overlap = 0; for (const t of qt) if (ps.has(t)) overlap++;
    const lex = qt.size === 0 ? 0 : overlap / qt.size;
    const phrase = nq.length > 0 && p.toLowerCase("en-US").includes(nq) ? 0.2 : 0;
    const density = pt.length === 0 ? 0 : Math.min(0.1, overlap / pt.length);
    return Math.max(0, Math.min(1, lex * 0.9 + phrase + density));
  });
}
