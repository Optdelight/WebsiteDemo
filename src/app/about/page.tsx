import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import VisionSection from "@/components/about/VisionSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Opt Delight — a premium custom gifting company that bridges the gap between ordinary gifts and extraordinary experiences.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <VisionSection />
      <CTASection />
    </>
  );
}
