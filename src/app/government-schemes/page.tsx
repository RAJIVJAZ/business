import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/ui/cta-section";
import { Reveal } from "@/components/ui/reveal";
import { SubsidyBarChart } from "@/components/ui/subsidy-bar-chart";
import { StateExplorer } from "@/components/ui/state-explorer";
import { centralSchemes, womenSchemes, stateSubsidyProfiles } from "@/data/government-schemes";

export const metadata: Metadata = {
  title: "Government Schemes Explorer — Central, State & Women Entrepreneur Subsidies",
  description:
    "Explore real central MSME schemes (PMEGP, CGTMSE, PMFME, MUDRA, Stand-Up India), state-by-state subsidy rates across India, and schemes specifically for women entrepreneurs — sourced from official policy documents.",
  alternates: { canonical: "/government-schemes" },
};

const chartData = stateSubsidyProfiles
  .filter((s) => s.generalCapitalSubsidyPct != null || s.womenCapitalSubsidyPct != null)
  .map((s) => ({ label: s.state, general: s.generalCapitalSubsidyPct, women: s.womenCapitalSubsidyPct }));

export default function GovernmentSchemesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy py-14 sm:py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="container-site relative">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Government Schemes" }]} />
          <Reveal>
            <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
              Central + State + Women Entrepreneur Schemes
            </span>
            <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              Government Schemes Explorer
            </h1>
            <p className="text-balance mt-4 max-w-2xl text-lg text-white/70">
              Real central schemes, state-by-state subsidy rates, and what women entrepreneurs are
              specifically entitled to — compiled from official policy documents, not estimates.
            </p>
            <p className="mt-4 max-w-2xl text-xs text-white/50">
              Compiled from published scheme/policy documents, last checked September 2026. Scheme
              terms change with budget cycles — confirm current terms with our subsidy desk before
              applying.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Central Schemes */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Central Schemes"
              title="The schemes every Indian MSME should know about"
              description="Six flagship central schemes, with the actual current numbers — not marketing copy."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {centralSchemes.map((scheme, index) => (
              <Reveal key={scheme.shortName} delay={Math.min(index, 5) * 0.06} className="flex flex-col rounded-2xl border border-border bg-white p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue">{scheme.shortName}</span>
                  {scheme.status ? (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                      Under revision
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 font-bold text-navy">{scheme.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{scheme.authority}</p>
                <p className="mt-3 text-sm text-slate-600">{scheme.summary}</p>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm text-slate-600">
                  {scheme.keyFacts.map((fact) => (
                    <li key={fact} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                      {fact}
                    </li>
                  ))}
                </ul>
                {scheme.status ? (
                  <p className="mt-4 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-800">{scheme.status}</p>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* State-by-state chart */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="State-by-State"
              title="Capital subsidy ceilings, general vs. women/SC-ST entrepreneurs"
              description="For the states with independently verified current figures — general-category and women/SC-ST/additional capital subsidy ceilings as a share of eligible fixed capital investment."
            />
          </Reveal>
          <Reveal className="mt-10 rounded-2xl border border-border bg-bg p-6 sm:p-8">
            <SubsidyBarChart data={chartData} />
          </Reveal>
          <p className="mt-4 text-xs text-slate-500">
            Figures shown are the capital subsidy ceiling only — most states layer additional benefits
            (interest subvention, stamp duty exemption, rental assistance) on top, detailed in the state
            explorer below. Where a state&apos;s women/SC-ST figure isn&apos;t shown, that state&apos;s policy grants a
            different type of benefit (e.g. an interest-rate add-on rather than a higher capital subsidy
            percentage) rather than no benefit at all — see that state&apos;s card for the actual mechanism.
          </p>
        </div>
      </section>

      {/* Women entrepreneur spotlight */}
      <section className="py-16 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="For Women Entrepreneurs"
              title="What women entrepreneurs get from the government"
              description="Beyond a general MSME scheme's fine print — the schemes and top-ups specifically for women-led businesses."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {womenSchemes.map((scheme, index) => (
              <Reveal
                key={scheme.name}
                delay={Math.min(index, 5) * 0.06}
                className="flex flex-col rounded-2xl border border-green/20 bg-green/5 p-6"
              >
                <h3 className="font-bold text-navy">{scheme.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{scheme.authority}</p>
                <p className="mt-3 text-sm text-slate-600">{scheme.summary}</p>
                <p className="mt-3 flex-1 text-sm font-medium text-green-dark">{scheme.benefit}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full state explorer */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Every State & UT"
              title="Search your state"
              description="10 states have independently verified current figures below; every other state and UT runs its own MSME incentive framework too — our subsidy desk tracks live terms for all of them on request."
            />
          </Reveal>
          <Reveal className="mt-10">
            <StateExplorer profiles={stateSubsidyProfiles} />
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Find out exactly what your business qualifies for"
        description="Our subsidy desk turns this into a specific eligibility read for your state, industry and investment size — try the eligibility checker or book a consultation."
      />
    </>
  );
}
