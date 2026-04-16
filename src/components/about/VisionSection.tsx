"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function VisionSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.04)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block">
              Our Mission
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-6">
              To transform every gifting moment into a meaningful experience
            </h3>
            <p className="text-muted leading-relaxed">
              We partner with event agencies and forward-thinking corporates to
              create custom gifting solutions that go beyond the expected. Our
              mission is to make every unboxing a story worth telling, every
              gift a reflection of thoughtfulness, and every experience a
              moment of genuine delight.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block">
              Our Vision
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-6">
              To redefine the standard of corporate gifting worldwide
            </h3>
            <p className="text-muted leading-relaxed">
              We envision a future where no corporate gift is generic, no
              event giveaway is forgettable, and no onboarding experience is
              ordinary. We are building the most elegant and sophisticated
              gifting company&mdash;one that sets the benchmark for what
              custom gifting can be.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
