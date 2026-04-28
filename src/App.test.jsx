import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './app/App'
import { siteConfig } from './config/siteConfig'

describe('Dialog27 docs landing', () => {
  it('renders the key sections and resolves CTA URLs from central config', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /del documento de tu cliente/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/menos tiempo en introducción de datos/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /la confianza de los profesionales contables/i,
      }),
    ).toBeInTheDocument()

    const ctaLinks = screen.getAllByRole('link', { name: /pedir demo/i })
    expect(ctaLinks.length).toBeGreaterThan(0)

    for (const link of ctaLinks) {
      expect(link).toHaveAttribute('href', siteConfig.urls.demo)
    }

    expect(screen.getByRole('link', { name: /privacidad/i })).toHaveAttribute(
      'href',
      siteConfig.urls.privacy,
    )
  })
})
