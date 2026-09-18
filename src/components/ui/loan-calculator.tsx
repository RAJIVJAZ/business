"use client";

import { useState, type FormEvent } from "react";
import { loanProducts } from "@/data/loans";
import { whatsappLink } from "@/lib/site";

const indicativeRates: Record<string, number> = {
  "msme-loan": 10.5,
  "mudra-loan": 11.5,
  "cgtmse-loan": 10,
  "working-capital": 11,
  "machinery-finance": 10.5,
  "project-finance": 11.5,
};

type Stage = "input" | "gate" | "report";

function calculateEmi(principal: number, annualRatePct: number, years: number) {
  const monthlyRate = annualRatePct / 12 / 100;
  const months = years * 12;
  if (monthlyRate === 0) return principal / months;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  return emi;
}

export function LoanCalculator() {
  const [stage, setStage] = useState<Stage>("input");
  const [product, setProduct] = useState(loanProducts[0].slug);
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("5");
  const [turnover, setTurnover] = useState("");
  const [lead, setLead] = useState({ name: "", phone: "", email: "" });

  const principal = Number(amount.replace(/[^0-9]/g, "")) || 0;
  const years = Number(tenure) || 1;
  const rate = indicativeRates[product] ?? 11;
  const emi = principal > 0 ? calculateEmi(principal, rate, years) : 0;
  const selectedProduct = loanProducts.find((p) => p.slug === product);

  function handleCalculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!principal || !turnover) return;
    setStage("gate");
  }

  function handleUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!lead.name || !lead.phone) return;
    const message = [
      "Hi BusinessMitra, I used the Loan Eligibility Calculator.",
      "",
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      lead.email ? `Email: ${lead.email}` : "",
      `Loan Product: ${selectedProduct?.title}`,
      `Loan Amount: ₹${amount}`,
      `Tenure: ${years} years`,
      `Annual Turnover: ₹${turnover}`,
      `Estimated EMI: ₹${Math.round(emi).toLocaleString("en-IN")}/month (indicative)`,
      "",
      "Please confirm my actual eligibility and next steps.",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setStage("report");
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-xl font-bold text-navy">Loan Eligibility Calculator</h3>
      <p className="mt-1 text-sm text-slate-600">
        Get an indicative EMI and eligibility read before speaking to our loan desk.
      </p>

      {stage === "input" ? (
        <form onSubmit={handleCalculate} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lc-product" className="text-sm font-semibold text-navy">
              Loan Product <span className="text-red-500">*</span>
            </label>
            <select
              id="lc-product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            >
              {loanProducts.map((p) => (
                <option key={p.slug} value={p.slug}>{p.title}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lc-amount" className="text-sm font-semibold text-navy">
              Loan Amount Required (₹) <span className="text-red-500">*</span>
            </label>
            <input
              id="lc-amount"
              required
              type="text"
              inputMode="numeric"
              placeholder="e.g. 25,00,000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lc-tenure" className="text-sm font-semibold text-navy">
              Preferred Tenure (years)
            </label>
            <select
              id="lc-tenure"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            >
              {[1, 2, 3, 5, 7, 10].map((y) => (
                <option key={y} value={y}>{y} years</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lc-turnover" className="text-sm font-semibold text-navy">
              Annual Turnover (₹) <span className="text-red-500">*</span>
            </label>
            <input
              id="lc-turnover"
              required
              type="text"
              inputMode="numeric"
              placeholder="e.g. 1,20,00,000"
              value={turnover}
              onChange={(e) => setTurnover(e.target.value)}
              className="rounded-lg border border-border px-3 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-dark sm:w-auto"
            >
              Calculate Estimated EMI
            </button>
          </div>
        </form>
      ) : null}

      {stage === "gate" ? (
        <div className="mt-6">
          <div className="rounded-xl bg-green/10 p-4 text-sm text-green-dark">
            Estimated EMI for {selectedProduct?.title}: <strong>₹{Math.round(emi).toLocaleString("en-IN")}/month</strong>{" "}
            (indicative, at ~{rate}% p.a.). Enter your details to get the exact eligibility read from our loan desk.
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
                Unlock My Eligibility Report
              </button>
            </div>
          </form>
        </div>
      ) : null}

      {stage === "report" ? (
        <div className="mt-6 space-y-3 rounded-xl border border-border p-4">
          <div className="rounded-xl bg-blue/10 p-4 text-sm text-blue-dark">
            Report unlocked — WhatsApp opened with your summary.
          </div>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div><dt className="text-slate-500">Product</dt><dd className="font-semibold text-navy">{selectedProduct?.title}</dd></div>
            <div><dt className="text-slate-500">Indicative Rate</dt><dd className="font-semibold text-navy">~{rate}% p.a.</dd></div>
            <div><dt className="text-slate-500">Estimated EMI</dt><dd className="font-semibold text-navy">₹{Math.round(emi).toLocaleString("en-IN")}/month</dd></div>
            <div><dt className="text-slate-500">Collateral</dt><dd className="font-semibold text-navy">{selectedProduct?.collateral}</dd></div>
          </dl>
          <p className="text-xs text-slate-500">
            This is an indicative estimate only, not a loan offer. Actual rate, tenure and eligibility are
            determined by the lending bank/NBFC after credit appraisal — our loan desk will confirm on WhatsApp.
          </p>
        </div>
      ) : null}
    </div>
  );
}
