import styles from "./TwoColumnLayout.module.css";

export function TwoColumnLayout({ columns }) {
  return (
    <div className={styles.grid}>
      {columns.map((col, i) => (
        <div key={i} className={styles.col}>
          {col}
        </div>
      ))}
    </div>
  );
}
