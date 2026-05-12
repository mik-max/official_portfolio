import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Chinye | Frontend Engineer | React & Next.js Specialist",
  description: "Portfolio of Michael Chinye, a Frontend Engineer with 4+ years of experience building high-performance web applications in React, TypeScript, and Next.js for fintech, e-commerce, and SaaS.",
  keywords: ["Michael Chinye", "Frontend Engineer", "React Developer", "Next.js Developer", "TypeScript", "Portfolio", "Web Development", "Lagos", "Nigeria", "GSAP Animations"],
  authors: [{ name: "Michael Chinye" }],
  creator: "Michael Chinye",
  metadataBase: new URL("https://www.mikecodes.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Michael Chinye | Frontend Engineer",
    description: "Crafting digital experiences that engage users and drive real business results.",
    url: "https://www.mikecodes.online",
    siteName: "Michael Chinye Portfolio",
    images: [
      {
        url: "/images/about-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Michael Chinye - Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Chinye | Frontend Engineer",
    description: "Frontend Engineer specializing in React, TypeScript, and Next.js.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
