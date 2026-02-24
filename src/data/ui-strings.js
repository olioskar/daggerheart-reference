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
