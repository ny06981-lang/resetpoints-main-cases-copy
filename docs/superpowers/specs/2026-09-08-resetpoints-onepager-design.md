# Resetpoints English One-Pager — Design Specification

## Objective

Create a focused English-language landing page for Resetpoints that converts founders, executives, and People/HR leaders into retreat discovery calls.

The page will position Resetpoints as a partner that designs business outcomes through strategy and team retreats—not as an event catalogue or travel agency.

Primary conversion: open a Telegram conversation with Yury via `https://t.me/chikhalov`.

## Positioning

Core idea: meaningful change becomes possible when a team steps outside daily operations.

Hero message:

> Step out of operations.  
> Return with clarity.

Supporting copy:

> Strategy and team retreats designed around the real challenge your company needs to solve.

Primary CTA: **Discuss your retreat**  
CTA reassurance: **A free 30-minute consultation. No obligation.**

## Visual Direction

Use the “Editorial Retreat” direction: premium, quiet, human, and confident.

- Large editorial typography paired with restrained sans-serif utility text.
- Real Resetpoints photography rather than generic stock imagery.
- Warm natural colours derived from the existing brand: sand, blush, charcoal, off-white, and one restrained red accent.
- Generous whitespace and asymmetric editorial layouts.
- Motion should support the narrative: subtle image reveals, gentle text transitions, and restrained hover states. No decorative animation that delays reading.
- The experience must feel equally intentional on desktop and mobile.

## Page Structure

### 1. Hero

A full-viewport photographic opening with the core message, one primary CTA, and the consultation reassurance. The navigation remains minimal: wordmark, section anchors, language indicator, and CTA.

### 2. Trusted by

A compact monochrome client strip using the approved brands already present in the project: Raiffeisen Bank, Yandex, Aviasales, Miro, Subsquid, RichAds, and Zerocoder. Profi.ru is excluded. The section communicates credibility without interrupting the opening narrative.

### 3. The shift

Frame the retreat as a before-and-after business intervention rather than a list of benefits. Four outcomes:

- Strategic clarity
- Leadership alignment
- Trust and communication
- Renewed energy

Each outcome gets one concise explanatory sentence.

### 4. Three formats

Present only the three core offers:

1. Strategy Retreat
2. Leadership Offsite
3. Team Retreat

Each format states who it is for, the challenge it addresses, and the shift it is designed to create. AI Transformation is outside this one-pager’s scope.

### 5. Featured case

Use the international bank reward offsite as the single proof story. Show one strong lead image plus a compact narrative:

- Context
- Challenge
- Designed experience
- Result

Include a secondary link to the full case page where appropriate. Do not use Profi.ru cases or references.

### 6. How it works

A clear four-step process:

1. Diagnose — understand the business and team challenge.
2. Design — shape the right content, rhythm, people, and place.
3. Deliver — manage facilitation, production, logistics, and the on-site experience.
4. Integrate — capture decisions and support the return to everyday work.

### 7. Proof and people

Keep this concise:

- Use the existing Zerocoder testimonial as the single client quote.
- Present the four-person project team in a compact strip: Yury (Founder / CEO), Varvara (Project Lead), Dmitry (Program Architect), and Olga (Client Service Lead).
- Replace the long country list with: **Retreats designed across Europe, the Middle East, and selected global destinations.**

### 8. Closing CTA

Close on the buyer’s challenge, not on Resetpoints itself:

> What needs to change in your team?

Repeat the primary Telegram CTA and consultation reassurance. Do not add a form or backend dependency in the first release.

## Content Rules

- English only.
- Remove all Profi.ru logos, testimonials, names, and case references from the one-pager.
- Prefer specific business language over generic claims such as “unforgettable experiences.”
- Keep paragraphs short and scan-friendly.
- Use one dominant CTA label throughout: **Discuss your retreat**.
- Do not add unsupported metrics or claims.
- Preserve appropriate client confidentiality in case copy.

## Technical Approach

Build the one-pager as a lightweight standalone static page inside the existing Resetpoints repository, reusing approved local assets where possible.

- Semantic HTML, modular CSS, and minimal vanilla JavaScript.
- No framework or build-system dependency for the first release.
- Responsive layouts for desktop, tablet, and mobile.
- Progressive enhancement: all content and CTAs remain usable without JavaScript.
- Respect `prefers-reduced-motion`.
- Optimise images and prevent layout shift.
- Preserve the existing privacy link and essential company/contact information in the footer.
- Keep the current production site untouched until the new page has passed review.

## Acceptance Criteria

- The page is a true single-page experience with eight concise narrative sections.
- The main message and CTA are visible without scrolling on common desktop and mobile sizes.
- All primary CTAs open `https://t.me/chikhalov`.
- No Profi.ru reference appears in visible copy, metadata, accessibility text, or assets rendered by the page.
- The page works at mobile width without horizontal overflow.
- Keyboard navigation, focus states, colour contrast, headings, links, and image alt text are usable.
- Reduced-motion users receive a stable, non-animated experience.
- No broken local asset or console errors remain in the final build.
- Desktop and mobile visual QA screenshots are produced before release.

## Release Boundary

The first release includes the English one-pager, local QA, and a deployment-ready package. It does not include a Russian version, CMS, CRM integration, lead form, analytics redesign, new case pages, or new facilitator profiles.
