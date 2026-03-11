type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: "default" | "inverse";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  theme = "default",
}: SectionHeaderProps) {
  const eyebrowClass =
    theme === "inverse"
      ? "text-sm font-semibold uppercase tracking-[0.28em] text-white/70"
      : "text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]";

  const titleClass =
    theme === "inverse"
      ? "mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      : "mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl";

  const descriptionClass =
    theme === "inverse"
      ? "mt-4 text-base leading-8 text-white/80 sm:text-lg"
      : "mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className={eyebrowClass}>{eyebrow}</p> : null}
      <h2 className={titleClass}>{title}</h2>
      {description ? <p className={descriptionClass}>{description}</p> : null}
    </div>
  );
}
