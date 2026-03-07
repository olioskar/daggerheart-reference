import styles from "./Pill.module.css";

const activeClass = { rules: styles.activeAmber, cards: styles.activePurple, domains: styles.activePurple };

export function Pill({ label, active, onClick, variant, isDomain }) {
  const classes = [
    styles.pill,
    isDomain ? styles.domain : "",
    active ? (activeClass[variant] || styles.active) : "",
  ].filter(Boolean).join(" ");

  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
