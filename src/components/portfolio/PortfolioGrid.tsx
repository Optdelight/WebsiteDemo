"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const categories = [
  "All",
  "Onboarding Kits",
  "Welcome Kits",
  "Event Giveaways",
  "Corporate Gifts",
];

const projects = [
  {
    title: "Tech Summit 2026 Welcome Collection",
    category: "Welcome Kits",
    description:
      "A premium welcome experience for 500+ attendees at a leading technology summit. Custom leather-bound notebooks, artisanal tea blends, and branded tech accessories.",
    color: "from-gold/20 to-rose-gold/10",
  },
  {
    title: "FinCorp Employee Onboarding Kit",
    category: "Onboarding Kits",
    description:
      "A sophisticated onboarding kit for a Fortune 500 financial services firm. Personalised items reflecting company values and culture.",
    color: "from-gold/15 to-gold-dark/10",
  },
  {
    title: "Creative Agency Annual Gala Giveaway",
    category: "Event Giveaways",
    description:
      "Exclusive gala night giveaways for a top creative agency. Limited-edition artworks and custom perfume blends that attendees still talk about.",
    color: "from-rose-gold/20 to-gold/10",
  },
  {
    title: "Luxury Brand Client Appreciation",
    category: "Corporate Gifts",
    description:
      "Bespoke appreciation gifts for high-value clients of a luxury fashion house. Hand-crafted presentation boxes with curated premium items.",
    color: "from-gold-dark/20 to-gold/10",
  },
  {
    title: "Startup Series A Celebration Kit",
    category: "Corporate Gifts",
    description:
      "A custom celebration kit for a startup's milestone fundraise. Each kit told the company's journey from inception to achievement.",
    color: "from-gold/15 to-rose-gold/15",
  },
  {
    title: "Healthcare Summit Delegate Kits",
    category: "Welcome Kits",
    description:
      "Wellness-focused welcome kits for a global healthcare conference. Thoughtful inclusions promoting mindfulness and self-care.",
    color: "from-rose-gold/15 to-gold-dark/10",
  },
  {
    title: "Media House New Hire Experience",
    category: "Onboarding Kits",
    description:
      "A creative onboarding experience for a leading media company. Storytelling-driven unboxing that immersed new hires in the brand narrative.",
    color: "from-gold/20 to-gold-dark/15",
  },
  {
    title: "Music Festival VIP Exit Packages",
    category: "Event Giveaways",
    description:
      "Exclusive VIP takeaway packages for a premium music festival. Custom memorabilia and curated lifestyle items that captured the festival spirit.",
    color: "from-rose-gold/20 to-gold/15",
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter buttons */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.15em] border transition-all duration-300 ${
                activeFilter === cat
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-gold/15 text-muted hover:border-gold/30 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group border border-gold/10 bg-background hover:border-gold/25 transition-all duration-500 overflow-hidden"
              >
                {/* Visual placeholder */}
                <div
                  className={`aspect-[16/9] bg-gradient-to-br ${project.color} flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.1)_0%,transparent_70%)]" />
                  <span className="relative font-serif text-2xl text-cream/20 group-hover:text-cream/30 transition-colors duration-500">
                    Opt Delight
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
