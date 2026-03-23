import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { PageIntro } from "@/components/page-intro";
import {
  documentationCategories,
  documentationTracks,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Technical documentation overview for architecture, testing, APIs, and AI workflows.",
};

export default function DocumentationPage() {
  return (
    <div className="page-shell py-10 sm:py-14">
      <PageIntro
        eyebrow="Documentation"
        title="A docs-as-code section built to live alongside the portfolio"
        description="The documentation area is designed for engineering notes that are too detailed for marketing-style portfolio pages but too valuable to leave out of the public profile."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {documentationCategories.map((category) => (
          <ContentCard
            key={category.title}
            eyebrow="Documentation category"
            title={category.title}
            description={category.description}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {documentationTracks.map((track) => (
          <ContentCard
            key={track.title}
            eyebrow={track.slug.join(" / ")}
            title={track.title}
            description={track.description}
            href={`/documentation/${track.slug.join("/")}`}
            linkLabel="Open route"
          />
        ))}
      </div>
    </div>
  );
}