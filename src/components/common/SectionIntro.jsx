export function SectionIntro({ eyebrow, title, description, centered = true, inView = true }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} fade-up ${inView ? 'visible' : ''}`}>
      <div className="glass font-body mb-6 inline-block rounded-full px-4 py-1.5 text-xs tracking-[0.3em] text-white/45 uppercase">
        {eyebrow}
      </div>
      <h2 className="font-display gradient-text-subtle mb-4 text-4xl font-extrabold md:text-5xl">
        {title}
      </h2>
      <p className="font-body mx-auto max-w-xl text-lg leading-relaxed text-white/[0.55]">
        {description}
      </p>
    </div>
  )
}
