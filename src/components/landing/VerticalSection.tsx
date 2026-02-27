"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function CapabilitiesSection() {
  const data = [
    {
      title: "01",
      content: (
        <div className="max-w-3xl">
          <h3 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold tracking-tight">
            <span className="text-[#111111]">Strategy & </span><span className="text-[#ff5a1f]">Advisory</span>
          </h3>

          <p className="mt-6 text-xl text-[#333333] leading-relaxed">
            We advise institutions on how to communicate <span className="text-[#ff5a1f] font-medium">power responsibly</span>.
          </p>

          <div className="mt-8 space-y-3">
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Public affairs</span> and institutional communication strategy</p>
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Narrative</span> and reputation frameworks</p>
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Stakeholder</span> and public perception analysis</p>
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Leadership</span> and crisis communication guidance</p>
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Long-term</span> trust and positioning strategy</p>
          </div>

          <p className="mt-8 text-[#ff5a1f] text-base leading-relaxed">
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
          <h3 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-medium tracking-tight">
            <span className="text-[#111111]">Strategic </span><span className="text-[#ff5a1f]">Creative</span><span className="text-[#111111]"> & Content</span>
          </h3>

          <p className="mt-6 text-xl text-[#333333] leading-relaxed font-medium">
            <span className="text-[#111111]">Strategy must translate into </span><span className="text-[#ff5a1f]">form</span>.
          </p>

          <p className="mt-4 text-xl text-[#444444] leading-relaxed">
            We design <span className="text-[#ff5a1f] font-medium">narrative-led</span> content and audio-visual communication that
            reflects institutional tone, message discipline, and strategic intent —
            across platforms and audiences.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Narrative-led</span> content systems</p>
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Audio-visual</span> storytelling</p>
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Leadership</span> and institutional storytelling</p>
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Issue-based</span> and campaign communication</p>
          </div>

          <p className="mt-6 text-[#ff5a1f] text-base leading-relaxed">
            Creative execution exists to serve strategy, not replace it.
          </p>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div className="max-w-xl">
          <h3 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-medium tracking-tight">
            <span className="text-[#111111]">Controlled </span><span className="text-[#ff5a1f]">Media</span><span className="text-[#111111]"> & Amplification</span>
          </h3>

          <p className="mt-6 text-xl text-[#333333] leading-relaxed font-medium">
            <span className="text-[#111111]">Amplification without </span><span className="text-[#ff5a1f]">discipline</span><span className="text-[#111111]"> weakens credibility.</span>
          </p>

          <p className="mt-4 text-xl text-[#444444] leading-relaxed">
            We manage distribution and media amplification <span className="text-[#ff5a1f] font-medium">selectively</span>,
            ensuring messages are delivered with accuracy, restraint,
            and contextual awareness.
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Strategic</span> media planning</p>
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Selective</span> influencer engagement</p>
            <p className="text-[#444444] hover:text-[#ff5a1f] transition-colors duration-300">• <span className="text-[#111111] font-medium">Message</span> protection and rollout discipline</p>
          </div>

          <p className="mt-6 text-[#ff5a1f] text-base leading-relaxed">
            Media is used when it strengthens trust — not simply to increase reach.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-[#ff5a1f] tracking-wide uppercase font-medium">
            Capabilities
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold tracking-tight">
            <span className="text-[#111111]">Verti</span><span className="text-[#ff5a1f]">cals</span>
          </h2>
          <div className="mt-8 h-px w-full bg-linear-to-r from-[#ff5a1f] to-[#111111]" />
        </div>

        <Timeline data={data} />
      </div>
    </section>
  );
}
