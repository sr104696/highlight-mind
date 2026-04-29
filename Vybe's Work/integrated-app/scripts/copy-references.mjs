// Copies the parent repo's `gitingest outputs/*.md` into `public/references/`
// so Vite can serve them as static assets at runtime.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(__dirname, '..');
const SRC_DIR  = path.resolve(APP_ROOT, '..', '..', 'gitingest outputs');
const DEST_DIR = path.resolve(APP_ROOT, 'public', 'references');

async function main() {
  await fs.mkdir(DEST_DIR, { recursive: true });

  let entries = [];
  try {
    entries = await fs.readdir(SRC_DIR, { withFileTypes: true });
  } catch (e) {
    console.warn(`[sync-references] source directory not found: ${SRC_DIR}`);
    console.warn('  Skipping copy. Place .md files in public/references manually if needed.');
    return;
  }

  const manifest = [];
  for (const e of entries) {
    if (!e.isFile() || !e.name.endsWith('.md')) continue;
    const safe = e.name.replace(/\s+/g, '-').toLowerCase();
    const src  = path.join(SRC_DIR, e.name);
    const dest = path.join(DEST_DIR, safe);
    await fs.copyFile(src, dest);
    const stat = await fs.stat(dest);
    manifest.push({
      id: safe.replace(/\.md$/, ''),
      file: safe,
      title: prettyTitle(e.name),
      bytes: stat.size,
    });
    console.log(`[sync-references] ✓ ${e.name} -> public/references/${safe} (${(stat.size/1024).toFixed(1)} KB)`);
  }

  await fs.writeFile(
    path.join(DEST_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n'
  );
  console.log(`[sync-references] wrote manifest.json (${manifest.length} entries)`);
}

function prettyTitle(name) {
  return name
    .replace(/\.md$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\bmain\b|\bmaster\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

main().catch((err) => {
  console.error('[sync-references] failed:', err);
  process.exit(1);
});
