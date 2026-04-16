"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="text-xs uppercase tracking-[0.3em] text-gold mb-6 block">
            Ready to Begin?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-6 leading-tight">
            Let&apos;s Create Something{" "}
            <span className="text-gradient-gold">Extraordinary</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Whether it&apos;s a single curated gift or a thousand bespoke kits,
            we bring the same obsession with detail to every project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gold text-background text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-300 flex items-center gap-3"
            >
              Get in Touch
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-gold/30 text-gold text-sm uppercase tracking-[0.15em] hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
