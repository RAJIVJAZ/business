import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaSection } from "@/components/ui/cta-section";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="bg-navy py-14 sm:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category },
            ]}
          />
          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green">
            {post.category}
          </span>
          <h1 className="text-balance mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-white/60">
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-3">
          <article className="lg:col-span-2 space-y-5 text-slate-700 leading-relaxed">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-bold text-navy">Need help with this?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Talk to our advisory desk about {post.category.toLowerCase()} for your business.
              </p>
              <Link
                href={site.ctaPrimary.href}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-dark"
              >
                {site.ctaPrimary.label}
              </Link>
            </div>
            {relatedPosts.length ? (
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-bold text-navy">More on {post.category}</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {relatedPosts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="text-blue hover:underline">{p.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
