"use client";

import { Sparkles, Target, Layers, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    icon: Sparkles,
    title: "Delight Over Satisfaction",
    description:
      "We don't aim to satisfy — we aim to enchant. Every decision we make is measured against one question: will this create genuine delight?",
  },
  {
    icon: Target,
    title: "Obsessive Attention to Detail",
    description:
      "From the texture of the ribbon to the scent of the packaging — nothing is accidental. Every detail is a deliberate choice.",
  },
  {
    icon: Layers,
    title: "Story-Driven Design",
    description:
      "A gift without a story is just an object. We weave narrative into every element, creating connections that resonate on a personal level.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We don't work for our clients — we work with them. Your vision, combined with our expertise, creates something neither could alone.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Our Values"
          title="What Drives Us"
          description="These principles guide every project we undertake, every gift we create, and every relationship we build."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.1}>
              <div className="flex gap-6 p-8 border border-gold/10 hover:border-gold/25 transition-all duration-500 group">
                <div className="shrink-0">
                  <div className="h-14 w-14 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300">
                    <value.icon
                      size={24}
                      className="text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
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
