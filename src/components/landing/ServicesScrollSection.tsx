"use client";

import StrategyAdvisorySection from "./StrategyAdvisorySection";
import StrategicCreativeSection from "./StrategicCreativeSection";
import ControlledMediaSection from "./ControlledMediaSection";

export default function ServicesScrollSection() {
  return (
    <section className="relative">
      {/* Scroll-snap container - disabled on mobile for better touch experience */}
      <div className="hidden lg:snap-y lg:snap-mandatory">
        <div className="min-h-screen snap-start">
          <StrategyAdvisorySection />
        </div>

        <div className="min-h-screen snap-start">
          <StrategicCreativeSection />
        </div>

        <div className="min-h-screen snap-start">
          <ControlledMediaSection />
        </div>
      </div>

      {/* Mobile layout - stacked sections */}
      <div className="lg:hidden">
        <StrategyAdvisorySection />
        <StrategicCreativeSection />
        <ControlledMediaSection />
      </div>
    </section>
  );
}
