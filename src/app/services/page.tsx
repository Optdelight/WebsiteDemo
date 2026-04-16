import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ProcessBanner from "@/components/services/ProcessBanner";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our custom gifting services — employee onboarding kits, event welcome kits, premium giveaways, and curated corporate gifts.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessBanner />
      <CTASection />
    </>
  );
}
