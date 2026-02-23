# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint
- `npm run deploy` — build + deploy to GitHub Pages via `gh-pages -d dist`

## Architecture

Single-page Daggerheart TTRPG quick reference app. React 19 + Vite + Tailwind CSS v4.

**Key files:**
- `src/DaggerheartRef.jsx` — the entire app: all SRD data (inline as a large `data` array), search/filter logic, and rendering. ~1600 lines.
- `src/index.css` — global styles: dark background with SVG noise grain texture via `::before`/`::after` pseudo-elements.
- `vite.config.js` — sets `base: '/daggerheart-reference/'` for GitHub Pages subdirectory hosting.

**How it works:** `DaggerheartRef` is a single component that renders categorized Q&A entries. Categories are filterable via pills and searchable. "Domain Cards" categories are sorted last in the pill bar with a subtler visual style. All styling is inline (no CSS modules/classes) except the body background in `index.css`.

## Deployment

GitHub Pages from the `gh-pages` branch. `npm run deploy` handles build + publish. Live at `https://olioskar.github.io/daggerheart-reference/`.
