import { landingContent } from '../../content/landingContent'
import { ArrowDownIcon, ArrowRightIcon, FlowNodeIcon } from '../icons/LandingIcons'

function FlowCard({ node, compact = false }) {
  return (
    <article
      className={`hero-flow-card ${node.featured ? 'hero-flow-card-featured' : ''} relative flex w-full flex-col items-center justify-center overflow-hidden rounded-[1.45rem] text-center ${compact ? 'min-h-[8rem] px-4 py-4.5' : 'min-h-[9.3rem] px-4 py-4.5 lg:min-h-[9.75rem] lg:px-4 lg:py-5'}`}
    >
      {node.badgeLabel ? (
        <span
          className={`absolute rounded-full border border-[#fe5602]/35 bg-[#fe5602]/10 px-2.5 py-1 text-[0.62rem] font-extrabold tracking-[0.08em] whitespace-nowrap text-[#ffd9c6] shadow-[0_8px_22px_rgba(254,86,2,0.14)] backdrop-blur-sm ${compact ? 'right-2.5 top-2.5 text-[0.58rem]' : 'right-3 top-3'}`}
        >
          {node.badgeLabel}
        </span>
      ) : null}
      <div className="mb-2.5 flex min-h-[3rem] items-center justify-center lg:min-h-[3.15rem]">
        <FlowNodeIcon icon={node.icon} compact={compact} />
      </div>
      <h3
        className={`font-display font-extrabold text-white ${compact ? 'text-[1.22rem] leading-none' : 'text-[1.26rem] leading-none lg:text-[1.38rem]'}`}
      >
        {node.label}
      </h3>
      {node.supportingText ? (
        <p
          className={`mt-1.5 font-semibold text-white/58 ${compact ? 'max-w-[11rem] text-[0.74rem] leading-[1.15]' : 'max-w-[10.75rem] text-[0.74rem] leading-[1.14] lg:max-w-[11.4rem] lg:text-[0.78rem]'}`}
        >
          {node.supportingText}
        </p>
      ) : null}
      <p
        className={`${node.supportingText ? 'mt-1.5' : 'mt-2'} font-medium text-white/42 ${compact ? 'max-w-[11rem] text-[0.82rem] leading-[1.18]' : 'max-w-[10.75rem] text-[0.82rem] leading-[1.16] lg:max-w-[11.4rem] lg:text-[0.86rem]'}`}
      >
        {node.sublabel}
      </p>
    </article>
  )
}

export function HeroFlowSection() {
  return (
    <section id="hero-flow" className="relative px-6 pb-12 pt-10 md:pb-16 md:pt-12">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-5xl">
        <div className="hero-flow-grid hidden md:grid md:grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)_2.75rem_minmax(0,1fr)_2.75rem_minmax(0,1fr)_2.75rem_minmax(0,1fr)] md:items-center lg:grid-cols-[minmax(0,1fr)_3.25rem_minmax(0,1fr)_3.25rem_minmax(0,1fr)_3.25rem_minmax(0,1fr)_3.25rem_minmax(0,1fr)]">
          {landingContent.hero.flowNodes.map((node, index) => (
            <div key={node.label} className="contents">
              <div className="min-w-0">
                <FlowCard node={node} />
              </div>

              {index < landingContent.hero.flowNodes.length - 1 ? (
                <div className="hero-flow-connector relative z-10 flex w-full items-center justify-center pt-1">
                  <div className="hero-flow-connector__line h-[0.2rem] w-[1.4rem] rounded-full lg:w-[2rem]" />
                  <span className="hero-flow-connector__arrow-wrap -ml-0.5">
                    <ArrowRightIcon className="hero-flow-connector__arrow h-[1.15rem] w-[1.15rem] text-[#fe5602] lg:h-[1.35rem] lg:w-[1.35rem]" />
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="grid gap-2.5 md:hidden">
          {landingContent.hero.flowNodes.map((node, index) => (
            <div key={node.label} className="flex flex-col items-center">
              <div className="w-full max-w-[19rem]">
                <FlowCard node={node} compact />
              </div>

              {index < landingContent.hero.flowNodes.length - 1 ? (
                <div className="hero-flow-connector-mobile flex h-7 items-center justify-center text-[#fe5602]">
                  <div className="hero-flow-connector-mobile__line mr-1 h-4 w-[0.2rem] rounded-full" />
                  <ArrowDownIcon className="hero-flow-connector-mobile__arrow h-5 w-5" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-[1.45rem] leading-tight font-medium tracking-[0.02em] text-white/80 md:text-[1.5rem]">
          De la foto del documento a tenerlo contabilizado en solo 2 clicks.
        </p>
      </div>
    </section>
  )
}
