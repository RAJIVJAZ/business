"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export type SubsidyBarDatum = {
  label: string;
  general?: number;
  women?: number;
};

const MAX = 45; // fixed scale ceiling — highest value in the dataset (Gujarat, 45%)
const TICKS = [0, 10, 20, 30, 40];

// Grouped horizontal bar chart: two series (General vs Women/SC-ST/Additional
// capital subsidy %) per state. Follows the dataviz mark spec — thin bars,
// 4px rounded data-end / square baseline, direct value labels at the tip,
// a legend (2 series), hover tooltip, and a table-view fallback for
// accessibility (the palette's green-on-surface contrast WARN requires
// visible labels or a table, not color alone).
export function SubsidyBarChart({ data }: { data: SubsidyBarDatum[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-5 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-blue" /> General category
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-green" /> Women / SC-ST / additional
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShowTable((v) => !v)}
          className="text-xs font-semibold text-blue hover:underline"
        >
          {showTable ? "View as chart" : "View as table"}
        </button>
      </div>

      {showTable ? (
        <table className="mt-5 w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-4 font-semibold">State</th>
              <th className="py-2 pr-4 font-semibold">General %</th>
              <th className="py-2 font-semibold">Women / SC-ST / Additional %</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.label} className="border-b border-border/60">
                <td className="py-2 pr-4 text-navy">{d.label}</td>
                <td className="py-2 pr-4 tabular-nums text-slate-600">{d.general ?? "—"}</td>
                <td className="py-2 tabular-nums text-slate-600">{d.women ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="mt-6">
          <div className="relative ml-0 mb-1 h-4">
            {TICKS.map((t) => (
              <span
                key={t}
                className="absolute -translate-x-1/2 text-[11px] text-slate-400"
                style={{ left: `${(t / MAX) * 100}%` }}
              >
                {t}%
              </span>
            ))}
          </div>
          <div className="space-y-5">
            {data.map((d) => (
              <div
                key={d.label}
                className="relative"
                onMouseEnter={() => setHovered(d.label)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(d.label)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
              >
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-navy">{d.label}</span>
                  {hovered === d.label ? (
                    <span className="rounded-md bg-navy px-2 py-0.5 text-[11px] font-medium text-white">
                      {d.general != null ? `General ${d.general}%` : ""}
                      {d.general != null && d.women != null ? " · " : ""}
                      {d.women != null ? `Women ${d.women}%` : ""}
                    </span>
                  ) : null}
                </div>
                <div className="relative space-y-1">
                  {/* recessive gridlines */}
                  <div className="pointer-events-none absolute inset-0">
                    {TICKS.map((t) => (
                      <span
                        key={t}
                        className="absolute top-0 h-full w-px bg-slate-200"
                        style={{ left: `${(t / MAX) * 100}%` }}
                      />
                    ))}
                  </div>
                  {d.general != null ? (
                    <div className="relative h-[18px] w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(d.general / MAX) * 100}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-full rounded-r bg-blue"
                      />
                    </div>
                  ) : null}
                  {d.women != null ? (
                    <div className="relative h-[18px] w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(d.women / MAX) * 100}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="h-full rounded-r bg-green"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
