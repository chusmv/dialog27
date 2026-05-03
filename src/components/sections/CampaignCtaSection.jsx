import { siteConfig } from '../../config/siteConfig'
import { trackEvent, withTrackingContext } from '../../lib/analytics'
import { ArrowRightIcon } from '../icons/LandingIcons'

export function CampaignCtaSection({ variant }) {
  const { finalCta, tracking } = variant

  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,68,0.08),transparent_38%,rgba(66,105,175,0.08))]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="campaign-cta-panel relative rounded-[2rem] border border-[#fe5602]/20 bg-[#0f2044] px-8 py-12 text-center shadow-[0_24px_80px_rgba(8,16,38,0.35)] md:px-16">
          <div className="mb-6 inline-flex rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold tracking-[0.28em] text-white/75 uppercase">
            {finalCta.eyebrow}
          </div>
          <h2 className="text-4xl leading-tight font-extrabold text-white md:text-5xl">
            {finalCta.title[0]}
            <br />
            <span className="text-[#fe5602]">{finalCta.title[1]}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/78">
            {finalCta.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.urls.demo}
              target="_blank"
              rel="noreferrer"
              className="campaign-btn-primary inline-flex items-center justify-center gap-2 rounded-[999px] px-10 py-4 text-base font-extrabold text-white no-underline"
              onClick={() =>
                trackEvent(
                  'final_cta_primary_click',
                  withTrackingContext(tracking, { location: 'final-cta' }),
                )
              }
            >
              {finalCta.primaryLabel}
              <ArrowRightIcon />
            </a>
            <a
              href={siteConfig.urls.product}
              target="_blank"
              rel="noreferrer"
              className="campaign-btn-secondary inline-flex items-center justify-center gap-2 rounded-[999px] px-10 py-4 text-base font-extrabold text-white no-underline"
              onClick={() =>
                trackEvent(
                  'final_cta_secondary_click',
                  withTrackingContext(tracking, { location: 'final-cta' }),
                )
              }
            >
              {finalCta.secondaryLabel}
            </a>
          </div>

          <p className="mt-6 text-sm text-white/60">{finalCta.helper}</p>
        </div>
      </div>
    </section>
  )
}
