import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import { experienceTracks } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Overview of the engineering experience areas covered in the portfolio.",
};

export default function ExperiencePage() {
  return (
    <div className="page-shell py-10 sm:py-14">
      <PageIntro
        eyebrow="Experience"
        title="Experience structure is live, detailed timeline content is next"
        description="This section is prepared for role-by-role timeline entries. For now it highlights the engineering themes that shape the portfolio while detailed employer-specific entries are curated for publication."
      />

      <section className="mt-10">
        <SectionHeading
          eyebrow="Focus areas"
          title="The work is organized around delivery-critical engineering domains"
          description="These focus areas give the experience section a clear spine before the full chronological career timeline is added."
        />
        <div className="mt-8 space-y-4">
          {experienceTracks.map((track) => (
            <article
              key={track.title}
              className="rounded-[1.5rem] border border-border/70 bg-surface p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {track.period}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">
                {track.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                {track.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}