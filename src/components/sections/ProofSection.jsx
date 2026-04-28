import { SectionIntro } from '../common/SectionIntro'
import { StarIcon } from '../icons/LandingIcons'
import { landingContent } from '../../content/landingContent'
import { useInView } from '../../hooks/useInView'

export function ProofSection() {
  const [sectionRef, inView] = useInView()

  return (
    <section id="proof" className="relative scroll-mt-28 px-6 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <SectionIntro
          eyebrow="Lo que dicen nuestros clientes"
          title="La confianza de los profesionales contables"
          description="Prueba social pensada para una landing de performance: clara, directa y conectada con el problema real."
          inView={inView}
        />

        <div className={`fade-up mb-14 flex flex-wrap justify-center gap-6 ${inView ? 'visible' : ''}`}>
          {landingContent.proofLogos.map((logo) => (
            <div
              key={logo}
              className="glass rounded-xl px-6 py-3 text-xs font-bold tracking-[0.25em] text-white/30 uppercase"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {landingContent.testimonials.map((testimonial, index) => (
            <article
              key={testimonial.author}
              className={`card-lift glass fade-up fade-delay-${index + 1} flex rounded-3xl border border-white/5 p-6 ${inView ? 'visible' : ''}`}
            >
              <div className="flex h-full flex-col">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={`${testimonial.author}-${starIndex}`} className="h-4 w-4 text-orange-400" />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/[0.65] italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/20 text-xs font-bold text-orange-400">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-white">{testimonial.author}</p>
                    <p className="text-xs text-white/35">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
