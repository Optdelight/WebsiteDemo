import Link from "next/link";
import {
  Globe,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#onboarding", label: "Onboarding Kits" },
    { href: "/services#welcome", label: "Welcome Kits" },
    { href: "/services#giveaways", label: "Event Giveaways" },
    { href: "/services#corporate", label: "Corporate Gifts" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center">
                <span className="text-gradient-gold font-serif text-xl font-bold">
                  O
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif tracking-wider text-cream">
                  Opt Delight
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                  Beyond Gifting
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Crafting bespoke gifting experiences that transcend expectations.
              From creative storytelling to flawless execution.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-9 w-9 rounded-full border border-gold/20 flex items-center justify-center text-muted hover:text-gold hover:border-gold/50 transition-all duration-300"
                aria-label="Website"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full border border-gold/20 flex items-center justify-center text-muted hover:text-gold hover:border-gold/50 transition-all duration-300"
                aria-label="Social"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="mailto:hello@optdelight.com"
                className="h-9 w-9 rounded-full border border-gold/20 flex items-center justify-center text-muted hover:text-gold hover:border-gold/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:hello@optdelight.com"
                  className="text-sm text-muted hover:text-cream transition-colors"
                >
                  hello@optdelight.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <a
                  href="tel:+910000000000"
                  className="text-sm text-muted hover:text-cream transition-colors"
                >
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted">
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-line mt-12 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Opt Delight. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Crafted with precision. Delivered with delight.
          </p>
        </div>
      </div>
    </footer>
  );
}
