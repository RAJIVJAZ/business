import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts, blogCategories } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "GST, income tax, business registration, subsidies, government schemes, loans, compliance, hospital and manufacturing insights from the Anuradha Business Solutions advisory desk.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <SectionHeading
            eyebrow="Resources"
            title="Compliance, subsidy and growth insights"
            description="Practical guidance from our tax, legal, subsidy and industry consultancy desks — written for founders, not other consultants."
            light
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <span key={category} className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold text-navy/70">
                {category}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-block w-fit rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy/60">
                  {post.category}
                </span>
                <h2 className="mt-3 text-lg font-bold text-navy group-hover:text-blue">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
