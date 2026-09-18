# Anuradha Business Solutions — Website

Marketing website for **Anuradha Business Solutions**, a one-stop business consultancy platform covering
legal registration, taxation, licenses, MSME subsidies, bank loan facilitation, project reports,
hospital and industrial consultancy, tender consultancy, trademark/IP, compliance management and
virtual legal officer services — positioned as a premium, enterprise-grade alternative to typical
CA firms, law firms and consultancy websites.

This is the **Phase 1 marketing site**: a production-ready public website with lead-generation tools,
no backend/database/authentication yet. Consultation, callback, subsidy-checker and loan-calculator
submissions hand off to WhatsApp and email — see [`docs/architecture.md`](docs/architecture.md) for
the Phase 2 plan (client portal, CRM integration, database).

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- `next/font` with Poppins (headings) and Inter (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app/` — routes (one folder per page; `[slug]` routes for services, industries and blog posts)
- `src/components/layout/` — header (mega menu), footer, WhatsApp button, exit-intent popup, legal page layout
- `src/components/ui/` — shared UI primitives (buttons, cards, forms, FAQ accordion, CTA sections,
  subsidy checker, loan calculator)
- `src/data/` — site content as typed data (services, subsidies, loans, industries, blog posts,
  testimonials, FAQs)
- `src/lib/site.ts` — site-wide config: business info, navigation, contact details, social links

## Content & Design

- Color system: Navy `#0B1F3A` (primary), Corporate Blue `#1F5EFF` (secondary), Growth Green
  `#00B894` (accent), background `#F8FAFC`, text `#1E293B` — defined as Tailwind v4 theme tokens
  in `src/app/globals.css`.
- Typography: Poppins for headings, Inter for body text.
- Update business details (address, phone, WhatsApp number, socials, map embed) in `src/lib/site.ts`.
- Update service/subsidy/loan/industry/blog content in `src/data/*.ts` — pages are data-driven via
  dynamic routes (`/services/[slug]`, `/industries/[slug]`, `/blog/[slug]`), so adding a new entry to
  the data file automatically creates its page, sitemap entry and JSON-LD.

## Lead Generation (Phase 1)

All forms (`LeadForm`, `SubsidyChecker`, `LoanCalculator`, `NewsletterForm`, exit-intent popup) are
client components that open a pre-filled WhatsApp deep link (`wa.me`) or `mailto:` link — there is no
server-side lead storage yet. The Subsidy Eligibility Checker and Loan Eligibility Calculator gate
their detailed report behind a name/phone capture step before revealing results, per the brief.

See [`docs/architecture.md`](docs/architecture.md) for the CRM (HubSpot/Zoho/Salesforce), WhatsApp
Business API, and AI chatbot integration plan for Phase 2.

## SEO

- Per-page metadata, Open Graph tags, and JSON-LD (ProfessionalService, Service, FAQPage, Article)
  wired up per route.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Full keyword and content strategy: [`docs/seo-strategy.md`](docs/seo-strategy.md).

## Documentation

- [`docs/business-strategy.md`](docs/business-strategy.md) — competitive analysis, SWOT, positioning,
  revenue streams, service packaging, CAC/LTV, referral ecosystem.
- [`docs/brand-strategy.md`](docs/brand-strategy.md) — brand story/mission/vision/values, voice,
  messaging framework, brand personality blend, customer emotion mapping.
- [`docs/sitemap-architecture.md`](docs/sitemap-architecture.md) — full sitemap, brief-vs-built
  Level 1/2 mapping, consolidation-vs-fragmentation rationale, gap closures.
- [`docs/government-schemes-sources.md`](docs/government-schemes-sources.md) — what's independently
  verified vs. general knowledge behind the `/government-schemes` page, and what's deliberately not
  fabricated (there's no official "number of subsidies released" metric).
- [`docs/architecture.md`](docs/architecture.md) — technical architecture (current + Phase 2 client
  portal/CRM/API), security architecture, future scaling roadmap.
- [`docs/database-schema.md`](docs/database-schema.md) — proposed Phase 2 database schema for the
  client portal, CRM sync and lead pipeline.
- [`docs/seo-strategy.md`](docs/seo-strategy.md) — target keywords, on-page SEO, structured data,
  internal linking, content calendar.
- [`docs/deployment-guide.md`](docs/deployment-guide.md) — Vercel, VPS/cloud, Cloudflare, SSL, email
  and backup setup, plus hosting/domain recommendations.

## Not in Scope (Phase 1)

Per the brief's full deliverables list, the following are large, separate efforts documented as
plans (not built) in this pass: authenticated client portal, CRM/WhatsApp Business API/AI chatbot
integrations, backend database, admin panel, and a WordPress build-out (Option B tech stack). The
Client Portal route (`/client-portal`) is a static preview of the planned dashboard modules with an
early-access lead form.

## Build

```bash
npm run build
npm run lint
```
