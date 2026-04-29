import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const crossOriginHeaders = {
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Embedder-Policy": "require-corp"
};

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  server: { host: "::", port: 5173, headers: crossOriginHeaders, hmr: { overlay: false } },
  preview: { host: "::", port: 4173, headers: crossOriginHeaders },
  build: {
    rollupOptions: {
      output: { manualChunks: { pdfjs: ["pdfjs-dist"], rag: ["./src/lib/rag/embedder", "./src/lib/rag/engine"] } }
    },
    chunkSizeWarningLimit: 1500
  },
  test: { environment: "jsdom", setupFiles: "./src/test/setup.ts" }
});
