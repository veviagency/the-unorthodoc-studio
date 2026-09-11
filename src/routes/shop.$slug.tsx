import { createFileRoute, notFound } from "@tanstack/react-router";
import { ExternalCta } from "@/components/forms";
import { MobileStickyCta, ProductCover } from "@/components/page-kit";
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
  const apparel = product.collection === "apparel";
  const cta = apparel ? `Shop the tee — ${product.price}` : `Get it — ${product.price}`;
  return <>
    <section className="page-hero product-hero"><div className="site-container product-hero-grid">
      <div>
        <span className="eyebrow">{product.kind}</span>
        <h1>{product.title}</h1>
        <p>{product.text}</p>
        <div className="hero-actions"><ExternalCta href={product.url} label={cta}/></div>
      </div>
      <ProductCover product={product} large/>
    </div></section>
    <section className="section"><div className="site-container course-layout">
      <div>
        <span className="eyebrow">{apparel ? "Wear it well" : "How to use it"}</span>
        <h2>{apparel ? "Soft triblend, everyday fit." : "Built for real weeks, not perfect ones."}</h2>
        <p>{apparel
          ? "Available in Vintage Red, Premium Heather, Military Green, Vintage Black, and Vintage Royal. Wear it and tag @dr.unorthodoc."
          : "This is a digital download you can print or work through on screen, made to fit around a full calendar rather than replace it."}</p>
      </div>
      <div className="membership-card membership-card-light">
        <span className="eyebrow">Details</span>
        <h3>{product.title}</h3>
        <div className="price">{product.price}</div>
        <p>{apparel ? "Sizes and colours are selected at checkout on the UnOrthoDoc store." : "Delivered as an instant download through the UnOrthoDoc store."}</p>
        <ExternalCta href={product.url} label={apparel ? "Choose your size" : "Go to the store"}/>
      </div>
    </div></section>
    <MobileStickyCta label={cta} href={product.url}/>
  </>;
}
