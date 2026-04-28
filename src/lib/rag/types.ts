export type BBox = [number, number, number, number]; // x, y, w, h normalized 0..1, origin top-left

export interface PageData {
  pageIndex: number; // 0-based
  width: number;
  height: number;
  items: { text: string; bbox: BBox }[];
}

export interface Chunk {
  id: number;
  docId: string;
  pageIndex: number;
  text: string;
  bbox: BBox;
  vector?: Float32Array;
}

export interface RankedChunk extends Chunk {
  score: number;
}