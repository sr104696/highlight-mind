import * as pdfjs from "pdfjs-dist";
// Vite resolves this to a hashed asset URL
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Centralize worker setup; guard for non-browser (vitest/jsdom).
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
}

export { pdfjs };
