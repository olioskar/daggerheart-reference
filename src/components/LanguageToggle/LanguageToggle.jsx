import styles from "./LanguageToggle.module.css";

export function LanguageToggle({ locale, onToggle }) {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Switch to ${locale === "en" ? "Icelandic" : "English"}`}
    >
      <span className={locale === "en" ? styles.active : ""}>EN</span>
      <span className={styles.separator}>/</span>
      <span className={locale === "is" ? styles.active : ""}>IS</span>
    </button>
  );
}
