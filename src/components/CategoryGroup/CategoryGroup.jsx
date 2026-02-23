import { QACard } from "../QACard";
import styles from "./CategoryGroup.module.css";

export function CategoryGroup({ category, openQ, onToggle }) {
  return (
    <div className={styles.category} style={{ "--cat-color": category.color, "--cat-color-40": category.color + "66" }}>
      <div className={styles.label}>
        {category.category}
      </div>
      <div className={styles.list}>
        {category.questions.map((item, i) => {
          const key = `${category.category}-${i}`;
          return (
            <QACard
              key={key}
              question={item.q}
              answer={item.a}
              open={openQ === key}
              onToggle={() => onToggle(key)}
            />
          );
        })}
      </div>
    </div>
  );
}
