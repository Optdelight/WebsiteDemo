"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const serviceOptions = [
  "Employee Onboarding Kits",
  "Event Welcome Kits",
  "Event Giveaways",
  "Curated Corporate Gifts",
  "Bespoke Gifting Solutions",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <AnimatedSection className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-cream mb-8">
              Reach Out Directly
            </h3>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full border border-gold/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@optdelight.com"
                    className="text-cream hover:text-gold transition-colors"
                  >
                    hello@optdelight.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full border border-gold/20 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+910000000000"
                    className="text-cream hover:text-gold transition-colors"
                  >
                    +91 00000 00000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full border border-gold/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold mb-1">
                    Location
                  </p>
                  <p className="text-cream">India</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gold/10 bg-background">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
                Response Time
              </p>
              <p className="text-muted text-sm leading-relaxed">
                We typically respond within 24 hours. For urgent inquiries,
                please call us directly.
              </p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center p-12 border border-gold/10 bg-background text-center">
                <div>
                  <div className="h-16 w-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <Send size={24} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl text-cream mb-3">
                    Message Sent
                  </h3>
                  <p className="text-muted">
                    Thank you for reaching out. We&apos;ll be in touch shortly
                    to discuss your vision.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="p-8 lg:p-10 border border-gold/10 bg-background space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border border-gold/15 px-4 py-3 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder:text-muted/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border border-gold/15 px-4 py-3 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder:text-muted/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border border-gold/15 px-4 py-3 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder:text-muted/50"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border border-gold/15 px-4 py-3 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors placeholder:text-muted/50"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                    Service Interested In
                  </label>
                  <select
                    className="w-full bg-transparent border border-gold/15 px-4 py-3 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-charcoal">
                      Select a service
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-charcoal">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                    Estimated Quantity
                  </label>
                  <select
                    className="w-full bg-transparent border border-gold/15 px-4 py-3 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-charcoal">
                      Select quantity range
                    </option>
                    <option value="1-50" className="bg-charcoal">
                      1 &ndash; 50 units
                    </option>
                    <option value="50-200" className="bg-charcoal">
                      50 &ndash; 200 units
                    </option>
                    <option value="200-500" className="bg-charcoal">
                      200 &ndash; 500 units
                    </option>
                    <option value="500-1000" className="bg-charcoal">
                      500 &ndash; 1,000 units
                    </option>
                    <option value="1000+" className="bg-charcoal">
                      1,000+ units
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                    Tell Us About Your Vision *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-transparent border border-gold/15 px-4 py-3 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors resize-none placeholder:text-muted/50"
                    placeholder="Describe the event, audience, timeline, and any specific ideas you have in mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gold text-background text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Send Inquiry
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
