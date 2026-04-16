"use client";

import {
  Package,
  Gift,
  Award,
  Gem,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    id: "onboarding",
    icon: Package,
    title: "Employee Onboarding Kits",
    tagline: "Where Belonging Begins",
    description:
      "The first day at a new company shapes everything that follows. Our onboarding kits are carefully designed to make new team members feel genuinely welcome, valued, and excited about what lies ahead.",
    features: [
      "Custom-branded premium packaging",
      "Personalised welcome cards with handwritten notes",
      "Curated lifestyle items aligned to company culture",
      "Tech accessories and desk essentials",
      "Story-driven unboxing experience",
    ],
  },
  {
    id: "welcome",
    icon: Gift,
    title: "Event Welcome Kits",
    tagline: "Setting the Tone",
    description:
      "Before the keynote, before the networking, before anything — your welcome kit sets the stage. We design immersive welcome packages that prime guests for an extraordinary experience from the moment they arrive.",
    features: [
      "Event-themed custom packaging",
      "Branded merchandise with premium finishes",
      "Artisanal food and beverage inclusions",
      "Interactive elements and keepsakes",
      "Sustainable and eco-conscious options",
    ],
  },
  {
    id: "giveaways",
    icon: Award,
    title: "Event Giveaways",
    tagline: "The Last Impression",
    description:
      "The end of an event is really the beginning of a memory. Our giveaways are designed to be kept, used, and cherished — extending your brand's presence into the daily lives of attendees long after the event concludes.",
    features: [
      "Next-generation concepts beyond swag",
      "Premium quality materials and finishes",
      "Functional items attendees actually want",
      "Custom packaging and presentation",
      "Scalable production for events of any size",
    ],
  },
  {
    id: "corporate",
    icon: Gem,
    title: "Curated Corporate Gifts",
    tagline: "Relationships, Elevated",
    description:
      "In business, relationships are everything. Our curated corporate gifts are designed to strengthen connections, celebrate milestones, and communicate what words often can't — genuine appreciation and respect.",
    features: [
      "Client appreciation and retention gifts",
      "Sales gifts that open doors",
      "Festival and milestone celebration kits",
      "VIP and C-suite executive gifts",
      "Bulk orders with individual personalisation",
    ],
  },
  {
    id: "bespoke",
    icon: Star,
    title: "Bespoke Gifting Solutions",
    tagline: "Truly One of a Kind",
    description:
      "Some moments call for something that has never existed before. Our bespoke service starts with a blank canvas and your imagination, crafting entirely original gifting experiences from concept to delivery.",
    features: [
      "Fully custom concept development",
      "Exclusive sourcing and artisan partnerships",
      "Creative storytelling and narrative design",
      "End-to-end project management",
      "White-glove delivery and setup",
    ],
  },
];

export default function ServicesList() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-20">
          {services.map((service, i) => (
            <AnimatedSection key={service.id}>
              <div
                id={service.id}
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
              >
                {/* Info side */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full border border-gold/20 flex items-center justify-center">
                      <service.icon
                        size={20}
                        className="text-gold"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-cream">
                        {service.title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-gold">
                        {service.tagline}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-gold text-sm uppercase tracking-[0.15em] hover:text-gold-light transition-colors"
                  >
                    Inquire About This Service
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                {/* Features side */}
                <div
                  className={`p-8 lg:p-10 border border-gold/10 bg-background ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-6">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-cream/80 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Separator */}
              {i < services.length - 1 && (
                <div className="gold-line mt-20" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
