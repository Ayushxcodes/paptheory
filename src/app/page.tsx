import ControlledMediaSection from '@/components/landing/ControlledMediaSection'
import HeroSection from '@/components/landing/HeroSection'
import OurApproachSection from '@/components/landing/OurApproachSection'
import PhilosophySection from '@/components/landing/PhilosophySection'
import SelectedWorkSection from '@/components/landing/SelectedWorkSection'
import ServicesScrollSection from '@/components/landing/ServicesScrollSection'
import VerticalsSection from '@/components/landing/VerticalSection'
import WhoYouWorkWithSection from '@/components/landing/WhoWorkWithSection'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <WhoYouWorkWithSection  />
      <OurApproachSection />
      <VerticalsSection />
      <ServicesScrollSection />
      <SelectedWorkSection />
      <PhilosophySection />
    </div>
  )
}

export default Homepage