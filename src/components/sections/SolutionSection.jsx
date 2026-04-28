import { SectionIntro } from '../common/SectionIntro'
import { StepIcon } from '../icons/LandingIcons'
import { landingContent } from '../../content/landingContent'
import { useInView } from '../../hooks/useInView'

export function SolutionSection() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="solution" className="relative scroll-mt-28 px-6 py-24">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <SectionIntro
          eyebrow="Cómo funciona"
          title={
            <>
              Cuatro pasos hacia <span className="gradient-text">cero trabajo manual</span>
            </>
          }
          description="El flujo contable completo, automatizado de principio a fin."
          inView={inView}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

        <div className={`glass fade-up mt-12 rounded-2xl p-6 md:p-8 ${inView ? 'visible' : ''}`}>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
            {landingContent.connectorLabels.map((label, index) => (
              <div key={label} className="flex flex-1 flex-col items-center gap-3 md:flex-row md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/20 text-sm font-extrabold text-orange-400">
                    {index + 1}
                  </div>
                  <p className="mt-2 max-w-[100px] text-xs text-white/60">{label}</p>
                </div>
                {index < landingContent.connectorLabels.length - 1 && (
                  <div className="shimmer-line hidden h-0.5 flex-1 rounded md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
