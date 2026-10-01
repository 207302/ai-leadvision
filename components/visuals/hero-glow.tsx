"use client";

import { useEffect, useRef } from "react";

const HOME = { x: 0.72, y: 0.4 };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function HeroGlow() {
  const pos = useRef({ ...HOME });
  const target = useRef({ ...HOME });
  const interacting = useRef(false);
  const velocity = useRef({ x: 0, y: 0 });
  const heading = useRef(0);
  const stretch = useRef(0);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    const section = blob?.parentElement?.parentElement ?? null;
    if (!blob || !section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const place = (clientX: number, clientY: number) => {
      const rect = section.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      target.current.x = clamp((clientX - rect.left) / rect.width, 0, 1);
      target.current.y = clamp((clientY - rect.top) / rect.height, 0, 1);
      interacting.current = true;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" && event.buttons === 0) return;
      place(event.clientX, event.clientY);
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      place(event.clientX, event.clientY);
    };

    const release = (event: PointerEvent) => {
      if (event.type !== "pointerleave" && event.pointerType !== "touch") return;
      interacting.current = false;
    };

    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) place(touch.clientX, touch.clientY);
    };

    const endTouch = () => {
      interacting.current = false;
    };

    const hop = () => {
      const angle = Math.random() * Math.PI * 2;
      const step = 0.2 + Math.random() * 0.18;
      target.current.x = clamp(pos.current.x + Math.cos(angle) * step, 0.14, 0.86);
      target.current.y = clamp(pos.current.y + Math.sin(angle) * step, 0.16, 0.78);
    };
    hop();

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
        const remaining = Math.hypot(target.current.x - pos.current.x, target.current.y - pos.current.y);
        if (remaining < 0.045) hop();
      }

      const ease = interacting.current ? 0.22 : 0.055;
      const previousX = pos.current.x;
      const previousY = pos.current.y;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;
      velocity.current.x += (pos.current.x - previousX - velocity.current.x) * 0.2;
      velocity.current.y += (pos.current.y - previousY - velocity.current.y) * 0.2;

      const speed = Math.hypot(velocity.current.x, velocity.current.y);
      if (speed > 0.0008) {
        const next = Math.atan2(velocity.current.y, velocity.current.x);
        let turn = next - heading.current;
        if (turn > Math.PI) turn -= Math.PI * 2;
        if (turn < -Math.PI) turn += Math.PI * 2;
        heading.current += turn * 0.2;
      }

      const stretchTarget = interacting.current ? Math.min(0.7, speed * 90) : 0;
      stretch.current += (stretchTarget - stretch.current) * 0.14;
      const drop = stretch.current;
      const seconds = now / 1000;
      const rough = interacting.current ? 0 : Math.sin(seconds * 0.9) * 2.5;
      const scaleX = 1 + drop * 0.8;
      const scaleY = Math.max(0.72, 1 - drop * 0.22);
      const tail = 50 - drop * 26 + rough;
      const head = 50 + drop * 6 - rough * 0.4;
      const degrees = (heading.current * 180) / Math.PI;

      blob.style.left = `${(pos.current.x * 100).toFixed(2)}%`;
      blob.style.top = `${(pos.current.y * 100).toFixed(2)}%`;
      blob.style.borderRadius = `${tail.toFixed(1)}% ${head.toFixed(1)}% ${head.toFixed(1)}% ${tail.toFixed(1)}% / ${(56 + drop * 10).toFixed(1)}% ${(44 - drop * 6).toFixed(1)}% ${(44 - drop * 6).toFixed(1)}% ${(56 + drop * 10).toFixed(1)}%`;
      blob.style.transform = `translate(-50%, -50%) rotate(${degrees.toFixed(1)}deg) scale(${scaleX.toFixed(3)}, ${scaleY.toFixed(3)})`;
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
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        ref={blobRef}
        className="absolute h-64 w-64 rounded-full bg-accent/25 blur-3xl sm:h-72 sm:w-72"
        style={{ left: "72%", top: "40%" }}
      />
    </div>
  );
}
