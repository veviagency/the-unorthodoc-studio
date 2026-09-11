import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DefinitionCallout, PageHero, SectionHeading } from "@/components/page-kit";
import portraitRed from "@/assets/dr-patrice-red.webp";

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
    <PageHero portraitImage portraitSrc={portraitRed} portraitAlt="Dr. Patrice Smith in a red blazer" eyebrow="Meet Dr. Patrice" title="A full life was never going to fit in one box." intro="I’m Patrice—an orthodontist, writer, wife, mother of three, and the person behind The UnOrthoDoc."/>
    <section className="section"><div className="site-container about-editorial">
      <div className="about-head"><SectionHeading eyebrow="The story" title="Beyond the labels."/></div>
      <div className="about-side">
        <div className="about-quote">The UnOrthoDoc is a reflection of a multifaceted life.</div>
        <DefinitionCallout/>
      </div>
      <div className="about-copy">
        <p>I built this place for honest reflections, practical resources, and the kind of insight I wanted when I was figuring things out—without pretending that family, ambition, identity, and wellbeing live in separate rooms.</p>
        <p>The name comes from being a little unorthodox. I love my work as an orthodontist. I also kept writing, creating, and building beyond it, and I stopped apologizing for that a long time ago.</p>
        <p>If you are carrying more than one thing at once, you are in the right company here.</p>
        <Button asChild variant="outline"><Link to="/journal">Read the journal</Link></Button>
      </div>
    </div></section>
    <section className="section section-muted"><div className="site-container">
      <p className="quiet-callout">Looking for clinical care? My Washington, DC practice has its own home. <a className="text-link" href="https://www.infinityorthodc.com/" target="_blank" rel="noreferrer">Visit Infinity Orthodontics <ArrowUpRight/></a></p>
    </div></section>
  </>;
}
