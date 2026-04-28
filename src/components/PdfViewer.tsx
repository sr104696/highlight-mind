import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { pdfjs } from "@/lib/rag/pdf-worker";
import type { BBox } from "@/lib/rag/types";

export interface PdfViewerHandle {
  highlight: (pageIndex: number, bbox: BBox) => void;
  clearHighlights: () => void;
}

interface Props {
  data: ArrayBuffer | null;
}

export const PdfViewer = forwardRef<PdfViewerHandle, Props>(function PdfViewer(
  { data },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const pageEls = useRef<HTMLDivElement[]>([]);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    if (!data || !mountRef.current) return;
    let cancelled = false;
    const container = mountRef.current;
    while (container.firstChild) container.removeChild(container.firstChild);
    pageEls.current = [];
    setNumPages(0);

    (async () => {
      const pdf = await pdfjs.getDocument({ data: data.slice(0) }).promise;
      if (cancelled) return;
      setNumPages(pdf.numPages);
      for (let p = 1; p <= pdf.numPages; p++) {
        const page = await pdf.getPage(p);
        // Bug #3: viewport already incorporates dpr; do not ctx.scale.
        const dpr = window.devicePixelRatio || 1;
        const baseScale = 1.4;
        const viewport = page.getViewport({ scale: baseScale * dpr });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${viewport.width / dpr}px`;
        canvas.style.height = `${viewport.height / dpr}px`;
        canvas.style.display = "block";

        const wrap = document.createElement("div");
        wrap.className =
          "relative mx-auto my-3 shadow-2xl rounded-sm overflow-hidden bg-card border border-border";
        wrap.style.width = `${viewport.width / dpr}px`;
        wrap.style.height = `${viewport.height / dpr}px`;
        wrap.dataset.page = String(p - 1);
        wrap.appendChild(canvas);
        container.appendChild(wrap);
        pageEls.current.push(wrap);

        const ctx = canvas.getContext("2d")!;
        await page.render({ canvasContext: ctx, viewport }).promise;
        if (cancelled) return;
      }
    })();

    return () => {
      cancelled = true;
      if (mountRef.current) {
        while (mountRef.current.firstChild)
          mountRef.current.removeChild(mountRef.current.firstChild);
      }
      pageEls.current = [];
    };
  }, [data]);

  useImperativeHandle(ref, () => ({
    highlight(pageIndex, bbox) {
      const el = pageEls.current[pageIndex];
      if (!el) return;
      el.querySelectorAll(".rag-highlight").forEach((n) => n.remove());
      const [x, y, w, h] = bbox;
      // Pad slightly for visual breathing room
      const pad = 0.004;
      const overlay = document.createElement("div");
      overlay.className = "rag-highlight";
      overlay.style.left = `${Math.max(0, (x - pad)) * 100}%`;
      overlay.style.top = `${Math.max(0, (y - pad)) * 100}%`;
      overlay.style.width = `${Math.min(1, w + pad * 2) * 100}%`;
      overlay.style.height = `${Math.min(1, h + pad * 2) * 100}%`;
      el.appendChild(overlay);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    clearHighlights() {
      for (const el of pageEls.current)
        el.querySelectorAll(".rag-highlight").forEach((n) => n.remove());
    },
  }));

  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-auto bg-secondary/30 px-4 py-2 scroll-smooth"
    >
      <div ref={mountRef} />
      {!data && (
        <div className="h-full flex items-center justify-center text-muted-foreground">
          <p className="text-sm">Upload a PDF to begin</p>
        </div>
      )}
      {data && numPages === 0 && (
        <div className="h-full flex items-center justify-center text-muted-foreground">
          <p className="text-sm animate-pulse">Rendering pages…</p>
        </div>
      )}
    </div>
  );
});