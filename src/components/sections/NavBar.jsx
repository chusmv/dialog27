import { useEffect, useState } from 'react'
import { landingContent } from '../../content/landingContent'
import { siteConfig } from '../../config/siteConfig'
import { trackEvent } from '../../lib/analytics'

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-[0_12px_40px_rgba(10,10,15,0.45)]' : 'py-5'}`}
      aria-label="Principal"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-white no-underline" aria-label="Ir al inicio">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500">
            <span className="font-display text-xs font-bold text-white">D</span>
          </div>
          <span className="font-display text-sm font-bold tracking-wide">
            D27 <span className="text-orange-400">Docs</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {landingContent.navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.urls.product}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost hidden rounded-lg px-4 py-2 text-sm text-white/70 no-underline md:block"
            onClick={() => trackEvent('nav_product_click', { location: 'navbar' })}
          >
            Ver producto
          </a>
          <a
            href={siteConfig.urls.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary glow-orange rounded-xl px-5 py-2.5 text-sm font-semibold text-white no-underline"
            onClick={() => trackEvent('nav_demo_click', { location: 'navbar' })}
          >
            Pedir demo
          </a>
        </div>
      </div>
    </nav>
  )
}
