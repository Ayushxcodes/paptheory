"use client";

import { useState } from "react";

const contentKeys = ["strategy", "creative", "media"] as const;
type ContentKey = typeof contentKeys[number];

export default function VerticalsSection() {
  const [active, setActive] = useState<ContentKey>("strategy");

  const content = {
    strategy: {
      title: "Strategy & Advisory",
      body: (
        <>
          <p className="text-lg leading-8 text-neutral-800">
            We advise institutions on how to communicate power responsibly.
          </p>

          <p className="mt-6 text-base leading-7 text-neutral-600">
            Our advisory work focuses on:
          </p>

          <ul className="mt-4 space-y-2 text-base leading-7 text-neutral-700">
            <li>Public affairs and institutional communication strategy</li>
            <li>Narrative and reputation frameworks</li>
            <li>Stakeholder and public perception analysis</li>
            <li>Leadership and crisis communication guidance</li>
            <li>Long-term trust and positioning strategy</li>
          </ul>

          <p className="mt-6 text-base leading-7 text-neutral-600">
            This work is typically delivered through long-term mandates and
            retainers, in close collaboration with senior leadership.
          </p>
        </>
      ),
    },

    creative: {
      title: "Strategic Creative & Content",
      body: (
        <>
          <p className="text-lg leading-8 text-neutral-800">
            Strategy must translate into form.
          </p>

          <p className="mt-6 text-base leading-7 text-neutral-700">
            We design narrative-led content and audio-visual communication that
            reflects institutional tone, message discipline, and strategic intent —
            across platforms and audiences.
          </p>

          <ul className="mt-6 space-y-2 text-base leading-7 text-neutral-700">
            <li>Narrative-led content systems</li>
            <li>Audio-visual storytelling</li>
            <li>Leadership and institutional storytelling</li>
            <li>Issue-based and campaign communication</li>
          </ul>

          <p className="mt-6 text-base leading-7 text-neutral-600">
            Creative execution exists to serve strategy, not replace it.
          </p>
        </>
      ),
    },

    media: {
      title: "Controlled Media & Amplification",
      body: (
        <>
          <p className="text-lg leading-8 text-neutral-800">
            Amplification without discipline weakens credibility.
          </p>

          <p className="mt-6 text-base leading-7 text-neutral-700">
            We manage distribution and media amplification selectively,
            ensuring messages are delivered with accuracy, restraint,
            and contextual awareness.
          </p>

          <ul className="mt-6 space-y-2 text-base leading-7 text-neutral-700">
            <li>Strategic media planning</li>
            <li>Selective influencer engagement</li>
            <li>Message protection and rollout discipline</li>
          </ul>

          <p className="mt-6 text-base leading-7 text-neutral-600">
            Media is used when it strengthens trust — not simply to increase reach.
          </p>
        </>
      ),
    },
  };

  return (
    <section className="w-full bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl lg:text-[64px] font-semibold tracking-tight text-neutral-900">
          Capabilities
        </h2>

        <div className="mt-12 h-px w-full bg-neutral-300" />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Navigation */}
          <div className="space-y-8">
            {contentKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`block text-left transition-all duration-200 ${
                  key === "strategy"
                    ? "text-3xl lg:text-4xl"
                    : "text-2xl lg:text-3xl"
                } ${
                  active === key
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {content[key].title}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="max-w-2xl">
            <h3
              className={`tracking-tight text-neutral-900 ${
                active === "strategy"
                  ? "text-4xl lg:text-[52px] font-semibold"
                  : "text-3xl lg:text-[40px] font-medium"
              }`}
            >
              {content[active].title}
            </h3>

            <div className="mt-8">{content[active].body}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
