// Tiny typed localStorage wrapper for highlight persistence.
export interface PersistedHighlight {
  id: string;
  page: number;
  // page-relative coords (0..1) so they survive zoom changes
  x: number;
  y: number;
  w: number;
  h: number;
  color: 'yellow' | 'green' | 'pink' | 'blue';
  note?: string;
  createdAt: number;
}

const KEY = (docKey: string) => `hm:highlights:${docKey}`;

export function loadHighlights(docKey: string): PersistedHighlight[] {
  try {
    const raw = localStorage.getItem(KEY(docKey));
    return raw ? (JSON.parse(raw) as PersistedHighlight[]) : [];
  } catch {
    return [];
  }
}

export function saveHighlights(docKey: string, hls: PersistedHighlight[]) {
  try {
    localStorage.setItem(KEY(docKey), JSON.stringify(hls));
  } catch (e) {
    console.warn('saveHighlights failed', e);
  }
}

export function clearHighlights(docKey: string) {
  localStorage.removeItem(KEY(docKey));
}

export function listDocKeys(): string[] {
  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('hm:highlights:')) keys.push(k.slice('hm:highlights:'.length));
  }
  return keys;
}
