# Component Library Extraction — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Decompose the monolithic DaggerheartRef.jsx into a flat component library with CSS Modules + CSS custom properties for theming.

**Architecture:** Flat `src/components/` directory, each component self-contained with `.jsx`, `.module.css`, and `index.js`. Data extracted to `src/data/`, hooks to `src/hooks/`, utilities to `src/utils/`, global theme to `src/styles/`.

**Tech Stack:** React 19, Vite 7, CSS Modules, CSS custom properties (`--dhr-*`)

**Working directory:** `/Users/olafur/Development/daggerheartSRDreference/daggerheart-reference`

**Verification command:** `npm run build` (must succeed with zero errors after every task)

---

## Task 1: Create branch and scaffold directory structure

**Files:**
- Create: `src/components/`, `src/data/`, `src/hooks/`, `src/utils/`, `src/styles/`

**Step 1: Create feature branch**
```bash
git checkout -b feat/component-library
```

**Step 2: Create directories**
```bash
mkdir -p src/components/{Accordion,CategoryGroup,Footer,Header,Pill,PillGroup,QACard,SearchInput,ThemeToggle,TwoColumnLayout}
mkdir -p src/data src/hooks src/utils src/styles
```

**Step 3: Commit**
```bash
git add -A && git commit -m "chore: scaffold component library directory structure"
```

---

## Task 2: Extract theme and global styles

Move CSS custom properties and body styles from `src/index.css` into `src/styles/theme.css`, then import it from `index.css`.

**Files:**
- Create: `src/styles/theme.css`
- Modify: `src/index.css`

**Step 1: Create `src/styles/theme.css`**

Copy the entire contents of `src/index.css` except the `@import "tailwindcss"` line into `src/styles/theme.css`. This includes:
- `:root { ... }` block (all `--dhr-*` variables)
- `[data-theme="light"] { ... }` block
- `body { ... }` rule
- `body::before { ... }` rule
- `body::after { ... }` rule

**Step 2: Simplify `src/index.css`**

Replace contents with:
```css
@import "tailwindcss";
@import "./styles/theme.css";
```

**Step 3: Verify**
```bash
npm run build
```

**Step 4: Commit**
```bash
git add src/styles/theme.css src/index.css && git commit -m "refactor: extract theme variables to src/styles/theme.css"
```

---

## Task 3: Extract data layer

Move the `data` array, `RULES_MECHANICS`, `CARDS_HERITAGE`, `ALL_CATEGORIES`, `TOTAL_QUESTIONS`, and `PILL_TINTS` from `DaggerheartRef.jsx` into `src/data/categories.js`.

**Files:**
- Create: `src/data/categories.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/data/categories.js`**

Cut lines 5–1521 from `DaggerheartRef.jsx` (the `data` array through `PILL_TINTS`) and paste into `src/data/categories.js`. Add named exports:

```js
// at top of file — no imports needed
const data = [ ... ];  // the full data array

const RULES_MECHANICS = [ ... ];
const CARDS_HERITAGE = [ ... ];
const ALL_CATEGORIES = [...RULES_MECHANICS, ...CARDS_HERITAGE];
const TOTAL_QUESTIONS = data.reduce((sum, c) => sum + c.questions.length, 0);
const PILL_TINTS = { ... };

export { data, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES, TOTAL_QUESTIONS, PILL_TINTS };
```

**Step 2: Update `DaggerheartRef.jsx`**

Add import at top:
```js
import { data, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES, PILL_TINTS } from "./data/categories";
```

Remove the cut lines. The file should now start with imports, then `distributeColumns`, then the component.

**Step 3: Verify**
```bash
npm run build
```

**Step 4: Commit**
```bash
git add src/data/categories.js src/DaggerheartRef.jsx && git commit -m "refactor: extract SRD data to src/data/categories.js"
```

---

## Task 4: Extract utilities

Move `distributeColumns` and `matchesSearch` into utility files.

**Files:**
- Create: `src/utils/distributeColumns.js`
- Create: `src/utils/search.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/utils/distributeColumns.js`**

```js
export function distributeColumns(categories) {
  if (categories.length === 0) return [[], []];
  const col1 = [categories[0]];
  const col2 = categories.length > 1 ? [categories[1]] : [];
  let count1 = col1[0].questions.length;
  let count2 = col2.length > 0 ? col2[0].questions.length : 0;
  for (let i = 2; i < categories.length; i++) {
    if (count1 <= count2) {
      col1.push(categories[i]);
      count1 += categories[i].questions.length;
    } else {
      col2.push(categories[i]);
      count2 += categories[i].questions.length;
    }
  }
  return [col1, col2];
}
```

**Step 2: Create `src/utils/search.js`**

```js
export function matchesSearch(item, searchLower) {
  if (!searchLower) return true;
  return item.q.toLowerCase().includes(searchLower) ||
    item.a.toLowerCase().includes(searchLower);
}
```

**Step 3: Update `DaggerheartRef.jsx`**

Add imports:
```js
import { distributeColumns } from "./utils/distributeColumns";
import { matchesSearch } from "./utils/search";
```

Remove the `distributeColumns` function definition. Update the inline `matchesSearch` usage — the component currently defines it as a closure using `searchLower`. Change the `matchesSearch` call sites to pass `searchLower` as the second argument:

```js
const searchLower = search.toLowerCase();

const filtered = data
  .filter(c => filter === null || filter.has(c.category))
  .map(c => {
    if (search && c.category.toLowerCase().includes(searchLower)) return c;
    return { ...c, questions: c.questions.filter(item => matchesSearch(item, searchLower)) };
  })
  .filter(c => c.questions.length > 0);
```

Remove the old `matchesSearch` function definition from the component.

**Step 4: Verify**
```bash
npm run build
```

**Step 5: Commit**
```bash
git add src/utils/ src/DaggerheartRef.jsx && git commit -m "refactor: extract distributeColumns and matchesSearch to src/utils/"
```

---

## Task 5: Extract hooks (useTheme, useResponsiveColumns)

**Files:**
- Create: `src/hooks/useTheme.js`
- Create: `src/hooks/useResponsiveColumns.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/hooks/useTheme.js`**

```js
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("dhr-theme") || "dark";
    document.documentElement.dataset.theme = saved;
    return saved;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("dhr-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  return { theme, toggleTheme };
}
```

**Step 2: Create `src/hooks/useResponsiveColumns.js`**

```js
import { useState, useEffect } from "react";

export function useResponsiveColumns(breakpoint = 800) {
  const [isTwoColumn, setIsTwoColumn] = useState(
    () => window.matchMedia(`(min-width: ${breakpoint}px)`).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handler = (e) => setIsTwoColumn(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return isTwoColumn;
}
```

**Step 3: Update `DaggerheartRef.jsx`**

Replace the theme and responsive column state/effects with:
```js
import { useTheme } from "./hooks/useTheme";
import { useResponsiveColumns } from "./hooks/useResponsiveColumns";

// Inside the component:
const { theme, toggleTheme } = useTheme();
const isTwoColumn = useResponsiveColumns(800);
```

Remove the `useState`/`useEffect` code for theme and responsive columns from the component. Keep the `useState` import for `openQ`, `filter`, and `search`.

**Step 4: Verify**
```bash
npm run build
```

**Step 5: Commit**
```bash
git add src/hooks/ src/DaggerheartRef.jsx && git commit -m "refactor: extract useTheme and useResponsiveColumns hooks"
```

---

## Task 6: Extract ThemeToggle component

**Files:**
- Create: `src/components/ThemeToggle/ThemeToggle.jsx`
- Create: `src/components/ThemeToggle/ThemeToggle.module.css`
- Create: `src/components/ThemeToggle/index.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/components/ThemeToggle/ThemeToggle.module.css`**

Move the `.dhr-theme-toggle`, `.dhr-theme-icon-*` rules from `DaggerheartRef.css` into this module. Rename class selectors to drop the `dhr-` prefix (modules scope automatically):

```css
.toggle {
  padding: 4px 8px;
  border-radius: 20px;
  border: 1px solid var(--dhr-border-strong);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  transition: all 0.15s ease;
}

:global([data-theme="light"]) .toggle {
  background: rgba(0, 0, 0, 0.05);
}

.iconMoon,
.iconSun {
  transition: opacity 0.15s ease;
}

.iconMoon {
  color: #a78bfa;
  opacity: 0.3;
}

.iconSun {
  color: #f59e0b;
  opacity: 0.3;
}

.iconMoon.active { opacity: 0.9; }
.iconSun.active { opacity: 0.9; }

:global([data-theme="light"]) .iconMoon {
  color: #7c3aed;
  opacity: 0.25;
}

:global([data-theme="light"]) .iconSun {
  color: #d97706;
}

:global([data-theme="light"]) .iconSun.active {
  opacity: 0.9;
}
```

**Step 2: Create `src/components/ThemeToggle/ThemeToggle.jsx`**

```jsx
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle} className={styles.toggle}>
      <Moon size={13} className={`${styles.iconMoon}${theme === "dark" ? ` ${styles.active}` : ""}`} />
      <Sun size={13} className={`${styles.iconSun}${theme === "light" ? ` ${styles.active}` : ""}`} />
    </button>
  );
}
```

**Step 3: Create `src/components/ThemeToggle/index.js`**
```js
export { ThemeToggle } from "./ThemeToggle";
```

**Step 4: Update `DaggerheartRef.jsx`**

Import and use:
```jsx
import { ThemeToggle } from "./components/ThemeToggle";
```

Replace the inline `themeToggle` variable with:
```jsx
const themeToggle = <ThemeToggle theme={theme} onToggle={toggleTheme} />;
```

Remove `Moon`, `Sun` from the lucide-react import in `DaggerheartRef.jsx`.

**Step 5: Verify**
```bash
npm run build
```

**Step 6: Commit**
```bash
git add src/components/ThemeToggle/ src/DaggerheartRef.jsx && git commit -m "refactor: extract ThemeToggle component"
```

---

## Task 7: Extract SearchInput component

**Files:**
- Create: `src/components/SearchInput/SearchInput.jsx`
- Create: `src/components/SearchInput/SearchInput.module.css`
- Create: `src/components/SearchInput/index.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/components/SearchInput/SearchInput.module.css`**

```css
.wrapper {
  max-width: 540px;
  margin: 0 auto 12px;
}

.input {
  width: 100%;
  padding: 9px 14px;
  background: var(--dhr-surface-raised);
  border: 1px solid var(--dhr-border-strong);
  border-radius: 8px;
  color: var(--dhr-text-bright);
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}
```

**Step 2: Create `src/components/SearchInput/SearchInput.jsx`**

```jsx
import styles from "./SearchInput.module.css";

export function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}
```

**Step 3: Create `src/components/SearchInput/index.js`**
```js
export { SearchInput } from "./SearchInput";
```

**Step 4: Update `DaggerheartRef.jsx`**

Import and replace the search input JSX:
```jsx
import { SearchInput } from "./components/SearchInput";

// In the return:
<SearchInput
  value={search}
  onChange={e => { setSearch(e.target.value); setFilter(null); }}
  placeholder="Search rules, classes, ancestries..."
/>
```

**Step 5: Verify & Commit**
```bash
npm run build && git add src/components/SearchInput/ src/DaggerheartRef.jsx && git commit -m "refactor: extract SearchInput component"
```

---

## Task 8: Extract Pill component

**Files:**
- Create: `src/components/Pill/Pill.jsx`
- Create: `src/components/Pill/Pill.module.css`
- Create: `src/components/Pill/index.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/components/Pill/Pill.module.css`**

```css
.pill {
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid var(--pill-border, var(--dhr-border-strong));
  background: var(--pill-bg, transparent);
  color: var(--dhr-text-muted);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

.active {
  color: var(--dhr-text-bright);
}
```

**Step 2: Create `src/components/Pill/Pill.jsx`**

```jsx
import styles from "./Pill.module.css";

export function Pill({ label, active, onClick, pillBorder, pillBg }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.pill}${active ? ` ${styles.active}` : ""}`}
      style={{ "--pill-border": pillBorder, "--pill-bg": pillBg }}
    >
      {label}
    </button>
  );
}
```

**Step 3: Create `src/components/Pill/index.js`**
```js
export { Pill } from "./Pill";
```

**Step 4: Update `DaggerheartRef.jsx`**

Import `Pill` and update `renderPill` to use it:
```jsx
import { Pill } from "./components/Pill";

// In renderPill:
return (
  <Pill
    key={c.category}
    label={label}
    active={isActive}
    onClick={() => handlePillClick(c.category)}
    pillBorder={pillBorder}
    pillBg={pillBg}
  />
);
```

**Step 5: Verify & Commit**
```bash
npm run build && git add src/components/Pill/ src/DaggerheartRef.jsx && git commit -m "refactor: extract Pill component"
```

---

## Task 9: Extract PillGroup component

**Files:**
- Create: `src/components/PillGroup/PillGroup.jsx`
- Create: `src/components/PillGroup/PillGroup.module.css`
- Create: `src/components/PillGroup/index.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/components/PillGroup/PillGroup.module.css`**

Move the `.dhr-pill-group-label*`, `.dhr-pill-groups-wrapper`, `.dhr-action-pills-row`, and `.dhr-clear-pill*` rules from `DaggerheartRef.css`:

```css
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
}

.groupLabel {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.groupLabelIcon {
  flex-shrink: 0;
  height: 12px;
  width: 12px;
}

.groupLabelIconSecond {
  width: 0;
  opacity: 0;
  margin-left: -2px;
  overflow: hidden;
  transition: width 0.2s ease, opacity 0.2s ease;
}

.groupLabelIconVisible {
  width: 12px;
  opacity: 1;
  margin-left: -6px;
}

.rules {
  color: #f59e0b;
  border-color: rgba(245, 158, 11, 0.4);
  background: rgba(245, 158, 11, 0.15);
}

.rules.groupLabelActive {
  border-color: rgba(245, 158, 11, 0.7);
  background: rgba(245, 158, 11, 0.3);
}

.cards {
  color: #a78bfa;
  border-color: rgba(167, 139, 250, 0.4);
  background: rgba(167, 139, 250, 0.08);
  margin-left: 8px;
}

.cards.groupLabelActive {
  border-color: rgba(167, 139, 250, 0.7);
  background: rgba(167, 139, 250, 0.25);
}

:global([data-theme="light"]) .rules {
  color: #8a5a00;
}

:global([data-theme="light"]) .cards {
  color: #7c3aed;
}
```

**Step 2: Create `src/components/PillGroup/PillGroup.jsx`**

```jsx
import { ChevronRight } from "lucide-react";
import { Pill } from "../Pill";
import { PILL_TINTS } from "../../data/categories";
import styles from "./PillGroup.module.css";

export function PillGroup({ categories, groupLabel, variant, filter, search, filtered, onPillClick, onGroupClick }) {
  const isGroupActive = filter !== null && categories.every(c => filter.has(c.category));

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
        const isActive = (filter !== null && filter.has(c.category)) ||
          (search && filtered.some(f => f.category === c.category));
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

**Step 3: Create `src/components/PillGroup/index.js`**
```js
export { PillGroup } from "./PillGroup";
```

**Step 4: Update `DaggerheartRef.jsx`**

Import `PillGroup` and replace `renderPillGroup` + `renderPill` usage. The `renderPill` and `renderPillGroup` functions can be removed. Replace the pill groups JSX:

```jsx
import { PillGroup } from "./components/PillGroup";

// In the return, replace the pill groups wrapper content:
<div className="dhr-pill-groups-wrapper">
  <PillGroup
    categories={RULES_MECHANICS.map(cat => data.find(d => d.category === cat)).filter(Boolean)}
    groupLabel="Rules & Mechanics"
    variant="rules"
    filter={filter}
    search={search}
    filtered={filtered}
    onPillClick={handlePillClick}
    onGroupClick={() => handleGroupLabelClick(RULES_MECHANICS)}
  />
  <PillGroup
    categories={CARDS_HERITAGE.map(cat => data.find(d => d.category === cat)).filter(Boolean)}
    groupLabel="Cards, Classes & Heritage"
    variant="cards"
    filter={filter}
    search={search}
    filtered={filtered}
    onPillClick={handlePillClick}
    onGroupClick={() => handleGroupLabelClick(CARDS_HERITAGE)}
  />
</div>
```

Remove `renderPill`, `renderPillGroup` functions. Remove `ChevronRight` from lucide-react import.

**Step 5: Verify & Commit**
```bash
npm run build && git add src/components/PillGroup/ src/DaggerheartRef.jsx && git commit -m "refactor: extract PillGroup component"
```

---

## Task 10: Extract QACard component

**Files:**
- Create: `src/components/QACard/QACard.jsx`
- Create: `src/components/QACard/QACard.module.css`
- Create: `src/components/QACard/index.js`

**Step 1: Create `src/components/QACard/QACard.module.css`**

```css
.question {
  width: 100%;
  text-align: left;
  padding: 9px 12px;
  background: var(--dhr-surface);
  border: 1px solid var(--dhr-border);
  border-radius: 8px;
  color: var(--dhr-text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.3;
}

.open {
  background: var(--dhr-surface-raised);
  border-color: var(--cat-color-40);
  border-radius: 8px 8px 0 0;
  color: var(--dhr-text-heading);
  font-weight: 600;
}

.icon {
  font-size: 16px;
  color: var(--cat-color);
  transition: transform 0.15s;
  flex-shrink: 0;
  margin-left: 8px;
}

.iconOpen {
  transform: rotate(45deg);
}

.answer {
  padding: 10px 12px;
  background: var(--dhr-surface-raised);
  border: 1px solid var(--cat-color-40);
  border-top: none;
  border-radius: 0 0 8px 8px;
  font-size: 12.5px;
  line-height: 1.6;
  color: var(--dhr-text-secondary);
  white-space: pre-line;
}
```

**Step 2: Create `src/components/QACard/QACard.jsx`**

```jsx
import styles from "./QACard.module.css";

export function QACard({ question, answer, open, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
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

**Step 3: Create `src/components/QACard/index.js`**
```js
export { QACard } from "./QACard";
```

**Step 4: Verify & Commit**
```bash
npm run build && git add src/components/QACard/ && git commit -m "refactor: extract QACard component"
```

---

## Task 11: Extract CategoryGroup component

**Files:**
- Create: `src/components/CategoryGroup/CategoryGroup.jsx`
- Create: `src/components/CategoryGroup/CategoryGroup.module.css`
- Create: `src/components/CategoryGroup/index.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/components/CategoryGroup/CategoryGroup.module.css`**

```css
.category {
  margin-bottom: 18px;
}

.label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--cat-color);
  margin-bottom: 6px;
  padding-left: 4px;
}

:global([data-theme="light"]) .label {
  color: color-mix(in srgb, var(--cat-color) 65%, black);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
```

**Step 2: Create `src/components/CategoryGroup/CategoryGroup.jsx`**

```jsx
import { QACard } from "../QACard";
import styles from "./CategoryGroup.module.css";

export function CategoryGroup({ category, openQ, onToggle }) {
  return (
    <div className={styles.category} style={{ "--cat-color": category.color, "--cat-color-40": category.color + "66" }}>
      <div className={styles.label}>
        {category.category}
      </div>
      <div className={styles.list}>
        {category.questions.map((item, i) => {
          const key = `${category.category}-${i}`;
          return (
            <QACard
              key={key}
              question={item.q}
              answer={item.a}
              open={openQ === key}
              onToggle={() => onToggle(key)}
            />
          );
        })}
      </div>
    </div>
  );
}
```

**Step 3: Create `src/components/CategoryGroup/index.js`**
```js
export { CategoryGroup } from "./CategoryGroup";
```

**Step 4: Update `DaggerheartRef.jsx`**

Import and replace `renderCategories`:
```jsx
import { CategoryGroup } from "./components/CategoryGroup";

// Replace renderCategories function with:
function renderCategories(categories) {
  return categories.map(cat => (
    <CategoryGroup
      key={cat.category}
      category={cat}
      openQ={openQ}
      onToggle={toggle}
    />
  ));
}
```

**Step 5: Verify & Commit**
```bash
npm run build && git add src/components/CategoryGroup/ src/components/QACard/ src/DaggerheartRef.jsx && git commit -m "refactor: extract CategoryGroup and QACard components"
```

---

## Task 12: Extract TwoColumnLayout component

**Files:**
- Create: `src/components/TwoColumnLayout/TwoColumnLayout.jsx`
- Create: `src/components/TwoColumnLayout/TwoColumnLayout.module.css`
- Create: `src/components/TwoColumnLayout/index.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/components/TwoColumnLayout/TwoColumnLayout.module.css`**

```css
.grid {
  display: flex;
  gap: 40px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

.col {
  flex: 1;
  min-width: 0;
}
```

**Step 2: Create `src/components/TwoColumnLayout/TwoColumnLayout.jsx`**

```jsx
import styles from "./TwoColumnLayout.module.css";

export function TwoColumnLayout({ columns }) {
  return (
    <div className={styles.grid}>
      {columns.map((col, i) => (
        <div key={i} className={styles.col}>
          {col}
        </div>
      ))}
    </div>
  );
}
```

**Step 3: Create `src/components/TwoColumnLayout/index.js`**
```js
export { TwoColumnLayout } from "./TwoColumnLayout";
```

**Step 4: Update `DaggerheartRef.jsx`**

```jsx
import { TwoColumnLayout } from "./components/TwoColumnLayout";

// Replace the isTwoColumn ternary:
{isTwoColumn ? (
  (() => {
    const [col1, col2] = distributeColumns(orderedFiltered);
    return (
      <TwoColumnLayout
        columns={[renderCategories(col1), renderCategories(col2)]}
      />
    );
  })()
) : (
  renderCategories(orderedFiltered)
)}
```

**Step 5: Verify & Commit**
```bash
npm run build && git add src/components/TwoColumnLayout/ src/DaggerheartRef.jsx && git commit -m "refactor: extract TwoColumnLayout component"
```

---

## Task 13: Extract Header component

**Files:**
- Create: `src/components/Header/Header.jsx`
- Create: `src/components/Header/Header.module.css`
- Create: `src/components/Header/index.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/components/Header/Header.module.css`**

```css
.header {
  text-align: center;
  margin-bottom: 24px;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 20px calc(50vw - 50% + 16px);
  background: linear-gradient(
    to right,
    transparent calc(50% - 320px),
    var(--dhr-surface-raised) calc(50% - 270px),
    var(--dhr-surface-raised) calc(50% + 270px),
    transparent calc(50% + 320px)
  );
}

.title {
  font-size: 26px;
  font-weight: 300;
  color: #f59e0b;
  margin: 0;
  letter-spacing: 0.18em;
}

.subtitle {
  font-size: 11px;
  font-weight: 400;
  color: #a78bfa;
  margin: 4px 0 0;
  letter-spacing: 0.08em;
}
```

**Step 2: Create `src/components/Header/Header.jsx`**

```jsx
import styles from "./Header.module.css";

export function Header({ title, subtitle }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
```

**Step 3: Create `src/components/Header/index.js`**
```js
export { Header } from "./Header";
```

**Step 4: Update `DaggerheartRef.jsx`**

```jsx
import { Header } from "./components/Header";

// Replace header JSX:
<Header title="bench notes" subtitle="a daggerheart™ quick reference by oli" />
```

**Step 5: Verify & Commit**
```bash
npm run build && git add src/components/Header/ src/DaggerheartRef.jsx && git commit -m "refactor: extract Header component"
```

---

## Task 14: Extract Footer component

**Files:**
- Create: `src/components/Footer/Footer.jsx`
- Create: `src/components/Footer/Footer.module.css`
- Create: `src/components/Footer/index.js`
- Modify: `src/DaggerheartRef.jsx`

**Step 1: Create `src/components/Footer/Footer.module.css`**

```css
.footer {
  --footer-gap: 36px;
  position: relative;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: calc(var(--footer-gap) + 16px) calc(50vw - 50% + 16px) 20px;
  background: linear-gradient(transparent var(--footer-gap), var(--dhr-surface-raised) var(--footer-gap));
  text-align: center;
  font-size: 10.5px;
  color: var(--dhr-text-dim);
  line-height: 1.7;
  letter-spacing: 0.03em;
}

.footer p {
  margin: 4px 0;
}

.footer a {
  color: var(--dhr-text-muted);
  text-decoration: underline;
  text-underline-offset: 2px;
}
```

**Step 2: Create `src/components/Footer/Footer.jsx`**

```jsx
import styles from "./Footer.module.css";

export function Footer({ children }) {
  return (
    <div className={styles.footer}>
      {children}
    </div>
  );
}
```

**Step 3: Create `src/components/Footer/index.js`**
```js
export { Footer } from "./Footer";
```

**Step 4: Update `DaggerheartRef.jsx`**

```jsx
import { Footer } from "./components/Footer";

// Replace footer JSX:
<Footer>
  <p>
    This product includes materials from the Daggerheart System Reference
    Document 1.0, &copy; Critical Role, LLC, under the terms of
    the <a href="https://darringtonpress.com/license/" target="_blank" rel="noopener noreferrer">Darrington Press Community Gaming License (DPCGL)</a>.
  </p>
  <p>
    More information at <a href="https://www.daggerheart.com" target="_blank" rel="noopener noreferrer">daggerheart.com</a>. Content has been edited, condensed, and reorganized for quick reference. No previous modifications by others.
  </p>
</Footer>
```

**Step 5: Verify & Commit**
```bash
npm run build && git add src/components/Footer/ src/DaggerheartRef.jsx && git commit -m "refactor: extract Footer component"
```

---

## Task 15: Create barrel exports and clean up

**Files:**
- Create: `src/components/index.js`
- Modify: `src/DaggerheartRef.jsx` — clean up remaining inline styles/classes
- Delete: `src/DaggerheartRef.css` (all styles now in modules + theme.css)

**Step 1: Create `src/components/index.js`**

```js
export { ThemeToggle } from "./ThemeToggle";
export { SearchInput } from "./SearchInput";
export { Pill } from "./Pill";
export { PillGroup } from "./PillGroup";
export { QACard } from "./QACard";
export { CategoryGroup } from "./CategoryGroup";
export { TwoColumnLayout } from "./TwoColumnLayout";
export { Header } from "./Header";
export { Footer } from "./Footer";
```

**Step 2: Move remaining root-level styles**

The `.dhr-root`, `.dhr-root--two-column`, `.dhr-no-results`, `.dhr-action-pills-row`, and `.dhr-pill-groups-wrapper` classes are still used by `DaggerheartRef.jsx`. Create a `DaggerheartRef.module.css` for these page-level styles:

Create `src/DaggerheartRef.module.css`:
```css
.root {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  background: transparent;
  min-height: 100vh;
  color: var(--dhr-text);
  position: relative;
  z-index: 1;
  overflow-x: clip;
}

.twoColumn {
  max-width: 1180px;
}

.actionPills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin-bottom: 14px;
}

.pillGroups {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
}

.clearPill {
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid rgba(85, 170, 150, 0.25);
  background: rgba(85, 170, 150, 0.08);
  color: var(--dhr-text-muted);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.clearPillActive {
  border-color: rgba(85, 170, 150, 0.5);
  background: rgba(85, 170, 150, 0.2);
  color: var(--dhr-text-secondary);
}

.noResults {
  text-align: center;
  color: var(--dhr-text-dim);
  padding: 40px;
  font-size: 14px;
}
```

**Step 3: Update `DaggerheartRef.jsx` to use CSS Module**

Update imports — replace `import "./DaggerheartRef.css"` with:
```js
import styles from "./DaggerheartRef.module.css";
```

Update all className references to use `styles.*` (e.g., `styles.root`, `styles.twoColumn`, etc.).

**Step 4: Delete `src/DaggerheartRef.css`**
```bash
rm src/DaggerheartRef.css
```

**Step 5: Verify**
```bash
npm run build
```

**Step 6: Commit**
```bash
git add src/components/index.js src/DaggerheartRef.module.css src/DaggerheartRef.jsx && git rm src/DaggerheartRef.css && git commit -m "refactor: create barrel exports, migrate page styles to CSS module, remove old CSS"
```

---

## Task 16: Final verification and cleanup

**Step 1: Verify build**
```bash
npm run build
```

**Step 2: Verify lint**
```bash
npm run lint
```

**Step 3: Visual verification**
```bash
npm run dev
```
Open in browser. Verify:
- Dark theme renders correctly
- Light theme toggle works
- Search filters work
- Category pill filtering works
- Two-column layout at wide viewport
- Single-column at narrow viewport
- Accordion open/close works
- Footer renders correctly

**Step 4: Update CLAUDE.md**

Update the Architecture section to reflect the new component library structure.

**Step 5: Final commit**
```bash
git add CLAUDE.md && git commit -m "docs: update CLAUDE.md for component library architecture"
```
