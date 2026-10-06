import type { Metadata } from "next";
import { Shantell_Sans, Atkinson_Hyperlegible } from "next/font/google";
import AnchorScrollHandler from "@/components/AnchorScrollHandler";
import "./globals.css";

const shantellSans = Shantell_Sans({
  variable: "--font-shantell-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    template: "%s — Kait Kearney, PhD · Child & Family Psychology, NYC",
    default: "Kait Kearney, PhD · Child & Family Psychology, NYC",
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
      className={`${shantellSans.variable} ${atkinsonHyperlegible.variable}`}
    >
      <body>
        {children}
        <AnchorScrollHandler />
      </body>
    </html>
  );
}
