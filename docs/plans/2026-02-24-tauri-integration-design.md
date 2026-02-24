# Tauri v2 Integration Design

## Goal

Wrap the existing Daggerheart reference React+Vite web app in a native macOS window using Tauri v2. Exploration phase — validate it works, with a path to native polish later.

## Phase 1 — Get it running (this session)

1. Install Rust via `rustup`
2. Install `@tauri-apps/cli` as devDependency
3. Run `tauri init` to scaffold `src-tauri/` directory
4. Make `base` in `vite.config.js` conditional — `'/'` for Tauri, `'/daggerheart-reference/'` for GitHub Pages
5. Add `tauri:dev` and `tauri:build` npm scripts
6. Verify app opens in a native macOS window

## Phase 2 — Native polish (future)

- Custom app icon (`.icns`)
- Native macOS menu bar
- Window title bar styling (transparent titlebar, traffic light positioning)
- `.app` bundle config

## What changes

- `vite.config.js` — conditional `base` path
- `package.json` — new scripts + `@tauri-apps/cli` devDependency

## What gets added

- `src-tauri/` — Rust project (Cargo.toml, src/main.rs, tauri.conf.json, icons)

## What stays the same

- All React components, hooks, utils, data, styles
- `npm run deploy` GitHub Pages flow
- localStorage persistence (works in Tauri's WebView)

## Native OS access path

Tauri v2 plugins are additive — install, configure, call from JS. No architectural changes needed. Key plugins available: file system, store (persistent KV), notifications, system tray, clipboard, SQL.
