const RISING_SPARKS = [
  { left: "22%", delay: "0s" },
  { left: "46%", delay: "1.2s" },
  { left: "68%", delay: "2.3s" },
  { left: "34%", delay: "0.6s" },
];

export function CrystalBallOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto aspect-square w-56 sm:w-64 md:w-72 ${className}`}
      aria-hidden
    >
      <div className="animate-pulse-glow absolute inset-[-12%] rounded-full bg-violet-500/30 blur-3xl" />

      <div className="animate-spin-slow absolute inset-[-8%]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="rgba(196,181,253,0.55)"
            strokeWidth="0.6"
            strokeDasharray="1.5 3.2"
          />
          <circle cx="50" cy="3.5" r="1.6" fill="#99f6e4" />
          <circle cx="96.5" cy="50" r="1.3" fill="white" />
          <circle cx="50" cy="96.5" r="1.4" fill="#ddd6fe" />
          <circle cx="3.5" cy="50" r="1.2" fill="white" />
        </svg>
      </div>
      <div className="animate-spin-slow-reverse absolute inset-[-2%]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="rgba(45,212,191,0.35)"
            strokeWidth="0.4"
          />
        </svg>
      </div>

      <div className="animate-float relative h-full w-full">
        <div className="animate-orbit absolute inset-[-6%]">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-teal-200 shadow-[0_0_12px_#5eead4]" />
          <span className="absolute bottom-[6%] right-[4%] h-2 w-2 rounded-full bg-violet-200 shadow-[0_0_10px_#c4b5fd]" />
        </div>
        <div className="animate-orbit-reverse absolute inset-[-14%]">
          <span className="absolute right-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
          <span className="absolute bottom-[20%] left-[6%] h-2 w-2 rounded-full bg-fuchsia-200 shadow-[0_0_10px_#f0abfc]" />
        </div>

        <div className="animate-pulse-glow relative h-full w-full overflow-hidden rounded-full border border-white/45 bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.92),rgba(221,214,254,0.55)_16%,rgba(139,92,246,0.5)_40%,rgba(49,46,129,0.88)_62%,rgba(15,118,110,0.45)_100%)] shadow-[inset_0_-28px_40px_rgba(15,5,40,0.55),inset_0_8px_24px_rgba(255,255,255,0.28)]">
          <div className="animate-swirl absolute -inset-[30%] opacity-45 mix-blend-screen bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.05)_30deg,rgba(224,242,254,0.7)_80deg,transparent_130deg,rgba(196,181,253,0.45)_190deg,transparent_240deg,rgba(45,212,191,0.55)_300deg,transparent_345deg)]" />
          <div className="animate-swirl-reverse absolute -inset-[18%] opacity-30 mix-blend-screen bg-[conic-gradient(from_140deg,transparent_0deg,rgba(255,255,255,0.45)_60deg,transparent_120deg,rgba(167,139,250,0.35)_210deg,transparent_300deg)]" />
          <div className="animate-mist absolute inset-x-[14%] bottom-[24%] h-[42%] rounded-full bg-fuchsia-200/25 blur-xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,transparent_42%,rgba(7,5,18,0.38)_100%)]" />
          <div className="absolute left-[22%] top-[14%] h-[20%] w-[26%] rounded-full bg-white/75 blur-[2px]" />
          <div className="absolute inset-[7%] rounded-full border border-white/25" />
          <div className="animate-twinkle absolute left-1/2 top-[47%] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_white,0_0_40px_#c4b5fd]" />
        </div>

        {RISING_SPARKS.map((spark) => (
          <span
            key={spark.left}
            className="animate-rise-spark absolute bottom-[22%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]"
            style={{ left: spark.left, animationDelay: spark.delay }}
          />
        ))}

        <div className="absolute bottom-[2%] left-1/2 h-3 w-[76%] -translate-x-1/2 rounded-[100%] bg-black/55 blur-md" />
        <svg
          className="absolute bottom-0 left-1/2 w-[86%] -translate-x-1/2"
          viewBox="0 0 200 28"
          fill="none"
        >
          <defs>
            <linearGradient id="crystal-stand" x1="0" y1="0" x2="200" y2="0">
              <stop stopColor="#5b21b6" />
              <stop offset="0.5" stopColor="#ddd6fe" />
              <stop offset="1" stopColor="#0f766e" />
            </linearGradient>
          </defs>
          <path
            d="M28 6h144c10 0 18 6 14 16H18C10 12 16 6 28 6Z"
            fill="url(#crystal-stand)"
            opacity="0.95"
          />
          <path d="M70 10h60" stroke="white" strokeOpacity="0.45" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
