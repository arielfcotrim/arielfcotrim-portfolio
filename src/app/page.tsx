import Link from "next/link";
import { ContentCard } from "@/components/content-card";
import { PageIntro } from "@/components/page-intro";
import { SectionHeading } from "@/components/section-heading";
import {
  documentationTracks,
  experienceTracks,
  portfolioPrinciples,
  projectTracks,
  siteStats,
} from "@/data/site";

export default function Home() {
  return (
    <div className="pb-24 pt-8 sm:pb-32">
      <section className="page-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-8 rounded-[2rem] border border-border/70 bg-surface px-6 py-8 shadow-[0_30px_80px_rgba(22,33,29,0.08)] sm:px-10 sm:py-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/15 bg-accent-soft px-4 py-2 text-sm font-medium text-accent-strong">
            Professional portfolio
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Docs-as-code platform
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">
              Ariel Forner Cotrim
            </p>
            <h1 className="display-title max-w-4xl text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
              Automation infrastructure, backend quality engineering, and
              AI-assisted development in one portfolio platform.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              This site combines professional positioning, project depth, and
              technical documentation. It is designed to act as both a public
              portfolio and a structured engineering knowledge base.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
            >
              Explore projects
            </Link>
            <Link
              href="/documentation"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-strong"
            >
              Read technical docs
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center rounded-full border border-border/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/60"
            >
              View resume summary
            </Link>
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="glass-panel grid-outline rounded-[2rem] p-6 shadow-[0_20px_60px_rgba(20,92,82,0.12)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Site focus
            </p>
            <ul className="mt-6 space-y-4">
              {siteStats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-start justify-between gap-6 border-b border-border/60 pb-4 last:border-b-0 last:pb-0"
                >
                  <div>
                    <p className="text-2xl font-semibold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {stat.label}
                    </p>
                  </div>
                  <p className="max-w-[14rem] text-right text-sm leading-6 text-muted">
                    {stat.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-[#18231f] p-6 text-white shadow-[0_20px_60px_rgba(22,33,29,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Current direction
            </p>
            <div className="mt-5 space-y-3">
              <p className="display-title text-3xl">
                Surface clarity, technical depth underneath.
              </p>
              <p className="text-sm leading-7 text-white/72">
                Recruiter-friendly overview pages at the top. Detailed project,
                architecture, and documentation routes underneath.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="page-shell mt-20">
        <SectionHeading
          eyebrow="Positioning"
          title="A portfolio structure built for both scanning and technical drill-down"
          description="The homepage stays concise. The rest of the site is organized to let readers move from summary to detail without losing context."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {portfolioPrinciples.map((principle) => (
            <ContentCard
              key={principle.title}
              title={principle.title}
              description={principle.description}
              eyebrow={principle.eyebrow}
            />
          ))}
        </div>
      </section>

      <section className="page-shell mt-20 grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Experience"
            title="Core engineering focus areas"
            description="Employer-specific timeline details can be layered in next. The route structure is already aligned around the areas this portfolio highlights."
          />
          <div className="mt-8 space-y-4">
            {experienceTracks.map((track) => (
              <div
                key={track.title}
                className="rounded-[1.5rem] border border-border/70 bg-surface px-5 py-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {track.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Projects"
            title="Selected technical tracks ready for case-study pages"
            description="These are the kinds of implementation stories the site is set up to expand into full project detail pages."
          />
          <div className="mt-8 grid gap-5">
            {projectTracks.map((project) => (
              <ContentCard
                key={project.title}
                title={project.title}
                description={project.description}
                eyebrow={project.category}
                href="/projects"
                linkLabel="Open project section"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell mt-20">
        <SectionHeading
          eyebrow="Documentation"
          title="Technical writing routes are wired around engineering domains"
          description="The documentation section is prepared for MDX-backed content covering architecture, APIs, testing strategy, infrastructure, and AI integration notes."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {documentationTracks.map((track) => (
            <ContentCard
              key={track.title}
              title={track.title}
              description={track.description}
              eyebrow={track.slug.join(" / ")}
              href={`/documentation/${track.slug.join("/")}`}
              linkLabel="Open route"
            />
          ))}
        </div>
      </section>

      <section className="page-shell mt-20">
        <PageIntro
          eyebrow="Next steps"
          title="The platform is now structured. Next comes real content population."
          description="The routes, navigation, and layout now reflect the intended portfolio architecture. The next pass is replacing placeholder summaries with your actual career entries, certifications, project case studies, and MDX documentation."
          actions={[
            { href: "/experience", label: "Review experience structure" },
            { href: "/documentation", label: "Review documentation structure", tone: "secondary" },
          ]}
        />
      </section>
    </div>
  );
}

