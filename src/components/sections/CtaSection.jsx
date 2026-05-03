import { landingContent } from '../../content/landingContent'
import { siteConfig } from '../../config/siteConfig'
import { useInView } from '../../hooks/useInView'
import { trackEvent, withTrackingContext } from '../../lib/analytics'
import { ArrowRightIcon } from '../icons/LandingIcons'

export function CtaSection({ trackingContext = {} }) {
  const [sectionRef, inView] = useInView()

  return (
    <section id="cta" className="relative scroll-mt-28 px-6 pb-20 pt-12">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="mesh-bg absolute inset-0" />

      <div
        ref={sectionRef}
        className={`fade-up relative z-10 mx-auto max-w-3xl text-center ${inView ? 'visible' : ''}`}
      >
        <p className="mb-6 text-xs tracking-[0.3em] text-orange-300/70 uppercase">{landingContent.cta.eyebrow}</p>
        <h2 className="font-display mb-5 text-4xl leading-tight font-extrabold md:text-5xl">
          {landingContent.cta.title[0]}
          <br />
          <span className="gradient-text">{landingContent.cta.title[1]}</span>
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-lg text-white/[0.55]">{landingContent.cta.description}</p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.urls.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary glow-orange inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-base font-bold text-white no-underline"
            onClick={() =>
              trackEvent(
                'final_cta_primary_click',
                withTrackingContext(trackingContext, { location: 'final-cta' }),
              )
            }
          >
            {landingContent.cta.primaryLabel}
            <ArrowRightIcon />
          </a>
          <a
            href={siteConfig.urls.product}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-base text-white/60 no-underline"
            onClick={() =>
              trackEvent(
                'final_cta_secondary_click',
                withTrackingContext(trackingContext, { location: 'final-cta' }),
              )
            }
          >
            {landingContent.cta.secondaryLabel}
          </a>
        </div>

        <p className="mt-6 text-xs text-white/25">{landingContent.cta.helper}</p>
      </div>
    </section>
  )
}
