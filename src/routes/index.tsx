import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/forms";
import { FeatureList, ProductCover, SectionHeading } from "@/components/page-kit";
import { articles, paths, pillars, products } from "@/lib/site-data";
import portrait from "@/assets/dr-patrice.webp";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "The UnOrthoDoc — Build a Life That Fits" },
    { name: "description", content: "Thoughtful reflections and practical resources for meaningful work, stronger finances, and a full life beyond one title." },
    { property: "og:title", content: "The UnOrthoDoc — Build a Life That Fits" },
    { property: "og:description", content: "Ideas and resources from Dr. Patrice Smith for building a meaningful, multi-dimensional life." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  const featured = articles.find((a) => a.featured)!;
  const secondary = articles.filter((a) => !a.featured).slice(0, 3);

  return <>
    <section className="hero"><div className="site-container hero-grid">
      <div className="hero-copy">
        <span className="eyebrow">The UnOrthoDoc</span>
        <h1>Build a life<br/>that fits.</h1>
        <p>Thoughtful reflections, practical resources, and honest ideas for professionals building meaningful work, stronger finances, and a full life beyond one title.</p>
        <div className="hero-actions">
          <Button asChild size="lg" variant="editorial"><Link to="/the-climb">Join The Climb <ArrowRight/></Link></Button>
          <Button asChild size="lg" variant="outline"><Link to="/journal">Explore the Journal</Link></Button>
        </div>
      </div>
      <div className="hero-image"><img src={portrait} alt="Dr. Patrice Smith seated by a sunlit window" /></div>
    </div></section>

    <section className="section"><div className="site-container">
      <SectionHeading eyebrow="Start here" title="Find your way." text="There is more than one way to build a full life. Choose the path that meets you where you are."/>
      <div className="path-grid">{paths.map(path=>(
        <Link className="path-card" to={path.to} key={path.title}><span className="number">{path.n}</span><div><h3>{path.title}</h3><p>{path.text}</p></div><ArrowRight/></Link>
      ))}</div>
    </div></section>

    <section className="section"><div className="site-container">
      <SectionHeading eyebrow="From the journal" title="Ideas worth sitting with." action={{label:"View all writing",to:"/journal"}}/>
      <div className="featured-layout">
        <Link to="/journal" search={{ topic: featured.topic as string }} className="featured-article featured-editorial">
          <div className="featured-inner">
            <span>{featured.pillar} · {featured.date}</span>
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
            <span className="featured-cta">Read the reflection <ArrowRight/></span>
          </div>
        </Link>
        <div className="article-list">{secondary.map(a=>(
          <Link to="/journal" search={{ topic: a.topic as string }} className="article-card" key={a.id}>
            <span>{a.pillar} · {a.date}</span><h3>{a.title}</h3><p>{a.excerpt}</p>
          </Link>
        ))}</div>
      </div>
    </div></section>

    <section className="section section-ink"><div className="site-container newsletter-panel">
      <div><span className="eyebrow">A Sunday ritual</span><h2>The Climb is a letter for people building with ambition and intention.</h2><p>Honest reflections on work, family, identity, and making room for a life that feels like your own.</p></div>
      <NewsletterForm/>
    </div></section>

    <section className="section section-muted"><div className="site-container">
      <div className="pillar-strip">
        <p><span className="eyebrow">The editorial lens</span>Every piece sits inside one of three pillars.</p>
        <div>{pillars.map(p=>(
          <Link key={p.title} to="/journal" search={{ topic: p.topic as string }} className={`pillar-chip ${p.tone}`}>{p.title} <ArrowRight/></Link>
        ))}</div>
      </div>
    </div></section>

    <section className="section"><div className="site-container membership-layout">
      <div>
        <span className="eyebrow">Inside The Climb+</span><h2>A quieter space to go deeper.</h2>
        <p>The ongoing conversation for thoughtful professionals navigating ambition, entrepreneurship, motherhood, and a life that actually fits.</p>
        <FeatureList items={["Deeper weekly reflections","Private audio reflections","Guided prompts","Growing resource library","Occasional live conversations and workshops"]}/>
        <Button asChild size="lg" variant="editorial"><Link to="/the-climb-plus">Explore The Climb+ <ArrowRight/></Link></Button>
      </div>
      <div className="membership-card membership-card-light">
        <span className="eyebrow">Member’s edition</span><h3>Reflection for the season you’re in.</h3>
        <p>Less noise. More honesty, context, and practical perspective for what comes next.</p>
      </div>
    </div></section>

    <section className="section section-muted"><div className="site-container">
      <SectionHeading eyebrow="Learn & shop" title="Useful things for real life." action={{label:"Explore the shop",to:"/shop"}}/>
      <div className="product-grid">
        <Link to="/side-hustle-blueprint" className="product-card">
          <div className="product-cover ink"><span className="cover-kicker">Self-paced course</span><span className="cover-title"><span>The Side</span><span>Hustle</span><span>Blueprint</span></span><span className="cover-note">The UnOrthoDoc</span></div>
          <span>Self-paced course</span><h3>The Side Hustle Blueprint</h3>
          <p>A step-by-step framework for turning the skills you already have into meaningful additional income—without quitting your job.</p>
          <span className="product-cta">Explore the course <ArrowRight/></span>
        </Link>
        {products.map(p=>(
          <Link key={p.slug} to="/shop/$slug" params={{slug:p.slug}} className="product-card">
            <ProductCover product={p}/>
            <span>{p.kind}</span><h3>{p.title}</h3><p>{p.text}</p>
            <strong className="price">{p.price}</strong>
            <span className="product-cta">View details <ArrowRight/></span>
          </Link>
        ))}
      </div>
    </div></section>

    <section className="section"><div className="site-container collab-layout">
      <div><span className="eyebrow">Thoughtful partnerships</span><h2>Aligned work. Real relevance.</h2></div>
      <div>
        <p>Dr. Patrice selectively partners with organizations serving modern professionals across healthcare and practice technology, productivity, financial platforms, wellness, and oral care.</p>
        <Button asChild size="lg" variant="outline"><Link to="/partnerships">Explore collaboration opportunities <ArrowRight/></Link></Button>
      </div>
    </div></section>
  </>;
}
