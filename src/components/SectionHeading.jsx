function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--color-green)] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-8 text-[rgba(74,44,23,0.74)] sm:text-base">{description}</p>
    </div>
  )
}

export default SectionHeading
