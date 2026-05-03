import { siteConfig } from '../../config/siteConfig'
import { trackEvent, withTrackingContext } from '../../lib/analytics'

function CheckMarkIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-[#fe5602] sm:h-5.5 sm:w-5.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 13.2l4.2 4.3L18 6.8"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsappBadge() {
  return (
    <span className="campaign-badge campaign-badge-whatsapp" aria-label="WhatsApp">
      <span className="campaign-badge__dot">W</span>
      WhatsApp
    </span>
  )
}

function MailBadge() {
  return (
    <span className="campaign-badge campaign-badge-mail" aria-label="Email">
      <span className="campaign-badge__dot">@</span>
      Email
    </span>
  )
}

function renderSegments(segments) {
  return segments.map((segment, index) => {
    if (segment.tone === 'accent') {
      return (
        <span key={`${segment.text}-${index}`} className="text-[#fe5602]">
          {segment.text}
        </span>
      )
    }

    if (segment.tone === 'badge-whatsapp') {
      return <WhatsappBadge key={`${segment.text}-${index}`} />
    }

    if (segment.tone === 'badge-mail') {
      return <MailBadge key={`${segment.text}-${index}`} />
    }

    return <span key={`${segment.text}-${index}`}>{segment.text}</span>
  })
}

function ErpCardArt() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-[24rem] items-center justify-center">
      <div className="absolute inset-8 rounded-full bg-[#5d84c8]/28 blur-3xl" />
      <div className="campaign-erp-card relative w-full max-w-[13.75rem] rotate-[6deg] rounded-[1.65rem] bg-white px-6 py-6 text-[#192f64] shadow-[0_24px_64px_rgba(7,14,34,0.32)]">
        <div className="mb-5 flex items-center justify-between text-[2.1rem] font-extrabold tracking-tight">
          <span className="text-[#8c8392]">odoo</span>
          <span>
            a3<span className="text-[#e1007a]">ERP</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-[2.1rem] font-extrabold">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff5f1f] text-white">
            ◇
          </span>
          <span className="text-black">holded</span>
        </div>
      </div>
    </div>
  )
}

function DeskArt({ badgeText }) {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-[26rem] items-center justify-center">
      <div className="absolute inset-10 rounded-full bg-[#5d84c8]/20 blur-3xl" />
      <svg
        className="relative z-10 h-[16.5rem] w-full max-w-[20.5rem] text-white/95"
        viewBox="0 0 420 320"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M110 233c11-44 40-74 88-74 45 0 80 31 90 74"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="209" cy="118" r="32" stroke="currentColor" strokeWidth="4" />
        <path
          d="M179 116c8 8 19 12 31 12 13 0 25-5 33-14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M94 248h235"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect x="146" y="165" width="110" height="63" rx="10" stroke="currentColor" strokeWidth="4" />
        <path d="M146 219l37-26h73" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M120 157l28 10-10 28-28-10z" stroke="currentColor" strokeWidth="4" />
        <path d="M286 143h49" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M316 120v46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <rect x="70" y="86" width="54" height="38" rx="6" stroke="currentColor" strokeWidth="4" />
        <path d="M78 104h38M78 113h27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <rect x="56" y="166" width="44" height="30" rx="4" stroke="currentColor" strokeWidth="4" />
        <path d="M64 181h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M348 199c9 0 17 8 17 17v14h-34v-14c0-9 8-17 17-17z" stroke="currentColor" strokeWidth="4" />
        <path d="M336 188c0-7 5-12 12-12s12 5 12 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <div className="campaign-stamp absolute bottom-2 right-0 rounded-full border-4 border-[#fe5602] px-6 py-5 text-center text-[1rem] font-extrabold text-[#fe5602]">
        <span className="campaign-stamp__ring" />
        <span className="relative z-10 block rounded-full border-4 border-[#fe5602] px-4 py-2 tracking-wide">
          {badgeText}
        </span>
      </div>
    </div>
  )
}

function CameraArt({ bubbleLines }) {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-[26rem] items-center justify-center">
      <div className="absolute inset-8 rounded-full bg-[#5d84c8]/25 blur-3xl" />
      <div className="campaign-speech-bubble absolute right-0 top-0 z-10 max-w-[17.5rem] rounded-[999px] border-[10px] border-[#fe5602] px-7 py-5 text-center text-[1.05rem] font-extrabold leading-tight text-white">
        {bubbleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </div>
      <svg
        className="relative mt-16 h-[15rem] w-full max-w-[20.5rem] text-white/95"
        viewBox="0 0 420 300"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M122 250c30-48 55-82 108-82 54 0 85 35 100 82"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M137 141c15-14 37-22 59-22 24 0 46 9 62 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M180 104c10-8 24-12 38-12 14 0 28 4 38 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M105 215l73-25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M231 196l66 39" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <rect x="196" y="155" width="58" height="36" rx="8" transform="rotate(12 196 155)" stroke="currentColor" strokeWidth="4" />
        <circle cx="223" cy="173" r="8" transform="rotate(12 223 173)" stroke="currentColor" strokeWidth="4" />
        <rect x="292" y="156" width="42" height="82" rx="6" transform="rotate(10 292 156)" stroke="currentColor" strokeWidth="4" />
        <path d="M302 174h22M302 188h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M178 147l-8-20M258 142l10-18M270 211l16 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function ImageArt({ src, alt }) {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-[25rem] items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="relative z-10 h-auto w-full max-w-[24rem] object-contain drop-shadow-[0_18px_40px_rgba(6,10,18,0.28)]"
      />
    </div>
  )
}

function CampaignHeroArt({ art }) {
  if (!art) {
    return null
  }

  if (art.type === 'erp-card') {
    return <ErpCardArt />
  }

  if (art.type === 'automation-stamp') {
    return <DeskArt badgeText={art.badgeText} />
  }

  if (art.type === 'camera-bubble') {
    return <CameraArt bubbleLines={art.bubbleLines} />
  }

  if (art.type === 'image') {
    return <ImageArt src={art.src} alt={art.alt} />
  }

  return null
}

export function CampaignHeroSection({ variant }) {
  const { hero, tracking } = variant

  return (
    <section className="relative overflow-hidden bg-[#0f2044] px-6 pb-10 pt-28 text-white sm:pb-12 sm:pt-32 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-[#4269af]"
        style={{ clipPath: 'polygon(0 34%, 100% 0, 100% 100%, 0 100%)' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="max-w-none text-[2.35rem] leading-[1.08] font-extrabold tracking-[0.01em] text-white sm:text-[2.9rem] lg:text-[clamp(2.15rem,3vw,3rem)] lg:leading-[1.02] lg:tracking-[-0.03em] lg:whitespace-nowrap">
          {hero.titleLines.map((line, lineIndex) => (
            <span key={`line-${lineIndex}`} className="block">
              {renderSegments(line)}
            </span>
          ))}
        </h1>

        <div className="mt-6 grid gap-8 lg:mt-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(16rem,0.82fr)] lg:items-start">
          <div className="max-w-3xl">
            <ul className="space-y-3 text-[1.28rem] leading-[1.08] font-bold tracking-[-0.01em] text-white sm:text-[1.4rem] lg:text-[1.5rem]">
              {hero.bullets.map((bullet, index) => (
                <li key={`${bullet.type}-${index}`} className="flex items-start gap-3">
                  {bullet.type === 'check' ? (
                    <CheckMarkIcon />
                  ) : (
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-white sm:h-3 sm:w-3" aria-hidden="true" />
                  )}
                  <span className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5">
                    {renderSegments(bullet.segments)}
                  </span>
                </li>
              ))}
            </ul>

            {hero.trialOffer ? (
              <div className="mt-10 max-w-[24rem] text-white">
                <p className="text-[2.7rem] leading-none font-extrabold sm:text-[3.1rem]">
                  {hero.trialOffer.title.split('GRATIS')[0]}
                  <span className="text-white">GRATIS</span>
                </p>
                <p className="mt-3 text-xl font-semibold text-white/90">
                  {hero.trialOffer.description}
                </p>
              </div>
            ) : null}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.urls.demo}
                target="_blank"
                rel="noreferrer"
                className="campaign-btn-primary inline-flex items-center justify-center gap-2 rounded-[999px] px-8 py-4 text-lg font-extrabold text-white no-underline"
                onClick={() =>
                  trackEvent(
                    'hero_primary_cta_click',
                    withTrackingContext(tracking, { location: 'hero' }),
                  )
                }
              >
                {hero.primaryCta}
              </a>
              <a
                href="#solution"
                className="campaign-btn-secondary inline-flex items-center justify-center gap-2 rounded-[999px] px-8 py-4 text-lg font-extrabold text-white no-underline"
                onClick={() =>
                  trackEvent(
                    'hero_secondary_cta_click',
                    withTrackingContext(tracking, { location: 'hero' }),
                  )
                }
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="min-h-[14rem] lg:min-h-[20rem]">
            <CampaignHeroArt art={hero.art} />
          </div>
        </div>
      </div>

    </section>
  )
}
