import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="container-site py-14 sm:py-20">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
      <div className="mx-auto mt-6 max-w-3xl">
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-navy">{section.heading}</h2>
              <div className="mt-2 flex flex-col gap-3 text-slate-600">
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
