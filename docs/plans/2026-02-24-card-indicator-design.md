# Fix #7: Card Expand/Collapse Indicator

## Goal
Replace plain text "+" with Lucide Plus icon, animate rotation 45deg on expand.

## Changes

**Card.jsx:** Import `Plus` from `lucide-react`, replace `<span>+</span>` with `<Plus size={20} strokeWidth={1.5} />`.

**Card.module.css:** Update `.icon` font-size to accommodate SVG icon (20px), keep 45deg rotation on `.iconOpen`, 0.15s transition.

## Behavior
- Collapsed: Plus icon at 0deg
- Expanded: rotates 45deg clockwise (X shape)
- Collapse: rotates back to 0deg
- Color: `var(--cat-color)` — unchanged
