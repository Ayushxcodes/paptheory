"use client"
import React from 'react'
import PhilosophySection from '@/components/Communication_landing/PhilosophySection'
import SelectedWorkSection from '@/components/Communication_landing/SelectedWorkCommunicationSection'
import TickerSection from '@/components/Communication_landing/TickerSection'
import WhoWeWorkWith from '@/components/Communication_landing/WhoWorkWithSection'
import OurApproachSection from '@/components/Communication_landing/OurApproachSection'
import CapabilitiesSection from '@/components/Communication_landing/VerticalSection'

const Communicationpage = () => {
  return (
    <div>
        <WhoWeWorkWith />
          <OurApproachSection />
          <CapabilitiesSection />
          <TickerSection />
          <SelectedWorkSection />
          <PhilosophySection />
    </div>
  )
}

export default Communicationpage