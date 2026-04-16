"use client";

import { Shield, Heart, Zap, Eye } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const reasons = [
  {
    icon: Eye,
    title: "Beyond Customer Experience",
    description:
      "We don't settle for satisfaction. Every touchpoint is engineered to create genuine delight that resonates on a deeply personal level.",
  },
  {
    icon: Heart,
    title: "Creative Storytelling",
    description:
      "Every gift carries a narrative. We weave your brand story into every element, turning objects into meaningful experiences.",
  },
  {
    icon: Shield,
    title: "Flawless Execution",
    description:
      "From concept to doorstep, our process is obsessively detailed. Zero compromises on quality, timing, or presentation.",
  },
  {
    icon: Zap,
    title: "Next-Gen Innovation",
    description:
      "We stay ahead of trends, sourcing unique materials and designing forward-thinking concepts that set new standards in gifting.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeading
              label="Why Opt Delight"
              title="Bridging the Gap Between Ordinary and Extraordinary"
              align="left"
            />
            <AnimatedSection delay={0.2}>
              <p className="text-muted leading-relaxed mb-8">
                In a world where event agencies and corporates seek newer,
                next-generation gifting solutions, we stand as the bridge between
                what exists and what&apos;s possible. Our focus isn&apos;t just
                on happiness&mdash;it&apos;s on creating moments that transcend
                expectations and linger in memory.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <span className="text-3xl font-serif text-gradient-gold">
                    100%
                  </span>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wider">
                    Customised
                  </p>
                </div>
                <div className="w-px h-12 bg-gold/20" />
                <div>
                  <span className="text-3xl font-serif text-gradient-gold">
                    Premium
                  </span>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wider">
                    Quality
                  </p>
                </div>
                <div className="w-px h-12 bg-gold/20" />
                <div>
                  <span className="text-3xl font-serif text-gradient-gold">
                    Zero
                  </span>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wider">
                    Compromise
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <AnimatedSection key={reason.title} delay={i * 0.1}>
                <div className="p-6 border border-gold/10 bg-background/50 hover:border-gold/25 transition-all duration-500 group">
                  <reason.icon
                    size={24}
                    className="text-gold mb-4"
                    strokeWidth={1.5}
                  />
                  <h4 className="font-serif text-lg text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {reason.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
