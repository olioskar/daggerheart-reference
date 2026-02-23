import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={styles.toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Moon size={13} className={`${styles.iconMoon}${theme === "dark" ? ` ${styles.active}` : ""}`} />
      <Sun size={13} className={`${styles.iconSun}${theme === "light" ? ` ${styles.active}` : ""}`} />
    </button>
  );
}
