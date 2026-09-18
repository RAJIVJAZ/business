# Technical Architecture

## 1. Phase 1 (built): Marketing Site

```
Browser
  │
  ▼
Next.js App Router (TypeScript, Tailwind v4)
  │  - Static generation for all routes (services, industries, blog via generateStaticParams)
  │  - Client components for interactive tools (subsidy checker, loan calculator, forms, popups)
  ▼
No backend — lead forms open wa.me / mailto: deep links
```

- **Rendering**: All pages are statically generated at build time (SSG) — no server runtime required
  beyond serving static files, which keeps hosting cheap and fast (Vercel Edge or any static host).
- **Data layer**: Content lives in typed TypeScript modules under `src/data/`. This is intentional for
  Phase 1 — it keeps the site fast and dependency-free. Migrating to a CMS (Sanity, Contentful) or a
  database-backed admin panel is a Phase 2/3 decision once content velocity requires non-developer editing.
- **Lead capture**: Every form is a controlled React client component that serializes field values into
  a WhatsApp (`wa.me`) message or a `mailto:` link. This satisfies "lead generation" for a static site
  with zero backend, at the cost of no server-side lead record — see Phase 2 below for closing that gap.

## 2. Phase 2 (planned): Client Portal, CRM & Backend

This is the natural next phase once the marketing site is live and generating volume. Recommended stack:

```
Next.js (existing) ──► Next.js Route Handlers / API layer ──► Postgres (Supabase)
                                     │                              │
                                     ├──► Auth (Supabase Auth /      │
                                     │     NextAuth + email OTP)     │
                                     │                              │
                                     ├──► CRM Sync Worker ──────────►│  HubSpot / Zoho / Salesforce
                                     │     (webhook or polling)         (lead + deal sync)
                                     │
                                     ├──► WhatsApp Business API ────► Meta Cloud API / Gupshup / Interakt
                                     │     (lead capture + notifications)
                                     │
                                     └──► AI Chatbot ────────────────► Claude API (Anthropic) with a
                                           (site-wide widget)             retrieval layer over services/
                                                                          subsidies/FAQ data
```

### 2.1 Client Portal (authenticated)

- **Auth**: Email/OTP or password auth (Supabase Auth or NextAuth with a credentials/email provider).
  Each client is a `users` row scoped to one or more `engagements`.
- **Modules** (see `/client-portal` for the static preview of these): Document Upload, Compliance
  Tracker, Application Status, Renewal Alerts, Invoice Section, Support Tickets — schema in
  [`database-schema.md`](database-schema.md).
- **File storage**: Supabase Storage (or S3) for uploaded KYC/financial documents, with per-client
  bucket policies (row-level security keyed to `auth.uid()`).
- **Notifications**: Renewal alerts and application status changes trigger email (Resend/SES) and
  WhatsApp Business API notifications.

### 2.2 CRM Integration (HubSpot / Zoho / Salesforce)

- Every lead form submission (in addition to the WhatsApp/email hand-off kept for Phase 1 continuity)
  posts to a Next.js Route Handler (`/api/leads`), which:
  1. Writes a `leads` row to Postgres (source of truth, survives CRM downtime/rate limits).
  2. Pushes the lead to the configured CRM via its REST API (HubSpot Contacts API, Zoho CRM API, or
     Salesforce REST API) using a queued job (e.g. a lightweight `pgboss`/`Inngest` job) so a CRM outage
     never blocks the user-facing form submission.
- CRM selection should be a single environment-driven adapter (`CRM_PROVIDER=hubspot|zoho|salesforce`)
  behind one `pushLead(lead)` interface, so switching providers doesn't touch form code.

### 2.3 WhatsApp Business API

- Replace the `wa.me` deep-link hand-off with the WhatsApp Business Cloud API (via Meta directly, or
  an aggregator like Interakt/Gupshup/AiSensy for easier template management and multi-agent inboxes).
- Enables: automated acknowledgment messages, template-based renewal/compliance reminders, and
  routing incoming replies to the relationship manager's inbox instead of a personal WhatsApp number.

### 2.4 AI Chatbot

- A site-wide chat widget backed by the Claude API, grounded on the site's own service/subsidy/FAQ
  content (via a small retrieval step over `src/data/*.ts` synced into a vector store, or simply
  the full FAQ/service text if it fits the context window) so answers stay accurate to actual offerings.
- Chatbot should hand off to a human (WhatsApp/callback form) for anything beyond FAQ-level queries —
  it augments lead capture, it doesn't replace the relationship manager.

## 3. API Architecture (Phase 2)

REST-style Next.js Route Handlers under `src/app/api/`:

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/leads` | POST | Create a lead (consultation, callback, subsidy checker, loan calculator, newsletter) |
| `/api/auth/*` | — | Auth provider routes (NextAuth or Supabase Auth) |
| `/api/documents` | POST/GET | Upload/list client documents (authenticated) |
| `/api/applications` | GET/PATCH | List/update application status (staff-only PATCH) |
| `/api/compliance-items` | GET | List a client's compliance calendar entries |
| `/api/invoices` | GET | List a client's invoices |
| `/api/tickets` | POST/GET/PATCH | Create/list/update support tickets |
| `/api/webhooks/crm` | POST | Inbound CRM status-sync webhook (e.g. deal stage changes) |
| `/api/webhooks/whatsapp` | POST | Inbound WhatsApp message webhook |

All authenticated routes enforce row-level access via the logged-in client's `engagement_id`; staff/
admin roles get a separate `is_staff` claim checked server-side, never trusted from the client.

## 4. Admin Panel (Phase 2/3)

A separate authenticated section (`/admin`) or a standalone internal tool (e.g. Retool/Appsmith
pointed at the same Postgres database) for the operations team to: update application status, upload
documents on a client's behalf, manage the compliance calendar, and view the CRM-synced lead pipeline.
Building this as a thin layer over the same Postgres schema (rather than a second source of truth)
keeps the client portal and admin panel consistent.

## 5. Security Architecture

- **Transport**: TLS everywhere (see [`deployment-guide.md`](deployment-guide.md) for SSL setup);
  HSTS enabled at the CDN/edge layer.
- **Auth**: Short-lived session tokens (JWT or Supabase session), OTP-based login to avoid password
  reuse risk for a client base that isn't security-savvy by default.
- **Document storage**: Private buckets only, signed URLs with short expiry for downloads, virus
  scanning on upload (e.g. ClamAV via a serverless function) before documents are marked available.
- **PII handling**: Client KYC documents and financials are sensitive — encrypt at rest (default with
  Supabase/S3), restrict admin access by role, and log all document access for audit.
- **Rate limiting**: Public forms (`/api/leads`) rate-limited per IP to prevent spam/abuse of the
  WhatsApp/CRM push pipeline.
- **Secrets**: CRM API keys, WhatsApp API tokens, and Claude API keys stored as environment variables
  in the hosting platform's secret manager — never committed to the repo (`.env*` is gitignored).

## 6. Future Scaling Roadmap

1. **Phase 1 (current)**: Static marketing site, WhatsApp/email lead hand-off, no backend.
2. **Phase 2**: Postgres-backed leads table + CRM sync adapter; authenticated client portal (document
   upload, compliance tracker, application status, renewal alerts, invoices, tickets); WhatsApp
   Business API; AI chatbot widget.
3. **Phase 3**: Admin/ops panel; multi-city landing page generation (programmatic SEO for
   "[service] consultant in [city]" pages) backed by the same services data model; regional associate
   portal for liaison partners to update application status directly.
4. **Phase 4**: Mobile app (React Native, sharing the same API layer) for renewal alerts and document
   upload on the go; usage-based analytics dashboard for internal team performance (avg. sanction time
   per scheme, conversion rate per service line) feeding back into marketing/content priorities.
