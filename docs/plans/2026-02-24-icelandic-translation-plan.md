# Icelandic Translation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Icelandic translation of all Q&A content and key UI strings, with a language toggle in the header.

**Architecture:** Split data into locale files (`categories-en.js`, `categories-is.js`), add a `useLocale` hook + `LanguageToggle` component, and wire locale-aware data through the existing orchestrator. Game terms stay English; stat names get Icelandic in parentheses in card body text only.

**Tech Stack:** React 19, CSS Modules, localStorage

---

### Task 1: Create useLocale hook

**Files:**
- Create: `src/hooks/useLocale.js`

**Step 1: Create the hook**

Mirror the `useTheme` pattern in `src/hooks/useTheme.js`:

```js
import { useState, useEffect } from "react";

export function useLocale() {
  const [locale, setLocale] = useState(
    () => localStorage.getItem("dhr-locale") || "en"
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("dhr-locale", locale);
  }, [locale]);

  const toggleLocale = () => setLocale(l => l === "en" ? "is" : "en");

  return { locale, toggleLocale };
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Clean build (hook is created but not yet imported anywhere).

**Step 3: Commit**

```bash
git add src/hooks/useLocale.js
git commit -m "feat: add useLocale hook for i18n toggle"
```

---

### Task 2: Create LanguageToggle component

**Files:**
- Create: `src/components/LanguageToggle/LanguageToggle.jsx`
- Create: `src/components/LanguageToggle/LanguageToggle.module.css`
- Create: `src/components/LanguageToggle/index.js`
- Modify: `src/components/index.js`

**Step 1: Create the component**

`src/components/LanguageToggle/LanguageToggle.jsx`:

```jsx
import styles from "./LanguageToggle.module.css";

export function LanguageToggle({ locale, onToggle }) {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Switch to ${locale === "en" ? "Icelandic" : "English"}`}
    >
      <span className={locale === "en" ? styles.active : ""}>EN</span>
      <span className={styles.separator}>/</span>
      <span className={locale === "is" ? styles.active : ""}>IS</span>
    </button>
  );
}
```

**Step 2: Create the CSS module**

`src/components/LanguageToggle/LanguageToggle.module.css`:

Style it pill-shaped to match ThemeToggle. Use the same accent colors. The active language label gets full opacity, the inactive one is dimmed.

```css
.toggle {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--dhr-border);
  background: var(--dhr-surface-raised);
  color: var(--dhr-text-muted);
  font-family: var(--dhr-font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: border-color 0.15s;
}

.toggle:hover {
  border-color: var(--dhr-text-muted);
}

.active {
  color: var(--dhr-accent-amber);
}

.separator {
  opacity: 0.3;
}
```

**Step 3: Create barrel export**

`src/components/LanguageToggle/index.js`:

```js
export { LanguageToggle } from "./LanguageToggle";
```

**Step 4: Add to components barrel**

Add `LanguageToggle` to the export list in `src/components/index.js`.

**Step 5: Verify build**

Run: `npm run build`
Expected: Clean build.

**Step 6: Commit**

```bash
git add src/components/LanguageToggle/ src/components/index.js
git commit -m "feat: add LanguageToggle component"
```

---

### Task 3: Create UI strings module

**Files:**
- Create: `src/data/ui-strings.js`

**Step 1: Create the strings file**

```js
const strings = {
  en: {
    searchPlaceholder: "Search rules, classes, ancestries...",
    clearFilters: "Clear Filters",
    allTopicsVisible: "All Topics Visible",
    rulesGroup: "Rules & Mechanics",
    cardsGroup: "Cards, Classes & Heritage",
    noResults: (query) => `No results for "${query}"`,
  },
  is: {
    searchPlaceholder: "Leita í reglum, stéttum, ættum...",
    clearFilters: "Hreinsa síur",
    allTopicsVisible: "Öll efni sýnileg",
    rulesGroup: "Reglur og vélbúnaður",
    cardsGroup: "Spil, stéttir og arfleifð",
    noResults: (query) => `Engar niðurstöður fyrir „${query}"`,
  },
};

export function getStrings(locale) {
  return strings[locale] || strings.en;
}
```

**Step 2: Verify build**

Run: `npm run build`

**Step 3: Commit**

```bash
git add src/data/ui-strings.js
git commit -m "feat: add UI strings for EN/IS locales"
```

---

### Task 4: Rename categories.js to categories-en.js

**Files:**
- Rename: `src/data/categories.js` → `src/data/categories-en.js`
- Create: `src/data/index.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Rename the file**

```bash
git mv src/data/categories.js src/data/categories-en.js
```

**Step 2: Create data index module**

`src/data/index.js`:

```js
export { data as dataEn, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES } from "./categories-en";

export function getCategories(locale) {
  if (locale === "is") {
    // Icelandic data will be added in Task 5
    // For now, fall back to English
    return import("./categories-en").then(m => m.data);
  }
  return import("./categories-en").then(m => m.data);
}
```

Wait — dynamic imports add async complexity. Since both locale files will be small enough to bundle, use synchronous imports instead:

```js
import { data as dataEn, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES } from "./categories-en";

const localeData = { en: dataEn };

export function getCategories(locale) {
  return localeData[locale] || localeData.en;
}

export { RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES };
```

**Step 3: Update DaggerheartRef.jsx import**

Change:
```js
import { data, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES } from "./data/categories";
```
To:
```js
import { getCategories, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES } from "./data";
```

And change line 10:
```js
const categoryMap = new Map(data.map(d => [d.category, d]));
```

This needs to become reactive to locale. Move it inside the component and derive from locale. See Task 6 for the full wiring.

For now, to keep the build working after rename:
```js
import { getCategories, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES } from "./data";
```
And at the top of the component:
```js
const data = getCategories("en");
const categoryMap = new Map(data.map(d => [d.category, d]));
```

**Step 4: Verify build + lint**

Run: `npm run build && npm run lint`
Expected: Clean.

**Step 5: Commit**

```bash
git add src/data/categories-en.js src/data/index.js src/DaggerheartRef.jsx
git commit -m "refactor: rename categories.js to categories-en.js with data index"
```

---

### Task 5: Create Icelandic data file

**Files:**
- Create: `src/data/categories-is.js`
- Modify: `src/data/index.js`

**Step 1: Create categories-is.js**

This is the large translation task. Create `src/data/categories-is.js` with the same structure as `categories-en.js`:
- Same `color` values
- Same emoji prefixes on category names
- Translated category names, questions (`q`), and answers (`a`)
- Game terms (class names, domain names, dice notation like "d6", "d8") stay English
- Stat names in answer text get Icelandic in parentheses: "Evasion (Undanfæri)", "HP (Heilsustig)", etc.
- Stat names in question headers stay English-only
- Same `RULES_MECHANICS`, `CARDS_HERITAGE`, `ALL_CATEGORIES` arrays but with translated category names

Export the same shape: `{ data, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES }`.

**Step 2: Register in data index**

Update `src/data/index.js`:

```js
import { data as dataEn, RULES_MECHANICS as RULES_EN, CARDS_HERITAGE as CARDS_EN, ALL_CATEGORIES as ALL_EN } from "./categories-en";
import { data as dataIs, RULES_MECHANICS as RULES_IS, CARDS_HERITAGE as CARDS_IS, ALL_CATEGORIES as ALL_IS } from "./categories-is";

const localeData = { en: dataEn, is: dataIs };
const localeRules = { en: RULES_EN, is: RULES_IS };
const localeCards = { en: CARDS_EN, is: CARDS_IS };
const localeAll = { en: ALL_EN, is: ALL_IS };

export function getCategories(locale) {
  return localeData[locale] || localeData.en;
}

export function getRulesMechanics(locale) {
  return localeRules[locale] || localeRules.en;
}

export function getCardsHeritage(locale) {
  return localeCards[locale] || localeCards.en;
}

export function getAllCategories(locale) {
  return localeAll[locale] || localeAll.en;
}
```

**Step 3: Verify build**

Run: `npm run build`

**Step 4: Commit**

```bash
git add src/data/categories-is.js src/data/index.js
git commit -m "feat: add Icelandic translation of all SRD content"
```

---

### Task 6: Wire locale through DaggerheartRef

**Files:**
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Import new modules and hook**

Update imports:

```js
import { useState, useMemo } from "react";
import { ThemeToggle, SearchInput, PillGroup, CategoryGroup, TwoColumnLayout, Header, Footer, LanguageToggle } from "./components";
import styles from "./DaggerheartRef.module.css";
import { getCategories, getRulesMechanics, getCardsHeritage, getAllCategories } from "./data";
import { getStrings } from "./data/ui-strings";
import { distributeColumns } from "./utils/distributeColumns";
import { matchesSearch } from "./utils/search";
import { useTheme } from "./hooks/useTheme";
import { useLocale } from "./hooks/useLocale";
import { useResponsiveColumns } from "./hooks/useResponsiveColumns";
```

**Step 2: Add locale state and derived data**

Inside the component, after hooks:

```js
const { locale, toggleLocale } = useLocale();

const data = useMemo(() => getCategories(locale), [locale]);
const RULES_MECHANICS = useMemo(() => getRulesMechanics(locale), [locale]);
const CARDS_HERITAGE = useMemo(() => getCardsHeritage(locale), [locale]);
const ALL_CATEGORIES = useMemo(() => getAllCategories(locale), [locale]);
const strings = useMemo(() => getStrings(locale), [locale]);
const categoryMap = useMemo(() => new Map(data.map(d => [d.category, d])), [data]);
```

Remove the module-scope `categoryMap` line.

**Step 3: Update JSX to use locale-aware strings**

Replace hardcoded strings in the JSX:

- Search placeholder: `placeholder={strings.searchPlaceholder}`
- Clear pill text: `{hasActiveFilter ? strings.clearFilters : strings.allTopicsVisible}`
- Group labels: `groupLabel={strings.rulesGroup}` and `groupLabel={strings.cardsGroup}`
- No results: `{strings.noResults(search)}`

**Step 4: Add LanguageToggle to the action pills row**

In the `actionPills` div, add the LanguageToggle next to ThemeToggle:

```jsx
<div className={styles.actionPills}>
  <button
    className={`${styles.clearPill}${hasActiveFilter ? ` ${styles.clearPillActive}` : ""}`}
    onClick={handleClearFilters}
  >
    {hasActiveFilter ? strings.clearFilters : strings.allTopicsVisible}
  </button>
  <LanguageToggle locale={locale} onToggle={toggleLocale} />
  {themeToggle}
</div>
```

**Step 5: Clear filters on locale change**

When locale changes, the category names change, so existing filters become stale. Add an effect or reset filter/search when locale changes. Simplest approach — reset in toggleLocale wrapper:

```js
function handleLocaleToggle() {
  toggleLocale();
  setFilter(null);
  setSearch("");
  setOpenQs(new Set());
}
```

Use `handleLocaleToggle` instead of `toggleLocale` in the LanguageToggle `onToggle` prop.

**Step 6: Verify build + lint**

Run: `npm run build && npm run lint`

**Step 7: Commit**

```bash
git add src/DaggerheartRef.jsx
git commit -m "feat: wire locale toggle through orchestrator"
```

---

### Task 7: Visual verification

**Step 1: Run dev server**

Run: `npm run dev`

**Step 2: Verify in browser**

- Toggle EN → IS: all content switches to Icelandic
- Toggle IS → EN: content returns to English
- Filters reset on locale switch
- Search works in both languages
- Theme toggle still works
- Pill labels update to Icelandic category names
- Refresh page: locale persists via localStorage
- Two-column layout still works

**Step 3: Verify build**

Run: `npm run build && npm run lint`

**Step 4: Final commit if any fixes needed**
