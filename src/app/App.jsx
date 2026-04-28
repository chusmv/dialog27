import { NavBar } from '../components/sections/NavBar'
import { HeroSection } from '../components/sections/HeroSection'
import { ProblemSection } from '../components/sections/ProblemSection'
import { SolutionSection } from '../components/sections/SolutionSection'
import { BenefitsSection } from '../components/sections/BenefitsSection'
import { ProofSection } from '../components/sections/ProofSection'
import { CtaSection } from '../components/sections/CtaSection'
import { FooterSection } from '../components/sections/FooterSection'
import { siteConfig } from '../config/siteConfig'
import { useSeo } from '../hooks/useSeo'

function App() {
  useSeo(siteConfig.seo)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f] text-white">
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>
      <div className="noise" />
      <NavBar />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ProofSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
