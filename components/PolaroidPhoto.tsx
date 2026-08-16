import styles from "./PolaroidPhoto.module.css";

type PolaroidPhotoProps = {
  caption: string;
  rotate?: number;
  height?: number;
  placeholder?: string;
};

// TODO(kait): replace the placeholder slot below with a real portrait photo.
export default function PolaroidPhoto({
  caption,
  rotate = -1.5,
  height = 440,
  placeholder = "Drop Dr. Kearney's photo here",
}: PolaroidPhotoProps) {
  return (
    <div className={styles.frame} style={{ transform: `rotate(${rotate}deg)` }}>
      <div
        className={styles.slot}
        style={{ height }}
        role="img"
        aria-label={caption}
      >
        {placeholder}
      </div>
      <div className={styles.captionRow}>
        <span className={styles.captionText}>{caption}</span>
        <span className={styles.captionDots} aria-hidden="true">
          <span className={styles.dotSquare} />
          <span className={styles.dotBall} />
          <span className={styles.dotArch} />
        </span>
      </div>
    </div>
  );
}
