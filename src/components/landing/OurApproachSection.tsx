"use client";

import { useState } from "react";
import Stepper, { Step } from "@/components/Stepper";
import ExploreWorkBar from "@/components/ExploreWorkBar";

export default function OurApproach() {
  const [name, setName] = useState("");

  return (
    <section className="bg-white pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <div className="max-w-[620px]">
            
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#111111] tracking-[-0.5px]">
              Our Approach
            </h2>

            <div className="mt-8 sm:mt-10 space-y-6">
              <p className="text-[18px] sm:text-[20px] leading-[30px] sm:leading-[34px] text-[#111111] font-medium">
                We believe communication is not about volume or virality.
              </p>

              <p className="text-[18px] sm:text-[20px] leading-[30px] sm:leading-[34px] text-[#ff5a1f] font-semibold">
                It is about trust, coherence, and restraint.
              </p>
            </div>

            <div className="mt-10 sm:mt-12">
              <p className="text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-[#6b6b6b]">
                Our work begins with understanding public sentiment, institutional context, and long-term consequences. From there, we design narratives and communication frameworks that align message, medium, and moment — ensuring credibility is built, not compromised.
              </p>
            </div>

            <div className="mt-12 sm:mt-16">
              <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#111111]">
                We do not react.
              </p>
              <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#ff5a1f] mt-2">
                We frame.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — STEPPER */}
          <div className="w-full max-w-[500px] lg:ml-auto">
            <div className="bg-white border border-[#eaeaea] rounded-2xl p-6 shadow-sm">
              
              <Stepper
                initialStep={1}
                onStepChange={(step) => console.log(step)}
                onFinalStepCompleted={() =>
                  console.log("All steps completed!")
                }
                backButtonText="Previous"
                nextButtonText="Next"
              >
                <Step>
                  <h3 className="text-lg font-semibold text-[#111111]">
                    Welcome
                  </h3>
                  <p className="text-sm text-[#6b6b6b] mt-2">
                    Communication begins with clarity.
                  </p>
                </Step>

                <Step>
                  <h3 className="text-lg font-semibold text-[#111111]">
                    Structured Thinking
                  </h3>
                  <p className="text-sm text-[#6b6b6b] mt-2">
                    Narrative must align with institutional intent.
                  </p>
                </Step>

                <Step>
                  <h3 className="text-lg font-semibold text-[#111111]">
                    Your Perspective
                  </h3>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name?"
                    className="mt-3 w-full border border-[#e5e5e5] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f]"
                  />
                </Step>

                <Step>
                  <h3 className="text-lg font-semibold text-[#111111]">
                    Final Step
                  </h3>
                  <p className="text-sm text-[#6b6b6b] mt-2">
                    Thought precedes amplification.
                  </p>
                </Step>
              </Stepper>

            </div>
          </div>

        </div>
      </div>

      <ExploreWorkBar />
    </section>
  );
}
