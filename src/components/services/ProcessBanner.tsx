"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function ProcessBanner() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.05)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="text-xs uppercase tracking-[0.3em] text-gold mb-6 block">
            How We Work
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-8">
            Every Project Follows a Proven Path
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "01", label: "Discover" },
              { number: "02", label: "Design" },
              { number: "03", label: "Craft" },
              { number: "04", label: "Deliver" },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <span className="text-2xl font-serif text-gradient-gold block mb-2">
                  {step.number}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
