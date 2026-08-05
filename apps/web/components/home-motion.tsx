"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduced) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    nodes.forEach((node) => observer.observe(node));

    const hero = document.querySelector<HTMLElement>(".home-hero, .catalog-hero");
    let animationFrame = 0;
    const handlePointer = (event: PointerEvent) => {
      if (!hero || event.pointerType === "touch") return;
      cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
        const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
        hero.style.setProperty("--pointer-x", x.toFixed(3));
        hero.style.setProperty("--pointer-y", y.toFixed(3));
      });
    };
    hero?.addEventListener("pointermove", handlePointer, { passive: true });

    return () => {
      observer.disconnect();
      hero?.removeEventListener("pointermove", handlePointer);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  return null;
}
