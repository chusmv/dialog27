import { useId, useState } from 'react'
import { landingContent } from '../../content/landingContent'
import { siteConfig } from '../../config/siteConfig'
import { trackEvent, withTrackingContext } from '../../lib/analytics'
import { useInView } from '../../hooks/useInView'
import { SectionIntro } from '../common/SectionIntro'
import { ArrowRightIcon } from '../icons/LandingIcons'

function CrownIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path
        d="M2.25 12.25h11.5L12.9 5.6 9.4 8.35 8 3.9 6.6 8.35 3.1 5.6l-.85 6.65z"
        fill="#f7c948"
        stroke="#f5b301"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <path d="M4 13.7h8" stroke="#f5b301" strokeWidth="1" strokeLinecap="round" />
      <circle cx="8" cy="5.1" r="0.9" fill="#fff2b8" />
    </svg>
  )
}

function PackageCard({ pack, inView }) {
  const [expanded, setExpanded] = useState(false)
  const detailId = useId()

  const cardClass = pack.featured
    ? 'border-[#fe5602]/45 bg-[radial-gradient(circle_at_top,rgba(254,86,2,0.2),transparent_42%),linear-gradient(180deg,rgba(31,38,57,0.98),rgba(19,25,39,0.99))] shadow-[0_26px_76px_rgba(254,86,2,0.16)] ring-1 ring-[#fe5602]/18'
    : 'border-white/8 bg-[linear-gradient(180deg,rgba(24,31,47,0.94),rgba(18,24,38,0.98))] shadow-[0_16px_44px_rgba(7,10,18,0.18)]'
  const badgeClass = pack.featured
    ? 'border-[#fe5602]/40 bg-[#fe5602]/14 text-[#ffe2d3]'
    : 'border-white/12 bg-white/6 text-white/72'
  const toggleClass = pack.featured
    ? 'border-[#fe5602]/25 bg-[#fe5602]/10 text-[#ffd9c6] hover:bg-[#fe5602]/14'
    : 'border-white/10 bg-white/[0.04] text-white/72 hover:bg-white/[0.07]'

  return (
    <article
      className={`card-lift fade-up fade-delay-1 flex h-full flex-col overflow-hidden rounded-[2rem] border p-5 backdrop-blur-md md:p-6 lg:p-7 ${cardClass} ${inView ? 'visible' : ''}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`font-display leading-none font-extrabold text-white ${pack.featured ? 'text-[2.15rem] md:text-[2.25rem]' : 'text-[1.85rem] md:text-[1.95rem]'}`}
        >
          {pack.name}
        </h3>
        {pack.badgeLabel ? (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold tracking-[0.08em] ${badgeClass}`}
          >
            {pack.badgeLabel}
            {pack.featured ? <CrownIcon /> : null}
          </span>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
        <p
          className={`font-display leading-none font-extrabold text-white ${pack.featured ? 'text-[2.9rem] md:text-[3rem]' : 'text-[2.45rem] md:text-[2.6rem]'}`}
        >
          {pack.price}
        </p>
        <p className="pb-1 text-sm text-white/56 md:text-base">{pack.note}</p>
      </div>

      <div className="mt-5">
        <ul className="space-y-2.5 pl-5 text-sm leading-relaxed text-white/78 md:text-[0.96rem]">
          {pack.summaryFeatures.map((item) => (
            <li key={item} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {pack.summaryCapacity.map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl border p-3 ${pack.featured ? 'border-[#fe5602]/18 bg-[#fe5602]/8' : 'border-white/8 bg-white/[0.03]'}`}
          >
            <p className="text-[0.7rem] font-bold tracking-[0.08em] text-white/42 uppercase">
              {item.label}
            </p>
            <p className="mt-1 text-base font-extrabold text-white md:text-lg">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={detailId}
          onClick={() => setExpanded((current) => !current)}
          className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-bold transition-colors ${toggleClass}`}
        >
          {expanded ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
      </div>

      {expanded ? (
        <div
          id={detailId}
          className="mt-5 rounded-[1.45rem] border border-white/7 bg-white/[0.03] p-5 md:p-6"
        >
          <p className="mb-4 text-base font-bold text-white/86 md:text-lg">{pack.includedTitle}</p>
          <ul className="space-y-3 pl-5 text-sm leading-relaxed text-white/70 md:text-base">
            {pack.includedItems.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-7 mb-4 text-base font-bold text-white/86 md:text-lg">{pack.capacityTitle}</p>
          <ul className="space-y-3 pl-5 text-sm leading-relaxed text-white/70 md:text-base">
            {pack.capacityItems.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  )
}

export function PlansSection({ trackingContext = {} }) {
  const [sectionRef, inView] = useInView()
  const { plansSection } = landingContent

  return (
    <section id="plans" className="relative scroll-mt-28 overflow-hidden bg-[#0f2044] px-6 pb-20 pt-16">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-[#4269af]"
        style={{ clipPath: 'polygon(0 34%, 100% 0, 100% 100%, 0 100%)' }}
      />
      <div ref={sectionRef} className="relative z-10 mx-auto max-w-6xl">
        <SectionIntro
          eyebrow={plansSection.eyebrow}
          title={plansSection.title}
          description={plansSection.description}
          titleTone="plain"
          inView={inView}
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {plansSection.packages.map((pack) => (
            <PackageCard key={pack.name} pack={pack} inView={inView} />
          ))}
        </div>

        <div className={`fade-up mt-10 flex justify-center ${inView ? 'visible' : ''}`}>
          <a
            href={siteConfig.urls.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary glow-orange inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-base font-bold text-white no-underline"
            onClick={() =>
              trackEvent(
                'plans_primary_cta_click',
                withTrackingContext(trackingContext, { location: 'plans' }),
              )
            }
          >
            {plansSection.cta.label}
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
