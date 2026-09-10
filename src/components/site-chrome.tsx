import { Link } from "@tanstack/react-router";
import { ChevronDown, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navGroups } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="announcement">The Climb arrives every Sunday. <Link to="/the-climb">Receive the letter <span aria-hidden>→</span></Link></div>
    <header className="site-header">
      <div className="site-container header-inner">
        <Link to="/" className="wordmark" aria-label="The UnOrthoDoc home"><span>The</span> UnOrthoDoc</Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          {navGroups.map((group) => <div className="nav-group" key={group.label}>
            <Link to={group.to}>{group.label}</Link><ChevronDown aria-hidden />
            <div className="nav-dropdown">
              {group.items.map((item) => <Link key={item} to={group.to}>{item}</Link>)}
            </div>
          </div>)}
          <Link to="/about">About</Link>
        </nav>
        <Button asChild className="header-cta"><Link to="/the-climb">Join The Climb</Link></Button>
        <Button variant="ghost" size="icon" className="mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</Button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        {navGroups.map((group) => <details key={group.label}><summary>{group.label}<ChevronDown/></summary><div>{group.items.map(item => <Link key={item} to={group.to} onClick={() => setOpen(false)}>{item}</Link>)}</div></details>)}
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Button asChild><Link to="/the-climb" onClick={() => setOpen(false)}>Join The Climb</Link></Button>
      </nav>}
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container">
    <div className="footer-lead"><div><Link to="/" className="wordmark wordmark-light"><span>The</span> UnOrthoDoc</Link><p>For professionals building meaningful work, stronger finances, and a full life beyond one title.</p></div><Button asChild variant="inverse"><Link to="/the-climb">Receive The Climb</Link></Button></div>
    <div className="footer-grid">
      <div><h3>Explore</h3><Link to="/journal">Journal</Link><Link to="/about">About Dr. Patrice</Link><Link to="/partnerships">Collaborate</Link></div>
      <div><h3>Learn</h3><Link to="/the-climb">The Climb</Link><Link to="/the-climb-plus">The Climb+</Link><Link to="/side-hustle-blueprint">Side Hustle Blueprint</Link></div>
      <div><h3>Shop</h3><Link to="/shop">Planners & E-Books</Link><Link to="/shop">Apparel</Link><Link to="/contact">Media Kit Request</Link></div>
      <div><h3>Follow</h3><a href="https://www.instagram.com/theunorthodoc/" target="_blank" rel="noreferrer"><Instagram/> Instagram</a><span>Privacy Policy</span><span>Terms & Disclaimer</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} The UnOrthoDoc</span><a href="https://www.infinityorthodc.com/" target="_blank" rel="noreferrer">Looking for orthodontic care in Washington, DC? Visit Infinity Orthodontics. <span aria-hidden>↗</span></a></div>
  </div></footer>;
}
