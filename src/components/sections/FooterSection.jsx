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
        <img
          src="/logo_d27docs_oscuro.png"
          alt="Logo de D27 Docs"
          className="h-9 w-auto object-contain sm:h-10"
        />

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
