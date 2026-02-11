"use client";

import { motion } from "framer-motion";

export default function CapabilitiesSection() {
  return (
    <section className="relative py-20 md:py-40 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Intro */}
        <div className="max-w-3xl">
          <p className="text-sm text-neutral-500 tracking-wide uppercase">
            Capabilities
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Verticals
          </h2>
          <div className="mt-8 h-px w-full bg-neutral-200" />
        </div>

        {/* ================= PRIMARY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl"
        >
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Strategy & Advisory
          </h3>

          <p className="mt-8 text-xl text-neutral-700 leading-relaxed">
            We advise institutions on how to communicate power responsibly.
          </p>

          <div className="mt-10 space-y-3 text-neutral-600 text-lg">
            <p>Public affairs and institutional communication strategy</p>
            <p>Narrative and reputation frameworks</p>
            <p>Stakeholder and public perception analysis</p>
            <p>Leadership and crisis communication guidance</p>
            <p>Long-term trust and positioning strategy</p>
          </div>

          <p className="mt-10 text-neutral-500 text-base leading-relaxed">
            This work is typically delivered through long-term mandates and
            retainers, in close collaboration with senior leadership.
          </p>
        </motion.div>

        {/* ================= SECONDARY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 max-w-3xl"
        >
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
            Strategic Creative & Content
          </h3>

          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            Strategy must translate into form.
          </p>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            We design narrative-led content and audio-visual communication that
            reflects institutional tone, message discipline, and strategic intent —
            across platforms and audiences.
          </p>

          <div className="mt-8 space-y-2 text-neutral-600">
            <p>Narrative-led content systems</p>
            <p>Audio-visual storytelling</p>
            <p>Leadership and institutional storytelling</p>
            <p>Issue-based and campaign communication</p>
          </div>

          <p className="mt-8 text-neutral-500 text-sm leading-relaxed">
            Creative execution exists to serve strategy, not replace it.
          </p>
        </motion.div>

        {/* ================= TERTIARY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 max-w-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900">
            Controlled Media & Amplification
          </h3>

          <p className="mt-6 text-neutral-700 leading-relaxed">
            Amplification without discipline weakens credibility.
          </p>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            We manage distribution and media amplification selectively,
            ensuring messages are delivered with accuracy, restraint,
            and contextual awareness.
          </p>

          <div className="mt-8 space-y-2 text-neutral-600 text-sm">
            <p>Strategic media planning</p>
            <p>Selective influencer engagement</p>
            <p>Message protection and rollout discipline</p>
          </div>

          <p className="mt-8 text-neutral-500 text-sm leading-relaxed">
            Media is used when it strengthens trust — not simply to increase reach.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
