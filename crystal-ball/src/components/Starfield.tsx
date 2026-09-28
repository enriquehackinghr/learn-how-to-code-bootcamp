const STARS = [
  { top: "8%", left: "12%", size: 2, delay: "0s" },
  { top: "15%", left: "78%", size: 3, delay: "1.2s" },
  { top: "22%", left: "45%", size: 2, delay: "0.4s" },
  { top: "35%", left: "8%", size: 2, delay: "2s" },
  { top: "42%", left: "92%", size: 2, delay: "0.8s" },
  { top: "55%", left: "25%", size: 3, delay: "1.6s" },
  { top: "62%", left: "68%", size: 2, delay: "0.2s" },
  { top: "72%", left: "15%", size: 2, delay: "1s" },
  { top: "78%", left: "82%", size: 3, delay: "2.4s" },
  { top: "88%", left: "50%", size: 2, delay: "0.6s" },
];

export function Starfield() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {STARS.map((star, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(107,76,230,0.25)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(45,212,191,0.08)_0%,_transparent_50%)]" />
    </div>
  );
}
