"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BlockWordmark from "./BlockWordmark";
import Triangle from "./Triangle";
import styles from "./Nav.module.css";

export type ActivePage = "home" | "evaluations" | "contact";

type ShapeKind = "triangle" | "square" | "ball" | "arch";

// Services and About are anchors on the Home page; Evaluations and
// Contact are standalone routes and can show as "active".
// Each item's shape/color mirrors the matching block in the logo.
const NAV_ITEMS: {
  key: string;
  label: string;
  href: string;
  page?: ActivePage;
  shape: ShapeKind;
}[] = [
  { key: "services", label: "Services", href: "/#services", shape: "triangle" },
  { key: "evaluations", label: "Evaluations", href: "/evaluations", page: "evaluations", shape: "square" },
  { key: "about", label: "About", href: "/#about", shape: "ball" },
  { key: "contact", label: "Contact", href: "/contact", page: "contact", shape: "arch" },
];

const SCROLL_THRESHOLD = 40;

function NavShape({ shape }: { shape: ShapeKind }) {
  return (
    <span className={styles.shapeSlot} aria-hidden="true">
      {shape === "triangle" ? (
        <Triangle width={28} height={25} color="var(--color-marigold)" strokeWidth={2} />
      ) : (
        <span className={`${styles.shape} ${styles[shape]}`} />
      )}
    </span>
  );
}

type NavProps = {
  active?: ActivePage;
};

export default function Nav({ active = "home" }: NavProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brandLink} aria-label="Kait Kearney, PhD — home">
          <BlockWordmark />
        </Link>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) =>
            item.page && active === item.page ? (
              <span
                key={item.key}
                className={`${styles.active} ${styles[item.key]}`}
                aria-current="page"
              >
                <NavShape shape={item.shape} />
                <span className={styles.label}>{item.label}</span>
              </span>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.link} ${styles[item.key]}`}
              >
                <NavShape shape={item.shape} />
                <span className={styles.label}>{item.label}</span>
              </Link>
            )
          )}
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={styles.menuToggleBars} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-nav-panel" className={styles.mobilePanel}>
          {NAV_ITEMS.map((item) =>
            item.page && active === item.page ? (
              <span
                key={item.key}
                className={`${styles.mobileActive} ${styles[item.key]}`}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
