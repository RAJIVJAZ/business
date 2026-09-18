"use client";

import { useEffect, useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

const SESSION_KEY = "bm-exit-intent-shown";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let shown = false;
    try {
      shown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      shown = false;
    }
    if (shown) return;

    function handleMouseLeave(event: MouseEvent) {
      if (event.clientY > 0) return;
      setVisible(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore storage errors (private browsing etc.)
      }
      document.removeEventListener("mouseleave", handleMouseLeave);
    }

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!phone) return;
    window.open(
      whatsappLink(`Hi BusinessMitra, please call me back. My number is ${phone}.`),
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute right-4 top-4 text-slate-400 hover:text-navy"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {submitted ? (
          <div className="py-6 text-center">
            <h3 className="text-xl font-bold text-navy">Thanks — we&apos;ll call you back shortly.</h3>
            <p className="mt-2 text-sm text-slate-600">WhatsApp opened in a new tab with your number.</p>
          </div>
        ) : (
          <>
            <span className="inline-block rounded-full bg-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-dark">
              Before you go
            </span>
            <h3 className="mt-3 text-xl font-bold text-navy">Get a free 15-minute consultation call</h3>
            <p className="mt-2 text-sm text-slate-600">
              Leave your number and a BusinessMitra relationship manager will call you back — no obligation.
            </p>
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
                className="flex-1 rounded-full border border-border px-4 py-2.5 text-sm text-navy focus:border-blue focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-dark"
              >
                Call Me Back
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
