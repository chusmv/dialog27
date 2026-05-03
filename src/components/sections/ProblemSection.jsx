import { SectionIntro } from '../common/SectionIntro'
import { landingContent } from '../../content/landingContent'
import { useInView } from '../../hooks/useInView'

export function ProblemSection() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="problem" className="relative scroll-mt-28 px-6 pb-24 pt-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />

      <div ref={sectionRef} className="relative z-10 mx-auto max-w-5xl">
        <SectionIntro
          eyebrow="El problema real"
          title={
            <>
              La contabilidad no ha cambiado.
            </>
          }
          description="Sigue siendo dolorosamente manual."
          titleTone="plain"
          inView={inView}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {landingContent.problems.map((problem, index) => (
            <article
              key={problem.title}
              className={`card-lift fade-up fade-delay-${index + 1} rounded-2xl border border-white/10 bg-[#2f5da6]/35 p-6 backdrop-blur-md ${inView ? 'visible' : ''}`}
            >
              <div className="mb-4 text-3xl">{problem.emoji}</div>
              <h3 className="font-display mb-2 text-lg font-bold text-white">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{problem.description}</p>
              <div className="mt-4 h-0.5 rounded bg-gradient-to-r from-red-500/30 to-transparent" />
            </article>
          ))}
        </div>

        <div className={`glass-orange fade-up mt-12 rounded-2xl p-6 text-center ${inView ? 'visible' : ''}`}>
          <p className="font-display text-xl font-bold text-orange-200 md:text-2xl">
            El contable medio dedica <span className="text-orange-400">el 80% de su tiempo</span> a
            tareas que podrían automatizarse.
          </p>
          <p className="mt-2 text-sm text-white/40">
            Tiempo que no se dedica a asesorar, crecer ni pensar.
          </p>
        </div>
      </div>
    </section>
  )
}
