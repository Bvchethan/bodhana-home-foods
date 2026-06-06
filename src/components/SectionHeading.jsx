function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)] sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[2rem] leading-tight text-[var(--color-green)] sm:text-[2.45rem]">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[rgba(95,75,58,0.74)] sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
