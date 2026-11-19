import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Terminal design system faces. Mono is static, so load only the two weights the type
// styles use (400 data, 600 display); Sans is variable and covers 400 and 500 in one file.
// preload stays off until a rebuilt section renders them, so the live site doesn't
// download fonts it doesn't use yet.
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  preload: false,
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  preload: false,
});

// Legacy faces, still used by sections not yet rebuilt.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Chinye | Senior Frontend Engineer | React & Next.js Specialist",
  description: "Portfolio of Michael Chinye, a Senior Frontend Engineer with 4+ years of experience building high-performance web applications in React, TypeScript, and Next.js for fintech, e-commerce, and SaaS.",
  keywords: ["Michael Chinye", "Senior Frontend Engineer", "React Developer", "Next.js Developer", "TypeScript", "Portfolio", "Web Development", "Lagos", "Nigeria", "GSAP Animations"],
  authors: [{ name: "Michael Chinye" }],
  creator: "Michael Chinye",
  metadataBase: new URL("https://www.mikecodes.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Michael Chinye | Senior Frontend Engineer",
    description: "Crafting digital experiences that engage users and drive real business results.",
    url: "https://www.mikecodes.online",
    siteName: "Michael Chinye Portfolio",
    images: [
      {
        url: "/images/about-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Michael Chinye - Senior Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Chinye | Senior Frontend Engineer",
    description: "Senior Frontend Engineer specializing in React, TypeScript, and Next.js.",
    creator: "@chinyemichael",
    images: ["/images/about-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
