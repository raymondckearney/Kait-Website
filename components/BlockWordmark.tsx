import styles from "./BlockWordmark.module.css";

type BlockWordmarkProps = {
  size?: "md" | "sm";
};

export default function BlockWordmark({ size = "md" }: BlockWordmarkProps) {
  return (
    <span
      className={`${styles.wordmark} ${size === "sm" ? styles.sm : styles.md}`}
    >
      <span className={styles.shapes} aria-hidden="true">
        <span className={styles.square} />
        <span className={styles.ball} />
        <span className={styles.triangle} />
        <span className={styles.arch} />
      </span>
      <span className={styles.wordText}>Kait Kearney, PhD</span>
    </span>
  );
}
