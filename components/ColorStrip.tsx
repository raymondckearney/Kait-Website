import styles from "./ColorStrip.module.css";

type Segment = {
  color: string;
  flex: number;
};

type ColorStripProps = {
  segments: Segment[];
};

/** 16px full-bleed strip of palette-colored segments. Divider between hero and first section. */
export default function ColorStrip({ segments }: ColorStripProps) {
  return (
    <div className={styles.strip} role="presentation" aria-hidden="true">
      {segments.map((segment, i) => (
        <div
          key={i}
          className={styles.segment}
          style={{ flex: segment.flex, background: segment.color }}
        />
      ))}
    </div>
  );
}
