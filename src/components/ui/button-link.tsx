import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-blue-dark shadow-lg shadow-blue/25 hover:shadow-blue/35",
  secondary:
    "bg-navy text-white hover:bg-navy-light shadow-lg shadow-navy/20",
  outline:
    "border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost:
    "border-2 border-navy/15 text-navy hover:bg-navy/5",
  whatsapp:
    "bg-green text-white hover:bg-green-dark shadow-lg shadow-green/25",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
