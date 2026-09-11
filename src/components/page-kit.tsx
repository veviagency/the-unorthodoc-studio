import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/dr-patrice.webp";
import { productImages, type products } from "@/lib/site-data";

export function PageHero({ eyebrow, title, intro, children, portraitImage = false, compact = false, portraitSrc, portraitAlt = "Dr. Patrice Smith, founder of The UnOrthoDoc" }: { eyebrow: string; title: string; intro: string; children?: ReactNode; portraitImage?: boolean; compact?: boolean; portraitSrc?: string; portraitAlt?: string }) {
  const classes = ["page-hero", portraitImage ? "portrait-hero" : "", compact ? "compact-hero" : ""].filter(Boolean).join(" ");
  return <section className={classes}><div className="site-container page-hero-grid"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>{children && <div className="hero-actions">{children}</div>}</div>{portraitImage && <div className="portrait-frame"><img src={portraitSrc ?? portrait} alt={portraitAlt} /></div>}</div></section>;
}

export function SectionHeading({ eyebrow, title, text, action }: { eyebrow?: string; title: string; text?: string; action?: { label: string; to: "/journal" | "/shop" | "/partnerships" } }) {
  return <div className="section-heading"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div>{action && <Link to={action.to}>{action.label} <ArrowRight/></Link>}</div>;
}

export function FeatureList({ items }: { items: readonly string[] }) {
  return <ul className="feature-list">{items.map(item => <li key={item}><Check/>{item}</li>)}</ul>;
}

export function MobileStickyCta({ label, href, to = "/the-climb", checkoutUrl }: { label: string; href?: string; to?: "/the-climb" | "/contact" | "/shop"; checkoutUrl?: string | null }) {
  const bar = checkoutUrl !== undefined
    ? <div className="mobile-sticky"><CheckoutButton label={label} url={checkoutUrl} className="w-full"/></div>
    : <div className="mobile-sticky">{href
        ? <Button asChild variant="editorial" className="w-full"><a href={href} target="_blank" rel="noreferrer">{label}<ArrowRight/></a></Button>
        : <Button asChild variant="editorial" className="w-full"><Link to={to}>{label}<ArrowRight/></Link></Button>}</div>;
  return bar;
}

/** Checkout CTA: links to the live checkout when connected, otherwise an inert integration-ready state. */
export function CheckoutButton({ label, url, size, variant = "editorial", className }: { label: string; url: string | null; size?: "lg" | "sm"; variant?: "editorial" | "inverse"; className?: string }) {
  if (url) {
    return <Button asChild size={size} variant={variant} className={className}><a href={url} target="_blank" rel="noreferrer">{label}<ArrowRight/></a></Button>;
  }
  return <Button type="button" size={size} variant={variant} className={className} disabled aria-disabled title="Checkout opens soon">{label}<ArrowRight/></Button>;
}

/** Real cover artwork where available, with a typographic fallback. */
export function ProductCover({ product, large = false }: { product: (typeof products)[number]; large?: boolean }) {
  const image = productImages[product.slug];
  if (image) {
    return (
      <div className={`product-photo${large ? " large" : ""}`}>
        <img src={image} alt={`${product.title} cover`} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`product-cover ${product.tone}${large ? " large" : ""}`} aria-hidden>
      <span className="cover-kicker">{product.coverKicker}</span>
      <span className="cover-title">{product.coverTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
      <span className="cover-note">{product.coverNote}</span>
    </div>
  );
}

/** Small dictionary-style brand callout. */
export function DefinitionCallout() {
  return (
    <aside className="definition-callout">
      <span className="definition-word">un·ortho·doc</span>
      <span className="definition-say">/ˌən-ˈȯr-thə-ˌdäk/ · noun</span>
      <p>A doctor who does it a little differently—honoring the calling, and still building a life beyond the title.</p>
    </aside>
  );
}
