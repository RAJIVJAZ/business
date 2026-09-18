# SEO Strategy

## 1. Target Keywords (primary)

| Keyword | Primary Page |
|---|---|
| GST Consultant | `/services/gst-taxation` |
| MSME Subsidy Consultant | `/subsidies` |
| Hospital Consultant | `/hospital-consultancy` |
| Project Report Consultant | `/services/project-reports` |
| Business Loan Consultant | `/loans` |
| Factory License Consultant | `/services/licenses-approvals`, `/manufacturing-consultancy` |
| Startup Registration Consultant | `/services/business-registration` |

Each service/flagship page additionally targets 2-4 long-tail variants defined in
`src/data/services.ts` (`keywords` field per service) — e.g. "LLP registration consultant",
"CGTMSE loan consultant", "NABH accreditation consultant", "PMFME consultant".

## 2. On-Page SEO (implemented)

- **Per-route metadata**: every route sets a unique `title`/`description` via Next.js `Metadata` API
  (`export const metadata` or `generateMetadata` for dynamic routes), with `alternates.canonical` set
  to avoid duplicate-content issues on trailing slashes or query params.
- **Heading hierarchy**: one `<h1>` per page (hero headline), `<h2>` for major sections, `<h3>` for
  cards/FAQ items — enforced by the shared `SectionHeading` component defaulting to `<h2>`.
- **Structured data (JSON-LD)**:
  - `ProfessionalService` on every page (root layout) with address, contact point and `sameAs` social links.
  - `Service` schema on every `/services/[slug]` page.
  - `FAQPage` schema on every `/services/[slug]` page (from the service's `faqs` array).
  - `Article` schema on every `/blog/[slug]` page (headline, author, datePublished, publisher).
- **Internal linking**: service detail pages cross-link to 4 related services; industry pages link to
  their relevant services; blog posts link to related posts in the same category; every flagship page
  links back to `/services` and forward to `/contact`. The footer surfaces the full service and
  flagship-solution list on every page for crawl depth.

## 3. Technical SEO (implemented)

- `src/app/sitemap.ts` generates `/sitemap.xml` covering all static routes plus every service,
  industry and blog post slug — regenerated automatically as new entries are added to `src/data/*.ts`.
- `src/app/robots.ts` generates `/robots.txt` allowing all crawlers and pointing to the sitemap.
- All pages are statically generated (SSG) for fast Time-to-First-Byte and Core Web Vitals.
- Mobile-first responsive layout (Tailwind breakpoints `sm`/`lg`) with no horizontal scroll at
  360px width.

## 4. Content Strategy

- **Blog categories** (see `src/data/blog.ts`): GST, Income Tax, Business Registration, Subsidies,
  Government Schemes, Loans, Compliance, Hospitals, Manufacturing — one seed article per category at
  launch, positioned to rank for informational long-tail queries that funnel into the matching
  service/flagship page via in-content CTAs.
- **Content calendar (recommended cadence)**: 2 articles/month per high-intent category (GST,
  Subsidies, Loans) and 1 article/month per lower-volume category (Hospitals, Manufacturing,
  Compliance) — prioritized by search volume and how directly the topic maps to a paid service line.
- **Programmatic SEO (Phase 3)**: once the service/industry data model is backend-supported, generate
  `[service]-consultant-in-[city]` landing pages for the top 20-30 cities per service, reusing the
  existing service data with a city-specific intro paragraph and local contact details — a common,
  high-ROI pattern for consultancy/services SEO once base authority is established.

## 5. Internal Linking Map (summary)

```
Home ──► Services (all 12) ──► Service Detail ──► Related Services (4) + CTA
     ──► Flagship Solutions (Subsidies, Loans, Hospital, Manufacturing)
     ──► Industries (8) ──► Industry Detail ──► Relevant Services
     ──► Blog ──► Post ──► Related Posts (same category) + CTA
     ──► Contact (consultation + callback forms)

Footer (every page) ──► Services, Flagship Solutions, Company pages, Legal pages
```

## 6. Measurement

- Recommended: Google Search Console + GA4 (or a privacy-friendlier alternative like Plausible) wired
  up at deployment time (see `deployment-guide.md`).
- Track: organic sessions per landing page, form-open rate on `SubsidyChecker`/`LoanCalculator`
  (the "unlock report" step is a strong micro-conversion signal), and keyword rank tracking for the
  primary keyword table above.
