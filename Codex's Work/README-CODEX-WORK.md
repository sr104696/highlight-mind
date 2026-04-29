# Codex's Work

This folder contains a self-contained snapshot of the updated app source needed to reproduce the project state from this branch.

## Included
- Full source tree (excluding `.git`, `node_modules`, and `dist`).
- All code updates from the latest fixes.

## Reproduce
From this folder:

```bash
npm install
npm run build
npm run test
npm run dev -- --host 127.0.0.1 --port 5173
```

## Notes
- Runtime cross-origin isolation headers are configured in `vite.config.ts` for both dev and preview.
- The RAG engine reindex and embedder fallback fixes are included.


## Binary-files note
- Binary files are intentionally excluded to keep this snapshot compatible with text-only patch/review pipelines.
- Recreate any omitted binaries (for example, favicon assets) from the root project if needed.
