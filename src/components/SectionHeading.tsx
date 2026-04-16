import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block">
        {label}
      </span>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
        {title}
      </h2>
      {description && (
        <p
          className={`text-muted text-lg leading-relaxed ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`gold-line w-24 mt-8 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </AnimatedSection>
  );
}
