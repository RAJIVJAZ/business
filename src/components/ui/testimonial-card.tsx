import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-6">
      <svg className="h-8 w-8 text-blue/20" fill="currentColor" viewBox="0 0 32 32">
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
      </svg>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-border pt-4">
        <div className="font-semibold text-navy">{testimonial.name}</div>
        <div className="text-xs text-slate-500">
          {testimonial.role}, {testimonial.company}
        </div>
        <span className="mt-2 inline-block rounded-full bg-green/10 px-2.5 py-0.5 text-xs font-medium text-green-dark">
          {testimonial.industry}
        </span>
      </figcaption>
    </figure>
  );
}
