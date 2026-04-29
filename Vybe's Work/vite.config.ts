import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Cross-origin isolation enables SharedArrayBuffer (multi-threaded WASM) for
 * @huggingface/transformers. Exported so test/vite-headers.test.ts can assert
 * the same constant is used for both server and preview — single source of truth.
 */
export const crossOriginHeaders = {
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Embedder-Policy": "require-corp",
} as const;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: { ...crossOriginHeaders },
    hmr: { overlay: false },
  },
  preview: {
    host: "::",
    port: 4173,
    headers: { ...crossOriginHeaders },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-pdfjs": ["pdfjs-dist"],
          "vendor-transformers": ["@huggingface/transformers"],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ["@huggingface/transformers", "pdfjs-dist"],
  },
}));
