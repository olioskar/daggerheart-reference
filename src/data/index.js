import { data as dataEn, RULES_MECHANICS as RULES_EN, CARDS_HERITAGE as CARDS_EN, ALL_CATEGORIES as ALL_EN } from "./categories-en";

const localeData = { en: dataEn };
const localeRules = { en: RULES_EN };
const localeCards = { en: CARDS_EN };
const localeAll = { en: ALL_EN };

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
