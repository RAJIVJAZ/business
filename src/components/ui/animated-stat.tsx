"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const number = parseFloat(numStr.replace(/,/g, ""));
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, number, suffix, decimals };
}

// Renders a stat value (e.g. "12,000+", "₹840 Cr+", "9.2 yrs") that counts up
// from 0 when it scrolls into view. Values with no leading number (e.g.
// "Top Rated") just fade in — there's nothing to count.
export function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return;
    const target = parsed;
    const start = performance.now();
    const duration = 1200;
    let frame: number;
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target.number * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed]);

  const formatted = parsed
    ? `${parsed.prefix}${display.toLocaleString("en-IN", {
        maximumFractionDigits: parsed.decimals,
        minimumFractionDigits: parsed.decimals,
      })}${parsed.suffix}`
    : value;

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white sm:text-4xl"
      >
        {formatted}
      </motion.div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}
