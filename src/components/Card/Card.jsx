import { Plus } from "lucide-react";
import styles from "./Card.module.css";

export function Card({ question, answer, open, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className={`${styles.question}${open ? ` ${styles.open}` : ""}`}
      >
        <span>{question}</span>
        <span className={`${styles.icon}${open ? ` ${styles.iconOpen}` : ""}`}><Plus size={20} strokeWidth={1.5} /></span>
      </button>
      <div className={`${styles.answerWrap}${open ? ` ${styles.answerWrapOpen}` : ""}`}>
        <div className={styles.answer}>
          {answer}
        </div>
      </div>
    </div>
  );
}
