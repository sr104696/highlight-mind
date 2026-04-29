import type { Chunk } from "./types";

const DB_NAME = "rag-cache";
const STORE = "docs";
export const CACHE_VERSION = 2;

interface CachedDoc {
  docId: string;
  version: number;
  chunks: Chunk[];
  pages: { pageIndex: number; width: number; height: number }[];
  createdAt: number;
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(STORE, { keyPath: "docId" });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function getCached(docId: string): Promise<CachedDoc | null> {
  try {
    const db = await openDb();
    return await new Promise((resolve) => {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).get(docId);
      req.onsuccess = () => {
        const v = req.result as CachedDoc | undefined;
        if (v && v.version === CACHE_VERSION) resolve(v);
        else resolve(null);
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function putCached(doc: Omit<CachedDoc, "version" | "createdAt">) {
  try {
    const db = await openDb();
    const payload: CachedDoc = { ...doc, version: CACHE_VERSION, createdAt: Date.now() };
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(payload);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) {
    console.warn("[cache] put failed:", e);
  }
}

export async function clearCache() {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    /* noop */
  }
}

export async function hashHead(file: File): Promise<string> {
  const head = await file.slice(0, 65536).arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", head);
  return [...new Uint8Array(digest).slice(0, 8)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
