import { env } from "@/env";
import * as path from "@/paths";

export const navItems: NavItem[] = [
  { name: "Home", href: path.homeSectionPath },
  { name: "About", href: path.aboutSectionPath },
  { name: "Skills", href: path.skillsSectionPath },
  { name: "Projects", href: path.projectsSectionPath },
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
  { platform: "X", url: env.NEXT_PUBLIC_AUTHOR_X, icon: "X" },
];

export const developer: Developer = {
  name: env.NEXT_PUBLIC_AUTHOR_NAME,
  firstName: env.NEXT_PUBLIC_AUTHOR_FIRST_NAME,
  lastName: env.NEXT_PUBLIC_AUTHOR_LAST_NAME,
  title: env.NEXT_PUBLIC_AUTHOR_TITLE,
  bio: env.NEXT_PUBLIC_AUTHOR_BIO,
  location: env.NEXT_PUBLIC_AUTHOR_LOCATION,
  email: env.NEXT_PUBLIC_AUTHOR_EMAIL,
  phone: env.NEXT_PUBLIC_AUTHOR_PHONE,
  linkedin: env.NEXT_PUBLIC_AUTHOR_LINKEDIN,
  github: env.NEXT_PUBLIC_AUTHOR_GITHUB,
  x: env.NEXT_PUBLIC_AUTHOR_X,
  liveResume: env.NEXT_PUBLIC_AUTHOR_LIVE_RESUME,
};

export const skills: Skill[] = [
  {
    category: "FullStack & Core Engineering",
    title: {
      full: "FullStack & Core Engineering",
      short: "FullStack",
    },
    icon: "Code",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Redux",
    ],
    color: "from-violet-500 to-purple-500",
    description:
      "Architecting performant, scalable, and type-safe web applications using modern React, Next.js 15 App Router, Node.js, and TypeScript.",
  },
  {
    category: "Styling, Design & Motion",
    title: {
      full: "Styling, Design & Motion",
      short: "Design & UI",
    },
    icon: "Layers",
    items: [
      "Tailwind CSS",
      "Shadcn UI",
      "SCSS",
      "Motion for React",
      "GSAP",
      "Figma",
    ],
    color: "from-blue-500 to-cyan-400",
    description:
      "Crafting pixel-perfect, accessible component systems, micro-interactions, responsive layouts, and design tokens.",
  },
  {
    category: "Backend, APIs & Auth",
    title: {
      full: "Backend, APIs & Auth",
      short: "Backend & APIs",
    },
    icon: "Server",
    items: [
      "REST APIs",
      "GraphQL",
      "Hono",
      "tRPC",
      "Auth.js",
      "Clerk",
      "Custom Auth",
    ],
    color: "from-amber-500 to-orange-400",
    description:
      "Building high-throughput APIs, role-based authentication, type-safe RPCs, and modern microservices.",
  },
  {
    category: "Databases & ORM",
    title: {
      full: "Databases & ORM",
      short: "Databases",
    },
    icon: "Database",
    items: [
      "PostgreSQL",
      "Neon Postgres",
      "Redis",
      "Drizzle ORM",
      "Prisma",
      "NoSQL",
    ],
    color: "from-emerald-500 to-green-400",
    description:
      "Designing relational and caching data layers with zero-cold-start edge databases and schema-first ORMs.",
  },
  {
    category: "AI & Agentic Tools",
    title: {
      full: "AI & Agentic Tools",
      short: "AI & Agents",
    },
    icon: "Bot",
    items: [
      "Claude Code",
      "Codex",
      "GitHub Copilot",
      "Cursor",
      "LLM APIs & Integrations",
    ],
    color: "from-pink-500 to-rose-400",
    description:
      "Leveraging cutting-edge AI coding agents, autonomous workflows, and LLM APIs to multiply engineering velocity and product intelligence.",
  },
  {
    category: "DevOps & Best Practices",
    title: {
      full: "DevOps & Best Practices",
      short: "DevOps",
    },
    icon: "Zap",
    items: [
      "Vercel",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "Performance",
      "SEO",
      "Security",
    ],
    color: "from-indigo-500 to-blue-400",
    description:
      "Ensuring seamless deployments, automated CI/CD pipelines, containerization, Core Web Vitals optimization, and security compliance.",
  },
];

export const skillProficiency = {
  // Languages & Core
  TypeScript: 90,
  JavaScript: 95,
  React: 95,
  "Next.js": 95,
  "Node.js": 85,
  "Express.js": 85,
  Redux: 85,

  // Styling & Design
  "Tailwind CSS": 95,
  "Shadcn UI": 95,
  SCSS: 85,
  "Motion for React": 90,
  GSAP: 80,
  Figma: 75,

  // Backend & APIs
  "REST APIs": 95,
  GraphQL: 80,
  Hono: 85,
  tRPC: 85,
  "Auth.js": 90,
  Clerk: 85,
  "Custom Auth": 85,

  // Databases
  PostgreSQL: 85,
  "Neon Postgres": 85,
  Redis: 80,
  "Drizzle ORM": 90,
  Prisma: 85,
  NoSQL: 75,

  // AI & Agentic Tools
  "Claude Code": 95,
  Codex: 90,
  "GitHub Copilot": 95,
  Cursor: 95,
  "LLM APIs & Integrations": 90,

  // DevOps & Best Practices
  Vercel: 95,
  Docker: 75,
  Git: 90,
  GitHub: 90,
  "CI/CD": 85,
  Performance: 95,
  SEO: 90,
  Security: 85,
};

export const projects: Project[] = [
  {
    id: "E-commerce Platform",
    title: "E-Commerce Platform",
    description:
      "A modern, scalable, and feature-rich e-commerce platform designed for optimal performance, elegant UX, and developer-grade extensibility. Features cascading filters, dark mode, NextAuth v5, Stripe/SSLCommerz payments, and admin dashboard.",
    image: "e-commerce",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Hono tRPC",
      "Drizzle ORM",
      "Neon Postgres",
      "Tailwind CSS v4",
      "Shadcn UI",
      "Motion for React",
      "Auth.js v5",
    ],
    demoUrl: "https://shop-ipsum.vercel.app/",
    githubUrl: "https://github.com/tauhid-ahmed/shop-ipsum",
    featured: true,
    category: ["fullstack", "frontend"],
  },
  {
    id: "Creative-Portfolio",
    title: "Creative Portfolio",
    description:
      "A visually engaging portfolio site with smooth animations and modern UI components. Showcases creative work using motion effects and aesthetic design principles.",
    image: "creative-portfolio",
    tags: [
      "Next.js",
      "Motion for React",
      "Shadcn UI",
      "Tailwindcss",
      "CSS Animations",
    ],
    demoUrl: "https://tauhidahmed.vercel.app/",
    githubUrl: "https://github.com/tauhid-ahmed/creative-portfolio",
    featured: true,
    category: ["frontend", "design"],
  },
  {
    id: "issue-tracker",
    title: "Issue Tracker App",
    description:
      "A robust issue tracking system inspired by modern project management tools. Supports ticket creation, status updates, and team collaboration with real-time feedback.",
    image: "issue-tracker",
    tags: [
      "Next.js",
      "Prisma ORM",
      "Auth.js",
      "Tailwindcss",
      "Redis",
      "Neon Postgres",
      "Shadcn UI",
      "Motion for React",
    ],
    demoUrl: "https://shop-ipsum.vercel.app/",
    githubUrl: "https://github.com/tauhid-ahmed/shop-ipsum",
    featured: false,
    category: ["fullstack", "frontend"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp Inc.",
    content:
      "Tauhid is an exceptional developer and team leader who consistently delivers high-quality work. His attention to detail, fullstack architecture, and creative problem-solving make him a tremendous asset to any team.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "Digital Solutions",
    content:
      "Working with Tauhid was a pleasure. He has deep mastery over modern web technologies, AI integrations, and always goes above and beyond to architect exceptional user experiences.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    position: "Design Director",
    company: "Creative Agency",
    content:
      "Tauhid has a rare combination of technical fullstack expertise, team leadership, and design sensibility. He can take complex architectures and implement them flawlessly with elegance.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export const profileData: ResumeData = [
  {
    section: "about",
    content: [
      "Results-driven Fullstack Developer & Engineering Team Lead with 4+ years of experience architecting performant, accessible, and scalable web applications using React, Next.js, TypeScript, and Node.js.",
      "Proven expertise in leading cross-functional teams, integrating state-of-the-art AI APIs and LLM tools, and delivering high-impact web products with modern UI/UX design standards.",
      "Currently serving as FullStack Developer & Team Leader (Assistant Manager, Operation) at SM Technology, directing technical workflows, client communication, and delivery assurance.",
      "Deeply committed to clean architecture, developer velocity, robust code quality, and continuous learning.",
    ],
  },
  {
    section: "experience",
    content: [
      {
        company: "SM Technology",
        position: "FullStack Developer & Team Leader (Assistant Manager, Operation)",
        duration: "2025 – Present",
        description:
          "Lead end-to-end team management and cross-functional collaboration across engineering, AI research, and design teams. Manage client communication and requirements gathering. Oversee project deadline management and delivery assurance for complex web applications.",
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Node.js",
          "AI APIs & LLMs",
          "Tailwind CSS",
          "Team Leadership",
        ],
      },
      {
        company: "Softsync",
        position: "FullStack Developer",
        duration: "2024 – 2025",
        description:
          "Engineered enterprise web applications in collaboration with UI/UX designers and backend teams, accelerating feature delivery cycles by 25%. Developed reusable component libraries using React, TypeScript, and Tailwind CSS. Implemented rigorous testing and code quality practices.",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Component Libraries",
          "Testing & QA",
        ],
      },
      {
        company: "Freelance Projects",
        position: "Frontend Developer",
        duration: "2020 – 2024",
        description:
          "Directed full lifecycle web development for diverse international clients, delivering end-to-end web apps from initial architectural design to Vercel production deployments. Built modern fullstack solutions with Next.js, REST APIs, and automated CI/CD pipelines.",
        technologies: [
          "Next.js",
          "Node.js",
          "REST APIs",
          "Tailwind CSS",
          "Motion for React",
          "Vercel CI/CD",
        ],
      },
    ],
  },
  {
    section: "education",
    content: [
      {
        degree: "Professional Training in Web & Software Development",
        description:
          "Completed certifications and comprehensive project-based engineering coursework in web development, JavaScript, React, and full-stack software development.",
        institution: "freeCodeCamp, Udemy, YouTube, and others",
        duration: "2017 – Present",
      },
      {
        degree: "Bachelor of Business Administration (BBA) Studies",
        description:
          "Pursued studies in Bachelor of Business Administration before transitioning into software engineering through dedicated self-learning.",
        institution: "National University, Bangladesh",
        duration: "2014 – 2018",
      },
    ],
  },
];

export const developmentProcess = [
  {
    title: "Discovery & Planning",
    description:
      "Collaborate with stakeholders to define goals, gather requirements, and outline a scalable technical architecture.",
    icon: "FileSearch",
  },
  {
    title: "Design & Prototyping",
    description:
      "Craft intuitive wireframes, refine UI/UX design systems, and prototype user flows for validation and feedback.",
    icon: "Palette",
  },
  {
    title: "Development",
    description:
      "Build robust, maintainable applications using modern frameworks, clean architecture, and industry best practices.",
    icon: "Code",
  },
  {
    title: "Testing & Optimization",
    description:
      "Implement rigorous testing, ensure cross-platform compatibility, and optimize performance for speed and accessibility.",
    icon: "Gauge",
  },
  {
    title: "Deployment & Lifecycle Management",
    description:
      "Deploy secure, production-ready builds, monitor real-world usage, and provide continuous updates and support.",
    icon: "Rocket",
  },
];
