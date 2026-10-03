"use client";

import { useId } from "react";
import { useRouter } from "next/navigation";

const center = { x: 390, y: 268 };
const nodes = [
  { x: 168, y: 292, label: "ATTN", name: "Attendance", href: "/products#face-attendance" },
  { x: 292, y: 118, label: "VOICE", name: "Voice", href: "/products#voice-bot" },
  { x: 512, y: 150, label: "CHAT", name: "Chat", href: "/products#chat-bot" },
  { x: 548, y: 318, label: "VISION", name: "Vision", href: "/products#computer-vision" },
  { x: 430, y: 458, label: "ML", name: "Machine learning", href: "/services#machine-learning" },
  { x: 236, y: 430, label: "SOFT", name: "Software", href: "/services#software-development" },
];

export function SystemSchematic() {
  const router = useRouter();
  const titleId = useId();

  return (
    <div className="relative mx-auto w-full min-w-0">
      <svg
        viewBox="0 0 620 520"
        role="img"
        aria-labelledby={titleId}
        className="h-auto w-full"
      >
        <title id={titleId}>
          Diagram of AI Lead Vision systems: attendance, voice, chat, computer vision, machine learning, and software.
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

        <g className="orbit-ring">
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
            <a
              key={node.label}
              href={node.href}
              aria-label={node.name}
              className="schematic-link"
              onClick={(event) => {
                event.preventDefault();
                router.push(node.href);
              }}
            >
              <g transform={`translate(${node.x} ${node.y})`}>
                <g className="orbit-upright">
                  <circle r="22" fill="transparent" />
                  <circle r="5" fill="#07090f" stroke="#8fd8ea" strokeWidth="1.4" />
                  <text
                    y={-16}
                    textAnchor="middle"
                    className="schematic-label"
                    fill="rgba(255,255,255,0.78)"
                    fontSize="11"
                    fontFamily="ui-monospace, monospace"
                    letterSpacing="1.2"
                  >
                    {node.label}
                  </text>
                  <text
                    y={16}
                    textAnchor="middle"
                    fill="transparent"
                    fontSize="11"
                    fontFamily="ui-monospace, monospace"
                    letterSpacing="1.2"
                    aria-hidden="true"
                  >
                    {node.label}
                  </text>
                </g>
              </g>
            </a>
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
