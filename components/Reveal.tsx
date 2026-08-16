"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ComponentPropsWithoutRef,
  type CSSProperties,
} from "react";

type RevealOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
  style?: CSSProperties;
};

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

/**
 * Scroll-reveal wrapper: fade + 28px rise on entering the viewport.
 * Mirrors the mockups' data-reveal IntersectionObserver behavior —
 * elements already in view on load render normally; elements below
 * the fold start hidden and animate in once 15% visible.
 */
export default function Reveal<T extends ElementType = "div">({
  as,
  children,
  className,
  style,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(true);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const startsOffscreen = rect.top > window.innerHeight * 0.92;

    if (!startsOffscreen) {
      setVisible(true);
      return;
    }

    setVisible(false);
    setArmed(true);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  const revealStyle: CSSProperties = armed
    ? {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition:
          "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        ...style,
      }
    : style ?? {};

  return (
    <Tag ref={ref} className={className} style={revealStyle} {...rest}>
      {children}
    </Tag>
  );
}
