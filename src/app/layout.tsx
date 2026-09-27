import "@/lib/server-storage-polyfill";
import type { Metadata, Viewport } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/animations/lenis";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* -------------------- constants -------------------- */
const SITE_URL = "https://tauhidahmed.vercel.app"; // 👈 update to your real domain
const SITE_NAME = "Tauhid Ahmed";
const GA_ID = "G-9Q3P6PP0LB";
const isProd = process.env.NODE_ENV === "production";

const TITLE =
  "Tauhid Ahmed — Full-Stack Developer | React, Next.js, Node.js, NestJS & AI";
const DESCRIPTION =
  "Full-Stack Developer building modern, high-performance web applications with React, Next.js, Node.js, NestJS, TypeScript, and AI integrations. Experienced in engineering leadership and scalable architectures.";

/* -------------------- metadata -------------------- */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

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

  category: "technology",

  /* Open Graph */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Full-Stack Developer`,
      },
    ],
  },

  /* Twitter / X */
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@yourhandle", // 👈 update
  },

  /* Icons */
  icons: {
    icon: [
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      { url: "/favicon.ico", sizes: "any" }, // fallback
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  /* SEO */
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* Verification (optional) */
  verification: {
    google: "your-google-site-verification-token", // 👈 optional
  },

  /* Prevent iOS from auto-linking phone numbers / addresses */
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

/* -------------------- viewport -------------------- */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // keep zoom enabled for a11y (WCAG 1.4.4)
  userScalable: true,
  viewportFit: "cover", // notch / safe-area support
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
};

/* -------------------- layout -------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for faster GA load */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Google Analytics — production only */}
        {isProd && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${fontSans.variable} min-h-dvh font-sans antialiased`}>
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
