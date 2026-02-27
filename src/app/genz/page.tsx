import GenZHero from '@/components/Genz/HeroSectionGen'
import GenZSection from '@/components/Genz/GridSection'
import React from 'react'
import GridsSection from '@/components/Genz/GridsSection'
import FlowSection from '@/components/Genz/FlowSection'
import ProminentSection from '@/components/Genz/ProminentSection'
import MobSection from '@/components/Genz/MobSection'
import BankingHero from '@/components/Genz/BankingHero'

const GenZpage = () => {
  return (
    <div>
      <GenZHero />
      <GenZSection />
      <FlowSection />
      <ProminentSection />
      <MobSection />
      <BankingHero />
    </div>
  )
}

export default GenZpage