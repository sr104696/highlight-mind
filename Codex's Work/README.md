# keyless/hybrid-rag

A local-first PDF research assistant. Hybrid retrieval (BM25 + BGE-small semantic) fused via Reciprocal Rank Fusion and reranked with a MiniLM cross-encoder. Coordinate-mapped highlights jump you to the exact glyphs that matched. **Everything runs in your browser — no API keys, no uploads.**

## Stack

- React 18 + Vite 5 + TypeScript
- pdf.js for PDF parsing & rendering
- @huggingface/transformers (transformers.js) for embeddings + reranking
- IndexedDB vector cache (opt-in)
- Tailwind + shadcn/ui

## Run

```bash
npm install
npm run dev
```

## Notes

- COOP/COEP headers are set in `vite.config.ts` to enable `SharedArrayBuffer` and multi-threaded WASM. The UI shows a "Single-threaded" badge when isolation is unavailable (e.g. inside iframes without proper headers).
- First load downloads ~70MB of model weights, cached in `CacheStorage` thereafter.
- Max file size: 50 MB. Scanned PDFs (no extractable text) are rejected with a clear error.
