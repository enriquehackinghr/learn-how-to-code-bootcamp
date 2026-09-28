"use client";

import Link from "next/link";
import { useState } from "react";
import { FileUploadCard } from "@/components/FileUploadCard";
import { Starfield } from "@/components/Starfield";
import type { ParsedCsv } from "@/lib/parseCsv";

export default function DashboardPage() {
  const [roster, setRoster] = useState<ParsedCsv | null>(null);
  const [reviews, setReviews] = useState<ParsedCsv | null>(null);

  const ready = roster !== null && reviews !== null;

  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <Starfield />

      <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-10">
        <div>
          <Link
            href="/"
            className="text-sm text-violet-300/70 transition hover:text-teal-200"
          >
            ← Crystal Ball
          </Link>
          <h1 className="mt-1 font-[family-name:var(--font-cinzel)] text-2xl font-semibold tracking-wide text-violet-50">
            Dashboard
          </h1>
        </div>
        <p className="max-w-md text-right text-base text-violet-200/60">
          Upload your roster and performance reviews to begin workforce
          planning.
        </p>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-6 py-10 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
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
          className={`mt-10 rounded-2xl border p-6 transition-colors ${
            ready
              ? "border-teal-400/30 bg-teal-500/10"
              : "border-white/10 bg-white/[0.02]"
          }`}
        >
          <h2 className="font-[family-name:var(--font-cinzel)] text-lg font-semibold text-violet-100">
            Planning readiness
          </h2>
          <ul className="mt-4 space-y-2 text-lg text-violet-100/75">
            <li className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${roster ? "bg-teal-400" : "bg-white/25"}`}
              />
              Employee roster {roster ? `(${roster.rows.length} employees)` : "— not uploaded"}
            </li>
            <li className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${reviews ? "bg-teal-400" : "bg-white/25"}`}
              />
              Performance reviews{" "}
              {reviews ? `(${reviews.rows.length} records)` : "— not uploaded"}
            </li>
          </ul>
          {ready && (
            <p className="mt-4 text-sm text-teal-200/90">
              Both files are loaded. Next steps—matching employees to ratings
              and building forecasts—can plug in here as you expand the product.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
