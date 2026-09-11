import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureList, MobileStickyCta, PageHero } from "@/components/page-kit";

export const Route = createFileRoute("/the-climb-plus")({
  head: () => ({ meta: [
    { title: "The Climb+ Membership — The UnOrthoDoc" },
    { name: "description", content: "A deeper membership space for conversations around ambition, entrepreneurship, motherhood, and a life that fits." },
    { property: "og:title", content: "The Climb+ Membership" },
    { property: "og:description", content: "Deeper reflections, private audio, guided prompts, resources, and live conversations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Plus,
});

const benefits = [
  "Deeper weekly reflections",
  "Private audio reflections",
  "Guided prompts to help you apply what resonates",
  "A growing library of thoughtful resources",
  "Occasional live conversations and workshops",
] as const;

function Plus() {
  return <>
    <PageHero eyebrow="The Climb+" title="For the conversations that need more room." intro="A quieter space for deeper conversations around ambition, entrepreneurship, motherhood, and building a life that actually fits."/>
    <section className="section section-ink"><div className="site-container membership-layout">
      <div>
        <span className="eyebrow">The member experience</span>
        <h2>Depth over volume.</h2>
        <p>The Climb+ is designed to feel intimate, useful, and human—something to return to when you need perspective rather than more information.</p>
        <FeatureList items={benefits}/>
      </div>
      <div className="membership-card">
        <span className="eyebrow">Start with the letter</span>
        <h3>The Climb, every Sunday.</h3>
        <p>Membership details are shared with readers of The Climb first. Join the Sunday letter and you’ll hear about The Climb+ directly from Dr. Patrice.</p>
        <Button asChild size="lg" variant="inverse"><Link to="/the-climb">Join The Climb <ArrowRight/></Link></Button>
      </div>
    </div></section>
    <MobileStickyCta label="Join The Climb"/>
  </>;
}
