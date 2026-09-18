"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = `mailto:consult@businessmitraindia.com?subject=${encodeURIComponent(
      "Newsletter Subscription"
    )}&body=${encodeURIComponent(`Please subscribe this email to the BusinessMitra newsletter: ${email}`)}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-green focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
      >
        Subscribe
      </button>
      {submitted ? <p className="text-xs text-green">Thanks — check your mail app to confirm.</p> : null}
    </form>
  );
}
