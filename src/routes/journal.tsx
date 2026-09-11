import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/page-kit";
import { activeJournalTopics, articles, journalTopics } from "@/lib/site-data";

export const Route = createFileRoute("/journal")({
  validateSearch: (search: Record<string, unknown>): { topic?: string } =>
    typeof search['topic'] === "string" ? { topic: search['topic'] as string } : {},
  head: () => ({ meta: [
    { title: "The Journal — The UnOrthoDoc" },
    { name: "description", content: "Thoughtful writing from Dr. Patrice Smith on life, work, finances, motherhood, side hustles, and smile health." },
    { property: "og:title", content: "The Journal — The UnOrthoDoc" },
    { property: "og:description", content: "Reflections for building a meaningful life beyond one title." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Journal,
});

function Journal() {
  const { topic } = Route.useSearch();
  const active = journalTopics.find((t) => t.slug === topic);
  const featured = articles.find((a) => a.featured)!;
  const list = active ? articles.filter((a) => a.topic === active.slug) : articles.filter((a) => !a.featured);

  return <>
    <section className="page-hero journal-hero"><div className="site-container journal-hero-grid">
      <div>
        <span className="eyebrow">The Journal</span>
        <h1>Thoughtful ideas for a life in progress.</h1>
        <p>Essays and reflections on the questions that rarely fit inside one professional title.</p>
      </div>
      <Link to="/journal" search={{ topic: featured.topic as string }} className="journal-feature">
        <span className="eyebrow">Featured · {featured.date}</span>
        <h2>{featured.title}</h2>
        <p>{featured.excerpt}</p>
        <span className="journal-feature-cta">Explore {featured.pillar} <ArrowRight/></span>
      </Link>
    </div></section>

    <section className="section">
      <div className="site-container">
        <nav className="topic-filter" aria-label="Filter by topic">
          <Link to="/journal" search={{}} resetScroll={false} data-active={!active ? "true" : undefined}>All writing</Link>
          {activeJournalTopics.map((t) => (
            <Link key={t.slug} to="/journal" search={{ topic: t.slug as string }} resetScroll={false} data-active={active?.slug === t.slug ? "true" : undefined}>{t.label}</Link>
          ))}
        </nav>

        <SectionHeading
          title={active ? active.label : "All writing"}
          text={active ? `Essays and reflections on ${active.pillar.toLowerCase()}.` : "Recent essays and reflections from Dr. Patrice Smith."}
        />

        {list.length === 0
          ? <p className="empty-note">There are no posts under this topic yet. <Link className="text-link" to="/journal" search={{}}>View all writing</Link></p>
          : <div className="editorial-list">{list.map((a) => (
              <article className="editorial-row" key={a.id}>
                <span className="eyebrow">{a.pillar} · {a.date}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </article>
            ))}</div>}
      </div>
    </section>
  </>;
}
