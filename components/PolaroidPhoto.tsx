import Image from "next/image";
import styles from "./PolaroidPhoto.module.css";

type PolaroidPhotoProps = {
  caption: string;
  rotate?: number;
  /** width / height, e.g. 0.8 for a 4:5 portrait. Defaults to a standard portrait headshot ratio. */
  aspectRatio?: number;
  placeholder?: string;
  src?: string;
};

export default function PolaroidPhoto({
  caption,
  rotate = -1.5,
  aspectRatio = 0.8,
  placeholder = "Drop Dr. Kearney's photo here",
  src,
}: PolaroidPhotoProps) {
  return (
    <div className={styles.frame} style={{ transform: `rotate(${rotate}deg)` }}>
      <div className={styles.slot} style={{ aspectRatio }}>
        {src ? (
          <Image
            src={src}
            alt={caption}
            fill
            sizes="(max-width: 900px) 90vw, 440px"
            className={styles.photo}
          />
        ) : (
          <span role="img" aria-label={caption}>
            {placeholder}
          </span>
        )}
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
