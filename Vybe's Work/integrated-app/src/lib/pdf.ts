// Thin wrapper around pdfjs-dist for in-browser rendering + text extraction.
import * as pdfjsLib from 'pdfjs-dist';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export interface PdfPageText {
  page: number;
  text: string;
}

export async function loadPdf(data: ArrayBuffer) {
  return await pdfjsLib.getDocument({ data }).promise;
}

export async function extractText(
  doc: Awaited<ReturnType<typeof loadPdf>>
): Promise<PdfPageText[]> {
  const pages: PdfPageText[] = [];
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const tc = await page.getTextContent();
    const text = tc.items.map((it: any) => ('str' in it ? it.str : '')).join(' ');
    pages.push({ page: i, text });
  }
  return pages;
}

export interface RenderResult {
  width: number;
  height: number;
}

export async function renderPageToCanvas(
  doc: Awaited<ReturnType<typeof loadPdf>>,
  pageNumber: number,
  canvas: HTMLCanvasElement,
  scale = 1.4
): Promise<RenderResult> {
  const page = await doc.getPage(pageNumber);
  const viewport = page.getViewport({ scale });
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext('2d')!;
  await page.render({ canvasContext: ctx, viewport, canvas }).promise;
  return { width: viewport.width, height: viewport.height };
}

export interface OutlineEntry {
  level: number;
  kind: 'heading' | 'code' | 'list' | 'paragraph';
  text: string;
  page: number;
}

/** Unstructured / MinerU-inspired naive structural extraction from page text. */
export function extractOutline(pages: PdfPageText[]): OutlineEntry[] {
  const out: OutlineEntry[] = [];
  for (const p of pages) {
    const lines = p.text.split(/(?<=[.!?])\s+|\n+/);
    for (const raw of lines) {
      const line = raw.trim();
      if (line.length < 3) continue;
      const isShort = line.length < 80;
      const isAllCaps = isShort && line === line.toUpperCase() && /[A-Z]/.test(line);
      const isNumberedHeading = /^(\d+(\.\d+)*)\s+[A-Z]/.test(line) && isShort;
      const looksCode = /[{};=<>]/.test(line) && /[a-zA-Z]\(/.test(line);
      const looksList = /^([•\-*]|\d+\.)\s+/.test(line);
      let kind: OutlineEntry['kind'] = 'paragraph';
      let level = 0;
      if (isAllCaps || isNumberedHeading) {
        kind = 'heading';
        level = isNumberedHeading
          ? (line.match(/^(\d+(\.\d+)*)/)?.[1].split('.').length || 1)
          : 1;
      } else if (looksCode) kind = 'code';
      else if (looksList) kind = 'list';
      out.push({ level, kind, text: line, page: p.page });
    }
  }
  return out;
}
