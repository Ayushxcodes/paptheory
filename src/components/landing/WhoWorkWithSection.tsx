"use client";

export default function WhoYouWorkWithSection() {
  return (
    <section className="relative w-full bg-[#F5FFD8] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left visual */}
        <div className="relative">
          {/* Top image */}
          <div
            className="relative w-full h-[420px] overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 85%)",
            }}
          >
            <img
              src="/events-top.jpg"
              alt="Event venue"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Bottom image */}
          <div
            className="absolute left-1/2 -bottom-32 w-[520px] h-[360px] -translate-x-1/2 overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            }}
          >
            <img
              src="/events-bottom.jpg"
              alt="Event crowd"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="max-w-[520px]">
          <h2 className="text-[64px] font-semibold tracking-tight text-neutral-900">
            Who We Work With
          </h2>

          <p className="mt-10 text-base leading-7 text-neutral-700">
            Paper Theory Network works with organisations whose decisions and
            actions are visible, scrutinised, and consequential.
          </p>

          <ul className="mt-10 space-y-4 text-base leading-7 text-neutral-700">
            <li>Governments and public institutions</li>
            <li>Political leadership and senior advisors</li>
            <li>Corporations operating under public and regulatory scrutiny</li>
            <li>
              Financial, infrastructure, healthcare, education, and legacy
              institutions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
