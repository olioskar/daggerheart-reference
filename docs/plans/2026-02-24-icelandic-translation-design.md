# Icelandic Translation Design

## Goal
Add Icelandic translation of all content with a language toggle in the header.

## Data Architecture
- Split `src/data/categories.js` into `categories-en.js` and `categories-is.js`
- Both export same structure: `[{ category, color, questions: [{ q, a }] }]`
- Colors identical across locales — only `category`, `q`, `a` strings differ
- New `src/data/index.js` re-exports both + `getCategories(locale)` helper

## UI Strings
- New `src/data/ui-strings.js` with keyed translations for:
  - Search placeholder
  - Pill group labels ("Rules & Mechanics", "Cards & Heritage")
  - Clear filter pill text ("All Topics Visible" / "Clear Filters")

## Language Toggle
- New `LanguageToggle` component next to ThemeToggle in header
- Two-state: EN / IS, pill-shaped to match ThemeToggle style
- Locale in `localStorage` key `dhr-locale`, defaults to `en`
- New `useLocale` hook (mirrors `useTheme` pattern)

## Translation Rules
- Game mechanic terms stay English: class names, domain names, dice notation
- Stat names in card body text get Icelandic in parentheses, e.g. "Evasion (Undanfæri)"
- Stat names in headers and pills stay English-only
- Footer stays English (DPCGL attribution requirement)
- Category names in pills translate (derived from data)

## Component Changes
- `DaggerheartRef.jsx` — reads locale, passes localized data + strings
- `Header` — renders LanguageToggle
- `SearchInput` — already accepts `placeholder` prop, no change
- `PillGroup` — group labels from parent, no change

## What Stays the Same
- All component structure, styling, CSS Modules, theme system
- Category colors, layout, accordion behavior
- Footer English attribution

## Translation Method
- AI-generated Icelandic translations, user reviews and corrects
