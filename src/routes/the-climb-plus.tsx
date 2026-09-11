import { createFileRoute } from "@tanstack/react-router";
import { CheckoutButton, FeatureList, MobileStickyCta } from "@/components/page-kit";
import { MEMBERSHIP_CHECKOUT_URL } from "@/lib/site-data";

export const Route = createFileRoute("/the-climb-plus")({
  head: () => ({ meta: [
    { title: "The Climb+ Membership — $19/month — The UnOrthoDoc" },
    { name: "description", content: "The Climb+ is $19 a month or $179 a year: deeper reflections, private audio, guided prompts, resources, and live conversations." },
    { property: "og:title", content: "The Climb+ Membership" },
    { property: "og:description", content: "$19/month or $179/year for deeper reflections, private audio, prompts, and live conversations." },
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
    <section className="page-hero compact-hero offer-hero"><div className="site-container offer-grid">
      <div>
        <span className="eyebrow">The Climb+</span>
        <h1>For the conversations that need more room.</h1>
        <p>A quieter space for ambition, entrepreneurship, motherhood, and building a life that actually fits.</p>
      </div>
      <div className="offer-card">
        <div className="price-row"><span className="price">$19</span><span>/month</span></div>
        <p className="price-alt">or $179 a year</p>
        <CheckoutButton label="Join The Climb+" url={MEMBERSHIP_CHECKOUT_URL} size="lg"/>
        <p className="price-note">Cancel any time.</p>
      </div>
    </div></section>
    <section className="section section-ink"><div className="site-container membership-layout">
      <div>
        <span className="eyebrow">The member experience</span>
        <h2>Depth over volume.</h2>
        <p>The Climb+ is designed to feel intimate, useful, and human—something to return to when you need perspective rather than more information.</p>
        <FeatureList items={benefits}/>
      </div>
      <div className="membership-card">
        <span className="eyebrow">What it costs</span>
        <h3>$19 a month, or $179 a year.</h3>
        <p>Annual membership works out to just under $15 a month and includes everything in the monthly plan.</p>
        <CheckoutButton label="Join The Climb+" url={MEMBERSHIP_CHECKOUT_URL} size="lg" variant="inverse"/>
      </div>
    </div></section>
    <MobileStickyCta label="Join The Climb+ — $19/month" checkoutUrl={MEMBERSHIP_CHECKOUT_URL}/>
  </>;
}
