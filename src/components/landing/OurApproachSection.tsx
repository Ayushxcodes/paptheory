"use client";

import { useState } from "react";
import Stepper, { Step } from "@/components/Stepper";
import ExploreWorkBar from "@/components/ExploreWorkBar";
import { motion } from "framer-motion";

export default function OurApproach() {
  const [name, setName] = useState("");

  return (
    <section className="relative bg-gradient-to-br from-white via-purple-50 to-orange-50 pt-12 pb-20 sm:pt-20 sm:pb-24 lg:pt-2 lg:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,90,31,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(139,69,19,0.04),transparent_50%)]" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[620px]"
          >
            
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#111111] tracking-[-0.5px]">
              Our Approach
            </h2>

            <div className="mt-8 sm:mt-10 space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[18px] sm:text-[20px] leading-[30px] sm:leading-[34px] text-[#111111] font-medium"
              >
                We believe communication is not about volume or virality.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[18px] sm:text-[20px] leading-[30px] sm:leading-[34px] text-[#ff5a1f] font-semibold"
              >
                It is about trust, coherence, and restraint.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 sm:mt-12"
            >
              <p className="text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-[#6b6b6b]">
                Our work begins with understanding public sentiment, institutional context, and long-term consequences. From there, we design narratives and communication frameworks that align message, medium, and moment — ensuring credibility is built, not compromised.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 sm:mt-16 p-6 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-[#ff5a1f] rounded-r-lg"
            >
              <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#111111]">
                We do not react.
              </p>
              <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#ff5a1f] mt-2">
                We frame.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — STEPPER */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[500px] lg:ml-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-[#eaeaea] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              
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
                    className="mt-3 w-full border border-[#e5e5e5] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5a1f] transition-all duration-300"
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
          </motion.div>

        </div>
      </div>

      <ExploreWorkBar />
    </section>
  );
}
