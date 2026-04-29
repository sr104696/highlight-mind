import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { pdfjs } from "@/lib/rag/pdf-worker";

const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024;
const WASM_MAGIC = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]);
const PREVIEW_CHARS = 6000;
const CHUNK_PREVIEW_CHARS = 700;

type RuntimeStatus = {
  crossOriginIsolated: boolean;
  wasm: boolean;
  indexedDB: boolean;
  webgpuDetected: boolean;
  sharedArrayBuffer: boolean;
};

type PdfMeta = {
  name: string;
  pages: number;
  characters: number;
};

function detectRuntime(): RuntimeStatus {
  return {
    crossOriginIsolated: typeof window !== "undefined" && window.crossOriginIsolated === true,
    wasm:
      typeof WebAssembly === "object" &&
      typeof WebAssembly.validate === "function" &&
      WebAssembly.validate(WASM_MAGIC),
    indexedDB: typeof indexedDB === "object" && typeof indexedDB.open === "function",
    webgpuDetected: typeof navigator !== "undefined" && "gpu" in navigator,
    sharedArrayBuffer: typeof SharedArrayBuffer === "function",
  };
}

function StatusBadge({ label, ok }: { label: string; ok: boolean }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        ok ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800",
      ].join(" ")}
    >
      {label}: {ok ? "OK" : "Unavailable"}
    </span>
  );
}

function previewChunks(text: string) {
  const paragraphs = text
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (paragraphs.length > 0) {
    return paragraphs.slice(0, 5);
  }

  return text.match(/[\s\S]{1,900}/g)?.slice(0, 5) ?? [];
}

export default function Index() {
  const [runtime, setRuntime] = useState<RuntimeStatus>(() =>
    typeof window !== "undefined"
      ? detectRuntime()
      : {
          crossOriginIsolated: false,
          wasm: false,
          indexedDB: false,
          webgpuDetected: false,
          sharedArrayBuffer: false,
        }
  );
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Select a PDF up to 50 MB. No uploads are performed.");
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [meta, setMeta] = useState<PdfMeta | null>(null);

  useEffect(() => {
    setRuntime(detectRuntime());
  }, []);

  const chunks = useMemo(() => previewChunks(text), [text]);

  async function parsePdf(file: File) {
    setProgress(0);
    setText("");
    setMeta(null);
    setError("");
    setMessage("Validating PDF...");

    if (file.size > MAX_FILE_SIZE_BYTES) {
      throw new Error("File rejected: maximum PDF size is 50 MB.");
    }

    if (file.size === 0) {
      throw new Error("File rejected: PDF is empty (0 bytes).");
    }

    const isPdfMime = file.type === "application/pdf";
    const isPdfName = file.name.toLowerCase().endsWith(".pdf");

    if (!isPdfMime && !isPdfName) {
      throw new Error("File rejected: select a PDF document.");
    }

    setProgress(10);
    setMessage("Reading PDF locally...");

    const buffer = await file.arrayBuffer();

    // Time-of-check vs time-of-use: re-validate size after reading
    if (buffer.byteLength > MAX_FILE_SIZE_BYTES) {
      throw new Error("File rejected: maximum PDF size is 50 MB.");
    }

    const loadingTask = pdfjs.getDocument({ data: new Uint8Array(buffer) });
    const pdf = await loadingTask.promise;

    setProgress(20);

    const pageTexts: string[] = [];

    try {
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
        const page = await pdf.getPage(pageNumber);
        const content = await page.getTextContent();
        const pageText = content.items
          .map((item) => ("str" in item ? item.str : ""))
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();

        if (pageText) {
          pageTexts.push(pageText);
        }

        setProgress(20 + Math.round((pageNumber / pdf.numPages) * 75));
        setMessage(`Extracted page ${pageNumber} of ${pdf.numPages}...`);
      }
    } finally {
      await pdf.destroy();
    }

    const extractedText = pageTexts.join("\n\n").trim();

    if (extractedText.trim().length === 0) {
      throw new Error("Scanned PDF rejected: no extractable text was found.");
    }

    if (extractedText.trim().length < 20) {
      setMessage("Very little text was found. Search quality may be limited.");
    }

    setText(extractedText);
    setMeta({
      name: file.name,
      pages: pdf.numPages,
      characters: extractedText.length,
    });
    setProgress(100);
    setMessage("PDF parsed locally. Text is ready for retrieval.");
  }

  async function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      await parsePdf(file);
    } catch (err) {
      const nextMessage = err instanceof Error ? err.message : "Unknown PDF parsing error.";
      setError(nextMessage);
      setMessage("PDF parsing failed.");
      setProgress(0);
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-8">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="rounded-2xl border bg-card p-8 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Local-first PDF RAG</p>
          <h1 className="text-4xl font-bold tracking-tight">Keyless Hybrid RAG</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Parse PDFs in the browser, reject scanned documents with no extractable text, and verify runtime features needed
            for local retrieval. No uploads and no API keys are required.
          </p>
          {!runtime.crossOriginIsolated && (
            <div className="mt-5 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm font-medium text-amber-900">
              Single-threaded mode: cross-origin isolation is unavailable.
            </div>
          )}
        </header>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Browser Runtime</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <StatusBadge label="crossOriginIsolated" ok={runtime.crossOriginIsolated} />
            <StatusBadge label="SharedArrayBuffer" ok={runtime.sharedArrayBuffer} />
            <StatusBadge label="WASM" ok={runtime.wasm} />
            <StatusBadge label="IndexedDB" ok={runtime.indexedDB} />
            <StatusBadge label="WebGPU detected" ok={runtime.webgpuDetected} />
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">PDF Intake</h2>
          <p className="mt-2 text-sm text-muted-foreground" role="status" aria-live="polite">
            {message}
          </p>
          <div className="mt-5">
            <Input
              type="file"
              accept="application/pdf,.pdf"
              onChange={onFileChange}
              aria-label="Choose PDF file"
            />
          </div>
          <div className="mt-5">
            <Progress value={progress} aria-label="PDF processing progress" />
          </div>
          {error && (
            <p className="mt-4 rounded-lg bg-destructive/10 p-3 text-sm font-medium text-destructive" role="alert">
              {error}
            </p>
          )}
          {meta && (
            <div className="mt-4 grid gap-3 rounded-lg bg-muted p-4 text-sm md:grid-cols-3">
              <div>
                <span className="font-semibold">File:</span> {meta.name}
              </div>
              <div>
                <span className="font-semibold">Pages:</span> {meta.pages}
              </div>
              <div>
                <span className="font-semibold">Characters:</span> {meta.characters}
              </div>
            </div>
          )}
        </section>

        {text && (
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Extracted Text Preview</h2>
            <Textarea
              className="mt-4 min-h-[220px] font-mono text-xs"
              readOnly
              value={text.slice(0, PREVIEW_CHARS)}
            />
            <h3 className="mt-6 text-lg font-semibold">Initial Retrieval Chunks</h3>
            <ol className="mt-3 space-y-3">
              {chunks.map((chunk, index) => (
                <li
                  key={`${index}-${String(hashCode(chunk.slice(0, 16)))}`}
                  className="rounded-lg border bg-background p-4 text-sm"
                >
                  <span className="mb-2 block font-semibold">Chunk {index + 1}</span>
                  {chunk.slice(0, CHUNK_PREVIEW_CHARS)}
                </li>
              ))}
            </ol>
          </section>
        )}
      </section>
    </main>
  );
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}
