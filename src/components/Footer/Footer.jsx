import styles from "./Footer.module.css";

export function Footer({ children }) {
  return (
    <div className={styles.footer}>
      {children}
    </div>
  );
}
