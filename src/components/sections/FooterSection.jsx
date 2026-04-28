import { siteConfig } from '../../config/siteConfig'

const footerLinks = [
  { href: siteConfig.urls.home, label: 'dialog27.com' },
  { href: siteConfig.urls.contact, label: 'Contacto' },
  { href: siteConfig.urls.privacy, label: 'Privacidad' },
  { href: siteConfig.urls.legal, label: 'Aviso legal' },
  { href: siteConfig.urls.cookies, label: 'Cookies' },
]

export function FooterSection() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500">
            <span className="font-display text-xs font-bold text-white">D</span>
          </div>
          <span className="font-display text-sm font-bold tracking-wide text-white/60">
            D27 <span className="text-orange-400/80">Docs</span>
          </span>
          <span className="ml-2 text-xs text-white/20">by Dialog27</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-white/30">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white/60"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-white/20">
          © {year} {siteConfig.brand.legalName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
