# Highlight Mind — Integrated App

A self-contained Vite + React + TypeScript app that fuses the existing `highlight-mind` scaffold with ideas drawn from the five OSS projects ingested under `gitingest outputs/`:

| Source | Inspiration borrowed |
| --- | --- |
| **Stirling-Tools / stirling-pdf** | PDF viewer + multi-color persistent highlights |
| **Unstructured-IO / unstructured** | Section / element extraction view |
| **freedmand / semantra** | Chunk-and-rank semantic-style search UX |
| **infiniflow / RAGFlow** | Retrieval-augmented chat over user docs + references |
| **opendatalab / MinerU** | Structured text extraction from PDFs |

## Features

1. **Reference Library** — full-text search across all five gitingest `.md` corpora with highlighted snippets and a section tree.
2. **PDF Highlighter** — drop in any PDF, render it client-side with `pdfjs-dist`, drag to add multi-color highlights, persisted in `localStorage`.
3. **RAG Search** — BM25-style chunked retrieval over the loaded PDF *and* the reference corpus, with answer-style snippet stitching.
4. **Doc Extractor** — Unstructured/MinerU-style outline of headings, code blocks and paragraphs from any uploaded PDF.

## Run locally

```bash
cd "Vybe's Work/integrated-app"
npm install
npm run sync-references   # copies ../../gitingest outputs/*.md -> public/references/
npm run dev
```

## Layout

```
integrated-app/
├─ public/references/         # synced gitingest .md files (gitignored)
├─ scripts/copy-references.mjs
├─ src/
│  ├─ pages/                  # Home, ReferenceLibrary, PdfHighlighter, RagSearch, Extractor
│  ├─ components/             # Layout, SearchBar, Highlightable
│  ├─ lib/                    # rag.ts (BM25), references.ts, pdf.ts, storage.ts
│  └─ App.tsx, main.tsx, index.css
└─ vite.config.ts, tailwind.config.ts, tsconfig*.json, package.json
```

## Why a self-contained subfolder?

The parent repo has parallel agent workspaces (`Codex's Work/`, `Kimi's Work/`, `Qwen Coder's Work/`, `Vybe's Work/`). Keeping this build under `Vybe's Work/integrated-app/` makes it independently runnable without colliding with the root scaffold or other agents' forks.
