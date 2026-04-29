/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import config, { crossOriginHeaders } from "../../vite.config";

describe("vite cross-origin isolation headers", () => {
  it("sets COOP and COEP headers for dev and preview", async () => {
    const resolved =
      typeof config === "function"
        ? await (config as any)({ command: "serve", mode: "development" })
        : config;

    expect(crossOriginHeaders["Cross-Origin-Opener-Policy"]).toBe("same-origin");
    expect(crossOriginHeaders["Cross-Origin-Embedder-Policy"]).toBe("require-corp");
    expect(resolved.server?.headers).toEqual(expect.objectContaining(crossOriginHeaders));
    expect(resolved.preview?.headers).toEqual(expect.objectContaining(crossOriginHeaders));
  });
});
