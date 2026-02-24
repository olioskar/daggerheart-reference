import { data as dataEn, RULES_MECHANICS as RULES_EN, CARDS_HERITAGE as CARDS_EN, ALL_CATEGORIES as ALL_EN } from "./categories-en";
import { data as dataIs, RULES_MECHANICS as RULES_IS, CARDS_HERITAGE as CARDS_IS, ALL_CATEGORIES as ALL_IS } from "./categories-is";

const localeData = { en: dataEn, is: dataIs };
const localeRules = { en: RULES_EN, is: RULES_IS };
const localeCards = { en: CARDS_EN, is: CARDS_IS };
const localeAll = { en: ALL_EN, is: ALL_IS };

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
