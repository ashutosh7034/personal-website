# DESIGN SYSTEM — ASHUTOSH PANDEY PORTFOLIO

## 1. Design Philosophy
- **Anti-AI Aesthetic:** Eliminates generic purple neon gradients, floating glowing spheres, heavy frosted glassmorphism, and boilerplate template patterns.
- **70% Engineering / 20% Editorial / 10% Experimental Motion:** High-density technical precision, structured grids, asymmetric framing, kinetic typography, and tactile micro-interactions.
- **Content-First & Ground Truth:** Every project, credential, metric, and paper is authentic and verified directly from Ashutosh's resume, GitHub, and academic publications.

---

## 2. Color Palette (Tokens)

The color system is built on a dark carbon/slate foundation with a single distinctive **Solar Rust / Ember Orange** accent (`#F97316`) that feels industrial, warm, and intentional.

```css
:root {
  /* Neutral Dark Scale */
  --bg-primary: #0A0B0D;        /* Deep Carbon */
  --bg-secondary: #121417;      /* Surface Card */
  --bg-tertiary: #1A1D21;       /* Elevated Surface / Hover */
  --bg-subtle: #24292F;         /* Subtle highlight */

  /* Text Scale */
  --text-primary: #F3F4F6;      /* High-contrast Heading / Readability */
  --text-secondary: #9CA3AF;    /* Refined Body text */
  --text-muted: #6B7280;        /* Metadata, tags, timestamps */
  --text-disabled: #4B5563;

  /* Accent Color System */
  --accent: #F97316;            /* Solar Rust / Ember Orange */
  --accent-hover: #EA580C;      /* Deep Orange */
  --accent-muted: rgba(249, 115, 22, 0.12); /* Subtle glow / badge background */
  --accent-border: rgba(249, 115, 22, 0.35);

  /* Secondary Accents (Functional only) */
  --success: #10B981;           /* Green for Live status / Success */
  --cyan-subtle: #06B6D4;       /* Subtle data stream marker */

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.16);
  --border-accent: rgba(249, 115, 22, 0.4);

  /* Shadows (Subtle, structural, not blurry glow) */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.7);
}
```

---

## 3. Typography System

- **Display / Headings:** `Plus Jakarta Sans` or `Syne` / `Space Grotesk` (Modern, bold, editorial character, confident geometric shapes).
- **Body Text:** `Inter` / `Geist` (Maximum clarity, high legibility across all screen sizes).
- **Technical & Metadata:** `JetBrains Mono` / `Space Mono` (Engineering precision for code snippets, architecture flows, dates, and labels).

### Type Hierarchy:
- `Display Title (Hero)`: `clamp(2.75rem, 6vw, 5rem)`, weight: 800, line-height: 1.05
- `H1 / Section Heading`: `clamp(2rem, 4vw, 3.25rem)`, weight: 700, line-height: 1.15
- `H2 / Project Title`: `clamp(1.5rem, 2.5vw, 2.25rem)`, weight: 600, line-height: 1.2
- `H3 / Subheading`: `1.25rem`, weight: 600, line-height: 1.4
- `Body Primary`: `1.05rem`, weight: 400, line-height: 1.65
- `Body Muted`: `0.925rem`, weight: 400, line-height: 1.6
- `Monospace Metadata`: `0.8125rem`, weight: 500, letter-spacing: 0.05em, uppercase

---

## 4. Layout & Spacing Grid
- **Container Max-Widths:** `1280px` (standard), `1440px` (wide editorial displays).
- **Base Grid:** 8px baseline grid system.
- **Section Spacing:** `clamp(5rem, 10vw, 8.5rem)` vertical padding.
- **Architectural Rules:** Subtle 1px lines (`--border-subtle`) demarcating sections, headers, and metadata headers.

---

## 5. Art Direction & Image Treatment
- **Ashutosh's Photograph:** High-resolution portrait framed with an architectural, asymmetric matte border with custom monospaced badge (`SYS_ID: AP-2026 // MUMBAI_IN`).
- **Interactive Image Treatment:** Dual-layer interaction: crisp monochrome editorial tone default that smoothly reveals rich warm color tones upon hover/focus.
- **Zero Stock Placeholders:** Project previews utilize authentic diagrams and UI mockups tailored to the actual project implementations.

---

## 6. Motion & Animation Principles (Framer Motion / Tailwind)
- **Purposeful & Physical:** Easing curves `[0.16, 1, 0.3, 1]` (custom cubic-bezier) for snappy, natural, premium deceleration.
- **Hierarchy of Motion:**
  - *Primary (Headings & Hero):* Staggered word/line mask reveals on page entry.
  - *Secondary (Cards & Timeline):* Scroll-triggered translateY (16px to 0px) with opacity fade-in.
  - *Micro-interactions:* Button hover lift (2px), skill card interactive illumination connecting related projects.
  - *Background:* Clean, calm, zero distracting infinite particle spam.
- **Accessibility:** Full `prefers-reduced-motion` compliance — transitions fallback to instant opacity fades or static layouts.

---

## 7. Component Rules
1. **Interactive Navigation:** Minimal floating bar with status indicator (`● Available for select roles & collaborations`), active section tracking, and mobile drawer.
2. **Project Mini Case Studies:**
   - Index number (`01`, `02`...)
   - Project Name & Real Duration
   - Context / Problem
   - What Was Built & Technical Architecture (Interactive step flow diagram)
   - Verified Tech Stack Tags
   - Direct GitHub Repo & Demo links
3. **Interactive Skill Ecosystem:**
   - Category grouping (Languages, Backend & Frameworks, Databases & Vector Stores, Applied AI & Tools).
   - Hovering or clicking a skill highlights which projects Ashutosh built with it.
4. **Experience Timeline:**
   - Chronological vertical timeline with high-contrast milestone indicators, responsibilities, and key impact points.
5. **Research & Publications:**
   - Editorial card layout featuring both 2026 papers, authorship notes, and DOI/Publication context.
6. **Contact System:**
   - Fully validated Next.js Server Action / API route with Resend support.
   - Honeypot spam trap, rate limiting, accessible error & success states.
