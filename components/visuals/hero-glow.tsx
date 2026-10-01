"use client";

import { useEffect, useRef } from "react";

const HOME = { x: 0.78, y: 0.42 };

export function HeroGlow() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ ...HOME });
  const target = useRef({ ...HOME });
  const interacting = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const section = root?.parentElement;
    if (!root || !section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const point = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      target.current.x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      target.current.y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
      interacting.current = true;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" && event.buttons === 0) return;
      point(event);
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      point(event);
    };

    const release = (event: PointerEvent) => {
      if (event.type !== "pointerleave" && event.pointerType !== "touch") return;
      interacting.current = false;
    };

    const placeTouch = (touch: Touch) => {
      const rect = section.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      target.current.x = Math.min(1, Math.max(0, (touch.clientX - rect.left) / rect.width));
      target.current.y = Math.min(1, Math.max(0, (touch.clientY - rect.top) / rect.height));
      interacting.current = true;
    };

    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) placeTouch(touch);
    };

    const endTouch = () => {
      interacting.current = false;
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerdown", onDown);
    section.addEventListener("pointerup", release);
    section.addEventListener("pointercancel", release);
    section.addEventListener("pointerleave", release);
    section.addEventListener("touchstart", onTouch, { passive: true });
    section.addEventListener("touchmove", onTouch, { passive: true });
    section.addEventListener("touchend", endTouch);
    section.addEventListener("touchcancel", endTouch);

    let frame = 0;
    const tick = (now: number) => {
      if (!interacting.current) {
        const t = now / 1000;
        target.current.x = Math.min(0.88, Math.max(0.12, 0.5 + Math.sin(t * 0.17) * 0.28 + Math.sin(t * 0.07) * 0.08));
        target.current.y = Math.min(0.8, Math.max(0.16, 0.46 + Math.cos(t * 0.13) * 0.2 + Math.cos(t * 0.05) * 0.06));
      }
      const ease = interacting.current ? 0.2 : 0.035;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;
      root.style.setProperty("--glow-x", `${(pos.current.x * 100).toFixed(2)}%`);
      root.style.setProperty("--glow-y", `${(pos.current.y * 100).toFixed(2)}%`);
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerdown", onDown);
      section.removeEventListener("pointerup", release);
      section.removeEventListener("pointercancel", release);
      section.removeEventListener("pointerleave", release);
      section.removeEventListener("touchstart", onTouch);
      section.removeEventListener("touchmove", onTouch);
      section.removeEventListener("touchend", endTouch);
      section.removeEventListener("touchcancel", endTouch);
    };
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="hero-glow absolute inset-0" />
      <div
        className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl sm:h-72 sm:w-72"
        style={{ left: "var(--glow-x, 78%)", top: "var(--glow-y, 42%)" }}
      />
    </div>
  );
}
