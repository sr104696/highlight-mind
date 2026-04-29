// Lightweight in-browser BM25 retrieval over text chunks.
// Inspired by RAGFlow / semantra chunk-and-rank patterns, but kept dependency-free.

export interface Chunk {
  id: string;
  docId: string;
  docTitle: string;
  text: string;
  start: number;   // char offset within doc
  heading?: string;
}

export interface RankedChunk extends Chunk {
  score: number;
  matchedTerms: string[];
}

const STOP = new Set([
  'the','a','an','and','or','of','to','in','on','for','with','by','is','are','was','were','be','been','being','this','that','these','those','it','its','as','at','from','but','if','then','than','so','not','no','do','does','did','have','has','had','can','could','should','would','will','may','might','i','you','we','they','he','she','them','our','your','their'
]);

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[`*_#>~\-=+[\]{}()<>|\\"',.!?:;]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t));
}

/**
 * Split markdown / plain text into ~`chunkSize`-char windows that respect
 * paragraph and heading boundaries.
 */
export function chunkText(
  docId: string,
  docTitle: string,
  text: string,
  chunkSize = 900,
  overlap = 150
): Chunk[] {
  const chunks: Chunk[] = [];
  const lines = text.split(/\n/);
  let buf = '';
  let bufStart = 0;
  let cursor = 0;
  let heading: string | undefined;

  const flush = () => {
    const trimmed = buf.trim();
    if (trimmed.length > 40) {
      chunks.push({
        id: `${docId}#${chunks.length}`,
        docId,
        docTitle,
        text: trimmed,
        start: bufStart,
        heading,
      });
    }
    // overlap window
    if (overlap > 0 && buf.length > overlap) {
      buf = buf.slice(buf.length - overlap);
      bufStart = cursor - buf.length;
    } else {
      buf = '';
      bufStart = cursor;
    }
  };

  for (const raw of lines) {
    const line = raw + '\n';
    const h = /^#{1,6}\s+(.*)/.exec(raw);
    if (h) heading = h[1].trim().slice(0, 120);
    if (buf.length + line.length > chunkSize) flush();
    buf += line;
    cursor += line.length;
  }
  flush();
  return chunks;
}

export interface BM25Index {
  chunks: Chunk[];
  df: Map<string, number>;     // doc-frequency per term
  tf: Map<string, number>[];   // tf per chunk
  len: number[];               // chunk lengths
  avgdl: number;
  N: number;
}

export function buildIndex(chunks: Chunk[]): BM25Index {
  const tf: Map<string, number>[] = [];
  const df = new Map<string, number>();
  const len: number[] = [];
  for (const c of chunks) {
    const tokens = tokenize(c.text);
    const m = new Map<string, number>();
    for (const t of tokens) m.set(t, (m.get(t) || 0) + 1);
    tf.push(m);
    len.push(tokens.length);
    for (const t of m.keys()) df.set(t, (df.get(t) || 0) + 1);
  }
  const avgdl = len.reduce((a, b) => a + b, 0) / Math.max(1, len.length);
  return { chunks, df, tf, len, avgdl, N: chunks.length };
}

export function search(
  index: BM25Index,
  query: string,
  topK = 8,
  k1 = 1.5,
  b = 0.75
): RankedChunk[] {
  const qTokens = Array.from(new Set(tokenize(query)));
  if (!qTokens.length || index.N === 0) return [];

  const scores = new Array(index.N).fill(0);
  const matched: Set<string>[] = Array.from({ length: index.N }, () => new Set());

  for (const t of qTokens) {
    const dft = index.df.get(t);
    if (!dft) continue;
    const idf = Math.log(1 + (index.N - dft + 0.5) / (dft + 0.5));
    for (let i = 0; i < index.N; i++) {
      const f = index.tf[i].get(t);
      if (!f) continue;
      const dl = index.len[i];
      const norm = f * (k1 + 1) / (f + k1 * (1 - b + b * dl / index.avgdl));
      scores[i] += idf * norm;
      matched[i].add(t);
    }
  }

  const ranked: RankedChunk[] = [];
  for (let i = 0; i < index.N; i++) {
    if (scores[i] <= 0) continue;
    ranked.push({
      ...index.chunks[i],
      score: scores[i],
      matchedTerms: Array.from(matched[i]),
    });
  }
  ranked.sort((a, b) => b.score - a.score);
  return ranked.slice(0, topK);
}

export function snippet(text: string, terms: string[], radius = 140): string {
  if (!terms.length) return text.slice(0, radius * 2);
  const lower = text.toLowerCase();
  let best = -1;
  for (const t of terms) {
    const i = lower.indexOf(t.toLowerCase());
    if (i >= 0 && (best < 0 || i < best)) best = i;
  }
  if (best < 0) return text.slice(0, radius * 2);
  const start = Math.max(0, best - radius);
  const end = Math.min(text.length, best + radius);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < text.length ? '…' : '';
  return prefix + text.slice(start, end) + suffix;
}
