# Database Schema (Phase 2 — Client Portal, CRM & Lead Pipeline)

Proposed Postgres schema for when the site moves from static (Phase 1) to backend-supported (Phase 2).
Designed for Supabase (Postgres + Auth + Storage + Row-Level Security) but portable to any Postgres host.

```sql
-- Organizations = the client's business (one business may have multiple engagements over time)
create table organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  industry text,
  state text,
  udyam_number text,
  gstin text,
  created_at timestamptz not null default now()
);

-- Users = individual login accounts (client contacts, or internal staff)
create table users (
  id uuid primary key references auth.users(id),
  organization_id uuid references organizations(id),
  full_name text not null,
  email text unique not null,
  phone text,
  role text not null default 'client' check (role in ('client', 'staff', 'admin')),
  created_at timestamptz not null default now()
);

-- Leads = every form submission from the public site (consultation, callback, subsidy checker,
-- loan calculator, newsletter, exit-intent popup), independent of whether it converts to a client.
create table leads (
  id uuid primary key default gen_random_uuid(),
  source text not null, -- 'consultation' | 'callback' | 'subsidy_checker' | 'loan_calculator' | 'newsletter' | 'exit_intent'
  name text,
  phone text,
  email text,
  service_interest text,
  payload jsonb not null default '{}', -- raw form fields (state/industry/investment, loan product/amount, etc.)
  crm_sync_status text not null default 'pending' check (crm_sync_status in ('pending', 'synced', 'failed')),
  crm_external_id text, -- ID of the corresponding record in HubSpot/Zoho/Salesforce
  created_at timestamptz not null default now()
);
create index leads_created_at_idx on leads (created_at desc);
create index leads_crm_sync_status_idx on leads (crm_sync_status);

-- Engagements = a specific paid engagement (e.g. "GST Registration — Q1 2026", "Subsidy DPR — PMFME")
create table engagements (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id),
  service_slug text not null, -- matches src/data/services.ts slugs
  title text not null,
  status text not null default 'active' check (status in ('active', 'completed', 'on_hold', 'cancelled')),
  relationship_manager text,
  started_at date not null default current_date,
  created_at timestamptz not null default now()
);

-- Documents = files uploaded by clients or staff, scoped to an engagement
create table documents (
  id uuid primary key default gen_random_uuid(),
  engagement_id uuid not null references engagements(id),
  uploaded_by uuid not null references users(id),
  file_name text not null,
  storage_path text not null, -- path in Supabase Storage / S3
  category text, -- 'kyc' | 'financials' | 'application' | 'certificate' | 'other'
  created_at timestamptz not null default now()
);

-- Compliance items = the compliance calendar (ROC filings, license renewals, GST returns, etc.)
create table compliance_items (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id),
  title text not null, -- e.g. "GSTR-3B — March 2026"
  category text not null, -- 'gst' | 'roc' | 'labour' | 'license_renewal' | 'other'
  due_date date not null,
  status text not null default 'upcoming' check (status in ('upcoming', 'filed', 'overdue')),
  reminder_sent_at timestamptz,
  created_at timestamptz not null default now()
);
create index compliance_items_due_date_idx on compliance_items (due_date);

-- Applications = subsidy/loan/license applications in progress
create table applications (
  id uuid primary key default gen_random_uuid(),
  engagement_id uuid not null references engagements(id),
  application_type text not null, -- 'subsidy' | 'loan' | 'license' | 'trademark' | 'tender'
  scheme_or_product text, -- e.g. "PMFME", "CGTMSE", "FSSAI License"
  status text not null default 'documentation' check (
    status in ('documentation', 'filed', 'under_review', 'sanctioned', 'rejected', 'disbursed')
  ),
  amount numeric,
  submitted_at date,
  decided_at date,
  created_at timestamptz not null default now()
);

-- Invoices = billing records per engagement
create table invoices (
  id uuid primary key default gen_random_uuid(),
  engagement_id uuid not null references engagements(id),
  invoice_number text not null unique,
  amount numeric not null,
  status text not null default 'due' check (status in ('due', 'paid', 'overdue', 'cancelled')),
  due_date date not null,
  paid_at date,
  created_at timestamptz not null default now()
);

-- Support tickets = client queries raised through the portal
create table support_tickets (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id),
  raised_by uuid not null references users(id),
  engagement_id uuid references engagements(id),
  subject text not null,
  status text not null default 'open' check (status in ('open', 'in_progress', 'resolved', 'closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table ticket_messages (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid not null references support_tickets(id),
  sender_id uuid not null references users(id),
  message text not null,
  created_at timestamptz not null default now()
);
```

## Row-Level Security (Supabase)

- `users`: a row is visible to itself and to any `staff`/`admin` role.
- `organizations`, `engagements`, `documents`, `compliance_items`, `applications`, `invoices`,
  `support_tickets`, `ticket_messages`: visible to users whose `organization_id` matches, plus
  `staff`/`admin` roles (checked via a `is_staff(auth.uid())` helper function).
- `leads`: insert-only from the public (anonymous) role via the `/api/leads` route handler using the
  service role key server-side — never exposed to the browser directly. Select/update restricted to
  `staff`/`admin`.

## Indexing Notes

- `leads.created_at` and `leads.crm_sync_status` are indexed to support the CRM sync worker's polling
  query (`select * from leads where crm_sync_status = 'pending' order by created_at asc`).
- `compliance_items.due_date` is indexed to support the daily renewal-reminder job
  (`select * from compliance_items where due_date <= now() + interval '30 days' and status = 'upcoming'`).
