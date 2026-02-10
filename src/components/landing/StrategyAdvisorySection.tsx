"use client";

export default function StrategyAdvisorySection() {
  return (
    <section className="w-full min-h-screen lg:min-h-screen flex items-center bg-[#ECEAE6] py-32 lg:py-0">

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[760px]">
          {/* Heading */}
          <h2 className="text-4xl lg:text-[64px] font-semibold tracking-tight text-neutral-900">
            Strategy &amp; Advisory
          </h2>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-neutral-300" />

          {/* Intro copy */}
          <p className="mt-12 text-lg leading-8 text-neutral-900 max-w-[640px]">
            We advise institutions on how to communicate power responsibly.
          </p>

          {/* Focus areas */}
          <div className="mt-12">
            <p className="text-sm uppercase tracking-wide text-neutral-600">
              Our advisory work focuses on
            </p>

            <ul className="mt-6 space-y-4 text-base leading-7 text-neutral-700 max-w-[640px]">
              <li>Public affairs and institutional communication strategy</li>
              <li>Narrative and reputation frameworks</li>
              <li>Stakeholder and public perception analysis</li>
              <li>Leadership and crisis communication guidance</li>
              <li>Long-term trust and positioning strategy</li>
            </ul>
          </div>

          {/* Delivery model */}
          <p className="mt-16 text-sm leading-6 text-neutral-600 max-w-[560px]">
            This work is typically delivered through long-term mandates and
            retainers, in close collaboration with senior leadership.
          </p>
        </div>
      </div>
    </section>
  );
}
