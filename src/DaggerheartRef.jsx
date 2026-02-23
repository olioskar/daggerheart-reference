import { useState } from "react";
import { ThemeToggle, SearchInput, PillGroup, CategoryGroup, TwoColumnLayout, Header, Footer } from "./components";
import styles from "./DaggerheartRef.module.css";
import { data, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES } from "./data/categories";
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

  function handleGroupLabelClick(categories) {
    setFilter(new Set(categories));
    setSearch("");
  }

  const hasActiveFilter = filter !== null || search !== "";

  function handleClearFilters() {
    setFilter(null);
    setSearch("");
  }

  const themeToggle = <ThemeToggle theme={theme} onToggle={toggleTheme} />;

  return (
    <div className={`${styles.root}${isTwoColumn ? ` ${styles.twoColumn}` : ""}`}>
      <Header title="bench notes" subtitle="a daggerheart™ quick reference by oli" />

      <SearchInput
        value={search}
        onChange={e => { setSearch(e.target.value); setFilter(null); }}
        placeholder="Search rules, classes, ancestries..."
      />

      <div className={styles.actionPills}>
        <button
          className={`${styles.clearPill}${hasActiveFilter ? ` ${styles.clearPillActive}` : ""}`}
          onClick={handleClearFilters}
        >
          {hasActiveFilter ? "Clear Filters" : "All Topics Visible"}
        </button>
        {themeToggle}
      </div>

      <div className={styles.pillGroups}>
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

      {filtered.length === 0 && (
        <div className={styles.noResults}>
          No results for &quot;{search}&quot;
        </div>
      )}

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
    </div>
  );
}
