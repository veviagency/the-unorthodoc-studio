import { useState, type FormEvent } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  if (sent) return <div className="form-success" role="status"><Check/><div><strong>You’re on the list.</strong><p>A quiet Sunday ritual is headed your way.</p></div></div>;
  return <form className={compact ? "newsletter-form compact" : "newsletter-form"} onSubmit={submit}>
    <label><span>First name</span><input required name="firstName" autoComplete="given-name" placeholder="Your first name" /></label>
    <label><span>Email address</span><input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label>
    <Button type="submit">Join The Climb <ArrowRight/></Button>
    <p className="privacy-note">A thoughtful letter, never inbox clutter. Unsubscribe anytime.</p>
  </form>;
}

/** Link out to a live UnOrthoDoc page (shop, membership, course). */
export function ExternalCta({ href, label, variant = "editorial" }: { href: string; label: string; variant?: "editorial" | "inverse" | "outline" }) {
  return <Button asChild size="lg" variant={variant}><a href={href} target="_blank" rel="noreferrer">{label}<ArrowRight/></a></Button>;
}

export function ContactForm({ defaultTopic }: { defaultTopic?: string | undefined }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  const initialType = defaultTopic === "media-kit" ? "Media kit request"
    : defaultTopic === "collaboration" ? "Speaking or media"
    : "";
  if (sent) return <div className="contact-success" role="status"><span>Request received</span><h2>Thank you for reaching out.</h2><p>Your message is on its way. Dr. Patrice’s team will follow up by email.</p></div>;
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label><span>Name</span><input required name="name" autoComplete="name" /></label><label><span>Work email</span><input required type="email" name="email" autoComplete="email" /></label></div>
    <div className="form-row"><label><span>Organization</span><input required name="organization" /></label><label><span>Inquiry type</span><select required name="inquiryType" defaultValue={initialType}><option value="" disabled>Select one</option><option>Strategic partnership</option><option>Speaking or media</option><option>Media kit request</option><option>Other</option></select></label></div>
    <label><span>Tell us about the opportunity</span><textarea required rows={6} name="message" /></label>
    <label className="checkbox"><input type="checkbox" required/><span>I understand this form is for brand, media, and business inquiries—not clinical care.</span></label>
    <Button size="lg" type="submit">Send inquiry <ArrowRight/></Button>
  </form>;
}
