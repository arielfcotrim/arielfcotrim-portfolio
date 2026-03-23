type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
      <h2 className="display-title text-4xl leading-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-muted sm:text-lg">{description}</p>
    </div>
  );
}