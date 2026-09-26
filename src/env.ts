import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},

  client: {
    NEXT_PUBLIC_AUTHOR_NAME: z.string().default("Tauhid Ahmed"),
    NEXT_PUBLIC_AUTHOR_FIRST_NAME: z.string().default("Tauhid"),
    NEXT_PUBLIC_AUTHOR_LAST_NAME: z.string().default("Ahmed"),
    NEXT_PUBLIC_AUTHOR_TITLE: z.string().default("Full-Stack Developer"),
    NEXT_PUBLIC_AUTHOR_PHONE: z.string().default("+8801670012716"),
    NEXT_PUBLIC_AUTHOR_EMAIL: z.string().default("tauhidxtauhid@gmail.com"),
    NEXT_PUBLIC_AUTHOR_LINKEDIN: z
      .string()
      .default("https://linkedin.com/in/tauhidxahmed"),
    NEXT_PUBLIC_AUTHOR_GITHUB: z
      .string()
      .default("https://github.com/tauhid-ahmed"),
    NEXT_PUBLIC_AUTHOR_X: z.string().default("https://x.com/tauhid_ahmed"),
    NEXT_PUBLIC_AUTHOR_LOCATION: z.string().default("Pabna, Bangladesh"),
    NEXT_PUBLIC_AUTHOR_BIO: z
      .string()
      .default(
        "Architecting performant, accessible, and scalable web applications using React, Next.js, TypeScript, and Node.js. Experienced in leading engineering teams, integrating AI tools/LLM APIs, and delivering high-impact products.",
      ),
    NEXT_PUBLIC_AUTHOR_LIVE_RESUME: z.string().default("/assets/my-resume.pdf"),
  },

  runtimeEnv: {
    NEXT_PUBLIC_AUTHOR_NAME: process.env.NEXT_PUBLIC_AUTHOR_NAME,
    NEXT_PUBLIC_AUTHOR_FIRST_NAME: process.env.NEXT_PUBLIC_AUTHOR_FIRST_NAME,
    NEXT_PUBLIC_AUTHOR_LAST_NAME: process.env.NEXT_PUBLIC_AUTHOR_LAST_NAME,
    NEXT_PUBLIC_AUTHOR_TITLE: process.env.NEXT_PUBLIC_AUTHOR_TITLE,
    NEXT_PUBLIC_AUTHOR_PHONE: process.env.NEXT_PUBLIC_AUTHOR_PHONE,
    NEXT_PUBLIC_AUTHOR_EMAIL: process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
    NEXT_PUBLIC_AUTHOR_LINKEDIN: process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN,
    NEXT_PUBLIC_AUTHOR_GITHUB: process.env.NEXT_PUBLIC_AUTHOR_GITHUB,
    NEXT_PUBLIC_AUTHOR_X: process.env.NEXT_PUBLIC_AUTHOR_X,
    NEXT_PUBLIC_AUTHOR_LOCATION: process.env.NEXT_PUBLIC_AUTHOR_LOCATION,
    NEXT_PUBLIC_AUTHOR_BIO: process.env.NEXT_PUBLIC_AUTHOR_BIO,
    NEXT_PUBLIC_AUTHOR_LIVE_RESUME: process.env.NEXT_PUBLIC_AUTHOR_LIVE_RESUME,
  },
});
