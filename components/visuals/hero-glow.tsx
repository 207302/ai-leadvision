"use client";

import { useEffect, useRef } from "react";

const HOME = { x: 0.78, y: 0.42 };

export function HeroGlow() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ ...HOME });
  const target = useRef({ ...HOME });
  const interacting = useRef(false);
  const velocity = useRef({ x: 0, y: 0 });
  const heading = useRef(0);
  const stretch = useRef(0);
  const blobRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

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
      const previousX = pos.current.x;
      const previousY = pos.current.y;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;
      velocity.current.x += (pos.current.x - previousX - velocity.current.x) * 0.18;
      velocity.current.y += (pos.current.y - previousY - velocity.current.y) * 0.18;

      const speed = Math.hypot(velocity.current.x, velocity.current.y);
      if (speed > 0.0008) {
        const next = Math.atan2(velocity.current.y, velocity.current.x);
        let turn = next - heading.current;
        if (turn > Math.PI) turn -= Math.PI * 2;
        if (turn < -Math.PI) turn += Math.PI * 2;
        heading.current += turn * 0.18;
      }
      const stretchTarget = Math.min(0.95, speed * (interacting.current ? 70 : 36));
      stretch.current += (stretchTarget - stretch.current) * 0.12;

      const seconds = now / 1000;
      const breathe = Math.sin(seconds * 0.65) * 0.07;
      const scaleX = 1 + stretch.current + breathe;
      const scaleY = Math.max(0.45, 1 - stretch.current * 0.5 - breathe * 0.55);
      const degrees = (heading.current * 180) / Math.PI;
      const trail = 28 + stretch.current * 110;
      const lobe = 22 + Math.sin(seconds * 0.85) * 18;

      root.style.setProperty("--glow-x", `${(pos.current.x * 100).toFixed(2)}%`);
      root.style.setProperty("--glow-y", `${(pos.current.y * 100).toFixed(2)}%`);
      root.style.setProperty("--glow-rx", `${(42 + stretch.current * 34 + Math.sin(seconds * 0.5) * 4).toFixed(1)}%`);
      root.style.setProperty("--glow-ry", `${(36 - stretch.current * 14 + Math.cos(seconds * 0.45) * 3).toFixed(1)}%`);

      const blob = blobRef.current;
      const tail = trailRef.current;
      if (blob) {
        blob.style.left = `${(pos.current.x * 100).toFixed(2)}%`;
        blob.style.top = `${(pos.current.y * 100).toFixed(2)}%`;
        const lead = 50 + stretch.current * 18;
        const waist = 42 - stretch.current * 10 + Math.sin(seconds * 0.9) * 6;
        blob.style.borderRadius = `${lead.toFixed(1)}% ${waist.toFixed(1)}% ${(58 - stretch.current * 8).toFixed(1)}% ${(48 + Math.cos(seconds * 0.7) * 7).toFixed(1)}% / ${(46 + breathe * 40).toFixed(1)}% ${lead.toFixed(1)}% ${waist.toFixed(1)}% 54%`;
        blob.style.transform = `translate(-50%, -50%) rotate(${degrees.toFixed(1)}deg) scale(${scaleX.toFixed(3)}, ${scaleY.toFixed(3)})`;
      }
      if (tail) {
        tail.style.left = `${(pos.current.x * 100).toFixed(2)}%`;
        tail.style.top = `${(pos.current.y * 100).toFixed(2)}%`;
        tail.style.transform = `translate(-50%, -50%) translate(${(-Math.cos(heading.current) * trail).toFixed(1)}px, ${(-Math.sin(heading.current) * trail).toFixed(1)}px) scale(${(0.62 + Math.sin(seconds * 0.8) * 0.08).toFixed(3)}, ${(0.8 + lobe / 140).toFixed(3)})`;
      }
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
        ref={blobRef}
        className="absolute h-64 w-64 rounded-[46%_58%_42%_54%/52%_40%_60%_48%] bg-accent/25 blur-3xl sm:h-72 sm:w-72"
        style={{ left: "78%", top: "42%" }}
      />
      <div
        ref={trailRef}
        className="absolute h-36 w-48 rounded-[60%_40%_55%_45%/48%_62%_38%_52%] bg-accent/20 blur-3xl sm:h-40 sm:w-56"
        style={{ left: "78%", top: "42%" }}
      />
    </div>
  );
}
