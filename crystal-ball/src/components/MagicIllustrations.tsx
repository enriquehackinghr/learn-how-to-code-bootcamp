export function ConstellationArt() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="constellation-sky" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#0b0720" />
        </radialGradient>
        <filter id="star-glow">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="320" height="180" rx="16" fill="url(#constellation-sky)" />
      <g stroke="#c4b5fd" strokeOpacity="0.75" strokeWidth="1.2">
        <path d="M70 118 112 72 158 96 206 54" />
        <path d="M158 96 176 132 230 108" />
        <path d="M112 72 146 46" />
      </g>
      {[
        [70, 118],
        [112, 72],
        [146, 46],
        [158, 96],
        [206, 54],
        [176, 132],
        [230, 108],
        [250, 70],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} filter="url(#star-glow)">
          <circle cx={x} cy={y} r="5" fill="#ede9fe" />
          <circle cx={x} cy={y} r="2" fill="white" />
        </g>
      ))}
      <circle cx="70" cy="40" r="1.2" fill="white" opacity="0.7" />
      <circle cx="250" cy="28" r="1.2" fill="#99f6e4" />
      <circle cx="300" cy="120" r="1.1" fill="white" opacity="0.6" />
    </svg>
  );
}

export function CrystalClusterArt() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="cluster-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#042f2e" />
        </linearGradient>
        <linearGradient id="cluster-main" x1="140" y1="20" x2="180" y2="160">
          <stop stopColor="#f5f3ff" />
          <stop offset="0.4" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#4c1d95" />
        </linearGradient>
        <linearGradient id="cluster-side" x1="70" y1="40" x2="120" y2="150">
          <stop stopColor="#ecfeff" />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
        <linearGradient id="cluster-right" x1="220" y1="30" x2="250" y2="150">
          <stop stopColor="#fae8ff" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" rx="16" fill="url(#cluster-bg)" />
      <ellipse cx="160" cy="152" rx="70" ry="10" fill="#2dd4bf" opacity="0.25" />
      <path d="M86 150 104 62 122 78 118 150H86Z" fill="url(#cluster-side)" />
      <path d="M198 150 214 48 240 72 228 150H198Z" fill="url(#cluster-right)" />
      <path d="M132 154 160 16 188 154H132Z" fill="url(#cluster-main)" />
      <path d="M160 28 172 154 160 154 148 70 160 28Z" fill="white" opacity="0.35" />
      <path d="M104 78 112 150 104 150 98 96 104 78Z" fill="white" opacity="0.28" />
      <path d="M214 64 222 150 214 150 208 88 214 64Z" fill="white" opacity="0.3" />
      <circle cx="52" cy="40" r="1.5" fill="white" />
      <circle cx="274" cy="36" r="1.4" fill="#99f6e4" />
      <circle cx="160" cy="16" r="2" fill="white" />
    </svg>
  );
}

export function MoonPathArt() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden>
      <defs>
        <radialGradient id="path-sky" cx="30%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="100%" stopColor="#070512" />
        </radialGradient>
        <radialGradient id="path-moon" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </radialGradient>
      </defs>
      <rect width="320" height="180" rx="16" fill="url(#path-sky)" />
      <circle cx="78" cy="78" r="36" fill="url(#path-moon)" />
      <circle cx="96" cy="68" r="30" fill="#2e1064" />
      <path
        d="M40 142c36-28 62-28 92-8 28 18 58 16 96-18"
        stroke="#5eead4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      {[
        [132, 122],
        [176, 128],
        [220, 112],
        [258, 92],
      ].map(([x, y], index) => (
        <g key={`${x}-${y}`}>
          <circle
            cx={x}
            cy={y}
            r={index === 3 ? 7 : 5}
            fill={index === 3 ? "#99f6e4" : "#ddd6fe"}
          />
          <circle cx={x} cy={y} r="2" fill="white" />
        </g>
      ))}
      <circle cx="250" cy="36" r="1.3" fill="white" />
      <circle cx="210" cy="24" r="1.1" fill="white" opacity="0.7" />
      <circle cx="280" cy="58" r="1.2" fill="#99f6e4" />
    </svg>
  );
}

export function RosterIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <circle cx="10" cy="12" r="3" fill="#99f6e4" />
      <circle cx="22" cy="10" r="3" fill="#ddd6fe" />
      <circle cx="16" cy="20" r="3.2" fill="white" />
      <path
        d="M10 15.2 16 17.2M22 13.2 16 17.2M10 15.2 22 13.2"
        stroke="#c4b5fd"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function SignalIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <path d="M16 4 19 13h9l-7 5 3 9-8-5-8 5 3-9-7-5h9L16 4Z" fill="#f5f3ff" />
    </svg>
  );
}

export function TeamIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <circle cx="16" cy="16" r="10" stroke="#99f6e4" strokeWidth="1.6" fill="none" />
      <circle cx="16" cy="16" r="3" fill="#ddd6fe" />
      <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="#c4b5fd" strokeWidth="1.4" />
    </svg>
  );
}
