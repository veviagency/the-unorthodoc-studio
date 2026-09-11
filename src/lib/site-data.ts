import { linkOptions } from "@tanstack/react-router";

export const INTEGRATIONS = {
  PAYMENT_URL: "PAYMENT_URL",
  MEMBERSHIP_CHECKOUT_URL: "MEMBERSHIP_CHECKOUT_URL",
  EMAIL_PLATFORM_FORM_URL: "EMAIL_PLATFORM_FORM_URL",
} as const;

export const journalTopics = [
  { slug: "personal-development", label: "Personal Development", pillar: "Live Well" },
  { slug: "professional-financial-growth", label: "Professional & Financial Growth", pillar: "Build Well" },
  { slug: "motherhood", label: "Motherhood", pillar: "Live Well" },
  { slug: "oral-care-smile-health", label: "Oral Care & Smile Health", pillar: "Care Well" },
  { slug: "side-hustle", label: "Side Hustle", pillar: "Build Well" },
] as const;

export type TopicSlug = (typeof journalTopics)[number]["slug"];

export const navGroups = [
  {
    label: "Read",
    hub: linkOptions({ to: "/journal" }),
    items: [
      { label: "The Journal", link: linkOptions({ to: "/journal" }) },
      ...journalTopics.map((topic) => ({
        label: topic.label,
        link: linkOptions({ to: "/journal", search: { topic: topic.slug as string } }),
      })),
    ],
  },
  {
    label: "Learn",
    hub: linkOptions({ to: "/the-climb-plus" }),
    items: [
      { label: "The Climb+", link: linkOptions({ to: "/the-climb-plus" }) },
      { label: "The Side Hustle Blueprint", link: linkOptions({ to: "/side-hustle-blueprint" }) },
    ],
  },
  {
    label: "Shop",
    hub: linkOptions({ to: "/shop" }),
    items: [
      { label: "Planners & E-Books", link: linkOptions({ to: "/shop", search: { collection: "digital" as string } }) },
      { label: "Apparel", link: linkOptions({ to: "/shop", search: { collection: "apparel" as string } }) },
    ],
  },
  {
    label: "Collaborate",
    hub: linkOptions({ to: "/partnerships" }),
    items: [
      { label: "Strategic Partnerships", link: linkOptions({ to: "/partnerships" }) },
      { label: "Media Kit Request", link: linkOptions({ to: "/contact", search: { topic: "media-kit" as string } }) },
      { label: "Work With Dr. Patrice", link: linkOptions({ to: "/contact", search: { topic: "collaboration" as string } }) },
    ],
  },
];

export const paths = [
  { n: "01", title: "Read & Reflect", text: "The Journal, Sunday letters, and thoughtful essays on work and life.", to: "/journal" },
  { n: "02", title: "Build Something of Your Own", text: "A grounded framework for professionals creating more options.", to: "/side-hustle-blueprint" },
  { n: "03", title: "Go Deeper", text: "The Climb+ brings private audio, guided prompts, and live conversations.", to: "/the-climb-plus" },
  { n: "04", title: "Explore Practical Resources", text: "E-books, planners, guides, and useful tools for real life.", to: "/shop" },
  { n: "05", title: "Partner With Dr. Patrice", text: "Thoughtful collaborations for brands serving modern professionals.", to: "/partnerships" },
] as const;

export const pillars = [
  { title: "Live Well", kicker: "Life, in full", text: "Personal growth, motherhood, identity, and meaningful living.", tone: "rose", topic: "personal-development" },
  { title: "Build Well", kicker: "Make room for more", text: "Career, entrepreneurship, financial growth, and side hustles.", tone: "blue", topic: "professional-financial-growth" },
  { title: "Care Well", kicker: "Evidence meets ease", text: "Oral care, smile health, and trustworthy guidance from an orthodontist.", tone: "clay", topic: "oral-care-smile-health" },
] as const;

/**
 * Editorial concept entries. These are clearly marked as concept pieces rather
 * than published articles until real titles are supplied.
 */
export type Article = { id: string; topic: TopicSlug; pillar: string; title: string; excerpt: string; featured?: boolean };

export const articles: readonly Article[] = [
  {
    id: "beyond-one-title",
    topic: "personal-development",
    pillar: "Live Well",
    title: "A meaningful life is bigger than one title",
    excerpt: "On ambition, identity, and giving every dimension of your life room to breathe.",
    featured: true,
  },
  { id: "motherhood-and-ambition", topic: "motherhood", pillar: "Live Well", title: "Ambition, motherhood, and the space between", excerpt: "Notes on carrying two full lives at once without losing yourself in either." },
  { id: "work-that-fits", topic: "professional-financial-growth", pillar: "Build Well", title: "Designing work that fits the life you want", excerpt: "A practical reflection for professionals building more options." },
  { id: "first-side-hustle-step", topic: "side-hustle", pillar: "Build Well", title: "The quiet first step of a side hustle", excerpt: "Before the launch, the branding, or the website—there is one decision that matters." },
  { id: "smile-health", topic: "oral-care-smile-health", pillar: "Care Well", title: "A considered approach to smile health", excerpt: "Clear, trustworthy guidance shaped by clinical experience." },
  { id: "money-conversations", topic: "professional-financial-growth", pillar: "Build Well", title: "The money conversations professionals avoid", excerpt: "Financial growth is rarely about income alone." },
];

export const products = [
  {
    slug: "side-hustle-guide",
    collection: "digital",
    kind: "Digital guide",
    title: "Side Hustle Guide, Vol. 1",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Side Hustle\nGuide",
    coverNote: "Volume One",
    tone: "clay",
    price: "$15",
    status: "Join the waitlist",
    text: "A focused starting point for turning what you know into an additional stream of income.",
  },
  {
    slug: "intentional-week-planner",
    collection: "digital",
    kind: "Digital planner",
    title: "The Intentional Week",
    coverKicker: "A planning system",
    coverTitle: "The\nIntentional\nWeek",
    coverNote: "Undated · Printable",
    tone: "blue",
    price: "Price coming soon",
    status: "Join the waitlist",
    text: "A calm planning system for making space for work, life, and what matters most.",
  },
  {
    slug: "unorthodox-notes",
    collection: "apparel",
    kind: "Apparel concept",
    title: "The UnOrthoDoc Edition",
    coverKicker: "Apparel concept",
    coverTitle: "Beyond\nOne Title",
    coverNote: "Coming soon",
    tone: "rose",
    price: "Coming soon",
    status: "Coming soon",
    text: "An understated apparel concept for people building beyond one title.",
  },
] as const;
