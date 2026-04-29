import { useRef, useState } from "react";
import { PdfViewer, type PdfViewerHandle } from "@/components/PdfViewer";
import { IntentCard } from "@/components/IntentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RagEngine } from "@/lib/rag/engine";
import type { RankedChunk } from "@/lib/rag/types";
import { Upload, Search, FileText, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [engine] = useState(() => new RagEngine());
  const [pdfData, setPdfData] = useState<ArrayBuffer | null>(null);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<RankedChunk[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const viewerRef = useRef<PdfViewerHandle>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setBusy(true);
    setReady(false);
    setHits([]);
    setFileName(file.name);
    try {
      // Bug #5: read the file once inside engine.ingest; reuse pristine copy.
      await engine.ingest(file, (msg, pct) => {
        setStatus(msg);
        if (typeof pct === "number") setProgress(pct);
      });
      setPdfData(engine.pdfBytes!.slice(0));
      setReady(true);
      toast({ title: "Document indexed", description: `${engine.chunks.length} chunks across ${engine.pages.length} pages` });
    } catch (e: any) {
      const isPassword =
        e?.name === "PasswordException" || e?.code === 1 || e?.code === 2;
      toast({
        title: isPassword ? "Password-protected PDF" : "Ingest failed",
        description: isPassword
          ? "This PDF requires a password. Open it in a PDF reader and re-export as an unlocked PDF."
          : e?.message || "Unknown error",
        variant: "destructive",
      });
    } finally {
      setBusy(false);
    }
  };

  const runSearch = async () => {
    if (!query.trim() || !ready) return;
    setBusy(true);
    setStatus("Hybrid retrieval (BM25 + dense + RRF + rerank)…");
    try {
      const results = await engine.search(query, 6);
      setHits(results);
      setActiveId(null);
      if (results[0]) jumpTo(results[0]);
    } catch (e: any) {
      toast({ title: "Search failed", description: e.message, variant: "destructive" });
    } finally {
      setBusy(false);
      setStatus("");
    }
  };

  const jumpTo = (hit: RankedChunk) => {
    setActiveId(hit.id);
    viewerRef.current?.highlight(hit.pageIndex, hit.bbox);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">
      <header className="border-b border-border bg-card/40 backdrop-blur px-5 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          <h1 className="font-mono text-sm tracking-tight">
            <span className="text-primary">keyless</span>
            <span className="text-muted-foreground">/</span>
            hybrid-rag
          </h1>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded px-1.5 py-0.5">
          Local · No API keys
        </span>
        <div className="flex-1" />
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
        <Button
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          disabled={busy}
        >
          <Upload className="w-3.5 h-3.5 mr-1.5" />
          {fileName || "Upload PDF"}
        </Button>
      </header>

      <div className="flex-1 grid grid-cols-[380px_1fr] min-h-0">
        {/* Sidebar: query + intent cards */}
        <aside className="border-r border-border flex flex-col min-h-0 bg-card/20">
          <div className="p-4 border-b border-border space-y-3">
            <div className="flex gap-2">
              <Input
                id="rag-query"
                name="query"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runSearch()}
                placeholder={ready ? "e.g. fiscal health, cash flow…" : "Upload a PDF first"}
                disabled={!ready || busy}
                className="font-mono text-sm bg-background border-border"
              />
              <Button onClick={runSearch} disabled={!ready || busy} size="icon">
                {busy ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
              </Button>
            </div>
            {(busy || status) && (
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono text-muted-foreground">
                  {status}
                </div>
                {progress > 0 && progress < 100 && (
                  <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${Math.min(100, progress)}%` }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {hits.length === 0 && !busy && (
              <div className="text-center py-12 px-4">
                <FileText className="w-8 h-8 mx-auto mb-3 text-muted-foreground/40" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ready
                    ? "Run a query to surface intent-mapped passages. Click any card to jump to its exact coordinates."
                    : "Hybrid retrieval: BM25 lexical + BGE-small semantic, fused via RRF and reranked with MiniLM cross-encoder. Everything runs in your browser."}
                </p>
              </div>
            )}
            {hits.map((hit, i) => (
              <IntentCard
                key={hit.id}
                hit={hit}
                rank={i}
                active={activeId === hit.id}
                onClick={() => jumpTo(hit)}
              />
            ))}
          </div>

          <div className="border-t border-border px-4 py-2 text-[10px] font-mono text-muted-foreground flex justify-between">
            <span>{ready ? `${engine.chunks.length} chunks · ${engine.pages.length}p` : "—"}</span>
            <span className="text-primary/70">apodictic</span>
          </div>
        </aside>

        <main className="min-h-0">
          <PdfViewer ref={viewerRef} data={pdfData} />
        </main>
      </div>
    </div>
  );
};

export default Index;
