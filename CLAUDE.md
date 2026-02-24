# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint
- `npm run preview` — preview production build locally
- `npm run deploy` — build + deploy to GitHub Pages via `gh-pages -d dist`

## Architecture

Single-page Daggerheart TTRPG quick reference app. React 19 + Vite.

**Structure:**
- `src/DaggerheartRef.jsx` — orchestrator (~145 lines): wires data, hooks, and components together
- `src/data/categories.js` — all SRD data + category constants
- `src/components/` — 9 components: Header, Footer, SearchInput, ThemeToggle, Pill, PillGroup, Card, CategoryGroup, TwoColumnLayout
- `src/hooks/` — useTheme (dark/light toggle), useResponsiveColumns (800px breakpoint)
- `src/utils/` — distributeColumns, matchesSearch
- `src/styles/theme.css` — CSS custom properties (surfaces, borders, text tiers, accents, fonts)
- `src/index.css` — global styles: dark background with SVG noise grain texture
- `vite.config.js` — sets `base: '/daggerheart-reference/'` for GitHub Pages

**How it works:** DaggerheartRef orchestrates categorized Q&A entries. Categories are filterable via pills and searchable. "Domain Cards" categories sort last with subtler styling. Module-scope `categoryMap` (Map) provides O(1) category lookups.

**Styling:** CSS Modules per component (`.module.css`). Theme vars as `:root` custom properties in theme.css. Category colors applied via inline `--cat-color` CSS vars. Alpha variants use `color-mix()` — no hex string concatenation.

## Deployment

GitHub Pages from the `gh-pages` branch. `npm run deploy` handles build + publish. Live at `https://olioskar.github.io/daggerheart-reference/`.
