import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/dr-patrice.webp";

export function PageHero({ eyebrow, title, intro, children, portraitImage = false }: { eyebrow: string; title: string; intro: string; children?: ReactNode; portraitImage?: boolean }) {
  return <section className={portraitImage ? "page-hero portrait-hero" : "page-hero"}><div className="site-container page-hero-grid"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>{children && <div className="hero-actions">{children}</div>}</div>{portraitImage && <div className="portrait-frame"><img src={portrait} alt="Dr. Patrice Smith, founder of The UnOrthoDoc" /></div>}</div></section>;
}

export function SectionHeading({ eyebrow, title, text, action }: { eyebrow?: string; title: string; text?: string; action?: { label: string; to: "/journal" | "/shop" | "/partnerships" } }) {
  return <div className="section-heading"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div>{action && <Link to={action.to}>{action.label} <ArrowRight/></Link>}</div>;
}

export function FeatureList({ items }: { items: readonly string[] }) {
  return <ul className="feature-list">{items.map(item => <li key={item}><Check/>{item}</li>)}</ul>;
}

export function MobileStickyCta({ label, onClick }: { label: string; onClick?: () => void }) {
  return <div className="mobile-sticky"><Button variant="editorial" className="w-full" onClick={onClick}>{label}<ArrowRight/></Button></div>;
}
