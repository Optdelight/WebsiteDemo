import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Opt Delight | Beyond Gifting, Into Delight",
    template: "%s | Opt Delight",
  },
  description:
    "Premium custom gifting solutions for events, onboarding, and corporate experiences. We craft bespoke gifts that transcend happiness and deliver pure delight.",
  keywords: [
    "custom gifting",
    "corporate gifts",
    "event giveaways",
    "onboarding kits",
    "luxury gifts",
    "curated gifts",
    "event marketing",
    "welcome kits",
  ],
  openGraph: {
    title: "Opt Delight | Beyond Gifting, Into Delight",
    description:
      "Premium custom gifting solutions for events, onboarding, and corporate experiences.",
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
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
