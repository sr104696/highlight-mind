import { useMemo, useState } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { loadPdf, extractText, extractOutline, type OutlineEntry } from '@/lib/pdf';
import { cn } from '@/lib/utils';

const KIND_BADGE: Record<OutlineEntry['kind'], string> = {
  heading: 'bg-brand-100 text-brand-700',
  code: 'bg-slate-200 text-slate-800 font-mono',
  list: 'bg-emerald-100 text-emerald-700',
  paragraph: 'bg-slate-100 text-slate-600',
};

export default function Extractor() {
  const [outline, setOutline] = useState<OutlineEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | OutlineEntry['kind']>('all');
  const [name, setName] = useState('');

  async function onFile(f: File) {
    setLoading(true);
    setName(f.name);
    try {
      const buf = await f.arrayBuffer();
      const doc = await loadPdf(buf.slice(0));
      const pages = await extractText(doc);
      setOutline(extractOutline(pages));
    } finally {
      setLoading(false);
    }
  }

  const filtered = useMemo(
    () => (filter === 'all' ? outline : outline.filter((o) => o.kind === filter)),
    [outline, filter]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: outline.length, heading: 0, code: 0, list: 0, paragraph: 0 };
    for (const o of outline) c[o.kind]++;
    return c;
  }, [outline]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 px-3 py-2 border rounded-md bg-white text-sm cursor-pointer hover:border-brand-500">
          <Upload className="w-4 h-4" />
          {name || 'Upload PDF'}
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
          />
        </label>
        {loading && <span className="text-xs text-slate-500 inline-flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin"/>Extracting…</span>}
      </div>

      {outline.length > 0 && (
        <>
          <div className="flex items-center gap-2 text-sm">
            {(['all', 'heading', 'list', 'code', 'paragraph'] as const).map((k) => (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={cn(
                  'px-3 py-1 rounded-md border text-xs',
                  filter === k ? 'bg-brand-50 border-brand-500 text-brand-700' : 'bg-white border-slate-200'
                )}
              >
                {k} <span className="opacity-60">({counts[k]})</span>
              </button>
            ))}
          </div>

          <div className="border rounded-lg bg-white max-h-[75vh] overflow-auto">
            <ul className="divide-y">
              {filtered.map((o, i) => (
                <li key={i} className="px-3 py-2 flex items-start gap-3">
                  <span className={cn('text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded shrink-0', KIND_BADGE[o.kind])}>
                    {o.kind}
                  </span>
                  <span className="text-xs text-slate-400 font-mono shrink-0 w-10">p{o.page}</span>
                  <span
                    className={cn(
                      'text-sm flex-1',
                      o.kind === 'heading' && 'font-semibold text-slate-800',
                      o.kind === 'code' && 'font-mono text-xs text-slate-700',
                      o.kind === 'paragraph' && 'text-slate-600'
                    )}
                    style={o.kind === 'heading' ? { paddingLeft: (o.level - 1) * 12 } : undefined}
                  >
                    {o.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {!loading && outline.length === 0 && (
        <p className="text-sm text-slate-500">Upload a PDF to extract its structure.</p>
      )}
    </div>
  );
}
