"use client"

import ControlledMediaSection from '@/components/landing/ControlledMediaSection'
import HeroSection from '@/components/landing/HeroSection'
import OurApproachSection from '@/components/landing/OurApproachSection'
import PhilosophySection from '@/components/landing/PhilosophySection'
import SelectedWorkSection from '@/components/landing/SelectedWorkSection'
import VerticalsSection from '@/components/landing/VerticalSection'
import WhoYouWorkWithSection from '@/components/landing/WhoWorkWithSection'
import { AppleHelloVietnameseEffect } from '@/components/ui/apple-hello-effect'
import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'

const Homepage = () => {
  const [showAnimation, setShowAnimation] = useState(true)

  const handleAnimationComplete = () => {
    setShowAnimation(false)
  }

  return (
    <AnimatePresence mode="wait">
      {showAnimation ? (
        <motion.div
          key="animation"
          exit={{ opacity: 0 }}
          className="flex items-center justify-center min-h-screen"
        >
          <AppleHelloVietnameseEffect onAnimationComplete={handleAnimationComplete} />
        </motion.div>
      ) : (
        <motion.div
          key="homepage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <WhoYouWorkWithSection />
          <OurApproachSection />
          <VerticalsSection />
          <SelectedWorkSection />
          <PhilosophySection />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Homepage