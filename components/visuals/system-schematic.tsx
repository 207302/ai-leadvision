export function SystemSchematic() {
  const nodes = [
    { x: 168, y: 292, label: "ATTN" },
    { x: 292, y: 118, label: "VOICE" },
    { x: 512, y: 150, label: "CHAT" },
    { x: 548, y: 318, label: "VISION" },
    { x: 430, y: 458, label: "ML" },
    { x: 236, y: 430, label: "SOFT" },
  ];

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[560px]">
      <svg
        viewBox="0 0 620 520"
        role="img"
        aria-label="Abstract system diagram linking attendance, voice, chat, vision, machine learning, and software."
        className="h-auto w-full"
      >
        <defs>
          <pattern id="dot-grid" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="rgba(255,255,255,0.16)" />
          </pattern>
        </defs>

        <rect x="0.5" y="0.5" width="619" height="519" rx="18" fill="#0c1220" stroke="rgba(255,255,255,0.12)" />
        <rect x="1" y="1" width="618" height="518" rx="18" fill="url(#dot-grid)" />

        <g fill="none" stroke="rgba(143,216,234,0.22)" strokeWidth="1">
          <circle cx="390" cy="268" r="72" />
          <circle cx="390" cy="268" r="124" className="dash-shift" stroke="rgba(143,216,234,0.45)" />
        </g>

        {nodes.map((node) => (
          <line
            key={node.label}
            x1="390"
            y1="268"
            x2={node.x}
            y2={node.y}
            stroke="rgba(143,216,234,0.35)"
            strokeWidth="1"
          />
        ))}

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

        <rect x="362" y="240" width="56" height="56" rx="8" fill="#07090f" stroke="#8fd8ea" />
        <text x="390" y="273" textAnchor="middle" fill="white" fontSize="13" fontFamily="ui-sans-serif, system-ui">
          SYS
        </text>

        {nodes.map((node) => (
          <g key={node.label}>
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
