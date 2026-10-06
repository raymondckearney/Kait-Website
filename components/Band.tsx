import type { ReactNode } from "react";
import styles from "./Band.module.css";

type BandProps = {
  tone: "cobalt" | "green" | "marigold" | "paper";
  decorative?: boolean;
  children: ReactNode;
  className?: string;
};

/** Full-bleed centered band with optional idle decorative shapes — quote/experience/off-the-clock bands. */
export default function Band({ tone, decorative = false, children, className }: BandProps) {
  return (
    <section className={`${styles.band} ${styles[tone]} ${className ?? ""}`}>
      {decorative && (
        <>
          <div className={styles.shapeSquare} aria-hidden="true" />
          <div className={styles.shapeBall} aria-hidden="true" />
        </>
      )}
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
