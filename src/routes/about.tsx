import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DefinitionCallout, PageHero, SectionHeading } from "@/components/page-kit";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Dr. Patrice Smith — The UnOrthoDoc" },
    { name: "description", content: "Meet Dr. Patrice Smith: orthodontist, writer, wife, mother of three, entrepreneur, and founder of The UnOrthoDoc." },
    { property: "og:title", content: "About Dr. Patrice Smith" },
    { property: "og:description", content: "The story and perspective behind The UnOrthoDoc." },
    { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: About,
});

function About() {
  return <>
    <PageHero portraitImage eyebrow="Meet Dr. Patrice" title="A full life was never going to fit in one box." intro="I’m Patrice—an orthodontist, writer, wife, mother of three, and the person behind The UnOrthoDoc."/>
    <section className="section"><div className="site-container about-layout">
      <div>
        <SectionHeading eyebrow="The story" title="Beyond the labels."/>
        <div className="quote-block">The UnOrthoDoc is a reflection of a multifaceted life.</div>
        <DefinitionCallout/>
      </div>
      <div>
        <p>I built this place for honest reflections, practical resources, and the kind of insight I wanted when I was figuring things out—without pretending that family, ambition, identity, and wellbeing live in separate rooms.</p>
        <p>The name comes from being a little unorthodox. I love my work as an orthodontist. I also kept writing, creating, and building beyond it, and I stopped apologizing for that a long time ago.</p>
        <p>If you are carrying more than one thing at once, you are in the right company here.</p>
        <Button asChild variant="outline"><Link to="/journal">Read the journal</Link></Button>
      </div>
    </div></section>
    <section className="section section-muted"><div className="site-container collab-layout">
      <div><span className="eyebrow">Clinical care</span><h2>Looking for an orthodontist?</h2></div>
      <div>
        <p>The UnOrthoDoc is my personal media and education platform. My Washington, DC clinical practice has its own dedicated home.</p>
        <Button asChild variant="outline"><a href="https://www.infinityorthodc.com/" target="_blank" rel="noreferrer">Visit Infinity Orthodontics <ArrowUpRight/></a></Button>
      </div>
    </div></section>
  </>;
}
