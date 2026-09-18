import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/30 hover:shadow-xl hover:shadow-navy/5"
    >
      <span className="mb-3 inline-block w-fit rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy/60">
        {service.category}
      </span>
      <h3 className="text-lg font-bold text-navy group-hover:text-blue">{service.shortTitle}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
        Learn more
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
