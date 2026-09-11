import { linkOptions } from "@tanstack/react-router";
import coverOralCare from "@/assets/products/adult-oral-care-blueprint.webp";
import coverIdeaToProfit from "@/assets/products/from-idea-to-profit.webp";
import coverTimeManagement from "@/assets/products/time-management-for-busy-professionals.webp";
import coverSideHustle1 from "@/assets/products/side-hustle-guide-vol-1.webp";
import coverSideHustle2 from "@/assets/products/side-hustle-guide-vol-2.webp";
import coverHustleJournal from "@/assets/products/hustle-journal.webp";
import coverSideHustleWorkbook from "@/assets/products/side-hustle-workbook.webp";
import coverSocialPlanner from "@/assets/products/social-media-planner.webp";
import coverCreatorPlanner from "@/assets/products/creator-success-planner.webp";

export const INTEGRATIONS = {
  PAYMENT_URL: "PAYMENT_URL",
  MEMBERSHIP_CHECKOUT_URL: "MEMBERSHIP_CHECKOUT_URL",
  EMAIL_PLATFORM_FORM_URL: "EMAIL_PLATFORM_FORM_URL",
} as const;

/** Set these to the live checkout links once payments are connected. */
export const MEMBERSHIP_CHECKOUT_URL: string | null = null;
export const COURSE_CHECKOUT_URL: string | null = null;

export const journalTopics = [
  { slug: "personal-development", label: "Personal Development", pillar: "Live Well" },
  { slug: "professional-financial-growth", label: "Professional & Financial Growth", pillar: "Build Well" },
  { slug: "motherhood", label: "Motherhood", pillar: "Live Well" },
  { slug: "oral-care-smile-health", label: "Oral Care & Smile Health", pillar: "Care Well" },
  { slug: "side-hustle", label: "Side Hustle", pillar: "Build Well" },
] as const;

export type TopicSlug = (typeof journalTopics)[number]["slug"];

/** Published writing from The UnOrthoDoc blog. */
export type Article = { id: string; topic: TopicSlug; pillar: string; date: string; title: string; excerpt: string; featured?: boolean };

export const articles: readonly Article[] = [
  {
    id: "growing-up-without-convenience",
    topic: "personal-development",
    pillar: "Live Well",
    date: "September 3, 2026",
    title: "What Growing Up Without Convenience Taught Me About Resilience, Gratitude, and Simplicity",
    excerpt: "Sometimes, when everything isn’t immediately available, you develop an appreciation for things you might otherwise overlook.",
    featured: true,
  },
  {
    id: "philanthropic-get-rich",
    topic: "professional-financial-growth",
    pillar: "Build Well",
    date: "September 2, 2026",
    title: "The Most Philanthropic Thing You Can Do Is Get Rich",
    excerpt: "Why building wealth can give you the capacity to do more good.",
  },
  {
    id: "mouth-is-part-of-your-body",
    topic: "oral-care-smile-health",
    pillar: "Care Well",
    date: "August 2026",
    title: "Your Mouth Is Part of Your Body. So Why Do We Treat It Like It Isn’t?",
    excerpt: "We’ve gotten really good at separating oral health from the rest of our health. Your mouth is not an island.",
  },
  {
    id: "career-become-your-identity",
    topic: "personal-development",
    pillar: "Live Well",
    date: "August 4, 2026",
    title: "The Danger of Letting Your Career Become Your Identity",
    excerpt: "Your career is something you build. Your identity is something you become.",
  },
  {
    id: "sensitivity-toothpaste",
    topic: "oral-care-smile-health",
    pillar: "Care Well",
    date: "July 1, 2026",
    title: "Why Your Sensitivity Toothpaste Might Not Be Working",
    excerpt: "Cold water hurts. Ice cream hurts. Here’s what most people miss about treating sensitive teeth.",
  },
  {
    id: "life-that-doesnt-fit-a-category",
    topic: "personal-development",
    pillar: "Live Well",
    date: "June 1, 2026",
    title: "What Nobody Tells You About Building a Life That Doesn’t Fit a Category",
    excerpt: "There is a particular kind of exhaustion that comes not from doing too much, but from explaining yourself too many times.",
  },
];

/** Topics with at least one published article — nav and filters show only these. */
export const activeJournalTopics = journalTopics.filter((t) => articles.some((a) => a.topic === t.slug));

export const navGroups = [
  {
    label: "Read",
    hub: linkOptions({ to: "/journal" }),
    items: [
      { label: "The Journal", link: linkOptions({ to: "/journal" }) },
      ...activeJournalTopics.map((topic) => ({
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
  { n: "04", title: "Practical Resources", text: "Planners, e-books, and workbooks I use myself—plus the UnOrthoDoc tee.", to: "/shop" },
  { n: "05", title: "Partner With Dr. Patrice", text: "Thoughtful collaborations for brands serving modern professionals.", to: "/partnerships" },
] as const;

export const pillars = [
  { title: "Live Well", kicker: "Life, in full", text: "Personal growth, motherhood, identity, and meaningful living.", tone: "rose", topic: "personal-development" },
  { title: "Build Well", kicker: "Make room for more", text: "Career, entrepreneurship, financial growth, and side hustles.", tone: "blue", topic: "professional-financial-growth" },
  { title: "Care Well", kicker: "Evidence meets ease", text: "Oral care, smile health, and trustworthy guidance from an orthodontist.", tone: "clay", topic: "oral-care-smile-health" },
] as const;

/** Published writing from The UnOrthoDoc blog. */
export type Article = { id: string; topic: TopicSlug; pillar: string; date: string; title: string; excerpt: string; featured?: boolean };

export const articles: readonly Article[] = [
  {
    id: "growing-up-without-convenience",
    topic: "personal-development",
    pillar: "Live Well",
    date: "September 3, 2026",
    title: "What Growing Up Without Convenience Taught Me About Resilience, Gratitude, and Simplicity",
    excerpt: "Sometimes, when everything isn’t immediately available, you develop an appreciation for things you might otherwise overlook.",
    featured: true,
  },
  {
    id: "philanthropic-get-rich",
    topic: "professional-financial-growth",
    pillar: "Build Well",
    date: "September 2, 2026",
    title: "The Most Philanthropic Thing You Can Do Is Get Rich",
    excerpt: "Why building wealth can give you the capacity to do more good.",
  },
  {
    id: "mouth-is-part-of-your-body",
    topic: "oral-care-smile-health",
    pillar: "Care Well",
    date: "August 2026",
    title: "Your Mouth Is Part of Your Body. So Why Do We Treat It Like It Isn’t?",
    excerpt: "We’ve gotten really good at separating oral health from the rest of our health. Your mouth is not an island.",
  },
  {
    id: "career-become-your-identity",
    topic: "personal-development",
    pillar: "Live Well",
    date: "August 4, 2026",
    title: "The Danger of Letting Your Career Become Your Identity",
    excerpt: "Your career is something you build. Your identity is something you become.",
  },
  {
    id: "sensitivity-toothpaste",
    topic: "oral-care-smile-health",
    pillar: "Care Well",
    date: "July 1, 2026",
    title: "Why Your Sensitivity Toothpaste Might Not Be Working",
    excerpt: "Cold water hurts. Ice cream hurts. Here’s what most people miss about treating sensitive teeth.",
  },
  {
    id: "life-that-doesnt-fit-a-category",
    topic: "personal-development",
    pillar: "Live Well",
    date: "June 1, 2026",
    title: "What Nobody Tells You About Building a Life That Doesn’t Fit a Category",
    excerpt: "There is a particular kind of exhaustion that comes not from doing too much, but from explaining yourself too many times.",
  },
];

export const BLOG_URL = "https://www.theunorthodoc.com/blog";
export const APPAREL_URL = "https://www.theunorthodoc.com/apparel";
export const DIGITAL_URL = "https://www.theunorthodoc.com/planners-ebooks";

export const products = [
  {
    slug: "adult-oral-care-blueprint",
    collection: "digital",
    kind: "E-Book",
    title: "Adult Oral Care Blueprint",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Adult\nOral Care\nBlueprint",
    coverNote: "E-Book",
    tone: "clay",
    price: "$29.00",
    url: DIGITAL_URL,
    text: "A clear, clinician-written guide to caring for your teeth as an adult—written the way I explain it in my own chair.",
  },
  {
    slug: "from-idea-to-profit",
    collection: "digital",
    kind: "E-Book",
    title: "From Idea to Profit E-Book",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "From Idea\nto\nProfit",
    coverNote: "E-Book",
    tone: "blue",
    price: "$45.00",
    url: DIGITAL_URL,
    text: "How to move an idea you keep thinking about into something that actually earns.",
  },
  {
    slug: "time-management-for-busy-professionals",
    collection: "digital",
    kind: "Planner",
    title: "Time Management For Busy Professionals",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Time\nManagement\nfor Busy\nProfessionals",
    coverNote: "Planner",
    tone: "rose",
    price: "$21.00",
    url: DIGITAL_URL,
    text: "A planning system for full calendars, real families, and work you still care about.",
  },
  {
    slug: "side-hustle-guide-vol-1",
    collection: "digital",
    kind: "Guide",
    title: "Side Hustle Guide Vol. 1",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Side\nHustle\nGuide\nVol. 1",
    coverNote: "Guide",
    tone: "blue",
    price: "$15.00",
    url: DIGITAL_URL,
    text: "The starting point: choosing an idea that fits the life you already have.",
  },
  {
    slug: "side-hustle-guide-vol-2",
    collection: "digital",
    kind: "Guide",
    title: "Side Hustle Guide Vol. 2",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Side\nHustle\nGuide\nVol. 2",
    coverNote: "Guide",
    tone: "clay",
    price: "$19.00",
    url: DIGITAL_URL,
    text: "The next step: turning early effort into steady, repeatable income.",
  },
  {
    slug: "hustle-journal",
    collection: "digital",
    kind: "Journal",
    title: "Hustle Journal",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Hustle\nJournal",
    coverNote: "Journal",
    tone: "rose",
    price: "$9.00",
    url: DIGITAL_URL,
    text: "Space to think on paper about what you are building and why.",
  },
  {
    slug: "side-hustle-workbook",
    collection: "digital",
    kind: "Workbook",
    title: "Side Hustle Workbook",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Side\nHustle\nWorkbook",
    coverNote: "Workbook",
    tone: "blue",
    price: "$9.00",
    url: DIGITAL_URL,
    text: "Prompts and exercises to move from thinking about it to working on it.",
  },
  {
    slug: "social-media-planner",
    collection: "digital",
    kind: "Planner",
    title: "Social Media Planner",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Social\nMedia\nPlanner",
    coverNote: "Planner",
    tone: "clay",
    price: "$21.00",
    url: DIGITAL_URL,
    text: "Plan content without letting it take over your week.",
  },
  {
    slug: "creator-success-planner",
    collection: "digital",
    kind: "Planner",
    title: "Creator Success Planner",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Creator\nSuccess\nPlanner",
    coverNote: "Planner",
    tone: "rose",
    price: "$21.00",
    url: DIGITAL_URL,
    text: "A steady structure for creating consistently alongside everything else.",
  },
  {
    slug: "triblend-unisex-tee",
    collection: "apparel",
    kind: "Apparel",
    title: "Triblend Unisex Tee",
    coverKicker: "The UnOrthoDoc",
    coverTitle: "Contrary\nto what\nis usual",
    coverNote: "Triblend Unisex Tee",
    tone: "rose",
    price: "$29",
    url: APPAREL_URL,
    text: "Contrary to what is usual. Available in Vintage Red, Premium Heather, Military Green, Vintage Black, and Vintage Royal.",
  },
] as const;


/** Real cover artwork from the UnOrthoDoc store, keyed by product slug. */
export const productImages: Record<string, string> = {
  "adult-oral-care-blueprint": coverOralCare,
  "from-idea-to-profit": coverIdeaToProfit,
  "time-management-for-busy-professionals": coverTimeManagement,
  "side-hustle-guide-vol-1": coverSideHustle1,
  "side-hustle-guide-vol-2": coverSideHustle2,
  "hustle-journal": coverHustleJournal,
  "side-hustle-workbook": coverSideHustleWorkbook,
  "social-media-planner": coverSocialPlanner,
  "creator-success-planner": coverCreatorPlanner,
};
