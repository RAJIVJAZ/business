"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { StateSubsidyProfile } from "@/data/government-schemes";
import { whatsappLink } from "@/lib/site";

export function StateExplorer({ profiles }: { profiles: StateSubsidyProfile[] }) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return profiles;
    return profiles.filter((p) => p.state.toLowerCase().includes(q));
  }, [profiles, query]);

  return (
    <div>
      <div className="relative max-w-md">
        <svg className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your state or union territory..."
          className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-navy focus:border-blue focus:outline-none"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const isOpen = expanded === p.state;
          return (
            <div key={p.state} className="rounded-xl border border-border bg-bg">
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : p.state)}
                className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left"
              >
                <span className="text-sm font-semibold text-navy">{p.state}</span>
                <span className="flex items-center gap-2">
                  {p.researched ? (
                    <span className="rounded-full bg-green/10 px-2 py-0.5 text-[10px] font-semibold text-green-dark">Verified</span>
                  ) : (
                    <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-500">On request</span>
                  )}
                  <svg
                    className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border px-4 py-3 text-sm text-slate-600">
                      {p.researched ? (
                        <>
                          {p.policy ? <p className="text-xs font-semibold text-blue">{p.policy}</p> : null}
                          <ul className="mt-2 space-y-1.5">
                            {p.highlights?.map((h) => (
                              <li key={h} className="flex gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                                {h}
                              </li>
                            ))}
                          </ul>
                          {p.womenSpecific ? (
                            <p className="mt-3 rounded-lg bg-green/10 p-2.5 text-xs font-medium text-green-dark">
                              For women entrepreneurs: {p.womenSpecific}
                            </p>
                          ) : null}
                        </>
                      ) : (
                        <p>
                          {p.state} runs its own MSME/industrial incentive framework, but specific current
                          rates weren&apos;t independently verified for this page. Our subsidy desk tracks
                          live terms for every state —{" "}
                          <a
                            href={whatsappLink(`Hi, what MSME/women-entrepreneur subsidy schemes are currently available in ${p.state}?`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-blue hover:underline"
                          >
                            ask us on WhatsApp
                          </a>
                          .
                        </p>
                      )}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-6 text-sm text-slate-500">No state matched &ldquo;{query}&rdquo;.</p>
      ) : null}
    </div>
  );
}
