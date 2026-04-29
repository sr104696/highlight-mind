import { extractPages, loadPdf } from "./parser";
import { slidingChunks } from "./chunker";
import { BM25, tokenize } from "./bm25";
import { getEmbedder, type ProgressCb } from "./embedder";
import { defaultProvider, type EmbeddingProvider } from "./providers";
import { rrf, cosineSearch, mmr } from "./fusion";
import { getCached, putCached, hashHead } from "./cache";
import type { Chunk, PageData, RankedChunk } from "./types";

export interface IngestOptions {
  targetTokens?: number;
  overlapRatio?: number;
  useCache?: boolean;
}

export interface SearchOptions {
  retrievalK?: number;
  topK?: number;
  applyMMR?: boolean;
  mmrLambda?: number;
}

export class RagEngine {
  pages: PageData[] = [];
  chunks: Chunk[] = [];
  private bm25: BM25 | null = null;
  docId = "";
  pdfBytes: ArrayBuffer | null = null;
  private _version = 0;
  private abortCtrl: AbortController | null = null;
  provider: EmbeddingProvider = defaultProvider;

  abort() {
    this.abortCtrl?.abort();
  }

  async ingest(file: File, onProgress: ProgressCb, opts: IngestOptions = {}) {
    // Reset state immediately
    this.abortCtrl?.abort();
    this.abortCtrl = new AbortController();
    const signal = this.abortCtrl.signal;
    const myVersion = ++this._version;
    this.pages = [];
    this.chunks = [];
    this.bm25 = null;
    this.pdfBytes = null;

    const isStale = () => this._version !== myVersion || signal.aborted;

    onProgress("Reading PDF…", 0);
    const buf = await file.arrayBuffer();
    this.pdfBytes = buf.slice(0);
    const headHash = await hashHead(file);
    this.docId = `${file.name}-${file.size}-${headHash}`;

    // Cache check
    if (opts.useCache) {
      const cached = await getCached(this.docId);
      if (cached && !isStale()) {
        this.chunks = cached.chunks;
        // Rebuild BM25 index (cheap)
        this.bm25 = new BM25(this.chunks);
        // Synthesize minimal page metadata
        this.pages = cached.pages.map((p) => ({ ...p, items: [] }));
        onProgress("Loaded from cache", 100);
        return;
      }
    }

    const pdf = await loadPdf(buf);
    if (isStale()) return;
    onProgress(`Parsing ${pdf.numPages} pages…`, 5);
    this.pages = await extractPages(pdf);
    if (isStale()) return;

    onProgress("Chunking…", 25);
    this.chunks = slidingChunks(this.pages, this.docId, opts.targetTokens, opts.overlapRatio);
    if (this.chunks.length === 0) {
      throw new Error(
        "No text could be extracted from this PDF. It may be a scanned image. " +
        "Run it through an OCR tool (e.g. Adobe Acrobat, Tesseract) and re-upload."
      );
    }
    // Replacement-character corruption check
    let totalChars = 0, replacementChars = 0;
    for (const c of this.chunks) {
      totalChars += c.text.length;
      replacementChars += (c.text.match(/\uFFFD/g)?.length ?? 0);
    }
    if (totalChars > 0 && replacementChars / totalChars > 0.2) {
      console.warn("[RagEngine] >20% replacement characters — font encoding may be non-standard");
    }

    onProgress(`Indexing BM25 (${this.chunks.length} chunks)…`, 35);
    this.bm25 = new BM25(this.chunks);

    onProgress("Loading embedding model…", 42);
    await getEmbedder((m, p) => onProgress(m, 42 + (p ?? 0) * 0.03));
    if (isStale()) return;

    onProgress("Computing semantic embeddings…", 45);
    const vecs = await this.provider.embedTexts(
      this.chunks.map((c) => c.text),
      (m, p) => onProgress(m, 45 + (p ?? 0) * 0.5),
      signal
    );
    if (isStale()) return;
    for (let i = 0; i < this.chunks.length; i++) this.chunks[i].vector = vecs[i];

    if (opts.useCache) {
      await putCached({
        docId: this.docId,
        chunks: this.chunks,
        pages: this.pages.map((p) => ({ pageIndex: p.pageIndex, width: p.width, height: p.height })),
      });
    }

    onProgress("Ready", 100);
  }

  /** Re-index from already-loaded pages without re-reading the file. */
  async reindex(onProgress: ProgressCb, opts: IngestOptions = {}) {
    if (!this.pages.length) throw new Error("No document loaded");
    this.abortCtrl?.abort();
    this.abortCtrl = new AbortController();
    const signal = this.abortCtrl.signal;
    const needReparse = this.pages.every((p) => !p.items || p.items.length === 0);
    if (needReparse) {
      if (!this.pdfBytes) throw new Error("Cannot re-index: original PDF bytes unavailable");
      onProgress("Re-parsing PDF…", 5);
      const pdf = await loadPdf(this.pdfBytes.slice(0));
      this.pages = await extractPages(pdf);
    }
    onProgress("Re-chunking…", 10);
    this.chunks = slidingChunks(this.pages, this.docId, opts.targetTokens, opts.overlapRatio);
    if (this.chunks.length === 0) {
      throw new Error("Re-index produced 0 chunks (no extractable text).");
    }
    onProgress("Indexing BM25…", 30);
    this.bm25 = new BM25(this.chunks);
    onProgress("Embedding…", 40);
    const vecs = await this.provider.embedTexts(
      this.chunks.map((c) => c.text),
      (m, p) => onProgress(m, 40 + (p ?? 0) * 0.6),
      signal
    );
    for (let i = 0; i < this.chunks.length; i++) this.chunks[i].vector = vecs[i];
    onProgress("Ready", 100);
  }

  async search(query: string, opts: SearchOptions = {}): Promise<RankedChunk[]> {
    const retrievalK = opts.retrievalK ?? 20;
    const topK = opts.topK ?? 5;
    const applyMMR = opts.applyMMR ?? true;
    if (!this.bm25 || !this.chunks.length) return [];

    const byId = new Map(this.chunks.map((c) => [c.id, c]));
    const lex = this.bm25.search(query, retrievalK);
    const qv = await this.provider.embedQuery(query);
    const semRaw = cosineSearch(qv, this.chunks, retrievalK);
    const sem: RankedChunk[] = semRaw
      .map((s) => {
        const c = byId.get(s.id);
        return c ? { ...c, score: s.score } : null;
      })
      .filter(Boolean) as RankedChunk[];

    // BM25 boost when query has digits or quoted terms
    const hasNumeric = /\d/.test(query);
    const hasQuoted = /["']/.test(query);
    const weights = hasNumeric || hasQuoted ? [1.6, 1.0] : [1.0, 1.0];

    const fused = rrf([lex, sem], 60, weights).slice(0, retrievalK);
    if (!fused.length) return [];

    let candidates: RankedChunk[] = fused;
    try {
      const ceScores = await this.provider.rerank(query, fused.map((f) => f.text));
      if (ceScores.length === fused.length) {
        candidates = fused
          .map((f, i) => ({ ...f, score: ceScores[i] }))
          .sort((a, b) => b.score - a.score);
      }
    } catch (e) {
      console.warn("[engine] rerank failed, using RRF order:", e);
    }

    // Normalize scores to [0,1]
    if (candidates.length) {
      const ss = candidates.map((c) => c.score);
      const lo = Math.min(...ss);
      const hi = Math.max(...ss);
      const range = hi - lo;
      candidates = candidates.map((c) => ({
        ...c,
        score: range > 0 ? (c.score - lo) / range : 1,
      }));
    }

    let results = applyMMR
      ? mmr(candidates, topK, 0.7)
      : candidates.slice(0, topK);

    // Best-line selection
    const qToks = new Set(tokenize(query));
    results = results.map((r) => {
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
      if (bestScore <= 0) {
        best = r.lines.reduce((a, b) => (b.bbox[2] > a.bbox[2] ? b : a), r.lines[0]);
      }
      return { ...r, bbox: best.bbox };
    });

    return results;
  }
}
