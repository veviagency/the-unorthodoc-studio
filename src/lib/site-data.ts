export const INTEGRATIONS = {
  PAYMENT_URL: "PAYMENT_URL",
  MEMBERSHIP_CHECKOUT_URL: "MEMBERSHIP_CHECKOUT_URL",
  EMAIL_PLATFORM_FORM_URL: "EMAIL_PLATFORM_FORM_URL",
} as const;

export const navGroups = [
  { label: "Read", to: "/journal", items: ["The Journal", "Personal Development", "Professional & Financial Growth", "Motherhood", "Oral Care & Smile Health", "Side Hustle"] },
  { label: "Learn", to: "/the-climb-plus", items: ["The Climb+", "The Side Hustle Blueprint"] },
  { label: "Shop", to: "/shop", items: ["Planners & E-Books", "Apparel"] },
  { label: "Collaborate", to: "/partnerships", items: ["Strategic Partnerships", "Media Kit Request", "Work With Dr. Patrice"] },
] as const;

export const paths = [
  { n: "01", title: "Read & Reflect", text: "The Journal, Sunday letters, and thoughtful essays on work and life.", to: "/journal" },
  { n: "02", title: "Build Something of Your Own", text: "A grounded framework for professionals creating more options.", to: "/side-hustle-blueprint" },
  { n: "03", title: "Go Deeper", text: "The Climb+ brings private audio, guided prompts, and live conversations.", to: "/the-climb-plus" },
  { n: "04", title: "Explore Practical Resources", text: "E-books, planners, guides, and useful tools for real life.", to: "/shop" },
  { n: "05", title: "Partner With Dr. Patrice", text: "Thoughtful collaborations for brands serving modern professionals.", to: "/partnerships" },
] as const;

export const pillars = [
  { title: "Live Well", kicker: "Life, in full", text: "Personal growth, motherhood, identity, and meaningful living.", tone: "rose" },
  { title: "Build Well", kicker: "Make room for more", text: "Career, entrepreneurship, financial growth, and side hustles.", tone: "blue" },
  { title: "Care Well", kicker: "Evidence meets ease", text: "Oral care, smile health, and trustworthy guidance from an orthodontist.", tone: "clay" },
] as const;

export const articles = [
  { category: "Featured reflection", title: "A meaningful life is bigger than one title", excerpt: "On ambition, identity, and giving every dimension of your life room to breathe." },
  { category: "Live Well", title: "Latest from the journal", excerpt: "Notes on motherhood, identity, and living with intention." },
  { category: "Build Well", title: "Ideas for work that fits", excerpt: "A practical reflection for professionals building more options." },
  { category: "Care Well", title: "A considered approach to smile health", excerpt: "Clear, trustworthy guidance shaped by clinical experience." },
] as const;

export const products = [
  { slug: "side-hustle-guide", kind: "Digital guide", title: "Side Hustle Guide, Vol. 1", price: "$15", text: "A focused starting point for turning what you know into an additional stream of income." },
  { slug: "intentional-week-planner", kind: "Digital planner", title: "The Intentional Week", price: "Price coming soon", text: "A calm planning system for making space for work, life, and what matters most." },
  { slug: "unorthodox-notes", kind: "Apparel preview", title: "The UnOrthoDoc Edition", price: "Coming soon", text: "An understated apparel concept for people building beyond one title." },
] as const;
