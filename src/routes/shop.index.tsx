import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, ProductCover, SectionHeading } from "@/components/page-kit";
import { products } from "@/lib/site-data";

const collections = [
  { slug: "digital", label: "Planners & E-Books" },
  { slug: "apparel", label: "Apparel" },
] as const;

export const Route = createFileRoute("/shop/")({
  head: () => ({ meta: [
    { title: "Shop — The UnOrthoDoc" },
    { name: "description", content: "Shop The UnOrthoDoc apparel, including the Contrary To What Is Usual triblend unisex tee." },
    { property: "og:title", content: "Shop — The UnOrthoDoc" },
    { property: "og:description", content: "Apparel for people building beyond one title." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Shop,
});

function Shop() {
  const { collection } = Route.useSearch();
  const active = collections.find((c) => c.slug === collection);
  const list = active ? products.filter((p) => p.collection === active.slug) : products;

  return <>
    <PageHero eyebrow="The shop" title="Practical resources for a full life." intro="Planners, e-books, and workbooks I built for the way I actually work—plus apparel for people building beyond one title." compact/>
    <section className="section"><div className="site-container">
      <nav className="topic-filter" aria-label="Filter by collection">
        <Link to="/shop" search={{}} resetScroll={false} data-active={!active ? "true" : undefined}>Everything</Link>
        {collections.map((c) => (
          <Link key={c.slug} to="/shop" search={{ collection: c.slug as string }} resetScroll={false} data-active={active?.slug === c.slug ? "true" : undefined}>{c.label}</Link>
        ))}
      </nav>
      <SectionHeading eyebrow={active ? `Collection · ${active.label}` : "The collection"} title="Made to be used often."/>
      <div className="product-grid">{list.map((p) => (
        <Link key={p.slug} to="/shop/$slug" params={{ slug: p.slug }} className="product-card">
          <ProductCover product={p}/>
          <span>{p.kind}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
          <strong className="price">{p.price}</strong>
          <span className="product-cta">View details <ArrowRight/></span>
        </Link>
      ))}</div>
    </div></section>
  </>;
}
