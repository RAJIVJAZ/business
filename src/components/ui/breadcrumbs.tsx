import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 ? <span>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-blue">{item.label}</Link>
            ) : (
              <span className="text-navy">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
