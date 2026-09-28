"use client";

import { useCallback, useId, useState } from "react";
import { parseCsv, type ParsedCsv } from "@/lib/parseCsv";

type FileUploadCardProps = {
  title: string;
  description: string;
  accept: string;
  hint: string;
  onDataLoaded?: (data: ParsedCsv, fileName: string) => void;
};

export function FileUploadCard({
  title,
  description,
  accept,
  hint,
  onDataLoaded,
}: FileUploadCardProps) {
  const inputId = useId();
  const [fileName, setFileName] = useState<string | null>(null);
  const [preview, setPreview] = useState<ParsedCsv | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const processFile = useCallback(
    async (file: File) => {
      setError(null);
      const lower = file.name.toLowerCase();
      if (!lower.endsWith(".csv")) {
        setError("Please upload a CSV file for now (.csv).");
        setFileName(null);
        setPreview(null);
        return;
      }

      try {
        const text = await file.text();
        const parsed = parseCsv(text);
        if (parsed.headers.length === 0) {
          setError("The file appears to be empty.");
          return;
        }
        setFileName(file.name);
        setPreview(parsed);
        onDataLoaded?.(parsed, file.name);
      } catch {
        setError("Could not read this file. Try a valid CSV export.");
      }
    },
    [onDataLoaded],
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) void processFile(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) void processFile(file);
  };

  const previewRows = preview?.rows.slice(0, 5) ?? [];
  const colCount = preview?.headers.length ?? 0;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:backdrop-blur-md">
      <h2 className="text-lg font-semibold text-violet-950 dark:text-violet-100">
        {title}
      </h2>
      <p className="mt-2 text-base text-slate-600 dark:text-violet-200/70">{description}</p>
      <p className="mt-1 text-sm text-teal-700/80 dark:text-teal-300/60">{hint}</p>

      <label
        htmlFor={inputId}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={`mt-6 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 transition-colors ${
          dragOver
            ? "border-teal-500/60 bg-teal-50 dark:border-teal-400/60 dark:bg-teal-500/10"
            : "border-slate-300 bg-slate-50 hover:border-violet-400 hover:bg-violet-50 dark:border-white/15 dark:bg-black/20 dark:hover:border-violet-400/40 dark:hover:bg-violet-500/5"
        }`}
      >
        <span className="text-sm uppercase tracking-[0.2em] text-violet-800 dark:text-violet-200/80">
          Drop file or browse
        </span>
        <span className="mt-2 text-sm text-slate-500 dark:text-white/50">{accept}</span>
        <input
          id={inputId}
          type="file"
          accept={accept}
          className="sr-only"
          onChange={onInputChange}
        />
      </label>

      {error && (
        <p className="mt-4 text-sm text-rose-600 dark:text-rose-300" role="alert">
          {error}
        </p>
      )}

      {fileName && preview && (
        <div className="mt-6 space-y-3">
          <p className="text-sm text-teal-700 dark:text-teal-200/90">
            Loaded <span className="font-medium text-slate-900 dark:text-white">{fileName}</span> —{" "}
            {preview.rows.length} row{preview.rows.length === 1 ? "" : "s"},{" "}
            {colCount} column{colCount === 1 ? "" : "s"}
          </p>
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-violet-50 text-violet-900 dark:bg-violet-950/50 dark:text-violet-100/90">
                <tr>
                  {preview.headers.map((h, i) => (
                    <th key={i} className="px-3 py-2 font-medium whitespace-nowrap">
                      {h || `Column ${i + 1}`}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 dark:divide-white/5 dark:text-white/75">
                {previewRows.map((row, ri) => (
                  <tr key={ri} className="bg-white dark:bg-black/20">
                    {preview.headers.map((_, ci) => (
                      <td key={ci} className="px-3 py-2 whitespace-nowrap">
                        {row[ci] ?? "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {preview.rows.length > 5 && (
            <p className="text-xs text-slate-500 dark:text-white/40">
              Showing first 5 of {preview.rows.length} rows
            </p>
          )}
        </div>
      )}
    </section>
  );
}
