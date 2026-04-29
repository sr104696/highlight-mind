import { describe, expect, it } from "vitest";
import { pdfjs } from "@/lib/rag/pdf-worker";

describe("pdf worker", () => {
  it("configures pdf.js worker source", () => {
    expect(String(pdfjs.GlobalWorkerOptions.workerSrc)).toMatch(/pdf\.worker(\.min)?\.mjs/);
  });
});
