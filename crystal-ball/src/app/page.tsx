import Link from "next/link";
import { CrystalBallOrb } from "@/components/CrystalBallOrb";
import { MagicAtmosphere } from "@/components/MagicAtmosphere";
import {
  ConstellationArt,
  CrystalClusterArt,
  MoonPathArt,
  RosterIcon,
  SignalIcon,
  TeamIcon,
} from "@/components/MagicIllustrations";
import { Starfield } from "@/components/Starfield";

const features = [
  {
    title: "Roster clarity",
    body: "Import your employee roster and see your organization at a glance.",
    icon: RosterIcon,
  },
  {
    title: "Performance signals",
    body: "Bring in review ratings to inform succession and growth plans.",
    icon: SignalIcon,
  },
  {
    title: "Built for SMBs",
    body: "Simple uploads, no enterprise bloat—planning that fits your team.",
    icon: TeamIcon,
  },
];

const visions = [
  {
    title: "A constellation of roles",
    body: "See how teams connect, and where a missing star would leave a gap.",
    art: ConstellationArt,
  },
  {
    title: "Light caught in the glass",
    body: "Performance ratings gather into one clear picture you can actually use.",
    art: CrystalClusterArt,
  },
  {
    title: "The path ahead",
    body: "Map hiring and growth in phases, before the next season arrives.",
    art: MoonPathArt,
  },
];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-readable)] relative flex min-h-full flex-1 flex-col overflow-hidden">
      <Starfield />
      <MagicAtmosphere />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <span className="text-lg font-extrabold tracking-wide text-violet-50">
          Crystal Ball
        </span>
        <Link
          href="/dashboard"
          className="rounded-full border border-violet-300/40 bg-violet-500/15 px-5 py-2 text-sm font-bold text-violet-50 transition hover:border-teal-300/60 hover:bg-teal-400/15 hover:text-teal-50"
        >
          Dashboard
        </Link>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 pb-16 pt-2 text-center sm:px-10">
        <CrystalBallOrb className="mb-8" />

        <p
          className="animate-rise-in text-sm font-bold tracking-wide text-teal-200"
          style={{ animationDelay: "0.05s" }}
        >
          Workforce planning, revealed
        </p>

        <h1
          className="animate-rise-in mt-3 max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.12s" }}
        >
          See your team&apos;s future
        </h1>

        <p
          className="animate-rise-in mt-5 max-w-2xl text-lg leading-relaxed text-violet-50/90 sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Crystal Ball helps growing companies plan headcount, spot talent
          risks, and align performance data—before the future catches you off
          guard.
        </p>

        <div
          className="animate-rise-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "0.28s" }}
        >
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-900/50 transition hover:-translate-y-0.5 hover:from-violet-400 hover:to-indigo-500 hover:shadow-violet-500/40"
          >
            Dashboard
          </Link>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-base font-bold text-violet-50 transition hover:-translate-y-0.5 hover:border-teal-200/50 hover:bg-white/10"
          >
            Learn more
          </a>
        </div>

        <ul
          id="features"
          className="mt-16 grid w-full gap-5 text-left sm:grid-cols-3"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="magic-card rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm"
              >
                <div
                  className="animate-rise-in p-5"
                  style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                >
                  <div
                    className="animate-float mb-3 inline-flex rounded-full bg-violet-500/20 p-2"
                    style={{ animationDuration: `${5 + index}s` }}
                  >
                    <Icon />
                  </div>
                  <h2 className="text-lg font-bold text-teal-100">{item.title}</h2>
                  <p className="mt-2 text-base leading-relaxed text-violet-50/85">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <section className="mt-16 w-full text-left">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Visions in the glass
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-violet-50/85 sm:text-lg">
            A clearer look at the people, signals, and plans waiting inside
            your data.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {visions.map((vision, index) => {
              const Art = vision.art;
              return (
                <li
                  key={vision.title}
                  className="magic-card overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]"
                >
                  <div
                    className="animate-rise-in"
                    style={{ animationDelay: `${0.15 + index * 0.1}s` }}
                  >
                    <div className="h-40 p-3 pb-0">
                      <Art />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-violet-50">
                        {vision.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-violet-50/85">
                        {vision.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-6 text-center text-sm text-violet-100/70">
        © {new Date().getFullYear()} Crystal Ball · Workforce planning for
        teams that look ahead
      </footer>
    </div>
  );
}
