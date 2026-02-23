import { useState } from "react";
import { ThemeToggle, SearchInput, PillGroup, CategoryGroup, TwoColumnLayout, Header, Footer } from "./components";
import styles from "./DaggerheartRef.module.css";
import { data, RULES_MECHANICS, CARDS_HERITAGE, ALL_CATEGORIES } from "./data/categories";
import { distributeColumns } from "./utils/distributeColumns";
import { matchesSearch } from "./utils/search";
import { useTheme } from "./hooks/useTheme";
import { useResponsiveColumns } from "./hooks/useResponsiveColumns";

const categoryMap = new Map(data.map(d => [d.category, d]));

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

  const activeCategories = new Set([
    ...(filter ? [...filter] : []),
    ...(search ? filtered.map(f => f.category) : []),
  ]);

  const [col1, col2] = isTwoColumn ? distributeColumns(orderedFiltered) : [orderedFiltered, []];

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
    <main className={`${styles.root}${isTwoColumn ? ` ${styles.twoColumn}` : ""}`}>
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
      </div>

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
    </main>
  );
}
