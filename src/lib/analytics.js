import { siteConfig } from '../config/siteConfig'

export function withTrackingContext(context = {}, payload = {}) {
  const nextPayload = { ...payload }

  if (context.variant) {
    nextPayload.variant = context.variant
  }

  if (context.slug) {
    nextPayload.slug = context.slug
  }

  if (context.pageType) {
    nextPayload.pageType = context.pageType
  }

  return nextPayload
}

export function trackEvent(name, payload = {}) {
  if (typeof window === 'undefined' || !name) {
    return
  }

  const detail = {
    name,
    payload,
    timestamp: Date.now(),
  }

  window.dispatchEvent(new CustomEvent('dialog27:track', { detail }))

  if (!siteConfig.tracking.enabled) {
    if (siteConfig.tracking.debug) {
      console.info('[tracking disabled]', detail)
    }

    return
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: name,
      ...payload,
    })

    return
  }

  if (typeof window.plausible === 'function') {
    window.plausible(name, { props: payload })
  }
}
