"use client";

import { useEffect, useId, useRef } from "react";

const center = { x: 390, y: 268 };
const nodes = [
  { x: 168, y: 292, label: "ATTN" },
  { x: 292, y: 118, label: "VOICE" },
  { x: 512, y: 150, label: "CHAT" },
  { x: 548, y: 318, label: "VISION" },
  { x: 430, y: 458, label: "ML" },
  { x: 236, y: 430, label: "SOFT" },
];

// Dashes travel 280 units in 32s around the radius-124 ring. This is one full turn at that speed.
const orbitDuration = `${(32 * 2 * Math.PI * 124) / 280}s`;

export function SystemSchematic() {
  const svgRef = useRef<SVGSVGElement>(null);
  const titleId = useId();

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (motion.matches) svg.pauseAnimations();
      else svg.unpauseAnimations();
    };
    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, []);

  return (
    <div className="relative mx-auto w-full min-w-0">
      <svg
        ref={svgRef}
        viewBox="0 0 620 520"
        role="img"
        aria-labelledby={titleId}
        className="h-auto w-full"
      >
        <title id={titleId}>
          Abstract system diagram linking attendance, voice, chat, vision, machine learning, and software.
        </title>
        <defs>
          <pattern id="dot-grid" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,255,0.16)" />
          </pattern>
        </defs>

        <rect x="0.5" y="0.5" width="619" height="519" rx="18" fill="#0c1220" stroke="rgba(255,255,255,0.12)" />
        <rect x="1" y="1" width="618" height="518" rx="18" fill="url(#dot-grid)" />

        <g fill="none" stroke="rgba(143,216,234,0.22)" strokeWidth="1">
          <circle cx={center.x} cy={center.y} r="72" />
          <circle cx={center.x} cy={center.y} r="124" className="dash-shift" stroke="rgba(143,216,234,0.45)" />
        </g>

        <g>
          <path
            d="M36 36h28M36 36v28M196 36h-28M196 36v28M196 168h-28M196 168v-28M36 168h28M36 168v-28"
            fill="none"
            stroke="#8fd8ea"
            strokeWidth="1.4"
          />
          <rect x="58" y="62" width="78" height="46" rx="2" fill="none" stroke="rgba(255,255,255,0.55)" />
          <rect x="108" y="86" width="64" height="40" rx="2" fill="none" stroke="#1a5fd4" strokeWidth="1.4" />
          <text x="58" y="58" fill="#8fd8ea" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="1.4">
            FRAME
          </text>
          <text x="66" y="90" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="ui-monospace, monospace">
            01
          </text>
          <text x="116" y="112" fill="#8fd8ea" fontSize="10" fontFamily="ui-monospace, monospace">
            02
          </text>
        </g>

        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${center.x} ${center.y}`}
            to={`-360 ${center.x} ${center.y}`}
            dur={orbitDuration}
            repeatCount="indefinite"
          />
          {nodes.map((node) => (
            <line
              key={node.label}
              x1={center.x}
              y1={center.y}
              x2={node.x}
              y2={node.y}
              stroke="rgba(143,216,234,0.35)"
              strokeWidth="1"
            />
          ))}
          {nodes.map((node) => (
            <g key={node.label}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${node.x} ${node.y}`}
                to={`360 ${node.x} ${node.y}`}
                dur={orbitDuration}
                repeatCount="indefinite"
              />
              <circle cx={node.x} cy={node.y} r="5" fill="#07090f" stroke="#8fd8ea" strokeWidth="1.4" />
              <text
                x={node.x}
                y={node.y - 16}
                textAnchor="middle"
                fill="rgba(255,255,255,0.78)"
                fontSize="11"
                fontFamily="ui-monospace, monospace"
                letterSpacing="1.2"
              >
                {node.label}
              </text>
            </g>
          ))}
        </g>

        <circle cx={center.x} cy={center.y} r="28" fill="#07090f" stroke="#8fd8ea" />
        <text
          x={center.x}
          y={center.y}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="13"
          fontFamily="ui-sans-serif, system-ui"
        >
          SYS
        </text>

        <g transform="translate(40 390)">
          <text fill="#8fd8ea" fontSize="10" fontFamily="ui-monospace, monospace" letterSpacing="1.6">
            SIGNAL
          </text>
          {[16, 28, 20, 36, 24, 32, 18].map((height, index) => (
            <rect
              key={`${height}-${index}`}
              x={index * 14}
              y={56 - height}
              width="7"
              height={height}
              fill={index === 3 ? "#1a5fd4" : "rgba(143,216,234,0.7)"}
            />
          ))}
        </g>

        <text
          x="36"
          y="492"
          fill="rgba(255,255,255,0.5)"
          fontSize="11"
          fontFamily="ui-monospace, monospace"
          letterSpacing="1.6"
        >
          ALV-SYS  ·  06 LINKS
        </text>
      </svg>
    </div>
  );
}
