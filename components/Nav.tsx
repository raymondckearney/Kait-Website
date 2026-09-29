"use client";

import { useState } from "react";
import Link from "next/link";
import BlockWordmark from "./BlockWordmark";
import styles from "./Nav.module.css";

export type ActivePage = "home" | "services" | "evaluations" | "about" | "contact";

const NAV_ITEMS: { key: ActivePage; label: string; href: string }[] = [
  { key: "services", label: "Services", href: "/services" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
];

type NavProps = {
  active: ActivePage;
};

export default function Nav({ active }: NavProps) {
  const [open, setOpen] = useState(false);
  const ctaHref = active === "contact" ? "#form" : "/contact";

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brandLink} aria-label="Kait Kearney, PhD — home">
          <BlockWordmark />
        </Link>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) =>
            active === item.key ? (
              <span
                key={item.key}
                className={`${styles.active} ${styles[item.key]}`}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.link} ${styles[item.key]}`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link href={ctaHref} className={styles.cta}>
            Start with a free call
          </Link>
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
            active === item.key ? (
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
          <Link
            href={ctaHref}
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            Start with a free call
          </Link>
        </div>
      )}
    </nav>
  );
}
