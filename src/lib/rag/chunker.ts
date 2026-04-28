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

export function slidingChunks(
  pages: PageData[],
  docId: string,
  targetTokens = 180,
  overlapRatio = 0.15
): Chunk[] {
  const overlap = Math.floor(targetTokens * overlapRatio);
  const step = targetTokens - overlap;
  const out: Chunk[] = [];
  let id = 0;
  for (const page of pages) {
    const toks: { tok: string; bbox: BBox }[] = [];
    for (const it of page.items) {
      const parts = it.text.split(/\s+/).filter(Boolean);
      for (const t of parts) toks.push({ tok: t, bbox: it.bbox });
    }
    if (!toks.length) continue;
    let i = 0;
    while (i < toks.length) {
      const window = toks.slice(i, i + targetTokens);
      if (!window.length) break;
      // Bug #7: group consecutive tokens sharing source bbox into lines.
      const lineMap = new Map<string, { text: string[]; bbox: BBox }>();
      for (const w of window) {
        const key = w.bbox.join(",");
        const cur = lineMap.get(key);
        if (cur) cur.text.push(w.tok);
        else lineMap.set(key, { text: [w.tok], bbox: w.bbox });
      }
      const lines = [...lineMap.values()].map((l) => ({
        text: l.text.join(" "),
        bbox: l.bbox,
      }));
      out.push({
        id: id++,
        docId,
        pageIndex: page.pageIndex,
        text: window.map((w) => w.tok).join(" "),
        bbox: unionBBox(window.map((w) => w.bbox)),
        lines,
      });
      if (i + targetTokens >= toks.length) break;
      i += step;
    }
  }
  return out;
}