import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/ui";
import { profile, siteUrl, siteVerification, yearsSince } from "@/data/profile";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

const title = `${profile.name} — ${profile.role} | Next.js, React & AI`;
const description = `Pratik Thakkar is a Web Application Engineer from Anand, Gujarat with ${yearsSince(profile.careerStart)}+ years building fast, responsive web apps using Next.js, React, Redux and TypeScript — including AI-powered features with Claude & OpenAI APIs. Available for frontend and web application roles.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  keywords: [
    "Pratik Thakkar",
    "Web Application Engineer",
    "Frontend Engineer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Redux",
    "TypeScript",
    "Tailwind CSS",
    "AI web development",
    "LLM integration",
    "Hire frontend developer India",
    "Anand",
    "Gujarat",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  referrer: "origin-when-cross-origin",
  verification: {
    google: siteVerification.google,
    other: siteVerification.bing ? { "msvalidate.01": siteVerification.bing } : undefined,
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: `${profile.name} — Portfolio`,
    title,
    description,
    locale: "en_IN",
    firstName: "Pratik",
    lastName: "Thakkar",
    username: "pratik00git",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b12" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7fb" },
  ],
};

// Apply the saved theme before first paint to avoid a flash of the wrong theme.
// With no saved choice, CSS follows the OS setting.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
