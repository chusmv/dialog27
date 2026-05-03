import { SectionIntro } from '../common/SectionIntro'
import { StarIcon } from '../icons/LandingIcons'
import { landingContent } from '../../content/landingContent'
import { useInView } from '../../hooks/useInView'

function NaumanniMark() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3">
      <div className="relative h-8 w-10">
        <span className="absolute left-0 top-1 h-6 w-1 rounded-full bg-[#ff5700]" />
        <span className="absolute left-2 top-3 h-4 w-1 rounded-full bg-[#7fa6e8]" />
        <span className="absolute left-4 top-0 h-7 w-1 rounded-full bg-[#7fa6e8]" />
        <span className="absolute left-6 top-2 h-5 w-1 rounded-full bg-[#7fa6e8]" />
        <span className="absolute left-8 top-4 h-3 w-1 rounded-full bg-[#7fa6e8]" />
        <span className="absolute left-[0.35rem] top-4 h-1 w-4 rounded-full bg-[#7fa6e8]" />
        <span className="absolute left-[1.4rem] top-3 h-1 w-4 rounded-full bg-[#7fa6e8]" />
      </div>
      <span className="font-display text-sm font-bold tracking-[0.18em] text-white/78 uppercase">
        Naumanni
      </span>
    </div>
  )
}

export function ProofSection() {
  const [sectionRef, inView] = useInView()
  const testimonial = landingContent.testimonials[0]

  return (
    <section id="proof" className="relative scroll-mt-28 px-6 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <SectionIntro
          eyebrow="Lo que dicen nuestros clientes"
          title="La confianza de los profesionales contables"
          titleTone="plain"
          inView={inView}
        />

        <article
          className={`card-lift glass fade-up rounded-[2rem] border border-white/5 p-7 md:p-8 ${inView ? 'visible' : ''}`}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon key={`${testimonial.author}-${starIndex}`} className="h-4 w-4 text-orange-400" />
                ))}
              </div>
              <NaumanniMark />
            </div>

            <p className="font-display text-lg leading-relaxed text-white/[0.78] italic md:text-[1.15rem]">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-4 border-t border-white/6 pt-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/20 text-sm font-bold text-orange-400">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-display text-base font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-white/45">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
