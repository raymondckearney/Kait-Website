import styles from "./HeroBlocks.module.css";

/** Home-only hero composition: toy blocks drop in and land on the floor line. */
export default function HeroBlocks() {
  return (
    <div className={styles.floor}>
      {/* ground shadows */}
      <div
        className={`${styles.shadow} ${styles.shadowSquare}`}
        style={{ animation: "tumSquash 1.8s 0.7s backwards" }}
      />
      <div
        className={`${styles.shadow} ${styles.shadowTriangle}`}
        style={{ animation: "tumSquash 1.8s 1s backwards" }}
      />
      <div
        className={`${styles.shadow} ${styles.shadowArch}`}
        style={{ animation: "tumSquash 1.8s 1.25s backwards" }}
      />
      <div
        className={`${styles.shadow} ${styles.shadowSmallBall}`}
        style={{ animation: "tumSquash 1.8s 1.5s backwards" }}
      />

      {/* cobalt square */}
      <div
        className={`${styles.blockWrap} ${styles.squareWrap}`}
        style={{ animation: "tumDrop 1.8s 0.7s backwards" }}
      >
        <div
          className={styles.squash}
          style={{ animation: "tumSquash 1.8s 0.7s backwards" }}
        >
          <div className={`${styles.square}`} />
        </div>
      </div>

      {/* coral ball on the square, with the one permitted face */}
      <div
        className={`${styles.blockWrap} ${styles.ballWrap}`}
        style={{ animation: "tumDrop 1.8s 1.7s backwards" }}
      >
        <div
          className={styles.squash}
          style={{ animation: "tumSquash 1.8s 1.7s backwards" }}
        >
          <div className={styles.ball}>
            <span className={`${styles.eye} ${styles.eyeLeft} ${styles.animBlink}`} />
            <span className={`${styles.eye} ${styles.eyeRight} ${styles.animBlink}`} />
            <span className={styles.mouth} />
          </div>
        </div>
      </div>

      {/* marigold triangle */}
      <div
        className={`${styles.blockWrap} ${styles.triangleWrap}`}
        style={{ animation: "tumDrop 1.8s 1s backwards" }}
      >
        <div
          className={styles.squash}
          style={{ animation: "tumSquash 1.8s 1s backwards" }}
        >
          <div className={styles.triangle} />
        </div>
      </div>

      {/* teal arch */}
      <div
        className={`${styles.blockWrap} ${styles.archWrap}`}
        style={{ animation: "tumDrop 1.8s 1.25s backwards" }}
      >
        <div
          className={styles.squash}
          style={{ animation: "tumSquash 1.8s 1.25s backwards" }}
        >
          <div className={styles.arch} />
        </div>
      </div>

      {/* small cobalt ball rolls in */}
      <div
        className={`${styles.blockWrap} ${styles.smallBallWrap}`}
        style={{ animation: "tumRoll 1s 2.4s backwards" }}
      >
        <div className={styles.smallBall} />
      </div>

      {/* stat blocks sit on the floor too */}
      <div className={styles.stats}>
        <div
          className={styles.statCard}
          style={{ animation: "tumRise 0.8s 2s backwards" }}
        >
          <div className={styles.statNumber}>All ages</div>
          <div className={styles.statLabel}>kids to young adults — and parents</div>
        </div>
        <div
          className={styles.statCard}
          style={{ animation: "tumRise 0.8s 2.15s backwards" }}
        >
          <div className={styles.statNumber}>7 yrs</div>
          <div className={styles.statLabel}>licensed practice</div>
        </div>
      </div>
    </div>
  );
}
