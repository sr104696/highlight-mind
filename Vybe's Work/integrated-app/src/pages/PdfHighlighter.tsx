import { useEffect, useRef, useState } from 'react';
import { Trash2, Upload } from 'lucide-react';
import { loadPdf, renderPageToCanvas } from '@/lib/pdf';
import {
  loadHighlights,
  saveHighlights,
  clearHighlights,
  type PersistedHighlight,
} from '@/lib/storage';
import { cn } from '@/lib/utils';

const COLORS: PersistedHighlight['color'][] = ['yellow', 'green', 'pink', 'blue'];
const COLOR_BG: Record<PersistedHighlight['color'], string> = {
  yellow: 'rgba(253, 230, 138, 0.55)',
  green:  'rgba(187, 247, 208, 0.55)',
  pink:   'rgba(251, 207, 232, 0.55)',
  blue:   'rgba(191, 219, 254, 0.55)',
};

export default function PdfHighlighter() {
  const [doc, setDoc] = useState<Awaited<ReturnType<typeof loadPdf>> | null>(null);
  const [docKey, setDocKey] = useState<string>('');
  const [page, setPage] = useState(1);
  const [color, setColor] = useState<PersistedHighlight['color']>('yellow');
  const [highlights, setHighlights] = useState<PersistedHighlight[]>([]);
  const [scale] = useState(1.4);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  // Drag state
  const dragRef = useRef<{ x: number; y: number } | null>(null);
  const [drag, setDrag] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  async function onFile(f: File) {
    const buf = await f.arrayBuffer();
    const d = await loadPdf(buf.slice(0));
    const key = `${f.name}:${f.size}`;
    setDocKey(key);
    setHighlights(loadHighlights(key));
    setDoc(d);
    setPage(1);
  }

  // Render page when doc / page / scale changes
  useEffect(() => {
    if (!doc || !canvasRef.current) return;
    let cancel = false;
    (async () => {
      const r = await renderPageToCanvas(doc, page, canvasRef.current!, scale);
      if (!cancel) setSize({ w: r.width, h: r.height });
    })();
    return () => {
      cancel = true;
    };
  }, [doc, page, scale]);

  // Persist highlights
  useEffect(() => {
    if (docKey) saveHighlights(docKey, highlights);
  }, [docKey, highlights]);

  function pointerPos(e: React.PointerEvent) {
    const rect = layerRef.current!.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  }

  function onDown(e: React.PointerEvent) {
    const p = pointerPos(e);
    dragRef.current = p;
    setDrag({ x: p.x, y: p.y, w: 0, h: 0 });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onMove(e: React.PointerEvent) {
    if (!dragRef.current) return;
    const start = dragRef.current;
    const cur = pointerPos(e);
    setDrag({
      x: Math.min(start.x, cur.x),
      y: Math.min(start.y, cur.y),
      w: Math.abs(cur.x - start.x),
      h: Math.abs(cur.y - start.y),
    });
  }
  function onUp() {
    if (drag && drag.w > 0.005 && drag.h > 0.005) {
      const hl: PersistedHighlight = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        page,
        x: drag.x,
        y: drag.y,
        w: drag.w,
        h: drag.h,
        color,
        createdAt: Date.now(),
      };
      setHighlights((h) => [...h, hl]);
    }
    dragRef.current = null;
    setDrag(null);
  }

  function deleteHl(id: string) {
    setHighlights((h) => h.filter((x) => x.id !== id));
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <aside className="col-span-12 md:col-span-3 space-y-4">
        <label className="flex flex-col gap-2 border-2 border-dashed rounded-lg p-4 bg-white cursor-pointer hover:border-brand-500">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Upload className="w-4 h-4" />
            Upload PDF
          </div>
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
          />
          {docKey && <p className="text-xs text-slate-400 truncate">{docKey.split(':')[0]}</p>}
        </label>

        {doc && (
          <div className="border rounded-lg bg-white p-3 space-y-3">
            <div className="flex items-center justify-between">
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="text-xs px-2 py-1 border rounded disabled:opacity-30"
              >
                Prev
              </button>
              <span className="text-sm">
                {page} / {doc.numPages}
              </span>
              <button
                disabled={page >= doc.numPages}
                onClick={() => setPage((p) => p + 1)}
                className="text-xs px-2 py-1 border rounded disabled:opacity-30"
              >
                Next
              </button>
            </div>
            <div className="flex gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={cn(
                    'w-7 h-7 rounded border-2',
                    color === c ? 'border-slate-700' : 'border-transparent'
                  )}
                  style={{ background: COLOR_BG[c] }}
                  aria-label={c}
                />
              ))}
            </div>
            <button
              onClick={() => {
                clearHighlights(docKey);
                setHighlights([]);
              }}
              className="flex items-center gap-1 text-xs text-red-600 hover:underline"
            >
              <Trash2 className="w-3 h-3" />
              Clear all highlights
            </button>
          </div>
        )}

        {highlights.length > 0 && (
          <div className="border rounded-lg bg-white p-3">
            <h4 className="text-xs uppercase tracking-wide text-slate-500 mb-2">
              {highlights.length} highlight{highlights.length === 1 ? '' : 's'}
            </h4>
            <ul className="space-y-1 max-h-64 overflow-auto">
              {highlights.map((h) => (
                <li key={h.id} className="flex items-center justify-between text-xs">
                  <button
                    className="flex-1 text-left truncate hover:underline"
                    onClick={() => setPage(h.page)}
                  >
                    <span className="inline-block w-3 h-3 rounded-sm align-middle mr-1" style={{ background: COLOR_BG[h.color] }} />
                    p{h.page} · {new Date(h.createdAt).toLocaleTimeString()}
                  </button>
                  <button onClick={() => deleteHl(h.id)} className="text-slate-400 hover:text-red-600">×</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      <section className="col-span-12 md:col-span-9 overflow-auto">
        {!doc && <p className="text-sm text-slate-500">Upload a PDF to begin.</p>}
        {doc && (
          <div className="pdf-page inline-block relative" style={{ width: size.w, height: size.h }}>
            <canvas ref={canvasRef} />
            <div
              ref={layerRef}
              className="hl-layer"
              style={{ pointerEvents: 'auto', cursor: 'crosshair' }}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
            >
              {highlights
                .filter((h) => h.page === page)
                .map((h) => (
                  <div
                    key={h.id}
                    className="hl-rect"
                    title="Click to delete"
                    onClick={() => deleteHl(h.id)}
                    style={{
                      left: `${h.x * 100}%`,
                      top: `${h.y * 100}%`,
                      width: `${h.w * 100}%`,
                      height: `${h.h * 100}%`,
                      background: COLOR_BG[h.color],
                    }}
                  />
                ))}
              {drag && (
                <div
                  className="hl-rect"
                  style={{
                    left: `${drag.x * 100}%`,
                    top: `${drag.y * 100}%`,
                    width: `${drag.w * 100}%`,
                    height: `${drag.h * 100}%`,
                    background: COLOR_BG[color],
                    outline: '1px dashed rgba(0,0,0,0.4)',
                  }}
                />
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
