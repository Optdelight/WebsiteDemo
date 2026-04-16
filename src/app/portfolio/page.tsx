import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our curated portfolio of bespoke gifting projects for leading brands, events, and corporates.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </>
  );
}
