# Deployment Guide

## Hosting & Domain Recommendation

- **Recommended for Phase 1 (static Next.js site)**: **Vercel** — zero-config Next.js support,
  automatic HTTPS, global CDN, preview deployments per PR. Lowest ops overhead for a marketing site.
- **Alternative if a client portal/backend (Phase 2) is added**: a VPS or cloud VM running Node.js
  behind Nginx, or a managed platform like Railway/Render, so the API routes and Postgres connection
  aren't constrained by a purely static/edge deployment model.
- **Domain**: register `anuradhabusinesssolutions.com` (primary) and defensively register `.in` and common
  misspellings; point DNS through Cloudflare (see below) regardless of where the app is hosted, for
  CDN caching, DDoS protection and easy SSL management.

---

## 1. Vercel Deployment (recommended, Phase 1)

1. Push this repository to GitHub (already done if you're reading this from the repo).
2. In the Vercel dashboard: **New Project → Import Git Repository** → select `RAJIVJAZ/business`.
3. Framework preset: Next.js (auto-detected). Build command `npm run build`, output handled
   automatically by the Next.js Vercel adapter.
4. Add environment variables (none required for Phase 1; add CRM/WhatsApp/Claude API keys here once
   Phase 2 ships).
5. Deploy. Vercel issues a `*.vercel.app` preview URL immediately.
6. **Custom domain**: Project → Settings → Domains → add `anuradhabusinesssolutions.com` and `www`. Vercel
   provides the exact `A`/`CNAME` records to add at your DNS provider (or Cloudflare, see below).

## 2. VPS Hosting (Ubuntu + Nginx + PM2)

For a self-managed VPS (DigitalOcean, AWS Lightsail, Hetzner, etc.):

```bash
# On the VPS (Ubuntu 22.04+)
sudo apt update && sudo apt install -y nodejs npm nginx
sudo npm install -g pm2

git clone https://github.com/RAJIVJAZ/business.git
cd business
npm install
npm run build

# Run with PM2 (keeps the app alive, restarts on crash/reboot)
pm2 start npm --name "anuradhabusinesssolutions" -- start
pm2 save
pm2 startup   # follow the printed command to enable on-boot start
```

Nginx reverse proxy (`/etc/nginx/sites-available/anuradhabusinesssolutions`):

```nginx
server {
    listen 80;
    server_name anuradhabusinesssolutions.com www.anuradhabusinesssolutions.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/anuradhabusinesssolutions /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Then follow the SSL setup below (Certbot) to enable HTTPS on this Nginx config.

## 3. Cloud Hosting (Railway / Render / AWS App Runner)

Any Node-compatible cloud platform works the same way in principle:

1. Connect the GitHub repo.
2. Build command: `npm run build`. Start command: `npm run start`.
3. Set the port via the platform's `PORT` env var (Next.js respects `process.env.PORT` automatically
   with `next start`).
4. Enable auto-deploy on push to `main` (or a `production` branch, per your branching strategy).

## 4. WordPress Hosting (Option B tech stack, if pursued instead)

If the business later opts for the WordPress alternative (Elementor Pro + RankMath + WP Rocket +
Fluent Forms) named in the original brief instead of extending this Next.js codebase:

1. Choose managed WordPress hosting (e.g. WP Engine, Kinsta, SiteGround) for automatic updates,
   staging environments and built-in caching.
2. Install WordPress → Elementor Pro (page building) → RankMath (SEO, replacing the hand-written
   JSON-LD/metadata this Next.js build ships with) → WP Rocket (caching/performance) → Fluent Forms
   (lead forms, replacing the WhatsApp/mailto hand-off with proper form submissions + CRM webhooks).
3. Rebuild each page template using this site's content (`src/data/*.ts` and page copy) as the source
   content — the copy and structure transfer directly; only the implementation layer changes.

This is a full parallel rebuild, not a migration path from the Next.js codebase — treat it as an
either/or platform decision, not an upgrade.

## 5. Cloudflare Setup

1. Add the domain to Cloudflare (free plan is sufficient to start).
2. Update the domain's nameservers at the registrar to the two Cloudflare-assigned nameservers.
3. Add DNS records pointing to your host:
   - Vercel: `CNAME www → cname.vercel-dns.com`, `A @ → 76.76.21.21` (or per Vercel's current
     instructions shown in the dashboard).
   - VPS: `A @ → <VPS IP>`, `A www → <VPS IP>`.
4. SSL/TLS mode: **Full (strict)** once origin SSL is in place (see below) — never "Flexible" in
   production, as it leaves the Cloudflare-to-origin hop unencrypted.
5. Enable **Always Use HTTPS** and **Automatic HTTPS Rewrites** under SSL/TLS settings.
6. Turn on a basic WAF rule set and rate limiting on `/api/*` once Phase 2 API routes exist.

## 6. SSL Setup

- **On Vercel**: automatic — Vercel provisions and renews certificates for any domain added in
  Project → Domains. No action needed beyond adding the domain.
- **On a VPS behind Cloudflare (Full strict mode)**: issue an origin certificate from Cloudflare
  (SSL/TLS → Origin Server → Create Certificate), install it in Nginx, or use Let's Encrypt directly:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d anuradhabusinesssolutions.com -d www.anuradhabusinesssolutions.com
```

Certbot auto-configures Nginx for HTTPS and sets up a renewal cron/systemd timer automatically.

## 7. Email Setup

- Use a transactional/business email provider separate from the web host: Google Workspace or
  Microsoft 365 for `@anuradhabusinesssolutions.com` mailboxes (consultation replies, `consult@`, `support@`).
- Add SPF, DKIM and DMARC DNS records (provided by Google Workspace/M365 setup wizard) at Cloudflare
  to ensure outbound mail from the domain isn't flagged as spam.
- For Phase 2 transactional email (renewal alerts, application status updates), use a dedicated ESP
  (Resend, AWS SES, or Postmark) with its own subdomain (e.g. `mail.anuradhabusinesssolutions.com`) to keep
  transactional sending reputation separate from human mailbox sending.

## 8. Backup Setup

- **Code**: already backed up via Git history on GitHub (`RAJIVJAZ/business`). Enable branch
  protection on `main` once multiple contributors are pushing.
- **Phase 2 database (Postgres/Supabase)**: enable daily automated backups (Supabase does this by
  default on paid tiers; self-hosted Postgres should run `pg_dump` via a nightly cron job to
  off-site storage, e.g. an S3 bucket with versioning enabled).
- **Uploaded documents (Phase 2 Storage)**: enable versioning on the storage bucket (S3/Supabase
  Storage) so accidental overwrites/deletes of client documents are recoverable.
