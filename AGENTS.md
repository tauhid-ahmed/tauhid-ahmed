# AGENTS.md — Development Guidelines for AI Agents

Welcome to the **Tauhid Ahmed - Portfolio** repository. This document defines the engineering standards, architecture, tech stack, and conventions for AI coding agents and human developers collaborating on this project.

---

## 1. Project Overview & Architecture

- **Project Name**: Tauhid Ahmed's Personal Portfolio & Engineering Showcase
- **Architecture**: Next.js App Router (`src/app`) with modular feature-based architecture (`src/features/*`)
- **Package Manager**: `pnpm` (pnpm 10+)
- **Primary Language**: TypeScript (Strict mode enabled)

### Directory Structure

```plaintext
src/
├── app/                  # Next.js App Router (layout, page, sitemap, not-found, error boundaries)
├── components/           # Shared reusable UI & layout components
│   ├── animations/       # Motion & Lenis animation primitives (SectionAnimation, LenisProvider, etc.)
│   ├── layout/           # Header, Footer, Container, Navigation
│   └── ui/               # Radix UI and utility components (Button, Dialog, Dropdown, etc.)
├── features/             # Domain-specific feature modules
│   ├── hero/             # Hero banner & interactive intro
│   ├── snapshot/         # Quick metric / experience highlights
│   ├── experience/       # Career timeline & visual CV
│   ├── projects/         # Featured engineering projects
│   ├── stack/            # Tech stack & skill matrix
│   └── contact/          # Interactive contact form & modal
├── data/                 # Centralized portfolio content & metadata
│   └── portfolio-data.ts # Single source of truth for resume data, projects, experience, socials
├── lib/                  # Utilities (clsx/tailwind-merge via cn)
├── styles/               # Global styles, Tailwind v4 imports, theme variables
└── types/                # Shared TypeScript definitions
```

---

## 2. Technology Stack & Modern Tooling

| Technology | Version / Specification | Notes |
| :--- | :--- | :--- |
| **Next.js** | `^16.x` (App Router) | Dev server uses `--turbopack` |
| **React** | `^19.x` | Uses automatic React JSX runtime |
| **Tailwind CSS** | `^4.x` | CSS-first configuration via `@import "tailwindcss"` and `@theme inline` |
| **Motion** | `^13.x` | Imports strictly from `"motion/react"` (formerly Framer Motion) |
| **TypeScript** | `^5.x` | Strict typing with `tsc --noEmit` check |
| **Linting** | ESLint `9.x` Flat Config | `eslint.config.mjs` with `eslint-config-next` |
| **Smooth Scroll** | `lenis` | Controlled via `LenisProvider` |

---

## 3. Engineering Conventions & Rules

### A. Animation Guidelines (`motion/react`)
- **Always** import motion primitives from `"motion/react"`:
  ```tsx
  import { motion, AnimatePresence } from "motion/react";
  import type { Variants, TargetAndTransition, Transition } from "motion/react";
  ```
- **Do not** import from `"framer-motion"`.
- Explicitly type motion variants and transition objects to maintain strict TypeScript compatibility:
  ```tsx
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };
  ```

### B. Styling Guidelines (Tailwind CSS v4)
- Color tokens and theming variables are defined in [src/styles/globals.css](file:///Users/tauhid/Desktop/tauhid-ahmed/src/styles/globals.css) and [src/styles/themes.css](file:///Users/tauhid/Desktop/tauhid-ahmed/src/styles/themes.css).
- Use semantic utility classes: `bg-background`, `text-foreground`, `bg-card`, `text-primary`, `border-border`, etc.
- Combine conditional classes using `cn()` from `@/lib/utils`.

### C. React 19 Compliance & Lint Standards
- **No Synchronous `setState` in Effects**: Avoid calling `setState` directly inside a `useEffect` body to prevent cascading render warnings. Use asynchronous scheduling or sync effects with external events.
- **External State Sync**: For DOM manipulation (e.g. `document.documentElement.dataset.theme`), synchronize via dedicated `useEffect` listening to state changes.

### D. Data Management
- Maintain all resume, career history, project descriptions, and personal metadata in [src/data/portfolio-data.ts](file:///Users/tauhid/Desktop/tauhid-ahmed/src/data/portfolio-data.ts).
- Do not hardcode static bio content inside visual components.

---

## 4. Common Scripts & Workflow

```bash
# Start local development server with Turbopack
pnpm dev

# Type check TypeScript codebase
pnpm type

# Run ESLint (Flat Config)
pnpm lint

# Build optimized production bundle
pnpm build

# Start production server
pnpm start
```
