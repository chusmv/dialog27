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
          titleTone="plain"
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

        <div
          className={`fade-up rounded-2xl border border-white/10 bg-white p-6 text-center shadow-[0_24px_54px_rgba(6,10,18,0.14)] ${inView ? 'visible' : ''}`}
        >
          <p className="mb-5 text-xs tracking-[0.3em] text-slate-500 uppercase">Integraciones nativas</p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-6 sm:gap-x-10">
            {landingContent.erpLogos.map((erp) => (
              <article
                key={erp.name}
                className="flex h-12 items-center justify-center rounded-xl px-2"
              >
                <img
                  src={erp.src}
                  alt={erp.alt}
                  className="max-h-9 w-auto object-contain sm:max-h-10"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
