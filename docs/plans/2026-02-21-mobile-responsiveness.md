# Mobile Responsiveness Fix — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix mobile viewport issues — action pills wrap, filter groups center, layout fully fluid, remove sword icons.

**Architecture:** CSS-only fixes plus one small JSX edit (remove Sword icons). No new components or logic changes.

**Tech Stack:** React JSX, CSS (DaggerheartRef.css, DaggerheartRef.jsx)

---

### Task 1: Remove sword icons from title

**Files:**
- Modify: `src/DaggerheartRef.jsx` (import line ~line 3, and title JSX ~line 1695)
- Modify: `src/DaggerheartRef.css` (lines 37-50, 363-369)

**Step 1: Remove Sword from lucide-react import**

In `src/DaggerheartRef.jsx`, remove `Sword` from the lucide-react import. Only `Moon`, `Sun` should remain.

**Step 2: Remove Sword components from title JSX**

In `src/DaggerheartRef.jsx` ~line 1695, change:
```jsx
<h1 className="dhr-header__title">
  <Sword className="dhr-title-sword dhr-title-sword--left" /> Daggerheart Quick Reference <Sword className="dhr-title-sword dhr-title-sword--right" />
</h1>
```
to:
```jsx
<h1 className="dhr-header__title">
  Daggerheart Quick Reference
</h1>
```

**Step 3: Remove sword CSS rules**

In `src/DaggerheartRef.css`, remove these blocks:
- `.dhr-title-sword` (lines 37-41)
- `.dhr-title-sword--left` (lines 43-45)
- `.dhr-title-sword--right` (lines 47-50)
- `[data-theme="light"] .dhr-title-sword--left` (lines 363-365)
- `[data-theme="light"] .dhr-title-sword--right` (lines 367-369)

**Step 4: Verify build**

Run: `npm run build`
Expected: Clean build, no errors

**Step 5: Commit**

```bash
git add src/DaggerheartRef.jsx src/DaggerheartRef.css
git commit -m "Remove sword icons from title"
```

---

### Task 2: Make action pills row wrap on mobile

**Files:**
- Modify: `src/DaggerheartRef.css` (`.dhr-action-pills-row` ~line 114)

**Step 1: Add flex-wrap to action pills row**

Change `.dhr-action-pills-row`:
```css
.dhr-action-pills-row {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-bottom: 14px;
  flex-wrap: wrap;
}
```

This allows the 3 action pills + theme toggle to wrap naturally. On iPhone portrait (~375px), "Rules & Mechanics" + "Cards, Classes & Heritage" fit on line 1, "Clear Filters" + theme toggle wrap to line 2.

**Step 2: Verify build**

Run: `npm run build`
Expected: Clean build

**Step 3: Commit**

```bash
git add src/DaggerheartRef.css
git commit -m "Allow action pills row to wrap on narrow viewports"
```

---

### Task 3: Center-align filter pill groups in single-column

**Files:**
- Modify: `src/DaggerheartRef.css` (`.dhr-pill-groups-wrapper` ~line 122, `.dhr-pill-group-pills` ~line 143, `.dhr-pill-group-label` ~line 127)

**Step 1: Center the pill groups wrapper and its children**

Update `.dhr-pill-groups-wrapper`:
```css
.dhr-pill-groups-wrapper {
  margin-bottom: 18px;
  text-align: center;
}
```

Update `.dhr-pill-group-pills` to center pills:
```css
.dhr-pill-group-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 18px;
  justify-content: center;
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Clean build

**Step 3: Commit**

```bash
git add src/DaggerheartRef.css
git commit -m "Center-align filter pill groups in single-column layout"
```

---

### Task 4: Remove min-width constraints, ensure full fluidity

**Files:**
- Modify: `src/DaggerheartRef.css` (`.dhr-root` ~line 1)

**Step 1: Make root fully fluid**

The `.dhr-root` currently sets `max-width: 540px` which is fine (caps width on larger phones), but ensure the container is fully fluid below that by confirming `box-sizing` and adding `width: 100%`:

```css
.dhr-root {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  padding: 20px 16px;
  background: transparent;
  min-height: 100vh;
  color: var(--dhr-text);
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}
```

Key additions: `width: 100%` and `box-sizing: border-box` ensure padding is included in width calculation, preventing horizontal overflow on narrow viewports.

**Step 2: Verify build**

Run: `npm run build`
Expected: Clean build

**Step 3: Commit**

```bash
git add src/DaggerheartRef.css
git commit -m "Make page container fully fluid with box-sizing border-box"
```

---

### Final verification

After all tasks, run `npm run dev` and test in browser dev tools at iPhone dimensions (375x812) to confirm:
- Title has no sword icons
- Action pills wrap to 2 lines
- Filter pill groups are centered
- No horizontal overflow at any width
