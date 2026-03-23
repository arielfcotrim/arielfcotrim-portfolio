import Link from "next/link";

type ContentCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export function ContentCard({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: ContentCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-border/70 bg-surface p-6 shadow-[0_18px_50px_rgba(22,33,29,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(22,33,29,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
      {href ? (
        <Link
          href={href}
          className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition hover:text-accent-strong"
        >
          {linkLabel ?? "Open"}
        </Link>
      ) : null}
    </article>
  );
}