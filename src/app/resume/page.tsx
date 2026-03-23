import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume summary route for the portfolio website.",
};

const resumeSections = [
  {
    eyebrow: "Summary",
    title: "Professional positioning",
    description:
      "A concise overview of engineering focus, technical scope, and the value proposition that ties the rest of the site together.",
  },
  {
    eyebrow: "Structure",
    title: "Experience, projects, and certifications",
    description:
      "This route is intended to bridge high-level résumé scanning with deeper route-specific pages for each major body of work.",
  },
  {
    eyebrow: "Output",
    title: "Downloadable resume support",
    description:
      "A PDF download can be added here later while keeping the web version structured and linkable.",
  },
];

export default function ResumePage() {
  return (
    <div className="page-shell py-10 sm:py-14">
      <PageIntro
        eyebrow="Resume"
        title="A résumé route that links to deeper evidence across the site"
        description="Rather than duplicating a static PDF, this page is structured as the concise layer that points into projects, experience, certifications, and documentation."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {resumeSections.map((section) => (
          <ContentCard
            key={section.title}
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>
    </div>
  );
}