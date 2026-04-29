// Loads & caches the synced gitingest .md corpus from /references/.
import { Chunk, BM25Index, buildIndex, chunkText } from './rag';

export interface ReferenceMeta {
  id: string;
  file: string;
  title: string;
  bytes: number;
}

export interface LoadedReference extends ReferenceMeta {
  text: string;
  chunks: Chunk[];
}

let manifestPromise: Promise<ReferenceMeta[]> | null = null;
const textCache = new Map<string, Promise<string>>();

export function loadManifest(): Promise<ReferenceMeta[]> {
  if (!manifestPromise) {
    manifestPromise = fetch('/references/manifest.json')
      .then((r) => (r.ok ? r.json() : []))
      .catch(() => []);
  }
  return manifestPromise;
}

export function loadReferenceText(file: string): Promise<string> {
  let p = textCache.get(file);
  if (!p) {
    p = fetch(`/references/${file}`).then((r) => {
      if (!r.ok) throw new Error(`Failed to load ${file}: ${r.status}`);
      return r.text();
    });
    textCache.set(file, p);
  }
  return p;
}

export async function loadReference(meta: ReferenceMeta): Promise<LoadedReference> {
  const text = await loadReferenceText(meta.file);
  const chunks = chunkText(meta.id, meta.title, text);
  return { ...meta, text, chunks };
}

export async function loadAllAndIndex(): Promise<{
  refs: LoadedReference[];
  index: BM25Index;
}> {
  const manifest = await loadManifest();
  const refs = await Promise.all(manifest.map(loadReference));
  const all = refs.flatMap((r) => r.chunks);
  return { refs, index: buildIndex(all) };
}

export interface MdSection {
  level: number;
  title: string;
  start: number;
}

export function extractSections(text: string): MdSection[] {
  const sections: MdSection[] = [];
  const re = /^(#{1,6})\s+(.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    sections.push({
      level: m[1].length,
      title: m[2].trim(),
      start: m.index,
    });
  }
  return sections;
}
