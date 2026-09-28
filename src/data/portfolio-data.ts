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
  name: env.NEXT_PUBLIC_AUTHOR_NAME || "Tauhid Ahmed",
  firstName: env.NEXT_PUBLIC_AUTHOR_FIRST_NAME || "Tauhid",
  lastName: env.NEXT_PUBLIC_AUTHOR_LAST_NAME || "Ahmed",
  title: "Full-Stack Developer",
  techStackText: "React • Next.js • Node.js • NestJS • TypeScript • AI Tooling",
  bio: "I build reliable full-stack web applications, clean API architectures, and scalable backends. Currently focused on React, Next.js, Node.js, and NestJS — bridging solid engineering fundamentals with pragmatic modern tooling to create fast, user-friendly digital products.",
  location: env.NEXT_PUBLIC_AUTHOR_LOCATION || "Pabna, Bangladesh",
  email: env.NEXT_PUBLIC_AUTHOR_EMAIL || "tauhidxtauhid@gmail.com",
  phone: env.NEXT_PUBLIC_AUTHOR_PHONE || "+8801670012716",
  linkedin:
    env.NEXT_PUBLIC_AUTHOR_LINKEDIN ||
    "https://www.linkedin.com/in/tauhidxahmed/",
  github: env.NEXT_PUBLIC_AUTHOR_GITHUB || "https://github.com/tauhidxahmed",
  x: env.NEXT_PUBLIC_AUTHOR_X || "https://x.com/tauhidxahmed",
  liveResume: env.NEXT_PUBLIC_AUTHOR_LIVE_RESUME || "https://bit.ly/42JPmEg",
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
    detail: "Building & shipping production web applications",
  },
  {
    number: "Full-Stack",
    label: "Core Focus",
    detail: "React & Next.js frontend to NestJS & Node.js backend",
  },
  {
    number: "End-to-End",
    label: "Architecture",
    detail: "Type-safe APIs, PostgreSQL schemas & secure auth",
  },
  {
    number: "Modern Tooling",
    label: "Productivity",
    detail: "Pragmatic AI workflows, automated testing & CI/CD",
  },
  {
    number: "Team Lead",
    label: "Collaboration",
    detail: "Engineering leadership, code reviews & client delivery",
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
    leadHighlight: "Leading engineering squad & architectural direction",
    responsibilities: [
      "Lead frontend and backend development teams, guiding architectural decisions, code quality standards, and feature delivery.",
      "Design and maintain scalable backend services with NestJS, Node.js, and PostgreSQL for client platforms.",
      "Communicate directly with clients and stakeholders to gather technical requirements, scope projects, and provide engineering solutions.",
      "Mentor developers, conduct structured code reviews, and streamline deployment routines with GitHub Actions and Vercel.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "AI APIs",
      "Team Leadership",
    ],
  },
  {
    company: "Softsync Inc",
    role: "Frontend Developer",
    period: "2024 – 2025",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Built reusable, accessible UI component libraries using React, Next.js, TypeScript, and Tailwind CSS.",
      "Integrated frontend state stores with RESTful backend endpoints, reducing client latency and unnecessary re-renders.",
      "Collaborated with cross-functional design and QA teams to maintain visual fidelity and accessibility compliance.",
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
      "Delivered custom web applications for international clients from initial scoping through to deployment.",
      "Constructed modern responsive user interfaces with Next.js, React, Node.js, and third-party API integrations.",
      "Optimized page load speeds, SEO metadata, and Core Web Vitals to consistently improve performance scores.",
      "Integrated secure authentication, third-party payment workflows, and headless CMS solutions.",
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

// export const flagshipProject: RealProject = {
//   id: "ecommerce-platform",
//   index: "01",
//   title: "E-Commerce Platform",
//   tagline: "High-Performance Edge Commerce with Type-Safe Architecture",
//   description:
//     "A modern, scalable, and feature-rich e-commerce platform designed for optimal performance, elegant UX, and developer-grade extensibility.",
//   image: "/images/projects/e-commerce.png",
//   techStack: [
//     "Next.js 15",
//     "App Router",
//     "TypeScript",
//     "Hono",
//     "tRPC",
//     "Drizzle ORM",
//     "Neon Postgres",
//     "Tailwind CSS v4",
//     "Shadcn UI",
//     "NextAuth.js v5",
//     "Motion for React",
//     "Vercel",
//   ],
//   capabilities: [
//     "Dynamic product catalog with instant category taxonomy navigation",
//     "Cascading multi-attribute filtering (price range, attributes, availability)",
//     "Authentication & Role-Based Access Control (RBAC)",
//     "Comprehensive Admin Dashboard for inventory, orders & sales analytics",
//     "Complete product, category, and order lifecycle management",
//     "Optimized cloud image upload & responsive media delivery",
//     "Secure payment gateway integration & checkout processing",
//     "Production SEO with dynamic metadata, OpenGraph, and automated sitemaps",
//   ],
//   architectureHighlights: [
//     "Server Components for zero-bundle data fetching",
//     "Hono & tRPC for end-to-end type safety between client and server",
//     "Drizzle ORM with Neon serverless PostgreSQL for edge performance",
//     "Sub-second page transitions with App Router streaming",
//   ],
//   liveUrl: "https://shop-ipsum.vercel.app",
//   githubUrl: "https://github.com/tauhid-ahmed/shop-ipsum",
// };

export interface DomainExperience {
  domain: string;
  scope: string;
  description: string;
  architecturalFocus: string[];
  keyTechnologies: string[];
}

export const domainExperiences: DomainExperience[] = [
  {
    domain: "Operations & Admin Dashboards",
    scope: "Internal Tools & CRM",
    description:
      "Engineered multi-role administration portals, customer relation pipelines, and real-time operational data tables built for high team productivity.",
    architecturalFocus: [
      "Role-Based Access Control (RBAC) & granular permissions",
      "High-density data tables with instant filtering & sorting",
      "Export pipelines and activity audit logging",
    ],
    keyTechnologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    domain: "Order Fulfillment & Logistics",
    scope: "Supply Chain & Tracking",
    description:
      "Built inventory tracking, multi-stage shipment reconciliation, and automated dispatch status workflows designed for reliable operations.",
    architecturalFocus: [
      "Order lifecycle state machines & transition safety",
      "Automated status notifications & batch processing",
      "PostgreSQL transactional consistency for stock levels",
    ],
    keyTechnologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "TypeScript"],
  },
  {
    domain: "Team Productivity & Workflow Apps",
    scope: "Collaboration Systems",
    description:
      "Crafted agile task boards, timeline tracking, and activity feeds with optimistic UI updates and zero-friction interactions.",
    architecturalFocus: [
      "Interactive Kanban boards with drag-and-drop state",
      "Optimistic client-side updates for snappy response",
      "Structured workspace permissions and team assignments",
    ],
    keyTechnologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "REST APIs",
    ],
  },
  {
    domain: "AI-Augmented Applications",
    scope: "LLM APIs & Developer Tools",
    description:
      "Integrated intelligent features, streaming chat interfaces, and automated workflows that utilize modern language models to solve real user tasks.",
    architecturalFocus: [
      "Streaming LLM response handling & UI hydration",
      "Structured output validation with Zod schemas",
      "AI-assisted developer velocity (Claude Code, Cursor)",
    ],
    keyTechnologies: [
      "LLM APIs",
      "TypeScript",
      "Next.js",
      "Zod",
      "Anthropic / OpenAI",
    ],
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

// export const projects: Project[] = [
//   {
//     id: flagshipProject.id,
//     title: flagshipProject.title,
//     description: flagshipProject.description,
//     image: flagshipProject.image,
//     tags: flagshipProject.techStack,
//     demoUrl: flagshipProject.liveUrl,
//     githubUrl: flagshipProject.githubUrl,
//     featured: true,
//     category: ["fullstack", "frontend"],
//   },
// ];

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
