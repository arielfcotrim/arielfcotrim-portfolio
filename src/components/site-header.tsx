import Link from "next/link";
import { navLinks } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="display-title text-2xl font-semibold text-foreground">
            AFC
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-foreground">
              Ariel Forner Cotrim
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Portfolio platform
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-surface-strong"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}