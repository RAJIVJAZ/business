import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrustBar } from "@/components/ui/trust-bar";
import { ServiceCard } from "@/components/ui/service-card";
import { IndustryCard } from "@/components/ui/industry-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CtaSection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "India's Complete Business Growth & Compliance Partner",
  description:
    "From registration to expansion — legal, tax, licenses, loans, subsidies and business growth solutions under one roof. Book a free consultation with Anuradha Business Solutions.",
  alternates: { canonical: "/" },
};

const flagshipSolutions = [
  { title: "Subsidy Consultancy", href: "/subsidies", description: "Eligibility checker across food processing, dairy, manufacturing, hospital and MSME schemes.", tag: "Flagship" },
  { title: "Loan Assistance", href: "/loans", description: "Instant EMI estimate and eligibility read across MSME, Mudra, CGTMSE and project finance.", tag: "Flagship" },
  { title: "Hospital Consultancy", href: "/hospital-consultancy", description: "Setup, NABH accreditation and Ayushman Bharat empanelment, coordinated end-to-end.", tag: "Specialized" },
  { title: "Manufacturing Consultancy", href: "/manufacturing-consultancy", description: "Factory setup, food/dairy plants, cold storage and warehousing compliance.", tag: "Specialized" },
];

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="container-site relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-7" y={16}>
              <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
                {site.tagline}
              </span>
              <h1 className="text-balance mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                India&apos;s Complete Business Growth &amp; Compliance Partner
              </h1>
              <p className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                From Registration to Expansion — Legal, Tax, Licenses, Loans, Subsidies and Business Growth
                Solutions Under One Roof.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href={site.ctaPrimary.href} size="lg">{site.ctaPrimary.label}</ButtonLink>
                <ButtonLink href={site.ctaSecondary.href} variant="outline" size="lg">{site.ctaSecondary.label}</ButtonLink>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.15} y={16}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <h2 className="text-lg font-bold text-white">Not sure where to start?</h2>
                <p className="mt-2 text-sm text-white/60">
                  Tell us what you&apos;re building — we&apos;ll map the exact registrations, licenses,
                  subsidies and finance options that apply to you.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-white/80">
                  {[
                    "Free 15-minute consultation call",
                    "Dedicated relationship manager assigned",
                    "Scoped plan and quote within 24 hours",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <ButtonLink href={site.ctaPrimary.href} className="mt-6 w-full" size="lg">
                  Book Free Consultation
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Service highlights */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="What We Do"
            title="Every service your business needs to start, comply and grow"
            description="Twelve core service lines covering the full lifecycle — from incorporation to ongoing compliance to specialized industry consultancy."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={Math.min(index, 5) * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/services" variant="ghost" size="lg">View All 12 Services</ButtonLink>
          </div>
        </div>
      </section>

      {/* Flagship solutions */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Flagship Solutions"
            title="Interactive tools that turn eligibility questions into action"
            description="Check your subsidy eligibility or estimate your loan EMI in under two minutes."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {flagshipSolutions.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.08}>
              <Link
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-block rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-dark">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold text-navy group-hover:text-blue">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                  Explore
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Built for the sectors that drive India's economy"
            description="From food processing units to hospitals to warehousing businesses, our team understands sector-specific regulation."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 4).map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 0.06}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/industries" variant="ghost" size="lg">View All Industries</ButtonLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Client Success"
            title="Trusted by businesses across India"
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, index) => (
              <Reveal key={t.name} delay={index * 0.08}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Resources" title="Latest from the compliance desk" />
            <ButtonLink href="/blog" variant="ghost">Visit Blog</ButtonLink>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {latestPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy/60">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-navy group-hover:text-blue">{post.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                  <span className="mt-3 block text-xs text-slate-400">{post.readTime}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
