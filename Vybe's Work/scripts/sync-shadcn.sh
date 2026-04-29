#!/usr/bin/env bash
# Hydrate src/components/ui/ from the canonical Codex's Work copy.
# These 49 shadcn primitives are byte-identical across all three forks; we keep
# only one canonical copy in this repo and sync them in here at setup time.
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$HERE/../.." && pwd)"
SRC="$ROOT/Codex's Work/src/components/ui"
DEST="$HERE/../src/components/ui"

if [ ! -d "$SRC" ]; then
  echo "ERROR: cannot find $SRC" >&2
  echo "Run this from inside the highlight-mind repo so Codex's Work/ is available." >&2
  exit 1
fi

mkdir -p "$DEST"
cp -R "$SRC/." "$DEST/"

count=$(find "$DEST" -maxdepth 1 -type f | wc -l | tr -d ' ')
echo "Synced $count shadcn UI primitives → $DEST"
