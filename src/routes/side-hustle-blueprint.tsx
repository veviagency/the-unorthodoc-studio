import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutButton, MobileStickyCta, SectionHeading } from "@/components/page-kit";
import { COURSE_CHECKOUT_URL } from "@/lib/site-data";

export const Route = createFileRoute("/side-hustle-blueprint")({
  head: () => ({ meta: [
    { title: "The Side Hustle Blueprint — $197 — The UnOrthoDoc" },
    { name: "description", content: "A self-paced course for busy professionals turning existing skills into meaningful additional income. $197, or three payments of $75." },
    { property: "og:title", content: "The Side Hustle Blueprint" },
    { property: "og:description", content: "$197 or 3 payments of $75. Build something of your own without walking away from your career." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Blueprint,
});

const modules = [
  { title: "Find the value already in your experience", text: "Name the skills people already come to you for." },
  { title: "Shape an offer around a real need", text: "Turn that expertise into something specific someone can buy." },
  { title: "Build a clear, credible foundation", text: "Set up the few essentials you need and skip the rest." },
  { title: "Create a sustainable path to your first sale", text: "Find your first customers without a following or an ad budget." },
  { title: "Grow without letting the work take over", text: "Decide what scales, what waits, and what stays small on purpose." },
];

function Blueprint() {
  return <>
    <section className="page-hero compact-hero offer-hero"><div className="site-container offer-grid">
      <div>
        <span className="eyebrow">Self-paced course</span>
        <h1>Build something of your own—without blowing up your life.</h1>
        <p>Turn the skills you already have into meaningful additional income, on the time your real life can give you.</p>
      </div>
      <div className="offer-card">
        <div className="price-row"><span className="price">$197</span></div>
        <p className="price-alt">or 3 payments of $75</p>
        <CheckoutButton label="Enroll now" url={COURSE_CHECKOUT_URL} size="lg"/>
        <p className="price-note">Lifetime access, work at your own pace.</p>
      </div>
    </div></section>
    <section className="section"><div className="site-container course-layout">
      <div>
        <SectionHeading eyebrow="Built for busy professionals" title="Serious guidance. No hustle theater." text="Five steps that move you from a vague idea to a clear offer, designed around the responsibilities you already carry."/>
      </div>
      <div className="course-modules">{modules.map((m) => (
        <div className="course-module" key={m.title}>
          <div><h3>{m.title}</h3><p>{m.text}</p></div>
        </div>
      ))}</div>
    </div></section>
    <section className="section section-muted"><div className="site-container collab-layout">
      <h2>You do not have to become someone else to build something new.</h2>
      <div>
        <p>Start with what you know, what people need, and what your real life can hold.</p>
        <Button asChild size="lg" variant="editorial"><Link to="/contact" search={{ topic: "collaboration" }}>Enroll — $197 <ArrowRight/></Link></Button>
      </div>
    </div></section>
    <MobileStickyCta label="Enroll — $197" to="/contact"/>
  </>;
}
