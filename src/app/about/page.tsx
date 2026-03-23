import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { PageIntro } from "@/components/page-intro";
import { portfolioPrinciples } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional summary and site positioning for Ariel Forner Cotrim.",
};

export default function AboutPage() {
  return (
    <div className="page-shell py-10 sm:py-14">
      <PageIntro
        eyebrow="About"
        title="Systems-minded engineering with equal weight on quality, infrastructure, and maintainability"
        description="This portfolio is centered on engineering work that sits between test automation, backend systems, infrastructure thinking, and practical AI-assisted workflows. The goal is not just to present experience, but to document how that work is approached."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {portfolioPrinciples.map((principle) => (
          <ContentCard
            key={principle.title}
            eyebrow={principle.eyebrow}
            title={principle.title}
            description={principle.description}
          />
        ))}
      </div>
    </div>
  );
}