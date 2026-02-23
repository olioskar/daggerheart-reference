import { ChevronRight } from "lucide-react";
import { Pill } from "../Pill";
import { PILL_TINTS } from "../../data/categories";
import styles from "./PillGroup.module.css";

export function PillGroup({ categories, groupLabel, variant, activeCategories, onPillClick, onGroupClick }) {
  const isGroupActive = categories.every(c => activeCategories.has(c.category));

  const variantClass = variant === "rules" ? styles.rules : styles.cards;

  return (
    <>
      <button
        className={`${styles.groupLabel} ${variantClass}${isGroupActive ? ` ${styles.groupLabelActive}` : ""}`}
        onClick={onGroupClick}
      >
        {groupLabel}
        <ChevronRight size={12} className={styles.groupLabelIcon} />
        <ChevronRight size={12} className={`${styles.groupLabelIcon} ${styles.groupLabelIconSecond}${isGroupActive ? ` ${styles.groupLabelIconVisible}` : ""}`} />
      </button>
      {categories.map(c => {
        const label = c.category.replace(/^[^\w]*/, "").replace(/\s*\(\d+\)$/, "").trim();
        const isActive = activeCategories.has(c.category);
        const isRulesGroup = variant === "rules";
        const groupBorder = isRulesGroup
          ? "rgba(245, 158, 11, 0.3)"
          : "rgba(167, 139, 250, 0.3)";
        const tint = PILL_TINTS[c.category];

        let pillBorder = groupBorder;
        let pillBg = "transparent";
        if (isActive) {
          pillBorder = `color-mix(in srgb, ${c.color} 47%, transparent)`;
          pillBg = `color-mix(in srgb, ${c.color} 20%, transparent)`;
        } else if (tint) {
          pillBg = tint.bg;
        }

        return (
          <Pill
            key={c.category}
            label={label}
            active={isActive}
            onClick={() => onPillClick(c.category)}
            pillBorder={pillBorder}
            pillBg={pillBg}
          />
        );
      })}
    </>
  );
}
