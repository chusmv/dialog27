import { useEffect } from 'react'

function upsertMeta(selector, attribute, value, content) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export function useSeo(seo) {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const socialImage = seo.socialImagePath
      ? new URL(seo.socialImagePath, window.location.origin).toString()
      : undefined

    document.title = seo.title
    upsertMeta('meta[name="description"]', 'name', 'description', seo.description)
    upsertMeta('meta[name="robots"]', 'name', 'robots', seo.robots)
    upsertLink('canonical', seo.canonical)

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', seo.title)
    upsertMeta(
      'meta[property="og:description"]',
      'property',
      'og:description',
      seo.description,
    )
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', seo.ogType)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', seo.canonical)

    if (socialImage) {
      upsertMeta('meta[property="og:image"]', 'property', 'og:image', socialImage)
      upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', socialImage)
    }

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', seo.twitterCard)
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title)
    upsertMeta(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      seo.description,
    )
  }, [seo])
}
