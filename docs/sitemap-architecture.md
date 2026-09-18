# Phase 3 — Website Architecture & Sitemap

This maps the brief's requested Level 1 / Level 2 site structure against what's actually built, calls
out where a deliberate consolidation decision was made instead of following the brief's granularity
literally, and logs the real gaps this phase closed.

## 1. Level 1 Pages — Brief vs. Built

| Brief | Built | Notes |
|---|---|---|
| Home | `/` | ✅ |
| About | `/about` | ✅ |
| Services | `/services` | ✅ |
| Industries | `/industries` | ✅ |
| Resources | `/blog` (labeled "Blog & Resources" in the footer) | ✅ same content, different label — "Blog" is the more recognizable nav label for this audience; "Resources" is used in the footer heading so both terms are present. |
| Case Studies | `/case-studies` | ✅ **added this phase** — was a genuine gap; see Section 4. |
| Contact | `/contact` | ✅ |

Not in the brief's Level 1 list but already built and load-bearing: `/subsidies`, `/loans`,
`/hospital-consultancy`, `/manufacturing-consultancy` (the flagship pages), `/why-choose-us`,
`/client-portal`. These exist because Phase 1's positioning strategy specifically calls for the
subsidy/loan/hospital/industrial practice to be a first-class, not a buried, part of the site — folding
them under a generic "Services" listing would undercut the exact differentiation Phase 1 identifies.

## 2. Level 2 — Brief's Full Fragmentation vs. Built Consolidation

The brief asks for granular sub-pages under each service group (e.g. Business Registration split into
Proprietorship / Partnership / LLP / Private Limited / OPC / Trust / Society as seven separate pages;
Tax Services split into GST / Income Tax / TDS / Tax Planning as four; Licenses split into six). The
site as built instead uses **one comprehensive page per service group**, with each sub-topic covered as
a well-developed section within it (see `/services/business-registration`, `/services/gst-taxation`,
`/services/licenses-approvals`).

**This was a deliberate call, not an oversight — here's the reasoning:**

- **Thin-content risk.** A standalone "Society Registration" or "TDS Filing" page, built from the same
  underlying service, tends to duplicate 80% of its content with its siblings — search engines
  increasingly treat that as thin/duplicate content and can suppress all of them rather than rank the
  best one.
- **Internal competition.** Seven pages all targeting adjacent "business registration" intent compete
  with each other for the same searches instead of one authoritative page accumulating all the
  backlinks/authority signals.
- **Maintenance cost.** Every fragment is another page to keep current as scheme rules, fees and
  timelines change — a real ongoing cost for a business this size, not a one-time build cost.

**Where fragmentation is still the right call**: once actual search-query data shows meaningful, distinct
search volume for a specific sub-type (e.g. "OPC registration consultant" ranking as its own query
pattern separate from "company registration consultant"), splitting that one entity type out into its
own page is a targeted, data-justified expansion — not a blanket rebuild of every service into 5-7
fragments on day one. This is the same logic already applied to Subsidies and Loans: those flagship
pages list every scheme/product as a rich section on one page (with a working eligibility tool), rather
than as six separate thin pages, and that structure should be the template for any future fragmentation
decision, not the seven-pages-per-service approach.

## 3. Complete Current Sitemap

```
/                                  Home
/about                             About (mission, vision, values, leadership)
/why-choose-us                     Why Choose Us
/services                          Services (all, grouped by category)
  /services/business-registration
  /services/gst-taxation
  /services/licenses-approvals
  /services/msme-subsidies
  /services/loan-facilitation
  /services/project-reports
  /services/hospital-consultancy
  /services/industrial-consultancy
  /services/tender-consultancy
  /services/trademark-ip
  /services/compliance-management
  /services/virtual-legal-officer
  /services/iso-certification        ← added this phase
  /services/virtual-cfo              ← added this phase
/subsidies                         Flagship: Subsidy Consultancy + eligibility checker
/loans                             Flagship: Loan Assistance + EMI calculator
/hospital-consultancy              Flagship: Hospital Consultancy
/manufacturing-consultancy         Flagship: Manufacturing Consultancy
/industries                        Industries (all)
  /industries/manufacturing
  /industries/dairy
  /industries/food-processing
  /industries/hospitals
  /industries/hotels
  /industries/warehousing
  /industries/education
  /industries/retail
/case-studies                      Case Studies (all)          ← added this phase
  /case-studies/verma-foods-pmfme-subsidy
  /case-studies/sharma-hospital-setup-nabh
  /case-studies/agarwal-dairy-multi-scheme-subsidy
  /case-studies/iyer-cold-chain-cgtmse-loan
/blog                              Blog / Resources (all)
  /blog/[9 posts across 9 categories]
/client-portal                     Client Portal preview + early-access form
/contact                           Contact (consultation + callback forms, map)
/privacy-policy
/terms
```

## 4. Gaps Closed This Phase

The brief's Level 2 list named two services and one Level-1 page that genuinely didn't exist yet
anywhere in the build or the strategy docs' service list — these were real gaps, not fragmentation
calls, and are added in full (overview/process/benefits/FAQs, matching every other service):

1. **ISO Certification** (`/services/iso-certification`) — was entirely absent; ISO 9001/14001/22000/45001
   consultancy is a legitimate, commonly-bundled MSME service and a natural upsell alongside compliance
   management.
2. **Virtual CFO Services** (`/services/virtual-cfo`) — Phase 1's `business-strategy.md` already listed
   "Virtual CFO retainers" as a named revenue stream (Section 5, #5) but no service page existed for it —
   this closes that gap between the strategy doc and the actual site.
3. **Case Studies** (`/case-studies` + 4 detail pages) — built from the same four client stories already
   used as testimonials (`src/data/testimonials.ts`), each narrated through the firm's five-stage
   engagement process (Discover → Plan → Execute → Comply → Grow, per the original brief's homepage
   process section) rather than as a generic quote. These are illustrative pending real, permissioned
   client case studies — same caveat as the existing testimonials data.

## 5. Internal Linking Additions

- Primary nav: `Case Studies` added between `Industries` and `Why Us`.
- Footer `Company` column: `Case Studies` added between `Industries We Serve` and `Blog & Resources`.
- Each case study detail page links to its related service pages (via `servicesUsed`), and each service
  page's benefit/CTA sidebar is a natural future home for a "see it in action" link to a matching case
  study — worth wiring up as a follow-on pass once there are enough case studies per service to make
  the mapping meaningful (right now, 4 case studies span 8 services — a 1:1 link would be sparse).
- `sitemap.xml` updated to include `/case-studies` and its 4 detail pages.
