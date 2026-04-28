import { extractPages, loadPdf } from "./parser";
import { slidingChunks } from "./chunker";
import { BM25 } from "./bm25";
import { embedTexts, embedQuery, rerank, ProgressCb } from "./embedder";
import { rrf, cosineSearch } from "./fusion";
import type { Chunk, PageData, RankedChunk } from "./types";

export class RagEngine {
  pages: PageData[] = [];
  chunks: Chunk[] = [];
  private bm25: BM25 | null = null;
  docId = "";
  pdfBytes: ArrayBuffer | null = null;

  async ingest(file: File, onProgress: ProgressCb) {
    onProgress("Reading PDF…", 0);
    const buf = await file.arrayBuffer();
    this.pdfBytes = buf;
    this.docId = `${file.name}-${file.size}`;
    const pdf = await loadPdf(buf.slice(0));
    onProgress(`Parsing ${pdf.numPages} pages…`, 5);
    this.pages = await extractPages(pdf);
    onProgress("Chunking…", 25);
    this.chunks = slidingChunks(this.pages, this.docId);
    onProgress(`Indexing BM25 (${this.chunks.length} chunks)…`, 35);
    this.bm25 = new BM25(this.chunks);
    onProgress("Computing semantic embeddings…", 45);
    const vecs = await embedTexts(
      this.chunks.map((c) => c.text),
      (m, p) => onProgress(m, 45 + (p ?? 0) * 0.5)
    );
    for (let i = 0; i < this.chunks.length; i++) this.chunks[i].vector = vecs[i];
    onProgress("Ready", 100);
  }

  async search(query: string, k = 5): Promise<RankedChunk[]> {
    if (!this.bm25 || !this.chunks.length) return [];
    const lex = this.bm25.search(query, 20);
    const qv = await embedQuery(query);
    const sem = cosineSearch(qv, this.chunks, 20).map((s) => ({
      ...this.chunks[this.chunks.findIndex((c) => c.id === s.id)],
      score: s.score,
    }));
    const fused = rrf([lex, sem]).slice(0, 20);
    if (fused.length === 0) return [];
    const scores = await rerank(query, fused.map((f) => f.text));
    const reranked = fused
      .map((f, i) => ({ ...f, score: scores[i] ?? f.score }))
      .sort((a, b) => b.score - a.score)
      .slice(0, k);
    return reranked;
  }
}