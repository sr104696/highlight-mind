import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App", () => {
  it("renders the local-first PDF RAG landing page", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Keyless Hybrid RAG/i })).toBeInTheDocument();
    expect(screen.getByText(/Select a PDF up to 50 MB\. No uploads are performed\./i)).toBeInTheDocument();
    expect(screen.getByText(/Browser Runtime/i)).toBeInTheDocument();
  });
});
