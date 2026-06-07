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

const priceFormatter = new Intl.NumberFormat('es-ES', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const percentFormatter = new Intl.NumberFormat('es-ES', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

function roundCurrency(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

function formatPriceParts(value) {
  const [whole, decimals = '00'] = priceFormatter.format(value).split(',')
  return { whole, decimals }
}

function formatAmountWithCurrency(value) {
  return `${priceFormatter.format(value)}€`
}

function getMonthLabel(months) {
  return months === 1 ? 'mes' : 'meses'
}

function isPromotionEnabled(promotion) {
  const discountPercent = Number(promotion?.discountPercent ?? 0)
  const durationMonths = Number(promotion?.durationMonths ?? 0)

  return Boolean(
    promotion?.enabled &&
      Number.isFinite(discountPercent) &&
      discountPercent > 0 &&
      discountPercent < 100 &&
      Number.isFinite(durationMonths) &&
      durationMonths > 0,
  )
}

function buildPromotionCopy(promotion) {
  const discountLabel = percentFormatter.format(Number(promotion.discountPercent))
  const durationMonths = Number(promotion.durationMonths)
  const monthLabel = getMonthLabel(durationMonths)
  const bannerBody = `${discountLabel}% de descuento durante los primeros ${durationMonths} ${monthLabel}`

  return {
    bannerMessage: `${promotion.bannerPrefix} — ${bannerBody}`,
    bannerBody,
    offerLabel: `Con oferta -${discountLabel}%`,
    savingsLabel: `Ahorro en ${durationMonths} ${monthLabel}`,
  }
}

function getPromotionPricing(regularPrice, promotion) {
  const showPromotion = isPromotionEnabled(promotion)

  if (!showPromotion) {
    return {
      showPromotion: false,
      currentPrice: regularPrice,
      regularPrice,
      totalSavings: 0,
      copy: null,
    }
  }

  const discountRatio = Number(promotion.discountPercent) / 100
  const currentPrice = roundCurrency(regularPrice * (1 - discountRatio))
  const totalSavings = roundCurrency((regularPrice - currentPrice) * Number(promotion.durationMonths))

  return {
    showPromotion: true,
    currentPrice,
    regularPrice,
    totalSavings,
    copy: buildPromotionCopy(promotion),
  }
}

function PackageCard({ pack, promotion, inView }) {
  const [expanded, setExpanded] = useState(false)
  const detailId = useId()
  const pricing = getPromotionPricing(Number(pack.regularPrice), promotion)
  const { whole: priceWhole, decimals: priceDecimals } = formatPriceParts(pricing.currentPrice)
  const { whole: regularPriceWhole, decimals: regularPriceDecimals } = formatPriceParts(
    pricing.regularPrice,
  )

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
        <div className="min-w-0">
          <div className={pack.featured ? 'drop-shadow-[0_0_16px_rgba(255,87,0,0.14)]' : ''}>
            <div className={pack.badgeLabel ? 'pr-24 sm:pr-32' : ''}>
              <h3 className="font-display text-[1.28rem] leading-none font-extrabold tracking-[0.16em] text-[#ff5700] uppercase md:text-[1.42rem]">
                {pack.name}
              </h3>
            </div>
            {pricing.showPromotion ? (
              <div className="mt-3">
                <div className="grid gap-3 sm:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] sm:gap-4 md:gap-5 sm:items-end">
                  <div className="min-w-0">
                    <p className="text-[0.8rem] leading-tight font-medium text-white/38 md:text-[0.9rem]">
                      Precio normal
                    </p>
                    <div className="mt-1 flex flex-nowrap items-end gap-x-1.5 text-white/34">
                      <p className="font-display whitespace-nowrap text-[1.9rem] leading-none font-extrabold tracking-[-0.05em] line-through decoration-white/22 decoration-2 md:text-[2.2rem]">
                        {regularPriceWhole}
                      </p>
                      <div className="flex items-start gap-0.5 pt-0.5 text-[0.92rem] leading-none font-medium tracking-[-0.03em] md:text-[1.02rem]">
                        <span className="relative -top-[0.22em]">,</span>
                        <span className="whitespace-nowrap line-through decoration-white/22 decoration-2">
                          {regularPriceDecimals}
                        </span>
                        <span className="whitespace-nowrap line-through decoration-white/22 decoration-2">
                          €
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <p className="text-[0.84rem] leading-tight font-extrabold tracking-[-0.01em] text-[#ff8d57] md:text-[0.96rem]">
                      {pricing.copy.offerLabel}
                    </p>
                    <div className="mt-1 flex flex-nowrap items-start gap-x-1.5 text-white">
                      <p className="font-display whitespace-nowrap text-[2.65rem] leading-none font-extrabold tracking-[-0.05em] md:text-[3.05rem]">
                        {priceWhole}
                      </p>
                      <div className="flex items-start gap-0.5 pt-0.5 text-[1rem] leading-none font-medium tracking-[-0.03em] text-white/92 md:text-[1.2rem]">
                        <span className="relative -top-[0.22em]">,</span>
                        <span className="whitespace-nowrap">{priceDecimals}</span>
                        <span className="whitespace-nowrap">€</span>
                        <span className="whitespace-nowrap">/mes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-3 flex w-full items-center justify-between gap-3 rounded-[1.1rem] border px-3.5 py-2 text-[0.84rem] font-bold md:px-4 md:text-[0.96rem] ${
                    pack.featured
                      ? 'border-[#ff5700]/28 bg-[#51354a]/80 text-[#ffbf95]'
                      : 'border-[#6f4561]/70 bg-[#4d3244]/78 text-[#ffb487]'
                  }`}
                >
                  <span className="min-w-0 whitespace-nowrap">{pricing.copy.savingsLabel}</span>
                  <span className="shrink-0 whitespace-nowrap text-[#ff7b2f]">
                    {formatAmountWithCurrency(pricing.totalSavings)}
                  </span>
                </div>

                <p className="mt-2 text-[0.92rem] font-medium text-white/42 md:text-[0.96rem]">
                  Después, {formatAmountWithCurrency(pricing.regularPrice)}/mes
                </p>
              </div>
            ) : (
              <div className="mt-4 flex flex-nowrap items-start gap-x-2 text-white">
                <p className="font-display whitespace-nowrap text-[3rem] leading-none font-extrabold tracking-[-0.05em] md:text-[3.45rem]">
                  {priceWhole}
                </p>
                <div className="flex items-start gap-0.5 pt-0.5 text-[1.42rem] leading-none font-medium tracking-[-0.03em] text-white/92 md:text-[1.68rem]">
                  <span className="relative -top-[0.24em]">,</span>
                  <span className="whitespace-nowrap">{priceDecimals}</span>
                  <span className="whitespace-nowrap">€</span>
                  <span className="whitespace-nowrap">/mes</span>
                </div>
              </div>
            )}
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
  const showPromotion = isPromotionEnabled(plansSection.promotion)
  const promotionCopy = showPromotion ? buildPromotionCopy(plansSection.promotion) : null

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

        {showPromotion ? (
          <div
            className={`fade-up mb-8 rounded-[1.6rem] border border-[#ff5700]/40 bg-[linear-gradient(135deg,rgba(74,41,58,0.92),rgba(37,31,58,0.78))] px-5 py-4 shadow-[0_18px_36px_rgba(12,16,28,0.22)] backdrop-blur-sm md:px-6 md:py-5 ${inView ? 'visible' : ''}`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff5700]" aria-hidden="true" />
                <p className="max-w-3xl text-lg leading-snug font-bold text-white md:text-[1.18rem]">
                  <span className="text-[#ff9f6d]">{plansSection.promotion.bannerPrefix}</span>
                  <span className="text-white/84"> — </span>
                  <span>{promotionCopy.bannerBody}</span>
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#ff5700]/50 bg-[#5a3648]/70 px-5 py-2 text-sm font-extrabold tracking-[0.04em] text-[#ff7b2f]">
                {plansSection.promotion.statusLabel}
              </span>
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {plansSection.packages.map((pack) => (
            <PackageCard
              key={pack.name}
              pack={pack}
              promotion={plansSection.promotion}
              inView={inView}
            />
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
            className="btn-primary inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-base font-bold text-white no-underline"
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
