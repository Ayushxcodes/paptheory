import ReflectiveCard from '@/components/ReflectiveCard';
import ExploreWorkBar from '@/components/ExploreWorkBar';

export default function WhoWeWorkWith() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-0 items-center">
          
          {/* LEFT SIDE — Hidden below lg */}
          {/* LEFT SIDE — Pyramid Videos */}
<div className="hidden lg:flex justify-start">
  <div className="w-full max-w-[520px]">

    {/* TOP VIDEO */}
    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <iframe
        loading="lazy"
        title="Video 1"
        src="https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?autoplay=1&muted=1&loop=1&playsinline=1"
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      />
    </div>

    {/* BOTTOM ROW */}
    <div className="mt-6 grid grid-cols-2 gap-6">
      
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          loading="lazy"
          title="Video 2"
          src="https://play.gumlet.io/embed/6985d218742559dc5a11a435?autoplay=1&muted=1&loop=1&playsinline=1"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        />
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          loading="lazy"
          title="Video 3"
          src="https://play.gumlet.io/embed/6985d2184db88a967f203e86?autoplay=1&muted=1&loop=1&playsinline=1"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        />
      </div>

    </div>

  </div>
</div>

          {/* RIGHT SIDE CONTENT */}
          <div className="max-w-[620px] ml-auto">
            
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#111111] tracking-[-0.5px]">
              Who We Work With
            </h2>

            <p className="mt-6 sm:mt-8 text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] text-[#6b6b6b]">
              Paper Theory Network works with organisations whose decisions 
              and actions are visible, scrutinised, and consequential.
            </p>

            <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
              
              <div className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 bg-[#ff5a1f]" />
                <p className="text-[15px] sm:text-[16px] text-[#111111]">
                  Governments and public institutions
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 bg-[#ff5a1f]" />
                <p className="text-[15px] sm:text-[16px] text-[#111111]">
                  Political leadership and senior advisors
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 bg-[#ff5a1f]" />
                <p className="text-[15px] sm:text-[16px] text-[#111111]">
                  Corporations operating under public and regulatory scrutiny
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-2 w-2 h-2 bg-[#ff5a1f]" />
                <p className="text-[15px] sm:text-[16px] text-[#111111]">
                  Financial, infrastructure, healthcare, education, and legacy institutions
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
      <ExploreWorkBar />
    </section>
  );
}
