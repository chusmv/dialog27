import { Counter } from '../common/Counter'
import { SectionIntro } from '../common/SectionIntro'
import { landingContent } from '../../content/landingContent'
import { useInView } from '../../hooks/useInView'

export function BenefitsSection() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="benefits" className="relative scroll-mt-28 px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent" />

      <div ref={sectionRef} className="relative z-10 mx-auto max-w-6xl">
        <SectionIntro
          eyebrow="El impacto"
          title="Resultados reales, no funcionalidades"
          titleTone="plain"
          description="Qué cambia de verdad cuando eliminas el trabajo manual de la contabilidad."
          inView={inView}
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
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
      </div>
    </section>
  )
}
