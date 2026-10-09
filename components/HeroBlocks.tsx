import styles from "./HeroBlocks.module.css";

/** Home-only hero composition: static toy blocks resting on the floor line. */
export default function HeroBlocks() {
  return (
    <div className={styles.floor}>
      <div className={styles.shapes} aria-hidden="true">
        <div className={styles.square} />
        <div className={styles.stack}>
          <div className={styles.ball} />
          <div className={styles.arch} />
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>All ages</div>
          <div className={styles.statLabel}>children to young adults — and parents</div>
        </div>
      </div>
    </div>
  );
}
