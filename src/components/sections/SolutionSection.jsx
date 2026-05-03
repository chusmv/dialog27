import { SectionIntro } from '../common/SectionIntro'
import { StepIcon } from '../icons/LandingIcons'
import { landingContent } from '../../content/landingContent'
import { useInView } from '../../hooks/useInView'

export function SolutionSection() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="solution" className="relative scroll-mt-28 px-6 pb-16 pt-16">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <SectionIntro
          eyebrow="Cómo funciona"
          title={
            <>
              Tres pasos hacia cero trabajo manual
            </>
          }
          description="Automatizamos el proceso contable para que tú te centres en lo importante."
          titleTone="plain"
          inView={inView}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {landingContent.steps.map((step, index) => (
            <article
              key={step.number}
              className={`card-lift glass fade-up fade-delay-${index + 1} relative overflow-hidden rounded-3xl border border-white/5 p-7 ${inView ? 'visible' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.overlayClass} opacity-60`} />
              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between">
                  <div style={{ color: step.accent }} className="glass rounded-xl p-2">
                    <StepIcon type={step.icon} />
                  </div>
                  <span
                    className="font-display text-5xl leading-none font-extrabold"
                    style={{ color: step.accent, opacity: 0.2 }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display mb-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
                <div
                  className="mt-5 h-0.5 rounded"
                  style={{ background: `linear-gradient(90deg, ${step.accent}60, transparent)` }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
