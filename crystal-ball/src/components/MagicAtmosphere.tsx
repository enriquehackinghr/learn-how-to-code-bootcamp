const SHOOTING_STARS = [
  { top: "14%", left: "78%", delay: "0s", duration: "7.5s" },
  { top: "32%", left: "92%", delay: "3.2s", duration: "9s" },
  { top: "8%", left: "48%", delay: "5.8s", duration: "8s" },
];

const SPARKLES = [
  { top: "18%", left: "22%", size: 10, delay: "0.2s" },
  { top: "26%", left: "64%", size: 8, delay: "1.4s" },
  { top: "40%", left: "12%", size: 12, delay: "0.8s" },
  { top: "48%", left: "84%", size: 9, delay: "2.1s" },
  { top: "58%", left: "30%", size: 7, delay: "1.1s" },
  { top: "66%", left: "72%", size: 11, delay: "0.4s" },
  { top: "74%", left: "18%", size: 8, delay: "2.6s" },
  { top: "82%", left: "58%", size: 10, delay: "1.8s" },
  { top: "12%", left: "38%", size: 6, delay: "3s" },
  { top: "36%", left: "52%", size: 7, delay: "2.2s" },
];

function Sparkle({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 0.4 7.1 4.9 11.6 6 7.1 7.1 6 11.6 4.9 7.1 0.4 6 4.9 4.9 6 0.4Z"
        fill="white"
      />
    </svg>
  );
}

export function MagicAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="animate-drift absolute -left-24 top-[-4rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.38),transparent_68%)]" />
      <div className="animate-drift-reverse absolute -right-16 top-[18%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.2),transparent_70%)]" />
      <div className="animate-drift absolute bottom-[-6rem] left-[28%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.18),transparent_70%)]" />

      <svg
        className="animate-float absolute right-[7%] top-[16%] hidden w-28 opacity-80 sm:block md:w-36"
        viewBox="0 0 120 120"
        fill="none"
        style={{ animationDuration: "7s" }}
      >
        <defs>
          <radialGradient id="moon-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ddd6fe" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="58" fill="url(#moon-halo)" />
        <path
          d="M78 22c-18 4-32 22-32 42 0 16 8 30 20 38-22 2-44-16-44-42C22 32 46 14 78 22Z"
          fill="#efe9ff"
        />
        <circle cx="28" cy="30" r="1.6" fill="white" />
        <circle cx="96" cy="46" r="1.3" fill="#99f6e4" />
        <circle cx="90" cy="86" r="1.5" fill="white" />
      </svg>

      <svg
        className="animate-float absolute bottom-[14%] left-[5%] hidden w-24 opacity-90 md:block"
        viewBox="0 0 100 120"
        fill="none"
        style={{ animationDuration: "6.5s", animationDelay: "0.6s" }}
      >
        <defs>
          <linearGradient id="shard-a" x1="20" y1="0" x2="70" y2="110">
            <stop stopColor="#ddd6fe" />
            <stop offset="0.45" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="shard-b" x1="70" y1="10" x2="30" y2="100">
            <stop stopColor="#ecfeff" />
            <stop offset="1" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
        <path d="M38 8 62 46 28 112 8 58 38 8Z" fill="url(#shard-a)" opacity="0.95" />
        <path d="M58 18 92 52 70 108 46 64 58 18Z" fill="url(#shard-b)" opacity="0.85" />
        <path d="M40 20 52 46 30 70 40 20Z" fill="white" opacity="0.35" />
      </svg>

      {SHOOTING_STARS.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className="animate-shoot absolute h-[2px] w-32 rounded-full bg-gradient-to-r from-transparent via-white to-teal-200 shadow-[0_0_10px_#ddd6fe]"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      {SPARKLES.map((spark) => (
        <span
          key={`${spark.top}-${spark.left}`}
          className="animate-twinkle absolute text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          style={{
            top: spark.top,
            left: spark.left,
            animationDelay: spark.delay,
          }}
        >
          <Sparkle size={spark.size} />
        </span>
      ))}
    </div>
  );
}
