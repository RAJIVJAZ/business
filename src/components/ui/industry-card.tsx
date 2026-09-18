import Link from "next/link";
import type { Industry } from "@/data/industries";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-green/30 hover:shadow-xl hover:shadow-navy/5"
    >
      <div>
        <h3 className="text-lg font-bold text-navy group-hover:text-green-dark">{industry.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{industry.summary}</p>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-dark">
        Explore solutions
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
