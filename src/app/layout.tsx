import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

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
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
