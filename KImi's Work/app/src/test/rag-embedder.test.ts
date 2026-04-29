import { describe, expect, it, vi } from "vitest";
import { embedQuery, embedTexts, rerank } from "@/lib/rag/embedder";

describe("rag embedder", () => {
  it("creates deterministic normalized vectors", async () => {
    const [first, second] = await embedTexts(["hybrid retrieval pdf", "hybrid retrieval pdf"]);
    const norm = Math.sqrt(Array.from(first).reduce((sum, value) => sum + value * value, 0));

    expect(first).toHaveLength(384);
    expect(Array.from(first)).toEqual(Array.from(second));
    expect(norm).toBeCloseTo(1, 5);
  });

  it("embeds a query", async () => {
    const vector = await embedQuery("coordinate highlights");

    expect(vector).toHaveLength(384);
  });

  it("reports progress", async () => {
    const onProgress = vi.fn();

    await embedTexts(["one", "two"], onProgress);

    expect(onProgress).toHaveBeenCalledWith({ status: "start", loaded: 0, total: 2, progress: 0 });
    expect(onProgress).toHaveBeenLastCalledWith({ status: "done", loaded: 2, total: 2, progress: 100 });
  });

  it("scores relevant passages higher than irrelevant passages", async () => {
    const scores = await rerank("hybrid retrieval pdf", [
      "This PDF app uses hybrid retrieval and coordinate highlights.",
      "A sourdough recipe needs flour, water, and salt.",
    ]);

    expect(scores[0]).toBeGreaterThan(scores[1]);
  });
});
