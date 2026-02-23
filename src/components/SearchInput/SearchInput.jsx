import styles from "./SearchInput.module.css";

export function SearchInput({ value, onChange, placeholder }) {
  return (
    <search className={styles.wrapper}>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </search>
  );
}
