"use client";

import { useEffect } from "react";

export function LazyBackgrounds() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-lazy-bg]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("bg-loaded"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("bg-loaded");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "600px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
