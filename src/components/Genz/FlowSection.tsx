export default function FlowSection() {
  return (
    <section className="bg-[#FFD800] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        
        {/* TOP TEXT ROW */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <h2 className="text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.05] font-extrabold text-black tracking-[-1px] max-w-[520px]">
            Flow with the
            <br />
            moment
          </h2>

          <p className="text-[16px] sm:text-[18px] leading-[28px] text-black max-w-[420px] lg:ml-auto">
            Discover new friends without the pressure—see what you have in
            common, start fun or meaningful conversations, and connect naturally.
          </p>
        </div>

        {/* CARD ROW */}
        <div className="mt-16 lg:mt-20 relative">
          
          <div className="flex items-end gap-6 lg:gap-8">
            
            {/* CARD 1 */}
            <div className="w-[220px] sm:w-[240px] lg:w-[260px] aspect-[3/4] rounded-[28px] overflow-hidden shadow-lg">
              <img
                src="/image1.jpg"
                alt="Moment 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CARD 2 */}
            <div className="w-[240px] sm:w-[260px] lg:w-[280px] aspect-[3/4] rounded-[28px] overflow-hidden shadow-xl -translate-y-6">
              <img
                src="/image2.jpg"
                alt="Moment 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CARD 3 */}
            <div className="w-[260px] sm:w-[280px] lg:w-[300px] aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl -translate-y-12">
              <img
                src="/image3.jpg"
                alt="Moment 3"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CARD 4 */}
            <div className="w-[220px] sm:w-[240px] lg:w-[260px] aspect-[3/4] rounded-[28px] overflow-hidden shadow-lg">
              <img
                src="/image4.jpg"
                alt="Moment 4"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}