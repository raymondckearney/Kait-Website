"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./HeroBlocks.module.css";

const MOBILE_QUERY = "(max-width: 899px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type ShapeConfig = {
  outer: HTMLDivElement | null;
  squash: HTMLDivElement | null;
  navShape: "square" | "ball" | "triangle" | "arch";
  delay: number;
};

/** Home-only hero composition: toy blocks drop in and land on the floor line. */
export default function HeroBlocks() {
  const squareOuterRef = useRef<HTMLDivElement>(null);
  const squareSquashRef = useRef<HTMLDivElement>(null);
  const ballOuterRef = useRef<HTMLDivElement>(null);
  const ballSquashRef = useRef<HTMLDivElement>(null);
  const triangleOuterRef = useRef<HTMLDivElement>(null);
  const triangleSquashRef = useRef<HTMLDivElement>(null);
  const archOuterRef = useRef<HTMLDivElement>(null);
  const archSquashRef = useRef<HTMLDivElement>(null);
  const smallBallOuterRef = useRef<HTMLDivElement>(null);
  const triangleClipId = useId();

  useEffect(() => {
    const isMobile = window.matchMedia(MOBILE_QUERY).matches;
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    if (!isMobile || reducedMotion) return;

    // On mobile the blocks sit in a static flex row rather than being
    // absolutely positioned on the right of a tall hero, so the desktop
    // tumDrop (falling from 620px above) has nowhere motivated to fall
    // from and just looks like it's hovering in from nowhere. Instead,
    // make each block fly out from its matching mini shape in the nav
    // logo, so the motion reads as "the logo is making these."
    const shapes: ShapeConfig[] = [
      { outer: squareOuterRef.current, squash: squareSquashRef.current, navShape: "square", delay: 0.1 },
      { outer: triangleOuterRef.current, squash: triangleSquashRef.current, navShape: "triangle", delay: 0.25 },
      { outer: archOuterRef.current, squash: archSquashRef.current, navShape: "arch", delay: 0.4 },
      { outer: ballOuterRef.current, squash: ballSquashRef.current, navShape: "ball", delay: 0.55 },
      { outer: smallBallOuterRef.current, squash: null, navShape: "square", delay: 0.85 },
    ];

    for (const { outer, squash, navShape, delay } of shapes) {
      if (!outer) continue;
      const logo = document.querySelector<HTMLElement>(`nav [data-shape="${navShape}"]`);
      if (!logo) continue;

      const logoRect = logo.getBoundingClientRect();
      const elRect = outer.getBoundingClientRect();
      if (elRect.width === 0 || elRect.height === 0) continue;

      const dx = logoRect.left + logoRect.width / 2 - (elRect.left + elRect.width / 2);
      const dy = logoRect.top + logoRect.height / 2 - (elRect.top + elRect.height / 2);
      const scale = Math.min(0.5, Math.max(0.14, logoRect.width / elRect.width));

      outer.style.setProperty("--fly-x", `${dx}px`);
      outer.style.setProperty("--fly-y", `${dy}px`);
      outer.style.setProperty("--fly-scale", `${scale}`);
      outer.style.animation = `tumFlyFromLogo 0.95s ${delay}s cubic-bezier(0.22, 1, 0.34, 1) backwards`;

      if (squash) squash.style.animation = "none";
    }
  }, []);

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
        ref={squareOuterRef}
        className={`${styles.blockWrap} ${styles.squareWrap}`}
        style={{ animation: "tumDrop 1.8s 0.7s backwards" }}
      >
        <div
          ref={squareSquashRef}
          className={styles.squash}
          style={{ animation: "tumSquash 1.8s 0.7s backwards" }}
        >
          <div className={`${styles.square}`} />
        </div>
      </div>

      {/* coral ball on the square, with the one permitted face */}
      <div
        ref={ballOuterRef}
        className={`${styles.blockWrap} ${styles.ballWrap}`}
        style={{ animation: "tumDrop 1.8s 1.7s backwards" }}
      >
        <div
          ref={ballSquashRef}
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
        ref={triangleOuterRef}
        className={`${styles.blockWrap} ${styles.triangleWrap}`}
        style={{ animation: "tumDrop 1.8s 1s backwards" }}
      >
        <div
          ref={triangleSquashRef}
          className={styles.squash}
          style={{ animation: "tumSquash 1.8s 1s backwards" }}
        >
          <svg className={styles.triangle} viewBox="0 0 88 78" aria-hidden="true">
            <defs>
              <clipPath id={triangleClipId}>
                <polygon points="44,1.5 2.5,76.5 85.5,76.5" />
              </clipPath>
            </defs>
            <polygon
              points="44,1.5 2.5,76.5 85.5,76.5"
              fill="var(--color-marigold)"
              stroke="var(--color-ink)"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
            <g clipPath={`url(#${triangleClipId})`}>
              <polygon
                points="44,1.5 2.5,76.5 85.5,76.5"
                fill="rgba(0,0,0,0.12)"
                transform="translate(7,8)"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* teal arch */}
      <div
        ref={archOuterRef}
        className={`${styles.blockWrap} ${styles.archWrap}`}
        style={{ animation: "tumDrop 1.8s 1.25s backwards" }}
      >
        <div
          ref={archSquashRef}
          className={styles.squash}
          style={{ animation: "tumSquash 1.8s 1.25s backwards" }}
        >
          <div className={styles.arch} />
        </div>
      </div>

      {/* small cobalt ball rolls in */}
      <div
        ref={smallBallOuterRef}
        className={`${styles.blockWrap} ${styles.smallBallWrap}`}
        style={{ animation: "tumRoll 1s 2.4s backwards" }}
      >
        <div className={styles.smallBall} />
      </div>

      {/* stat block sits on the floor too */}
      <div className={styles.stats}>
        <div
          className={styles.statCard}
          style={{ animation: "tumRise 0.8s 2s backwards" }}
        >
          <div className={styles.statNumber}>All ages</div>
          <div className={styles.statLabel}>children to young adults — and parents</div>
        </div>
      </div>
    </div>
  );
}
