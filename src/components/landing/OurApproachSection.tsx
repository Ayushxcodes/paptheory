"use client";

export default function OurApproachSection() {
  return (
    <section className="w-full bg-[#ECEAE6] py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left content */}
          <div className="max-w-[520px]">
            {/* Section title */}
            <h2 className="text-[64px] font-semibold tracking-tight text-neutral-900">
              Our Approach
            </h2>

            {/* Divider */}
            <div className="mt-8 h-px w-full bg-neutral-300" />

            {/* Core copy */}
            <div className="mt-10 space-y-6 text-base leading-7 text-neutral-700">
              <p className="text-neutral-900">
                We believe communication is not about volume or virality.
                <br />
                It is about trust, coherence, and restraint.
              </p>

              <p>
                Our work begins with understanding public sentiment,
                institutional context, and long-term consequences. From there,
                we design narratives and communication frameworks that align
                message, medium, and moment — ensuring credibility is built, not
                compromised.
              </p>
            </div>

            {/* Framing statement */}
            <div className="mt-12">
              <p className="text-2xl font-medium tracking-tight text-neutral-900">
                We do not react.
                <br />
                We frame.
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative w-full h-[420px] overflow-hidden bg-[#F4F2EF]">
            <img
              src="/approach-visual.png"
              alt="Abstract conceptual graphic"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
