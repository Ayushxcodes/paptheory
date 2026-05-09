"use client";

import { useEffect, useState } from 'react';
import CardSwap, { Card } from '@/components/CardSwap'
import ExploreWorkBar from '@/components/ExploreWorkBar'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className=" relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-24 lg:pb-15 relative z-10">
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
              Where
              <br />
              Technology Meets,
              <span className="text-[#f99216] relative inline-block">
                Communication
                
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
              Paper Theory Networks delivers enterprise IT solutions and strategic communications that move businesses forward. From SAP transformations to brand campaigns — we build what matters.Explore IT services
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Link href="#services" className="bg-[#f99216] text-white px-6 py-3 rounded-md text-[16px] font-semibold hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform w-full sm:w-auto inline-flex items-center justify-center gap-3" onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                window.history.pushState(null, '', '#services');
              }}>
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="1.5" y="5" width="21" height="14" rx="3" fill="#ffff" />
                  <circle cx="7.5" cy="12" r="2" fill="#ffffff" />
                </svg>
                <span>Explore IT Services</span>
              </Link>

              <Link href="/communication" className="flex items-center justify-center sm:justify-start gap-3 text-[#111111] font-medium text-[16px] hover:text-[#f99216] transition-colors duration-300 group">
                View our Work
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm group-hover:bg-[#f99216] group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                  →
                </span>
              </Link>
            </div>

            <div className="mt-12 sm:mt-14">
              <p className="text-[18px] sm:text-[22px] text-[#6b6b6b] mb-6 font-semibold">
                Our Values
              </p>

              <div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-70">
                <span className="text-[18px] sm:text-[22px] font-bold">Strategy-led</span>
                <span className="text-[18px] sm:text-[22px] font-bold">Ethics-driven</span>
                <span className="text-[18px] sm:text-[22px] font-bold">
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
      
      {/* Stats Strip */}
      <div className="stats-strip max-w-[1200px] mx-auto px-6 lg:px-8 py-5 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="stat-cell text-center border border-gray-700  p-6 bg-white shadow-sm">
            <div className="num text-4xl md:text-5xl font-bold text-[#f99216] mb-2">
              <Counter value={12} />+
            </div>
            <div className="lbl text-sm text-[#6b6b6b]">
              Years of delivery experience across startups and enterprise
            </div>
          </div>
          <div className="stat-cell text-center border border-gray-700  p-6 bg-white shadow-sm">
            <div className="num text-4xl md:text-5xl font-bold text-[#f99216] mb-2">
              <Counter value={15} />+
            </div>
            <div className="lbl text-sm text-[#6b6b6b]">
              Enterprise projects delivered globally
            </div>
          </div>
          <div className="stat-cell text-center border border-gray-700  p-6 bg-white shadow-sm">
            <div className="num text-4xl md:text-5xl font-bold text-[#f99216] mb-2">
              <Counter value={4} />
            </div>
            <div className="lbl text-sm text-[#6b6b6b]">
              Global regions — India, Australia, Germany, US
            </div>
          </div>
        </div>
      </div> 
      <ExploreWorkBar/>   </section>
  );
}

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) {
      const t = window.setTimeout(() => setCount(value), 0);
      return () => clearTimeout(t);
    }

    const duration = 1000; // ms
    let rafId: number | null = null;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * value);
      setCount(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value]);

  return <span>{count}</span>;
}
