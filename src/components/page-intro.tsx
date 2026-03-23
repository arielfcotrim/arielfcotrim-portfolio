import Link from "next/link";

type PageIntroAction = {
  href: string;
  label: string;
  tone?: "primary" | "secondary";
};

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: PageIntroAction[];
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions = [],
}: PageIntroProps) {
  return (
    <section className="rounded-[2rem] border border-border/70 bg-surface px-6 py-8 shadow-[0_20px_60px_rgba(22,33,29,0.06)] sm:px-10 sm:py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
      <h1 className="display-title mt-4 max-w-4xl text-4xl leading-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
        {description}
      </p>
      {actions.length ? (
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          {actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={
                action.tone === "secondary"
                  ? "inline-flex items-center justify-center rounded-full border border-border bg-white/70 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-strong"
                  : "inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
              }
            >
              {action.label}
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}