# BHAV by SHOBANA: landing page update brief

This brief is for Claude Code. Update the **existing** landing page in this repository for **BHAV, Bharatha’s 5th Vedha**, a live Indian classical arts performance featuring Padma Bhushan Shobana on Saturday, 17 October 2026, 6:00 PM at Bruce Mason Centre, Takapuna, Auckland.

The original Word document with the page copy is **not** available to you. Everything you need is in this file: the final page copy (see **Page copy**), the brand colour palette (see **Colour palette**) and the typography rules (see **Typography**). Where this brief and the current website disagree, this brief wins.

---

## How to approach the work

1. **Inspect before editing.** Identify the framework and build tool, where the landing page is rendered, how styles are written (plain CSS, SCSS, CSS modules, Tailwind v3 config or v4 `@theme`, CSS-in-JS), the existing components and sections, image assets, and any fonts folder.
2. **Re-edit, don't rebuild.** Keep the current stack, routing, build and deploy setup, analytics and any working functionality. Don't switch frameworks, add a UI kit or scaffold a new project.
3. **Branch.** If this is a git repo, do the work on a new branch, e.g. `bhav-content-update`.
4. **Order of work:** design tokens → fonts → section order and copy → section styling → responsive and accessibility pass → build and lint.
5. **Don't silently delete.** If the current site has sections, pages or links this brief doesn't cover (gallery, contact form, FAQ, social links, etc.), keep them, restyle them with the new tokens, and list them in your final report so I can decide. Remove only placeholder text (lorem ipsum) and old event details that contradict this brief.

## Copy rules

- Use the copy in **Page copy** exactly as written: wording, punctuation, capitalisation (lines written in ALL CAPS stay in caps) and NZ/British spelling (Centre, theatre, artiste). Don't rewrite, shorten or Americanise it.
- Apostrophes are typographic (’) throughout. Keep them that way.
- Some lines appear twice on purpose (BOOK YOUR TICKETS, the venue, the event name). Don't de-duplicate them.
- Don't invent copy: no extra taglines, stats, testimonials, FAQs or claims. The only new text you may write is functional: navigation labels taken from the section headings, image alt text, page metadata built from this copy (see **Metadata and structured data**), and screen-reader-only text.
- Nothing listed under **Source notes** is page copy. Never render it.

---

## Colour palette

Use only these four colours.

| Token | Name | HEX | RGB | HSB (print ref) | CMYK (print ref) |
|---|---|---|---|---|---|
| `--bhav-maroon` | Maroon | `#530000` | 83, 0, 0 | 0°, 100%, 33% | 40, 91, 83, 64 |
| `--bhav-crimson` | Crimson | `#970601` | 151, 6, 1 | 2°, 99%, 59% | 25, 100, 100, 26 |
| `--bhav-cream` | Cream | `#FCE2BE` | 252, 226, 190 | 35°, 25%, 99% | 1, 11, 27, 0 |
| `--bhav-gold` | Gold | `#FFD18F` | 255, 209, 143 | 35°, 44%, 100% | 0, 19, 49, 0 |

Roles:

- **Maroon**: dark section backgrounds (hero, final section, footer) and body text on light backgrounds.
- **Crimson**: the accent. Headings and buttons on light backgrounds, inline links, rules, and the background of The BHAV Experience section.
- **Cream**: the main light background, and body text on dark backgrounds.
- **Gold**: highlights on dark backgrounds (hero wordmark, headings, buttons) and the alternate light background.

### Contrast (WCAG 2.x, measured)

| Pair | Ratio | Result |
|---|---|---|
| Maroon + Cream | 12.25 : 1 | Pass, any text size |
| Maroon + Gold | 10.80 : 1 | Pass, any text size |
| Crimson + Cream | 7.16 : 1 | Pass, any text size |
| Crimson + Gold | 6.31 : 1 | Pass, any text size |
| Maroon + Crimson | 1.71 : 1 | **Fail**: never for text, icons or focus rings |
| Cream + Gold | 1.13 : 1 | **Fail**: never for text, icons or focus rings |

The rule in one line: dark colours (Maroon, Crimson) go on light colours (Cream, Gold), or the reverse. Never dark on dark or light on light.

### Colour rules

- No black, white, greys or other hues. Transparent versions of the palette are fine, e.g. `rgb(83 0 0 / 0.65)` as a photo overlay or `rgb(255 209 143 / 0.4)` for a hairline on dark sections.
- No decorative gradient washes. A Maroon-to-transparent overlay on a photo is fine.
- Photo overlays must keep text contrast at 4.5 : 1 or higher; check against the lightest part of the image behind the text.
- Remap or replace the site's old colour variables and classes so no old brand colours remain anywhere.

### Tokens

```css
:root {
  /* Brand palette */
  --bhav-maroon: #530000;
  --bhav-crimson: #970601;
  --bhav-cream: #FCE2BE;
  --bhav-gold: #FFD18F;

  /* Roles */
  --surface-dark: var(--bhav-maroon);
  --surface-accent: var(--bhav-crimson);
  --surface-light: var(--bhav-cream);
  --surface-light-alt: var(--bhav-gold);

  --text-on-light: var(--bhav-maroon);
  --heading-on-light: var(--bhav-crimson);
  --text-on-dark: var(--bhav-cream);
  --heading-on-dark: var(--bhav-gold);
}
```

If the project uses Tailwind: in v4, add the same values inside `@theme` (`--color-bhav-maroon: #530000;` and so on) so classes like `bg-bhav-maroon` exist; in v3, add them under `theme.extend.colors.bhav` in the Tailwind config.

---

## Typography

Two families with two clear jobs:

- **Amerigo BT is the highlight font.** Use it only for highlight elements: the hero wordmark, title line and artist line; every section heading; the three experience titles; the pull quote in About BHAV; the sponsor name; and the event-name line in the final section. Each one is marked in **Page copy**.
- **Poppins is the normal font.** Use it for everything else: body paragraphs, intro lines, dates, times and venue (numerals and practical details read more clearly in Poppins), buttons, navigation, footer, captions and forms.

Set `h1`, `h2` and `h3` to the highlight font in the base styles, and apply a `.font-highlight` class (or Tailwind `font-highlight`) to the non-heading highlight elements: the artist line, the pull quote and the final-section event name.

### Loading Poppins (free, Google Fonts)

Weights 400, 500 and 600. Load it the way the project already loads fonts:

- **Next.js:** `next/font/google` with `Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap', variable: '--font-poppins' })`, then set `--font-body` to `var(--font-poppins)` instead of the literal family name.
- **Vite, React or other bundlers:** `@fontsource/poppins` (400, 500, 600).
- **Plain HTML:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
```

Remove imports for any fonts the site no longer uses.

### Loading Amerigo BT (commercial, self-hosted)

Amerigo BT is a Bitstream typeface with six styles (Roman, Italic, Medium, Medium Italic, Bold, Bold Italic). It isn't on Google Fonts and needs a webfont licence, so it must be self-hosted from licensed files. This page needs four of the styles: Bold (hero wordmark), Italic (hero title line and pull quote), Medium (headings and the other highlight lines) and Roman (the regular weight, for any other highlight text such as existing footer headings).

1. Search the repo for existing font files first (case-insensitive `amerigo`).
2. If there are none, use this folder inside the static/public directory: `fonts/amerigo-bt/`, with `AmerigoBT-Roman.woff2`, `AmerigoBT-Italic.woff2`, `AmerigoBT-Medium.woff2` and `AmerigoBT-Bold.woff2`.
3. Don't download Amerigo BT from free-font sites, don't link to third-party font CDNs, and don't convert desktop `.ttf`/`.otf` files into webfonts. If only desktop files exist, tell me.
4. If the files are missing, still add the `@font-face` rules, let the fallback stack render, and list the missing files in your final report. Don't substitute a different webfont.

```css
@font-face {
  font-family: "Amerigo BT";
  src: url("/fonts/amerigo-bt/AmerigoBT-Roman.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Amerigo BT";
  src: url("/fonts/amerigo-bt/AmerigoBT-Italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Amerigo BT";
  src: url("/fonts/amerigo-bt/AmerigoBT-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Amerigo BT";
  src: url("/fonts/amerigo-bt/AmerigoBT-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-highlight: "Amerigo BT", Georgia, "Times New Roman", serif;
  --font-body: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}

body {
  font-family: var(--font-body);
}

h1,
h2,
h3,
.font-highlight {
  font-family: var(--font-highlight);
  font-synthesis: none; /* no faux bold or italic if a style file is missing */
}
```

Adjust the `url()` paths to how the project serves static files. In Next.js you can use `next/font/local` with the same files instead of manual `@font-face` rules. Preload only the Bold file, which the hero wordmark uses:

```html
<link rel="preload" href="/fonts/amerigo-bt/AmerigoBT-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

### Type scale

| Element | Font and style | Size | Line height | Notes |
|---|---|---|---|---|
| Hero wordmark | Amerigo BT Bold 700 | `clamp(4.5rem, 16vw, 11rem)` | 0.9 | `letter-spacing: 0.04em` |
| Hero title line | Amerigo BT Italic 400 | `clamp(1.5rem, 3.5vw, 2.5rem)` | 1.2 | |
| Hero artist line | Amerigo BT Medium 500 | `clamp(1.25rem, 2.6vw, 1.875rem)` | 1.25 | |
| Section heading (`h2`) | Amerigo BT Medium 500 | `clamp(2rem, 4.8vw, 3.5rem)` | 1.1 | ALL CAPS headings: `letter-spacing: 0.04em` |
| Experience titles, sponsor name (`h3`), final-section event name | Amerigo BT Medium 500 | `clamp(1.25rem, 2.2vw, 1.75rem)` | 1.2 | ALL CAPS titles: `letter-spacing: 0.05em` |
| Pull quote | Amerigo BT Italic 400 | `clamp(1.5rem, 3.2vw, 2.25rem)` | 1.3 | Max width about 28ch |
| Lead paragraph | Poppins 400 | `clamp(1.0625rem, 1.6vw, 1.25rem)` | 1.6 | Max width 60ch |
| Body | Poppins 400 | `clamp(1rem, 1.2vw, 1.0625rem)` | 1.7 | Max width 65ch |
| Event details | Poppins 500 | `clamp(1rem, 1.4vw, 1.125rem)` | 1.5 | |
| Button | Poppins 600 | `1rem` | 1 | `letter-spacing: 0.08em` (the label is ALL CAPS) |
| Navigation | Poppins 500 | `0.9375rem` | 1 | |

---

## Layout and section styling

**Design direction.** This is a premium classical-arts evening, so the page should feel like a theatre programme: deep Maroon and Crimson, warm Cream and Gold, generous space and confident type. Spend the boldness in one place, the giant Gold "BHAV" wordmark in the hero, and keep everything else calm and disciplined.

**Avoid:** identical rounded cards with soft grey shadows, decorative gradient washes, numbered markers (01 / 02 / 03), generic icon-library icons, arrows added to button labels, highlighting a single word inside a heading with a different colour or weight, and fade-in-on-scroll animations on every section. If the current site already has decorative motifs (e.g. temple borders or mudra illustrations), recolour them to the palette instead of removing them, and don't add new ones.

**Spacing.** Content container max width about 1200px; side padding `clamp(1.25rem, 5vw, 3rem)`; section vertical padding `clamp(4rem, 10vw, 8rem)`. If the header is sticky, add `scroll-margin-top` to sections so anchor jumps don't hide headings.

### Section order, IDs and colours

| Section | `id` | Background | Headings | Text | Source ref |
|---|---|---|---|---|---|
| Hero | `hero` | Maroon | Gold and Cream | Cream | Hero |
| About BHAV | `about-bhav` | Cream | Crimson | Maroon | Section 1 |
| About Shobana | `about-shobana` | Gold | Crimson | Maroon | Section 2 |
| The BHAV Experience | `experience` | Crimson | Gold | Cream | Section 3 |
| About Auckland Tamil Association | `about-ata` | Cream | Crimson | Maroon | Section 4 |
| Title Sponsor | `sponsor` | Gold | Crimson and Maroon | Maroon | Section 5 |
| Be Part of BHAV | `book` | Maroon | Gold and Cream | Cream | Section 6 |
| Footer (existing content) | — | Maroon, separated from the section above by a Gold hairline at 40% opacity | Gold | Cream | — |

### Section notes

**Navigation** (only if the site has a header nav). Keep the existing site logo if there is one. Links in Poppins to the section IDs, labelled About BHAV, About Shobana, The BHAV Experience, About ATA and Title Sponsor, plus a BOOK YOUR TICKETS button with the same style and link as the hero button. Over the Maroon hero: Cream links and a Gold button. On mobile, keep the existing menu pattern and restyle it.

**Hero.** Tall first screen, about 90% of the viewport height. If the repo has a good photo of Shobana, place it beside the text on desktop or full-bleed behind it with a Maroon overlay (keeping text contrast at 4.5 : 1 or higher). Text order: wordmark, title line, artist line, intro, date, time, venue, button. Left-aligned on desktop; centred is fine on mobile.

**About BHAV.** Heading and the three paragraphs in a comfortable reading column (or heading left, text right on wide screens). The pull quote sits after the paragraphs, larger, set off by a short Crimson rule with generous space around it.

**About Shobana.** Two columns on desktop, portrait on one side and heading plus text on the other; stacked on mobile with the image first.

**The BHAV Experience.** Heading, then the three items in a row on desktop and stacked on mobile. Separate the items with thin Gold hairlines at 40% opacity, not cards or shadows. The items aren't a sequence, so no numbers.

**About Auckland Tamil Association.** Same text treatment as About BHAV. Show the ATA logo beside or above the heading if the repo has it.

**Title Sponsor.** Heading, then the Kripa Financial Solutions logo (if available) with the sponsor name and text. If the logo has its own background or doesn't read well on Gold, place it on a Cream panel.

**Be Part of BHAV.** Centred composition that mirrors the hero. Button and QR code side by side on desktop; on mobile the button comes first and the QR code sits below it.

**Footer.** Keep the existing footer content; apply the palette and Poppins.

### Buttons and links

- **On dark sections (Maroon, Crimson):** Gold fill with a Maroon label; on hover and active, Cream fill with a Maroon label.
- **On light sections (Cream, Gold):** Crimson fill with a Cream label; on hover and active, Maroon fill with a Cream label.
- **Focus-visible:** 2px solid outline with a 3px offset, Gold on dark sections and Crimson on light sections.
- Minimum height 48px. Keep the site's existing corner radius if it has one; otherwise use a small radius (4px or less).
- Inline links in body text: underlined, Crimson on light sections and Gold on dark sections.

### Ticket link and QR code

- Create **one** source for the booking URL, e.g. `TICKET_URL` in a config or constants file (for plain HTML, a single variable or data attribute). Every BOOK YOUR TICKETS button and the QR code must use it.
- The Ticketmaster URL isn't available yet. Set `TICKET_URL` to `"#"` with a `TODO: add Ticketmaster URL` comment and list it in your final report.
- Booking links open in a new tab: `target="_blank" rel="noopener noreferrer"`.
- Generate the QR code locally from `TICKET_URL` (e.g. the `qrcode` npm package at build time, or a committed SVG). Don't use third-party QR image APIs.
- QR styling: Maroon modules on a Cream tile, never inverted, with a quiet zone of at least 4 modules, displayed at 160px or larger. Alt text: "QR code to book tickets for BHAV".
- While `TICKET_URL` is still the placeholder, render an empty Cream tile of the same size (no text, `aria-hidden="true"`) instead of a QR code that points nowhere.

### Images

- Reuse suitable images already in the repo: photos of Shobana, the Auckland Tamil Association logo and the Kripa Financial Solutions logo.
- If one is missing, use a plain Cream or Gold placeholder block with a `TODO` comment and list it in your report. Don't use stock photos or AI-generated images of Shobana or any real person, and don't recreate logos.
- Alt text should be short and factual, e.g. "Padma Bhushan Shobana", "Auckland Tamil Association logo", "Kripa Financial Solutions logo".
- Set width and height (or `aspect-ratio`) to prevent layout shift. Lazy-load images below the fold, but not the hero image. Use the framework's image component where available (e.g. `next/image`).

### Motion

Keep it minimal: at most one gentle entrance for the hero on page load, disabled under `prefers-reduced-motion: reduce`. Don't add scroll-triggered animations; if the current site has heavy section animations, tone them down.

---

## Page copy (final, verbatim)

Each item shows the element, its HTML role, and its font and colour. The text inside each quote block is the exact copy to use.

### Hero: `#hero` (Maroon background)

**Wordmark** (first line of the `h1`): Amerigo BT Bold, Gold
> BHAV

**Title line** (second line of the same `h1`): Amerigo BT Italic, Cream
> Bharatha’s 5th Vedha

**Artist line** (`p`): Amerigo BT Medium, Gold
> Padma Bhushan Shobana

**Intro** (lead `p`): Poppins Regular, Cream
> Experience an extraordinary celebration of Indian classical arts with Shobana in BHAV, Bharatha’s 5th Vedha.

**Date** (`<time datetime="2026-10-17">`): Poppins Medium, Cream
> Saturday, 17 October 2026

**Time** (`<time datetime="18:00">`): Poppins Medium, Cream
> 6:00 PM

**Venue** (`p`): Poppins Medium, Cream
> Bruce Mason Centre, Takapuna, Auckland

**Button** (link to `TICKET_URL`): Poppins SemiBold, Gold fill with Maroon label
> BOOK YOUR TICKETS

### About BHAV: `#about-bhav` (Cream background)

**Heading** (`h2`): Amerigo BT Medium, Crimson
> About BHAV

**Body** (three `p`): Poppins Regular, Maroon
> BHAV, Bharatha’s 5th Vedha brings together the expressive worlds of Bharatanatyam, Carnatic music and theatre in a unique live performance.

> Rooted in the tradition of the Natya Shastra, BHAV explores the relationship between music and movement, bringing dance and live music together as one artistic experience.

> Featuring celebrated Bharatanatyam artiste and actress Padma Bhushan Shobana, alongside world-renowned Carnatic vocalist Abhishek Raghuram, BHAV offers audiences an immersive celebration of Indian classical arts.

**Pull quote** (a `p` set apart after the body; it's a tagline, so not a `blockquote` and no quotation marks): Amerigo BT Italic, Crimson
> Where dance meets music, and music becomes movement.

### About Shobana: `#about-shobana` (Gold background)

**Heading** (`h2`): Amerigo BT Medium, Crimson
> About Shobana

**Body** (three `p`): Poppins Regular, Maroon
> Padma Bhushan Shobana is one of India’s celebrated Bharatanatyam artistes, actresses and choreographers.

> A two-time National Film Award winner, Shobana has built an acclaimed career across Indian cinema, classical dance and theatre. Her artistry has taken her to audiences across India and around the world.

> Through her work in dance and theatre, she continues to bring the depth, beauty and expressive power of Indian classical arts to contemporary audiences.

**Image:** portrait of Shobana from the existing assets (see **Images**).

### The BHAV Experience: `#experience` (Crimson background)

**Heading** (`h2`): Amerigo BT Medium, Gold
> THE BHAV EXPERIENCE

Three items. Each title is an `h3` in Amerigo BT Medium, Gold. Each description is a `p` in Poppins Regular, Cream.

**Item 1 title**
> BHARATANATYAM

**Item 1 description**
> Experience the expressive power of classical Indian dance.

**Item 2 title**
> LIVE CARNATIC MUSIC

**Item 2 description**
> Be immersed in the energy and richness of live classical music.

**Item 3 title**
> THEATRE & STORYTELLING

**Item 3 description**
> A distinctive performance bringing music, movement and theatre together.

### About Auckland Tamil Association: `#about-ata` (Cream background)

**Heading** (`h2`): Amerigo BT Medium, Crimson
> About Auckland Tamil Association

**Body** (three `p`): Poppins Regular, Maroon
> Auckland Tamil Association (ATA) is committed to bringing the Tamil community together through culture, heritage, arts and community engagement.

> Through its initiatives and events, ATA creates opportunities for people to celebrate Tamil identity, connect with one another and share the richness of Tamil culture with the wider Auckland community.

> For BHAV, Auckland Tamil Association is proud to bring audiences together for an exceptional evening of Indian classical dance, music and theatre, featuring Padma Bhushan Shobana.

**Image:** Auckland Tamil Association logo, if available.

### Title Sponsor: `#sponsor` (Gold background)

**Heading** (`h2`): Amerigo BT Medium, Crimson
> Title Sponsor

**Sponsor name** (`h3`, paired with the Kripa Financial Solutions logo if available): Amerigo BT Medium, Maroon
> Kripa Financial Solutions

**Body** (two `p`): Poppins Regular, Maroon
> Kripa Financial Solutions is proud to be the Title Sponsor of BHAV, supporting this special celebration of Indian art, culture and artistic excellence.

> With a strong commitment to the community, Kripa Financial Solutions is delighted to support an event that brings people together and provides Auckland audiences with the opportunity to experience an acclaimed artist of Shobana’s stature live on stage.

### Be Part of BHAV: `#book` (Maroon background)

**Heading** (`h2`): Amerigo BT Medium, Gold
> BE PART OF BHAV

**Intro** (lead `p`): Poppins Regular, Cream
> Join us for an unforgettable evening with Padma Bhushan Shobana.

**Event name** (`p`): Amerigo BT Medium, Cream
> BHAV, Bharatha’s 5th Vedha

**Date and time** (`<time datetime="2026-10-17T18:00+13:00">`): Poppins Medium, Cream
> 17 October 2026 | 6:00 PM

**Venue** (`p`): Poppins Medium, Cream
> Bruce Mason Centre, Takapuna, Auckland

**Button** (link to `TICKET_URL`): Poppins SemiBold, Gold fill with Maroon label
> BOOK YOUR TICKETS

**QR code:** generated from `TICKET_URL`; beside the button on desktop and below it on mobile (see **Ticket link and QR code**). No visible caption.

### Source notes (do not render)

These lines were in the source document as instructions or structure, not page copy:

- "BHAV by SHOBANA - Landing Page content" is the document title. Use "BHAV by SHOBANA" as the site name in metadata (`og:site_name`).
- "Hero:" and "Section 1:" to "Section 6:" are structure labels.
- "Ticket booking: [Insert Ticketmaster URL]" means the booking URL is still to come, so use the `TICKET_URL` placeholder.
- "QR Code" means a QR code image goes in the final section.

---

## Metadata and structured data

- `<html lang="en-NZ">`
- Title: `BHAV, Bharatha’s 5th Vedha | Padma Bhushan Shobana | Auckland`
- Meta description: `Padma Bhushan Shobana in BHAV, Bharatha’s 5th Vedha. Saturday, 17 October 2026, 6:00 PM, Bruce Mason Centre, Takapuna, Auckland.`
- Open Graph and Twitter tags: the same title and description, `og:site_name` "BHAV by SHOBANA", `og:type` "website", `twitter:card` "summary_large_image", and a 1200×630 image cropped from the hero photo if one exists (otherwise list it as missing).
- Event JSON-LD in the page head, as below. The event starts at 6:00 PM NZDT (UTC+13). The copy presents Auckland Tamil Association as the host, so it is the organizer, and Kripa Financial Solutions is the sponsor. Leave out `offers` until the real `TICKET_URL` is set, then add `"offers": { "@type": "Offer", "url": "<TICKET_URL>" }`.

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "BHAV, Bharatha’s 5th Vedha",
  "description": "Experience an extraordinary celebration of Indian classical arts with Shobana in BHAV, Bharatha’s 5th Vedha.",
  "startDate": "2026-10-17T18:00:00+13:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Bruce Mason Centre",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Takapuna, Auckland",
      "addressCountry": "NZ"
    }
  },
  "performer": [
    { "@type": "Person", "name": "Shobana" },
    { "@type": "Person", "name": "Abhishek Raghuram" }
  ],
  "organizer": { "@type": "Organization", "name": "Auckland Tamil Association" },
  "sponsor": { "@type": "Organization", "name": "Kripa Financial Solutions" }
}
```

---

## Done when

- [ ] All copy from **Page copy** appears exactly as written, in the order given, and nothing from **Source notes** is rendered.
- [ ] No old copy, lorem ipsum, or old event date, time or venue remains on the page (search the codebase for the old strings).
- [ ] Only the four palette colours and their transparent versions are used, and every text/background pair is a passing pair.
- [ ] Amerigo BT is used only on highlight elements and Poppins everywhere else; the page still looks right with the fallback stack if the Amerigo BT files are missing.
- [ ] Every BOOK YOUR TICKETS button and the QR code read from the single `TICKET_URL`.
- [ ] Checked at 360, 768, 1024 and 1440px widths: no horizontal scroll, the wordmark doesn't overflow, and the experience items stack on mobile. Take screenshots to review if your environment supports it.
- [ ] One `h1`, an `h2` per section, `h3` for the experience titles and the sponsor name, plus `header`, `main` and `footer` landmarks.
- [ ] Visible keyboard focus on every link and button, and `prefers-reduced-motion` is respected.
- [ ] Images have alt text and dimensions, and the hero image isn't lazy-loaded.
- [ ] Build and lint pass with no new errors or warnings.

## Final report

When you're done, reply with a short report covering:

1. The stack and structure you found, and what you kept, restyled or removed.
2. The files you changed.
3. Open items: Amerigo BT font files, the Ticketmaster URL and QR code, missing images or logos, and any existing sections I need to decide on.
4. Anything in this brief you couldn't follow, and why.
