"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Triggers an IntersectionObserver on a given ref element.
 * Adds `visible` class when element enters viewport.
 * Uses Maxima-style spring easing for buttery reveals.
 */
export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.15,
  once = true
) {
  const ref = useRef<T>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          entry.target.classList.remove("visible");
        }
      });
    },
    [once]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleObserver, {
      threshold,
      rootMargin: "0px 0px -60px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleObserver, threshold]);

  return ref;
}
