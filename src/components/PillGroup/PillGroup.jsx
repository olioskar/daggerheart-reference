import { Pill } from "../Pill";
import styles from "./PillGroup.module.css";

function stripLabel(category) {
  return category.replace(/^[^\p{L}\d]*/u, "").replace(/\s*\(\d+\)$/, "").trim();
}

function stripDomainLabel(category) {
  return stripLabel(category).replace(/ (Domain Cards|sviðsspjöld)$/i, "");
}

export function PillGroup({ categories, groupLabel, variant, activeCategories, onPillClick, onGroupClick, domainCards, domainLabel, onDomainAllClick }) {
  const isGroupActive = categories.every(c => activeCategories.has(c.category));
  const allDomainActive = domainCards?.length > 0 && domainCards.every(c => activeCategories.has(c.category));
  const colorClass = variant === "rules" ? styles.amber : styles.purple;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <span className={`${styles.title} ${colorClass}`}>{groupLabel}</span>
        <span className={styles.line} />
        <button
          className={`${styles.allToggle}${isGroupActive ? ` ${styles.allToggleActive}` : ""}`}
          onClick={onGroupClick}
        >
          All
        </button>
      </div>

      <div className={styles.pills}>
        {categories.map(c => (
          <Pill
            key={c.category}
            label={stripLabel(c.category)}
            active={activeCategories.has(c.category)}
            onClick={() => onPillClick(c.category)}
            variant={variant}
          />
        ))}
      </div>

      {domainCards && domainCards.length > 0 && (
        <div className={styles.domainGroup}>
          <div className={styles.domainHeader}>
            <span className={styles.domainLabel}>{domainLabel || "Domain Cards"}</span>
            <button
              className={`${styles.domainToggle}${allDomainActive ? ` ${styles.domainToggleActive}` : ""}`}
              onClick={onDomainAllClick}
            >
              All {domainCards.length}
            </button>
          </div>
          <div className={styles.domainPills}>
            {domainCards.map(c => (
              <Pill
                key={c.category}
                label={stripDomainLabel(c.category)}
                active={activeCategories.has(c.category)}
                onClick={() => onPillClick(c.category)}
                variant="domains"
                isDomain
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
