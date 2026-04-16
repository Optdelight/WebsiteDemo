"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual placeholder */}
          <AnimatedSection>
            <div className="aspect-[4/3] bg-background border border-gold/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
              <div className="relative text-center p-8">
                <span className="shimmer font-serif text-6xl md:text-7xl">
                  OD
                </span>
                <p className="text-muted text-xs mt-4 uppercase tracking-[0.2em]">
                  Established 2026
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Story */}
          <AnimatedSection delay={0.2}>
            <span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block">
              Our Genesis
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Born from a Simple Belief
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                In the fast-paced world of events and corporate culture, we
                noticed a glaring gap. Gifting had become transactional&mdash;an
                afterthought rather than a touchpoint. Generic items handed out
                in bulk, forgotten before the event was over.
              </p>
              <p>
                We believed gifting could be so much more. It could be the
                opening chapter of a story, the final note that makes an event
                unforgettable, or the first hello that makes a new employee feel
                they truly belong.
              </p>
              <p>
                Opt Delight was founded to turn this belief into reality. We are
                a team of creative thinkers, meticulous planners, and passionate
                storytellers who see every gift as an opportunity to create
                genuine delight&mdash;the kind that goes beyond happiness and
                stays with people.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
