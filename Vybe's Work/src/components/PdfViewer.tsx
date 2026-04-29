import { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from "react";
import { pdfjs } from "@/lib/rag/pdf-worker";
import type { BBox } from "@/lib/rag/types";

export interface PdfViewerHandle {
  highlight: (pageIndex: number, bbox: BBox) => void;
  clearHighlights: () => void;
  goToPage: (pageIndex: number) => void;
}

interface Props {
  data: ArrayBuffer | null;
  docId?: string;
}

interface PageSlot {
  wrap: HTMLDivElement;
  rendered: boolean;
  rendering: boolean;
  page: any;
  viewport: any;
  dpr: number;
}

export const PdfViewer = memo(
  forwardRef<PdfViewerHandle, Props>(function PdfViewer({ data, docId }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mountRef = useRef<HTMLDivElement>(null);
    const slots = useRef<PageSlot[]>([]);
    const [numPages, setNumPages] = useState(0);
    const lastDocIdRef = useRef<string | undefined>(undefined);
    const lastDataRef = useRef<ArrayBuffer | null>(null);

    useEffect(() => {
      if (!data || !mountRef.current) return;
      if (docId && docId === lastDocIdRef.current && data === lastDataRef.current) return;
      lastDocIdRef.current = docId;
      lastDataRef.current = data;
      let cancelled = false;
      const container = mountRef.current;
      while (container.firstChild) container.removeChild(container.firstChild);
      slots.current = [];
      setNumPages(0);

      (async () => {
        const bytes = new Uint8Array(data.slice(0));
        const cMapUrl = new URL("pdfjs-dist/cmaps/", import.meta.url).href;
        const pdf = await pdfjs.getDocument({
          data: bytes,
          isEvalSupported: false,
          cMapUrl,
          cMapPacked: true,
        }).promise;
        if (cancelled) return;
        setNumPages(pdf.numPages);
        const dpr = window.devicePixelRatio || 1;
        const baseScale = 1.4;

        for (let p = 1; p <= pdf.numPages; p++) {
          const page = await pdf.getPage(p);
          if (cancelled) return;
          const viewport = page.getViewport({ scale: baseScale * dpr });
          const wrap = document.createElement("div");
          wrap.className =
            "relative mx-auto my-3 shadow-2xl rounded-sm overflow-hidden bg-card border border-border";
          wrap.style.width = `${viewport.width / dpr}px`;
          wrap.style.height = `${viewport.height / dpr}px`;
          wrap.dataset.page = String(p - 1);
          container.appendChild(wrap);
          slots.current.push({ wrap, rendered: false, rendering: false, page, viewport, dpr });
        }

        const io = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              const idx = slots.current.findIndex((s) => s.wrap === e.target);
              if (idx < 0) continue;
              const slot = slots.current[idx];
              if (e.isIntersecting && !slot.rendered && !slot.rendering) {
                slot.rendering = true;
                renderSlot(slot).finally(() => { slot.rendering = false; slot.rendered = true; });
              }
            }
          },
          { root: containerRef.current, rootMargin: "200% 0px" }
        );
        for (const s of slots.current) io.observe(s.wrap);
      })();

      async function renderSlot(slot: PageSlot) {
        if (cancelled) return;
        const canvas = document.createElement("canvas");
        canvas.width = slot.viewport.width;
        canvas.height = slot.viewport.height;
        canvas.style.width = `${slot.viewport.width / slot.dpr}px`;
        canvas.style.height = `${slot.viewport.height / slot.dpr}px`;
        canvas.style.display = "block";
        slot.wrap.appendChild(canvas);
        const ctx = canvas.getContext("2d")!;
        try {
          await slot.page.render({ canvas, canvasContext: ctx, viewport: slot.viewport }).promise;
        } catch (e) {
          console.warn("[PdfViewer] render failed", e);
        }
      }

      return () => {
        cancelled = true;
        if (mountRef.current) {
          while (mountRef.current.firstChild) mountRef.current.removeChild(mountRef.current.firstChild);
        }
        slots.current = [];
      };
    }, [data, docId]);

    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        const root = containerRef.current;
        if (!root) return;
        if (e.key === "PageDown" || e.key === "ArrowDown") {
          root.scrollBy({ top: root.clientHeight * 0.9, behavior: "smooth" });
        } else if (e.key === "PageUp" || e.key === "ArrowUp") {
          root.scrollBy({ top: -root.clientHeight * 0.9, behavior: "smooth" });
        }
      };
      const root = containerRef.current;
      root?.addEventListener("keydown", onKey);
      return () => root?.removeEventListener("keydown", onKey);
    }, []);

    useImperativeHandle(ref, () => ({
      highlight(pageIndex, bbox) {
        for (const s of slots.current) s.wrap.querySelectorAll(".rag-highlight").forEach((n) => n.remove());
        const slot = slots.current[pageIndex];
        if (!slot) return;
        if (!slot.rendered && !slot.rendering) slot.rendering = true;
        const [x, y, w, h] = bbox;
        const pad = 0.004;
        const overlay = document.createElement("div");
        overlay.className = "rag-highlight";
        overlay.setAttribute("role", "region");
        overlay.setAttribute("aria-label", `Search match on page ${pageIndex + 1}`);
        overlay.style.left = `${Math.max(0, x - pad) * 100}%`;
        overlay.style.top = `${Math.max(0, y - pad) * 100}%`;
        overlay.style.width = `${Math.min(1, w + pad * 2) * 100}%`;
        overlay.style.height = `${Math.min(1, h + pad * 2) * 100}%`;
        slot.wrap.appendChild(overlay);
        const root = containerRef.current;
        const dist = root ? Math.abs(slot.wrap.offsetTop - root.scrollTop) : 0;
        const behavior: ScrollBehavior = root && dist > root.clientHeight * 2 ? "auto" : "smooth";
        overlay.scrollIntoView({ behavior, block: "center" });
      },
      clearHighlights() {
        for (const s of slots.current) s.wrap.querySelectorAll(".rag-highlight").forEach((n) => n.remove());
      },
      goToPage(pageIndex) {
        const slot = slots.current[pageIndex];
        slot?.wrap.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    }));

    return (
      <div
        ref={containerRef}
        tabIndex={0}
        className="h-full overflow-y-auto bg-secondary/30 px-4 py-2 scroll-smooth flex flex-col [scrollbar-gutter:stable] outline-none focus:ring-1 focus:ring-primary/30"
      >
        <div ref={mountRef} />
        {!data && (
          <div className="flex-1 flex items-center justify-center text-muted-foreground" aria-live="polite">
            <p className="text-sm">Upload a PDF to begin</p>
          </div>
        )}
        {data && numPages === 0 && (
          <div className="flex-1 flex items-center justify-center text-muted-foreground" aria-live="polite">
            <p className="text-sm animate-pulse">Rendering pages…</p>
          </div>
        )}
      </div>
    );
  })
);
