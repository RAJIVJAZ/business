"use client";

import { useState } from "react";
import type { Faq } from "@/data/faqs";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-navy">{faq.question}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-blue transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen ? (
              <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
