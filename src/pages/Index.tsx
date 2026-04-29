import { useEffect, useRef, useState } from "react";
import { PdfViewer, type PdfViewerHandle } from "@/components/PdfViewer";
import { IntentCard } from "@/components/IntentCard";
import { SettingsPanel, DEFAULT_SETTINGS, type RagSettings } from "@/components/SettingsPanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RagEngine } from "@/lib/rag/engine";
import { getEmbedder } from "@/lib/rag/embedder";
import type { RankedChunk } from "@/lib/rag/types";
import { Upload, Search, FileText, Loader2, ShieldCheck, AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const MAX_BYTES = 50 * 1024 * 1024;
const STOPWORDS_EN = new Set("the a an of and to in is it for that on with as at by from be this are or".split(" "));

function isLikelyEnglish(text: string): boolean {
  const sample = text.slice(0, 500).toLowerCase();
  const tokens = sample.match(/[a-z]+/g) || [];
  if (tokens.length < 20) return true; // not enough to judge
  const stops = tokens.filter((t) => STOPWORDS_EN.has(t)).length;
  return stops / Math.max(1, sample.length) > 0.03;
}

const Index = () => {
  const [engine] = useState(() => new RagEngine());
  const [pdfData, setPdfData] = useState<ArrayBuffer | null>(null);
  const [docId, setDocId] = useState<string>("");
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<RankedChunk[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [settings, setSettings] = useState<RagSettings>(DEFAULT_SETTINGS);
  const [isolated, setIsolated] = useState(true);
  const [webgpuAvailable, setWebgpuAvailable] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const viewerRef = useRef<PdfViewerHandle>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Capability detection
  useEffect(() => {
    setIsolated(typeof self !== "undefined" && (self as any).crossOriginIsolated === true);
    setWebgpuAvailable(typeof navigator !== "undefined" && "gpu" in navigator);
  }, []);

  // Pre-warm embedder on idle
  useEffect(() => {
    const warm = () => { getEmbedder().catch(() => {}); };
    const ric = (window as any).requestIdleCallback;
    const id = ric ? ric(warm) : setTimeout(warm, 2000);
    return () => {
      const cic = (window as any).cancelIdleCallback;
      if (ric && cic) cic(id);
      else clearTimeout(id as any);
    };
  }, []);

  // Keyboard navigation between hits
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (!hits.length) return;
      if (e.key === "j" || e.key === "ArrowDown") {
        e.preventDefault();
        const idx = hits.findIndex((h) => h.id === activeId);
        const next = hits[Math.min(hits.length - 1, idx + 1)] ?? hits[0];
        jumpTo(next);
      } else if (e.key === "k" || e.key === "ArrowUp") {
        e.preventDefault();
        const idx = hits.findIndex((h) => h.id === activeId);
        const next = hits[Math.max(0, idx - 1)] ?? hits[0];
        jumpTo(next);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hits, activeId]);

  const handleFile = async (file: File) => {
    if (file.size > MAX_BYTES) {
      toast({
        title: "File too large",
        description: `Maximum file size is 50 MB. This file is ${(file.size / 1024 / 1024).toFixed(1)} MB.`,
        variant: "destructive",
      });
      return;
    }
    setBusy(true);
    setReady(false);
    setHits([]);
    setFileName(file.name);
    try {
      await engine.ingest(
        file,
        (msg, pct) => {
          setStatus(msg);
          if (typeof pct === "number") setProgress(pct);
        },
        {
          targetTokens: settings.targetTokens,
          overlapRatio: settings.overlapRatio,
          useCache: settings.useCache,
        }
      );
      setPdfData(engine.pdfBytes!.slice(0));
      setDocId(engine.docId);
      setReady(true);
      // Non-English heuristic
      const sample = engine.chunks.slice(0, 5).map((c) => c.text).join(" ");
      if (!isLikelyEnglish(sample)) {
        toast({
          title: "Non-English text detected",
          description: "Dense retrieval uses English BGE. Results may be weaker — consider quoting exact phrases.",
        });
      }
      toast({
        title: "Document indexed",
        description: `${engine.chunks.length} chunks across ${engine.pages.length} pages`,
      });
    } catch (e: any) {
      const isPassword = e?.name === "PasswordException" || e?.code === 1 || e?.code === 2;
      const isScanned = /scanned|extractable text/i.test(e?.message || "");
      toast({
        title: isPassword ? "Password-protected PDF" : isScanned ? "No text found" : "Ingest failed",
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
      const results = await engine.search(query, {
        retrievalK: settings.retrievalK,
        topK: settings.topK,
      });
      setHits(results);
      setActiveId(null);
      const strong = results.filter((r) => r.score > 0.3).length;
      if (results.length > 0 && strong < 3) {
        toast({ title: "Low confidence", description: "Tip: Try synonyms or more specific terms." });
      }
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

  const handleReindex = async () => {
    if (!engine.pages.length) return;
    setBusy(true);
    try {
      await engine.reindex(
        (msg, pct) => { setStatus(msg); if (typeof pct === "number") setProgress(pct); },
        { targetTokens: settings.targetTokens, overlapRatio: settings.overlapRatio }
      );
      toast({ title: "Re-indexed", description: `${engine.chunks.length} chunks` });
    } catch (e: any) {
      toast({ title: "Re-index failed", description: e.message, variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setDragOver(true); };
  const onDragLeave = () => setDragOver(false);
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f && f.type === "application/pdf") handleFile(f);
    else if (f) toast({ title: "Not a PDF", description: f.name, variant: "destructive" });
  };

  return (
    <div
      className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <header className="border-b border-border bg-card/40 backdrop-blur px-5 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          <h1 className="font-mono text-sm tracking-tight">
            <span className="text-primary">keyless</span>
            <span className="text-muted-foreground">/</span>
            hybrid-rag
          </h1>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border rounded px-1.5 py-0.5 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" /> Local · No API keys
        </span>
        {!isolated && (
          <span className="text-[10px] font-mono text-amber-500 border border-amber-500/40 rounded px-1.5 py-0.5 flex items-center gap-1" title="SharedArrayBuffer unavailable — inference runs single-threaded">
            <AlertTriangle className="w-3 h-3" /> Single-threaded
          </span>
        )}
        <div className="flex-1" />
        <SettingsPanel
          settings={settings}
          onChange={setSettings}
          onReindex={handleReindex}
          canReindex={ready && !busy}
          webgpuAvailable={webgpuAvailable}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
        <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} disabled={busy}>
          <Upload className="w-3.5 h-3.5 mr-1.5" />
          {fileName || "Upload PDF"}
        </Button>
      </header>

      {dragOver && (
        <div className="absolute inset-0 z-50 bg-primary/10 border-4 border-dashed border-primary pointer-events-none flex items-center justify-center">
          <p className="font-mono text-sm text-primary">Drop PDF to ingest</p>
        </div>
      )}

      <div className="flex-1 grid grid-cols-1 md:grid-cols-[380px_1fr] min-h-0">
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
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              </Button>
            </div>
            {(busy || status) && (
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono text-muted-foreground">{status}</div>
                {progress > 0 && progress < 100 && (
                  <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: `${Math.min(100, progress)}%` }} />
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
                    ? "Run a query to surface intent-mapped passages. Use j/k or ↑/↓ to cycle results."
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

        <main className="min-h-0 hidden md:block">
          <PdfViewer ref={viewerRef} data={pdfData} docId={docId} />
        </main>
      </div>
    </div>
  );
};

export default Index;
