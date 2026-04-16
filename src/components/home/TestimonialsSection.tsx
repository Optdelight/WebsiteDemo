"use client";

import { Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Opt Delight transformed our annual summit experience. The custom welcome kits weren't just gifts—they were conversation starters that set the tone for the entire event.",
    name: "Event Director",
    company: "Leading Events Agency",
  },
  {
    quote:
      "Our employee onboarding has never felt more special. The attention to detail and the storytelling behind each kit made our new hires feel genuinely valued from day one.",
    name: "HR Director",
    company: "Fortune 500 Company",
  },
  {
    quote:
      "They don't just deliver gifts. They deliver experiences. The curated sales gifts helped us close deals we'd been working on for months. That's the power of thoughtful gifting.",
    name: "Sales Head",
    company: "Global Technology Firm",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,110,0.05)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="Words That Inspire Us"
          description="Hear from the brands and agencies that trusted us with their most important moments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-8 lg:p-10 border border-gold/10 bg-charcoal/50 h-full flex flex-col hover:border-gold/25 transition-all duration-500">
                <Quote
                  size={28}
                  className="text-gold/30 mb-6"
                  strokeWidth={1}
                />
                <p className="text-cream/80 text-sm leading-relaxed flex-1 mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="gold-line w-12 mb-4" />
                  <p className="text-cream text-sm font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-muted text-xs mt-1">
                    {testimonial.company}
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
