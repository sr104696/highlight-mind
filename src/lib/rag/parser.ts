import { pdfjs } from "./pdf-worker";
import type { PageData, BBox } from "./types";

export async function loadPdf(data: ArrayBuffer) {
  const cMapUrl = new URL("pdfjs-dist/cmaps/", import.meta.url).href;
  return pdfjs.getDocument({
    data,
    isEvalSupported: false,
    cMapUrl,
    cMapPacked: true,
  }).promise;
}

const ZW_RE = /[\u00AD\u200B\u200C\u200D\u2060\uFEFF]/g;

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
    const viewport = page.getViewport({ scale: 1 });
    const W = viewport.width;
    const H = viewport.height;
    const tc = await page.getTextContent({ includeMarkedContent: true } as any);
    const items: { text: string; bbox: BBox; eol?: boolean }[] = [];

    for (const it of tc.items as any[]) {
      if (!it || typeof it.str !== "string") continue;
      const str = it.str.replace(ZW_RE, "");
      if (!str || !str.trim()) {
        if (it.hasEOL && items.length) items[items.length - 1].eol = true;
        continue;
      }
      const m = utilTransform(viewport.transform, it.transform);
      const fontHeight =
        (Math.abs(m[3]) > 0.5 ? Math.abs(m[3]) : Math.hypot(m[2], m[3])) || 10;
      const x = m[4];
      const y = m[5] - fontHeight;
      const scaleX = Math.hypot(m[0], m[1]) || 1;
      const w = Math.max(0, (it.width ?? str.length * fontHeight * 0.5) * scaleX);
      const h = fontHeight;
      if (process.env.NODE_ENV !== "production" && (x < -1 || x > W + 1 || y < -1 || y > H + 1)) {
        // eslint-disable-next-line no-console
        console.warn("[parser] out-of-bounds glyph", { x, y, W, H, str: str.slice(0, 20) });
      }
      items.push({
        text: str,
        bbox: [
          Math.max(0, Math.min(1, x / W)),
          Math.max(0, Math.min(1, y / H)),
          Math.max(0, Math.min(1, w / W)),
          Math.max(0, Math.min(1, h / H)),
        ],
        eol: !!it.hasEOL,
      });
    }

    // Widget annotation values (form fields)
    try {
      const annots = await page.getAnnotations();
      for (const a of annots as any[]) {
        if (a?.subtype === "Widget" && a.fieldValue && typeof a.fieldValue === "string") {
          const v = a.fieldValue.replace(ZW_RE, "").trim();
          if (!v) continue;
          const r = a.rect; // [x1,y1,x2,y2] in PDF coords
          if (!r || r.length !== 4) continue;
          const [x1, y1, x2, y2] = r;
          const x = Math.min(x1, x2);
          const y = H - Math.max(y1, y2);
          const w = Math.abs(x2 - x1);
          const h = Math.abs(y2 - y1);
          items.push({
            text: v,
            bbox: [
              Math.max(0, Math.min(1, x / W)),
              Math.max(0, Math.min(1, y / H)),
              Math.max(0, Math.min(1, w / W)),
              Math.max(0, Math.min(1, h / H)),
            ],
          });
        }
      }
    } catch {
      /* annotations optional */
    }

    // Reading order: top→bottom by Y bands, then left→right within band.
    items.sort((a, b) => {
      const ay = a.bbox[1], by = b.bbox[1];
      const band = Math.max(a.bbox[3], b.bbox[3]) * 0.5;
      if (Math.abs(ay - by) > band) return ay - by;
      return a.bbox[0] - b.bbox[0];
    });

    pages.push({ pageIndex: p - 1, width: W, height: H, items });
  }

  const empty = pages.filter((p) => p.items.length === 0).length;
  if (pages.length > 0 && empty === pages.length) {
    throw new Error(
      "No extractable text — is this a scanned PDF? OCR is not supported."
    );
  }
  if (empty > 0) {
    // eslint-disable-next-line no-console
    console.warn(`[parser] ${empty}/${pages.length} pages have no text (likely scanned).`);
  }
  return pages;
}
