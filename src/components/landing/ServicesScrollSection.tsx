"use client";

import StrategyAdvisorySection from "./StrategyAdvisorySection";
import StrategicCreativeSection from "./StrategicCreativeSection";
import ControlledMediaSection from "./ControlledMediaSection";

export default function ServicesScrollSection() {
  return (
    <section className="relative">
      {/* Scroll-snap container */}
      <div className="snap-y snap-mandatory">
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
    </section>
  );
}
