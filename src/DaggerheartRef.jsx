import { useState, useMemo } from "react";
import { ThemeToggle, LanguageToggle, SearchInput, PillGroup, CategoryGroup, TwoColumnLayout, Header, Footer } from "./components";
import styles from "./DaggerheartRef.module.css";
import { getCategories, getRulesMechanics, getCardsHeritage, getAllCategories } from "./data";
import { getStrings } from "./data/ui-strings";
import { distributeColumns } from "./utils/distributeColumns";
import { matchesSearch } from "./utils/search";
import { useTheme } from "./hooks/useTheme";
import { useLocale } from "./hooks/useLocale";
import { useResponsiveColumns } from "./hooks/useResponsiveColumns";

export default function DaggerheartRef() {
  const [openQs, setOpenQs] = useState(new Set());
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale } = useLocale();
  const isTwoColumn = useResponsiveColumns(800);

  const data = useMemo(() => getCategories(locale), [locale]);
  const RULES_MECHANICS = useMemo(() => getRulesMechanics(locale), [locale]);
  const CARDS_HERITAGE = useMemo(() => getCardsHeritage(locale), [locale]);
  const ALL_CATEGORIES = useMemo(() => getAllCategories(locale), [locale]);
  const strings = useMemo(() => getStrings(locale), [locale]);
  const categoryMap = useMemo(() => new Map(data.map(d => [d.category, d])), [data]);

  function handleLocaleToggle() {
    toggleLocale();
    setFilter(null);
    setSearch("");
    setOpenQs(new Set());
  }

  function toggle(key) {
    setOpenQs(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
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
        placeholder={strings.searchPlaceholder}
      />

      <div className={styles.actionPills}>
        <button
          className={`${styles.clearPill}${hasActiveFilter ? ` ${styles.clearPillActive}` : ""}`}
          onClick={handleClearFilters}
        >
          {hasActiveFilter ? strings.clearFilters : strings.allTopicsVisible}
        </button>
        <LanguageToggle locale={locale} onToggle={handleLocaleToggle} />
        {themeToggle}
      </div>

      <div className={styles.pillGroups}>
        <PillGroup
          categories={RULES_MECHANICS.map(name => categoryMap.get(name)).filter(Boolean)}
          groupLabel={strings.rulesGroup}
          variant="rules"
          activeCategories={activeCategories}
          onPillClick={handlePillClick}
          onGroupClick={() => handleGroupLabelClick(RULES_MECHANICS)}
        />
        <PillGroup
          categories={CARDS_HERITAGE.map(name => categoryMap.get(name)).filter(Boolean)}
          groupLabel={strings.cardsGroup}
          variant="cards"
          activeCategories={activeCategories}
          onPillClick={handlePillClick}
          onGroupClick={() => handleGroupLabelClick(CARDS_HERITAGE)}
        />
      </div>

      {isTwoColumn ? (
        <TwoColumnLayout columns={[
          col1.map(cat => <CategoryGroup key={cat.category} category={cat} openQs={openQs} onToggle={toggle} />),
          col2.map(cat => <CategoryGroup key={cat.category} category={cat} openQs={openQs} onToggle={toggle} />),
        ]} />
      ) : (
        orderedFiltered.map(cat => (
          <CategoryGroup key={cat.category} category={cat} openQs={openQs} onToggle={toggle} />
        ))
      )}

      {filtered.length === 0 && (
        <div className={styles.noResults}>
          {strings.noResults(search)}
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
