import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="container-site grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo tone="white" size="lg" />
          <p className="mt-1 text-sm font-medium uppercase tracking-wider text-green">{site.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.description}</p>
          <div className="mt-6">
            <p className="text-sm font-semibold text-white">Get compliance & subsidy updates</p>
            <div className="mt-3 max-w-sm">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.services.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Flagship Solutions</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.flagship.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>{site.address.line1}, {site.address.line2}</li>
            <li>{site.address.city}, {site.address.state} {site.address.pincode}</li>
            <li><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
          </ul>
          <div className="mt-5 flex gap-3">
            {Object.entries(site.social).map(([key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs uppercase hover:bg-white/20"
              >
                {key[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-site flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white/80">{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
