import { NavBar } from '../components/sections/NavBar'
import { HeroSection } from '../components/sections/HeroSection'
import { ProblemSection } from '../components/sections/ProblemSection'
import { SolutionSection } from '../components/sections/SolutionSection'
import { BenefitsSection } from '../components/sections/BenefitsSection'
import { CtaSection } from '../components/sections/CtaSection'
import { CampaignHeroSection } from '../components/sections/CampaignHeroSection'
import { CampaignCtaSection } from '../components/sections/CampaignCtaSection'
import { HeroPromoStrip } from '../components/sections/HeroPromoStrip'
import { HeroFlowSection } from '../components/sections/HeroFlowSection'
import { PlansSection } from '../components/sections/PlansSection'
import { ProofSection } from '../components/sections/ProofSection'
import { FooterSection } from '../components/sections/FooterSection'
import { siteConfig } from '../config/siteConfig'
import { getLandingVariant } from '../content/landingVariants'
import { useSeo } from '../hooks/useSeo'

function App({ variantKey = 'default' }) {
  const variant = getLandingVariant(variantKey)

  useSeo(variant.seo ?? siteConfig.seo)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0f2044] text-white">
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>
      <div className="noise" />
      <NavBar trackingContext={variant.tracking} />
      <main id="main-content" className="relative z-10">
        {variant.kind === 'campaign' ? (
          <CampaignHeroSection variant={variant} />
        ) : (
          <HeroSection trackingContext={variant.tracking} />
        )}
        <HeroPromoStrip />
        <ProblemSection />
        <SolutionSection />
        <PlansSection trackingContext={variant.tracking} />
        <BenefitsSection />
        <ProofSection />
        <HeroFlowSection />
        {variant.kind === 'campaign' ? (
          <CampaignCtaSection variant={variant} />
        ) : (
          <CtaSection trackingContext={variant.tracking} />
        )}
      </main>
      <FooterSection />
    </div>
  )
}

export default App
