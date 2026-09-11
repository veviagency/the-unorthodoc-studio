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
    <section className="section"><div className="site-container">
      <p className="quiet-callout">{apparel
        ? "Sizes and colours are selected at checkout on the UnOrthoDoc store."
        : "A digital download you can print or use on screen, delivered instantly through the UnOrthoDoc store."} <ExternalCta href={product.url} label={apparel ? "Choose your size" : "Go to the store"}/></p>
    </div></section>
    <MobileStickyCta label={cta} href={product.url}/>
  </>;
}
