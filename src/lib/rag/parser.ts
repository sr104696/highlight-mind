import * as pdfjs from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import type { PageData, BBox } from "./types";

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

export async function loadPdf(data: ArrayBuffer) {
  return pdfjs.getDocument({ data }).promise;
}

export async function extractPages(
  pdf: Awaited<ReturnType<typeof loadPdf>>
): Promise<PageData[]> {
  const pages: PageData[] = [];
  for (let p = 1; p <= pdf.numPages; p++) {
    const page = await pdf.getPage(p);
    const viewport = page.getViewport({ scale: 1 });
    const W = viewport.width;
    const H = viewport.height;
    const tc = await page.getTextContent();
    const items: { text: string; bbox: BBox }[] = [];
    for (const it of tc.items as any[]) {
      const str: string = it.str;
      if (!str || !str.trim()) continue;
      // pdf.js transform: [a,b,c,d,e,f]; e,f = position in PDF coords (origin bottom-left)
      const tr = it.transform as number[];
      const x = tr[4];
      const yPdf = tr[5];
      const fontHeight = Math.hypot(tr[2], tr[3]) || Math.abs(tr[3]) || 10;
      const w = it.width ?? fontHeight * str.length * 0.5;
      const h = it.height ?? fontHeight;
      // Normalize, flip Y to top-left origin
      const nx = x / W;
      const ny = (H - yPdf - h) / H;
      const nw = w / W;
      const nh = h / H;
      items.push({
        text: str,
        bbox: [
          Math.max(0, nx),
          Math.max(0, ny),
          Math.min(1, nw),
          Math.min(1, nh),
        ],
      });
    }
    pages.push({ pageIndex: p - 1, width: W, height: H, items });
  }
  return pages;
}