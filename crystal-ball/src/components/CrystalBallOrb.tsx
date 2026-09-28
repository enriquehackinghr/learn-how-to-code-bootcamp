export function CrystalBallOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative mx-auto aspect-square w-48 sm:w-56 md:w-64 ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-3xl animate-pulse-glow" />
      <div className="animate-float relative h-full w-full">
        <div className="animate-pulse-glow relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-violet-500/40 via-indigo-900/60 to-teal-500/30 backdrop-blur-sm">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-60" />
          <div className="absolute left-[28%] top-[22%] h-[18%] w-[22%] rounded-full bg-white/40 blur-[2px]" />
          <div className="absolute inset-x-[15%] bottom-[18%] h-[35%] rounded-full bg-gradient-to-t from-violet-900/50 to-transparent" />
        </div>
        <div className="absolute -bottom-2 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-md" />
      </div>
    </div>
  );
}
