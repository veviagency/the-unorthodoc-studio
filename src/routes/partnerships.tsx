import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/page-kit";

export const Route = createFileRoute("/partnerships")({
  head: () => ({ meta: [
    { title: "Partnerships & Press — The UnOrthoDoc" },
    { name: "description", content: "Media, podcast, and brand collaboration opportunities with Dr. Patrice Smith, orthodontist, writer, and founder of The UnOrthoDoc." },
    { property: "og:title", content: "Partner With Dr. Patrice Smith" },
    { property: "og:description", content: "Media features, podcast conversations, and thoughtful brand collaborations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Partnerships,
});

const areas = [
  { title: "Media features & interviews", text: "Commentary on oral health, modern work, and building a career that holds a full life." },
  { title: "Podcast conversations", text: "Long-form discussion for shows covering health, ambition, motherhood, or entrepreneurship." },
  { title: "Brand collaborations", text: "Products and services genuinely useful to professionals—reviewed for fit before anything is said publicly." },
  { title: "Editorial & written work", text: "Guest essays and contributed writing in the same voice as The Journal." },
  { title: "Future speaking & advisory", text: "Open to the right invitations as the platform grows; share the format and timing you have in mind." },
];

function Partnerships() {
  return <>
    <PageHero eyebrow="Collaborate" title="Thoughtful partnerships, built on real alignment." intro="I work selectively with organizations whose products, services, or platforms genuinely support the health, work, and lives of modern professionals.">
      <Button asChild size="lg" variant="editorial"><Link to="/contact" search={{ topic: "media-kit" }}>Request the media kit <ArrowRight/></Link></Button>
    </PageHero>
    <section className="section"><div className="site-container collab-layout">
      <div>
        <SectionHeading eyebrow="Where I can help" title="Credibility with a human point of view." text="As a practicing orthodontist, founder, writer, and mother, I bring context that reaches beyond a single lane."/>
      </div>
      <div className="editorial-list">{areas.map((a, i) => (
        <div className="editorial-row" key={a.title}>
          <span className="eyebrow">0{i + 1}</span>
          <h3>{a.title}</h3>
          <p>{a.text}</p>
        </div>
      ))}</div>
    </div></section>
    <section className="section section-ink"><div className="site-container newsletter-panel">
      <div><span className="eyebrow">Start a conversation</span><h2>Have an opportunity that belongs here?</h2><p>Share the context, goals, timing, and what makes the collaboration feel aligned.</p></div>
      <Button asChild size="lg" variant="inverse"><Link to="/contact" search={{ topic: "collaboration" }}>Explore collaboration opportunities <ArrowRight/></Link></Button>
    </div></section>
  </>;
}
