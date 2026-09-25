export {
  BsTwitterX as XIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";

export {
  LucideCode as CodeIcon,
  LucideLayers as LayersIcon,
  LucideSparkles as SparklesIcon,
  LucidePalette as PaletteIcon,
  LucideZap as ZapIcon,
  LucideSmartphone as SmartphoneIcon,
  LucideRocket as RocketIcon,
  LucideFileSearch as FileSearchIcon,
  LucideGauge as GaugeIcon,
  LucideSend as SendIcon,
  LucideServer as ServerIcon,
  LucideDatabase as DatabaseIcon,
  LucideBot as BotIcon,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiZod,
  SiRedux,
  SiReactquery,
  SiGreensock,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiJest,
  SiVitest,
  SiBootstrap,
  SiMui,
  SiChakraui,
  SiFigma,
  SiRadixui,
  SiVercel,
} from "react-icons/si";

export const techWithIcons = [
  { name: "React", icon: <SiReact className="text-sky-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-pink-500" />,
  },
  { name: "Zod", icon: <SiZod className="text-purple-600" /> }, // unofficial, use fallback if needed
  {
    name: "React Hook Form",
    icon: <SiReact className="text-rose-500" />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-500" />,
  },
  {
    name: "Tanstack Query",
    icon: <SiReactquery className="text-red-500" />,
  },
  {
    name: "Motion for React",
    icon: <SiFramer className="text-pink-500" />,
  },
  { name: "GSAP", icon: <SiGreensock className="text-green-600" /> },
  {
    name: "React Fiber",
    icon: <SiReact className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" />,
  },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "Hono", icon: <SiVercel className="text-gray-500" /> }, // no official icon yet
  {
    name: "REST API",
    icon: <SiGraphql className="text-indigo-500" />,
  }, // fallback
  { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },

  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-800" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-gray-500 dark:text-white" />,
  },
  {
    name: "Drizzle ORM",
    icon: <SiPrisma className="text-emerald-500" />,
  },

  { name: "Vitest", icon: <SiVitest className="text-lime-600" /> },
  { name: "Jest", icon: <SiJest className="text-red-600" /> },

  {
    name: "ShadCN UI",
    icon: <SiRadixui className="text-gray-500" />,
  },
  { name: "Material UI", icon: <SiMui className="text-blue-500" /> },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-600" />,
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui className="text-teal-500" />,
  },
  { name: "Radix UI", icon: <SiRadixui className="text-gray-500" /> },

  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "Figma", icon: <SiFigma className="text-violet-500" /> },
];
