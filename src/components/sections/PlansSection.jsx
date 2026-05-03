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

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M3.5 8.2l2.5 2.6 6-6.1"
        stroke="#ff5700"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PlanList({ items, textClassName = 'text-white/78' }) {
  return (
    <ul className="space-y-2.5 text-sm leading-relaxed md:text-[0.96rem]">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2.5 ${textClassName}`}>
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PackageCard({ pack, inView }) {
  const [expanded, setExpanded] = useState(false)
  const detailId = useId()
  const [priceValue, priceCurrency = '€'] = pack.price.split(' ')
  const [priceWhole, priceDecimals = '00'] = priceValue.split(',')

  const cardClass = pack.featured
    ? 'border-2 border-[#ff5700]/80 bg-[#162133]/96 shadow-[0_28px_82px_rgba(255,87,0,0.18)] ring-2 ring-[#ff5700]/34 lg:-mx-2 lg:z-10'
    : 'border-white/8 bg-[#172234]/94 shadow-[0_16px_44px_rgba(7,10,18,0.18)]'
  const badgeClass = pack.featured
    ? 'border-[#ff5700]/75 bg-[#ff5700]/12 text-[#ffd9c6] shadow-[0_0_18px_rgba(255,87,0,0.28)]'
    : 'border-white/18 bg-[#18315f]/18 text-white/86'
  const toggleClass = pack.featured
    ? 'border-[#ff5700]/25 bg-[#ff5700]/10 text-[#ffd9c6] hover:bg-[#ff5700]/14'
    : 'border-white/10 bg-white/[0.04] text-white/72 hover:bg-white/[0.07]'

  return (
    <article
      className={`card-lift fade-up fade-delay-1 flex h-full flex-col overflow-hidden rounded-[2rem] border backdrop-blur-md ${cardClass} ${inView ? 'visible' : ''}`}
    >
      <div className="relative border-b border-white/8 px-5 py-5 md:px-6 md:py-6">
        <div className="min-w-0 pr-24">
          <div className={pack.featured ? 'drop-shadow-[0_0_16px_rgba(255,87,0,0.14)]' : ''}>
            <h3 className="font-display text-[1.28rem] leading-none font-extrabold tracking-[0.16em] text-[#ff5700] uppercase md:text-[1.42rem]">
              {pack.name}
            </h3>
            <div className="mt-4 flex flex-nowrap items-start gap-x-2 text-white">
              <p className="font-display whitespace-nowrap text-[3rem] leading-none font-extrabold tracking-[-0.05em] md:text-[3.45rem]">
                {priceWhole}
              </p>
              <div className="flex items-start gap-0.5 pt-0.5 text-[1.42rem] leading-none font-medium tracking-[-0.03em] text-white/92 md:text-[1.68rem]">
                <span className="relative -top-[0.24em]">,</span>
                <span className="whitespace-nowrap">{priceDecimals}</span>
                <span className="whitespace-nowrap">{priceCurrency}</span>
                <span className="whitespace-nowrap">/mes</span>
              </div>
            </div>
          </div>
        </div>
        {pack.badgeLabel ? (
          <span
            className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.68rem] font-extrabold tracking-[0.08em] ${badgeClass}`}
          >
            {pack.badgeLabel}
            {pack.featured ? <CrownIcon /> : null}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6 lg:p-7">
        <div>
          <PlanList items={pack.summaryFeatures} />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {pack.summaryCapacity.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border p-3 ${pack.featured ? 'border-[#ff5700]/18 bg-[#ff5700]/8' : 'border-white/8 bg-white/[0.03]'}`}
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
            <PlanList items={pack.includedItems} textClassName="text-white/70 md:text-base" />

            <p className="mt-7 mb-4 text-base font-bold text-white/86 md:text-lg">{pack.capacityTitle}</p>
            <PlanList items={pack.capacityItems} textClassName="text-white/70 md:text-base" />
          </div>
        ) : null}
      </div>
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

        <p className={`fade-up mt-6 text-center text-sm font-medium text-white/64 md:text-base ${inView ? 'visible' : ''}`}>
          {plansSection.pricingNote}
        </p>

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

        <div
          className={`fade-up mt-8 w-full rounded-[1.75rem] border border-white/12 bg-white/[0.08] px-5 py-4 text-center shadow-[0_18px_42px_rgba(7,10,18,0.16)] backdrop-blur-sm md:px-7 md:py-5 ${inView ? 'visible' : ''}`}
        >
          <p className="text-sm leading-relaxed font-medium text-white/78 md:text-base">
            {plansSection.footnote}
          </p>
        </div>
      </div>
    </section>
  )
}
