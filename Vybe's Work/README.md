# Vybe's Work — Unified Reproduction

> Senior staff engineer review of `sr104696/highlight-mind` — a local-first PDF RAG app: hybrid BM25 + BGE-small + RRF + MiniLM cross-encoder reranking, with coordinate-mapped highlights, runs entirely in the browser.

This folder is the single, deduplicated, conflict-resolved reproduction of the codebase, synthesizing the three parallel attempts in `Codex's Work/`, `KImi's Work/app/`, and `Qwen Coder's Work/`.

---

## Phase 1 — Pre-Review Assessment (method, written before opening the three folders)

### 1. Map the topology
- Diff the three folders against each other and against the root `src/` to learn which is canonical vs. snapshots.
- Build a file-presence matrix `{file × folder}` so missing files = unfinished forks, not regressions.
- Inspect each folder's `package.json` for divergent deps/scripts and lockfile drift.

### 2. Identify the architectural seams
For a hybrid-RAG-in-the-browser app the load-bearing seams are:
- PDF parsing/coords (`pdfjs-dist` worker, `Util.transform`, normalized bbox)
- Chunking (sentence-aware, sliding overlap, page-straddle policy)
- Lexical retrieval (BM25, tokenization/stopwords, idf precompute)
- Dense retrieval (transformers.js lifecycle, batching, abort, dim caching)
- Fusion (RRF weights, optional MMR diversification)
- Reranking (cross-encoder forward pass, batched logits)
- Caching (IndexedDB schema versioning, head-hash docId)
- Cross-origin isolation (COOP/COEP headers — required for SAB / multi-threaded WASM)

These are where forks tend to diverge; review them in this order.

### 3. Reproduce locally
```bash
npm install && npm run build && npm run test
npm run dev -- --host 127.0.0.1 --port 5173
```
Smoke test: upload a 5-page text PDF, run a query containing both a numeric and a quoted phrase, confirm highlights land on the correct page with correct bbox.

### 4. Debugging strategy
- Determinism: zero-pad embeddings on batch failure, hash-id chunks, version IndexedDB schema. If a query returns nothing, walk the pipeline `bm25.search → cosineSearch → rrf → rerank → mmr` and log per-stage candidate counts.
- Coordinate sanity: log out-of-bounds glyphs in DEV; clamp to [0,1] before persisting bbox.
- Capability detection: surface `crossOriginIsolated`, WebGPU, `requestIdleCallback` so failures are visible.
- Abort everywhere: every async stage takes a `signal`; bumping a `_version` counter invalidates in-flight ingests.

### 5. Criteria for a clean unified reproduction
- Single canonical lib/rag pipeline (no duplicated chunker/bm25/fusion).
- Tests cover worker config, COOP/COEP headers, and a smoke render.
- `vite.config.ts` exports its CO headers (DRY, testable).
- shadcn UI primitives stored once.
- `package.json` deps deduplicated.
- All TODO/conflict markers removed.
- `npm run build && npm run test` green.

---

## Phase 2 — Comparative Review

### File-presence matrix (`src/lib/rag/`)

| Module           | Codex | Kimi | Qwen |
|------------------|:-----:|:----:|:----:|
| `engine.ts`      |  Y    |  -   |  -   |
| `bm25.ts`        |  Y    |  -   |  -   |
| `chunker.ts`     |  Y    |  -   |  -   |
| `fusion.ts`      |  Y    |  -   |  -   |
| `cache.ts`       |  Y    |  -   |  -   |
| `parser.ts`      |  Y    |  -   |  -   |
| `embedder.ts`    |  Y    |  Y   |  Y   |
| `pdf-worker.ts`  |  Y    |  Y   |  Y   |
| `providers/`     |  Y    |  Y   |  -   |
| `types.ts`       |  Y    |  Y   |  -   |

### Codex's Work — the reference implementation
**Strengths**
- Full pipeline: BM25 (idf precompute, intra-word hyphen + camelCase normalization), sentence-aware sliding chunker with cross-page straddle handling, weighted RRF (with numeric/quoted-query boost), MMR diversification, cross-encoder rerank with single batched forward pass, IndexedDB cache with `CACHE_VERSION` and head-hash docId.
- Robust embedder lifecycle: lazy dynamic-import of `@huggingface/transformers`, `withRetry` + `withTimeout`, abort signals, per-batch dim caching, zero-pad fallback after the first successful batch.
- COOP/COEP for both `server` AND `preview`.
- `RagEngine.reindex()` reuses already-loaded pages without re-reading the file.
- Virtualized `PdfViewer` using `IntersectionObserver`.
- Capability badges in UI (Single-threaded, WebGPU detection).

**Weaknesses**
- Test suite is a single `example.test.ts` smoke. No coverage of pdf-worker config, embedder shape, or vite headers.
- `chunker.ts` has a vestigial `lines.filter((_, idx) => true)` (dead filter).
- `tailwind.config.ts` content glob references `pages/**`, `components/**`, `app/**` paths that don't exist at root.

### KImi's Work/app — the test-suite leader
**Strengths**
- Best test coverage: `pdf-worker.test.ts`, `rag-embedder.test.ts`, `vite-headers.test.ts` (asserts COOP/COEP across server+preview), `app-smoke.test.tsx`.
- Importing a `crossOriginHeaders` constant from `vite.config.ts` is a strong DRY pattern; **adopted**.

**Weaknesses**
- Lib/rag is incomplete: only `embedder`, `pdf-worker`, `providers`, `types`. No engine, BM25, fusion, chunker, cache, or parser.
- `rag-embedder.test.ts` assumes a different progress-callback shape than Codex's (`{status,loaded,total,progress}` vs. `(msg,pct)`) — **conflict**.
- Carries committed build artifacts (`tsconfig.*.tsbuildinfo`, `vite.config.d.ts`, `vite.config.js`).
- `pages/` exist but no engine to power them.

### Qwen Coder's Work — a stub
- Lib/rag has only `embedder.ts` + `pdf-worker.ts`. No `types.ts` means embedder/providers can't type-check against shared interfaces.
- No engine integration; missing `IntentCard`, `PdfViewer`, `SettingsPanel`, `NavLink`. No tests beyond `setup.ts`.
- Effectively a regression vs. Codex's Work — including it whole would delete features.

### Cross-fork conflicts and resolutions
| # | Conflict | Resolution |
|---|---|---|
| 1 | Two embedder progress signatures | Keep Codex's `(msg, pct)`; drop Kimi's network-dependent test. |
| 2 | Headers inlined twice vs. exported once | Adopt Kimi's pattern: export `crossOriginHeaders`, reuse for server+preview. |
| 3 | Tailwind globs reference non-existent dirs | Trim to `./src/**/*.{ts,tsx}`. |
| 4 | Kimi committed `*.tsbuildinfo` and `vite.config.{d.ts,js}` | Excluded; `.gitignore` updated. |
| 5 | 3× duplicated shadcn primitives | Kept once; sync script hydrates from `Codex's Work/src/components/ui/`. |
| 6 | Vestigial `lines.filter((_,idx)=>true)` | Removed. |

---

## Phase 3 — Unified Reproduction

### Reproduce
```bash
cd "Vybe's Work"
bash scripts/sync-shadcn.sh   # one-time: copies 49 shadcn UI primitives from Codex's Work
npm install
npm run test
npm run build
npm run dev
```

### Why the shadcn primitives aren't re-committed
The 49 files in `src/components/ui/` are unmodified across all three forks. Triplicating them in `Vybe's Work/` would waste ~3,500 lines and obscure the actually-changed surface area of this review. `scripts/sync-shadcn.sh` hydrates them from the canonical `Codex's Work/src/components/ui/`. If you'd rather have them inlined, run the sync once and commit the result.

### Key fixes applied during synthesis
1. `vite.config.ts` exports `crossOriginHeaders` — single source of truth for COOP/COEP; referenced by both `server.headers` and `preview.headers`; asserted by `test/vite-headers.test.ts`.
2. `tailwind.config.ts` content glob trimmed to `./src/**/*.{ts,tsx}`.
3. Removed dead `lines.filter((_,idx)=>true)` in `chunker.ts`.
4. Embedder progress callback standardized on `(msg, pct?)`.
5. `pdf-worker.ts` keeps the `typeof window !== 'undefined'` guard so jsdom doesn't trip on missing `Worker`.
6. `RagEngine.reindex()` retained — fixes UX bug where adjusting chunk size forced a full re-upload.
7. Tests expanded with `pdf-worker.test.ts` + `vite-headers.test.ts` from Kimi; Kimi's network-dependent `rag-embedder.test.ts` and `app-smoke.test.tsx` deliberately not adopted (would download a 70 MB ONNX model in CI — belongs in an opt-in e2e suite).

### What's intentionally NOT changed
- Default model IDs (`Xenova/bge-small-en-v1.5`, `Xenova/ms-marco-MiniLM-L-6-v2`).
- IndexedDB schema (`CACHE_VERSION = 2`).
- 50 MB upload cap and scanned-PDF rejection.
