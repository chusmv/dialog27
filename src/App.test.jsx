import { cleanup, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './app/App'
import { siteConfig } from './config/siteConfig'
import { landingVariants } from './content/landingVariants'

describe('Dialog27 docs landing', () => {
  it('renders the key sections and resolves CTA URLs from central config', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /del documento de tu cliente/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/menos tiempo en introducción de datos/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/promoción por tiempo limitado/i)).toBeInTheDocument()
    expect(screen.getByText(/pruébalo 1 mes gratis/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /planes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /basic/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /plus/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /corporate/i })).toBeInTheDocument()
    expect(screen.getByText(/hasta 500/i)).toBeInTheDocument()
    expect(screen.getByText((_, element) => element?.textContent === 'Hasta 50')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /ver detalles/i }).length).toBeGreaterThan(0)
    expect(
      screen.getByRole('heading', { name: /la confianza de los profesionales contables/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /clientes/i })).toBeInTheDocument()
    expect(screen.getByAltText(/logo de odoo/i)).toBeInTheDocument()
    expect(screen.getByAltText(/logo de a3erp/i)).toBeInTheDocument()
    expect(screen.getByAltText(/logo de holded/i)).toBeInTheDocument()
    expect(screen.getByAltText(/logo de borme/i)).toBeInTheDocument()
    expect(screen.getByText(/bolsas de tokens adicionales/i)).toBeInTheDocument()
    expect(
      screen.queryByText(/del documento de tu cliente a la contabilidad en solo 2 clicks/i),
    ).not.toBeInTheDocument()

    const ctaLinks = screen.getAllByRole('link', { name: /pedir demo/i })
    expect(ctaLinks.length).toBeGreaterThan(0)

    expect(screen.getByRole('link', { name: /solicitar demo/i })).toHaveAttribute(
      'href',
      siteConfig.urls.demo,
    )

    for (const link of ctaLinks) {
      expect(link).toHaveAttribute('href', siteConfig.urls.demo)
    }

    expect(screen.getByRole('link', { name: /privacidad/i })).toHaveAttribute(
      'href',
      siteConfig.urls.privacy,
    )
  })

  it('renders the campaign variants with their own hero, SEO, and shared CTA destination', () => {
    cleanup()

    const campaignVariants = Object.values(landingVariants).filter(
      (variant) => variant.kind === 'campaign',
    )

    for (const variant of campaignVariants) {
      const { unmount } = render(<App variantKey={variant.key} />)

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        variant.hero.titleLines
          .flat()
          .map((segment) => segment.text)
          .join(''),
      )

      expect(document.title).toBe(variant.seo.title)
      expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
        'href',
        variant.seo.canonical,
      )

      const primaryLinks = screen.getAllByRole('link', {
        name: new RegExp(variant.hero.primaryCta, 'i'),
      })

      expect(primaryLinks.length).toBeGreaterThan(0)

      for (const link of primaryLinks) {
        expect(link).toHaveAttribute('href', siteConfig.urls.demo)
      }

      expect(screen.getByText(/promoción por tiempo limitado/i)).toBeInTheDocument()
      expect(screen.getByText(/pruébalo 1 mes gratis/i)).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /basic/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /plus/i })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /corporate/i })).toBeInTheDocument()
      expect(screen.getByText(/hasta 500/i)).toBeInTheDocument()
      expect(screen.getByText((_, element) => element?.textContent === 'Hasta 50')).toBeInTheDocument()
      expect(screen.getAllByRole('button', { name: /ver detalles/i }).length).toBeGreaterThan(0)
      expect(
        screen.getByRole('heading', { name: /la confianza de los profesionales contables/i }),
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /clientes/i })).toBeInTheDocument()
      expect(screen.getByAltText(/logo de odoo/i)).toBeInTheDocument()
      expect(screen.getByAltText(/logo de a3erp/i)).toBeInTheDocument()
      expect(screen.getByAltText(/logo de holded/i)).toBeInTheDocument()
      expect(screen.getByAltText(/logo de borme/i)).toBeInTheDocument()
      expect(screen.getByText(/bolsas de tokens adicionales/i)).toBeInTheDocument()
      expect(
        screen.queryByText(/del documento de tu cliente a la contabilidad en solo 2 clicks/i),
      ).not.toBeInTheDocument()
      const packageCtaLinks = screen.getAllByRole('link', { name: /solicitar demo/i })
      expect(packageCtaLinks.length).toBeGreaterThan(0)

      for (const link of packageCtaLinks) {
        expect(link).toHaveAttribute('href', siteConfig.urls.demo)
      }

      expect(
        screen.getByRole('heading', {
          level: 2,
          name: new RegExp(variant.finalCta.title[0], 'i'),
        }),
      ).toBeInTheDocument()

      unmount()
      cleanup()
    }
  })
})
