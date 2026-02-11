"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#f8f7f4] overflow-hidden">
      
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#d6d3cc_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 md:pt-40 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-5xl lg:text-[64px] xl:text-[80px] leading-[1.05] font-semibold tracking-tight text-neutral-900"
        >
          Strategic Communication <br />
          for Power and Public Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-8 text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed"
        >
          We advise governments, institutions, and political stakeholders
          on narrative discipline, leadership positioning, and long-term
          legitimacy in environments shaped by scrutiny.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <button className="px-8 py-4 rounded-full bg-neutral-900 text-white text-base font-medium hover:bg-neutral-800 transition">
            Explore Capabilities
          </button>

          <button className="px-8 py-4 rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-200 transition">
            Contact Advisory Team
          </button>
        </motion.div>
      </div>

      {/* Floating Institutional Cards */}
      {/* Floating Institutional Card Ecosystem */}
{/* Floating Institutional Card Ecosystem */}
<div className="hidden lg:block absolute top-150 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6">
  <div className="relative flex justify-center items-end">

    {/* FAR LEFT SMALL */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity }}
      className="absolute -left-60 rotate-[-10deg] bg-white rounded-xl shadow-[0_25px_70px_-20px_rgba(0,0,0,0.15)] p-5 w-56 border border-neutral-200"
    >
      <p className="text-xs text-neutral-500">Public Affairs</p>
      <p className="mt-2 text-sm font-semibold text-neutral-900">
        Policy Positioning
      </p>
    </motion.div>

    {/* LEFT MID CONNECTOR (NEW) */}
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 8.5, repeat: Infinity }}
      className="absolute -left-24 rotate-[-6deg] bg-white rounded-xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.18)] p-6 w-64 border border-neutral-200 z-10"
    >
      <p className="text-xs text-neutral-500">Stakeholder Strategy</p>
      <p className="mt-2 text-sm font-semibold text-neutral-900">
        Perception Intelligence
      </p>
    </motion.div>

    {/* LEFT MEDIUM */}
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 8, repeat: Infinity }}
      className="absolute -left-8 rotate-[-4deg] bg-white rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.18)] p-6 w-80 border border-neutral-200 z-20"
    >
      <h4 className="text-sm text-neutral-500">Reputation Framework</h4>
      <p className="mt-3 text-lg font-semibold text-neutral-900">
        Institutional Narrative Design
      </p>
    </motion.div>

    {/* CENTER LARGE (PRIMARY) */}
    <motion.div
      animate={{ y: [0, -22, 0] }}
      transition={{ duration: 9, repeat: Infinity }}
      className="relative z-30 bg-white rounded-3xl shadow-[0_60px_160px_-30px_rgba(0,0,0,0.25)] p-10 w-[460px] border border-neutral-200"
    >
      <h4 className="text-sm text-neutral-500">
        Active Strategic Mandates
      </h4>

      <p className="mt-6 text-5xl font-semibold text-neutral-900">
        12+
      </p>
    </motion.div>

    {/* RIGHT MID CONNECTOR (NEW) */}
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 8.2, repeat: Infinity }}
      className="absolute right-[-6rem] rotate-[5deg] bg-white rounded-xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.18)] p-6 w-64 border border-neutral-200 z-10"
    >
      <p className="text-xs text-neutral-500">
        Governance Advisory
      </p>
      <p className="mt-2 text-sm font-semibold text-neutral-900">
        Long-Term Legitimacy
      </p>
    </motion.div>

    {/* RIGHT MEDIUM */}
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 7.5, repeat: Infinity }}
      className="absolute right-[-12rem] rotate-[6deg] bg-white rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.18)] p-6 w-80 border border-neutral-200 z-20"
    >
      <h4 className="text-sm text-neutral-500">
        Crisis Advisory
      </h4>
      <p className="mt-4 text-xl font-semibold text-neutral-900">
        High-Stakes Communication
      </p>
    </motion.div>

    {/* FAR RIGHT SMALL */}
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6.5, repeat: Infinity }}
      className="absolute right-[-20rem] rotate-[10deg] bg-white rounded-xl shadow-[0_25px_70px_-20px_rgba(0,0,0,0.15)] p-5 w-56 border border-neutral-200"
    >
      <p className="text-xs text-neutral-500">
        Media Architecture
      </p>
      <p className="mt-2 text-sm font-semibold text-neutral-900">
        Controlled Amplification
      </p>
    </motion.div>

  </div>
</div>


    </section>
  );
}
