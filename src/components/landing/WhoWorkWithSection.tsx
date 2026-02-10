"use client";

export default function WhoYouWorkWithSection() {
  return (
    <section className="relative w-full bg-[#F5FFD8] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left: Text content */}
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

        {/* Right: 3-column visual/design/image */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center mt-0 md:mt-0">
              <h3 className="text-2xl font-semibold mb-4">Image</h3>
              <img src="/image1.jpg" alt="Image" className="w-32 h-32 object-cover rounded-lg" />
            </div>
            <div className="flex flex-col items-center mt-8 md:mt-40">
              <h3 className="text-2xl font-semibold mb-4">Visual</h3>
              <img src="/image2.jpg" alt="Visual" className="w-32 h-32 object-cover rounded-lg" />
            </div>
            <div className="flex flex-col items-center mt-0 md:mt-2">
              <h3 className="text-2xl font-semibold mb-4">Design</h3>
              <img src="/image3.jpg" alt="Design" className="w-32 h-32 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
