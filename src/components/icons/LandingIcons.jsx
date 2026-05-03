export function ArrowRightIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowDownIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.6 4.2 12.8l.7-4.3-3.1-3 4.3-.6L8 1z" />
    </svg>
  )
}

const flowIconSources = {
  user: '/icons/hero-flow/svg/17-usuario.svg',
  document: '/icons/hero-flow/svg/01-documento.svg',
  'ai-flow': '/icons/hero-flow/svg/14-ia.svg',
  integration: '/icons/hero-flow/svg/19-integracion.svg',
  done: '/icons/hero-flow/svg/20-hecho.svg',
}

function normalizeFlowIcon(icon) {
  if (typeof icon === 'string') {
    return { kind: 'single', src: flowIconSources[icon] ?? flowIconSources.user }
  }

  return icon ?? { kind: 'single', src: flowIconSources.user }
}

export function FlowNodeIcon({ icon, compact = false }) {
  const normalizedIcon = normalizeFlowIcon(icon)

  const sizeClass = compact
    ? 'h-[2.85rem] w-[2.85rem]'
    : 'h-[3rem] w-[3rem] lg:h-[3.15rem] lg:w-[3.15rem]'
  const overlaySizeClass = compact
    ? 'h-[1.4rem] w-[1.4rem]'
    : 'h-[1.5rem] w-[1.5rem] lg:h-[1.65rem] lg:w-[1.65rem]'

  if (normalizedIcon.kind === 'stack') {
    return (
      <span className={`relative flex shrink-0 items-center justify-center ${sizeClass}`} aria-hidden="true">
        <img
          src={normalizedIcon.baseSrc}
          alt=""
          width="400"
          height="400"
          decoding="async"
          className="h-full w-full object-contain"
        />
        <span
          className={`absolute -right-[0.18rem] -bottom-[0.12rem] flex items-center justify-center rounded-full bg-[#fe5602] shadow-[0_8px_18px_rgba(254,86,2,0.28)] ring-1 ring-white/12 ${overlaySizeClass}`}
        >
          <img
            src={normalizedIcon.overlaySrc}
            alt=""
            width="400"
            height="400"
            decoding="async"
            className="h-full w-full scale-[1.08] object-contain"
          />
        </span>
      </span>
    )
  }

  return (
    <span className={`flex shrink-0 items-center justify-center ${sizeClass}`} aria-hidden="true">
      <img
        src={normalizedIcon.src}
        alt=""
        width="400"
        height="400"
        decoding="async"
        className="h-full w-full object-contain"
      />
    </span>
  )
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
      <rect x="6" y="4" width="22" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M28 4l6 6v22a3 3 0 0 1-3 3H10" stroke="currentColor" strokeWidth="2" />
      <path d="M28 4v6h6" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16h10M12 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function AiIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14 20l4 4 8-8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 6v3M20 31v3M6 20h3M31 20h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".5"
      />
    </svg>
  )
}

function ErpIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
      <rect x="4" y="10" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="22" y="10" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M18 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M19 17l3 3-3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ApprovalIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
      <path
        d="M8 20l6 6 14-14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
    </svg>
  )
}

export function StepIcon({ type }) {
  const icons = {
    upload: <UploadIcon />,
    ai: <AiIcon />,
    erp: <ErpIcon />,
    approval: <ApprovalIcon />,
  }

  return icons[type] ?? <UploadIcon />
}
