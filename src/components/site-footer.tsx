import Link from "next/link";
import { navLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="page-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="display-title text-3xl font-semibold text-foreground">
            Ariel Forner Cotrim
          </p>
          <p className="max-w-xl text-sm leading-7 text-muted">
            Professional portfolio, resume hub, and technical documentation
            system for automation infrastructure, backend testing, and
            AI-assisted engineering work.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}