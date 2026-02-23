# Component Library Extraction Design

**Date:** 2026-02-22
**Status:** Approved

## Goal

Decompose the monolithic `DaggerheartRef.jsx` (~1,772 lines) into a flat component library structured for future extraction into a standalone package. No docs tooling (Storybook etc.) for now.

## Decisions

- **Architecture:** Flat component directory — each component in its own folder
- **Styling:** CSS Modules (`.module.css`) for scoped styles + CSS custom properties (`--dhr-*`) for theming
- **Data:** Extract embedded data into `src/data/categories.js`
- **Packaging:** Lives inside the app repo now, structured for later extraction

## Component Inventory

| Component | Props | Responsibility |
|---|---|---|
| **ThemeToggle** | `theme`, `onToggle` | Moon/Sun icon button |
| **SearchInput** | `value`, `onChange`, `placeholder` | Styled search field |
| **Pill** | `label`, `color`, `active`, `onClick` | Category filter pill |
| **PillGroup** | `pills`, `groupLabel`, `labelClassName`, `activeFilters`, `onPillClick` | Group of pills with label |
| **Accordion** | `title`, `open`, `onToggle`, `children`, `accentColor` | Collapsible section with chevron |
| **QACard** | `question`, `answer`, `open`, `onToggle`, `accentColor` | Q&A item (wraps Accordion) |
| **CategoryGroup** | `category`, `openQ`, `onToggle`, `matchesSearch` | Category heading + QACards |
| **TwoColumnLayout** | `children`, `breakpoint` | Responsive single/two-column container |
| **Header** | `title`, `subtitle`, `rightSlot` | App header with optional right content |
| **Footer** | `children` | Footer with gradient fade |

## Custom Hooks

| Hook | Purpose |
|---|---|
| **useTheme** | Dark/light state, localStorage persistence, sets `data-theme` on `<html>` |
| **useResponsiveColumns** | Window resize listener, returns `isTwoColumn` at given breakpoint |

## Utilities

| Utility | Purpose |
|---|---|
| **distributeColumns** | Load-balance categories across two columns |
| **matchesSearch** | Filter Q&A items by search query |

## File Structure

```
src/
├── components/
│   ├── Accordion/
│   │   ├── Accordion.jsx
│   │   ├── Accordion.module.css
│   │   └── index.js
│   ├── CategoryGroup/
│   │   ├── CategoryGroup.jsx
│   │   ├── CategoryGroup.module.css
│   │   └── index.js
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   └── index.js
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   └── index.js
│   ├── Pill/
│   │   ├── Pill.jsx
│   │   ├── Pill.module.css
│   │   └── index.js
│   ├── PillGroup/
│   │   ├── PillGroup.jsx
│   │   ├── PillGroup.module.css
│   │   └── index.js
│   ├── QACard/
│   │   ├── QACard.jsx
│   │   ├── QACard.module.css
│   │   └── index.js
│   ├── SearchInput/
│   │   ├── SearchInput.jsx
│   │   ├── SearchInput.module.css
│   │   └── index.js
│   ├── ThemeToggle/
│   │   ├── ThemeToggle.jsx
│   │   ├── ThemeToggle.module.css
│   │   └── index.js
│   ├── TwoColumnLayout/
│   │   ├── TwoColumnLayout.jsx
│   │   ├── TwoColumnLayout.module.css
│   │   └── index.js
│   └── index.js              ← barrel exports
├── data/
│   └── categories.js         ← SRD data + RULES_MECHANICS/CARDS_HERITAGE groupings
├── hooks/
│   ├── useTheme.js
│   └── useResponsiveColumns.js
├── utils/
│   ├── distributeColumns.js
│   └── search.js
├── styles/
│   └── theme.css             ← --dhr-* variables, global resets, body backgrounds
├── DaggerheartRef.jsx        ← ~80-100 line orchestrator (state + composition)
├── index.css                 ← imports theme.css + tailwind
├── App.jsx
└── main.jsx
```

## Styling Strategy

- **theme.css**: All `:root` / `[data-theme="light"]` CSS custom properties, `body::before`/`::after` background effects, global resets
- **Component `.module.css` files**: Locally-scoped class names, reference `--dhr-*` variables for theming
- **Inline `style` props**: Per-category accent colors injected as CSS variable overrides (existing pattern preserved)
- **DaggerheartRef.css**: Removed — styles distributed to component modules and theme.css

## Page Component After Extraction

`DaggerheartRef.jsx` becomes a thin orchestrator owning state (`openQ`, `filter`, `search`) and composing components. All rendering logic delegated to the component tree.

## Future Extraction Path

To publish as a standalone package later:
1. Move `src/components/`, `src/hooks/`, `src/utils/`, `src/styles/` into a new package
2. Add a package.json with peer dependencies on `react` and `lucide-react`
3. Add a build step (e.g., tsup or Vite library mode)
4. The consuming app imports from the package instead of relative paths
