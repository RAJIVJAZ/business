"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { Logo } from "@/components/ui/logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="container-site flex items-center justify-between py-3">
        <Link href="/" className="flex flex-col gap-1 leading-none" onClick={() => setIsOpen(false)}>
          <Logo />
          <span className="text-[11px] font-medium uppercase tracking-wider text-green-dark sm:text-xs">
            {site.tagline}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium text-navy/80">
            {primaryNav.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDesktopMenu(item.label)}
                onMouseLeave={() => item.children && setOpenDesktopMenu(null)}
              >
                <Link href={item.href} className="flex items-center gap-1 rounded-md px-3 py-2 transition-colors hover:text-blue">
                  {item.label}
                  {item.children ? (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : null}
                </Link>
                {item.children && openDesktopMenu === item.label ? (
                  <div className="absolute left-0 top-full w-72 rounded-xl border border-border bg-white p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 text-sm text-navy/80 hover:bg-navy/5 hover:text-blue"
                      >
                        <span className="font-medium">{child.label}</span>
                        {child.description ? (
                          <span className="block text-xs text-slate-500">{child.description}</span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="text-sm font-semibold text-navy/70 hover:text-blue">
            {site.phone}
          </a>
          <Link
            href={site.ctaPrimary.href}
            className="rounded-full bg-blue px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blue-dark"
          >
            {site.ctaPrimary.label}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-bg lg:hidden">
          <ul className="container-site flex flex-col gap-1 py-4 text-base font-medium text-navy">
            {primaryNav.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between rounded-md px-2 py-2.5 hover:bg-white"
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${openMobileMenu === item.label ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileMenu === item.label ? (
                      <ul className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-md px-2 py-2 text-sm text-navy/70 hover:bg-white"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-2.5 hover:bg-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href={site.ctaPrimary.href}
                onClick={() => setIsOpen(false)}
                className="mt-2 block rounded-full bg-blue px-4 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-white"
              >
                {site.ctaPrimary.label}
              </Link>
            </li>
            <li>
              <a href={site.phoneHref} className="block px-2 py-2 text-sm text-navy/60">
                Call {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
