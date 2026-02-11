"use client";

import { motion } from "framer-motion";

export default function SelectedWorkSection() {
  return (
    <section className="relative py-20 md:py-40 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-neutral-500">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Selected Work
          </h2>

          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            Our work spans political communication, institutional
            narrative-building, and strategic creative campaigns. The examples
            below reflect how we apply strategic thinking across contexts —
            not a catalogue of outputs.
          </p>

          <div className="mt-10 h-px w-full bg-neutral-300" />
        </div>

        {/* ================= CASE STUDY 1 ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">

            {/* Left Label Column */}
            <div className="text-sm text-neutral-500 uppercase tracking-wide">
              Case Study I
            </div>

            {/* Right Content */}
            <div className="md:col-span-2 space-y-14">

              {/* 1. Context */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-900">
                  Context
                </h4>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  A nationally significant institution faced heightened public
                  scrutiny following a period of policy transition. The
                  communication challenge was not volume — but coherence.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Institutional credibility and long-term public trust were at stake.
                </p>
              </div>

              {/* 2. Strategic Intent */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-900">
                  Strategic Intent
                </h4>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  Public perception needed to shift from reactive defense to
                  steady institutional leadership.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  A measured narrative framework was chosen to reinforce
                  continuity, competence, and long-term vision.
                </p>
              </div>

              {/* 3. Our Role */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-900">
                  Our Role
                </h4>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  Lead strategic advisory mandate, narrative framework design,
                  leadership positioning, and controlled media amplification.
                </p>
              </div>

              {/* 4. Outcome */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-900">
                  Outcome
                </h4>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  Institutional messaging became aligned across departments,
                  public briefings regained coherence, and media narratives
                  shifted toward long-term governance stability rather than
                  short-term controversy.
                </p>
              </div>

            </div>
          </div>

          <div className="mt-20 h-px w-full bg-neutral-200" />
        </motion.div>

        {/* ================= CASE STUDY 2 ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">

            <div className="text-sm text-neutral-500 uppercase tracking-wide">
              Case Study II
            </div>

            <div className="md:col-span-2 space-y-14">

              {/* 1. Context */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-900">
                  Context
                </h4>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  A private sector organisation operating under regulatory
                  scrutiny required a repositioning of its institutional
                  narrative.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  The reputational stakes involved investor confidence,
                  regulatory relationships, and long-term market credibility.
                </p>
              </div>

              {/* 2. Strategic Intent */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-900">
                  Strategic Intent
                </h4>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  The objective was to reframe the organisation as a stable,
                  responsible long-term actor rather than a reactive commercial entity.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  The approach prioritised disciplined messaging, executive
                  positioning, and narrative coherence across stakeholder groups.
                </p>
              </div>

              {/* 3. Our Role */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-900">
                  Our Role
                </h4>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  Strategic advisory, executive communication frameworks,
                  narrative-led creative direction, and selective amplification planning.
                </p>
              </div>

              {/* 4. Outcome */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-900">
                  Outcome
                </h4>
                <p className="mt-4 text-neutral-700 leading-relaxed">
                  Public positioning stabilised, leadership communication
                  gained clarity, and institutional credibility strengthened
                  among regulatory and financial stakeholders.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
