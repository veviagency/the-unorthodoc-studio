import { Link } from "@tanstack/react-router";
import { ChevronDown, Instagram, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { navGroups } from "@/lib/site-data";

type NavGroup = (typeof navGroups)[number];

function DesktopNavGroup({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chevron = useRef<HTMLButtonElement | null>(null);

  const openNow = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 220);
  };

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  return (
    <div
      className="nav-group"
      data-open={open ? "true" : undefined}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onFocus={openNow}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false); }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          setOpen(false);
          chevron.current?.focus();
        }
      }}
    >
      <Link {...group.hub} className="nav-hub" activeProps={{ "data-active": "true" }}>{group.label}</Link>
      <button
        type="button"
        ref={chevron}
        className="nav-chevron"
        aria-expanded={open}
        aria-label={`${group.label} menu`}
        onClick={() => setOpen((v) => !v)}
      >
        <ChevronDown aria-hidden />
      </button>
      <div className="nav-dropdown" hidden={!open}>
        {group.items.map((item) => (
          <Link key={item.label} {...item.link} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
      </div>
    </div>
  );
}

function MobileNav({ close }: { close: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <Link to="/" onClick={close}>Home</Link>
      {navGroups.map((group) => {
        const expanded = openGroup === group.label;
        return (
          <div className="mobile-group" key={group.label}>
            <div className="mobile-group-head">
              <Link {...group.hub} onClick={close}>{group.label}</Link>
              <button
                type="button"
                aria-expanded={expanded}
                aria-label={`${group.label} submenu`}
                onClick={() => setOpenGroup(expanded ? null : group.label)}
              >
                <ChevronDown aria-hidden style={{ transform: expanded ? "rotate(180deg)" : undefined }} />
              </button>
            </div>
            {expanded && (
              <div className="mobile-sublinks">
                {group.items.map((item) => (
                  <Link key={item.label} {...item.link} onClick={close}>{item.label}</Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
      <Link to="/about" onClick={close}>About</Link>
      <Button asChild><Link to="/the-climb" onClick={close}>Join The Climb</Link></Button>
    </nav>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="announcement">The Climb arrives every Sunday. <Link to="/the-climb">Receive the letter <span aria-hidden>→</span></Link></div>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link to="/" className="wordmark" aria-label="The UnOrthoDoc home"><span>The</span> UnOrthoDoc</Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ "data-active": "true" }}>Home</Link>
            {navGroups.map((group) => <DesktopNavGroup group={group} key={group.label} />)}
            <Link to="/about" activeProps={{ "data-active": "true" }}>About</Link>
          </nav>
          <Button asChild className="header-cta"><Link to="/the-climb">Join The Climb</Link></Button>
          <Button variant="ghost" size="icon" className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</Button>
        </div>
        {open && <MobileNav close={() => setOpen(false)} />}
      </header>

      <div className="sticky-header" data-visible={stuck ? "true" : undefined} aria-hidden={!stuck}>
        <div className="site-container sticky-inner">
          <Link to="/" className="sticky-mark" tabIndex={stuck ? 0 : -1}>The UnOrthoDoc</Link>
          <nav className="sticky-nav" aria-label="Compact navigation">
            <Link to="/journal" tabIndex={stuck ? 0 : -1}>Read</Link>
            <Link to="/the-climb-plus" tabIndex={stuck ? 0 : -1}>Learn</Link>
            <Link to="/shop" tabIndex={stuck ? 0 : -1}>Shop</Link>
            <Link to="/partnerships" tabIndex={stuck ? 0 : -1}>Collaborate</Link>
          </nav>
          <Button asChild size="sm"><Link to="/the-climb" tabIndex={stuck ? 0 : -1}>Join The Climb</Link></Button>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container">
    <div className="footer-lead"><div><Link to="/" className="wordmark wordmark-light"><span>The</span> UnOrthoDoc</Link><p>For professionals building meaningful work, stronger finances, and a full life beyond one title.</p></div><Button asChild variant="inverse"><Link to="/the-climb">Receive The Climb</Link></Button></div>
    <div className="footer-grid">
      <div><h3>Explore</h3><Link to="/journal">Journal</Link><Link to="/about">About Dr. Patrice</Link></div>
      <div><h3>Learn</h3><Link to="/the-climb">The Climb</Link><Link to="/the-climb-plus">The Climb+</Link><Link to="/side-hustle-blueprint">Side Hustle Blueprint</Link></div>
      <div><h3>Shop</h3><Link to="/shop" search={{ collection: "apparel" }}>Apparel</Link></div>
      <div><h3>Collaborate</h3><Link to="/partnerships">Strategic Partnerships</Link><Link to="/contact" search={{ topic: "media-kit" }}>Media Kit Request</Link><Link to="/contact" search={{ topic: "collaboration" }}>Work With Dr. Patrice</Link></div>
      <div><h3>Follow</h3><a href="https://www.instagram.com/theunorthodoc/" target="_blank" rel="noreferrer"><Instagram/> Instagram</a><span>Privacy Policy</span><span>Terms & Disclaimer</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} The UnOrthoDoc</span><a href="https://www.infinityorthodc.com/" target="_blank" rel="noreferrer">Looking for orthodontic care in Washington, DC? Visit Infinity Orthodontics. <span aria-hidden>↗</span></a></div>
  </div></footer>;
}
