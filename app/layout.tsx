import type { Metadata } from "next";
import { Fraunces, Atkinson_Hyperlegible } from "next/font/google";
import AnchorScrollHandler from "@/components/AnchorScrollHandler";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = "https://kaitkearneyphd.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s — Kait Kearney, PhD · Child & Family Psychologist, NYC",
    default: "Kait Kearney, PhD · Child & Family Psychologist, NYC",
  },
  description:
    "Individual therapy, parent and family therapy, and neuropsychological evaluations for children and families in New York City — with a plan your whole family can follow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${atkinsonHyperlegible.variable}`}
    >
      <body>
        {children}
        <AnchorScrollHandler />
      </body>
    </html>
  );
}
