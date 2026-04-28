import { Counter } from '../common/Counter'
import { SectionIntro } from '../common/SectionIntro'
import { landingContent } from '../../content/landingContent'
import { useInView } from '../../hooks/useInView'

export function BenefitsSection() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="benefits" className="relative scroll-mt-28 px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent" />

      <div ref={sectionRef} className="relative z-10 mx-auto max-w-5xl">
        <SectionIntro
          eyebrow="El impacto"
          title="Resultados reales, no funcionalidades"
          description="Qué cambia de verdad cuando eliminas el trabajo manual de la contabilidad."
          inView={inView}
        />

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {landingContent.benefits.map((benefit, index) => (
            <article
              key={benefit.label}
              className={`card-lift glass fade-up fade-delay-${index + 1} rounded-3xl border border-white/5 p-7 ${inView ? 'visible' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <div className="font-display mb-1 text-4xl leading-none font-extrabold text-orange-400 md:text-5xl">
                    <Counter end={benefit.metric} suffix={benefit.suffix} />
                  </div>
                  <div className="font-display mb-2 text-base font-bold text-white">{benefit.label}</div>
                  <p className="text-sm leading-relaxed text-white/[0.45]">{benefit.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`glass fade-up rounded-2xl p-6 text-center ${inView ? 'visible' : ''}`}>
          <p className="mb-5 text-xs tracking-[0.3em] text-white/40 uppercase">Integraciones nativas</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {landingContent.erpLogos.map((erp) => (
              <div
                key={erp}
                className="glass rounded-xl px-5 py-2.5 text-sm font-bold text-white/60 transition-colors hover:text-orange-400"
              >
                {erp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
