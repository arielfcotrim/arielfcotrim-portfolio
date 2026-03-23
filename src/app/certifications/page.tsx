import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certification publication structure for the portfolio website.",
};

const certificationTracks = [
  {
    eyebrow: "Publication track",
    title: "Cloud and platform credentials",
    description:
      "Credential writeups in this category will explain scope, study areas, and why each certification matters in practice.",
  },
  {
    eyebrow: "Publication track",
    title: "Quality engineering credentials",
    description:
      "This track is intended for certifications related to testing strategy, automation, and delivery quality.",
  },
  {
    eyebrow: "Publication track",
    title: "AI and tooling credentials",
    description:
      "This track will capture credentials that reinforce practical AI-assisted engineering and tooling fluency.",
  },
];

export default function CertificationsPage() {
  return (
    <div className="page-shell py-10 sm:py-14">
      <PageIntro
        eyebrow="Certifications"
        title="Certification pages are structured for depth, not just badges"
        description="This section is set up to publish each credential with context, coverage, and relevance instead of reducing it to a flat logo list."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {certificationTracks.map((track) => (
          <ContentCard
            key={track.title}
            eyebrow={track.eyebrow}
            title={track.title}
            description={track.description}
          />
        ))}
      </div>
    </div>
  );
}