"use client";

import { useEffect } from "react";

/**
 * Intercepts clicks on same-page hash links (e.g. Nav's "/#services" or the
 * hero's "#contact") and smooth-scrolls to the target instead of letting the
 * browser/Next.js jump straight there. Links whose target isn't on the
 * current page (e.g. clicking "Services" from the Evaluations page) are left
 * alone — Next.js navigates to "/" and the browser lands on the anchor
 * normally once that page has loaded.
 */
export default function AnchorScrollHandler() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.slice(0, hashIndex);
      const hash = href.slice(hashIndex + 1);
      if (!hash) return;
      if (path && path !== window.location.pathname) return;

      const target = document.getElementById(hash);
      if (!target) return;

      e.preventDefault();
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", `${path || window.location.pathname}#${hash}`);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
