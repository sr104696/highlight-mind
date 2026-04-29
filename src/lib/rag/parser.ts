import { pdfjs } from "./pdf-worker";
import type { PageData, BBox } from "./types";

export async function loadPdf(data: ArrayBuffer) {
  return pdfjs.getDocument({ data }).promise;
}

export async function extractPages(
  pdf: Awaited<ReturnType<typeof loadPdf>>
): Promise<PageData[]> {
  const pages: PageData[] = [];
  const utilTransform = (pdfjs as any).Util?.transform;
  if (!utilTransform) {
    throw new Error("pdfjs Util.transform not found — check pdfjs-dist version compatibility");
  }
  for (let p = 1; p <= pdf.numPages; p++) {
    const page = await pdf.getPage(p);
    // Bug #8: use viewport.transform composed with item.transform to handle rotation.
    const viewport = page.getViewport({ scale: 1 });
    const W = viewport.width;
    const H = viewport.height;
    const tc = await page.getTextContent();
    const items: { text: string; bbox: BBox }[] = [];
    for (const it of tc.items as any[]) {
      const str: string = it.str;
      if (!str || !str.trim()) continue;
      const m = utilTransform(viewport.transform, it.transform);
      // Prefer vertical font-size component when non-negligible; fall back to
      // full vector magnitude only for rotated text.
      const fontHeight =
        (Math.abs(m[3]) > 0.5 ? Math.abs(m[3]) : Math.hypot(m[2], m[3])) || 10;
      const x = m[4];
      const y = m[5] - fontHeight; // top of glyph in viewport coords (top-left origin)
      // it.width is already in viewport units; horizontal scale is encoded in m[0..1].
      const scaleX = Math.hypot(m[0], m[1]) || 1;
      const w = (it.width ?? str.length * fontHeight * 0.5) * scaleX;
      const h = fontHeight;
      items.push({
        text: str,
        bbox: [
          Math.max(0, Math.min(1, x / W)),
          Math.max(0, Math.min(1, y / H)),
          Math.max(0, Math.min(1, w / W)),
          Math.max(0, Math.min(1, h / H)),
        ],
      });
    }
    pages.push({ pageIndex: p - 1, width: W, height: H, items });
  }
  return pages;
}