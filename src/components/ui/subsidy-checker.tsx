"use client";

import { useState, type FormEvent } from "react";
import {
  indianStates,
  subsidyIndustries,
  subsidyCategories,
  industryToCategorySlugs,
} from "@/data/subsidies";
import { whatsappLink } from "@/lib/site";

type Stage = "input" | "gate" | "report";

export function SubsidyChecker() {
  const [stage, setStage] = useState<Stage>("input");
  const [state, setState] = useState("");
  const [industry, setIndustry] = useState("");
  const [investment, setInvestment] = useState("");
  const [lead, setLead] = useState({ name: "", phone: "", email: "" });

  const matchedSlugs = industryToCategorySlugs[industry] ?? [];
  const matches = subsidyCategories.filter((c) => matchedSlugs.includes(c.slug));

  function handleCheck(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!state || !industry || !investment) return;
    setStage("gate");
  }

  function handleUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!lead.name || !lead.phone) return;
    const message = [
      "Hi Anuradha Business Solutions, I used the Subsidy Eligibility Checker.",
      "",
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      lead.email ? `Email: ${lead.email}` : "",
      `State: ${state}`,
      `Industry: ${industry}`,
      `Investment Amount: ${investment}`,
      `Potential Categories: ${matches.map((m) => m.title).join(", ") || "To be assessed"}`,
      "",
      "Please send me the detailed subsidy report and next steps.",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setStage("report");
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-bold text-navy">Subsidy Eligibility Checker</h3>
      <p className="mt-1 text-sm text-slate-600">
        Answer 3 quick questions to see which subsidy categories your project may qualify for.
      </p>

      {stage === "input" ? (
        <form onSubmit={handleCheck} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sc-state" className="text-sm font-semibold text-navy">
              State <span className="text-red-500">*</span>
            </label>
            <select
              id="sc-state"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            >
              <option value="" disabled>Select state</option>
              {indianStates.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sc-industry" className="text-sm font-semibold text-navy">
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              id="sc-industry"
              required
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            >
              <option value="" disabled>Select industry</option>
              {subsidyIndustries.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sc-investment" className="text-sm font-semibold text-navy">
              Investment Amount (₹) <span className="text-red-500">*</span>
            </label>
            <input
              id="sc-investment"
              required
              type="text"
              inputMode="numeric"
              placeholder="e.g. 50,00,000"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            />
          </div>
          <div className="sm:col-span-3">
            <button
              type="submit"
              className="w-full rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-dark sm:w-auto"
            >
              Check Eligibility
            </button>
          </div>
        </form>
      ) : null}

      {stage === "gate" ? (
        <div className="mt-6">
          <div className="rounded-xl bg-green/10 p-4 text-sm text-green-dark">
            Good news — based on your inputs, your project may match{" "}
            <strong>{matches.length || "one or more"}</strong> subsidy categor{matches.length === 1 ? "y" : "ies"}.
            Enter your details below to unlock the detailed report.
          </div>
          <form onSubmit={handleUnlock} className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <input
              required
              placeholder="Full Name *"
              value={lead.name}
              onChange={(e) => setLead((p) => ({ ...p, name: e.target.value }))}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            />
            <input
              required
              type="tel"
              placeholder="Phone Number *"
              value={lead.phone}
              onChange={(e) => setLead((p) => ({ ...p, phone: e.target.value }))}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              value={lead.email}
              onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            />
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="w-full rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark sm:w-auto"
              >
                Unlock My Subsidy Report
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {stage === "report" ? (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-blue/10 p-4 text-sm text-blue-dark">
            Report unlocked — WhatsApp opened with your summary. Here&apos;s what matched for {industry} in {state}:
          </div>
          {(matches.length ? matches : subsidyCategories.slice(0, 1)).map((m) => (
            <div key={m.slug} className="rounded-xl border border-border p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-bold text-navy">{m.title}</h4>
                <span className="rounded-full bg-green/10 px-3 py-0.5 text-xs font-semibold text-green-dark">
                  {m.benefitRange}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{m.summary}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {m.keyPoints.map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-xs text-slate-500">
            This is an indicative screening, not a final eligibility determination. Actual eligibility depends on
            scheme guidelines current at the time of application — our team will confirm exact terms on WhatsApp.
          </p>
        </div>
      ) : null}
    </div>
  );
}
