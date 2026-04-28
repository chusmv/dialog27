import { landingContent } from '../../content/landingContent'
import { siteConfig } from '../../config/siteConfig'
import { trackEvent } from '../../lib/analytics'
import { ArrowDownIcon, ArrowRightIcon } from '../icons/LandingIcons'

export function HeroSection() {
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

        <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.urls.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary glow-orange inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-bold text-white no-underline"
            onClick={() => trackEvent('hero_primary_cta_click', { location: 'hero' })}
          >
            {landingContent.hero.primaryCta}
            <ArrowRightIcon />
          </a>
          <a
            href="#solution"
            className="btn-ghost inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base text-white/70 no-underline"
            onClick={() => trackEvent('hero_secondary_cta_click', { location: 'hero' })}
          >
            {landingContent.hero.secondaryCta}
          </a>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {landingContent.hero.flowNodes.map((node, index) => (
              <div key={node.label} className="relative flex flex-1 flex-col items-center gap-2">
                <div
                  className={`${node.motionClass} ${node.featured ? 'glass-orange glow-soft' : 'glass'} w-full rounded-2xl p-3 text-center sm:p-4`}
                >
                  <div className="mb-1 text-2xl sm:text-3xl">{node.icon}</div>
                  <div className="font-display text-xs font-bold text-white sm:text-sm">{node.label}</div>
                  <div className="mt-0.5 hidden text-[10px] text-white/40 sm:block sm:text-xs">
                    {node.sublabel}
                  </div>
                </div>

                {index < landingContent.hero.flowNodes.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center sm:flex">
                    <div className="shimmer-line h-0.5 w-4 rounded" />
                    <ArrowRightIcon className="-ml-1 h-3 w-3 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs tracking-wide text-white/30">
            Automatización total. Cero introducción manual de datos.
          </p>
        </div>
      </div>

      <a
        href="#problem"
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20"
        aria-label="Ir a la siguiente sección"
      >
        <ArrowDownIcon />
      </a>
    </section>
  )
}
