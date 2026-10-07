"use client";

import { useEffect, useRef, useState } from "react";
import { capabilities } from "@/lib/content/services";

const BEHIND = 3;
const SWIPE_STEP = 48;

export function TechnologyPanel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = capabilities.length;
  const stageRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: number; y: number } | null>(null);
  const dragged = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % count);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [count, paused]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let locked = false;
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      if (locked) return;
      locked = true;
      const direction = event.deltaY > 0 ? 1 : -1;
      setActive((value) => (value + direction + count) % count);
      window.setTimeout(() => {
        locked = false;
      }, 460);
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [count]);

  function move(direction: number) {
    setActive((value) => (value + direction + count) % count);
  }

  return (
    <div
      className="enter-box relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-navy text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative px-5 py-8 sm:px-8 sm:py-10">
        <div
          ref={stageRef}
          className="relative mx-auto h-[240px] max-w-lg cursor-grab touch-none select-none active:cursor-grabbing"
          onPointerDown={(event) => {
            if (event.button !== 0) return;
            drag.current = { id: event.pointerId, y: event.clientY };
            dragged.current = false;
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            const current = drag.current;
            if (!current || current.id !== event.pointerId) return;
            const delta = event.clientY - current.y;
            if (Math.abs(delta) < 8) return;
            dragged.current = true;
            if (Math.abs(delta) < SWIPE_STEP) return;
            current.y = event.clientY;
            move(delta < 0 ? 1 : -1);
          }}
          onPointerUp={() => {
            drag.current = null;
          }}
          onPointerCancel={() => {
            drag.current = null;
          }}
        >
          {capabilities.map((item, index) => {
            const offset = (active - index + count) % count;
            const next = offset === count - 1;
            const behind = offset > 0 && offset <= BEHIND;
            const hidden = offset > BEHIND && !next;
            const depth = behind ? offset : 0;
            const y = next ? 168 : behind ? (BEHIND - depth) * 36 : BEHIND * 36;
            const scale = next ? 0.98 : behind ? 1 - depth * 0.03 : 1;

            return (
              <button
                key={item.title}
                type="button"
                aria-current={offset === 0 ? "true" : undefined}
                aria-label={item.title}
                className="absolute inset-x-4 top-0 origin-top touch-none rounded-xl border px-4 py-2.5 text-left transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:inset-x-8"
                style={{
                  transform: `translateY(${y}px) scale(${scale})`,
                  opacity: hidden || next ? 0 : behind ? 0.92 - depth * 0.16 : 1,
                  zIndex: hidden || next ? 0 : 20 - depth,
                  pointerEvents: offset === 0 || behind ? "auto" : "none",
                  borderColor: offset === 0 ? "rgba(143,216,234,0.45)" : "rgba(255,255,255,0.12)",
                  background: offset === 0 ? "rgba(16,22,34,0.96)" : "rgba(12,18,32,0.94)",
                  boxShadow: offset === 0 ? "0 16px 36px rgba(0,0,0,0.35)" : undefined,
                }}
                onClick={() => {
                  if (dragged.current) {
                    dragged.current = false;
                    return;
                  }
                  setActive(index);
                }}
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-heading text-sm tracking-tight text-white sm:text-base">{item.title}</span>
                </span>
                <p
                  className={`overflow-hidden text-sm leading-6 text-white/70 transition-[max-height,opacity,margin] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                    offset === 0 ? "mt-2 max-h-24 opacity-100" : "mt-0 max-h-0 opacity-0"
                  }`}
                >
                  {item.text}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
