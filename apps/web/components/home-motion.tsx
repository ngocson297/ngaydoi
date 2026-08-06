"use client";

import { useEffect } from "react";

type NavigatorPerformanceHints = Navigator & { deviceMemory?: number };

export function HomeMotion() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const navigatorHints = navigator as NavigatorPerformanceHints;
    const lowPowerDevice = (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4)
      || (typeof navigatorHints.deviceMemory === "number" && navigatorHints.deviceMemory <= 4);
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const hero = document.querySelector<HTMLElement>(".home-hero, .catalog-hero");
    let observer: IntersectionObserver | null = null;
    let animationFrame = 0;

    const revealAll = () => nodes.forEach((node) => node.classList.add("is-visible"));
    const resetParallax = () => {
      hero?.style.removeProperty("--pointer-x");
      hero?.style.removeProperty("--pointer-y");
    };
    const syncPerformanceMode = () => {
      const limitedMotion = motionQuery.matches || lowPowerDevice || mobileQuery.matches;
      document.documentElement.classList.toggle("home-motion-lite", limitedMotion);
      document.documentElement.classList.toggle("page-is-hidden", document.hidden);
      if (limitedMotion || document.hidden) resetParallax();
    };
    const handlePointer = (event: PointerEvent) => {
      if (!hero || motionQuery.matches || !pointerQuery.matches || mobileQuery.matches || lowPowerDevice || document.hidden) return;
      cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
        const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
        hero.style.setProperty("--pointer-x", x.toFixed(3));
        hero.style.setProperty("--pointer-y", y.toFixed(3));
      });
    };
    const setup = () => {
      observer?.disconnect();
      observer = null;
      syncPerformanceMode();
      if (motionQuery.matches || !("IntersectionObserver" in window)) {
        revealAll();
      } else {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        }, { threshold: 0.08, rootMargin: "120px 0px -30px" });
        nodes.forEach((node) => observer?.observe(node));
      }
    };
    const onVisibility = () => syncPerformanceMode();

    setup();
    hero?.addEventListener("pointermove", handlePointer, { passive: true });
    motionQuery.addEventListener("change", setup);
    pointerQuery.addEventListener("change", setup);
    mobileQuery.addEventListener("change", setup);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer?.disconnect();
      hero?.removeEventListener("pointermove", handlePointer);
      motionQuery.removeEventListener("change", setup);
      pointerQuery.removeEventListener("change", setup);
      mobileQuery.removeEventListener("change", setup);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(animationFrame);
      resetParallax();
      document.documentElement.classList.remove("home-motion-lite", "page-is-hidden");
    };
  }, []);
  return null;
}
