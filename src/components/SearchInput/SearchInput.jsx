import styles from "./SearchInput.module.css";

export function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}
