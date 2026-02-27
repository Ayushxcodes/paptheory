import GenZHero from '@/components/Genz/HeroSectionGen'
import GenZSection from '@/components/Genz/GridSection'
import React from 'react'
import GridsSection from '@/components/Genz/GridsSection'
import FlowSection from '@/components/Genz/FlowSection'

const GenZpage = () => {
  return (
    <div>
      <GenZHero />
      <GenZSection />
      <FlowSection />
    </div>
  )
}

export default GenZpage