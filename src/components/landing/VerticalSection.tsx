"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function CapabilitiesSection() {
  const data = [
    {
      title: "01",
      content: (
        <div className="max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111111]">
            Strategy & Advisory
          </h3>

          <p className="mt-6 text-lg text-[#333333] leading-relaxed">
            We advise institutions on how to communicate power responsibly.
          </p>

          <div className="mt-8 space-y-3 text-[#444444]">
            <p>Public affairs and institutional communication strategy</p>
            <p>Narrative and reputation frameworks</p>
            <p>Stakeholder and public perception analysis</p>
            <p>Leadership and crisis communication guidance</p>
            <p>Long-term trust and positioning strategy</p>
          </div>

          <p className="mt-8 text-[#6b6b6b] text-sm leading-relaxed">
            This work is typically delivered through long-term mandates and
            retainers, in close collaboration with senior leadership.
          </p>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#111111]">
            Strategic Creative & Content
          </h3>

          <p className="mt-6 text-[#333333] leading-relaxed font-medium">
            Strategy must translate into form.
          </p>

          <p className="mt-4 text-[#444444] leading-relaxed">
            We design narrative-led content and audio-visual communication that
            reflects institutional tone, message discipline, and strategic intent —
            across platforms and audiences.
          </p>

          <div className="mt-6 space-y-2 text-[#444444] text-sm">
            <p>Narrative-led content systems</p>
            <p>Audio-visual storytelling</p>
            <p>Leadership and institutional storytelling</p>
            <p>Issue-based and campaign communication</p>
          </div>

          <p className="mt-6 text-[#6b6b6b] text-sm leading-relaxed">
            Creative execution exists to serve strategy, not replace it.
          </p>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div className="max-w-xl">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#111111]">
            Controlled Media & Amplification
          </h3>

          <p className="mt-6 text-[#333333] leading-relaxed font-medium">
            Amplification without discipline weakens credibility.
          </p>

          <p className="mt-4 text-[#444444] leading-relaxed">
            We manage distribution and media amplification selectively,
            ensuring messages are delivered with accuracy, restraint,
            and contextual awareness.
          </p>

          <div className="mt-6 space-y-2 text-[#444444] text-sm">
            <p>Strategic media planning</p>
            <p>Selective influencer engagement</p>
            <p>Message protection and rollout discipline</p>
          </div>

          <p className="mt-6 text-[#6b6b6b] text-sm leading-relaxed">
            Media is used when it strengthens trust — not simply to increase reach.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm text-[#ff5a1f] tracking-wide uppercase font-medium">
            Capabilities
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#111111]">
            Verticals
          </h2>
          <div className="mt-8 h-px w-full bg-[#ff5a1f]" />
        </div>

        <Timeline data={data} />
      </div>
    </section>
  );
}
