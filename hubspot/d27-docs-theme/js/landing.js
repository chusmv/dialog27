(function () {
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  function initStickyNav() {
    const nav = document.querySelector('[data-landing-nav]')
    if (!nav) {
      return
    }

    const sync = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 24)
    }

    sync()
    window.addEventListener('scroll', sync, { passive: true })
  }

  function initSmoothScroll() {
    document.querySelectorAll('[data-scroll-link]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href')
        if (!href || !href.startsWith('#')) {
          return
        }

        const target = document.querySelector(href)
        if (!target) {
          return
        }

        event.preventDefault()
        target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
      })
    })
  }

  function initFadeUp() {
    const nodes = document.querySelectorAll('.fade-up')

    if (!nodes.length) {
      return
    }

    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      nodes.forEach((node) => node.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15 },
    )

    nodes.forEach((node) => observer.observe(node))
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter-end]')

    if (!counters.length) {
      return
    }

    const animate = (node) => {
      const end = Number(node.getAttribute('data-counter-end') || 0)
      const suffix = node.getAttribute('data-counter-suffix') || ''
      const duration = Number(node.getAttribute('data-counter-duration') || 1800)

      if (prefersReducedMotion() || end === 0) {
        node.textContent = `${end}${suffix}`
        return
      }

      let frame = 0
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const value = Math.floor(progress * end)
        node.textContent = `${value}${suffix}`

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick)
        } else {
          node.textContent = `${end}${suffix}`
        }
      }

      node.textContent = `0${suffix}`
      frame = window.requestAnimationFrame(tick)
      node.dataset.counterAnimated = 'true'
      node.addEventListener(
        'remove',
        () => {
          window.cancelAnimationFrame(frame)
        },
        { once: true },
      )
    }

    if (!('IntersectionObserver' in window)) {
      counters.forEach((node) => animate(node))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target.dataset.counterAnimated === 'true') {
            return
          }

          animate(entry.target)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.35 },
    )

    counters.forEach((node) => observer.observe(node))
  }

  function initPlanToggles() {
    document.querySelectorAll('[data-plan-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-plan-toggle')
        const target = targetId ? document.getElementById(targetId) : null

        if (!target) {
          return
        }

        const expanded = button.getAttribute('aria-expanded') === 'true'
        button.setAttribute('aria-expanded', String(!expanded))
        target.hidden = expanded
        button.textContent = expanded
          ? button.getAttribute('data-plan-open-label') || 'Ver detalles'
          : button.getAttribute('data-plan-close-label') || 'Ocultar detalles'
      })
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    initStickyNav()
    initSmoothScroll()
    initFadeUp()
    initCounters()
    initPlanToggles()
  })
})()
