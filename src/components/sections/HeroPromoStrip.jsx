import { landingContent } from '../../content/landingContent'

export function HeroPromoStrip() {
  const { heroPromo } = landingContent

  return (
    <section className="relative z-20 -mt-10 pb-4 md:-mt-12 md:pb-6">
      <div className="w-full border-y border-[#ff8d57]/45 bg-[#ff5700] shadow-[0_16px_36px_rgba(7,10,18,0.18)]">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center">
          <p className="text-[0.68rem] font-bold tracking-[0.28em] text-white/82 uppercase sm:text-[0.72rem]">
            {heroPromo.eyebrow}
          </p>
          <p className="font-display mt-2 text-[1.65rem] leading-none font-extrabold text-white sm:text-[2rem] md:text-[2.25rem]">
            {heroPromo.title}
          </p>
        </div>
      </div>
    </section>
  )
}
