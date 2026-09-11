import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/dr-patrice.webp";
import type { products } from "@/lib/site-data";

export function PageHero({ eyebrow, title, intro, children, portraitImage = false, compact = false }: { eyebrow: string; title: string; intro: string; children?: ReactNode; portraitImage?: boolean; compact?: boolean }) {
  const classes = ["page-hero", portraitImage ? "portrait-hero" : "", compact ? "compact-hero" : ""].filter(Boolean).join(" ");
  return <section className={classes}><div className="site-container page-hero-grid"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>{children && <div className="hero-actions">{children}</div>}</div>{portraitImage && <div className="portrait-frame"><img src={portrait} alt="Dr. Patrice Smith, founder of The UnOrthoDoc" /></div>}</div></section>;
}

export function SectionHeading({ eyebrow, title, text, action }: { eyebrow?: string; title: string; text?: string; action?: { label: string; to: "/journal" | "/shop" | "/partnerships" } }) {
  return <div className="section-heading"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div>{action && <Link to={action.to}>{action.label} <ArrowRight/></Link>}</div>;
}

export function FeatureList({ items }: { items: readonly string[] }) {
  return <ul className="feature-list">{items.map(item => <li key={item}><Check/>{item}</li>)}</ul>;
}

export function MobileStickyCta({ label, href, onClick }: { label: string; href?: string; onClick?: () => void }) {
  return <div className="mobile-sticky">{href
    ? <Button asChild variant="editorial" className="w-full"><a href={href} target="_blank" rel="noreferrer">{label}<ArrowRight/></a></Button>
    : <Button variant="editorial" className="w-full" onClick={onClick}>{label}<ArrowRight/></Button>}</div>;
}

/** Typographic cover treatment for shop items. */
export function ProductCover({ product, large = false }: { product: (typeof products)[number]; large?: boolean }) {
  return (
    <div className={`product-cover ${product.tone}${large ? " large" : ""}`} aria-hidden>
      <span className="cover-kicker">{product.coverKicker}</span>
      <span className="cover-title">{product.coverTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
      <span className="cover-note">{product.coverNote}</span>
    </div>
  );
}
