import { createFileRoute, notFound } from "@tanstack/react-router";
import { WaitlistAction } from "@/components/forms";
import { MobileStickyCta, PageHero, ProductCover } from "@/components/page-kit";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.product.title} — The UnOrthoDoc Shop` : "Product unavailable — The UnOrthoDoc" },
    { name: "description", content: loaderData?.product.text ?? "This product is not currently available." },
    { property: "og:title", content: loaderData?.product.title ?? "Product unavailable" },
    { property: "og:description", content: loaderData?.product.text ?? "This product is not currently available." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Product,
});

function Product() {
  const { product } = Route.useLoaderData();
  return <>
    <section className="page-hero product-hero"><div className="site-container product-hero-grid">
      <div>
        <span className="eyebrow">{product.kind}</span>
        <h1>{product.title}</h1>
        <p>{product.text}</p>
        <div className="hero-actions"><WaitlistAction label={product.status}/></div>
      </div>
      <ProductCover product={product} large/>
    </div></section>
    <section className="section"><div className="site-container course-layout">
      <div>
        <span className="eyebrow">Made for real schedules</span>
        <h2>A useful resource, without the overwhelm.</h2>
        <p>This product page is ready for final photography, detailed contents, delivery information, and a live payment link.</p>
      </div>
      <div className="membership-card">
        <span className="eyebrow">Product details</span>
        <h3>{product.title}</h3>
        <div className="price">{product.price}</div>
        <p>Checkout is not open yet. Join the waitlist and you’ll hear the moment it’s available—no card details are collected.</p>
        <WaitlistAction label={product.status}/>
      </div>
    </div></section>
    <MobileStickyCta label={product.status}/>
  </>;
}
