import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/page-kit";
import { articles, journalTopics, pillars } from "@/lib/site-data";

export const Route = createFileRoute("/journal")({
  validateSearch: (search: Record<string, unknown>) => ({
    topic: typeof search.topic === "string" ? search.topic : undefined,
  }),
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
        <span className="eyebrow">Concept piece · {featured.pillar}</span>
        <h2>{featured.title}</h2>
        <p>{featured.excerpt}</p>
        <span className="journal-feature-cta">Read the reflection <ArrowRight/></span>
      </Link>
    </div></section>

    <section className="section">
      <div className="site-container">
        <nav className="topic-filter" aria-label="Filter by topic">
          <Link to="/journal" search={{ topic: undefined }} data-active={!active ? "true" : undefined}>All writing</Link>
          {journalTopics.map((t) => (
            <Link key={t.slug} to="/journal" search={{ topic: t.slug as string }} data-active={active?.slug === t.slug ? "true" : undefined}>{t.label}</Link>
          ))}
        </nav>

        <SectionHeading
          eyebrow={active ? `Topic · ${active.pillar}` : "All writing"}
          title={active ? active.label : "Ideas worth sitting with."}
          text={active ? `Concept pieces shaped for ${active.label.toLowerCase()}. Final published titles will replace these at launch.` : "These are polished concept pieces created for this design—ready to be replaced with Dr. Patrice’s published writing."}
        />

        {list.length === 0
          ? <p className="empty-note">No pieces are drafted under this topic yet. <Link className="text-link" to="/journal" search={{ topic: undefined }}>View all writing</Link></p>
          : <div className="editorial-list">{list.map((a, i) => (
              <article className="editorial-row" key={a.id}>
                <span className="eyebrow">0{i + 1} · {a.pillar}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}<span className="concept-tag">Concept</span></p>
              </article>
            ))}</div>}
      </div>
    </section>

    <section className="section section-muted"><div className="site-container">
      <SectionHeading eyebrow="The editorial lens" title="A whole-life approach." text="Work matters. So do the person you are, the people you love, and the life you are creating around it. Every piece here sits inside one of three pillars."/>
      <div className="pillar-grid">{pillars.map((p) => (
        <Link key={p.title} to="/journal" search={{ topic: p.topic as string }} className={`pillar-card ${p.tone}`}>
          <span>{p.kicker}</span><h3>{p.title}</h3><p>{p.text}</p>
          <span className="pillar-cta">Read {p.title} <ArrowRight/></span>
        </Link>
      ))}</div>
    </div></section>
  </>;
}
