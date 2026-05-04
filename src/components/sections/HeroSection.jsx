import { landingContent } from '../../content/landingContent'
import { siteConfig } from '../../config/siteConfig'
import { trackEvent, withTrackingContext } from '../../lib/analytics'
import { ArrowRightIcon } from '../icons/LandingIcons'

export function HeroSection({ trackingContext = {} }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-hidden bg-[#0f2044] px-6 pb-16 pt-28 text-white sm:min-h-screen sm:justify-center sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-[#4269af] sm:h-[42%] lg:h-[48%]"
        style={{ clipPath: 'polygon(0 34%, 100% 0, 100% 100%, 0 100%)' }}
      />

      <div className="relative z-10 mx-auto max-w-5xl pt-2 text-center sm:pt-0">
        <div className="glass-orange mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.66rem] font-medium tracking-[0.28em] text-orange-300 uppercase sm:mb-8 sm:text-xs sm:tracking-[0.3em]">
          <span className="pulse-ring h-1.5 w-1.5 rounded-full bg-orange-400" />
          {landingContent.hero.eyebrow}
        </div>

        <h1 className="font-display mb-5 text-[clamp(2rem,8.5vw,3.4rem)] leading-[0.96] font-extrabold tracking-[-0.05em] text-white sm:mb-6 sm:text-6xl sm:leading-[1.05] sm:tracking-normal md:text-7xl">
          {landingContent.hero.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mx-auto max-w-[21rem] text-base leading-relaxed text-white/[0.55] sm:max-w-2xl sm:text-lg md:text-xl">
          {landingContent.hero.description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:flex-row">
          <a
            href={siteConfig.urls.demo}
            target="_blank"
            rel="noreferrer"
            className="campaign-btn-primary inline-flex items-center justify-center gap-2 rounded-[999px] px-8 py-4 text-lg font-extrabold text-white no-underline"
            onClick={() =>
              trackEvent(
                'hero_primary_cta_click',
                withTrackingContext(trackingContext, { location: 'hero' }),
              )
            }
          >
            {landingContent.hero.primaryCta}
            <ArrowRightIcon />
          </a>
          <a
            href="#solution"
            className="campaign-btn-secondary inline-flex items-center justify-center gap-2 rounded-[999px] px-8 py-4 text-lg font-extrabold text-white no-underline"
            onClick={() =>
              trackEvent(
                'hero_secondary_cta_click',
                withTrackingContext(trackingContext, { location: 'hero' }),
              )
            }
          >
            {landingContent.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  )
}
