# freedmand/semantra@main

- Files included: 51
- Files skipped: 56
- Total size: 175.2 KB
- Estimated tokens: ~43,518

## Directory Structure

```
├── client
│   ├── .vscode
│   │   └── extensions.json
│   ├── public
│   │   ├── build
│   │   │   ├── bundle.css
│   │   │   ├── bundle.js
│   │   │   └── bundle.js.map
│   │   ├── favicon.png
│   │   ├── global.css
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── PdfChars.svelte
│   │   │   ├── PdfPage.svelte
│   │   │   ├── PdfPageImage.svelte
│   │   │   ├── PdfView.svelte
│   │   │   ├── SearchBar.svelte
│   │   │   ├── SearchResult.svelte
│   │   │   ├── SearchResults.svelte
│   │   │   ├── SearchResultText.svelte
│   │   │   ├── TabBar.svelte
│   │   │   └── TextView.svelte
│   │   ├── App.svelte
│   │   ├── explainQueue.ts
│   │   ├── global.d.ts
│   │   ├── layoutEngine.test.ts
│   │   ├── layoutEngine.ts
│   │   ├── main.ts
│   │   ├── Tailwind.svelte
│   │   └── types.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── rollup.config.js
│   ├── svelte.config.js
│   ├── tailwind.config.js
│   └── tsconfig.json
├── docs
│   ├── example_docs
│   │   ├── hamlet.pdf
│   │   └── us_inaugural_speeches.zip
│   ├── img
│   │   ├── button_breakdown.png
│   │   ├── contentwindow_pdf.png
│   │   ├── contentwindow_text.png
│   │   ├── downloading_initial_models.png
│   │   ├── dragging_file_terminal.png
│   │   ├── eye_button.png
│   │   ├── flask_server.png
│   │   ├── ghost_revenge_query.png
│   │   ├── ghost_search_results.png
│   │   ├── hamlet_calculating_embeddings.png
│   │   ├── hamlet_filename.png
│   │   ├── hamlet_first_excerpt.png
│   │   ├── hamlet_first_result.png
│   │   ├── hamlet_web_start.png
│   │   ├── inaugural_speeches_cleveland_healthcare.png
│   │   ├── inaugural_speeches_collapsed.png
│   │   ├── inaugural_speeches_collapsing_result.png
│   │   ├── inaugural_speeches_economic_capitalism_war.png
│   │   ├── inaugural_speeches_economic_growth_minus_unchecked_capitalism.png
│   │   ├── inaugural_speeches_economic_growth_unchecked_capitalism.png
│   │   ├── inaugural_speeches_economic_growth.png
│   │   ├── inaugural_speeches_eye_button.png
│   │   ├── inaugural_speeches_filter_files.png
│   │   ├── inaugural_speeches_healthcare_for_all.png
│   │   ├── inaugural_speeches_healthcare_plus_minus.png
│   │   ├── inaugural_speeches_initial_screen.png
│   │   ├── inaugural_speeches_positive_tag.png
│   │   ├── inaugural_speeches_processing.png
│   │   ├── inaugural_speeches_search_results.png
│   │   ├── inaugural_speeches_switch_views.png
│   │   ├── inaugural_speeches_tab_bar.jpg
│   │   ├── initial_screen.png
│   │   ├── interface_breakdown.png
│   │   ├── openai_copy_key.png
│   │   ├── openai_cost_confirm.png
│   │   ├── openai_new_secret.png
│   │   ├── openai_view_apikeys.png
│   │   ├── queen_king_example.png
│   │   ├── resultspane.png
│   │   ├── searchbar_stale.png
│   │   ├── searchbar_tags.png
│   │   ├── searchbar.png
│   │   ├── searchresult_breakdown.png
│   │   ├── tabbar.png
│   │   ├── toggle_results_button.png
│   │   ├── toggle_view_button.png
│   │   ├── window_anatomy.png
│   │   └── windows.png
│   ├── concept_embeddings.md
│   ├── concept_windows.md
│   ├── concepts.md
│   ├── guide_models.md
│   ├── guide_openai.md
│   ├── guides.md
│   ├── help.md
│   ├── lesson_1_semantically_searching_shakespeare.md
│   ├── lesson_2_advanced_searching.md
│   ├── publish_pypi.md
│   ├── README_es.md
│   ├── README_zh-CN.md
│   └── tutorial.md
├── src
│   └── semantra
│       ├── __init__.py
│       ├── client_public
│       ├── models.py
│       ├── pdf.py
│       ├── semantra.py
│       └── util.py
├── .gitignore
├── LICENSE
├── pyproject.toml
└── README.md
```

## Code Digest

### `.gitignore`

```gitignore
.*
!.gitignore
!.vscode
__pycache__
*.py[cod]
dist
*.egg-info
venv
build
!client/public/build
client/public/config
client/public/content
client/public/models
```

### `client/.gitignore`

```gitignore
/node_modules/
/public/build/

.DS_Store

```

### `client/package.json`

```json
{
  "name": "svelte-app",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "rollup -c --environment NODE_ENV:production",
    "dev": "rollup -c -w",
    "build:watch": "PRODUCTION_ENV=true rollup -c -w --environment NODE_ENV:production",
    "start": "sirv public --no-clear",
    "check": "svelte-check",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest --run"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "^24.0.0",
    "@rollup/plugin-node-resolve": "^15.0.0",
    "@rollup/plugin-terser": "^0.4.0",
    "@rollup/plugin-typescript": "^11.1.0",
    "@tsconfig/svelte": "^3.0.0",
    "@vitest/ui": "^0.30.1",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21",
    "postcss-load-config": "^4.0.1",
    "rollup": "^3.15.0",
    "rollup-plugin-css-only": "^4.3.0",
    "rollup-plugin-livereload": "^2.0.0",
    "rollup-plugin-svelte": "^7.1.2",
    "svelte": "^3.55.0",
    "svelte-check": "^3.0.0",
    "svelte-preprocess": "^5.0.3",
    "tailwindcss": "^3.3.1",
    "tslib": "^2.5.0",
    "typescript": "^4.9.0",
    "vitest": "^0.30.1"
  },
  "dependencies": {
    "ace-builds": "^1.16.0",
    "rbush": "^3.0.1",
    "sirv-cli": "^2.0.0",
    "svelte-inview": "^4.0.0"
  }
}

```

### `client/postcss.config.js`

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

### `client/public/global.css`

```css
html, body {
	position: relative;
	width: 100%;
	height: 100%;
}

body {
	color: #333;
	margin: 0;
	padding: 8px;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

a {
	color: rgb(0,100,200);
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

a:visited {
	color: rgb(0,80,160);
}

label {
	display: block;
}

input, button, select, textarea {
	font-family: inherit;
	font-size: inherit;
	-webkit-padding: 0.4em 0;
	padding: 0.4em;
	margin: 0 0 0.5em 0;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 2px;
}

input:disabled {
	color: #ccc;
}

button {
	color: #333;
	background-color: #f4f4f4;
	outline: none;
}

button:disabled {
	color: #999;
}

button:not(:disabled):active {
	background-color: #ddd;
}

button:focus {
	border-color: #666;
}

```

### `client/public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <title>Semantra</title>

    <link rel="icon" type="image/png" href="/favicon.png" />
    <!-- <link rel='stylesheet' href='/global.css'> -->
    <link rel="stylesheet" href="/build/bundle.css" />

    <script defer src="/build/bundle.js"></script>
  </head>

  <body></body>
</html>

```

### `client/README.md`

```md
# This repo is no longer maintained. Consider using `npm init vite` and selecting the `svelte` option or — if you want a full-fledged app framework — use [SvelteKit](https://kit.svelte.dev), the official application framework for Svelte.

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```

```

### `client/rollup.config.js`

```js
import { spawn } from "child_process";
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import css from "rollup-plugin-css-only";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";

const production =
  process.env.PRODUCTION_ENV === "true" || !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = spawn("npm", ["run", "start", "--", "--dev"], {
        stdio: ["ignore", "inherit", "inherit"],
        shell: true,
      });

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({ sourceMap: !production, postcss: true }),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css({ output: "bundle.css" }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
      exportConditions: ["svelte"],
    }),
    commonjs(),
    typescript({
      sourceMap: true,
      inlineSources: !production,
    }),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

```

### `client/src/App.svelte`

```svelte
<script lang="ts">
  import { onMount, tick } from "svelte";
  import SearchResults from "./components/SearchResults.svelte";
  import TextView from "./components/TextView.svelte";
  import Tailwindcss from "./Tailwind.svelte";
  import SearchBar from "./components/SearchBar.svelte";
  import {
    type File,
    type Navigation,
    type PdfPosition,
    type SearchResultSet,
    type Preference,
    preferenceKey,
    type ParsedQuery,
  } from "./types";
  import PdfView from "./components/PdfView.svelte";
  import TabBar from "./components/TabBar.svelte";

  let files: File[] = [];
  let activeFileIndex = 0;
  let tokens: string[] = [];
  let text: string | null = null;
  let pdfPositions: PdfPosition[] = [];
  let updating = false;
  let unsearched = true;
  let searchResultsElem: SearchResults;

  let preferences: { [key: string]: Preference } = {};

  $: activeFile =
    activeFileIndex < files.length ? files[activeFileIndex] : null;
  $: filesByPath = Object.fromEntries(
    files.map((file) => [file.filename, file])
  );
  $: fileIndicesByPath = Object.fromEntries(
    files.map((file, index) => [file.filename, index])
  );

  $: updateFile(activeFile);

  async function updateFile(file: File | null) {
    // Reset everything
    tokens = [];
    text = null;
    pdfPositions = [];

    if (file == null) return;

    updating = true;

    // Get text
    const textResponse = await fetch(
      `/api/text?filename=${encodeURIComponent(file.filename)}`
    );
    tokens = await textResponse.json();
    text = tokens.join("");

    if (file.filetype === "pdf") {
      const pdfResponse = await fetch(
        `/api/pdfpositions?filename=${encodeURIComponent(file.filename)}`
      );
      pdfPositions = await pdfResponse.json();
    }

    await tick();
    navigate();

    updating = false;
  }

  let searchResultSet: SearchResultSet = {
    results: [],
    sort: "asc",
  };

  let textView: TextView;
  let pdfView: PdfView;
  let searchBar: SearchBar;

  export function parseQuery(query: string): ParsedQuery[] {
    // Parse the query
    // e.g. "dog + cat" => [{query: "dog", weight: 1}, {query: "cat", weight: 1}]
    // e.g. "dog - cat" => [{query: "dog", weight: 1}, {query: "cat", weight: -1}]
    // e.g. "dog is cool - cat" => [{query: "dog is cool", weight: 1}, {query: "cat", weight: -1}]
    // e.g. "dog +1.2 cat" => [{query: "dog", weight: 1}, {query: "cat", weight: 1.2}]
    // e.g. "+3 dogs are nice -2 cats are mean" => [{query: "dogs are nice", weight: 3}, {query: "cats are mean", weight: 2}]
    // Parse the query
    const regex = /([\+\-]?\d*\.?\d*\s*)?([^\+\-]+)/g;
    const parsedQueries: ParsedQuery[] = [];

    let match;
    while ((match = regex.exec(query)) !== null) {
      const weight =
        parseFloat(match[1]) || (match[1] && match[1].includes("-") ? -1 : 1);
      const searchTerm = match[2].trim();
      parsedQueries.push({ query: searchTerm, weight });
    }

    return parsedQueries;
  }

  function scrollSearchResultsToTop() {
    if (searchResultsElem) searchResultsElem.scrollToTop();
  }

  async function handleSearch(query: string) {
    const preferenceValues = Object.values(preferences)
      .filter((preference) => preference.weight !== 0)
      .map((x) => ({ ...x }));

    // Ignore empty queries
    if (query.trim() === "" && preferenceValues.length === 0) {
      searchResultSet = [];
      scrollSearchResultsToTop();
      return;
    }
    const parsedQueries = parseQuery(query);

    // Adjust weights so that all positive weights are split evenly
    // and all negative weights are split evenly, and the sum of all
    // weights is 1
    const POSITIVE_RATIO = 0.61803398875;
    const NEGATIVE_RATIO = 1 - POSITIVE_RATIO;

    const totalPositiveCount =
      parsedQueries.filter((query) => query.weight > 0).length +
      preferenceValues.filter((preference) => preference.weight > 0).length;
    const totalNegativeCount =
      parsedQueries.filter((query) => query.weight < 0).length +
      preferenceValues.filter((preference) => preference.weight < 0).length;
    for (const query of parsedQueries) {
      if (query.weight > 0) {
        query.weight *= POSITIVE_RATIO / totalPositiveCount;
      } else if (query.weight < 0) {
        query.weight *= NEGATIVE_RATIO / totalNegativeCount;
      }
    }
    for (const preference of preferenceValues) {
      if (preference.weight > 0) {
        preference.weight *= POSITIVE_RATIO / totalPositiveCount;
      } else if (preference.weight < 0) {
        preference.weight *= NEGATIVE_RATIO / totalNegativeCount;
      }
    }

    const response = await fetch("/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        queries: parsedQueries,
        preferences: preferenceValues,
      }),
    });
    searchResultSet = await response.json();
    sidebarExpanded = true;
    scrollSearchResultsToTop();
    unsearched = false;
  }

  onMount(async () => {
    const filesResponse = await fetch("/api/files");
    files = await filesResponse.json();
  });

  $: tokenOffsets = tokens.reduce(
    (acc, token) => {
      const lastOffset = acc[acc.length - 1];
      acc.push(lastOffset + token.length);
      return acc;
    },
    [0]
  );

  let pendingNavigation: Navigation | null = null;

  async function navigate() {
    if (pendingNavigation == null) return;
    sidebarExpanded = false;
    if (textView) {
      textView.navigate(
        tokenOffsets[pendingNavigation.searchResult.offset[0]],
        tokenOffsets[pendingNavigation.searchResult.offset[1]]
      );
    } else if (pdfView) {
      pdfView.navigate(
        tokenOffsets[pendingNavigation.searchResult.offset[0]],
        tokenOffsets[pendingNavigation.searchResult.offset[1]]
      );
    }
    pendingNavigation = null;

    await tick();
    // Scroll active tab into view
    const activeTab = document.querySelector(".active-tab");
    if (activeTab) {
      activeTab.scrollIntoView({
        inline: "center",
      });
    }
  }

  async function jumpToResult(result: Navigation) {
    pendingNavigation = result;
    const newFileIndex = fileIndicesByPath[result.file.filename];
    if (newFileIndex !== activeFileIndex) {
      activeFileIndex = newFileIndex;
    } else {
      navigate();
    }
  }

  function setPreference(preference: Preference) {
    preferences[preferenceKey(preference.file, preference.searchResult)] =
      preference;
    if (searchBar != null) searchBar.scrollToBottomOfPreferences();
  }

  let sidebarExpanded = true;
</script>

<Tailwindcss />

<main class="flex flex-col h-full bg-slate-100">
  <header
    class="flex flex-row border-b-4 border-black py-4 px-8 max-lg:px-4 items-start"
  >
    <h1 class="text-3xl font-mono font-bold inline-flex pr-6 mt-1">Semantra</h1>
    <SearchBar
      bind:this={searchBar}
      {preferences}
      on:setPreference={(e) => setPreference(e.detail)}
      on:search={(e) => handleSearch(e.detail)}
    />
  </header>
  <article class="flex flex-1 flex-row relative items-stretch">
    <SearchResults
      bind:sidebarExpanded
      bind:this={searchResultsElem}
      {unsearched}
      {preferences}
      on:setPreference={(e) => setPreference(e.detail)}
      on:navigate={(e) => jumpToResult(e.detail)}
      {activeFile}
      {filesByPath}
      {searchResultSet}
    />
    <div class="flex flex-col flex-1">
      {#if activeFile != null}
        <TabBar disabled={updating} bind:index={activeFileIndex} {files} />
        {#if activeFile.filetype === "text"}
          <TextView
            bind:this={textView}
            text={text == null ? "Loading..." : text}
          />
        {:else if activeFile.filetype === "pdf"}
          <PdfView
            bind:this={pdfView}
            file={activeFile}
            positions={pdfPositions}
          />
        {/if}
      {:else}
        <div class="text-gray-600 ml-2 mt-2 text-sm">Loading...</div>
      {/if}
    </div>
  </article>
  <footer class="bg-black text-white py-1 px-4 text-sm">
    <a
      class="underline mr-4"
      href="https://github.com/freedmand/semantra/blob/main/docs/help.md"
      target="_blank">Help</a
    >
    <a
      class="underline mr-4"
      href="https://github.com/freedmand/semantra/blob/main/docs/tutorial.md"
      target="_blank">Tutorial</a
    >
    <a
      class="underline"
      href="https://github.com/freedmand/semantra"
      target="_blank">Source code</a
    >
  </footer>
</main>

<style>
  :global(html, body) {
    @apply h-full;
  }
</style>

```

### `client/src/components/PdfChars.svelte`

```svelte
<script lang="ts">
  import { onMount, tick } from "svelte";
  import type { File, Offset, PdfChar, PdfPosition } from "../types";
  import { copyChars, layout } from "../layoutEngine";

  export let file: File;
  export let pageNumber: number;
  export let position: PdfPosition;
  export let selectedOffset: Offset | null;
  export let zoom: number;
  export let scrollHighlights: boolean;

  function x(x: number): number {
    return (x / position.page_width) * 100;
  }

  function y(y: number): number {
    return (y / position.page_height) * 100;
  }

  async function scrollHighlightsIntoView(...args: any) {
    await tick();
    const highlights = document.querySelectorAll(".page-highlight");
    if (highlights.length == 0) return;
    highlights[0].scrollIntoView({
      block: "center",
    });
    scrollHighlights = false;
  }

  function processChars(chars: PdfChar[]): [PdfChar[], [number, number][]] {
    // Join words together
    const processedChars: PdfChar[] = [];

    const isSpace = (char: PdfChar): boolean => {
      return /\s/.test(char[0]);
    };

    const wordIndexMap: [number, number][] = [];
    let currentWord: PdfChar[] = [];
    let wordStart: number | null = null;
    let wordEnd: number | null = null;

    const pushChar = (char: PdfChar, start: number, end: number) => {
      processedChars.push(char);
      wordIndexMap.push([start, end]);
    };

    const buildWord = (char: PdfChar, i: number) => {
      if (wordStart == null) wordStart = i;
      wordEnd = i + 1;
      currentWord.push(char);
    };

    const getMin = (l: number[]): number => {
      let min: number;
      for (const x of l) {
        if (min == null || x < min) {
          min = x;
        }
      }
      return min;
    };

    const getMax = (l: number[]): number => {
      let max: number;
      for (const x of l) {
        if (max == null || x > max) {
          max = x;
        }
      }
      return max;
    };

    const pushWord = () => {
      if (currentWord.length == 0 || wordStart == null || wordEnd == null)
        return;
      const word = currentWord.map((x) => x[0]).join("");
      const x0 = getMin(currentWord.map((x) => x[1].x0));
      const x1 = getMax(currentWord.map((x) => x[1].x1));
      const y0 = getMin(currentWord.map((x) => x[1].y0));
      const y1 = getMax(currentWord.map((x) => x[1].y1));
      const char: PdfChar = [word, { x0, x1, y0, y1 }];
      pushChar(char, wordStart, wordEnd);
      currentWord = [];
      wordStart = null;
      wordEnd = null;
    };

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (isSpace(char)) {
        pushWord();
        pushChar(char, i, i + 1);
      } else {
        buildWord(char, i);
      }
    }
    pushWord();

    return [processedChars, wordIndexMap];
  }

  let chars: PdfChar[] = [];
  $: words = processChars(copyChars(chars));
  $: processedChars = layout(
    position.page_width,
    position.page_height,
    words[0]
  );

  function getHighlightWordIndices(
    words: [PdfChar[], [number, number][]],
    start: number,
    end: number
  ): number[] {
    const wordIndices = words[1];
    const highlights = wordIndices
      .map<[number, [number, number]]>((x, i) => [i, x])
      .filter((x) => x[1][0] >= start && x[1][1] <= end)
      .map((x) => x[0]);
    return highlights;
  }

  $: highlightWordIndices =
    selectedOffset == null
      ? []
      : getHighlightWordIndices(
          words,
          selectedOffset[0] - position.char_index,
          selectedOffset[1] - position.char_index
        );

  $: scrollHighlights && scrollHighlightsIntoView(highlightWordIndices);
  let containerElem: HTMLElement;

  const baseFontSize = 16;
  let mWidth = 10;
  let mHeight = 24;

  onMount(async () => {
    // Measure a monospace 'm'
    const m = document.createElement("span");
    m.textContent = "m";
    m.style.position = "absolute";
    m.style.visibility = "hidden";
    m.style.whiteSpace = "pre";
    m.style.fontFamily = "monospace";
    m.style.fontSize = `${baseFontSize}px`;
    containerElem.appendChild(m);
    const mBounds = m.getBoundingClientRect();
    mWidth = mBounds.width;
    mHeight = mBounds.height;
    containerElem.removeChild(m);

    const response = await fetch(
      `/api/pdfchars?filename=${encodeURIComponent(
        file.filename
      )}&page=${pageNumber}`
    );
    const json = await response.json();
    chars = json.map((x) => [
      x[0],
      {
        x0: x[1][0],
        y0: x[1][1],
        x1: x[1][2],
        y1: x[1][3],
      },
    ]);
  });
</script>

<div class="absolute left-0 top-0 right-0 bottom-0" bind:this={containerElem}>
  {#each processedChars as char, i}
    <div
      class="absolute content-box text-transparent"
      style="left: {(char[1].x0 - (char[1].lpad || 0)) *
        zoom}px; top: {(position.page_height -
        char[1].y1 -
        (char[1].bpad || 0)) *
        zoom}px; width: {(char[1].x1 -
        char[1].x0 +
        (char[1].lpad || 0) +
        (char[1].rpad || 0)) *
        zoom}px; height: {(char[1].y1 -
        char[1].y0 +
        (char[1].bpad || 0) +
        (char[1].tpad || 0)) *
        zoom}px;
        padding-left: {(char[1].lpad || 0) * zoom}px;
        padding-right: {(char[1].rpad || 0) * zoom}px;
        padding-bottom: {(char[1].tpad || 0) * zoom}px;
        padding-top: {(char[1].bpad || 0) * zoom}px;"
    >
      <span
        class="inline-block whitespace-pre origin-top-left select-all"
        class:page-highlight={highlightWordIndices.includes(i)}
        style="font-family: monospace; font-size: {baseFontSize}px; transform: scale({((char[1]
          .x1 -
          char[1].x0) /
          mWidth /
          char[0].length) *
          zoom}, {((char[1].y1 - char[1].y0) / mHeight) * zoom});"
        >{char[0]}</span
      >
    </div>
  {/each}
</div>

<style>
  .page-highlight {
    background-color: rgb(255 255 0 / 72%);
    mix-blend-mode: darken;
  }
</style>

```

### `client/src/components/PdfPage.svelte`

```svelte
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { inview, type Options } from "svelte-inview";
  import type { File, Offset, PdfPosition } from "../types";
  import PdfPageImage from "./PdfPageImage.svelte";
  import PdfChars from "./PdfChars.svelte";
  const dispatch = createEventDispatcher();

  const options: Options = {
    rootMargin: "50px",
  };

  export let file: File;
  export let position: PdfPosition;
  export let pageNumber: number;
  export let selectedOffset: Offset | null;
  export let zoom: number;
  export let scrollHighlights: boolean;
  const marginPx = 16;
  let isInView = false;
  let isInViewForEnoughTime = false;

  $: {
    if (isInView) {
      setTimeout(() => {
        isInViewForEnoughTime = true;
      }, 100);
    } else {
      isInViewForEnoughTime = false;
    }
  }
</script>

<div
  use:inview={options}
  on:inview_change={(e) => {
    isInView = e.detail.inView;
    dispatch("inview", {
      isInView,
      pageNumber,
    });
  }}
  class="bg-white bg-contain relative"
  style="width: {position.page_width * zoom}px; height: {position.page_height *
    zoom}px; margin: {marginPx * zoom}px auto {marginPx * zoom}px auto"
>
  {#if isInView && isInViewForEnoughTime}
    <PdfPageImage {file} {pageNumber} scales={[0.25, 2]} />
    <PdfChars
      {file}
      {position}
      {pageNumber}
      {selectedOffset}
      {zoom}
      bind:scrollHighlights
    />
  {/if}
</div>

```

### `client/src/components/PdfPageImage.svelte`

```svelte
<script lang="ts">
  import type { File } from "../types";

  export let file: File;
  export let pageNumber: number;
  export let scales: number[];

  let scaleIndex = 0;

  function getSrc(scale: number) {
    return `/api/pdfpage?filename=${encodeURIComponent(
      file.filename
    )}&page=${pageNumber}&scale=${scale}`;
  }

  function handleLoad() {
    if (scaleIndex !== scales.length - 1) {
      scaleIndex++;
    }
  }
</script>

<img
  on:load={handleLoad}
  draggable="false"
  class="absolute left-0 top-0 right-0 bottom-0 w-full h-full object-contain select-none pointer-events-none"
  src={getSrc(scales[scaleIndex])}
  alt="Page {pageNumber + 1}"
/>

```

### `client/src/components/PdfView.svelte`

```svelte
<script lang="ts">
  import { tick } from "svelte";
  import type { File, Offset, PdfPosition } from "../types";
  import PdfPage from "./PdfPage.svelte";

  export let positions: PdfPosition[];
  export let file: File;

  let currentPage = 1;
  $: numPages = positions.length;

  let pageContainer: HTMLDivElement;

  let zoom = 1;
  const MAX_ZOOM = 4;
  const MIN_ZOOM = 0.4;

  let selectedOffset: Offset | null = null;

  let pagesInView: { [page: number]: boolean } = {};

  $: sortedPages = Object.entries(pagesInView)
    .filter(([_, isInView]) => isInView)
    .sort(([a, _], [b, __]) => parseInt(a) - parseInt(b));
  $: pageObjects = sortedPages.map<[number, Element]>(([page, _]) => [
    parseInt(page),
    pageContainer.children[parseInt(page)],
  ]);

  $: pageObjects.length > 0 && updateCurrentPage();

  async function adjustZoom(newZoom: number) {
    if (newZoom > MAX_ZOOM || newZoom < MIN_ZOOM) {
      return;
    }
    const oldZoom = zoom;
    let scrollTop = pageContainer.scrollTop;
    zoom = newZoom;
    await tick();
    pageContainer.scrollTop = scrollTop * (newZoom / oldZoom);
  }

  function getPageNumber(offset: number): [number, number] {
    let page = 0;
    for (; page < positions.length; page++) {
      const positionOffset = positions[page].char_index;
      if (offset < positionOffset) {
        return [page - 1, offset - positions[page - 1].char_index];
      }
    }
    return [page - 1, offset - positions[page - 1].char_index];
  }

  // When true, highlights will scroll into view
  let scrollHighlights = false;

  export function navigate(start: number, end: number) {
    selectedOffset = [start, end];

    // Jump to selection
    const [pageNumber, _] = getPageNumber(start);
    pageContainer.children[pageNumber].scrollIntoView();
    scrollHighlights = true;
  }

  function updatePageNumber({
    isInView,
    pageNumber,
  }: {
    isInView: boolean;
    pageNumber: number;
  }) {
    pagesInView[pageNumber] = isInView;
    pagesInView = { ...pagesInView };
  }

  function updateCurrentPage() {
    const windowHeight = window.innerHeight;
    for (const [pageNumber, page] of pageObjects) {
      if (page == null) {
        continue;
      }
      const rect = page.getBoundingClientRect();
      if (rect.bottom >= windowHeight / 2) {
        currentPage = pageNumber + 1;
        return;
      }
    }
    if (pageObjects.length > 0) {
      currentPage = pageObjects[0][0] + 1;
    }
  }

  function jumpToCurrentPage() {
    const elem = pageContainer.children[currentPage - 1];
    if (elem != null) {
      elem.scrollIntoView();
    }
  }
</script>

<div class="relative flex-1">
  <div class="absolute left-0 top-0 right-0 bottom-0">
    <div
      bind:this={pageContainer}
      class="absolute left-0 top-0 right-0 bottom-0 bg-gray-400 w-full h-full overflow-auto"
      on:scroll={updateCurrentPage}
    >
      {#each positions as position, pageNumber}
        <PdfPage
          {file}
          {pageNumber}
          {position}
          {selectedOffset}
          {zoom}
          bind:scrollHighlights
          on:inview={(e) => updatePageNumber(e.detail)}
        />
      {/each}
    </div>
    {#if numPages > 0}
      <div class="absolute left-2 bottom-2">
        <div class="text-left">
          <div
            class="bg-slate-100 border-2 border-black text-center font-mono font-bold text-2xl inline-block"
          >
            <button
              class="w-8 h-8 align-middle"
              on:click={() => adjustZoom(zoom + 0.1)}>+</button
            ><br />
            <button
              class="w-8 h-8 align-middle"
              on:click={() => adjustZoom(zoom - 0.1)}>-</button
            >
          </div>
        </div>
        <div
          class="bg-slate-100 border-2 border-black font-mono font-bold text-sm mt-2 p-2"
        >
          <input
            class="border border-gray-300 mr-1 pl-1"
            style="width: 7ch;"
            type="number"
            size="4"
            min="1"
            max={numPages}
            bind:value={currentPage}
            on:input={jumpToCurrentPage}
          />/{numPages}
        </div>
      </div>
    {/if}
  </div>
</div>

```

### `client/src/components/SearchBar.svelte`

```svelte
<script lang="ts">
  import { createEventDispatcher, tick } from "svelte";
  import type { Preference } from "../types";
  const dispatch = createEventDispatcher();

  export let preferences: { [key: string]: Preference };

  $: preferenceValues = Object.values(preferences).filter(
    (preference) => preference.weight !== 0
  );

  function getSearchKey(..._reactiveArgs: any[]) {
    return JSON.stringify({
      query: value,
      preferences: preferenceValues || [],
    });
  }

  let value = "";
  let lastSearchKey = getSearchKey();

  let preferenceContainer: HTMLDivElement;

  export async function scrollToBottomOfPreferences() {
    if (preferenceContainer != null) {
      // Wait for a tick so new preferences are reflected
      await tick();
      preferenceContainer.scrollTop = preferenceContainer.scrollHeight;
    }
  }

  $: searchKey = getSearchKey(value, preferenceValues);
  $: searchOutdated = searchKey !== lastSearchKey;

  function search() {
    dispatch("search", value);
    lastSearchKey = searchKey;
  }
</script>

<div class="flex flex-1 flex-col">
  <div class="flex items-center relative flex-1">
    <input
      class="bg-white py-2 px-4 pl-12 font-mono w-full rounded border-black border"
      class:bg-yellow-50={searchOutdated}
      class:border-yellow-600={searchOutdated}
      class:border-dashed={searchOutdated}
      placeholder="Search"
      bind:value
      on:keydown={(e) => {
        if (e.key === "Enter") {
          search();
        }
      }}
    />
    <button class="search-button" on:click={search}>Search</button>
  </div>

  <div
    class="max-h-24 overflow-y-auto -mb-2 mt-2"
    bind:this={preferenceContainer}
  >
    {#each preferenceValues as preference}
      <button
        class="w-64 max-sm:w-40 truncate monospace rounded px-2 inline-block mr-2 mb-2 cursor"
        class:bg-blue-200={preference.weight > 0}
        class:bg-orange-200={preference.weight < 0}
        title={`${preference.file.basename}: ${preference.searchResult.text}`}
        on:click={() => dispatch("setPreference", { ...preference, weight: 0 })}
      >
        {#if preference.weight > 0}
          <span class="text-blue-600 font-bold mr-1">+</span>
        {:else if preference.weight < 0}
          <span class="text-orange-500 font-bold mr-1">-</span>
        {/if}
        {preference.searchResult.text}
      </button>
    {/each}
  </div>
</div>

<style>
  .search-button {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='24' fill='none'%3E%3Cpath stroke='%23202020' stroke-width='3' d='M10.045 13.424A7.152 7.152 0 1 0 21.003 4.23a7.152 7.152 0 0 0-10.958 9.194Zm0 0-8.984 8.984'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    text-indent: -9999px;
    width: 25px;
    position: absolute;
    left: 10px;
  }
</style>

```

### `client/src/components/SearchResult.svelte`

```svelte
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import {
    preferenceKey,
    type File,
    type SearchResult,
    type Preference,
  } from "../types";
  import SearchResultText from "./SearchResultText.svelte";

  export let file: File;
  export let searchResult: SearchResult;
  export let preferences: { [key: string]: Preference };
  export let showFilename = false;

  const dispatch = createEventDispatcher();

  $: prefKey = preferenceKey(file, searchResult);
  $: preference = preferences[prefKey] || {
    file,
    searchResult,
    weight: 0,
  };

  function jumpToResult(file: File, searchResult: SearchResult) {
    dispatch("navigate", { file, searchResult });
  }

  function setPreference(
    e: Event,
    file: File,
    searchResult: SearchResult,
    weight: number
  ) {
    dispatch("setPreference", {
      file,
      searchResult,
      weight,
    });
    e.stopPropagation();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li
  on:click={() => jumpToResult(file, searchResult)}
  class="font-mono text-sm border-b last:border-0 py-4 px-4 border-black pointer"
>
  <div
    class="border-l-4 border-transparent pl-2 -ml-2"
    class:!border-blue-600={preference.weight > 0}
    class:!border-orange-500={preference.weight < 0}
  >
    {#if showFilename}
      <div class="font-bold text-base my-2">
        {file.basename}
        <span class="highlight px-1 rounded text-xs"
          >{searchResult.distance.toFixed(2)}</span
        >
      </div>
    {:else}
      <span class="text-xs highlight px-1 rounded"
        >{searchResult.distance.toFixed(2)}</span
      >
    {/if}
    <button
      class="bg-gray-300 rounded px-2"
      class:bg-blue-200={preference.weight > 0}
      class:text-blue-600={preference.weight > 0}
      class:font-bold={preference.weight > 0}
      on:click={(e) =>
        setPreference(e, file, searchResult, preference.weight > 0 ? 0 : 1)}
      >+</button
    >
    <button
      class="bg-gray-300 rounded px-2"
      class:bg-orange-200={preference.weight < 0}
      class:text-orange-500={preference.weight < 0}
      class:font-bold={preference.weight < 0}
      on:click={(e) =>
        setPreference(e, file, searchResult, preference.weight < 0 ? 0 : -1)}
      >-</button
    >
    {#key JSON.stringify( { filename: searchResult.filename, offset: searchResult.offset, queries: searchResult.queries, preferences: searchResult.preferences, text: searchResult.text } )}
      <SearchResultText {searchResult} text={searchResult.text} />
    {/key}
  </div>
</li>

<style>
  .highlight {
    background: rgb(255 222 0 / 39%);
  }
</style>

```

### `client/src/components/SearchResults.svelte`

```svelte
<script lang="ts">
  import type {
    File,
    Preference,
    SearchResult,
    SearchResultSet,
    ScoredSearchResult,
  } from "../types";
  import SearchResultComponent from "./SearchResult.svelte";

  export let searchResultSet: SearchResultSet;
  export let filesByPath: { [path: string]: File };
  export let preferences: { [key: string]: Preference };
  export let activeFile: File | null;
  export let unsearched: boolean;
  export let sidebarExpanded = false;

  let filterViewed = false;
  let excerptView = false;

  let filenameFilter = "";

  let searchContainer: HTMLDivElement;

  let detailReverse = false;
  let filenameDetailClosed: { [filename: string]: boolean } = {};

  export function scrollToTop() {
    if (searchContainer) searchContainer.scrollTop = 0;
  }

  function filterFilename(filenameFilter: string, filename: string): boolean {
    return filename.toLowerCase().includes(filenameFilter.toLowerCase());
  }

  function getScore(searchResults: SearchResult[]): number {
    let total = 0;
    for (const searchResult of searchResults) {
      total += searchResult.distance;
    }
    return total / searchResults.length;
  }

  $: scoredSearchResultSet = searchResultSet.results
    .map<ScoredSearchResult>(([filename, searchResults]) => [
      filename,
      searchResults,
      getScore(searchResults),
    ])
    .sort((a, b) =>
      searchResultSet.sort === "asc" ? a[2] - b[2] : b[2] - a[2]
    )
    .filter(([filename]) => {
      if (filterViewed && activeFile != null) {
        return filename === activeFile.filename;
      } else {
        return true;
      }
    });
  $: sortedSearchResults = searchResultSet.results
    .map((x) => x[1])
    .flat()
    .sort((a, b) =>
      searchResultSet.sort === "asc"
        ? a.distance - b.distance
        : b.distance - a.distance
    )
    .filter((searchResult) => {
      if (filterViewed && activeFile != null) {
        return searchResult.filename === activeFile.filename;
      } else {
        return true;
      }
    });

  function handleToggle(e: Event, filename: string) {
    const open = (e.target as HTMLDetailsElement).open;
    filenameDetailClosed[filename] = detailReverse ? open : !open;
  }
</script>

<div
  class="absolute top-11 z-10 hidden max-sm:block"
  class:hide={sidebarExpanded}
>
  <button
    class="button hamburger-icon"
    title="Toggle sidebar expanded"
    on:click={() => (sidebarExpanded = !sidebarExpanded)}
    >Toggle sidebar expanded</button
  >
</div>
<div
  class="w-1/3 max-lg:w-64 bg-slate-100 max-sm:absolute max-sm:left-0 max-sm:right-8 max-sm:bottom-0 max-sm:top-0 max-sm:w-[calc(100%-8rem)] border-r-4 z-10 border-black flex flex-col items-stretch flex-shrink-0"
  class:hide={!sidebarExpanded}
>
  <div class="flex items-center mb-2 pr-2 max-lg:flex-wrap">
    <div class="mt-2 hidden max-sm:block">
      <button
        class="button hamburger-icon"
        title="Toggle sidebar expanded"
        on:click={() => (sidebarExpanded = !sidebarExpanded)}
        >Toggle sidebar expanded</button
      >
    </div>
    <div class="flex-1 flex items-center relative px-2 mt-2" class:unsearched>
      <input
        class="border border-black bg-white py-1 pl-8 font-mono rounded flex-1 w-40"
        placeholder="Filter files"
        bind:value={filenameFilter}
      />
      <div class="filter-icon">Filter</div>
    </div>
    <div class="mt-2" class:unsearched>
      {#if !excerptView}
        <button
          class="button toggle-detail-icon"
          title="Toggle search results expanded/collapsed"
          on:click={() => {
            if (detailReverse) {
              detailReverse = false;
              filenameDetailClosed = {};
            } else {
              detailReverse = true;
              filenameDetailClosed = {};
            }
          }}
          >{#if detailReverse}Collapse all{:else}Expand all{/if}</button
        >
      {/if}
      <button
        class="button solo-icon"
        class:button-active={filterViewed}
        disabled={activeFile == null}
        on:click={() => (filterViewed = !filterViewed)}
        title={filterViewed ? "Show all files" : "Filter to only viewed file"}
      >
        {#if filterViewed}
          Show all files
        {:else}Filter to only viewed file
        {/if}</button
      >
      <button
        class="button toggle-view-icon"
        title="Toggle search results view"
        on:click={() => (excerptView = !excerptView)}
      >
        {#if excerptView}
          Show file view
        {:else}Show exercept view{/if}</button
      >
    </div>
  </div>
  <div class="flex-1 relative">
    <div
      class="absolute left-0 top-0 right-0 bottom-0 break-words overflow-y-auto pb-2"
      bind:this={searchContainer}
    >
      {#if excerptView}
        <!-- Excerpt view -->
        <ul class="-mt-2">
          {#each sortedSearchResults as searchResult}
            {@const file = filesByPath[searchResult.filename]}
            {#if filterFilename(filenameFilter, file.basename)}
              {#key searchResult}
                <SearchResultComponent
                  on:navigate
                  on:setPreference
                  {file}
                  {searchResult}
                  {preferences}
                  showFilename={true}
                />
              {/key}
            {/if}
          {/each}
        </ul>
      {:else}
        <!-- File view -->
        {#each scoredSearchResultSet as [filename, searchResults, score]}
          {@const file = filesByPath[filename]}
          {#if filterFilename(filenameFilter, file.basename)}
            {#key [filename, searchResults, score]}
              <details
                open={detailReverse
                  ? filenameDetailClosed[filename]
                  : !filenameDetailClosed[filename]}
                on:toggle={(e) => handleToggle(e, filename)}
              >
                <summary
                  class="font-mono font-bold cursor-pointer select-none px-2 pt-2 top-0 sticky bg-slate-100"
                >
                  {file.basename}
                  <span class="text-xs highlight px-1 rounded"
                    >{score.toFixed(2)}</span
                  >
                </summary>
                <ul class="-mt-2">
                  {#each searchResults as searchResult}
                    {#key searchResult}
                      <SearchResultComponent
                        on:navigate
                        on:setPreference
                        {file}
                        {searchResult}
                        {preferences}
                        showFilename={false}
                      />
                    {/key}
                  {/each}
                </ul>
              </details>
            {/key}
          {/if}
        {/each}
      {/if}
      {#if unsearched}
        <div class="m-2 font-mono">
          Enter a search query above and click the search icon or type “Enter”.
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .highlight {
    background: rgb(255 222 0 / 39%);
  }

  .filter-icon {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04LjYyNSAxMy44MzNoMS4yMk0uMjgyIDEuNTQyaDE3LjkwN002Ljk1NiA5LjczNmg0LjU1OE0zLjY2IDUuNjM5aDExLjE1Ii8+PC9zdmc+");
    background-repeat: no-repeat;
    text-indent: -9999px;
    width: 20px;
    position: absolute;
    left: 16px;
    top: 8px;
  }

  .button {
    @apply border border-black rounded bg-white p-1;
    text-indent: -9999px;
    width: 42px;
    margin: 0 0 0 4px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .button-active {
    @apply bg-gray-200;
  }

  .solo-icon {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMyIgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNMTAuMTMzIDEuNDhjLTMuNTg1IDAtNC44MzQgMS40NzMtOC45MDggNS4yMDcgNC4wNzQgMy43MzQgNS4zMjMgNS4yMDggOC45MDggNS4yMDggMy41ODUgMCA0LjgzNC0xLjQ3NCA4LjkwOC01LjIwOC00LjA3NC0zLjczNC01LjMyMy01LjIwNy04LjkwOC01LjIwN1oiLz48Y2lyY2xlIGN4PSIxMC4xMzMiIGN5PSI2LjY4NyIgcj0iMi4zMDUiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSIxMC4xMzMiIGN5PSI2LjY4NyIgcj0iMy42OTQiIHN0cm9rZT0iIzAwMCIvPjwvc3ZnPg==");
    background-size: 80%;
  }

  .toggle-view-icon {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjIgMWgxMHYxSC4zVjFabTEwLjMgOC45aDguNlYxMWgtOC42VjkuOVptLS4yLTdIMi44VjRoNy41VjNabS4yIDguOWg4LjZ2MWgtOC42di0xWm0tLjItN0gyLjhWNmg3LjVWNVptLjIgOC45aDguNnYxaC04LjZ2LTFabS0uMi03SDIuOHYxLjFoNy41di0xWk0xNCA0LjZsLjkgMS0xIC45LTItMi4zLS4zLS41LjUtLjRMMTQgMS42bC44IDEtLjguN0E1IDUgMCAwIDEgMTcgNC42YzEgMSAxLjMgMi4zIDEuMyAzLjhoLTEuM2MwLTEuMy0uMy0yLjItMS0yLjktLjQtLjQtMS0uOC0xLjgtMVptLTggNy4yIDEgMWMtLjktLjItMS41LS41LTEuOS0xLS42LS42LTEtMS42LTEtMi44SDNjMCAxLjQuMyAyLjggMS4zIDMuOEE1IDUgMCAwIDAgNyAxNGwtLjguNy45IDFMOSAxNGwuNC0uNC0uNC0uNS0yLTIuMy0xIC45WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
    background-size: 70%;
  }

  .toggle-detail-icon {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01LjIuNHY5LjdNLjQgNS4zSDEwTTkuMiAxMy43aDguOSIvPjwvc3ZnPg==");
    background-size: 60%;
  }

  .hamburger-icon {
    width: 32px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxMSIgZmlsbD0ibm9uZSI+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0uMyAxLjZoMTcuOU0uMyA5LjhoMTcuOU0uMyA1LjdoMTcuOSIvPjwvc3ZnPg==");
    background-size: 80%;
  }

  .hide {
    /* Breakpoint only */
    @apply max-sm:!hidden;
  }

  .unsearched {
    @apply pointer-events-none opacity-20 select-none;
  }
</style>

```

### `client/src/components/SearchResultText.svelte`

```svelte
<script lang="ts">
  import { inview, type Options } from "svelte-inview";
  import type { Highlight, SearchResult } from "../types";
  import { explainDictionary, requestExplanation } from "../explainQueue";

  let element: HTMLSpanElement;

  const options: Options = {
    rootMargin: "50px",
  };

  export let text: string;
  export let searchResult: SearchResult;
  let highlights: Highlight[] | null = null;

  $: params = {
    filename: searchResult.filename,
    offset: searchResult.offset,
    queries: searchResult.queries,
    preferences: searchResult.preferences,
    text: text,
  };

  $: highlights = $explainDictionary[JSON.stringify(params)];

  let isInView = false;
  let inViewTimeout: number | null = null;
  let isInViewForEnoughTime = false;

  $: {
    if (isInView) {
      inViewTimeout = setTimeout(() => {
        isInViewForEnoughTime = true;
        requestExplanation(element, params);
      }, 100);
    } else {
      isInViewForEnoughTime = false;
      if (inViewTimeout !== null) {
        clearTimeout(inViewTimeout);
        inViewTimeout = null;
      }
    }
  }
</script>

<span
  use:inview={options}
  on:inview_change={(e) => (isInView = e.detail.inView)}
  bind:this={element}
>
  {#if highlights == null}
    <span>{text}</span>
  {:else}
    {#each highlights as highlight}
      {#if highlight.type === "highlight"}
        <span class="explain-highlight">{highlight.text}</span>
      {:else}
        <span>{highlight.text}</span>
      {/if}
    {/each}
  {/if}
</span>

<style>
  .explain-highlight {
    background-color: rgb(154 134 0 / 18%);
  }
</style>

```

### `client/src/components/TabBar.svelte`

```svelte
<script lang="ts">
  import type { File } from "../types";

  export let files: File[];
  export let index: number;
  export let disabled: boolean;
</script>

<div class="flex flex-row border-b-4 border-black relative h-10">
  <div
    class="absolute left-0 top-0 right-0 bottom-0 overflow-x-auto thin-scroll"
  >
    <div class="inline-flex flex-nowrap flex-row items-center h-full pl-2">
      {#each files as file, i}
        <button
          {disabled}
          class:active-tab={i === index}
          class="text-xs rounded py-1 px-2 mr-2 border border-transparent"
          on:click={() => (index = i)}
        >
          {file.basename}
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .thin-scroll {
    scrollbar-width: thin;
  }

  .active-tab {
    @apply bg-white border-black;
  }
</style>

```

### `client/src/components/TextView.svelte`

```svelte
<script lang="ts">
  import Ace from "ace-builds/src-noconflict/ace";
  import { onMount } from "svelte";
  import type { Navigation } from "../types";

  let editorElement: HTMLDivElement;

  export let text: string;

  // Ace text editor
  let editor;

  export function navigate(start: number, end: number) {
    if (editor) {
      const startPos = editor.session.doc.indexToPosition(start);
      const endPos = editor.session.doc.indexToPosition(end);
      const range = new Ace.Range(
        startPos.row,
        startPos.column,
        endPos.row,
        endPos.column
      );
      editor.selection.setRange(range);
      editor.scrollToLine(
        Math.round((startPos.row + endPos.row) / 2),
        true,
        true,
        () => {}
      );
    }
  }

  onMount(() => {
    editor = Ace.edit(editorElement, {
      mode: "ace/mode/text",
      selectionStyle: "text",
      readOnly: true,
      showFoldWidgets: false,
      showPrintMargin: false,
      showInvisibles: false,
      behavioursEnabled: false,
      vScrollBarAlwaysVisible: true,
      useSoftTabs: false,
    });
    editor.session.setUseWrapMode(true);
    // Set text
    editor.setValue(text);
    editor.selection.setRange(new Ace.Range(0, 0, 0, 0));
  });

  $: {
    if (editor) {
      editor.setValue(text);
      editor.selection.setRange(new Ace.Range(0, 0, 0, 0));
    }
  }
</script>

<div id="editor" bind:this={editorElement} />

<style>
  #editor {
    @apply w-full h-full;
  }

  :global(.myMarker) {
    @apply bg-red-200;
  }

  :global(.ace_invalid) {
    background-color: inherit !important;
    color: inherit !important;
  }

  :global(.ace_indent-guide) {
    background: inherit !important;
  }

  :global(.ace_gutter-cell) {
    @apply text-gray-400;
  }
</style>

```

### `client/src/explainQueue.ts`

```ts
import { get, writable } from "svelte/store";
import type { Highlight, ParsedQuery, Preference } from "./types";

interface ExplainDictionary {
  [key: string]: Highlight[];
}

export const explainDictionary = writable<ExplainDictionary>({});

const explanationQueue: [HTMLElement, string][] = [];

interface ExplainProps {
  filename: string;
  offset: [number, number];
  queries: ParsedQuery[];
  preferences: Preference[];
}
export function requestExplanation(element: HTMLElement, params: ExplainProps) {
  const key = JSON.stringify(params);
  if (get(explainDictionary)[key]) {
    return;
  }
  if (explanationQueue.find(([, k]) => k === key)) {
    return;
  }
  explanationQueue.push([element, key]);
}

const BOTTOM_BOUNDARY = 0;

let explaining = false;

function explainTopOfQueue() {
  if (explanationQueue.length === 0 || explaining) {
    return;
  }
  const sortedQueue = explanationQueue.sort(([e1], [e2]) => {
    if (e1 == null && e2 == null) {
      return 0;
    }
    if (e1 == null) {
      return 1;
    }
    if (e2 == null) {
      return -1;
    }
    const rect1B = e1.getBoundingClientRect().bottom;
    const rect2B = e2.getBoundingClientRect().bottom;
    if (rect1B < BOTTOM_BOUNDARY && rect2B >= BOTTOM_BOUNDARY) {
      return 1;
    }
    if (rect1B >= BOTTOM_BOUNDARY && rect2B < BOTTOM_BOUNDARY) {
      return -1;
    }
    return rect1B - rect2B;
  });

  while (sortedQueue.length > 0) {
    const [element, key] = sortedQueue.shift()!;
    if (
      element == null ||
      element.getBoundingClientRect().bottom < BOTTOM_BOUNDARY
    ) {
      continue;
    }

    explain(key);
    return;
  }
}

export async function explain(body: string) {
  explaining = true;
  const existingResponse = get(explainDictionary)[body];
  if (existingResponse) {
    return existingResponse;
  }

  const request = await fetch("/api/explain", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  const highlights = await request.json();

  explainDictionary.update((dict) => {
    dict[body] = highlights;
    return dict;
  });
  explaining = false;
  return highlights;
}

// Continuously explain the top of the queue
setInterval(explainTopOfQueue, 20);

```

### `client/src/global.d.ts`

```ts
/// <reference types="svelte" />
```

### `client/src/layoutEngine.test.ts`

```ts
import { expect, test } from "vitest";
import type { PdfChar } from "./types";
import { layout, copyChars } from "./layoutEngine";

test("pad right and bottom single char", () => {
  const width = 100;
  const height = 200;
  const pdfChars: PdfChar[] = [["a", { x0: 0, x1: 10, y0: 0, y1: 10 }]];

  expect(layout(width, height, copyChars(pdfChars))).toEqual([
    [
      "a",
      { x0: 0, x1: 10, y0: 0, y1: 10, lpad: 0, tpad: 0, rpad: 90, bpad: 190 },
    ],
  ]);
});

test("pad every direction single char", () => {
  const width = 100;
  const height = 200;
  const pdfChars: PdfChar[] = [["a", { x0: 50, x1: 60, y0: 40, y1: 60 }]];

  expect(layout(width, height, copyChars(pdfChars))).toEqual([
    [
      "a",
      {
        x0: 50,
        x1: 60,
        y0: 40,
        y1: 60,
        lpad: 50,
        tpad: 40,
        rpad: 40,
        bpad: 140,
      },
    ],
  ]);
});

test("pad with two chars", () => {
  const width = 100;
  const height = 100;
  const pdfChars: PdfChar[] = [
    ["a", { x0: 20, x1: 30, y0: 10, y1: 20 }],
    ["b", { x0: 50, x1: 60, y0: 15, y1: 25 }],
  ];

  expect(layout(width, height, copyChars(pdfChars))).toEqual([
    [
      "a",
      {
        x0: 20,
        x1: 30,
        y0: 10,
        y1: 25,
        lpad: 20,
        tpad: 10,
        rpad: 20,
        bpad: 75,
      },
    ],
    [
      "b",
      {
        x0: 50,
        x1: 60,
        y0: 10,
        y1: 25,
        lpad: 0,
        tpad: 10,
        rpad: 40,
        bpad: 75,
      },
    ],
  ]);
});

test("pad with three chars", () => {
  const width = 100;
  const height = 100;
  const pdfChars: PdfChar[] = [
    ["a", { x0: 20, x1: 30, y0: 10, y1: 20 }],
    ["b", { x0: 50, x1: 60, y0: 15, y1: 25 }],
    ["c", { x0: 80, x1: 85, y0: 5, y1: 16 }],
  ];

  expect(layout(width, height, copyChars(pdfChars))).toEqual([
    [
      "a",
      {
        x0: 20,
        x1: 30,
        y0: 5,
        y1: 25,
        lpad: 20,
        tpad: 5,
        rpad: 20,
        bpad: 75,
      },
    ],
    [
      "b",
      {
        x0: 50,
        x1: 60,
        y0: 5,
        y1: 25,
        lpad: 0,
        tpad: 5,
        rpad: 20,
        bpad: 75,
      },
    ],
    [
      "c",
      {
        x0: 80,
        x1: 85,
        y0: 5,
        y1: 25,
        lpad: 0,
        tpad: 5,
        rpad: 15,
        bpad: 75,
      },
    ],
  ]);
});

```

### `client/src/layoutEngine.ts`

```ts
import type { PdfChar } from "./types";
import RBush from "rbush";

interface RBushItem {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  char: PdfChar;
  i: number;
}

type Direction = "left" | "right" | "up" | "down";

function createTree(chars: PdfChar[]): RBush {
  const tree = new RBush();
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const x0 = char[1].x0;
    const y0 = char[1].y0;
    const x1 = char[1].x1;
    const y1 = char[1].y1;
    tree.insert({
      minX: x0,
      minY: y0,
      maxX: x1,
      maxY: y1,
      char,
      i,
    });
  }
  return tree;
}

function getAccessor(direction: Direction) {
  switch (direction) {
    case "left":
      return (c) => accessWithPad(c, "x0");
    case "right":
      return (c) => accessWithPad(c, "x1");
    case "up":
      return (c) => accessWithPad(c, "y0");
    case "down":
      return (c) => accessWithPad(c, "y1");
  }
}

function switchDirection(direction: Direction) {
  switch (direction) {
    case "left":
      return "right";
    case "right":
      return "left";
    case "up":
      return "down";
    case "down":
      return "up";
  }
}

function normalize(value: number) {
  return Math.max(0, value);
}

function getPad(
  width: number,
  height: number,
  char: PdfChar,
  i: number,
  searchResults: RBushItem[],
  direction: Direction
): [number, PdfChar | null] {
  const reverse = switchDirection(direction);
  const reverseAccessor = getAccessor(direction);
  const accessor = getAccessor(reverse);
  let most: [number, PdfChar | null] =
    reverse === "right" || reverse === "down"
      ? [0, null]
      : reverse === "left"
      ? [width, null]
      : [height, null];
  const seek = most[0] === 0 ? "max" : "min";
  for (const result of searchResults) {
    if (result.i === i) {
      continue;
    }
    if (
      seek === "max" &&
      accessor(result.char) > reverseAccessor(char) &&
      reverseAccessor(result.char) < accessor(char)
    ) {
      continue;
    }
    if (
      seek === "min" &&
      accessor(result.char) < reverseAccessor(char) &&
      reverseAccessor(result.char) > accessor(char)
    ) {
      continue;
    }
    if (seek === "max" && accessor(result.char) > most[0]) {
      most = [accessor(result.char), result.char];
    }
    if (seek === "min" && accessor(result.char) < most[0]) {
      most = [accessor(result.char), result.char];
    }
  }
  return [
    normalize(
      seek === "max"
        ? reverseAccessor(char) - most[0]
        : most[0] - reverseAccessor(char)
    ),
    most[1],
  ];
}

export function accessWithPad(char: PdfChar, side: "x0" | "x1" | "y0" | "y1") {
  if (side === "x0") {
    return char[1].x0 - (char[1].lpad || 0);
  }
  if (side === "x1") {
    return char[1].x1 + (char[1].rpad || 0);
  }
  if (side === "y0") {
    return char[1].y0 - (char[1].tpad || 0);
  }
  if (side === "y1") {
    return char[1].y1 + (char[1].bpad || 0);
  }
}

function consolidateHeight(c1: PdfChar, c2: PdfChar) {
  const y0 = Math.min(accessWithPad(c1, "y0"), accessWithPad(c2, "y0"));
  const y1 = Math.max(accessWithPad(c1, "y1"), accessWithPad(c2, "y1"));
  c1[1].y0 = y0;
  c1[1].y1 = y1;
  c2[1].y0 = y0;
  c2[1].y1 = y1;
}

function consolidateWidth(c1: PdfChar, c2: PdfChar) {
  const x0 = Math.min(accessWithPad(c1, "x0"), accessWithPad(c2, "x0"));
  const x1 = Math.max(accessWithPad(c1, "x1"), accessWithPad(c2, "x1"));
  c1[1].x0 = x0;
  c1[1].x1 = x1;
  c2[1].x0 = x0;
  c2[1].x1 = x1;
}

function project(
  width: number,
  height: number,
  tree: RBush,
  char: PdfChar,
  i: number,
  direction: Direction
) {
  if (direction === "left") {
    const x1 = accessWithPad(char, "x0");
    const y0 = accessWithPad(char, "y0");
    const y1 = accessWithPad(char, "y1");
    const x0 = 0;
    const [lpad, most] = getPad(
      width,
      height,
      char,
      i,
      tree.search({ minX: x0, minY: y0, maxX: x1, maxY: y1 }),
      direction
    );
    char[1].lpad = lpad;
    if (most) {
      consolidateHeight(char, most);
    }
  } else if (direction === "right") {
    const x0 = accessWithPad(char, "x1");
    const y0 = accessWithPad(char, "y0");
    const y1 = accessWithPad(char, "y1");
    const x1 = width;
    const [rpad, most] = getPad(
      width,
      height,
      char,
      i,
      tree.search({ minX: x0, minY: y0, maxX: x1, maxY: y1 }),
      direction
    );
    char[1].rpad = rpad;
    if (most) {
      consolidateHeight(char, most);
    }
  } else if (direction === "up") {
    const x0 = accessWithPad(char, "x0");
    const x1 = accessWithPad(char, "x1");
    const y1 = accessWithPad(char, "y0");
    const y0 = 0;
    char[1].tpad = getPad(
      width,
      height,
      char,
      i,
      tree.search({ minX: x0, minY: y0, maxX: x1, maxY: y1 }),
      direction
    )[0];
  } else if (direction === "down") {
    const x0 = accessWithPad(char, "x0");
    const x1 = accessWithPad(char, "x1");
    const y0 = accessWithPad(char, "y1");
    const y1 = height;
    char[1].bpad = getPad(
      width,
      height,
      char,
      i,
      tree.search({ minX: x0, minY: y0, maxX: x1, maxY: y1 }),
      direction
    )[0];
  }
}

function projectAll(
  width: number,
  height: number,
  chars: PdfChar[],
  tree: RBush,
  direction: Direction
) {
  for (let i = 0; i < chars.length; i++) {
    project(width, height, tree, chars[i], i, direction);
  }
}

export function layout(
  width: number,
  height: number,
  chars: PdfChar[]
): PdfChar[] {
  const tree = createTree(chars);

  projectAll(width, height, chars, tree, "right");
  projectAll(width, height, chars, tree, "left");
  projectAll(width, height, chars, tree, "up");
  projectAll(width, height, chars, tree, "down");

  return chars;
}

export function copyChars(chars: PdfChar[]): PdfChar[] {
  return chars.map((char) => [char[0], { ...char[1] }]);
}

```

### `client/src/main.ts`

```ts
import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;

```

### `client/src/Tailwind.svelte`

```svelte
<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

```

### `client/src/types.ts`

```ts
export type Offset = [number, number];

export interface File {
  basename: string;
  filename: string;
  filetype: "text" | "pdf";
}

export interface ParsedQuery {
  query: string;
  weight: number;
}

export type SearchResultSet = {
  results: [string, SearchResult[]][];
  sort: "asc" | "desc";
};
export type ScoredSearchResult = [string, SearchResult[], number];

export interface SearchResult {
  distance: number;
  text: string;
  offset: [number, number];
  index: number;
  filename: string;
  queries: ParsedQuery[];
  preferences: Preference[];
}

export interface Preference {
  file: File;
  searchResult: SearchResult;
  weight: -1 | 0 | 1;
}

export function preferenceKey(file: File, searchResult: SearchResult): string {
  return JSON.stringify([file.filename, searchResult.index]);
}

export interface Navigation {
  file: File;
  searchResult: SearchResult;
}

export interface PdfPosition {
  char_index: number;
  page_width: number;
  page_height: number;
}

export type PdfChar = [string, PdfCharInfo];
export interface PdfCharInfo {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  lpad?: number;
  tpad?: number;
  rpad?: number;
  bpad?: number;
}

export interface Highlight {
  text: string;
  type: "highlight" | "normal";
}

```

### `client/svelte.config.js`

```js
import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess()
};

```

### `client/tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

### `client/tsconfig.json`

```json
{
  "extends": "@tsconfig/svelte/tsconfig.json",

  "include": ["src/**/*"],
  "exclude": ["node_modules/*", "__sapper__/*", "public/*"]
}
```

### `docs/concept_embeddings.md`

```md
# Concepts: embeddings

A base level of understanding about _embeddings_ will help you more effectively work with Semantra. At its core, embeddings are numerical representations of meaning. And embedding models are machine learning models that take in text (or other media) and output these numerical embeddings.

Text embedding models are typically trained on terabytes of text encompassing many genres. From that data they become skilled at encoding text into meaning by inferring patterns.

Semantra provides easy access to working with embedding models. Working with embeddings in Semantra is like _sculpting_ in the domain of meaning.

Embeddings can be hundreds or even thousands of dimensions long — it varies by model. While it's hard to visualize multi-dimensional space, embeddings can be thought of like bar charts, where each dimension is a bar.

Since embeddings are entirely numerical, you can do mathematical operations on them, with some pretty fun results. For example, if you take the embedding for `queen`, `king`, `woman`, and `man`, you can do arithmetic like `king - man + woman` and end up with a result that's pretty close to the embedding for `queen`.

![king - man + woman ~= queen diagram](img/queen_king_example.png)

In the diagram above, the embeddings for `queen`, `king`, `man`, and `woman` are shown as simplified bar charts with six dimensions. Embeddings are added and subtracted bar by bar (in the diagram, positive bars are blue and negative bars are orange).

With only six dimensions, we can still represent many concepts. The last bar in `king` and `queen` looks similar so might encode concepts like _royalty_. The fourth and fifth bars in `man` and `woman` are similar and might represent _human_. The first bars in `king` and `man` are similar along with the first bars in `queen` and `woman` and so could encode the concept of _gender_.

Modern embedding models give us hundreds of dimensions, which means we can express complex and nuanced relationships between concepts. This kind of analogizing with embedding math over high-dimensional conceputal encodings opens up powerful implications for semantic search. Semantra allows performing basic arithmetic in the search bar and also adding/subtracting search results to finely shape your query and find specific results.

See [lesson 2 of the tutorial](lesson_2_advanced_searching.md) for a walkthrough of some of these advanced features.

```

### `docs/concept_windows.md`

```md
# Concepts: windows

When Semantra processes your text, it slices it up into smaller chunks called _windows_. It is useful to know about this process in case you want to alter the windows to explore semantic search on smaller or larger bits of context.

## How it works

By default, Semantra chunks a document into slightly overlapping windows:

![A diagram of overlapping windows within a document](img/windows.png)

In the diagram above, the document is chunked into 10 windows with a slight overlap. The overlap is useful to ensure content at the edges of windows doesn't get split up in a way that affects search and retrieval.

There are three parameters that control Semantra's windowing process:

- **size**: the size of each window in tokens (which roughly correspond to a word)
- **offset**: the initial offset of the window in the document. This is usually 0, which corresponds to starting at the beginning of the document
- **rewind**: how many tokens to go back by before the start of the next window. This factor controls how big the overlap is. Setting rewind to 0 will result in non-overlapped windows.

![A diagram showing the offset, size, and rewind parameters](img/window_anatomy.png)

## The default parameters

The default for Semantra is to use a window size of 128 with a rewind factor of 16 and no offset. This has been found anecdotally to be pretty good and work well across a wide range of models.

Feel free to experiment with other sizes and overlaps depending on your needs.

```

### `docs/concepts.md`

```md
# Concepts

Below are some explainers that clarify how Semantra works.

- [Embeddings](concept_embeddings.md)
- [Windows](concept_windows.md)

```

### `docs/guide_models.md`

```md
# Using other models with Semantra

Semantra comes with a few preset models along with the ability to run almost any custom [Hugging Face](https://huggingface.co/) [transformers](https://huggingface.co/docs/transformers/index) model. If your computer has a compatible GPU (graphics processing unit, often found in video cards), Semantra will leverage it via [PyTorch](https://pytorch.org/) to dramatically speed up computation.

## Using preset models

The models Semantra comes with out-of-the-box include:

- **openai**: See [the OpenAI guide](guide_openai.md)
- **minilm**: A [SentenceTransformers](https://www.sbert.net/docs/pretrained_models.html) model that's very quick and lean. It corresponds to the transformers model `sentence-transformers/all-MiniLM-L6-v2`
- **mpnet**: The default model that Semantra uses. It's the [SentenceTransformers](https://www.sbert.net/docs/pretrained_models.html) that achieves the best accuracy but is still relatively quick. It corresponds to the transformers model `sentence-transformers/all-mpnet-base-v2`
- **sgpt**: A very accurate and decently quick model from [Sentence embeddings for semantic search](https://github.com/Muennighoff/sgpt). The model here is the transformers model `Muennighoff/SGPT-125M-weightedmean-msmarco-specb-bitfit` and is asymmetric, meaning queries and documents are tokenized slightly differently.
- **sgpt-1.3B**: The 1.3 billion parameter version of `sgpt`, corresponding to transformers model `Muennighoff/SGPT-1.3B-weightedmean-msmarco-specb-bitfit`

To use a preset model, specify the `--model` flag with the model name, e.g.

```sh
semantra --model sgpt <documents>
```

## When to use the OpenAI model versus transformers models

If the nature of your work is sensitive in any way, you may not want anything going over the network to external services. The OpenAI model requires sending data to them, which may be a dealbreaker for use cases such as investigating a leaked collection of documents or analyzing documents internal to your company.

OpenAI's model is very powerful and able to encode nuanced semantic meanings but in practice it is not significantly more useful than models that can be run locally in combination with Semantra's advanced features. OpenAI's model is fast at processing large documents and it offloads processing to their servers, so if your computer is slow or you have an enormous amount of documents and want to get through them quickly, OpenAI's model may work well.

Lastly, OpenAI's model costs money to use. The cost is pretty small but adds up if you are processing large collections of documents. See [the OpenAI guide](guide_openai.md) for more information.

## Using custom models

Many models in the [Hugging Face Hub](https://huggingface.co/models) can be used by Semantra with the `--transformer-model` flag followed by the model name.

For instance, any [pretrained Sentence Transformers model](https://huggingface.co/models?library=sentence-transformers) can be used via

```sh
semantra --transformer-model sentence-transformers/all-distilroberta-v1 <filenames>
```

### Specifying custom tokens

Some models require queries and documents to have special tokens prepended before and after. For instance, the **sgpt** models discussed above have queries surrounded square braces (`[]`) and documents surrounded by curly braces (`{}`).

The `--query-token-pre`, `--query-token-post`, `--doc-token-pre`, and `--doc-token-post` control the tokens inserted before and after queries and documents (these parameters default to `None`, which will not add anything).

For example, to use the `sgpt-5.8B` model (which is massive and can only be run on large GPUs), you could run the following:

```sh
semantra --transformer-model Muennighoff/SGPT-1.3B-weightedmean-msmarco-specb-bitfit --query_token_pre='[' --query_token_post=']' --doc_token_pre='{' --doc_token_post='}' <filenames>
```

```

### `docs/guide_openai.md`

```md
# Using OpenAI with Semantra

[OpenAI](https://openai.com/) has a state-of-the-art embedding model that can be used with Semantra with a little bit of setup.

The current [model](https://platform.openai.com/docs/models/embeddings) OpenAI recommends, `text-embedding-ada-002`, currently [costs](https://openai.com/pricing#embedding-models) $0.0004 / 1,000 tokens, where a token is roughly 3/4 of a word.

With Semantra's default overlapping window, we can simplify this as roughly costing $0.0004 per 650 words. The full text of Alice in Wonderland would cost roughly $0.02 to process. The 448-page Mueller Report would cost roughly $0.15 to process. All seven books of the Harry Potter series would cost about $0.79.

This processing cost is a one-time fee per document you wish to analyze with specific settings. The payment is handled via OpenAI. Queries will additionally be handled by OpenAI, but unless they're in a bulk process, the cost will be negligible (fractions of a cent). Semantra shows a confirmation before incurring a cost via processing:

![Confirmation before processing with OpenAI](img/openai_cost_confirm.png)

## Setup

Sign in or sign up for an OpenAI account at [platform.openai.com](https://platform.openai.com/).

Once you've created an account, click on the menu in the upper-right and navigate to "View API keys":

!["View API Keys" in the menu on OpenAI's site](img/openai_view_apikeys.png)

Create a new secret key and optionally name it so you will know what it's for later:

![Creating a new secret key](img/openai_new_secret.png)

A key will show up that you must copy. The key will not show up again, so if you lose it without storing it you may have to create a new one.

![Copying the secret key](img/openai_copy_key.png)

## Using the API key

### Approach 1: quicker, less permanent

Set the API key as an environment variable:

```sh
export OPENAI_API_KEY=<your_key_here>
```

Now, Semantra will have access to the key when you run it in the same terminal window.

Alternatively, you can run Semantra prefixed with the key:

```sh
OPENAI_API_KEY=<your_key_here> semantra ...
```

### Approach 2: more permanent

Create a file called `.env` and edit the file to contain your key:

```txt
OPENAI_API_KEY=<your_key_here>
```

It's important that this file is not committed in source control, so ensure it's .gitignore'd if you are working in a git repo.

Semantra will look in the `.env` file in the directory it's run in and load the environment variable if found.

## Running the OpenAI models

After this setup, Semantra can access the OpenAI key. You can now run Semantra using the OpenAI model via:

```sh
semantra --model openai <documents>
```

## Resources

- [OpenAI's guide on embeddings](https://platform.openai.com/docs/guides/embeddings)
- [OpenAI's new and improved embedding model](https://openai.com/blog/new-and-improved-embedding-model)

```

### `docs/guides.md`

```md
# Guides

The following how-to guides show how to accomplish specific tasks with Semantra:

- [Using other models with Semantra](guide_models.md)
- [Using OpenAI with Semantra](guide_openai.md)

```

### `docs/help.md`

```md
# Using the web interface

Welcome to Semantra! This document breaks down all the functionality in the web interface. If you would like a more hands-on guide, you may prefer reading the [tutorial](tutorial.md).

When you start the application you will see something like the below window.

![The Semantra web interface](img/hamlet_web_start.png)

Here's a breakdown of this interface:

![Breakdown of the Semantra web interface](img/interface_breakdown.png)

- **search bar**: the top of the website where a long search bar runs across. This is where the main searching happens
- **results pane**: the left sidebar. This is where search results show up
- **tab bar**: shows all the files and highlights which one is loaded in the content window
- **content window**: displays a browsable document

## Search bar

The search bar is where you can run queries:

![Empty search bar](img/searchbar.png)

After typing a query in the search bar, it will become yellow to indicate the query has not yet run yet and interface may be stale:

![Search bar that's in a stale state](img/searchbar_stale.png)

You can press <kbd>Enter</kbd> or click on the search icon to run the query. The search bar should turn white again to indicate the results are up-to-date.

When tagging search results (see below), assigned tags will show up as blue (positive) and orange (negative) pills below the search bar.

![Search bar with tags below](img/searchbar_tags.png)

To remove these tags, you can click on them under the search bar. If you want to read the full text of a tag on desktop, you can leave the mouse over the tag for a few seconds until a tooltip shows.

## Results pane

After executing a search, the results pane will fill with search results.

![The results pane showing search results](img/resultspane.png)

### Filter controls

There are filter controls at the top of the results pane. In order of appearance, they are:

- **hamburger button**: (only on mobile) a button to toggle collapsing the results pane and showing the content window
- **filter box**: a text input that will filter search results by file
- **toggle expand/collapse button**: (#1 in the diagram below) a button to toggle expanding and collapsing all the search results in the file-based view (default; does not appear in the results-based view)
- **displayed file filter button**: (#2 in the diagram below) a button to toggle filtering the search results to only show the file currently in the content window
- **switch file-/results-view button**: (#3 in the diagram below) a button to switch the view from a collapsible file-based view sorted by most relevant files to a view where each individual search result is sorted by relevance and not organized by file

![Breakdown of the filter button controls](img/button_breakdown.png)

### Search results

Each search result shows a score, plus/minus tagging buttons, and an excerpt with highlights. Clicking on the search result text will cause the content view to navigate to the relevant section of the associated document.

![Breakdown of a search result](img/searchresult_breakdown.png)

- **score**: (1) The score section of the result is a number from 0 (no match) to 1.00 (100% match). In the world of semantic similarity a score around 0.50 often indicates a good match.
- **plus/minus tagging buttons**: (2) Buttons to positively/negatively tag the search result. Clicking on one of these buttons will cause a tag to appear below the search box showing the document is tagged. Re-running the query will apply the tag and reflect it in the search results. Clicking on a tag button again will remove the tag.
- **text excerpt**: (3) This is the full text of the search result [window](concept_windows.md)
- **explanation highlight**: (4) Semantra will attempt to explain the most relevant parts of the search query asynchronously after results are displayed. These appear as sub-highlights within the result.

## Tab bar

This narrow strip shows all the documents that you are analyzing currently and highlights the active document in the content pane. You can scroll left and right in the tab bar to see all the tabs.

![The tab bar](img/tabbar.png)

## Content window

The content window shows the content of the currently selected document. It will look different depending on if the document is a text file or PDF file.

### Text content window

The text content window displays the contents of a text file. It has no additional features or functionality.

![The text content window](img/contentwindow_text.png)

### PDF content window

The PDF content window shows a PDF document and has the ability to view/set the page number and zoom in/out.

![The PDF content window](img/contentwindow_pdf.png)

- **zooming in/out**: the +/- buttons in the bottom left allow zooming in and out of the PDF document
- **viewing/setting the page number**: the numbers in the lower left show the currently displayed page and the number of pages in the document. You can edit the left number to jump to a page.

## Additional resources

- Follow along with the [tutorial](tutorial.md)
- Check out the [guides](guides.md)
- Learn about some relevant [concepts](concepts.md)

```

### `docs/lesson_1_semantically_searching_shakespeare.md`

```md
# Lesson 1

## "To be, or not to be": searching Shakespeare semantically

In this lesson, we'll be exploring William Shakespeare's classic, [Hamlet](https://en.wikipedia.org/wiki/Hamlet), and learning some of the basics of Semantra.

### Step 1: prepare the document

Semantra operates on documents. To use the tool, you need to have any documents you wish to analyze downloaded and saved locally on your computer.

For this lesson, we'll be working with a PDF version of Hamlet, which you can download here: [hamlet.pdf (248 KB)](https://github.com/freedmand/semantra/raw/main/docs/example_docs/hamlet.pdf)

Save the document somewhere on your computer in a location you can remember. For this tutorial, we'll assume the document is stored in the default downloads folder on Mac OS X, `~/Downloads`, but your file's location may differ depending on where you save it.

### Step 2: run Semantra on Hamlet

Semantra is generally run via:

```sh
semantra <filenames>
```

where `<filenames>` is one or more files you wish to analyze. For this lesson, we'll only be analyzing a single file, `hamlet.pdf`:

```sh
semantra ~/Downloads/hamlet.pdf
```

Most terminals allow dragging files into the window to auto-fill the complete path of the file. You can type `semantra ` (with a space at the end) and then drag the file from your computer over the terminal and release it to populate the full name.

![Dragging a file into the terminal](img/dragging_file_terminal.png)

Press <kbd>Enter</kbd> to run Semantra!

### Step 3: wait for processing to complete

The first time Semantra runs, it takes additional time to download any machine learning models it needs. This may take several minutes and several hundreds of megabytes of disk space to store the models.

![Downloading the initial models](img/downloading_initial_models.png)

Once any needed models are downloaded, Semantra will begin processing. It first extracts the text content out of the PDF and then calculates embeddings.

![Processing the embeddings for Hamlet](img/hamlet_calculating_embeddings.png)

More on what embeddings are and how to use them effectively in the next lesson.

Once processing is complete, which may take several minutes, a local web server is launched:

![The web server running](img/flask_server.png)

From the output, we can see that the web server has started and is running at several URLs. Navigate to one of them, e.g. http://127.0.0.1:8080, to launch the Semantra web app.

### Step 4: semantically searching Shakespeare

After opening your web browser to the URL http://127.0.0.1:8080, you should see the Semantra web interface:

![The Semantra web interface after loading Hamlet](img/hamlet_web_start.png)

The interface is divided into four main sections:

- **search bar**: the top of the website where a long search bar runs across. This is where the main searching happens
- **results pane**: the left sidebar. This is where search results show up
- **tab bar**: shows all the files and highlights which one is loaded in the content window
- **content window**: displays a browsable document

![The Semantra web interface](img/interface_breakdown.png)

Let's run a query! Type in "ghost requesting revenge" in the search bar.

![A search query "ghost seeking revenge"](img/ghost_revenge_query.png)

You'll notice the search bar turns a tint of yellow as you begin typing. That means that the query hasn't yet been run and whatever results you see may be stale.

Press <kbd>Enter</kbd> or click the search icon to run the query. Search results should appear!

![Search results for "ghost seeking revenge" query](img/ghost_search_results.png)

Let's break down what's going on. First, we see `hamlet.pdf` and a score (0.46):

![hamlet.pdf filename with a score of 0.46](img/hamlet_filename.png)

This indicates the results below are all for `hamlet.pdf`, which is obvious since we're only working with one file but helpful with larger collections.

The score is 0.46 is out of 1. A score of 0 indicates no semantic similarity whatsoever. A score of 1 indicates an exact semantic match. Unlike regular search engines, a score of 0.46 is pretty good semantically! The score shown here is the average for all of this file's search results.

![The first search result in Hamlet](img/hamlet_first_result.png)

Below the file header, we have our search results. The first result shows 0.57, indicating the score for that result. There are "+" and "-" buttons, which we will come back to in the next section. Then, the text of the matching search result.

You may notice some regions of the text are highlighted a faint brown within the result, and those highlights stream in a bit slower. Semantra tries to explain the most relevant parts of each result to the search query. These highlights help direct your attention to what may be the most relevant.

Click anywhere on the search result text to get the content window to jump to the relevant part of the document and highlight the result.

![An excerpt of the Hamlet PDF](img/hamlet_first_excerpt.png)

Congrats! You have just done your first semantic query. Try some other ones out on your own. Here's some good queries for Hamlet and useful observations:

- `musings about life`
- `talking to a skull`
- `Hamlet contemplating death and mortality`
- `stabbing with a knife`
- `Hamlet being cruel to Ophelia`

Note that results for semantic searches are a bit different than traditional searches. It takes some getting used to, but there are also powerful tools to refine the results.

## Next steps

[Lesson 2: Advanced searching across all U.S. presidential inagural speeches](lesson_2_advanced_searching.md)

```

### `docs/lesson_2_advanced_searching.md`

```md
# Lesson 2

## Sculpting semantic searches: exploring U.S. presidential inaugural speeches

In this lesson, we'll work with a multi-document collection and learn how to utilize some of Semantra's more advanced features to refine our query.

### Step 1: prepare and process the documents

Download the following collection of U.S. presidential inaugural speeches:

- [us_inaugural_speeches.zip (362 KB)](https://github.com/freedmand/semantra/raw/main/docs/example_docs/us_inaugural_speeches.zip)

Download the zip file somewhere on your computer and extract the contents to a folder (this can be done on most operating systems simply by opening the zip file and potentially clicking an extract button).

The extracted documents should contain a list of `.txt` files containing speeches from George Washington's in 1789 to Joe Biden's in 2021.

Note the location of the extracted files and run Semantra over all the `.txt` files:

```sh
semantra <path_to_speeches>/*.txt
```

It may take several minutes to process all the speeches, with helpful progress information to estimate the completion time.

![Processing inaugural speeches](img/inaugural_speeches_processing.png)

### Step 2: using the web app over document collections

When we launch the web app, we are greeted with a collection of documents.

![Initial screen](img/inaugural_speeches_initial_screen.png)

Note that we are viewing text documents and not PDFs, so the content window shows a text viewer.

The tab bar shows we're currently looking at George Washington's 1789 speech, and if we scroll right within the tab bar we can see all the files.

We can click on a tab to show that document's contents. For instance, here's what we see after clicking on `1865_Abraham_Lincoln.txt`:

![Tab bar showing Lincoln's speech](img/inaugural_speeches_tab_bar.jpg)

### Step 3: searching across documents

Let's try entering the search query "foreign policy" and pressing <kbd>Enter</kbd> or clicking the search icon.

![Search results for "foreign policy"](img/inaugural_speeches_search_results.png)

We get search results and Harry Truman's 1949 speech shows up first. We can collapse Truman's speech by clicking the dropdown arrow to the left of `1949_Harry_S._Truman.txt`:

![Collapsing the Truman search result](img/inaugural_speeches_collapsing_result.png)

Now, the next file's results are revealed. The search results are ordered by the most relevant documents as a whole to the query.

You can continue expanding and collapsing file names and scrolling to scan through results.

### Step 4: using the filter controls

There are three buttons at the top of the results pane that are useful for filtering and modifying the results views.

![Breakdown of the filter controls](img/button_breakdown.png)

If you want to quickly collapse/expand search results, press the "+/-" button to toggle all the results at once:

![Collapsing all the search results](img/inaugural_speeches_collapsed.png)

If we want to only show results for the document that we are currently viewing in the content window, we can press the eye button:

![Only showing the current document with the eye button](img/inaugural_speeches_eye_button.png)

Notice, the eye button shows a grayed state to indicate it's filtering. Pressing the eye button again reveals all the documents again.

We may want to find the most relevant individual search results rather than documents. We can accomplish this by pressing the view switching button with two curved arrows:

![Viewing individual results rather than files](img/inaugural_speeches_switch_views.png)

This removes the toggles and shows individual search results sorted by relevancy. Notice how the most relevant individual results are not necessarily from the most relevant documents. Pressing the view switching button again goes back to the collapsible file view.

Finally, we can filter which files are shown in search results by name using the filter text box. For instance, filtering to only show Monroe's speeches:

![Filtering to only show Monroe's speeches](img/inaugural_speeches_filter_files.png)

This text box updates instantly as you type, and clearing the text will reset the filter and show all results.

### Step 5: semantic arithmetic

Let's try querying "economic growth" and viewing by result rather than file:

![Querying "economic growth"](img/inaugural_speeches_economic_growth.png)

The first result seems pretty good, but what if we want to find instances of economic growth that are also talking about "unchecked capitalism."

We can do this by typing out the query: "economic growth + unchecked capitalism"

![Querying "economic growth + unchecked capitalism"](img/inaugural_speeches_economic_growth_unchecked_capitalism.png)

The "+" in the query text tells Semantra to add the semantic meanings of both "economic growth" and "unchecked capitalism" together and find the most relevant results for that combination.

What if instead of the combination we wanted examples of "economic growth" that don't mention anything related to "unchecked capitalism"? We can accomplish this with a minus sign instead of a plus sign in the query: "economic growth - unchecked capitalism"

![Querying "economic growth - unchecked capitalism"](img/inaugural_speeches_economic_growth_minus_unchecked_capitalism.png)

Let's refine further by adding in "war" to the equation: "economic growth - unchecked capitalism + war"

![Querying "economic growth - unchecked capitalism + war"](img/inaugural_speeches_economic_capitalism_war.png)

These results seem pretty relevant! As you can see, query arithmetic can help us more precisely shape the search and iterate within increasingly narrow windows of meaning to locate what we're looking for.

### Step 6: tagging search results

Sometimes it's useful to refine a search based on its results. For this, Semantra offers tagging, a way to positively and negatively label search results to further refine the query.

Let's try searching "healthcare for all":

![Querying "heathcare for all"](img/inaugural_speeches_healthcare_for_all.png)

A speech by Reagan shows up that appears relevant. Click the "+" button next to the search result to tag it.

![Positively tagging a search result](img/inaugural_speeches_positive_tag.png)

Notice the search bar appears a shade of yellow since the search has yet to be applied. The tag that will be applied shows below the search result. Click on the search icon or press <kbd>Enter</kbd> within the search box to launch the query.

It may look like the results are the same, but that's just because the search result we positively tagged still appears on the top. Scroll through some of the results to see if they're all relevant.

![A search result that's less relevant](img/inaugural_speeches_cleveland_healthcare.png)

This one by Cleveland doesn't relate to healthcare that much. Let's negatively tag it by hitting the "-" button next to the result:

![Negatively tagging the less relevant result](img/inaugural_speeches_healthcare_plus_minus.png)

We can now re-run the query to see the new results that pop up.

To remove tags, click on them below the search bar.

### Step 8: have fun

We've essentially covered all of Semantra's features. The rest is up to you.

Some fun things you can try:

- enter negative queries, like "- freedom" and see what happens
- positively tag some results after querying something, then delete the query in the search box and hit enter. This will show results similar to the tagged results
- search for a concept like "diplomacy", positively tag a result, re-run the query, filter to only show results for a president that's not showing up in the top results

And so much more! If you find interesting or novel ways to use Semantra, let us know.

## Next steps

- Check out the [guides](guides.md)
- Learn about some relevant [concepts](concepts.md)

```

### `docs/publish_pypi.md`

```md
# Publishing new versions of Semantra to PyPI

Note: these instructions are for developers of Semantra that have credentials to publish to PyPI.

- Make coding changes as necessary
- Open `pyproject.toml` and increment the version number
- In a virtual environment, run `pip install -e .`
- Verify the new version is installed via `semantra --version`. Also verify any new changes are working as intended
- Run `rm -rf dist && python3 -m build && python3 -m twine upload dist/*` to build the package and upload to PyPI
- When prompted, enter login credentials

```

### `docs/README_es.md`

```md
> NOTA: Esta es una versión traducida al español y podría estar desactualizada con respecto al original README.
>
> NOTE: This is a translated version and may be outdated with the original README.

# Semantra

https://user-images.githubusercontent.com/306095/233867821-601db8b0-19c6-4bae-8e93-720b324dc199.mov

Semantra es una herramienta multipropósito para la búsqueda semántica de documentos. Consulta por significado en lugar de solo por coincidencia de texto.

La herramienta, creada para ejecutarse en la interfaz de la línea de comandos, analiza los archivos de texto y PDF especificados en su computadora y lanza una aplicación de búsqueda web local para consultarlos de forma interactiva. El propósito de Semantra es hacer que el funcionamiento de un motor de búsqueda semántico especializado sea fácil, amigable, configurable y privado/seguro.

Semantra está diseñado para personas que buscan agujas en un pajar: periodistas que analizan documentos filtrados en la fecha límite, investigadores que buscan información dentro de los artículos, estudiantes que se involucran con la literatura consultando temas, historiadores que conectan eventos en libros, etc.

## Recursos

- [Tutorial](./tutorial.md): Una breve introducción para comenzar con Semantra: desde la instalación de la herramienta, hasta ejemplos prácticos de análisis de documentos con ella.
- [Guías](./guides.md): Guías prácticas sobre cómo hacer más con Semantra.
- [Conceptos](./concepts.md): Explicaciones sobre algunos conceptos para comprender mejor cómo funciona Semantra.
- [Uso de la interfaz web](./help.md): Una referencia sobre cómo usar la aplicación web Semantra.

Esta página ofrece una descripción general de alto nivel de Semantra y una referencia de sus características.

## Instalación

Asegúrese de tener [Python >= 3.9](https://www.python.org/downloads/).

La forma más fácil de instalar Semantra es a través de `pipx`. Si no tiene `pipx` instalado, ejecute en el terminal:

```sh
python3 -m pip install --user pipx
python3 -m pipx ensurepath
```

Abra una nueva ventana de terminal para que entren en vigor los nuevos ajustes de ruta `pipx`. Entonces corra:

```sh
pipx install semantra
```

Esto instalará Semantra en su directorio. Debería poder ejecutar `semantra` en el terminal y ver el resultado.

## Uso

Semantra opera en colecciones de documentos (archivos de texto o PDF) almacenados en su computadora local.

En su forma más simple, puede ejecutar Semantra sobre un solo documento ejecutando:

```sh
semantra doc.pdf
```

También puede ejecutar Semantra en varios documentos:

```sh
semantra report.pdf book.txt
```

Semantra tardará un tiempo en procesar los documentos de entrada. Esta es una operación única por documento (las ejecuciones posteriores sobre la misma colección de documentos serán casi instantáneas).

Una vez que se complete el procesamiento, Semantra iniciará un servidor web local, de manera predeterminada en [localhost:8080](http://localhost:8080). En esta página web, puede consultar de forma interactiva los documentos transmitidos semánticamente.

**Notas rápidas:**

Cuando ejecuta Semantra por primera vez, puede tomar varios minutos y varios cientos de megabytes de espacio en el disco duro para descargar un modelo de aprendizaje automático local que pueda procesar el documento que desea consultar. [El modelo utilizado se puede personalizar] (./guide_models.md) , pero el predeterminado es una excelente combinación al ser rápido, ágil y efectivo.

Si desea procesar documentos rápidamente sin usar sus propios recursos computacionales y no le importa pagar o compartir datos con servicios externos, puede usar [el modelo de incrustación de OpenAI] (./guide_openai.md).

## Recorrido rápido por la aplicación web

Cuando navegue por primera vez a la interfaz web de Semantra, verá una pantalla como esta:

![Interfaz web de Semantra](./img/initial_screen.png)

Escriba algo en el cuadro de búsqueda para comenzar a consultar semánticamente. Pulse <kbd>Enter</kbd> o haga clic en el icono de búsqueda para ejecutar la consulta.

Los resultados de la búsqueda aparecerán en el panel izquierdo ordenados por los documentos más relevantes:

![Resultados de búsqueda de Semantra](./img/resultspane.png)

Los puntajes amarillos muestran relevancia de 0-1.00. Cualquier resultado en el rango de 0,50 indica una fuerte coincidencia. Los párrafos resaltados de color marrón claro aparecerán en los resultados de la búsqueda y explicarán las partes más relevantes de su consulta.

Al hacer clic en el texto de un resultado de búsqueda, se navegará a la sección correspondiente del documento asociado.

![Resultado de búsqueda resaltado en el documento](./img/contentwindow_pdf.png)

Al hacer clic en los botones más/menos asociados con un resultado de búsqueda, se etiquetarán de manera positiva/negativa esos resultados. Al volver a ejecutar la consulta hará que estos parámetros de consulta adicionales entren en vigor.

![Etiquetado positivo/negativo de resultados de búsqueda](./img/inaugural_speeches_healthcare_plus_minus.png)

Finalmente, las consultas de texto se pueden sumar y restar con signos más/menos en el texto de la consulta para esculpir un significado semántico preciso.

![Consultas de adición y sustracción de texto](./img/inaugural_speeches_economic_capitalism_war.png)

Para obtener un recorrido más detallado de la aplicación web, consulte el [tutorial](./tutorial.md) o [la referencia de la aplicación web](./help.md).

## Conceptos rápidos

El uso de un motor de búsqueda semántica es fundamentalmente diferente a un algoritmo de coincidencia de texto exacto.

Para empezar, _siempre_ habrán resultados de búsqueda para una consulta determinada, sin importar cuán irrelevante sea. Las puntuaciones pueden ser realmente bajas, pero los resultados nunca desaparecerán por completo. Esto se debe a que la búsqueda semántica con aritmética de consulta a menudo revela resultados útiles en medio de diferencias de puntuación muy pequeñas. Los resultados siempre se ordenarán por relevancia y solo se mostrarán los 10 mejores resultados por documento, por lo que los resultados con menor puntuación se eliminarán automáticamente.

Otra diferencia es que Semantra no necesariamente encontrará coincidencias de texto exactas si consulta algo que aparece directamente en el documento. En un nivel alto, esto se debe a que las palabras pueden significar diferentes cosas en diferentes contextos, por ejemplo, la palabra "hojas" puede referirse a las hojas de los árboles o a las páginas de un libro _(en la versión original en inglés el ejemplo seleccionado por el autor de la aplicación es el siguiente: the word "leaves" can refer to the leaves on trees or to someone leaving)_. Los modelos de incrustación que utiliza Semantra convierten todo el texto y las consultas que ingresa en largas secuencias de números que se pueden comparar matemáticamente, y una coincidencia de subcadena exacta no siempre es significativa en este sentido. Consulte [el documento sobre el concepto de incrustaciones](./concept_embeddings.md) para obtener más información sobre incrustaciones _(embeddings)_.

## Referencia de la línea de comandos

```sh
semantra [OPTIONS] [FILENAME(S)]...
```

## Opciones

- `--model [openai|minilm|mpnet|sgpt|sgpt-1.3B]`: Modelo preestablecido para incrustar. Consulte [la guía de modelos] (./guide_models.md) para obtener más información (predeterminado: mpnet)
- `--transformer-model TEXT`: Nombre del modelo de transformador Huggingface personalizado que se usará para incrustar (solo se debe especificar uno de `--model` y `--transformer-model`). Consulte [la guía de modelos](./guide_models.md) para obtener más información.
- `--windows TEXT`: Ventanas incrustadas para extraer. Una lista separada por comas con el formato "size[\_offset=0][_rewind=0]. Una ventana con tamaño 128, desplazamiento 0 y rebobinado de 16 (128_0_16) incrustará el documento en fragmentos de 128 tokens que se superponen parcialmente por 16. Solo se usa la primera ventana para la búsqueda. Consulte el [documento de concepto de ventanas] (./concept_windows.md) para obtener más información (predeterminado: 128_0_16)
- `--encoding`: Codificación a usar para leer archivos de texto [predeterminado: utf-8]
- `--no-server`: No iniciar el servidor de UI (solo el proceso)
- `--port INTEGER`: Puerto a usar para el servidor integrado (predeterminado: 8080)
- `--host TEXT`: Host a usar para el servidor integrado (predeterminado: 127.0.0.1)
- `--pool-size INTEGER`: Número máximo de tokens de incrustación para agrupar en las solicitudes
- `--pool-count INTEGER`: Número máximo de incrustaciones para agrupar en las solicitudes
- `--doc-token-pre TEXT`: Token para anteponer a cada documento en los modelos transformadores (predeterminado: Ninguno)
- `--doc-token-post TEXT`: Token para agregar a cada documento en los modelos transformadores (predeterminado: Ninguno)
- `--query-token-pre TEXT`: Token para anteponer a cada consulta en los modelos transformadores (predeterminado: Ninguno)
- `--query-token-post TEXT`: Token para agregar a cada consulta en los modelos transformadores (predeterminado: Ninguno)
- `--num-results INTEGER`: Número de resultados (vecinos) a recuperar por archivo para consultas (predeterminado: 10)
- `--annoy`: Use kNN aproximados a través de Annoy para consultas (consultas más rápidas con un ligero costo de precisión); si es falso, use kNN exhaustivo exacto (predeterminado: True)
- `--num-annoy-trees INTEGER`: Número de árboles a usar para kNN aproximados a través de Annoy (predeterminado: 100)
- `--svm`: Use SVM en lugar de cualquier tipo de kNN para consultas (más lento y solo funciona en modelos simétricos)
- `--svm-c FLOAT`: Parámetro de regularización de SVM; los valores más altos penalizan más las predicciones erróneas (predeterminado: 1.0)
- `--explain-split-count INTEGER`: Número de divisiones en una ventana dada para explicar una consulta (predeterminado: 9)
- `--explain-split-divide INTEGER`: Factor para dividir el tamaño de la ventana para obtener cada longitud dividida para explicar una consulta (predeterminado: 6)
- `--num-explain-highlights INTEGER`: Número de resultados divididos para resaltar para explicar una consulta (predeterminado: 2)
- `--force`: Forzar proceso incluso si está en caché
- `--silent`: No imprimir información de progreso
- `--no-confirm`: No mostrar el costo y pedir confirmación antes de procesar con OpenAI
- `--version`: Imprime la versión y sale
- `--list-models`: Lista los modelos preestablecidos y sale
- `--show-semantra-dir`: Imprime el directorio que Semantra usará para almacenar archivos procesados y sale
- `--semantra-dir PATH`: Directorio para almacenar archivos de Semantra
- `--help`: Muestre este mensaje con las anteriores opciones y sale

## Preguntas frecuentes

### ¿Puede usar ChatGPT?

No, y esto es así desde su diseño.

Semantra no utiliza ningún modelo generativo como ChatGPT. Está diseñado solo para consultar texto semánticamente sin ninguna capa en la parte superior para intentar explicar, resumir o sintetizar los resultados. Los modelos de lenguaje generativo ocasionalmente producen información aparentemente plausible, pero en última instancia incorrecta, colocando la carga de la verificación en el usuario. Semantra trata el material de origen primario como la única fuente de verdad y se esfuerza por demostrar que una experiencia de búsqueda con interacción humana, además de modelos integrados más simples, es más útil para los usuarios.

## Desarrollo

La aplicación de Python se encuentra en `src/semantra/semantra.py` y es administrada como un proyecto estándar de línea de comandos de Python con `pyproject.toml`.

La aplicación web local está escrita en [Svelte](https://svelte.dev/) y es administrada como una aplicación npm estándar.

Para desarrollar para la aplicación web use`cd` en `client` y luego ejecute `npm install`.

Para compilar la aplicación web, ejecute `npm run build`. Para compilar la aplicación web en modo de observación y reconstruirla cuando haya cambios, ejecute `npm run build:watch`.

## Contribuciones

La aplicación aún se encuentra en las primeras etapas, sin embargo las contribuciones son siempre bienvenidas. No dude en enviar o someter un _problema (issue)_ si experimenta cualquier error o si tiene una solicitud sobre una función que desea se agregue a Semantra.

```

### `docs/README_zh-CN.md`

```md
# Semantra

https://user-images.githubusercontent.com/306095/233867821-601db8b0-19c6-4bae-8e93-720b324dc199.mov

Semantra 是一个用于语义搜索文档的多功能工具，它能够根据文本含义进行查询，而非仅仅去匹配字词。

该工具通过命令行运行，能够分析你电脑上指定的文本和 PDF 文件，并启动一个本地网络搜索应用以便交互式地查询这些文件。Semantra 想让语义搜索引擎变得更加简单、友好、可定制，同时保证数据的私密性和安全性。

Semantra 的目标用户是那些在需要在大量信息中寻找关键内容的人——例如，新闻记者在截稿期限内筛选泄露的文件，研究者在众多论文中寻找独特的洞见，学生通过查询主题来深入研究文学，历史学者在多本书籍中串联事件等等。

## Resources 资源

- [教程](./tutorial.md)：一个入门级别的指南，涵盖了从安装 Semantra 到实践操作分析文档的全过程。
- [指南](./guides.md)：一些实用的指南，帮助你更深入地使用 Semantra。
- [概念](./concepts.md)：一些关键概念，以帮助你更好地理解 Semantra 的工作原理。
- [使用网页界面](./help.md)：Semantra 网页应用程序的使用说明。

本页面为您提供了 Semantra 的高级概述和功能参考。我们还提供其他语言的版本：[西班牙语版](./README_es.md)，和[英文原版](README.md)。

## 安装

确保已安装好 [Python >= 3.9](https://www.python.org/downloads/)。

安装 Semantra 的最简单方式是通过 `pipx`。如果你还没有安装 `pipx`，运行：

```sh
python3 -m pip install --user pipx
python3 -m pipx ensurepath
```

打开一个新的终端窗口，这样 `pipx` 设置的新路径就会生效。然后执行以下命令：

```sh
pipx install semantra
```

这个命令会在你的系统路径中安装 Semantra。安装完成后，你就可以在终端中运行 `semantra` 并看到相关输出。

## 使用

Semantra 可以处理存储在你的本地计算机上的文档，这些文档可以是文本或 PDF 文件。

最简单的用法是，你可以通过运行以下命令在单个文档上使用 Semantra：

```sh
semantra doc.pdf
```

你也可以在多个文档上运行 Semantra：

```sh
semantra report.pdf book.txt
```

Semantra 在首次处理文档时会需要一些时间，每份文档只需处理一次，所以后续再对同一份文档进行启动则会非常迅速。

处理完成后，Semantra 会启动一个本地 web 服务器，默认地址是 [localhost:8080](http://localhost:8080)。在这个网页上，你可以通过自然语言查询你启动时输入好的文档。

**注意事项：**

如果你要处理的文档并非英文，或者希望通过英文意外的语言进行搜索，默认模型可能无法满足你的需求。你可以使用更大、更慢的多语言模型，例如 `semantra --transformer-model intfloat/multilingual-e5-base [文件]`。

当你首次运行 Semantra 时，可能需要几分钟时间和几百兆的硬盘空间来下载机器学习模型，该模型能在本地处理你输入的文档。虽然[使用的模型可以进行自定义](./guide_models.md)，但默认模型在速度、规模和效果上都达到了良好的平衡。

如果你希望在不消耗自己的计算资源的情况下快速处理文档，并且不介意为使用外部服务付费或者与其分享数据，你可以使用[OpenAI 的嵌入模型](./guide_openai.md)。

## 网页应用程序快速浏览

当你第一次进入 Semantra 的网页界面时，你将看到如下的页面：

![Semantra网页界面](./img/initial_screen.png)

在搜索框中输入一些内容，按下<kbd>Enter</kbd>键或点击搜索图标，即可开始语义查询。

左侧面板会按照相关性排序：

![Semantra搜索结果](./img/resultspane.png)

黄色的评分显示了 0-1.00 的相关性。在 0.50 的范围内的任何内容都表示强度较高的匹配。淡褐色的高亮部分将在搜索结果上滚动显示，解释与你的查询最相关的部分。

点击搜索结果的文本，将跳转到相关文档的相关部分。

![文档中高亮显示的搜索结果](./img/contentwindow_pdf.png)

点击与搜索结果相关的加号/减号按钮，来对这些结果进行正面/负面的标记。此后重新执行查询时，这些额外的查询参数就会生效。

![正面/负面标记搜索结果](./img/inaugural_speeches_healthcare_plus_minus.png)

最后，你可以在查询文本中添加和减去文字，使用加号/减号来塑造精确的语义含义。

![添加和减去文本查询](./img/inaugural_speeches_economic_capitalism_war.png)

要更深入地了解网页应用，可以查看[教程](./tutorial.md)或[网页应用参考](./help.md)。

## 概念入门

语义搜索引擎本质上不同于文本匹配算法，所以使用方法也不一样。

首先，对于任何给定的查询，无论查询内容多么不相关，总会有搜索结果。结果的相关性得分可能很低，但结果绝不会完全消失。这是因为语义搜索的算法常常会在微小的得分差异中，包含有用的结果。结果总会按相关性排序，并且每篇文档只展示得分最高的前 10 个结果，因此得分较低的结果会自动被剔除。

另一个区别是，如果你查询文档中直接出现的内容，Semantra 不一定能找到精确的文本匹配。从高层来看，这是因为在不同的上下文中，单词可能有不同的含义，例如， “leaves” 既可以指树的叶子，也可以指某人的“离开”。Semantra 使用的嵌入模型将你输入的所有文本和查询转换成可以进行数学比较的长数字序列，这种情况下，精确的子字符串匹配就不太重要。关于嵌入的更多信息，请查看[嵌入概念](./concept_embeddings.md)的文档。

## 命令行参考

```sh
semantra [OPTIONS] [FILENAME(S)]...
```

## 命令行选项

- `--model [openai|minilm|mpnet|sgpt|sgpt-1.3B]`: 预设的嵌入模型。有关更多信息，请参阅模型指南（默认：mpnet）
- `--transformer-model TEXT`: 自定义用于嵌入的 Huggingface Transformer 模型名称（应只指定 `--model` 和 `--transformer-model` 其中一个）。有关更多信息，请参阅模型指南
- `--windows TEXT`: 要提取嵌入的窗口。格式为 "size[\_offset=0][\_rewind=0] 的逗号分隔列表。size 为 128、offset 为 0、rewind 为 16 的窗口（128_0_16）会把文本分为 128 个 token 长度的文本块，对每个文本块进行嵌入，并且让这些文本块之间重叠 16 个 token，并且只有第一个窗口会被用于搜索。有关更多信息，请参阅[窗口概念](./concept_windows.md)文档（默认：128_0_16）
- `--encoding`: 用于读取文本文件的编码 [默认: utf-8]
- `--encoding`：用于读取文本文件的编码（默认：utf-8）
- `--no-server`：不启动 UI 服务器（只处理）
- `--port INTEGER`：嵌入服务器的端口（默认：8080）
- `--host TEXT`：嵌入服务器的主机（默认：127.0.0.1）
- `--pool-size INTEGER`：在请求中池化在一起的嵌入标记的最大数量
- `--pool-count INTEGER`：在请求中池化在一起的嵌入的最大数量
- `--doc-token-pre TEXT`：添加到 Transformer 模型中每个文档前面的标记（默认：None）
- `--doc-token-post TEXT`：添加到 Transformer 模型中每个文档后面的标记（默认：None）
- `--query-token-pre TEXT`：添加到 Transformer 模型中每个查询前面的标记（默认：None）
- `--query-token-post TEXT`：添加到 Transformer 模型中每个查询后面的标记（默认：None）
- `--num-results INTEGER`：每个文件的查询结果（邻居）数量（默认：10）
- `--annoy`：使用 Annoy 进行近似 kNN 查询（查询更快，但精度略有损失）；如果为假，则使用精确的穷举 kNN（默认：True）
- `--num-annoy-trees INTEGER`：用于通过 Annoy 进行近似 kNN 的树的数量（默认：100）
- `--svm`：使用 SVM 而不是任何类型的 kNN 进行查询（较慢，只适用于对称模型）
- `--svm-c FLOAT`：SVM 正则化参数；较高的值会更多地惩罚误报（默认：1.0）
- `--explain-split-count INTEGER`：用于解释查询的给定窗口的分割数量（默认：9）
- `--explain-split-divide INTEGER`：用于获取解释查询的每个分割长度的窗口大小除数（默认：6）
- `--num-explain-highlights INTEGER`：用于解释查询的分割结果的突出显示数量（默认：2）
- `--force`：强行重新处理已缓存过的文档
- `--silent`：不打印进度信息
- `--no-confirm`：处理 OpenAI 之前不显示成本确认
- `--version`：打印版本并退出
- `--list-models`：列出预设模型并退出
- `--show-semantra-dir`：打印 Semantra 将用于存储处理文件的目录并退出
- `--semantra-dir PATH`：指定存储 Semantra 文件的目录
- `--help`：显示此消息并退出

## 常见问题

### 能使用 ChatGPT 吗？

不能，这是故意设计成这样的。

Semantra 并不依赖于任何像 ChatGPT 这样的生成模型。它仅被设计为在没有进行任何解释、总结或合成结果的额外层面上进行语义查询。生成语言模型偶尔会产生看似合理，但最终错误的信息，从而让用户不得不返回信息源头去进行校验。相比之下，Semantra 将原始资料作为唯一的真理来源，力图证明在简单的嵌入模型基础之上，采用人在环中的搜索体验对用户更加有利。

## 开发

Python 应用程序位于`src/semantra/semantra.py`，并作为标准 Python 命令行项目通过 `pyproject.toml` 进行管理。

本地网络应用程序使用 [Svelte](https://svelte.dev/) 编写，并以标准的 npm 应用程序进行管理。

若要为 web 应用程序进行开发，通过 `cd` 进入`client`，然后运行 `npm install`。

要构建 web 应用程序，运行`npm run build`。要在观察模式下构建 web 应用程序并在有更改时重新构建，运行`npm run build:watch`。

## 贡献

该应用程序仍处于早期阶段，但欢迎大家做出贡献。如有任何错误或功能需求，请随时提交 Issues。

```

### `docs/tutorial.md`

```md
# Tutorial

This tutorial will walk through how to use Semantra with practical examples. It is recommended for new users of the tool.

## Contents

- Installation instructions: below
- [Lesson 1: Semantically searching Shakespeare](lesson_1_semantically_searching_shakespeare.md)
- [Lesson 2: Advanced searching across all U.S. presidential inagural speeches](lesson_2_advanced_searching.md)

## Installing

### Installing Python

Semantra is a command-line tool that is built with Python.

To install Semantra, you must first have Python installed, which you can accomplish in several ways:

- downloading from the [Python website](https://www.python.org/downloads/)
- via a package manager. For instance, if you have [Homebrew](https://brew.sh/) installed: `brew install python`

Open the terminal and verify Python is working via:

```sh
python --version
```

It is recommended to use Python 3.9 or greater.

If you need help installing Python, consult the sections on installing Python 3 from [this guide](https://docs.python-guide.org/starting/installation/).

### Installing Semantra

Once you have Python installed, you are ready to install Semantra. The most convenient way is via [pipx](https://packaging.python.org/en/latest/guides/installing-stand-alone-command-line-tools/). Run the following commands in the terminal:

```sh
python3 -m pip install --user pipx
python3 -m pipx ensurepath
```

Once `pipx` is installed, you may need to open a new terminal window for the changes to go into affect. Once you launch a new terminal window, Semantra can be installed globally via:

```sh
pipx install semantra
```

If you already have a working installation of Semantra and want to upgrade, you can run `pipx upgrade semantra`.

Once this command runs, verify that Semantra is installed by running the following in the terminal (it may take several seconds the first time it's run):

```sh
semantra
```

If all goes well, you'll get a print out to the terminal that looks like this:

```
Usage: semantra [OPTIONS] [FILENAME]...
Try 'semantra --help' for help.

Error: Must provide a filename to process/query
```

It's time to use the tool!

## Next steps

Now that Semantra is installed, let's start using it! We'll start by semantically searching Shakespeare:

- [Lesson 1: Semantically Searching Shakespeare](lesson_1_semantically_searching_shakespeare.md)
- [Lesson 2: Advanced searching across all U.S. presidential inagural speeches](lesson_2_advanced_searching.md)

```

### `LICENSE`

```
MIT License

Copyright (c) 2023 Dylan Freedman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

### `pyproject.toml`

```toml
[build-system]
build-backend = "setuptools.build_meta"
requires = ["setuptools", "wheel"]

[project]
authors = [{name = "Dylan Freedman", email = "freedmand@gmail.com"}]
classifiers = [
  "Programming Language :: Python :: 3",
  "License :: OSI Approved :: MIT License",
  "Operating System :: OS Independent",
]
dependencies = [
  "annoy_fixed>=1.16.3",
  "click>=8.1.3",
  "Flask>=2.2.3",
  "openai>=0.27.2",
  "Pillow>=9.5.0",
  "pypdfium2>=4.5.0",
  "python-dotenv>=1.0.0",
  "numpy<2",
  "tiktoken>=0.3.3",
  "torch>=2.0.0",
  "tqdm>=4.65.0",
  "transformers>=4.27.4",
  "setuptools",
]
description = "A semantic search CLI tool"
name = "semantra"
readme = "README.md"
version = "0.1.12"

[project.urls]
"Bug Tracker" = "https://github.com/freedmand/semantra/issues"
"Homepage" = "https://github.com/freedmand/semantra"
"Repository" = "https://github.com/freedmand/semantra"

[project.scripts]
semantra = "semantra.semantra:main"

[tool.setuptools.packages.find]
include = ["semantra*"]
where = ["src"]

[tool.setuptools.package-data]
semantra = ["client_public/**/*"]

```

### `README.md`

```md
# Semantra

https://user-images.githubusercontent.com/306095/233867821-601db8b0-19c6-4bae-8e93-720b324dc199.mov

Semantra is a multipurpose tool for semantically searching documents. Query by meaning rather than just by matching text.

The tool, made to run on the command line, analyzes specified text and PDF files on your computer and launches a local web search application for interactively querying them. The purpose of Semantra is to make running a specialized semantic search engine easy, friendly, configurable, and private/secure.

Semantra is built for individuals seeking needles in haystacks — journalists sifting through leaked documents on deadline, researchers seeking insights within papers, students engaging with literature by querying themes, historians connecting events across books, and so forth.

## Resources

- [Tutorial](docs/tutorial.md): a gentle introduction to getting started with Semantra — everything from installing the tool to hands-on examples of analyzing documents with it
- [Guides](docs/guides.md): practical guides on how to do more with Semantra
- [Concepts](docs/concepts.md): Explainers on some concepts to better understand how Semantra works
- [Using the web interface](docs/help.md): A reference on how to use the Semantra web app

This page gives a high-level overview of Semantra and a reference of its features. It's also available in other languages: [Semantra en español](docs/README_es.md), [Semantra 中文说明](docs/README_zh-CN.md)

## Installation

Ensure you have [Python >= 3.9](https://www.python.org/downloads/).

The easiest way to install Semantra is via `pipx`. If you do not have `pipx` installed, run:

```sh
python3 -m pip install --user pipx
```

Or, if you have [Homebrew](https://brew.sh/) installed, you can run `brew install pipx`.

Once `pipx` is installed, run:

```sh
python3 -m pipx ensurepath
```

Open a new terminal window for the new path settings `pipx` sets to go into effect. Then run:

```sh
python3 -m pipx install semantra
```

This will install Semantra on your path. You should be able to run `semantra` in the terminal and see output.

Note: if the above steps don't work or you'd like a more granular installation, you can install Semantra in a virtual environment (though note it will only be accessible while the virtual environment is activated):

```sh
python3 -m venv venv
source venv/bin/activate
pip install semantra
```

## Usage

Semantra operates on collections of documents — text or PDF files — stored on your local computer.

At its simplest, you can run Semantra over a single document by running:

```sh
semantra doc.pdf
```

You can run Semantra over multiple documents, too:

```sh
semantra report.pdf book.txt
```

Semantra will take some time to process the input documents. This is a one-time operation per document (subsequent runs over the same document collection will be near instantaneous).

Once processing is complete, Semantra will launch a local webserver, by default at [localhost:8080](http://localhost:8080). On this web page, you can interactively query the passed in documents semantically.

**Quick notes:**

When you first run Semantra, it may take several minutes and several hundred megabytes of hard disk space to download a local machine learning model that can process the document you passed in. [The model used can be customized](docs/guide_models.md), but the default one is a great mix of being fast, lean, and effective.

If you want to process documents quickly without using your own computational resources and don't mind paying or sharing data with external services, you can use [OpenAI's embedding model](docs/guide_openai.md).

## Quick tour of the web app

When you first navigate to the Semantra web interface, you will see a screen like this:

![Semantra web interface](docs/img/initial_screen.png)

Type in something in the search box to start querying semantically. Hit <kbd>Enter</kbd> or click the search icon to execute the query.

Search results will appear in the left pane ordered by most relevant documents:

![Semantra search results](docs/img/resultspane.png)

The yellow scores show relevance from 0-1.00. Anything in the 0.50 range indicates a strong match. Lighter brown highlights will stream in over the search results explaining the most relevant portions to your query.

Clicking on a search result's text will navigate to the relevant section of the associated document.

![Highlighted search result in document](docs/img/contentwindow_pdf.png)

Clicking on the plus/minus buttons associated with a search result will positively/negatively tag those results. Re-running the query will cause these additional query parameters to go into effect.

![Positively/negatively tagging search results](docs/img/inaugural_speeches_healthcare_plus_minus.png)

Finally, text queries can be added and subtracted with plus/minus signs in the query text to sculpt a precise semantic meaning.

![Adding and subtracting text queries](docs/img/inaugural_speeches_economic_capitalism_war.png)

For a more in-depth walkthrough of the web app, check out the [tutorial](docs/tutorial.md) or [the web app reference](docs/help.md).

## Quick concepts

Using a semantic search engine is fundamentally different than an exact text matching algorithm.

For starters, there will _always_ be search results for a given query, no matter how irrelevant it is. The scores may be really low, but the results will never disappear entirely. This is because semantic searching with query arithmetic often reveals useful results amid very minor score differences. The results will always be sorted by relevance and only the top 10 results per document are shown so the lower scoring results are cut off automatically.

Another difference is that Semantra will not necessarily find exact text matches if you query something that directly appears in the document. At a high level, this is because words can mean different things in different contexts, e.g. the word "leaves" can refer to the leaves on trees or to someone _leaving_. The embedding models that Semantra uses convert all the text and queries you enter into long sequences of numbers that can be mathematically compared, and an exact substring match is not always significant in this sense. See [the embeddings concept doc](docs/concept_embeddings.md) for more information on embeddings.

## Command-line reference

```sh
semantra [OPTIONS] [FILENAME(S)]...
```

## Options

- `--model [openai|minilm|mpnet|sgpt|sgpt-1.3B]`: Preset model to use for embedding. See [the models guide](docs/guide_models.md) for more info (default: mpnet)
- `--transformer-model TEXT`: Custom Huggingface transformers model name to use for embedding (only one of `--model` and `--transformer-model` should be specified). See [the models guide](docs/guide_models.md) for more info
- `--windows TEXT`: Embedding windows to extract. A comma-separated list of the format "size[\_offset=0][_rewind=0]. A window with size 128, offset 0, and rewind of 16 (128_0_16) will embed the document in chunks of 128 tokens which partially overlap by 16. Only the first window is used for search. See the [windows concept doc](docs/concept_windows.md) for more information (default: 128_0_16)
- `--encoding`: Encoding to use for reading text files [default: utf-8]
- `--no-server`: Do not start the UI server (only process)
- `--port INTEGER`: Port to use for embedding server (default: 8080)
- `--host TEXT`: Host to use for embedding server (default: 127.0.0.1)
- `--pool-size INTEGER`: Max number of embedding tokens to pool together in requests
- `--pool-count INTEGER`: Max number of embeddings to pool together in requests
- `--doc-token-pre TEXT`: Token to prepend to each document in transformer models (default: None)
- `--doc-token-post TEXT`: Token to append to each document in transformer models (default: None)
- `--query-token-pre TEXT`: Token to prepend to each query in transformer models (default: None)
- `--query-token-post TEXT`: Token to append to each query in transformer models (default: None)
- `--num-results INTEGER`: Number of results (neighbors) to retrieve per file for queries (default: 10)
- `--annoy`: Use approximate kNN via Annoy for queries (faster querying at a slight cost of accuracy); if false, use exact exhaustive kNN (default: True)
- `--num-annoy-trees INTEGER`: Number of trees to use for approximate kNN via Annoy (default: 100)
- `--svm`: Use SVM instead of any kind of kNN for queries (slower and only works on symmetric models)
- `--svm-c FLOAT`: SVM regularization parameter; higher values penalize mispredictions more (default: 1.0)
- `--explain-split-count INTEGER`: Number of splits on a given window to use for explaining a query (default: 9)
- `--explain-split-divide INTEGER`: Factor to divide the window size by to get each split length for explaining a query (default: 6)
- `--num-explain-highlights INTEGER`: Number of split results to highlight for explaining a query (default: 2)
- `--force`: Force process even if cached
- `--silent`: Do not print progress information
- `--no-confirm`: Do not show cost and ask for confirmation before processing with OpenAI
- `--version`: Print version and exit
- `--list-models`: List preset models and exit
- `--show-semantra-dir`: Print the directory semantra will use to store processed files and exit
- `--semantra-dir PATH`: Directory to store semantra files in
- `--help`: Show this message and exit

## Frequently asked questions

### Can it use ChatGPT?

No, and this is by design.

Semantra does not use any generative models like ChatGPT. It is built only to query text semantically without any layers on top to attempt explaining, summarizing, or synthesizing results. Generative language models occasionally produce outwardly plausible but ultimately incorrect information, placing the burden of verification on the user. Semantra treats primary source material as the only source of truth and endeavors to show that a human-in-the-loop search experience on top of simpler embedding models is more serviceable to users.

## Development

The Python app is in `src/semantra/semantra.py` and is managed as a standard Python command-line project with `pyproject.toml`.

The local web app is written in [Svelte](https://svelte.dev/) and managed as a standard npm application.

To develop for the web app `cd` into `client` and then run `npm install`.

To build the web app, run `npm run build`. To build the web app in watch mode and rebuild when there's changes, run `npm run build:watch`.

## Contributions

The app is still in early stages, but contributions are welcome. Please feel free to submit an issue for any bugs or feature requests.

```

### `src/semantra/__init__.py`

```py

```

### `src/semantra/client_public`

```
../../client/public
```

### `src/semantra/models.py`

```py
import os
from abc import ABC, abstractmethod

import numpy as np
import openai
import tiktoken
import torch
from dotenv import load_dotenv
from transformers import AutoModel, AutoTokenizer

load_dotenv(dotenv_path=os.path.join(os.getcwd(), ".env"))

minilm_model_name = "sentence-transformers/all-MiniLM-L6-v2"
mpnet_model_name = "sentence-transformers/all-mpnet-base-v2"
sgpt_model_name = "Muennighoff/SGPT-125M-weightedmean-msmarco-specb-bitfit"
sgpt_1_3B_model_name = "Muennighoff/SGPT-1.3B-weightedmean-msmarco-specb-bitfit"


def mean_pooling(model_output, attention_mask):
    token_embeddings = model_output[
        0
    ]  # First element of model_output contains all token embeddings
    input_mask_expanded = (
        attention_mask.unsqueeze(-1).expand(token_embeddings.size()).float()
    )
    sum_embeddings = torch.sum(token_embeddings * input_mask_expanded, 1)
    sum_mask = torch.clamp(input_mask_expanded.sum(1), min=1e-9)
    return sum_embeddings / sum_mask


def filter_none(x):
    return [i for i in x if i is not None]


def as_numpy(x):
    # If x is a tensor, convert it to a numpy array
    if isinstance(x, torch.Tensor):
        return x.cpu().numpy()
    return x


class BaseModel(ABC):
    @abstractmethod
    def get_num_dimensions(self) -> int:
        ...

    @abstractmethod
    def get_tokens(self, text: str):
        ...

    @abstractmethod
    def get_token_length(self, tokens) -> int:
        ...

    @abstractmethod
    def get_text_chunks(self, text: str, tokens) -> "list[str]":
        ...

    @abstractmethod
    def get_config(self):
        ...

    @abstractmethod
    def embed(self, tokens, offsets, is_query: bool = False) -> "list[list[float]]":
        ...

    def embed_document(self, document) -> "list[float]":
        tokens = self.get_tokens(document)
        return self.embed(tokens, [(0, self.get_token_length(tokens))], False)[0]

    def embed_query(self, query: str) -> "list[float]":
        tokens = self.get_tokens(query)
        return self.embed(tokens, [(0, self.get_token_length(tokens))], True)[0]

    def embed_queries(self, queries) -> "list[float]":
        all_embeddings = [
            as_numpy(self.embed_query(query["query"])) * query["weight"]
            for query in queries
        ]
        # Return sum of embeddings
        return np.sum(all_embeddings, axis=0)

    def embed_queries_and_preferences(self, queries, preferences, documents):
        query_embedding = self.embed_queries(queries) if len(queries) > 0 else None
        # Add preferences to embeddings
        return np.sum(
            [
                *([query_embedding] if query_embedding is not None else []),
                *[
                    documents[pref["file"]["filename"]].embeddings[
                        pref["searchResult"]["index"]
                    ]
                    * pref["weight"]
                    for pref in preferences
                ],
            ],
            axis=0,
        )

    def is_asymmetric(self):
        return False


class OpenAIModel(BaseModel):
    def __init__(
        self,
        model_name="text-embedding-ada-002",
        num_dimensions=1536,
        tokenizer_name="cl100k_base",
    ):
        # Check if OpenAI API key is set
        if "OPENAI_API_KEY" not in os.environ:
            raise Exception(
                "OpenAI API key not set. Please set the OPENAI_API_KEY environment variable or create a `.env` file with the key in the current working directory or the Semantra directory, which is revealed by running `semantra --show-semantra-dir`."
            )
        
        openai.api_key = os.getenv("OPENAI_API_KEY")

        self.model_name = model_name
        self.num_dimensions = num_dimensions
        self.tokenizer = tiktoken.get_encoding(tokenizer_name)

    def get_config(self):
        return {
            "model_type": "openai",
            "model_name": self.model_name,
            "tokenizer_name": self.tokenizer.name,
        }

    def get_num_dimensions(self) -> int:
        return self.num_dimensions

    def get_tokens(self, text: str):
        return self.tokenizer.encode(text)

    def get_token_length(self, tokens) -> int:
        return len(tokens)

    def get_text_chunks(self, _: str, tokens) -> "list[str]":
        return [self.tokenizer.decode([token]) for token in tokens]

    def embed(self, tokens, offsets, _is_query=False) -> "list[list[float]]":
        texts = [tokens[i:j] for i, j in offsets]
        response = openai.Embedding.create(model=self.model_name, input=texts)
        return np.array([data["embedding"] for data in response["data"]])


def zero_if_none(x):
    return 0 if x is None else x


class TransformerModel(BaseModel):
    def __init__(
        self,
        model_name,
        doc_token_pre=None,
        doc_token_post=None,
        query_token_pre=None,
        query_token_post=None,
        asymmetric=False,
        cuda=None,
    ):
        if cuda is None:
            cuda = torch.cuda.is_available()
        self.model_name = model_name
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModel.from_pretrained(model_name)

        # Get tokens
        self.pre_post_tokens = [
            doc_token_pre,
            doc_token_post,
            query_token_pre,
            query_token_post,
        ]
        self.doc_token_pre = (
            self.tokenizer.encode(doc_token_pre, add_special_tokens=False)
            if doc_token_pre
            else None
        )
        self.doc_token_post = (
            self.tokenizer.encode(doc_token_post, add_special_tokens=False)
            if doc_token_post
            else None
        )
        self.query_token_pre = (
            self.tokenizer.encode(query_token_pre, add_special_tokens=False)
            if query_token_pre
            else None
        )
        self.query_token_post = (
            self.tokenizer.encode(query_token_post, add_special_tokens=False)
            if query_token_post
            else None
        )

        self.asymmetric = asymmetric

        self.cuda = cuda
        if self.cuda:
            self.model = self.model.cuda()

    def get_config(self):
        return {
            "model_type": "transformers",
            "model_name": self.model_name,
            "doc_token_pre": self.pre_post_tokens[0],
            "doc_token_post": self.pre_post_tokens[1],
            "query_token_pre": self.pre_post_tokens[2],
            "query_token_post": self.pre_post_tokens[3],
            "asymmetric": self.asymmetric,
        }

    def is_asymmetric(self):
        return self.asymmetric

    def get_num_dimensions(self) -> int:
        return int(self.model.config.hidden_size)

    def get_tokens(self, text: str):
        return self.tokenizer(
            text, return_offsets_mapping=True, verbose=False, return_tensors="pt"
        )

    def get_token_length(self, tokens) -> int:
        return len(tokens["input_ids"][0])

    def get_text_chunks(self, text: str, tokens) -> "list[str]":
        offsets = tokens["offset_mapping"][0]
        chunks = []
        prev_i = None
        prev_j = None
        for i, j in offsets:
            new_i = prev_j if i == j else i
            if prev_i is not None:
                chunks.append(text[prev_i:new_i])
            if prev_i is None:
                prev_i = 0
            elif new_i > prev_i:
                prev_i = new_i
            if prev_j is None:
                prev_j = j
            elif j > prev_j:
                prev_j = j
        chunks.append(text[0 if prev_i is None else prev_i :])
        return chunks

    def normalize_input_ids(self, input_ids, is_query):
        if self.query_token_pre is None and self.query_token_post is None:
            return input_ids
        else:
            token_pre = self.query_token_pre if is_query else self.doc_token_pre
            token_post = self.query_token_post if is_query else self.doc_token_post
            return torch.cat(
                filter_none(
                    [
                        torch.tensor(token_pre) if token_pre is not None else None,
                        input_ids,
                        torch.tensor(token_post) if token_post is not None else None,
                    ]
                )
            )

    def normalize_attention_mask(self, attention_mask, is_query):
        if self.query_token_pre is None and self.query_token_post is None:
            return attention_mask
        else:
            token_pre = self.query_token_pre if is_query else self.doc_token_pre
            token_post = self.query_token_post if is_query else self.doc_token_post
            return torch.cat(
                filter_none(
                    [
                        torch.ones(len(token_pre)) if token_pre is not None else None,
                        attention_mask,
                        torch.ones(len(token_post)) if token_post is not None else None,
                    ]
                )
            )

    def embed(self, tokens, offsets, is_query=False) -> "list[list[float]]":
        input_ids = torch.nn.utils.rnn.pad_sequence(
            [
                self.normalize_input_ids(
                    tokens["input_ids"][0].index_select(0, torch.tensor(range(i, j))),
                    is_query,
                )
                for i, j in offsets
            ],
            batch_first=True,
            padding_value=zero_if_none(self.tokenizer.pad_token_id),
        )
        attention_mask = torch.nn.utils.rnn.pad_sequence(
            [
                self.normalize_attention_mask(
                    tokens["attention_mask"][0].index_select(
                        0, torch.tensor(range(i, j))
                    ),
                    is_query,
                )
                for i, j in offsets
            ],
            batch_first=True,
            padding_value=0,
        )
        if self.cuda:
            input_ids = input_ids.cuda()
            attention_mask = attention_mask.cuda()
        with torch.no_grad():
            model_output = self.model(
                input_ids=input_ids, attention_mask=attention_mask
            )
        return mean_pooling(model_output, attention_mask)


models = {
    "openai": {
        "cost_per_token": 0.0004 / 1000,
        "pool_size": 50000,
        "pool_count": 2000,
        "get_model": lambda: OpenAIModel(
            model_name="text-embedding-ada-002",
            num_dimensions=1536,
            tokenizer_name="cl100k_base",
        ),
    },
    "minilm": {
        "cost_per_token": None,
        "pool_size": 50000,
        "get_model": lambda: TransformerModel(model_name=minilm_model_name),
    },
    "mpnet": {
        "cost_per_token": None,
        "pool_size": 15000,
        "get_model": lambda: TransformerModel(model_name=mpnet_model_name),
    },
    "sgpt": {
        "cost_per_token": None,
        "pool_size": 10000,
        "get_model": lambda: TransformerModel(
            model_name=sgpt_model_name,
            query_token_pre="[",
            query_token_post="]",
            doc_token_pre="{",
            doc_token_post="}",
            asymmetric=True,
        ),
    },
    "sgpt-1.3B": {
        "cost_per_token": None,
        "pool_size": 1000,
        "get_model": lambda: TransformerModel(
            model_name=sgpt_1_3B_model_name,
            query_token_pre="[",
            query_token_post="]",
            doc_token_pre="{",
            doc_token_post="}",
            asymmetric=True,
        ),
    },
}

```

### `src/semantra/pdf.py`

```py
import pypdfium2 as pdfium
from threading import Lock
import json
import os
from tqdm import tqdm
from .util import get_converted_pdf_txt_filename, get_pdf_positions_filename

mutexes = {}


def get_mutex(filename):
    # Ensure that only one thread is accessing a PDF at a time
    if filename not in mutexes:
        mutexes[filename] = Lock()
    return mutexes[filename]


class PDFContent:
    def __init__(self, rawtext, filename, positions):
        self.rawtext = rawtext
        self.filename = filename
        self.positions = positions
        self.pdfium = pdfium.PdfDocument(filename)
        self.mutex = get_mutex(filename)
        self.filetype = "pdf"

    def get_page_image_pil(self, page_number, scale):
        with self.mutex:
            page = self.pdfium[page_number]
            bitmap = page.render(scale=scale)
            return bitmap.to_pil()

    def get_page_chars(self, page_number):
        with self.mutex:
            page = self.pdfium[page_number]
            textpage = page.get_textpage()
            num_chars = textpage.count_chars()
            char_boxes = [textpage.get_charbox(i) for i in range(num_chars)]
            chars = [
                textpage.get_text_range(index=i, count=1) for i in range(num_chars)
            ]
            return [(c, b) for c, b in list(zip(chars, char_boxes))]


# Page separator character
LINE_FEED = "\f"


def get_pdf_content(md5, filename, semantra_dir, force, silent):
    converted_txt = os.path.join(semantra_dir, get_converted_pdf_txt_filename(md5))
    position_index = os.path.join(semantra_dir, get_pdf_positions_filename(md5))

    pdf = pdfium.PdfDocument(filename)
    n_pages = len(pdf)

    if force or not os.path.exists(converted_txt) or not os.path.exists(position_index):
        positions = []
        position = 0
        # newline="" ensures pdfium's \r is preserved
        with open(
            converted_txt, "w", newline="", encoding="utf-8", errors="ignore"
        ) as f:
            for page_index in tqdm(
                range(n_pages),
                desc="Extracting PDF contents",
                leave=False,
                disable=silent,
            ):
                page = pdf[page_index]
                page_width, page_height = page.get_size()
                textpage = page.get_textpage()
                pagetext = textpage.get_text_range()

                positions.append(
                    {
                        "char_index": position,
                        "page_width": page_width,
                        "page_height": page_height,
                    }
                )
                position += f.write(pagetext)
                position += f.write(LINE_FEED)
        with open(position_index, "w", encoding="utf-8") as f:
            json.dump(positions, f)
        with open(
            converted_txt, "r", newline="", encoding="utf-8", errors="ignore"
        ) as f:
            rawtext = f.read()
        return PDFContent(rawtext, filename, positions)
    else:
        with open(
            converted_txt, "r", newline="", encoding="utf-8", errors="ignore"
        ) as f:
            rawtext = f.read()
        with open(position_index, "r", encoding="utf-8") as f:
            positions = json.load(f)

        return PDFContent(rawtext, filename, positions)

```

### `src/semantra/semantra.py`

```py
import hashlib
import io
import json
import math
import os

import click
import numpy as np
import pkg_resources
from dotenv import load_dotenv
from flask import Flask, jsonify, make_response, request, send_file, send_from_directory
from tqdm import tqdm

from .models import BaseModel, TransformerModel, as_numpy, models
from .pdf import get_pdf_content
from .util import (
    HASH_LENGTH,
    file_md5,
    get_annoy_filename,
    get_config_filename,
    get_embeddings_filename,
    get_num_annoy_embeddings,
    get_num_embeddings,
    get_offsets,
    get_tokens_filename,
    join_text_chunks,
    load_annoy_db,
    read_embeddings_file,
    sort_results,
    write_annoy_db,
    write_embedding,
)

VERSION = pkg_resources.require("semantra")[0].version
DEFAULT_ENCODING = "utf-8"
DEFAULT_PORT = 8080

package_directory = os.path.dirname(os.path.abspath(__file__))


class Content:
    def __init__(self, rawtext, filename):
        self.rawtext = rawtext
        self.filename = filename
        self.filetype = "text"


def get_text_content(md5, filename, semantra_dir, force, silent, encoding):
    if filename.endswith(".pdf"):
        return get_pdf_content(md5, filename, semantra_dir, force, silent)

    with open(filename, "r", encoding=encoding, errors="ignore") as f:
        rawtext = f.read()
        return Content(rawtext, filename)


TRANSFORMER_POOL_DEFAULT = 15000


class Document:
    def __init__(
        self,
        filename,
        md5,
        semantra_dir,
        base_filename,
        config,
        embeddings_filenames,
        use_annoy,
        annoy_filenames,
        windows,
        offsets,
        tokens_filename,
        num_dimensions,
        encoding,
    ):
        self.filename = filename
        self.md5 = md5
        self.semantra_dir = semantra_dir
        self.base_filename = base_filename
        self.config = config
        self.embeddings_filenames = embeddings_filenames
        self.use_annoy = use_annoy
        self.annoy_filenames = annoy_filenames
        self.windows = windows
        self.offsets = offsets
        self.tokens_filename = tokens_filename
        self.num_dimensions = num_dimensions
        self.encoding = encoding

    @property
    def content(self):
        return get_text_content(
            self.md5, self.filename, self.semantra_dir, False, True, self.encoding
        )

    @property
    def text_chunks(self):
        with open(self.tokens_filename, "r") as f:
            return json.loads(f.read())

    @property
    def num_embeddings(self):
        return len(self.offsets[0])

    @property
    def embedding_db(self):
        if not self.use_annoy:
            raise ValueError("Embeddings are not stored in Annoy database")
        return load_annoy_db(self.annoy_filenames[0], self.num_dimensions)

    @property
    def embeddings(self):
        results, embedding_count = read_embeddings_file(
            self.embeddings_filenames[0],
            self.num_dimensions,
            self.num_embeddings,
        )
        assert embedding_count == self.num_embeddings
        return results


def process(
    filename,
    semantra_dir,
    model,
    num_dimensions,
    use_annoy,
    num_annoy_trees,
    windows,
    cost_per_token,
    pool_count,
    pool_size,
    force,
    silent,
    no_confirm,
    encoding,
):
    # Check if semantra dir exists
    if not os.path.exists(semantra_dir):
        os.makedirs(semantra_dir)

    # Get the md5 and config
    md5 = file_md5(filename)
    base_filename = os.path.basename(filename)
    config = model.get_config()
    if encoding != DEFAULT_ENCODING:
        config["encoding"] = encoding
    config_hash = hashlib.shake_256(json.dumps(config).encode()).hexdigest(HASH_LENGTH)

    # File names
    tokens_filename = os.path.join(semantra_dir, get_tokens_filename(md5, config_hash))
    config_filename = os.path.join(semantra_dir, get_config_filename(md5, config_hash))

    should_calculate_tokens = True
    if force or not os.path.exists(tokens_filename):
        # Calculate tokens to get text chunks
        content = get_text_content(md5, filename, semantra_dir, force, silent, encoding)
        text = content.rawtext
        tokens = model.get_tokens(text)
        should_calculate_tokens = False
        text_chunks = model.get_text_chunks(text, tokens)
        with open(tokens_filename, "w") as f:
            f.write(json.dumps(text_chunks))
    else:
        with open(tokens_filename, "r") as f:
            text_chunks = json.loads(f.read())
    num_tokens = len(text_chunks)

    # Get embedding offsets based on config parameters
    (
        offsets,
        num_embedding_tokens,
    ) = get_offsets(num_tokens, windows)

    # Full config contains additional details
    full_config = {
        **config,
        "filename": filename,
        "md5": md5,
        "base_filename": base_filename,
        "num_dimensions": num_dimensions,
        "cost_per_token": cost_per_token,
        "windows": windows,
        "num_tokens": num_tokens,
        "num_embeddings": len(offsets),
        "num_embedding_tokens": num_embedding_tokens,
        "use_annoy": use_annoy,
        "num_annoy_trees": num_annoy_trees,
        "semantra_version": VERSION,
    }

    if force or not os.path.exists(config_filename):
        if cost_per_token is not None and not no_confirm:
            click.confirm(
                f"Tokens will cost ${num_embedding_tokens * cost_per_token:.2f}. Proceed?",
                abort=True,
            )

    # Write out the config every time
    with open(config_filename, "w") as f:
        f.write(json.dumps(full_config))

    embeddings_filenames = []
    annoy_filenames = []
    with tqdm(
        total=num_embedding_tokens,
        desc="Calculating embeddings",
        leave=False,
        disable=silent,
    ) as pbar:
        for (size, offset, rewind), sub_offsets in zip(windows, offsets):
            embeddings_filename = os.path.join(
                semantra_dir,
                get_embeddings_filename(md5, config_hash, size, offset, rewind),
            )
            annoy_filename = os.path.join(
                semantra_dir,
                get_annoy_filename(
                    md5, config_hash, size, offset, rewind, num_annoy_trees
                ),
            )
            embeddings_filenames.append(embeddings_filename)
            annoy_filenames.append(annoy_filename)

            if os.path.exists(embeddings_filename) and (
                not use_annoy or os.path.exists(annoy_filename)
            ):
                num_embeddings = get_num_embeddings(embeddings_filename, num_dimensions)
                if use_annoy:
                    num_annoy_embeddings = get_num_annoy_embeddings(
                        annoy_filename, num_dimensions
                    )

                if (
                    not force
                    and num_embeddings == len(sub_offsets)
                    and (not use_annoy or num_annoy_embeddings == len(sub_offsets))
                ):
                    # Embedding is fully calculated
                    continue

            if should_calculate_tokens:
                tokens = model.get_tokens(join_text_chunks(text_chunks))
                should_calculate_tokens = False

            # Read embeddings if they exist
            embedding_index = 0
            if not force and os.path.exists(embeddings_filename):
                embeddings, embedding_index = read_embeddings_file(
                    embeddings_filename, num_dimensions, len(sub_offsets)
                )
            else:
                embeddings = np.empty(
                    (len(sub_offsets), num_dimensions), dtype=np.float32
                )
                embedding_index = 0

            num_skip = embedding_index
            iteration = 0

            # Write embeddings
            pool = []
            pool_token_count = 0

            with open(embeddings_filename, "ab") as f:

                def flush_pool():
                    nonlocal pool, pool_token_count, embeddings, embedding_index, f

                    if len(pool) > 0:
                        embedding_results = model.embed(tokens, pool)
                        # Call .cpu if embedding_results contains it
                        if hasattr(embedding_results, "cpu"):
                            embedding_results = embedding_results.cpu()
                        embeddings[
                            embedding_index : embedding_index + len(pool)
                        ] = embedding_results
                        for embedding in embedding_results:
                            write_embedding(f, embedding, num_dimensions)
                        embedding_index += len(pool)
                        pool = []
                        pool_token_count = 0

                for offset in sub_offsets:
                    size = offset[1] - offset[0]

                    # Skip if already calculated
                    if iteration < num_skip:
                        iteration += 1
                        pbar.update(size)
                        continue

                    window_text = join_text_chunks(text_chunks[offset[0] : offset[1]])
                    if len(window_text) == 0:
                        pbar.update(size)
                        continue

                    pool.append(offset)
                    pool_token_count += size
                    if (
                        pool_count is not None and len(pool) >= pool_count
                    ) or pool_token_count >= pool_size:
                        flush_pool()
                    pbar.update(size)

                flush_pool()

            # Write embeddings db
            if use_annoy:
                write_annoy_db(
                    filename=annoy_filename,
                    num_dimensions=num_dimensions,
                    embeddings=embeddings,
                    num_trees=num_annoy_trees,
                )

    return Document(
        filename=filename,
        md5=md5,
        semantra_dir=semantra_dir,
        base_filename=base_filename,
        config=full_config,
        embeddings_filenames=embeddings_filenames,
        use_annoy=use_annoy,
        annoy_filenames=annoy_filenames,
        windows=windows,
        offsets=offsets,
        tokens_filename=tokens_filename,
        num_dimensions=num_dimensions,
        encoding=encoding,
    )


def process_windows(windows: str) -> "list[tuple[int, int, int]]":
    for window in windows.split(","):
        if "_" in window:
            # One or two occurrences?
            if window.count("_") == 1:
                size, offset = window.split("_")
                rewind = 0
            else:
                size, offset, rewind = window.split("_")
            yield int(size), int(offset), int(rewind)
        else:
            yield int(window), 0, 0


@click.command()
@click.argument("filename", type=click.Path(exists=True), nargs=-1)
@click.option(
    "--model",
    type=click.Choice(models.keys(), case_sensitive=True),
    default="mpnet",
    show_default=True,
    help="Preset model to use for embedding",
)
@click.option(
    "--encoding",
    type=str,
    default=DEFAULT_ENCODING,
    show_default=True,
    help="Encoding to use for reading text files",
)
@click.option(
    "--transformer-model",
    type=str,
    help="Custom Huggingface transformers model name to use for embedding",
)
@click.option(
    "--windows",
    type=str,
    default="128_0_16",
    show_default=True,
    help='Embedding windows to extract. A comma-separated list of the format "size[_offset=0][_rewind=0]. A window with size 128, offset 0, and rewind of 16 (128_0_16) will embed the document in chunks of 128 tokens which partially overlap by 16. Only the first window is used for search.',
)
@click.option(
    "--no-server",
    is_flag=True,
    default=False,
    show_default=True,
    help="Do not start the UI server (only process)",
)
@click.option(
    "--port",
    type=int,
    default=DEFAULT_PORT,
    show_default=True,
    help="Port to use for embedding server",
)
@click.option(
    "--host",
    type=str,
    default="127.0.0.1",
    show_default=True,
    help="Host to use for embedding server. Set to 0.0.0.0 to make the server available externally.",
)
@click.option(
    "--pool-size",
    type=int,
    default=None,
    help="Max number of embedding tokens to pool together in requests",
)
@click.option(
    "--pool-count",
    type=int,
    default=None,
    help="Max number of embeddings to pool together in requests",
)
@click.option(
    "--doc-token-pre",
    type=str,
    default=None,
    help="Token to prepend to each document in transformer models (default: None)",
)
@click.option(
    "--doc-token-post",
    type=str,
    default=None,
    help="Token to append to each document in transformer models (default: None)",
)
@click.option(
    "--query-token-pre",
    type=str,
    default=None,
    help="Token to prepend to each query in transformer models (default: None)",
)
@click.option(
    "--query-token-post",
    type=str,
    default=None,
    help="Token to append to each query in transformer models (default: None)",
)
@click.option(
    "--num-results",
    type=int,
    default=10,
    show_default=True,
    help="Number of results (neighbors) to retrieve per file for queries",
)
@click.option(
    "--annoy",
    is_flag=True,
    default=True,
    show_default=True,
    help="Use approximate kNN via Annoy for queries (faster querying at a slight cost of accuracy); if false, use exact exhaustive kNN",
)
@click.option(
    "--num-annoy-trees",
    type=int,
    default=100,
    show_default=True,
    help="Number of trees to use for approximate kNN via Annoy",
)
@click.option(
    "--svm",
    is_flag=True,
    default=False,
    show_default=True,
    help="Use SVM instead of any kind of kNN for queries (slower and only works on symmetric models)",
)
@click.option(
    "--svm-c",
    type=float,
    default=1.0,
    show_default=True,
    help="SVM regularization parameter; higher values penalize mispredictions more",
)
@click.option(
    "--explain-split-count",
    type=int,
    default=9,
    show_default=True,
    help="Number of splits on a given window to use for explaining a query",
)
@click.option(
    "--explain-split-divide",
    type=int,
    default=6,
    show_default=True,
    help="Factor to divide the window size by to get each split length for explaining a query",
)
@click.option(
    "--num-explain-highlights",
    type=int,
    default=2,
    show_default=True,
    help="Number of split results to highlight for explaining a query",
)
@click.option(
    "--force", is_flag=True, default=False, help="Force process even if cached"
)
@click.option(
    "--silent",
    is_flag=True,
    default=False,
    help="Do not print progress information",
)
@click.option(
    "--no-confirm",
    is_flag=True,
    default=False,
    help="Do not show cost and ask for confirmation before processing with OpenAI",
)
@click.option(
    "--version",
    is_flag=True,
    default=False,
    help="Print version and exit",
)
@click.option(
    "--list-models",
    is_flag=True,
    default=False,
    help="List preset models and exit",
)
@click.option(
    "--show-semantra-dir",
    is_flag=True,
    default=False,
    help="Print the directory semantra will use to store processed files and exit",
)
@click.option(
    "--semantra-dir",
    type=click.Path(exists=False),
    default=None,
    help="Directory to store semantra files in",
)
def main(
    filename,
    windows="128_0_16",
    no_server=False,
    port=8080,
    host="127.0.0.1",
    pool_size=None,
    pool_count=None,
    doc_token_pre=None,
    doc_token_post=None,
    query_token_pre=None,
    query_token_post=None,
    model="mpnet",
    transformer_model=None,
    encoding=DEFAULT_ENCODING,
    num_annoy_trees=100,
    num_results=10,
    annoy=True,
    svm=False,
    svm_c=1.0,
    explain_split_count=9,
    explain_split_divide=6,
    num_explain_highlights=2,
    force=False,
    silent=False,
    no_confirm=False,
    version=False,
    list_models=False,
    show_semantra_dir=False,
    semantra_dir=None,  # auto
):
    if version:
        print(VERSION)
        return

    if list_models:
        for model_name in models:
            print(f"- {model_name}")
        return

    if semantra_dir is None:
        semantra_dir = click.get_app_dir("Semantra")

    if show_semantra_dir:
        print(semantra_dir)
        return
    
    # Load environment from Semantra dir
    env_path = os.path.join(semantra_dir, ".env")
    load_dotenv(env_path)

    if filename is None or len(filename) == 0:
        raise click.UsageError("Must provide a filename to process/query")

    processed_windows = list(process_windows(windows))

    if transformer_model is not None:
        # Handle custom transformers model
        if pool_size is None:
            pool_size = TRANSFORMER_POOL_DEFAULT

        cost_per_token = None
        model = TransformerModel(
            transformer_model,
            doc_token_pre=doc_token_pre,
            doc_token_post=doc_token_post,
            query_token_pre=query_token_pre,
            query_token_post=query_token_post,
        )
    else:
        # Pull preset model
        model_config = models[model]
        cost_per_token = model_config["cost_per_token"]
        if pool_size is None:
            pool_size = model_config["pool_size"]
        if pool_count is None:
            pool_count = model_config.get("pool_count", None)
        model: BaseModel = model_config["get_model"]()

    # Check if model is compatible
    if svm and model.is_asymmetric():
        raise ValueError(
            "SVM is not compatible with asymmetric models. "
            "Please use a symmetric model or kNN."
        )

    documents = {}
    pbar = tqdm(filename, disable=silent)
    for fn in pbar:
        pbar.set_description(f"{os.path.basename(fn)}")
        documents[fn] = process(
            filename=fn,
            semantra_dir=semantra_dir,
            model=model,
            num_dimensions=model.get_num_dimensions(),
            use_annoy=annoy,
            num_annoy_trees=num_annoy_trees,
            windows=processed_windows,
            cost_per_token=cost_per_token,
            pool_count=pool_count,
            pool_size=pool_size,
            force=force,
            silent=silent,
            no_confirm=no_confirm,
            encoding=encoding,
        )

    cached_content = None
    cached_content_filename = None

    def get_content(filename):
        nonlocal cached_content, cached_content_filename
        # Check if we can pull from cache
        if filename == cached_content_filename:
            return cached_content
        # If not, grab content
        content = documents[filename].content
        # Cache the content
        cached_content_filename = filename
        cached_content = content
        # Return the now-cached content
        return content

    # Start a Flask server
    app = Flask(__name__)

    @app.route("/")
    def base():
        return send_from_directory(
            pkg_resources.resource_filename("semantra.semantra", "client_public"),
            "index.html",
        )

    # Path for all the static files (compiled JS/CSS, etc.)
    @app.route("/<path:path>")
    def home(path):
        return send_from_directory(
            pkg_resources.resource_filename("semantra.semantra", "client_public"),
            path,
        )

    @app.route("/api/files", methods=["GET"])
    def files():
        return jsonify(
            [
                {
                    "basename": doc.base_filename,
                    "filename": doc.filename,
                    "filetype": doc.content.filetype,
                }
                for doc in documents.values()
            ]
        )

    @app.route("/api/query", methods=["POST"])
    def query():
        queries = request.json["queries"]
        preferences = request.json["preferences"]
        if svm:
            return querysvm()
        if annoy:
            return queryann()

        # Get combined query and preference embedding
        embedding = model.embed_queries_and_preferences(queries, preferences, documents)

        results = []
        for doc in documents.values():
            embeddings = doc.embeddings

            # Get kNN with cosine similarity
            distances = np.dot(embeddings, embedding) / (
                np.linalg.norm(embeddings, axis=1) * np.linalg.norm(embedding)
            )
            sorted_ix = np.argsort(-distances)

            text_chunks = doc.text_chunks
            offsets = doc.offsets[0]
            sub_results = []
            for index in sorted_ix[:num_results]:
                distance = float(distances[index])
                offset = offsets[index]
                text = join_text_chunks(text_chunks[offset[0] : offset[1]])
                sub_results.append(
                    {
                        "text": text,
                        "distance": distance,
                        "offset": offset,
                        "index": int(index),
                        "filename": doc.filename,
                        "queries": queries,
                        "preferences": preferences,
                    }
                )
            results.append([doc.filename, sub_results])
        return jsonify(sort_results(results, True))

    @app.route("/api/querysvm", methods=["POST"])
    def querysvm():
        from sklearn import svm

        queries = request.json["queries"]
        preferences = request.json["preferences"]

        # Get combined query and preference embedding
        embedding = model.embed_queries_and_preferences(queries, preferences, documents)
        results = []
        for doc in documents.values():
            embeddings = doc.embeddings

            x = np.concatenate([embeddings, embedding[None, ...]])
            y = np.zeros(len(embeddings) + 1)
            y[-1] = 1

            # Train the svm
            clf = svm.LinearSVC(
                class_weight="balanced",
                verbose=False,
                max_iter=10000,
                tol=1e-6,
                C=svm_c,
            )
            clf.fit(x, y)

            # Infer similarities
            similarities = clf.decision_function(x)[: len(embeddings)]
            sorted_ix = np.argsort(-similarities)

            text_chunks = doc.text_chunks
            offsets = doc.offsets
            sub_results = []
            for index in sorted_ix[:num_results]:
                distance = similarities[index]
                offset = offsets[index]
                text = join_text_chunks(text_chunks[offset[0] : offset[1]])
                sub_results.append(
                    {
                        "text": text,
                        "distance": distance,
                        "offset": offset,
                        "index": int(index),
                        "filename": doc.filename,
                        "queries": queries,
                        "preferences": preferences,
                    }
                )
            results.append([doc.filename, sub_results])

        return jsonify(sort_results(results, True))

    @app.route("/api/queryann", methods=["POST"])
    def queryann():
        queries = request.json["queries"]
        preferences = request.json["preferences"]

        # Get combined query and preference embedding
        embedding = model.embed_queries_and_preferences(queries, preferences, documents)

        results = []
        for doc in documents.values():
            embedding_db = doc.embedding_db
            text_chunks = doc.text_chunks
            offsets = doc.offsets[0]
            sub_results = []
            for [index, distance] in zip(
                *embedding_db.get_nns_by_vector(embedding, num_results, -1, True)
            ):
                offset = offsets[index]
                text = join_text_chunks(text_chunks[offset[0] : offset[1]])
                sub_results.append(
                    {
                        "text": text,
                        # Convert distance from Euclidean distance of normalized vectors to cosine
                        "distance": 1 - distance**2.0 / 2.0,
                        "offset": offset,
                        "index": int(index),
                        "filename": doc.filename,
                        "queries": queries,
                        "preferences": preferences,
                    }
                )
            results.append([doc.filename, sub_results])
        return jsonify(sort_results(results, True))

    @app.route("/api/explain", methods=["POST"])
    def explain():
        filename = request.json["filename"]
        offset = request.json["offset"]
        tokens = documents[filename].text_chunks[offset[0] : offset[1]]
        queries = request.json["queries"]
        preferences = request.json["preferences"]
        embedding = model.embed_queries_and_preferences(queries, preferences, documents)

        # Find hot-spots within the result tokens
        def get_splits(divide_factor=2, num_splits=3, start=0, end=len(tokens)):
            window_length = math.ceil((end - start) / divide_factor)
            split_length = math.ceil((end - start) / num_splits)
            splits = []
            for i in range(num_splits):
                splits.append(
                    (
                        start + i * split_length,
                        min(end, start + i * split_length + window_length),
                    )
                )
            return splits

        def exclude_window(start, end):
            nonlocal tokens
            return join_text_chunks(tokens[:start] + tokens[end:])

        def get_highest_ranked_split(splits):
            nonlocal tokens, embedding
            split_queries = [exclude_window(start, end) for start, end in splits]
            split_windows = np.array(
                [
                    as_numpy(model.embed_document(split_query))
                    for split_query in split_queries
                ]
            )
            distances = split_windows.dot(embedding) / (
                np.linalg.norm(split_windows, axis=1) * np.linalg.norm(embedding)
            )
            # Return the splits in order of highest to lowest ranked
            return sorted(zip(splits, distances), key=lambda x: x[1], reverse=False)

        def as_tokens(splits):
            nonlocal tokens
            indices = sorted([split[0] for split in splits], key=lambda x: x[0])
            last_index = 0
            chunks = []

            def append(start, end, type):
                if start >= end:
                    return
                nonlocal chunks, tokens
                chunks.append(
                    {
                        "text": join_text_chunks(tokens[start:end]),
                        "type": type,
                    }
                )

            for index in indices:
                append(last_index, index[0], "normal")
                append(max(index[0], last_index), index[1], "highlight")
                last_index = index[1]

            append(last_index, len(tokens), "normal")
            return chunks

        splits = get_splits(
            divide_factor=explain_split_divide,
            num_splits=explain_split_count,
            start=0,
            end=len(tokens),
        )
        top_splits = get_highest_ranked_split(splits)[:num_explain_highlights]
        return jsonify(as_tokens(top_splits))

    @app.route("/api/getfile", methods=["GET"])
    def getfile():
        filename = request.args.get("filename")
        content = get_content(filename)
        filename = content.filename
        return send_file(filename)

    @app.route("/api/pdfpositions", methods=["GET"])
    def pdfpositions():
        filename = request.args.get("filename")
        content = get_content(filename)
        if content.filetype == "pdf":
            return jsonify(content.positions)
        else:
            return jsonify([])

    @app.route("/api/pdfpage", methods=["GET"])
    def pdfpage():
        filename = request.args.get("filename")
        content = get_content(filename)
        page = request.args.get("page")
        scale = request.args.get("scale")
        if content.filetype == "pdf":
            pil_image = content.get_page_image_pil(int(page), float(scale))
            img_byte_arr = io.BytesIO()
            pil_image.save(img_byte_arr, format="PNG")
            response = make_response(img_byte_arr.getvalue())
            response.headers.set("Content-Type", "image/png")
            return response

    @app.route("/api/pdfchars", methods=["GET"])
    def pdfchars():
        filename = request.args.get("filename")
        content = get_content(filename)
        if content.filetype != "pdf":
            return jsonify([])
        page = request.args.get("page")
        return jsonify(content.get_page_chars(int(page)))

    @app.route("/api/text", methods=["GET"])
    def text():
        filename = request.args.get("filename")
        return jsonify(documents[filename].text_chunks)

    if not no_server:
        try:
            app.run(host=host, port=port)
        except SystemExit as e:
            import sys
            sys.tracebacklimit=0
            if port == DEFAULT_PORT:
                raise Exception(
                    f'Try running again and adding `--port <port>` to the command to specify a different port.'
                ) from None
            else:
                raise Exception(f"Try specifying a different port with `--port <port>`.") from None


if __name__ == "__main__":
    main()

```

### `src/semantra/util.py`

```py
import struct
import hashlib
import os
import numpy as np

HASH_LENGTH = 24


def file_md5(filename):
    hash_md5 = hashlib.md5()
    with open(filename, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()[:HASH_LENGTH]


def join_text_chunks(chunks):
    return "".join(chunks)


# Filenames for generated files
def get_converted_pdf_txt_filename(md5):
    return f"{md5}.pdf.txt"


def get_pdf_positions_filename(md5):
    return f"{md5}.pdf.positions.json"


def get_tokens_filename(md5, config_hash):
    return f"{md5}.{config_hash}.tokens.json"


def get_embeddings_filename(md5, config_hash, size, offset, rewind):
    return f"{md5}.{config_hash}.{size}_{offset}_{rewind}.embeddings"


def get_annoy_filename(md5, config_hash, size, offset, rewind, num_trees):
    return f"{md5}.{config_hash}.{size}_{offset}_{rewind}.{num_trees}t.annoy"


def get_config_filename(md5, config_hash):
    return f"{md5}.{config_hash}.config.json"


def write_embedding(file, embedding, num_dimensions):
    # Write float-encoded embeddings
    for i in range(num_dimensions):
        file.write(struct.pack("f", embedding[i]))
    file.flush()


def read_embedding(chunk, num_dimensions):
    # Read float-encoded embeddings
    embedding = []
    for i in range(num_dimensions):
        embedding.append(struct.unpack("f", chunk[i * 4 : (i + 1) * 4])[0])
    return embedding


def write_annoy_db(filename, num_dimensions, embeddings, num_trees):
    # Import annoy here so that it's not required for the CLI
    from annoy import AnnoyIndex

    dbs = []
    db = AnnoyIndex(num_dimensions, "angular")
    for i, embedding in enumerate(embeddings):
        db.add_item(i, embedding)
    db.build(num_trees)
    db.save(filename)
    dbs.append(db)

    return dbs


def load_annoy_db(filename, num_dimensions):
    # Import annoy here so that it's not required for the CLI
    from annoy import AnnoyIndex

    db = AnnoyIndex(num_dimensions, "angular")
    db.load(filename)
    return db


def get_num_annoy_embeddings(annoy_filename, num_dimensions):
    return load_annoy_db(annoy_filename, num_dimensions).get_n_items()


def safe_remove(filename):
    try:
        os.remove(filename)
    except FileNotFoundError:
        pass


def get_num_embeddings(embeddings_filename, num_dimensions):
    # Get the file size
    with open(embeddings_filename, "rb") as f:
        f.seek(0, 2)
        file_size = f.tell()

    # Calculate the number of embeddings
    return file_size // (num_dimensions * 4)


def read_embeddings_file(embeddings_filename, num_dimensions, capacity):
    # Calculate the number of embeddings
    num_embeddings = min(
        get_num_embeddings(embeddings_filename, num_dimensions), capacity
    )

    # Change the file size to the expected size
    with open(embeddings_filename, "ab") as f:
        f.truncate(num_embeddings * num_dimensions * 4)

    if num_embeddings == 0:
        return np.zeros((capacity, num_dimensions), dtype="float32"), 0

    # Memory map the file
    read_embeddings = np.memmap(
        embeddings_filename,
        dtype="float32",
        mode="r",
        shape=(num_embeddings, num_dimensions),
    )

    # Create an array with shape (capacity, num_dimensions) filled with 0s
    embeddings = np.zeros((capacity, num_dimensions), dtype="float32")

    # Copy the original embeddings into the new array
    embeddings[:num_embeddings] = read_embeddings[:num_embeddings]

    return embeddings, num_embeddings


def get_offsets(doc_size, windows):
    num_tokens = 0

    offsets = []

    for size, offset, rewind in windows:
        sub_offsets = []
        x = 0
        if offset > 0:
            sub_offsets.append([0, offset])
            num_tokens += offset
            x = offset
        else:
            x = rewind

        while x < doc_size:
            x -= rewind
            sub_offsets.append([x, min(x + size, doc_size)])
            num_tokens += min(x + size, doc_size) - x
            x += size

        offsets.append(sub_offsets)

    return offsets, num_tokens


def sort_results(results, reverse):
    # Get average distance per result
    avg_distances = []
    for result in results:
        avg_distances.append(np.mean([item["distance"] for item in result[1]]))

    # Sort results by average distance
    return {
        "results": [x for _, x in sorted(zip(avg_distances, results), reverse=reverse)],
        "sort": "desc" if reverse else "asc",
    }

```
