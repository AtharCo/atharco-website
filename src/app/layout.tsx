import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AtharCo — Where Ambition Becomes Legacy",
  description:
    "AtharCo builds AI-native technology platforms that transform how local businesses operate across MENA. Starting with Noqta — the smartest POS platform for restaurants.",
  keywords: [
    "AtharCo",
    "Noqta",
    "POS",
    "restaurant technology",
    "MENA",
    "AI",
    "point of sale",
    "loyalty",
    "Palestine",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "AtharCo — Where Ambition Becomes Legacy",
    description:
      "Scalable tech built for impact. AI-powered infrastructure for local economies across MENA.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlex.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-ibm-plex)]">
        {children}
      </body>
    </html>
  );
}
