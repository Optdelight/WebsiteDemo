"use client";

import { MessageSquare, Palette, Wrench, Truck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discover",
    description:
      "We listen. Understanding your brand, audience, and the emotion you want to evoke is where every great story begins.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description:
      "Our creative team transforms ideas into tangible concepts. Every element is curated to align with your vision and brand narrative.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Craft",
    description:
      "From premium materials to custom packaging, each detail is meticulously executed to meet the highest standards of excellence.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Deliver",
    description:
      "Flawless logistics, on time, every time. We ensure your gifting experience arrives exactly as intended, ready to delight.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="From Vision to Reality"
          description="A seamless journey from concept to creation. Every step designed for perfection."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative group">
                {/* Connecting line (hidden on last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+30px)] w-[calc(100%-60px)] h-px bg-gradient-to-r from-gold/20 to-gold/5" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="h-20 w-20 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300">
                      <step.icon
                        size={28}
                        className="text-gold"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 text-xs text-gold/50 font-mono">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-cream mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
