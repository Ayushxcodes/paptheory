import CardSwap, { Card } from '@/components/CardSwap'
import ExploreWorkBar from '@/components/ExploreWorkBar'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-[#f3f3f3] relative overflow-hidden">
      {/* Background SVG - Full Width */}
      <div className="absolute inset-0 w-full opacity-70">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Subtle geometric patterns */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111111" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#111111" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          
          {/* Background gradient */}
          <rect width="100%" height="100%" fill="url(#gradient1)"/>
          
          {/* More geometric shapes */}
          <circle cx="200" cy="150" r="80" fill="#ff5a1f" opacity="0.08"/>
          <circle cx="1000" cy="200" r="120" fill="#111111" opacity="0.06"/>
          <circle cx="800" cy="600" r="60" fill="#ff5a1f" opacity="0.10"/>
          <circle cx="150" cy="500" r="40" fill="#ff5a1f" opacity="0.06"/>
          <circle cx="1100" cy="350" r="90" fill="#111111" opacity="0.08"/>
          <circle cx="600" cy="100" r="50" fill="#ff5a1f" opacity="0.07"/>
          <circle cx="400" cy="700" r="70" fill="#111111" opacity="0.06"/>
          
          {/* Rectangles and squares */}
          <rect x="50" y="300" width="80" height="80" fill="#ff5a1f" opacity="0.05" transform="rotate(15 90 340)"/>
          <rect x="950" y="450" width="60" height="60" fill="#111111" opacity="0.06" transform="rotate(-20 980 480)"/>
          <rect x="750" y="150" width="40" height="40" fill="#ff5a1f" opacity="0.06" transform="rotate(45 770 170)"/>
          
          {/* Abstract lines */}
          <path d="M0 400 Q300 350 600 400 T1200 400" stroke="#111111" strokeWidth="1" opacity="0.25" fill="none"/>
          <path d="M0 500 Q400 450 800 500 T1200 500" stroke="#ff5a1f" strokeWidth="0.5" opacity="0.20" fill="none"/>
          <path d="M200 200 Q500 250 800 200 T1200 250" stroke="#111111" strokeWidth="0.8" opacity="0.15" fill="none"/>
          <path d="M0 600 Q300 550 600 600 T1200 550" stroke="#ff5a1f" strokeWidth="0.6" opacity="0.18" fill="none"/>
          <path d="M100 100 Q400 150 700 100 T1100 150" stroke="#111111" strokeWidth="0.7" opacity="0.13" fill="none"/>
          
          {/* Corner accents */}
          <polygon points="0,0 150,0 0,150" fill="#ff5a1f" opacity="0.06"/>
          <polygon points="1200,800 1050,800 1200,650" fill="#111111" opacity="0.08"/>
          <polygon points="1150,0 1200,0 1200,50" fill="#ff5a1f" opacity="0.07"/>
          <polygon points="0,750 50,800 0,800" fill="#111111" opacity="0.06"/>
          
          {/* Additional geometric elements */}
          <ellipse cx="300" cy="650" rx="60" ry="30" fill="#ff5a1f" opacity="0.06" transform="rotate(-15 300 650)"/>
          <ellipse cx="900" cy="80" rx="80" ry="40" fill="#111111" opacity="0.07" transform="rotate(25 900 80)"/>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-24 lg:pb-32 relative z-10">
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
  <Card className="bg-white border-2  p-0 overflow-hidden rounded-xl shadow-lg h-full">
    <div className="relative w-full h-full">
      <Image
        src="/image2.png"
        alt="Strategic Communication"
        fill
        className="object-cover"
      />
    </div>
  </Card>

  {/* CARD 2 */}
  <Card className="bg-white border-2 p-0 overflow-hidden rounded-xl shadow-lg h-full">
    <div className="relative w-full h-full">
      <Image
        src="/image20.jpeg"
        alt="Institutional Trust"
        fill
        className="object-cover"
      />
    </div>
  </Card>

  {/* CARD 3 */}
  <Card className="bg-white border-2 p-0 overflow-hidden rounded-xl shadow-lg h-full">
    <div className="relative w-full h-full">
      <Image
        src="/image3.jpeg"
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
