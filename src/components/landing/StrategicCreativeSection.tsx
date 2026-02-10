"use client";

export default function StrategicCreativeSection() {
  return (
    <section className="w-full bg-white py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[700px]">
          {/* Heading */}
          <h2 className="text-3xl lg:text-[52px] font-semibold tracking-tight text-neutral-900">
            Strategic Creative &amp; Content
          </h2>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-neutral-300" />

          {/* Intro copy */}
          <p className="mt-10 text-base leading-7 text-neutral-900 max-w-[620px]">
            Strategy must translate into form.
          </p>

          <p className="mt-4 text-base leading-7 text-neutral-700 max-w-[620px]">
            We design narrative-led content and audio-visual communication that
            reflects institutional tone, message discipline, and strategic
            intent — across platforms and audiences.
          </p>

          {/* Inclusions */}
          <div className="mt-12">
            <p className="text-sm uppercase tracking-wide text-neutral-600">
              This includes
            </p>

            <ul className="mt-6 space-y-4 text-base leading-7 text-neutral-700 max-w-[620px]">
              <li>Narrative-led content systems</li>
              <li>Audio-visual storytelling</li>
              <li>Leadership and institutional storytelling</li>
              <li>Issue-based and campaign communication</li>
            </ul>
          </div>

          {/* Framing statement */}
          <p className="mt-14 text-sm leading-6 text-neutral-600 max-w-[560px]">
            Creative execution exists to serve strategy, not replace it.
          </p>
        </div>
      </div>
    </section>
  );
}
