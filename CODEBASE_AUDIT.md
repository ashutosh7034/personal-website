# Codebase Audit & Cleanup Report

**Project:** Ashutosh Pandey — Personal Developer Portfolio  
**Audit Date:** September 2026  
**Status:** Clean, Audited, 100% Production Ready  

---

## 1. Executive Summary

A comprehensive codebase audit and cleanup was performed across all directories, dependencies, assets, configurations, components, and routes. All dead code, duplicate assets, unused dependencies, and temporary scraper scripts from development iterations were removed while preserving all critical authentic assets, metadata, and functionality.

---

## 2. Dependency Analysis

### Production Dependencies (`package.json`)

| Dependency | Version | Status | Justification / Usage |
| :--- | :--- | :---: | :--- |
| `next` | `^15.1.7` | **USED** | Core application framework (App Router, Server Actions, API routes) |
| `react` | `^19.0.0` | **USED** | Core UI library |
| `react-dom` | `^19.0.0` | **USED** | DOM rendering engine |
| `framer-motion` | `^12.4.7` | **USED** | Page animations, layout animations, and modal transitions |
| `lucide-react` | `^1.16.0` | **USED** | Technical and UI icon system across all components |
| `resend` | `^4.1.2` | **USED** | Direct transactional email dispatch in `/api/contact` |
| `clsx` | `^2.1.1` | **REMOVED** | Redundant. Standard Tailwind class strings are used directly. |
| `tailwind-merge` | `^3.0.1` | **REMOVED** | Redundant. No dynamic class conflicts or `cn` utility needed. |

### Development Dependencies

| Dependency | Version | Status | Justification / Usage |
| :--- | :--- | :---: | :--- |
| `typescript` | `^5.7.3` | **USED** | Static typing and compiler |
| `@types/node` | `^22.13.4` | **USED** | Node.js type definitions |
| `@types/react` | `^19.0.10` | **USED** | React 19 types |
| `@types/react-dom` | `^19.0.4` | **USED** | React DOM types |
| `tailwindcss` | `^3.4.17` | **USED** | Styling engine |
| `postcss` | `^8.5.2` | **USED** | CSS post-processing |
| `autoprefixer` | `^10.4.20` | **USED** | CSS vendor prefixing |
| `eslint` | `^9.20.1` | **USED** | Code quality linter |
| `eslint-config-next` | `^15.1.7` | **USED** | Next.js lint rules |

**Final Dependency Count:**
- Production Dependencies: **6** (down from 8)
- Dev Dependencies: **9**

---

## 3. Files & Assets Cleaned

| File / Directory | Category | Action | Reason |
| :--- | :--- | :---: | :--- |
| `public/images/ashutosh-casual.png` | Asset | **REMOVED** | Duplicate exploration asset (1.9 MB). `ashutosh-portrait.png` is the sole authoritative professional photo. |
| `public/images/ashutosh-profile.jpg` | Asset | **REMOVED** | Duplicate exploration image (98 KB). |
| `audit_fetcher.py` | Scratch Script | **REMOVED** | Temporary Python script used during GitHub repository discovery phase. |
| `fetch_repos.py` | Scratch Script | **REMOVED** | Temporary Python script used during GitHub repository discovery phase. |
| `scratch_repos.json` | Temporary Data | **REMOVED** | Raw 312 KB GitHub API JSON dump. Data consolidated into `GITHUB_PROJECT_AUDIT.md` and `src/lib/data.ts`. |
| `repo_audits_complete.json` | Temporary Data | **REMOVED** | Intermediate 44 KB repository audit dump. |
| `repo_audits/` | Temporary Directory | **REMOVED** | Intermediate JSON output directory from repository scanning. |

---

## 4. Component & Architecture Audit

Every single component in `src/components/` was audited for direct imports, rendering, and accessibility:

| Component | Path | Status | Role & Integration |
| :--- | :--- | :---: | :--- |
| `Navbar` | `src/components/Navbar.tsx` | **ACTIVE** | Desktop floating pill + mobile drawer menu with resume download button. |
| `Hero` | `src/components/Hero.tsx` | **ACTIVE** | Personal positioning, TCET MCA (9.14 CGPA) & IITM (7.67 CGPA) badges, photo frame. |
| `Projects` | `src/components/Projects.tsx` | **ACTIVE** | 6 flagship case studies with 5-step visual pipelines, Deep-Dive modal, and 17+ repo archive. |
| `About` | `src/components/About.tsx` | **ACTIVE** | Systems engineering philosophy, academic journey, and focus areas. |
| `SkillEcosystem` | `src/components/SkillEcosystem.tsx` | **ACTIVE** | Touch & hover technology grid dynamically updating Project Connector. |
| `Experience` | `src/components/Experience.tsx` | **ACTIVE** | Chronological timeline: Creatalysis, Prodigy InfoTech, Gemini Ambassador, NEP Saarthi. |
| `Research` | `src/components/Research.tsx` | **ACTIVE** | Peer-reviewed papers in AI & Education (**Best Paper Award @ MULTICON-W 2026**). |
| `Achievements` | `src/components/Achievements.tsx` | **ACTIVE** | MCA CET (97.80%), hackathon finalist recognitions (Mumbai Hacks, IIT Bombay), certs. |
| `ContactForm` | `src/components/ContactForm.tsx` | **ACTIVE** | Validated terminal with honeypot security, iOS zoom protection, and email delivery. |
| `Footer` | `src/components/Footer.tsx` | **ACTIVE** | Real-time Mumbai IST clock, navigation links, and system status indicator. |
| `Icons` | `src/components/Icons.tsx` | **ACTIVE** | Optimized inline SVGs (GitHub, LinkedIn) preventing external icon bundle bloat. |

---

## 5. Routes & Endpoints Audit

| Route | Type | Status | Verified Behavior |
| :--- | :--- | :---: | :--- |
| `/` | Page (Static) | **ACTIVE** | Single-page portfolio architecture with fluid anchor scrolling. |
| `/api/contact` | API (Dynamic) | **ACTIVE** | Server-side validation, anti-spam honeypot, dual-relay email dispatch to `ashutosh3276s16@gmail.com`. |

---

## 6. Configuration & Quality Checks

- **`.eslintrc.json`:** Standard Next.js core web vitals configuration added.
- **`.gitignore`:** Clean rules ignoring `.next/`, `node_modules/`, `.env*.local`, build traces, and OS caches.
- **`next.config.mjs`:** Clean configuration for Next.js 15.
- **`tailwind.config.ts`:** Clean semantic color tokens (`bg-primary`, `surface-card`, `accent`, `brandText`).
- **`tsconfig.json`:** Strict TypeScript compilation with path aliases (`@/*` -> `./src/*`).

---

## 7. Verification Results

```bash
# TypeScript Compile Check
npx tsc --noEmit
# Exit Code: 0 (0 errors)

# Production Build
npm run build
# Exit Code: 0 (0 errors)
# Route (app)                               Size  First Load JS
# ┌ ○ /                                  76.8 kB         179 kB
# ├ ○ /_not-found                          992 B         104 kB
# └ ƒ /api/contact                         123 B         103 kB

# Browser Verification
# Console Errors: 0
# Modal Triggers: Passed
# Category Filters: Passed
# Responsive Viewports: Passed (320px to 1920px)
```

---

## 8. Final Project Directory Structure

```
.
├── public/
│   ├── images/
│   │   └── ashutosh-portrait.png     # High-resolution professional portrait
│   └── Ashutosh_Pandey_Resume.pdf     # Verified master resume PDF
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # Email dispatch API route
│   │   ├── favicon.ico
│   │   ├── globals.css               # Design tokens & typography
│   │   ├── layout.tsx                # Root layout, fonts & metadata
│   │   └── page.tsx                  # Root portfolio page
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   └── SkillEcosystem.tsx
│   └── lib/
│       ├── data.ts                   # 100% verified portfolio content
│       └── types.ts                  # Shared TypeScript interfaces
├── .env.example                      # Template for environment variables
├── .eslintrc.json                    # ESLint configuration
├── .gitignore                        # Git ignore rules
├── CODEBASE_AUDIT.md                 # Full audit & cleanup report
├── CONTENT_MAP.md                    # Ground-truth source data map
├── DESIGN_SYSTEM.md                  # Design system tokens & rules
├── GITHUB_PROJECT_AUDIT.md           # 49-repository audit report
├── LICENSE                           # MIT License
├── README.md                         # Complete documentation & hosting guide
├── next.config.mjs                   # Next.js configuration
├── package.json                      # Pruned dependencies & scripts
├── postcss.config.mjs                # PostCSS configuration
├── tailwind.config.ts                # Tailwind custom theme configuration
└── tsconfig.json                     # TypeScript strict configuration
```
