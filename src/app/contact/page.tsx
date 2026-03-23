import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact and profile links route for the portfolio website.",
};

export default function ContactPage() {
  return (
    <div className="page-shell py-10 sm:py-14">
      <PageIntro
        eyebrow="Contact"
        title="This route is ready for direct contact channels and profile links"
        description="Add email, LinkedIn, GitHub, location, and availability details here. The route is in place so contact information has a stable home in the site architecture."
      />
    </div>
  );
}