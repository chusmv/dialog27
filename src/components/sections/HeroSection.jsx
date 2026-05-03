import { landingContent } from '../../content/landingContent'
import { siteConfig } from '../../config/siteConfig'
import { trackEvent, withTrackingContext } from '../../lib/analytics'
import { ArrowRightIcon } from '../icons/LandingIcons'

export function HeroSection({ trackingContext = {} }) {
  return (
    <section className="mesh-bg grid-lines relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-24">
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-blue-500/[0.08] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="glass-orange mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-[0.3em] text-orange-300 uppercase">
          <span className="pulse-ring h-1.5 w-1.5 rounded-full bg-orange-400" />
          {landingContent.hero.eyebrow}
        </div>

        <h1 className="font-display mb-6 text-5xl leading-[1.05] font-extrabold sm:text-6xl md:text-7xl">
          {landingContent.hero.title[0]}
          <br />
          <span className="gradient-text">{landingContent.hero.title[1]}</span>
          <br />
          {landingContent.hero.title[2]}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/[0.55] md:text-xl">
          {landingContent.hero.description}
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.urls.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary glow-orange inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white no-underline"
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
            className="btn-ghost inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base text-white/70 no-underline"
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
