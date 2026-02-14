"use client";

import Link from "next/link";

export default function SelectedWorkSection() {
  return (
    <section className="relative py-20 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-[#ff5a1f] font-medium">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#111111]">
            Selected Work
          </h2>

          <p className="mt-6 text-lg text-[#555555] leading-relaxed">
            Our work spans political communication, institutional
            narrative-building, and strategic creative campaigns. The examples
            below reflect how we apply strategic thinking across contexts —
            not a catalogue of outputs.
          </p>

          <div className="mt-10 h-px w-full bg-[#ff5a1f]/30" />
        </div>

        {/* STACK WRAPPER */}
        <div className="relative mt-32 space-y-32">

          {/* ================= CARD 1 ================= */}
          <div className="sticky top-24 z-10">
            <div className="bg-white rounded-3xl shadow-lg p-10 md:p-16 border border-[#ff5a1f]/20">

              <div className="grid md:grid-cols-3 gap-8 md:gap-16">
                <div className="text-sm text-[#ff5a1f] uppercase tracking-wide font-medium">
                  Case Study I
                </div>

                <div className="md:col-span-2 space-y-12">

                  <div>
                    <h4 className="text-xl font-semibold text-[#111111]">
                      Context
                    </h4>
                    <p className="mt-4 text-[#555555] leading-relaxed">
                      A nationally significant institution faced heightened public
                      scrutiny following a period of policy transition. The
                      communication challenge was not volume — but coherence.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#111111]">
                      Strategic Intent
                    </h4>
                    <p className="mt-4 text-[#555555] leading-relaxed">
                      Public perception needed to shift from reactive defense to
                      steady institutional leadership.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#111111]">
                      Our Role
                    </h4>
                    <p className="mt-4 text-[#555555] leading-relaxed">
                      Lead strategic advisory mandate, narrative framework design,
                      and leadership positioning.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#111111]">
                      Outcome
                    </h4>
                    <p className="mt-4 text-[#555555] leading-relaxed">
                      Institutional messaging aligned across departments and
                      public briefings regained coherence.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="sticky top-28 z-20">
            <div className="bg-white rounded-3xl shadow-lg p-10 md:p-16 border border-[#ff5a1f]/20">

              <div className="grid md:grid-cols-3 gap-8 md:gap-16">
                <div className="text-sm text-[#ff5a1f] uppercase tracking-wide font-medium">
                  Case Study II
                </div>

                <div className="md:col-span-2 space-y-12">

                  <div>
                    <h4 className="text-xl font-semibold text-[#111111]">
                      Context
                    </h4>
                    <p className="mt-4 text-[#555555] leading-relaxed">
                      A private sector organisation operating under regulatory scrutiny
                      required narrative repositioning.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#111111]">
                      Strategic Intent
                    </h4>
                    <p className="mt-4 text-[#555555] leading-relaxed">
                      Reframe the organisation as a stable, responsible long-term actor.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#111111]">
                      Our Role
                    </h4>
                    <p className="mt-4 text-[#555555] leading-relaxed">
                      Strategic advisory, executive frameworks, and narrative-led direction.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#111111]">
                      Outcome
                    </h4>
                    <p className="mt-4 text-[#555555] leading-relaxed">
                      Leadership communication gained clarity and credibility strengthened.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="absolute bottom-0 left-0 w-full h-7  bg-[#ff5a1f] flex items-center justify-center">
        <Link
          href="/capabilities"
          className="text-white text-sm hover:opacity-80 transition"
        >
          Explore Our Work ↓
        </Link>
      </div>
    </section>
  );
}
