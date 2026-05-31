import { SectionIntro } from '../common/SectionIntro'
import { landingContent } from '../../content/landingContent'
import { useInView } from '../../hooks/useInView'

function buildYouTubeEmbedUrl(videoId) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function renderDescription(description, highlightTerms = []) {
  if (!highlightTerms.length) {
    return description
  }

  const pattern = new RegExp(`(${highlightTerms.map(escapeRegExp).join('|')})`, 'g')
  const fragments = description.split(pattern)

  return fragments.map((fragment, index) => {
    if (highlightTerms.includes(fragment)) {
      return (
        <span key={`${fragment}-${index}`} className="font-bold text-white">
          {fragment}
        </span>
      )
    }

    return <span key={`${fragment}-${index}`}>{fragment}</span>
  })
}

export function SolutionSection() {
  const [sectionRef, inView] = useInView()
  const videoEmbedUrl = buildYouTubeEmbedUrl(landingContent.solutionVideo.youtubeId)

  return (
    <section id="solution" className="relative scroll-mt-28 px-6 pb-16 pt-16">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <SectionIntro
          eyebrow="Cómo funciona"
          title={landingContent.solutionVideo.title}
          titleTone="plain"
          inView={inView}
        />

        <div
          className={`glass fade-up fade-delay-1 mb-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_54px_rgba(6,10,18,0.18)] ${inView ? 'visible' : ''}`}
        >
          <div className="aspect-video">
            <iframe
              src={videoEmbedUrl}
              title={landingContent.solutionVideo.iframeTitle}
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <SectionIntro
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
              className={`card-lift glass fade-up fade-delay-${index + 1} relative overflow-hidden rounded-3xl border border-white/5 ${inView ? 'visible' : ''}`}
            >
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background: `linear-gradient(135deg, ${step.overlayFrom}, ${step.overlayTo})`,
                }}
              />
              <div className="relative z-10">
                <div
                  className="aspect-square overflow-hidden border-b border-white/8 sm:aspect-[5/4]"
                  style={step.number === '03' ? { backgroundColor: '#0f2044' } : undefined}
                >
                  <img
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span
                      className="font-display text-5xl leading-none font-extrabold"
                      style={{ color: step.accent, opacity: 0.2 }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="rounded-full border px-3 py-1 text-[0.68rem] font-bold tracking-[0.18em] uppercase"
                      style={{
                        color: step.accent,
                        borderColor: `${step.accent}55`,
                        backgroundColor: `${step.accent}14`,
                      }}
                    >
                      Paso {step.number}
                    </div>
                  </div>
                  <h3 className="font-display mb-2 text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {renderDescription(step.description, step.highlightTerms)}
                  </p>
                  <div
                    className="mt-5 h-0.5 rounded"
                    style={{ background: `linear-gradient(90deg, ${step.accent}60, transparent)` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`fade-up mt-8 rounded-2xl border border-white/10 bg-white p-6 text-center shadow-[0_24px_54px_rgba(6,10,18,0.14)] ${inView ? 'visible' : ''}`}
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
