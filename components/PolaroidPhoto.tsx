import Image from "next/image";
import styles from "./PolaroidPhoto.module.css";

type PolaroidPhotoProps = {
  caption: string;
  rotate?: number;
  height?: number;
  placeholder?: string;
  src?: string;
};

export default function PolaroidPhoto({
  caption,
  rotate = -1.5,
  height = 440,
  placeholder = "Drop Dr. Kearney's photo here",
  src,
}: PolaroidPhotoProps) {
  return (
    <div className={styles.frame} style={{ transform: `rotate(${rotate}deg)` }}>
      <div className={styles.slot} style={{ height }}>
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
