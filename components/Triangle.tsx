import type { CSSProperties } from "react";

type TriangleProps = {
  width: number;
  height: number;
  color: string;
  strokeWidth?: number;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Ink-outlined triangle. A plain CSS border-triangle can't take a border or
 * box-shadow (the borders themselves draw the shape), which left every
 * triangle in the site looking flat/2D next to the outlined square/ball/arch
 * blocks. This draws the same shape as an SVG polygon so it can carry a
 * matching ink stroke.
 */
export default function Triangle({
  width,
  height,
  color,
  strokeWidth = 2,
  rotate,
  className,
  style,
}: TriangleProps) {
  const inset = strokeWidth / 2 + 0.5;
  const points = `${width / 2},${inset} ${inset},${height - inset} ${width - inset},${height - inset}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={{
        display: "block",
        overflow: "visible",
        flex: "none",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        ...style,
      }}
      aria-hidden="true"
    >
      <polygon
        points={points}
        fill={color}
        stroke="var(--color-ink)"
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
