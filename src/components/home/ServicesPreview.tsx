"use client";

import Link from "next/link";
import { ArrowUpRight, Gift, Package, Award, Gem } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Package,
    title: "Employee Onboarding Kits",
    description:
      "First impressions that last forever. Thoughtfully curated kits that make every new team member feel valued from day one.",
    href: "/services#onboarding",
  },
  {
    icon: Gift,
    title: "Event Welcome Kits",
    description:
      "Set the tone for unforgettable experiences. Bespoke welcome packages that immerse guests into your brand story.",
    href: "/services#welcome",
  },
  {
    icon: Award,
    title: "Event Giveaways",
    description:
      "Leave them with more than a memory. Premium giveaways that extend your event's impact long after the last goodbye.",
    href: "/services#giveaways",
  },
  {
    icon: Gem,
    title: "Curated Corporate Gifts",
    description:
      "Elevate every relationship. Custom gifting solutions that speak your brand language and strengthen connections.",
    href: "/services#corporate",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Crafting Moments of Delight"
          description="Every gift tells a story. We ensure yours is extraordinary."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Link
                href={service.href}
                className="group block p-8 lg:p-10 border border-gold/10 bg-background hover:border-gold/30 transition-all duration-500 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300">
                    <service.icon
                      size={20}
                      className="text-gold"
                      strokeWidth={1.5}
                    />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
