import "@/lib/server-storage-polyfill";
import type { Metadata, Viewport } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/animations/lenis";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Improve font loading performance
});

export const metadata: Metadata = {
  title: "Tauhid Ahmed — Full-Stack Developer | React, Next.js, Node.js, NestJS & AI",
  description:
    "Full-Stack Developer building modern, high-performance web applications with React, Next.js, Node.js, NestJS, TypeScript, and AI integrations. Experienced in engineering leadership and scalable architectures.",
  keywords: [
    "Full-Stack Developer",
    "Tauhid Ahmed",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Hono",
    "tRPC",
    "PostgreSQL",
    "Drizzle ORM",
    "AI Integration",
    "Full-Stack Engineer",
  ],
  authors: [{ name: "Tauhid Ahmed" }],
  creator: "Tauhid Ahmed",
  openGraph: {
    title: "Tauhid Ahmed — Full-Stack Developer | React, Next.js, Node.js, NestJS & AI",
    description:
      "Full-Stack Developer building modern, high-performance web applications with React, Next.js, Node.js, NestJS, TypeScript, and AI integrations.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Analytics />
      <body
        className={`${fontSans.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
