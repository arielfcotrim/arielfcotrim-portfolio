import type { Metadata } from "next";

type DocumentationRouteProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({
  params,
}: DocumentationRouteProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.join(" / "),
    description: "Placeholder documentation route ready for MDX-backed content.",
  };
}

export default async function DocumentationEntryPage({
  params,
}: DocumentationRouteProps) {
  const { slug } = await params;
  const pathLabel = slug.join(" / ");

  return (
    <div className="page-shell py-10 sm:py-14">
      <section className="rounded-[2rem] border border-border/70 bg-surface p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Documentation route
        </p>
        <h1 className="display-title mt-4 text-4xl text-foreground sm:text-5xl">
          {pathLabel}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
          This route is live and ready to be backed by structured data or MDX
          content. The folder-based documentation architecture is in place, so
          the next step is publishing the actual engineering document for this
          topic.
        </p>
      </section>
    </div>
  );
}