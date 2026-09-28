"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { FileUploadCard } from "@/components/FileUploadCard";
import { Starfield } from "@/components/Starfield";
import type { ParsedCsv } from "@/lib/parseCsv";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "crystal-ball-dashboard-theme";

const THEME_CHANGE_EVENT = "crystal-ball-theme-change";

// Light is the default; dark only applies once the user has chosen it.
function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function writeStoredTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage unavailable — the toggle still works via the event below.
  }
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

function subscribeToTheme(onChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

const NAV_ITEMS = [
  { href: "#uploads", label: "Data uploads" },
  { href: "#readiness", label: "Planning readiness" },
];

export default function DashboardPage() {
  const [roster, setRoster] = useState<ParsedCsv | null>(null);
  const [reviews, setReviews] = useState<ParsedCsv | null>(null);
  const theme = useSyncExternalStore(
    subscribeToTheme,
    readStoredTheme,
    () => "light" as Theme,
  );

  const toggleTheme = () =>
    writeStoredTheme(theme === "light" ? "dark" : "light");

  const ready = roster !== null && reviews !== null;

  return (
    <div
      className={`${theme === "dark" ? "dark" : ""} relative flex min-h-full flex-1 flex-col bg-slate-50 text-slate-800 md:flex-row dark:bg-[#070512] dark:text-[#e8e4f5]`}
    >
      <div className="hidden dark:block">
        <Starfield />
      </div>

      <aside className="relative z-10 flex shrink-0 flex-col border-b border-slate-200 bg-white px-5 py-5 md:sticky md:top-0 md:h-screen md:w-64 md:border-r md:border-b-0 md:py-8 dark:border-white/10 dark:bg-white/[0.03]">
        <Link
          href="/"
          className="text-sm text-violet-700/80 transition hover:text-teal-600 dark:text-violet-300/70 dark:hover:text-teal-200"
        >
          ← Crystal Ball
        </Link>
        <p className="mt-1 text-2xl font-semibold text-violet-950 dark:text-violet-50">
          Dashboard
        </p>

        <nav aria-label="Dashboard" className="mt-6 md:mt-10">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-800 dark:text-violet-100/80 dark:hover:bg-white/5 dark:hover:text-violet-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="mt-6 rounded-lg border border-slate-200 px-3 py-2 text-left text-sm text-slate-600 transition hover:border-violet-300 hover:text-violet-800 md:mt-auto dark:border-white/15 dark:text-violet-200/80 dark:hover:border-violet-400/40 dark:hover:text-violet-50"
        >
          {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        </button>
      </aside>

      <main className="relative z-10 w-full flex-1 px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="max-w-xl text-base text-slate-600 dark:text-violet-200/60">
            Upload your roster and performance reviews to begin workforce
            planning.
          </p>

          <div id="uploads" className="mt-8 grid scroll-mt-8 gap-8 lg:grid-cols-2">
            <FileUploadCard
              title="Employee roster"
              description="Your current headcount: names, roles, departments, and start dates."
              hint="Expected columns (example): employee_id, name, department, role, start_date"
              accept=".csv"
              onDataLoaded={(data) => setRoster(data)}
            />
            <FileUploadCard
              title="Performance review ratings"
              description="Latest review cycle scores or ratings tied to each employee."
              hint="Expected columns (example): employee_id, review_period, rating, reviewer"
              accept=".csv"
              onDataLoaded={(data) => setReviews(data)}
            />
          </div>

          <div
            id="readiness"
            className={`mt-10 scroll-mt-8 rounded-2xl border p-6 transition-colors ${
              ready
                ? "border-teal-500/40 bg-teal-50 dark:border-teal-400/30 dark:bg-teal-500/10"
                : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.02]"
            }`}
          >
            <h2 className="text-lg font-semibold text-violet-950 dark:text-violet-100">
              Planning readiness
            </h2>
            <ul className="mt-4 space-y-2 text-base text-slate-700 dark:text-violet-100/75">
              <li className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${roster ? "bg-teal-500 dark:bg-teal-400" : "bg-slate-300 dark:bg-white/25"}`}
                />
                Employee roster {roster ? `(${roster.rows.length} employees)` : "— not uploaded"}
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${reviews ? "bg-teal-500 dark:bg-teal-400" : "bg-slate-300 dark:bg-white/25"}`}
                />
                Performance reviews{" "}
                {reviews ? `(${reviews.rows.length} records)` : "— not uploaded"}
              </li>
            </ul>
            {ready && (
              <p className="mt-4 text-sm text-teal-700 dark:text-teal-200/90">
                Both files are loaded. Next steps—matching employees to ratings
                and building forecasts—can plug in here as you expand the product.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
