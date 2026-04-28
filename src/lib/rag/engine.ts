import { extractPages, loadPdf } from "./parser";
import { slidingChunks } from "./chunker";
import { BM25, tokenize } from "./bm25";
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
    // Bug #5: keep a pristine copy; pdfjs may detach the buffer it consumes.
    const buf = await file.arrayBuffer();
    this.pdfBytes = buf.slice(0);
    this.docId = `${file.name}-${file.size}`;
    const pdf = await loadPdf(buf);
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
    // Bug #6: O(1) id lookup.
    const byId = new Map(this.chunks.map((c) => [c.id, c]));

    const lex = this.bm25.search(query, 20);
    const qv = await embedQuery(query);
    const semRaw = cosineSearch(qv, this.chunks, 20);
    const sem: RankedChunk[] = semRaw
      .map((s) => {
        const c = byId.get(s.id);
        return c ? { ...c, score: s.score } : null;
      })
      .filter(Boolean) as RankedChunk[];

    const fused = rrf([lex, sem]).slice(0, 20);
    if (!fused.length) return [];
    const ceScores = await rerank(query, fused.map((f) => f.text));
    const reranked = fused
      .map((f, i) => ({ ...f, score: ceScores[i] ?? f.score }))
      .sort((a, b) => b.score - a.score)
      .slice(0, k);

    // Bug #7: pick the best line per hit by query-token overlap.
    const qToks = new Set(tokenize(query));
    return reranked.map((r) => {
      if (!r.lines?.length) return r;
      let best = r.lines[0];
      let bestScore = -1;
      for (const ln of r.lines) {
        const lt = tokenize(ln.text);
        const overlap = lt.filter((t) => qToks.has(t)).length;
        if (overlap > bestScore) {
          bestScore = overlap;
          best = ln;
        }
      }
      return { ...r, bbox: best.bbox };
    });
  }
}