export type ProgressCb = (event: {
  status: "start" | "progress" | "done";
  loaded: number;
  total: number;
  progress: number;
}) => void;

const DIMENSIONS = 384;

function tokenize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1);
}

function hashToken(token: string) {
  let hash = 2166136261;

  for (let index = 0; index < token.length; index += 1) {
    hash ^= token.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function assertNotAborted(signal?: AbortSignal) {
  if (signal?.aborted) {
    throw new DOMException("The operation was aborted.", "AbortError");
  }
}

function embedOne(text: string) {
  const vector = new Float32Array(DIMENSIONS);
  const tokens = tokenize(text);

  for (const token of tokens) {
    const hash = hashToken(token);
    const slot = hash % DIMENSIONS;
    const sign = hash & 1 ? 1 : -1;
    vector[slot] += sign * (1 + Math.log2(2 + token.length));
  }

  const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));

  if (norm > 0) {
    for (let index = 0; index < vector.length; index += 1) {
      vector[index] = vector[index] / norm;
    }
  }

  return vector;
}

export async function embedTexts(texts: string[], onProgress?: ProgressCb, signal?: AbortSignal) {
  assertNotAborted(signal);
  onProgress?.({ status: "start", loaded: 0, total: texts.length, progress: 0 });

  const vectors: Float32Array[] = [];

  for (let index = 0; index < texts.length; index += 1) {
    assertNotAborted(signal);
    vectors.push(embedOne(texts[index]));
    onProgress?.({
      status: "progress",
      loaded: index + 1,
      total: texts.length,
      progress: texts.length === 0 ? 100 : Math.round(((index + 1) / texts.length) * 100),
    });
    await Promise.resolve();
  }

  onProgress?.({ status: "done", loaded: texts.length, total: texts.length, progress: 100 });
  return vectors;
}

export async function embedQuery(text: string) {
  const [vector] = await embedTexts([text]);
  return vector;
}

export async function rerank(query: string, passages: string[]) {
  const queryTokens = new Set(tokenize(query));
  const normalizedQuery = query.trim().toLowerCase();

  return passages.map((passage) => {
    const passageTokens = tokenize(passage);
    const passageTokenSet = new Set(passageTokens);
    let overlap = 0;

    for (const token of queryTokens) {
      if (passageTokenSet.has(token)) {
        overlap += 1;
      }
    }

    const lexicalScore = queryTokens.size === 0 ? 0 : overlap / queryTokens.size;
    const phraseBoost =
      normalizedQuery.length > 0 && passage.toLowerCase().includes(normalizedQuery) ? 0.2 : 0;
    const densityBoost = passageTokens.length === 0 ? 0 : Math.min(0.1, overlap / passageTokens.length);

    return Math.max(0, Math.min(1, lexicalScore * 0.9 + phraseBoost + densityBoost));
  });
}
