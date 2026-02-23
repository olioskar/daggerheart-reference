import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { SearchInput } from "./components/SearchInput";
import "./DaggerheartRef.css";
import { data, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES, PILL_TINTS } from "./data/categories";
import { distributeColumns } from "./utils/distributeColumns";
import { matchesSearch } from "./utils/search";
import { useTheme } from "./hooks/useTheme";
import { useResponsiveColumns } from "./hooks/useResponsiveColumns";

export default function DaggerheartRef() {
  const [openQ, setOpenQ] = useState(null);
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");
  const { theme, toggleTheme } = useTheme();
  const isTwoColumn = useResponsiveColumns(800);

  function toggle(key) {
    setOpenQ(openQ === key ? null : key);
  }

  const searchLower = search.toLowerCase();

  const filtered = data
    .filter(c => filter === null || filter.has(c.category))
    .map(c => {
      if (search && c.category.toLowerCase().includes(searchLower)) return c;
      return { ...c, questions: c.questions.filter(item => matchesSearch(item, searchLower)) };
    })
    .filter(c => c.questions.length > 0);

  const orderedFiltered = (filter === null ? ALL_CATEGORIES : [...filter])
    .map(cat => filtered.find(f => f.category === cat))
    .filter(Boolean);

  function handlePillClick(category) {
    const active = filter ?? new Set();
    const next = new Set(active);

    if (next.has(category)) {
      next.delete(category);
    } else {
      next.add(category);
    }

    setFilter(next.size > 0 ? next : null);
    setSearch("");
  }

  function renderPill(c) {
    const label = c.category.replace(/^[^\w]*/, "").replace(/\s*\(\d+\)$/, "").trim();
    const isActive = (filter !== null && filter.has(c.category)) ||
      (search && filtered.some(f => f.category === c.category));
    const isRulesGroup = RULES_MECHANICS.includes(c.category);
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
      <button
        key={c.category}
        onClick={() => handlePillClick(c.category)}
        className={`dhr-category-pill${isActive ? " dhr-category-pill--active" : ""}`}
        style={{ "--pill-border": pillBorder, "--pill-bg": pillBg }}
      >{label}</button>
    );
  }

  function renderCategories(categories) {
    return categories.map(cat => (
      <div key={cat.category} className="dhr-category" style={{ "--cat-color": cat.color, "--cat-color-40": cat.color + "66" }}>
        <div className="dhr-category__label">
          {cat.category}
        </div>
        <div className="dhr-category__list">
          {cat.questions.map((item, i) => {
            const key = `${cat.category}-${i}`;
            const isOpen = openQ === key;
            return (
              <div key={key}>
                <button
                  onClick={() => toggle(key)}
                  className={`dhr-qa-question${isOpen ? " dhr-qa-question--open" : ""}`}
                >
                  <span>{item.q}</span>
                  <span className={`dhr-qa-icon${isOpen ? " dhr-qa-icon--open" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <div className="dhr-qa-answer">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    ));
  }

  function handleGroupLabelClick(categories) {
    setFilter(new Set(categories));
    setSearch("");
  }

  function renderPillGroup(columnOrder, groupLabel, labelCls) {
    const cats = columnOrder.map(cat => data.find(d => d.category === cat)).filter(Boolean);
    const isActive = filter !== null && columnOrder.every(c => filter.has(c));
    return (
      <>
        <button
          className={`dhr-pill-group-label ${labelCls}${isActive ? " dhr-pill-group-label--active" : ""}`}
          onClick={() => handleGroupLabelClick(columnOrder)}
        >
          {groupLabel}
          <ChevronRight size={12} className="dhr-pill-group-label__icon" />
          <ChevronRight size={12} className={`dhr-pill-group-label__icon dhr-pill-group-label__icon--second${isActive ? " dhr-pill-group-label__icon--visible" : ""}`} />
        </button>
        {cats.map(renderPill)}
      </>
    );
  }

  const hasActiveFilter = filter !== null || search !== "";

  function handleClearFilters() {
    setFilter(null);
    setSearch("");
  }

  const themeToggle = <ThemeToggle theme={theme} onToggle={toggleTheme} />;

  return (
    <div className={`dhr-root${isTwoColumn ? " dhr-root--two-column" : ""}`}>
      <div className="dhr-header">
        <h1 className="dhr-header__title">bench notes</h1>
        <p className="dhr-header__subtitle">
          a daggerheart™ quick reference by oli
        </p>
      </div>

      <SearchInput
        value={search}
        onChange={e => { setSearch(e.target.value); setFilter(null); }}
        placeholder="Search rules, classes, ancestries..."
      />

      <div className="dhr-action-pills-row">
        <button
          className={`dhr-clear-pill${hasActiveFilter ? " dhr-clear-pill--active" : ""}`}
          onClick={handleClearFilters}
        >
          {hasActiveFilter ? "Clear Filters" : "All Topics Visible"}
        </button>
        {themeToggle}
      </div>

      <div className="dhr-pill-groups-wrapper">
        {renderPillGroup(RULES_MECHANICS, "Rules & Mechanics", "dhr-pill-group-label--rules")}
        {renderPillGroup(CARDS_HERITAGE, "Cards, Classes & Heritage", "dhr-pill-group-label--cards")}
      </div>

      {isTwoColumn ? (
        (() => {
          const [col1, col2] = distributeColumns(orderedFiltered);
          return (
            <div className="dhr-columns-grid">
              <div className="dhr-columns-grid__col">
                {renderCategories(col1)}
              </div>
              <div className="dhr-columns-grid__col">
                {renderCategories(col2)}
              </div>
            </div>
          );
        })()
      ) : (
        renderCategories(orderedFiltered)
      )}

      {filtered.length === 0 && (
        <div className="dhr-no-results">
          No results for &quot;{search}&quot;
        </div>
      )}

      <div className="dhr-footer">
        <p>
          This product includes materials from the Daggerheart System Reference
          Document 1.0, &copy; Critical Role, LLC, under the terms of
          the <a href="https://darringtonpress.com/license/" target="_blank" rel="noopener noreferrer">Darrington Press Community Gaming License (DPCGL)</a>.
        </p>
        <p>
          More information at <a href="https://www.daggerheart.com" target="_blank" rel="noopener noreferrer">daggerheart.com</a>. Content has been edited, condensed, and reorganized for quick reference. No previous modifications by others.
        </p>
      </div>
    </div>
  );
}
