# PR Review Fixes Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Address all findings from the component library PR review — accessibility, component API, CSS quality, and cleanup.

**Architecture:** Fix accessibility regressions by swapping to semantic HTML and adding ARIA attributes. Simplify PillGroup's prop interface by computing active state in the parent. Extract hardcoded colors to CSS custom properties. Remove dead code and scaffolding artifacts.

**Tech Stack:** React 19, CSS Modules, Vite

---

## Task 1: Semantic HTML landmarks

**Files:**
- Modify: `src/components/Header/Header.jsx`
- Modify: `src/components/Footer/Footer.jsx`
- Modify: `src/components/SearchInput/SearchInput.jsx`
- Modify: `src/components/SearchInput/SearchInput.module.css`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Replace `<div>` with `<header>` in Header.jsx**

```jsx
// Header.jsx — full file
import styles from "./Header.module.css";

export function Header({ title, subtitle }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </header>
  );
}
```

**Step 2: Replace `<div>` with `<footer>` in Footer.jsx**

```jsx
// Footer.jsx — full file
import styles from "./Footer.module.css";

export function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  );
}
```

**Step 3: Replace wrapper `<div>` with `<search>` and use `type="search"` in SearchInput.jsx**

```jsx
// SearchInput.jsx — full file
import styles from "./SearchInput.module.css";

export function SearchInput({ value, onChange, placeholder }) {
  return (
    <search className={styles.wrapper}>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </search>
  );
}
```

**Step 4: Reset search input browser chrome in SearchInput.module.css**

Add at the end of SearchInput.module.css:

```css
.input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
```

This prevents the browser's built-in "x" clear button from appearing (the app has its own "Clear Filters" pill).

**Step 5: Replace root `<div>` with `<main>` in DaggerheartRef.jsx**

Change line 75 from:
```jsx
<div className={`${styles.root}${isTwoColumn ? ` ${styles.twoColumn}` : ""}`}>
```
to:
```jsx
<main className={`${styles.root}${isTwoColumn ? ` ${styles.twoColumn}` : ""}`}>
```

And the matching closing tag on line 146 from `</div>` to `</main>`.

**Step 6: Verify**

Run: `npm run build && npm run lint`
Expected: Both pass with no errors.

**Step 7: Commit**

```
fix(a11y): use semantic HTML landmarks (header, footer, main, search)
```

---

## Task 2: ARIA attributes on interactive components

**Files:**
- Modify: `src/components/QACard/QACard.jsx`
- Modify: `src/components/ThemeToggle/ThemeToggle.jsx`

**Step 1: Add `aria-expanded` to QACard button**

```jsx
// QACard.jsx — full file
import styles from "./QACard.module.css";

export function QACard({ question, answer, open, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={`${styles.question}${open ? ` ${styles.open}` : ""}`}
      >
        <span>{question}</span>
        <span className={`${styles.icon}${open ? ` ${styles.iconOpen}` : ""}`}>+</span>
      </button>
      {open && (
        <div className={styles.answer}>
          {answer}
        </div>
      )}
    </div>
  );
}
```

**Step 2: Add `aria-label` to ThemeToggle button**

```jsx
// ThemeToggle.jsx — full file
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={styles.toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Moon size={13} className={`${styles.iconMoon}${theme === "dark" ? ` ${styles.active}` : ""}`} />
      <Sun size={13} className={`${styles.iconSun}${theme === "light" ? ` ${styles.active}` : ""}`} />
    </button>
  );
}
```

**Step 3: Verify**

Run: `npm run build && npm run lint`
Expected: Both pass.

**Step 4: Commit**

```
fix(a11y): add aria-expanded to QACard, aria-label to ThemeToggle
```

---

## Task 3: Simplify PillGroup prop interface

This is the highest-impact architectural change. Compute `activeCategories` in the parent and pass it down instead of leaking `filter`, `search`, and `filtered`.

**Files:**
- Modify: `src/DaggerheartRef.jsx`
- Modify: `src/components/PillGroup/PillGroup.jsx`

**Step 1: Build category lookup Map and activeCategories Set in DaggerheartRef.jsx**

Add at module scope (after imports, before the component function):

```js
const categoryMap = new Map(data.map(d => [d.category, d]));
```

Inside the component function, after `orderedFiltered` is computed, add:

```js
const activeCategories = new Set([
  ...(filter ? [...filter] : []),
  ...(search ? filtered.map(f => f.category) : []),
]);
```

**Step 2: Update PillGroup usage in DaggerheartRef.jsx**

Replace both PillGroup instances (lines 95-114) with:

```jsx
<PillGroup
  categories={RULES_MECHANICS.map(name => categoryMap.get(name)).filter(Boolean)}
  groupLabel="Rules & Mechanics"
  variant="rules"
  activeCategories={activeCategories}
  onPillClick={handlePillClick}
  onGroupClick={() => handleGroupLabelClick(RULES_MECHANICS)}
/>
<PillGroup
  categories={CARDS_HERITAGE.map(name => categoryMap.get(name)).filter(Boolean)}
  groupLabel="Cards, Classes & Heritage"
  variant="cards"
  activeCategories={activeCategories}
  onPillClick={handlePillClick}
  onGroupClick={() => handleGroupLabelClick(CARDS_HERITAGE)}
/>
```

**Step 3: Rewrite PillGroup.jsx to use `activeCategories` prop**

```jsx
// PillGroup.jsx — full file
import { ChevronRight } from "lucide-react";
import { Pill } from "../Pill";
import { PILL_TINTS } from "../../data/categories";
import styles from "./PillGroup.module.css";

export function PillGroup({ categories, groupLabel, variant, activeCategories, onPillClick, onGroupClick }) {
  const isGroupActive = categories.every(c => activeCategories.has(c.category));

  const variantClass = variant === "rules" ? styles.rules : styles.cards;

  return (
    <>
      <button
        className={`${styles.groupLabel} ${variantClass}${isGroupActive ? ` ${styles.groupLabelActive}` : ""}`}
        onClick={onGroupClick}
      >
        {groupLabel}
        <ChevronRight size={12} className={styles.groupLabelIcon} />
        <ChevronRight size={12} className={`${styles.groupLabelIcon} ${styles.groupLabelIconSecond}${isGroupActive ? ` ${styles.groupLabelIconVisible}` : ""}`} />
      </button>
      {categories.map(c => {
        const label = c.category.replace(/^[^\w]*/, "").replace(/\s*\(\d+\)$/, "").trim();
        const isActive = activeCategories.has(c.category);
        const isRulesGroup = variant === "rules";
        const groupBorder = isRulesGroup
          ? "rgba(245, 158, 11, 0.3)"
          : "rgba(167, 139, 250, 0.3)";
        const tint = PILL_TINTS[c.category];

        let pillBorder = groupBorder;
        let pillBg = "transparent";
        if (isActive) {
          pillBorder = c.color + "77";
          pillBg = c.color + "33";
        } else if (tint) {
          pillBg = tint.bg;
        }

        return (
          <Pill
            key={c.category}
            label={label}
            active={isActive}
            onClick={() => onPillClick(c.category)}
            pillBorder={pillBorder}
            pillBg={pillBg}
          />
        );
      })}
    </>
  );
}
```

**Step 4: Verify**

Run: `npm run build && npm run lint`
Expected: Both pass.

Manually test: pills should highlight correctly when filtering and searching. Group labels should activate when all pills in the group are active.

**Step 5: Commit**

```
refactor: simplify PillGroup API — replace filter/search/filtered with activeCategories
```

---

## Task 4: Remove IIFE pattern in DaggerheartRef.jsx

**Files:**
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Move column computation before the return**

After the `activeCategories` computation, add:

```js
const [col1, col2] = isTwoColumn ? distributeColumns(orderedFiltered) : [orderedFiltered, []];
```

**Step 2: Replace IIFE in JSX**

Replace lines 117-128 (the `{isTwoColumn ? (() => {...})() : ...}` block) with:

```jsx
{isTwoColumn ? (
  <TwoColumnLayout columns={[
    col1.map(cat => <CategoryGroup key={cat.category} category={cat} openQ={openQ} onToggle={toggle} />),
    col2.map(cat => <CategoryGroup key={cat.category} category={cat} openQ={openQ} onToggle={toggle} />),
  ]} />
) : (
  orderedFiltered.map(cat => (
    <CategoryGroup key={cat.category} category={cat} openQ={openQ} onToggle={toggle} />
  ))
)}
```

**Step 3: Remove `renderCategories` function**

Delete the `renderCategories` function (lines 49-58) since it's now inlined.

**Step 4: Verify**

Run: `npm run build && npm run lint`
Expected: Both pass.

Test: two-column layout should render identically at >800px.

**Step 5: Commit**

```
refactor: remove IIFE and renderCategories helper in DaggerheartRef
```

---

## Task 5: Extract accent colors to CSS custom properties

**Files:**
- Modify: `src/styles/theme.css`
- Modify: `src/components/Header/Header.module.css`
- Modify: `src/components/ThemeToggle/ThemeToggle.module.css`
- Modify: `src/components/PillGroup/PillGroup.module.css`

**Step 1: Add accent variables to theme.css**

Add to the `:root` block in theme.css (after the Effects section):

```css
  /* Accents (fixed across themes) */
  --dhr-accent-amber: #f59e0b;
  --dhr-accent-purple: #a78bfa;
```

Add to the `[data-theme="light"]` block:

```css
  /* Accent overrides for light theme */
  --dhr-accent-amber-text: #8a5a00;
  --dhr-accent-purple-text: #7c3aed;
  --dhr-accent-amber-icon: #d97706;
  --dhr-accent-purple-icon: #7c3aed;
```

**Step 2: Update Header.module.css**

Replace:
```css
color: #f59e0b;
```
with:
```css
color: var(--dhr-accent-amber);
```

Replace:
```css
color: #a78bfa;
```
with:
```css
color: var(--dhr-accent-purple);
```

**Step 3: Update ThemeToggle.module.css**

Replace `.iconMoon` color `#a78bfa` with `var(--dhr-accent-purple)`.
Replace `.iconSun` color `#f59e0b` with `var(--dhr-accent-amber)`.
Replace light-theme `.iconMoon` color `#7c3aed` with `var(--dhr-accent-purple-icon)`.
Replace light-theme `.iconSun` color `#d97706` with `var(--dhr-accent-amber-icon)`.

**Step 4: Update PillGroup.module.css**

Replace `.rules` color `#f59e0b` with `var(--dhr-accent-amber)`.
Replace `.cards` color `#a78bfa` with `var(--dhr-accent-purple)`.
Replace light-theme `.rules` color `#8a5a00` with `var(--dhr-accent-amber-text)`.
Replace light-theme `.cards` color `#7c3aed` with `var(--dhr-accent-purple-text)`.

**Step 5: Verify**

Run: `npm run build && npm run lint`
Expected: Both pass.

Visually confirm: header, theme toggle, and pill group colors should be identical in both themes.

**Step 6: Commit**

```
refactor: extract accent colors to CSS custom properties in theme.css
```

---

## Task 6: Fix CSS transitions and color-mix

**Files:**
- Modify: `src/components/ThemeToggle/ThemeToggle.module.css`
- Modify: `src/components/PillGroup/PillGroup.module.css`
- Modify: `src/DaggerheartRef.module.css`
- Modify: `src/components/CategoryGroup/CategoryGroup.jsx`
- Modify: `src/components/PillGroup/PillGroup.jsx`

**Step 1: Replace `transition: all` with specific properties**

In `ThemeToggle.module.css` line 10, replace:
```css
transition: all 0.15s ease;
```
with:
```css
transition: border-color 0.15s ease, background-color 0.15s ease;
```

In `PillGroup.module.css` line 9, replace:
```css
transition: all 0.15s ease;
```
with:
```css
transition: border-color 0.15s ease, background-color 0.15s ease;
```

In `DaggerheartRef.module.css` line 47, replace:
```css
transition: all 0.15s ease;
```
with:
```css
transition: border-color 0.15s ease, background-color 0.15s ease, color 0.15s ease;
```

**Step 2: Replace hex-alpha concatenation with `color-mix` in CategoryGroup.jsx**

In `CategoryGroup.jsx` line 6, replace:
```jsx
style={{ "--cat-color": category.color, "--cat-color-40": category.color + "66" }}
```
with:
```jsx
style={{ "--cat-color": category.color, "--cat-color-40": `color-mix(in srgb, ${category.color} 40%, transparent)` }}
```

**Step 3: Replace hex-alpha concatenation with `color-mix` in PillGroup.jsx**

Replace the active pill color lines:
```jsx
pillBorder = c.color + "77";
pillBg = c.color + "33";
```
with:
```jsx
pillBorder = `color-mix(in srgb, ${c.color} 47%, transparent)`;
pillBg = `color-mix(in srgb, ${c.color} 20%, transparent)`;
```

**Step 4: Verify**

Run: `npm run build && npm run lint`
Expected: Both pass.

Visually confirm: pill and card colors should look the same as before.

**Step 5: Commit**

```
refactor: use specific CSS transitions and color-mix for alpha variants
```

---

## Task 7: Remove dead code and scaffolding

**Files:**
- Delete: all 14 `.gitkeep` files
- Delete: `src/components/Accordion/` directory
- Modify: `src/data/categories.js`
- Modify: `src/hooks/useTheme.js`

**Step 1: Delete all .gitkeep files and empty Accordion directory**

```bash
git rm src/components/Accordion/.gitkeep
git rm src/components/CategoryGroup/.gitkeep
git rm src/components/Footer/.gitkeep
git rm src/components/Header/.gitkeep
git rm src/components/Pill/.gitkeep
git rm src/components/PillGroup/.gitkeep
git rm src/components/QACard/.gitkeep
git rm src/components/SearchInput/.gitkeep
git rm src/components/ThemeToggle/.gitkeep
git rm src/components/TwoColumnLayout/.gitkeep
git rm src/data/.gitkeep
git rm src/hooks/.gitkeep
git rm src/utils/.gitkeep
git rm src/styles/.gitkeep
rmdir src/components/Accordion
```

**Step 2: Remove `TOTAL_QUESTIONS` from categories.js**

Delete line 1490:
```js
const TOTAL_QUESTIONS = data.reduce((sum, c) => sum + c.questions.length, 0);
```

Update the export line 1519 — remove `TOTAL_QUESTIONS`:
```js
export { data, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES, PILL_TINTS };
```

**Step 3: Remove render-phase side effect from useTheme.js**

Replace the `useState` initializer:
```js
const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem("dhr-theme") || "dark";
  document.documentElement.dataset.theme = saved;
  return saved;
});
```
with:
```js
const [theme, setTheme] = useState(
  () => localStorage.getItem("dhr-theme") || "dark"
);
```

The `useEffect` on lines 10-13 already handles setting `document.documentElement.dataset.theme`.

**Step 4: Verify**

Run: `npm run build && npm run lint`
Expected: Both pass.

**Step 5: Commit**

```
chore: remove .gitkeep files, dead TOTAL_QUESTIONS export, render-phase side effect
```

---

## Final Verification

After all tasks complete:

```bash
npm run build && npm run lint
```

Both should pass. Run `npm run dev` and manually verify:
- Header/footer render correctly
- Theme toggle switches themes
- Search filters work
- Pills highlight on click
- Two-column layout works at >800px
- Accordion expand/collapse works
