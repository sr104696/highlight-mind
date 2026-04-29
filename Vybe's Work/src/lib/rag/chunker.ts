import type { PageData, Chunk, BBox } from "./types";

function unionBBox(boxes: BBox[]): BBox {
  if (!boxes.length) return [0, 0, 0, 0];
  let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
  for (const [x, y, w, h] of boxes) {
    if (x < x1) x1 = x;
    if (y < y1) y1 = y;
    if (x + w > x2) x2 = x + w;
    if (y + h > y2) y2 = y + h;
  }
  return [x1, y1, x2 - x1, y2 - y1];
}

interface Tok { tok: string; bbox: BBox; pageIndex: number; sentenceEnd?: boolean }

const SENT_END = /[.!?]$/;

export function slidingChunks(
  pages: PageData[],
  docId: string,
  targetTokens?: number,
  overlapRatio = 0.15
): Chunk[] {
  // Adaptive token size from average word length
  let totalChars = 0, totalWords = 0;
  for (const p of pages) for (const it of p.items) {
    const parts = it.text.split(/\s+/).filter(Boolean);
    totalWords += parts.length;
    for (const w of parts) totalChars += w.length;
  }
  const avgWordLen = totalWords > 0 ? totalChars / totalWords : 5;
  const tgt = targetTokens ?? (avgWordLen > 8 ? 120 : 180);
  const overlap = Math.floor(tgt * overlapRatio);
  const step = Math.max(1, tgt - overlap);

  // Flatten all pages into one token stream with page metadata for cross-page overlap.
  const stream: Tok[] = [];
  for (const page of pages) {
    for (const it of page.items) {
      const parts = it.text.split(/\s+/).filter(Boolean);
      for (let i = 0; i < parts.length; i++) {
        const t = parts[i];
        stream.push({
          tok: t,
          bbox: it.bbox,
          pageIndex: page.pageIndex,
          sentenceEnd: SENT_END.test(t) && i === parts.length - 1,
        });
      }
    }
  }
  if (!stream.length) return [];

  const out: Chunk[] = [];
  let id = 0;
  let i = 0;
  while (i < stream.length) {
    let end = Math.min(stream.length, i + tgt);
    if (end < stream.length) {
      let probe = end;
      const limit = Math.min(stream.length, end + 20);
      while (probe < limit && !stream[probe - 1].sentenceEnd) probe++;
      if (probe < limit) end = probe;
    }
    const window = stream.slice(i, end);
    if (!window.length) break;

    // Group consecutive tokens sharing source bbox into lines
    const lineMap = new Map<string, { text: string[]; bbox: BBox }>();
    for (const w of window) {
      const key = `${w.pageIndex}:${w.bbox.join(",")}`;
      const cur = lineMap.get(key);
      if (cur) cur.text.push(w.tok);
      else lineMap.set(key, { text: [w.tok], bbox: w.bbox });
    }
    const lines = [...lineMap.values()].map((l) => ({
      text: l.text.join(" "),
      bbox: l.bbox,
    }));

    // Determine page assignment
    const pageCounts = new Map<number, number>();
    for (const w of window) pageCounts.set(w.pageIndex, (pageCounts.get(w.pageIndex) || 0) + 1);
    const dominantPage = [...pageCounts.entries()].sort((a, b) => b[1] - a[1])[0][0];
    const lastPage = window[window.length - 1].pageIndex;
    const pageIndex = lastPage !== window[0].pageIndex ? lastPage : dominantPage;

    const bboxToks = window.filter((w) => w.pageIndex === pageIndex).map((w) => w.bbox);
    const bbox = unionBBox(bboxToks.length ? bboxToks : window.map((w) => w.bbox));

    out.push({
      id: id++,
      docId,
      pageIndex,
      text: window.map((w) => w.tok).join(" "),
      bbox,
      // (Vybe fix: removed dead `lines.filter((_,idx)=>true)` from Codex's version)
      lines,
    });

    if (end >= stream.length) break;
    i += step;
  }

  // Dedupe by fingerprint
  const seen = new Set<string>();
  const deduped: Chunk[] = [];
  for (const ch of out) {
    const fp = ch.text.toLowerCase().replace(/\s+/g, " ").slice(0, 100);
    if (seen.has(fp)) continue;
    seen.add(fp);
    deduped.push(ch);
  }
  return deduped.map((c, idx) => ({ ...c, id: idx }));
}
