"use client";

export default function VerticalsSection() {
  return (
    <section className="w-full bg-white py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section title */}
        <h2 className="text-[64px] font-semibold tracking-tight text-neutral-900">
          Capabilities
        </h2>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-neutral-300" />

        {/* Vertical stack */}
        <div className="mt-20 space-y-24">
          {/* Strategy */}
          <div className="max-w-[720px]">
            <h3 className="text-[48px] font-semibold tracking-tight text-neutral-900">
              Strategy
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-800">
              We advise at moments where clarity matters most. Our strategy work
              focuses on framing complex realities, aligning leadership, and
              defining long-term narrative direction before words ever reach the
              public.
            </p>

            <p className="mt-4 text-base leading-7 text-neutral-600">
              This includes public positioning, stakeholder mapping, risk
              anticipation, and institutional narrative design.
            </p>
          </div>

          {/* Communications */}
          <div className="max-w-[640px]">
            <h3 className="text-[36px] font-medium tracking-tight text-neutral-900">
              Communications
            </h3>

            <p className="mt-4 text-base leading-7 text-neutral-700">
              We translate strategy into disciplined communication frameworks —
              ensuring message, medium, and timing reinforce credibility rather
              than erode it.
            </p>
          </div>

          {/* Engagement */}
          <div className="max-w-[560px]">
            <h3 className="text-[28px] font-medium tracking-tight text-neutral-900">
              Engagement
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              We support moments of public interaction where trust is tested —
              from high-stakes announcements to long-term institutional
              engagement with media, partners, and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
