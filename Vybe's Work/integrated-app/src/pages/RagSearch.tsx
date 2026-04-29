import { useEffect, useMemo, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import { loadAllAndIndex } from '@/lib/references';
import { search, snippet, buildIndex, chunkText, type BM25Index, type RankedChunk } from '@/lib/rag';
import { loadPdf, extractText } from '@/lib/pdf';
import { highlight } from '@/lib/utils';
import { Upload, Loader2 } from 'lucide-react';

export default function RagSearch() {
  const [refIndex, setRefIndex] = useState<BM25Index | null>(null);
  const [pdfIndex, setPdfIndex] = useState<BM25Index | null>(null);
  const [pdfName, setPdfName] = useState<string>('');
  const [loadingRefs, setLoadingRefs] = useState(true);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    loadAllAndIndex()
      .then(({ index }) => setRefIndex(index))
      .finally(() => setLoadingRefs(false));
  }, []);

  async function onPdf(f: File) {
    setLoadingPdf(true);
    try {
      const buf = await f.arrayBuffer();
      const doc = await loadPdf(buf.slice(0));
      const pages = await extractText(doc);
      const fullText = pages.map((p) => `\n\n# Page ${p.page}\n\n${p.text}`).join('\n');
      const chunks = chunkText(`pdf:${f.name}`, f.name, fullText, 700, 100);
      setPdfIndex(buildIndex(chunks));
      setPdfName(f.name);
    } finally {
      setLoadingPdf(false);
    }
  }

  const refResults = useMemo(
    () => (refIndex && query ? search(refIndex, query, 6) : []),
    [refIndex, query]
  );
  const pdfResults = useMemo(
    () => (pdfIndex && query ? search(pdfIndex, query, 4) : []),
    [pdfIndex, query]
  );

  const stitched = useMemo(() => {
    const top = [...refResults, ...pdfResults]
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
    return top;
  }, [refResults, pdfResults]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Ask anything about the reference corpus or your PDF…"
          className="flex-1"
          autoFocus
        />
        <label className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-sm cursor-pointer hover:border-brand-500">
          <Upload className="w-4 h-4" />
          {pdfName ? <span className="truncate max-w-[16ch]">{pdfName}</span> : 'Add PDF'}
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && onPdf(e.target.files[0])}
          />
        </label>
      </div>

      <div className="text-xs text-slate-500">
        {loadingRefs && <span className="inline-flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin"/>Indexing reference corpus…</span>}
        {refIndex && <span>Indexed {refIndex.N} reference chunks</span>}
        {pdfIndex && <span> • {pdfIndex.N} PDF chunks</span>}
        {loadingPdf && <span className="ml-2 inline-flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin"/>Indexing PDF…</span>}
      </div>

      {query && stitched.length > 0 && (
        <section className="border rounded-lg bg-brand-50/30 p-4">
          <h3 className="text-xs uppercase tracking-wide text-brand-700 mb-2">Stitched answer</h3>
          <div className="space-y-3">
            {stitched.map((c) => (
              <Snippet key={c.id} c={c} q={query} />
            ))}
          </div>
        </section>
      )}

      {query && (
        <div className="grid md:grid-cols-2 gap-4">
          <ResultColumn title="From reference corpus" results={refResults} q={query} empty={!refIndex} />
          <ResultColumn title="From your PDF" results={pdfResults} q={query} empty={!pdfIndex} hint="Upload a PDF to enable" />
        </div>
      )}
    </div>
  );
}

function ResultColumn({
  title, results, q, empty, hint,
}: { title: string; results: RankedChunk[]; q: string; empty?: boolean; hint?: string }) {
  return (
    <div className="border rounded-lg bg-white">
      <div className="px-3 py-2 border-b text-xs text-slate-500 flex items-center justify-between">
        <span>{title}</span>
        <span>{results.length} hit{results.length === 1 ? '' : 's'}</span>
      </div>
      {empty && <p className="p-3 text-xs text-slate-400">{hint ?? 'No source loaded.'}</p>}
      <ul className="divide-y max-h-[60vh] overflow-auto">
        {results.map((c) => (
          <li key={c.id} className="p-3">
            <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
              <span className="truncate">{c.docTitle}{c.heading ? ` › ${c.heading}` : ''}</span>
              <span className="font-mono">{c.score.toFixed(2)}</span>
            </div>
            <p
              className="text-sm text-slate-700 prose-snippet"
              dangerouslySetInnerHTML={{ __html: highlight(snippet(c.text, c.matchedTerms), q) }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Snippet({ c, q }: { c: RankedChunk; q: string }) {
  return (
    <div>
      <div className="text-xs text-slate-500 mb-1">
        <span className="font-medium">{c.docTitle}</span>
        {c.heading && <span> · {c.heading}</span>}
        <span className="font-mono ml-2">score {c.score.toFixed(2)}</span>
      </div>
      <p
        className="text-sm text-slate-800 prose-snippet"
        dangerouslySetInnerHTML={{ __html: highlight(snippet(c.text, c.matchedTerms, 200), q) }}
      />
    </div>
  );
}
