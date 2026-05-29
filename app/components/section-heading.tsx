type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  inverse?: boolean;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
  align = "left",
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`reveal-up reveal-delay-1 max-w-3xl ${textAlign}`}>
      <p
        className={`font-display text-xs uppercase tracking-[0.32em] ${
          inverse ? "text-[#7f93ff]" : "text-[#2143ff]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          inverse ? "text-white" : "text-[#050507]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-6 text-base leading-relaxed sm:text-lg ${
          inverse ? "text-[#d2d7ea]" : "text-[#5a6173]"
        }`}
      >
        {description}
      </p>
    </header>
  );
}
