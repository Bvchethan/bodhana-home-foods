function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-black sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
