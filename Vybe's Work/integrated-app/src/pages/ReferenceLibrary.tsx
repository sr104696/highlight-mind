import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import {
  loadManifest,
  loadReferenceText,
  extractSections,
  type ReferenceMeta,
  type MdSection,
} from '@/lib/references';
import { highlight, formatBytes, escapeHtml } from '@/lib/utils';

export default function ReferenceLibrary() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [manifest, setManifest] = useState<ReferenceMeta[]>([]);
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadManifest().then((m) => {
      setManifest(m);
      if (!id && m.length) navigate(`/library/${m[0].id}`, { replace: true });
    });
  }, [id, navigate]);

  const current = useMemo(() => manifest.find((m) => m.id === id), [manifest, id]);

  useEffect(() => {
    if (!current) return;
    setLoading(true);
    setError(null);
    loadReferenceText(current.file)
      .then(setText)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [current]);

  const sections = useMemo<MdSection[]>(() => (text ? extractSections(text) : []), [text]);

  const matches = useMemo(() => {
    if (!query.trim() || !text) return [] as { line: number; ctx: string; pos: number }[];
    const q = query.toLowerCase();
    const lines = text.split(/\n/);
    const out: { line: number; ctx: string; pos: number }[] = [];
    let pos = 0;
    for (let i = 0; i < lines.length && out.length < 100; i++) {
      const l = lines[i];
      if (l.toLowerCase().includes(q)) out.push({ line: i, ctx: l.trim().slice(0, 220), pos });
      pos += l.length + 1;
    }
    return out;
  }, [query, text]);

  return (
    <div className="grid grid-cols-12 gap-4">
      <aside className="col-span-12 md:col-span-3 border rounded-lg bg-white p-3 max-h-[80vh] overflow-auto">
        <h3 className="text-xs uppercase tracking-wide text-slate-500 mb-2">Corpora</h3>
        {manifest.length === 0 && (
          <p className="text-sm text-slate-500">
            No references found. Run <code className="font-mono">npm run sync-references</code>.
          </p>
        )}
        <ul className="space-y-1 mb-4">
          {manifest.map((m) => (
            <li key={m.id}>
              <button
                onClick={() => navigate(`/library/${m.id}`)}
                className={`w-full text-left text-sm px-2 py-1.5 rounded ${
                  m.id === id ? 'bg-brand-50 text-brand-700' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="font-medium truncate">{m.title}</div>
                <div className="text-xs text-slate-400">{formatBytes(m.bytes)}</div>
              </button>
            </li>
          ))}
        </ul>
        {sections.length > 0 && (
          <>
            <h3 className="text-xs uppercase tracking-wide text-slate-500 mb-2 mt-4">Sections</h3>
            <ul className="space-y-0.5">
              {sections.slice(0, 200).map((s, i) => (
                <li key={i}>
                  <a
                    href={`#sec-${i}`}
                    className="block text-xs text-slate-600 hover:text-brand-700 truncate"
                    style={{ paddingLeft: (s.level - 1) * 8 }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
      <section className="col-span-12 md:col-span-9 space-y-4">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={current ? `Search inside ${current.title}…` : 'Search…'}
        />
        {loading && <p className="text-sm text-slate-500">Loading…</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        {query && (
          <div className="border rounded-lg bg-white">
            <div className="px-3 py-2 border-b text-xs text-slate-500">
              {matches.length} match{matches.length === 1 ? '' : 'es'}
            </div>
            <ul className="divide-y max-h-72 overflow-auto">
              {matches.map((m, i) => (
                <li key={i} className="px-3 py-2 text-sm prose-snippet">
                  <span className="text-slate-400 mr-2 font-mono text-xs">L{m.line + 1}</span>
                  <span dangerouslySetInnerHTML={{ __html: highlight(m.ctx, query) }} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {!loading && !error && text && (
          <article className="border rounded-lg bg-white p-4 max-h-[70vh] overflow-auto">
            <RenderedMarkdown text={text} sections={sections} query={query} />
          </article>
        )}
      </section>
    </div>
  );
}

function RenderedMarkdown({
  text,
  sections,
  query,
}: {
  text: string;
  sections: MdSection[];
  query: string;
}) {
  // Lightweight rendering: render headings as <h*>, paragraphs/code blocks as <pre>.
  const html = useMemo(() => {
    const parts: string[] = [];
    let inCode = false;
    let codeBuf: string[] = [];
    let secIdx = 0;
    const lines = text.split(/\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (/^```/.test(line)) {
        if (inCode) {
          parts.push(
            `<pre class="bg-slate-50 rounded p-3 my-2 text-xs overflow-x-auto"><code>${escapeHtml(codeBuf.join('\n'))}</code></pre>`
          );
          codeBuf = [];
        }
        inCode = !inCode;
        continue;
      }
      if (inCode) {
        codeBuf.push(line);
        continue;
      }
      const h = /^(#{1,6})\s+(.+)$/.exec(line);
      if (h) {
        const lvl = Math.min(6, h[1].length);
        const title = highlight(h[2], query);
        const id = `sec-${secIdx++}`;
        parts.push(
          `<h${lvl} id="${id}" class="font-semibold mt-4 mb-2" style="font-size:${1.4 - lvl * 0.1}rem">${title}</h${lvl}>`
        );
        continue;
      }
      if (!line.trim()) {
        parts.push('<div class="h-2"></div>');
        continue;
      }
      parts.push(
        `<p class="text-sm text-slate-700 leading-relaxed prose-snippet">${highlight(line, query)}</p>`
      );
    }
    return parts.join('');
  }, [text, query]);

  void sections;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
