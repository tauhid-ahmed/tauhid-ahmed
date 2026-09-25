import type { Metadata, Viewport } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/env";
import { LenisProvider } from "@/components/animations/lenis";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Improve font loading performance
});

export const metadata: Metadata = {
  title: `${env.NEXT_PUBLIC_AUTHOR_NAME} | FullStack Developer & Team Leader`,
  description:
    "Professional portfolio of Tauhid Ahmed showcasing fullstack web development, engineering leadership, and high-impact applications with Next.js, React, Node.js, and TypeScript.",
  keywords: [
    "fullstack developer",
    "team lead",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "portfolio",
    "web developer",
    "ai integration",
  ],
  authors: [{ name: env.NEXT_PUBLIC_AUTHOR_NAME }],
  creator: env.NEXT_PUBLIC_AUTHOR_NAME,
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
