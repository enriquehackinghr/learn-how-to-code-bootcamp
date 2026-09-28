import Link from "next/link";
import { CrystalBallOrb } from "@/components/CrystalBallOrb";
import { Starfield } from "@/components/Starfield";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <Starfield />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-[family-name:var(--font-cinzel)] text-lg font-semibold tracking-[0.15em] text-violet-100">
          CRYSTAL BALL
        </span>
        <Link
          href="/dashboard"
          className="font-[family-name:var(--font-cinzel)] rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-100 transition hover:border-teal-400/50 hover:bg-teal-500/10 hover:text-teal-100"
        >
          Dashboard
        </Link>
      </header>

      <main className="relative z-10 mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center px-6 pb-20 pt-4 text-center sm:px-10">
        <CrystalBallOrb className="mb-10" />

        <p className="font-[family-name:var(--font-cinzel)] text-xs uppercase tracking-[0.35em] text-teal-300/80">
          Workforce planning, revealed
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-cinzel)] text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-white to-teal-200 sm:text-5xl md:text-6xl">
          See your team&apos;s future
        </h1>

        <p className="mt-6 max-w-xl text-xl leading-relaxed text-violet-100/75 sm:text-2xl">
          Crystal Ball helps growing companies plan headcount, spot talent
          risks, and align performance data—before the future catches you off
          guard.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/dashboard"
            className="font-[family-name:var(--font-cinzel)] inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-700 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-violet-900/40 transition hover:from-violet-500 hover:to-indigo-600"
          >
            Dashboard
          </Link>
          <a
            href="#features"
            className="font-[family-name:var(--font-cinzel)] inline-flex items-center justify-center rounded-full border border-white/15 px-10 py-4 text-sm uppercase tracking-[0.2em] text-violet-100/80 transition hover:border-white/30 hover:text-white"
          >
            Learn more
          </a>
        </div>

        <ul
          id="features"
          className="mt-20 grid w-full max-w-2xl gap-6 text-left sm:grid-cols-3"
        >
          {[
            {
              title: "Roster clarity",
              body: "Import your employee roster and see your organization at a glance.",
            },
            {
              title: "Performance signals",
              body: "Bring in review ratings to inform succession and growth plans.",
            },
            {
              title: "Built for SMBs",
              body: "Simple uploads, no enterprise bloat—planning that fits your team.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <h2 className="font-[family-name:var(--font-cinzel)] text-sm font-semibold text-teal-200">
                {item.title}
              </h2>
              <p className="mt-2 text-base text-violet-100/65">{item.body}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-6 text-center text-sm text-white/35">
        © {new Date().getFullYear()} Crystal Ball · Workforce planning for
        teams that look ahead
      </footer>
    </div>
  );
}
