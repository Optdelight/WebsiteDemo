"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Sparkles size={14} className="text-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            Custom Gifting Solutions
          </span>
          <Sparkles size={14} className="text-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-8"
        >
          Beyond Experience
          <br />
          <span className="text-gradient-gold">Into Delight</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We craft bespoke gifting experiences for events, onboarding, and
          corporate moments. From creative storytelling to flawless
          execution&mdash;every detail designed to transcend expectations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/contact"
            className="group px-8 py-4 bg-gold text-background text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-300 flex items-center gap-3"
          >
            Start Your Journey
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-gold/30 text-gold text-sm uppercase tracking-[0.15em] hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
