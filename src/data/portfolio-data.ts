import { env } from "@/env";
import * as path from "@/paths";

export const navItems: NavItem[] = [
  { name: "Home", href: path.homeSectionPath },
  { name: "Experience", href: path.experienceSectionPath },
  { name: "Projects", href: path.projectsSectionPath },
  { name: "Stack", href: path.stackSectionPath },
  { name: "Contact", href: path.contactSectionPath },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: env.NEXT_PUBLIC_AUTHOR_GITHUB,
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: env.NEXT_PUBLIC_AUTHOR_LINKEDIN,
    icon: "Linkedin",
  },
  {
    platform: "X",
    url: env.NEXT_PUBLIC_AUTHOR_X,
    icon: "X",
  },
];

export const developer = {
  name: env.NEXT_PUBLIC_AUTHOR_NAME,
  firstName: env.NEXT_PUBLIC_AUTHOR_FIRST_NAME,
  lastName: env.NEXT_PUBLIC_AUTHOR_LAST_NAME,
  title: "Full-Stack Developer",
  techStackText: "React • Next.js • Node.js • NestJS • TypeScript • AI",
  bio: "Full-Stack Developer specializing in high-performance web applications, scalable backends with Node.js and NestJS, and modern AI/LLM integrations. Experienced in engineering leadership, cross-functional collaboration, and delivering production software for global users.",
  location: env.NEXT_PUBLIC_AUTHOR_LOCATION,
  email: env.NEXT_PUBLIC_AUTHOR_EMAIL,
  phone: env.NEXT_PUBLIC_AUTHOR_PHONE,
  linkedin: env.NEXT_PUBLIC_AUTHOR_LINKEDIN,
  github: env.NEXT_PUBLIC_AUTHOR_GITHUB,
  x: env.NEXT_PUBLIC_AUTHOR_X,
  liveResume: env.NEXT_PUBLIC_AUTHOR_LIVE_RESUME,
};

export interface SnapshotItem {
  number: string;
  label: string;
  detail: string;
}

export const professionalSnapshot: SnapshotItem[] = [
  {
    number: "4+ Years",
    label: "Experience",
    detail: "Full lifecycle web & enterprise development",
  },
  {
    number: "Full-Stack",
    label: "Engineering",
    detail: "React & Next.js frontend to NestJS & Node.js backend",
  },
  {
    number: "Frontend → Backend",
    label: "Core Architecture",
    detail: "Type-safe APIs, edge databases & secure authentication",
  },
  {
    number: "AI / LLM",
    label: "Integration",
    detail: "Agentic workflows, model APIs & AI-augmented tooling",
  },
  {
    number: "Client & Team",
    label: "Collaboration",
    detail: "Strategic client communication & delivery assurance",
  },
];

export interface ExperienceRecord {
  company: string;
  role: string;
  period: string;
  location: string;
  leadHighlight?: string;
  responsibilities: string[];
  technologies: string[];
}

export const workExperience: ExperienceRecord[] = [
  {
    company: "SM Technology",
    role: "Full-Stack Developer & Team Leader (Assistant Manager, Operations)",
    period: "2025 – Present",
    location: "Dhaka, Bangladesh",
    leadHighlight: "Leading cross-functional delivery & engineering strategy",
    responsibilities: [
      "Direct end-to-end team management and cross-functional collaboration across engineering, AI research, and design teams.",
      "Lead client communication, technical requirements gathering, and strategic architectural proposals.",
      "Manage project timelines, engineering milestones, and delivery assurance for mission-critical web applications.",
      "Standardize full-stack development best practices, code review standards, and CI/CD deployment routines.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "TypeScript",
      "AI APIs & LLMs",
      "PostgreSQL",
      "Team Leadership",
    ],
  },
  {
    company: "Softsync",
    role: "Frontend Developer",
    period: "2024 – 2025",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Engineered enterprise-grade web applications in close collaboration with UI/UX designers and backend teams.",
      "Accelerated feature delivery cycles by 25% by architecting reusable React, TypeScript, and Tailwind CSS design systems.",
      "Built resilient client-side state models and responsive UI components tested for high accessibility and cross-browser fidelity.",
      "Enforced code quality standards with automated linting, unit testing, and structured PR reviews.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Component Architecture",
      "REST APIs",
      "Testing & QA",
    ],
  },
  {
    company: "Freelance Projects",
    role: "Frontend Developer",
    period: "2021 – 2024",
    location: "Remote / International",
    responsibilities: [
      "Delivered full lifecycle web applications for diverse international clients from initial architectural design to live production deployment.",
      "Constructed modern responsive user interfaces with Next.js, React, Node.js, and REST APIs backed by automated Vercel CI/CD pipelines.",
      "Optimized Core Web Vitals, SEO metadata, and bundle sizes, consistently achieving high-performance Lighthouse scores.",
      "Integrated secure authentication, third-party APIs, payment gateways, and content management workflows.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "REST APIs",
      "TypeScript",
      "Tailwind CSS",
      "Motion for React",
      "Vercel CI/CD",
    ],
  },
];

export const educationHistory = [
  {
    degree: "Professional Training in Web & Software Development",
    institution: "freeCodeCamp, Udemy, YouTube, and specialized coursework",
    period: "2017 – Present",
    description:
      "Continuous self-directed engineering curriculum encompassing full-stack web architecture, distributed systems, modern JavaScript/TypeScript, and scalable backend design.",
  },
  {
    degree: "Bachelor of Business Administration (BBA) Studies",
    institution: "National University, Bangladesh",
    period: "2014 – 2018",
    description:
      "Foundational business, operations, and analytical background prior to dedicated full-time transition into software engineering.",
  },
];

export interface RealProject {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  capabilities: string[];
  liveUrl: string;
  githubUrl: string;
  architectureHighlights: string[];
}

export const flagshipProject: RealProject = {
  id: "ecommerce-platform",
  index: "01",
  title: "E-Commerce Platform",
  tagline: "High-Performance Edge Commerce with Type-Safe Architecture",
  description:
    "A modern, scalable, and feature-rich e-commerce platform designed for optimal performance, elegant UX, and developer-grade extensibility.",
  image: "/images/projects/e-commerce.png",
  techStack: [
    "Next.js 15",
    "App Router",
    "TypeScript",
    "Hono",
    "tRPC",
    "Drizzle ORM",
    "Neon Postgres",
    "Tailwind CSS v4",
    "Shadcn UI",
    "NextAuth.js v5",
    "Motion for React",
    "Vercel",
  ],
  capabilities: [
    "Dynamic product catalog with instant category taxonomy navigation",
    "Cascading multi-attribute filtering (price range, attributes, availability)",
    "Authentication & Role-Based Access Control (RBAC)",
    "Comprehensive Admin Dashboard for inventory, orders & sales analytics",
    "Complete product, category, and order lifecycle management",
    "Optimized cloud image upload & responsive media delivery",
    "Secure payment gateway integration & checkout processing",
    "Production SEO with dynamic metadata, OpenGraph, and automated sitemaps",
  ],
  architectureHighlights: [
    "Server Components for zero-bundle data fetching",
    "Hono & tRPC for end-to-end type safety between client and server",
    "Drizzle ORM with Neon serverless PostgreSQL for edge performance",
    "Sub-second page transitions with App Router streaming",
  ],
  liveUrl: "https://shop-ipsum.vercel.app",
  githubUrl: "https://github.com/tauhid-ahmed/shop-ipsum",
};

export interface DomainExperience {
  domain: string;
  scope: string;
  description: string;
  architecturalFocus: string[];
  keyTechnologies: string[];
}

export const domainExperiences: DomainExperience[] = [
  {
    domain: "CRM & Business Management",
    scope: "Enterprise Operations",
    description:
      "Architected customer relation pipelines, role-based organizational hierarchies, audit trails, and multi-tenant admin dashboards to streamline enterprise operations.",
    architecturalFocus: [
      "Role-Based Access Control (RBAC)",
      "Real-time pipeline analytics & KPI summaries",
      "Granular data filtering & export pipelines",
    ],
    keyTechnologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    domain: "Logistics & Supply Operations",
    scope: "Fulfillment & Tracking",
    description:
      "Engineered inventory reconciliation, multi-stage shipment status tracking, and automated reporting systems for high-throughput fulfillment workflows.",
    architecturalFocus: [
      "Shipment status state-machines",
      "Automated inventory alerting & batch processing",
      "High-reliability transactional integrity",
    ],
    keyTechnologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "TypeScript"],
  },
  {
    domain: "Project Management & Collaboration",
    scope: "Productivity Systems",
    description:
      "Developed agile tracking boards, task assignment workflows, time tracking, and team activity feeds inspired by modern developer productivity platforms.",
    architecturalFocus: [
      "Interactive Kanban state transitions",
      "Optimistic UI updates for zero-latency interactions",
      "Collaborative task assignment workflows",
    ],
    keyTechnologies: ["React", "Next.js", "TypeScript", "Drizzle ORM", "REST APIs"],
  },
  {
    domain: "AI-Integrated Applications",
    scope: "Agentic Workflows & LLMs",
    description:
      "Integrated modern LLM APIs, prompt engineering frameworks, and agentic workflows to build intelligent assistants, automated summarizers, and developer velocity tools.",
    architecturalFocus: [
      "Streaming LLM response handling & UI hydration",
      "Structured output validation with Zod schemas",
      "Agentic coding tool workflows (Claude Code, Cursor)",
    ],
    keyTechnologies: ["LLM APIs", "Agentic Workflows", "TypeScript", "Next.js", "Zod"],
  },
];

export interface TechCategory {
  category: string;
  description: string;
  highlighted?: boolean;
  skills: { name: string; isPillar?: boolean }[];
}

export const technicalMatrix: TechCategory[] = [
  {
    category: "Languages",
    description: "Type-safe, modern runtime foundations",
    skills: [
      { name: "TypeScript", isPillar: true },
      { name: "JavaScript", isPillar: true },
    ],
  },
  {
    category: "Frontend",
    description: "Accessible, high-performance user interfaces",
    skills: [
      { name: "React", isPillar: true },
      { name: "Next.js (App Router)", isPillar: true },
      { name: "Redux" },
      { name: "Tailwind CSS", isPillar: true },
      { name: "SCSS" },
      { name: "Shadcn UI" },
      { name: "Motion for React" },
      { name: "GSAP" },
      { name: "Figma" },
    ],
  },
  {
    category: "Backend",
    description: "Robust enterprise services, microservices & APIs",
    highlighted: true,
    skills: [
      { name: "NestJS", isPillar: true },
      { name: "Node.js", isPillar: true },
      { name: "Express.js", isPillar: true },
    ],
  },
  {
    category: "APIs & Architecture",
    description: "Type-safe contracts, RPCs & distributed patterns",
    skills: [
      { name: "REST APIs", isPillar: true },
      { name: "GraphQL" },
      { name: "Hono", isPillar: true },
      { name: "tRPC", isPillar: true },
      { name: "API Integration" },
      { name: "Component Architecture", isPillar: true },
    ],
  },
  {
    category: "Authentication & Security",
    description: "Enterprise RBAC, identity & session management",
    skills: [
      { name: "Auth.js (NextAuth)", isPillar: true },
      { name: "Clerk" },
      { name: "Custom Authentication" },
      { name: "Authorization & RBAC", isPillar: true },
      { name: "Web Security Best Practices" },
    ],
  },
  {
    category: "Databases & ORM",
    description: "Relational modeling, edge caching & schema migrations",
    skills: [
      { name: "PostgreSQL", isPillar: true },
      { name: "Neon Postgres", isPillar: true },
      { name: "Redis", isPillar: true },
      { name: "Drizzle ORM", isPillar: true },
      { name: "Prisma" },
      { name: "NoSQL" },
    ],
  },
  {
    category: "DevOps & Production",
    description: "Continuous integration, deployment & containerization",
    skills: [
      { name: "Git", isPillar: true },
      { name: "GitHub", isPillar: true },
      { name: "Docker" },
      { name: "Vercel CI/CD", isPillar: true },
      { name: "Performance Optimization (CWV)" },
      { name: "Production SEO" },
    ],
  },
  {
    category: "AI & Agentic Engineering",
    description: "Model integration, autonomous agents & velocity",
    skills: [
      { name: "LLM APIs & Streaming", isPillar: true },
      { name: "AI API Integration" },
      { name: "Agentic Workflows", isPillar: true },
      { name: "Claude Code", isPillar: true },
      { name: "Codex" },
      { name: "GitHub Copilot" },
      { name: "Cursor", isPillar: true },
    ],
  },
];

// Compatibility exports
export const skills = technicalMatrix.map((item) => ({
  category: item.category,
  title: {
    full: item.category,
    short: item.category.split(" ")[0],
  },
  icon: "Code",
  items: item.skills.map((s) => s.name),
  color: "from-primary to-indigo-500",
  description: item.description,
}));

export const projects: Project[] = [
  {
    id: flagshipProject.id,
    title: flagshipProject.title,
    description: flagshipProject.description,
    image: flagshipProject.image,
    tags: flagshipProject.techStack,
    demoUrl: flagshipProject.liveUrl,
    githubUrl: flagshipProject.githubUrl,
    featured: true,
    category: ["fullstack", "frontend"],
  },
];

export const profileData: ResumeData = [
  {
    section: "about",
    content: [
      "Results-driven Full-Stack Developer with 4+ years of professional experience architecting performant, accessible, and scalable web applications with React, Next.js, Node.js, NestJS, and TypeScript.",
      "Proven track record in cross-functional engineering, modern API design, edge databases, and AI application integrations.",
      "Serving at SM Technology as Full-Stack Developer & Team Leader (Assistant Manager, Operations), managing technical workflows, client communication, and delivery assurance.",
      "Committed to clean architecture, developer velocity, robust code quality, and measurable business impact.",
    ],
  },
  {
    section: "experience",
    content: workExperience.map((exp) => ({
      company: exp.company,
      position: exp.role,
      duration: exp.period,
      description: exp.responsibilities.join(" "),
      technologies: exp.technologies,
    })),
  },
  {
    section: "education",
    content: educationHistory.map((edu) => ({
      degree: edu.degree,
      institution: edu.institution,
      duration: edu.period,
      description: edu.description,
    })),
  },
];
