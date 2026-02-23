import styles from "./QACard.module.css";

export function QACard({ question, answer, open, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={`${styles.question}${open ? ` ${styles.open}` : ""}`}
      >
        <span>{question}</span>
        <span className={`${styles.icon}${open ? ` ${styles.iconOpen}` : ""}`}>+</span>
      </button>
      {open && (
        <div className={styles.answer}>
          {answer}
        </div>
      )}
    </div>
  );
}
