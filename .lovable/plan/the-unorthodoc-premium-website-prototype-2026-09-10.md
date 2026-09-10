# The UnOrthoDoc Premium Website Prototype

## Goal
Create a polished, responsive personal-brand ecosystem for Dr. Patrice Smith that clearly guides visitors toward reading, learning, shopping, membership, or collaboration—while keeping Infinity Orthodontics separate and discreet.

## Experience and visual system
- Build a warm editorial system using ivory, deep ink, muted clay/rose, and pale blue-gray semantic tokens.
- Pair an elegant serif display face with a highly readable modern sans-serif.
- Use generous but disciplined spacing, crisp borders, subtle texture, refined image framing, and restrained motion.
- Create a fully responsive shared header with desktop dropdowns and a grouped mobile accordion menu.
- Create a substantial shared footer with all requested destinations and the subtle external Infinity Orthodontics care link.
- Use public brand imagery only when it can be reliably sourced; otherwise use tasteful, clearly replaceable editorial placeholders.

## Shared content and interactions
- Centralize navigation, route-card content, editorial pillars, articles, product information, feature lists, prices, and future integration URLs in one editable content module.
- Build reusable editorial layouts, route cards, article cards, product cards, forms, purchase confirmation dialogs, and sticky mobile CTAs.
- Make every navigation item and primary CTA functional.
- Use demo-only success states for newsletters, media-kit requests, membership, and product purchase actions; never collect payment details.
- Keep the future constants `PAYMENT_URL`, `MEMBERSHIP_CHECKOUT_URL`, and `EMAIL_PLATFORM_FORM_URL` explicit and easy to replace.

## Routes
- `/` — announcement line, editorial split hero, five-path “Find your way,” three brand pillars, featured writing, The Climb signup, The Climb+ preview, learning/products, collaboration, and footer.
- `/journal` — editorial hub with featured and grouped writing across Live Well, Build Well, and Care Well.
- `/the-climb` — Sunday-letter landing page with an elegant signup flow and confirmation state.
- `/the-climb-plus` — premium membership story, included benefits, editable plan presentation, demo checkout action, and mobile sticky CTA.
- `/side-hustle-blueprint` — serious course presentation for busy professionals, curriculum overview, editable offer area, demo purchase action, and mobile sticky CTA.
- `/shop` — organized commerce overview for planners, e-books, and optional apparel.
- `/shop/$slug` — reusable product detail template with editable product data and demo purchase confirmation.
- `/partnerships` — collaboration positioning, aligned categories, engagement options, and route to the media-kit request.
- `/about` — Dr. Patrice’s multi-dimensional story and a subtle external clinical-care destination.
- `/contact` — accessible media-kit and collaboration request form with polished validation and success state.

## Homepage hierarchy
1. Restrained “The Climb arrives every Sunday” announcement.
2. Split portrait-led hero with the supplied headline and two clear actions.
3. Five distinct route cards leading to real destinations.
4. Live Well, Build Well, and Care Well editorial pillars.
5. One featured article plus three secondary entries without invented metrics or claims.
6. Calm newsletter conversion area with first name, email, privacy note, and confirmation.
7. Intimate The Climb+ membership preview.
8. Editorial commerce section for the course, digital resources, and apparel preview.
9. Premium collaboration area and media-kit request path.
10. Complete footer with legal placeholders and external clinical-care link.

## Accessibility, mobile, and validation
- Use semantic landmarks and heading order, descriptive labels, keyboard navigation, visible focus states, and accessible contrast.
- Ensure 16px minimum body copy, 44px minimum controls, one-hand-friendly forms, no horizontal scrolling, and clean card stacking at 390px.
- Keep key context and action visible early on mobile; use sticky bottom CTAs only on conversion-focused pages.
- Optimize the desktop composition around a 1200–1280px editorial canvas at 1440px.
- Add unique title, description, Open Graph, and Twitter metadata to every route.
- Validate the complete flow and layout in-browser at 390px and 1440px, including menus, forms, dialogs, links, and overflow.

## Content guardrails
- Reuse only verifiable public brand facts and exact public titles discovered during implementation.
- Do not invent testimonials, subscriber counts, credentials, partnerships, outcomes, campaign results, or clinical claims.
- Do not add patient booking, insurance, treatment plans, forms, or medical-service navigation to The UnOrthoDoc.
