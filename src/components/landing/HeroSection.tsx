import CardSwap, { Card } from '@/components/CardSwap'
import ExploreWorkBar from '@/components/ExploreWorkBar'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#f3f3f3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div>
            <h3 className="
              text-[34px] 
              sm:text-[42px] 
              lg:text-[56px] 
              leading-[1.1] 
              lg:leading-[1.05] 
              font-extrabold 
              text-[#111111] 
              tracking-[-0.5px] 
              lg:tracking-[-1px]
            ">
              Strategic Communication for 
              <br />
              Institutions, Influence,{" "}
              <span className="text-[#ff5a1f] relative inline-block">
                and Public Trust
                <span className="absolute -top-2 -right-3 w-2 h-2 bg-[#ff5a1f]" />
              </span>
            </h3>

            <p className="
              mt-6 sm:mt-8 
              text-[16px] 
              sm:text-[18px] 
              leading-[26px] 
              sm:leading-[30px] 
              text-[#6b6b6b] 
              max-w-[520px]
            ">
              We work with governments, political stakeholders, large institutions, and private sector brands to shape narrative, manage reputation, and communicate responsibly in the public domain.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Link href="/genz" className="bg-[#ff5a1f] text-white px-8 py-4 rounded-md text-[16px] font-semibold hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform w-full sm:w-auto">
                Book a demo →
              </Link>

              <Link href="/genz" className="flex items-center justify-center sm:justify-start gap-3 text-[#111111] font-medium text-[16px] hover:text-[#ff5a1f] transition-colors duration-300 group">
                Book a call
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm group-hover:bg-[#ff5a1f] group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                  →
                </span>
              </Link>
            </div>

            <div className="mt-12 sm:mt-14">
              <p className="text-[14px] text-[#6b6b6b] mb-6">
                Our Values
              </p>

              <div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-70">
                <span className="text-[13px] font-semibold">Strategy-led</span>
                <span className="text-[13px] font-semibold">Ethics-driven</span>
                <span className="text-[13px] font-semibold">
                  Built for long-term credibility
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Hidden Below lg */}
          <div
            style={{ height: '600px', position: 'relative' }}
            className="hidden lg:block lg:-mt-38"
          >
            <CardSwap
  cardDistance={60}
  verticalDistance={70}
  delay={5000}
  pauseOnHover={false}
>
  {/* CARD 1 */}
  <Card className="bg-white border-2 border-[#ff5a1f] p-0 overflow-hidden rounded-xl shadow-lg h-full">
    <div className="relative w-full h-full">
      <Image
        src="/image5.jpg"
        alt="Strategic Communication"
        fill
        className="object-cover"
      />
    </div>
  </Card>

  {/* CARD 2 */}
  <Card className="bg-white border-2 border-[#ff5a1f] p-0 overflow-hidden rounded-xl shadow-lg h-full">
    <div className="relative w-full h-full">
      <Image
        src="/image7.jpg"
        alt="Institutional Trust"
        fill
        className="object-cover"
      />
    </div>
  </Card>

  {/* CARD 3 */}
  <Card className="bg-white border-2 border-[#ff5a1f] p-0 overflow-hidden rounded-xl shadow-lg h-full">
    <div className="relative w-full h-full">
      <Image
        src="/image6.jpg"
        alt="Public Domain"
        fill
        className="object-cover"
      />
    </div>
  </Card>
</CardSwap>
          </div>

        </div>
      </div>
      <ExploreWorkBar />
    </section>
  );
}
