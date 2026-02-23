import styles from "./Pill.module.css";

export function Pill({ label, active, onClick, pillBorder, pillBg }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.pill}${active ? ` ${styles.active}` : ""}`}
      style={{ "--pill-border": pillBorder, "--pill-bg": pillBg }}
    >
      {label}
    </button>
  );
}
