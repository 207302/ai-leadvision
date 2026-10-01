"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, type ReactNode } from "react";

const BLOCK = "h1, h2, h3, h4, p, li, dt, dd, label, button, blockquote";
const MEDIA = "svg, iframe, video, canvas, img";

function shown(node: Element): node is HTMLElement {
  return node instanceof HTMLElement && !node.closest("[hidden]");
}

function collect(root: HTMLElement) {
  const blocks = Array.from(root.querySelectorAll(BLOCK)).filter(shown);
  const text = blocks.filter((node) => !node.parentElement?.closest(BLOCK));
  const media = Array.from(root.querySelectorAll(MEDIA)).filter(
    (node) => shown(node) && !node.closest(BLOCK),
  );
  const links = Array.from(root.querySelectorAll("a")).filter(
    (node) => shown(node) && !node.closest(BLOCK) && !node.querySelector(BLOCK),
  );

  return [...text, ...links, ...media].sort((a, b) => {
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
    if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
    return 0;
  });
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const origin = useRef<number | null>(null);
  if (origin.current === null) origin.current = Date.now();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = collect(root);
    if (reduce || nodes.length === 0) return;

    const started = origin.current ?? Date.now();
    const played = new WeakSet<HTMLElement>();
    let step = 0;

    const play = (node: HTMLElement) => {
      if (played.has(node)) return;
      played.add(node);
      const wait = Math.max(0, 2450 - (Date.now() - started));
      const delay = wait + Math.min(step * 75, 700);
      step += 1;
      node.style.animation = "none";
      void node.offsetWidth;
      node.style.animation = `page-enter 1.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`;
      node.addEventListener(
        "animationend",
        (event) => {
          if (event.target !== node || event.animationName !== "page-enter") return;
          node.style.animation = "";
          node.style.opacity = "";
          node.style.transform = "";
        },
        { once: true },
      );
    };

    const viewBottom = window.innerHeight + 72;
    const later: HTMLElement[] = [];

    nodes.forEach((node) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(42px)";
      const rect = node.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < viewBottom) play(node);
      else later.push(node);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) return;
          play(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -4% 0px" },
    );

    later.forEach((node) => observer.observe(node));

    const changes = new MutationObserver(() => {
      collect(root).forEach((node) => {
        if (played.has(node)) return;
        const rect = node.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return;
        node.style.opacity = "0";
        node.style.transform = "translateY(42px)";
        if (rect.bottom > 0 && rect.top < window.innerHeight + 72) play(node);
        else observer.observe(node);
      });
    });

    changes.observe(root, { subtree: true, attributes: true, attributeFilter: ["hidden"] });

    return () => {
      observer.disconnect();
      changes.disconnect();
    };
  }, [pathname]);

  return (
    <div key={pathname} ref={rootRef}>
      {children}
    </div>
  );
}
