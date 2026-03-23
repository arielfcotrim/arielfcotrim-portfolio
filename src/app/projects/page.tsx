import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { PageIntro } from "@/components/page-intro";
import { projectTracks } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project overview for portfolio case studies and technical deep dives.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell py-10 sm:py-14">
      <PageIntro
        eyebrow="Projects"
        title="Project pages are wired for implementation detail and case-study depth"
        description="The project section is meant to show business context, architectural choices, implementation decisions, and outcomes. The structure is in place for expanding each project into a detailed technical page."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projectTracks.map((project) => (
          <ContentCard
            key={project.title}
            eyebrow={project.category}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}