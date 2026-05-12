"use client";

import { useEffect, useState } from 'react';
import { FaTools, FaLaptopCode} from 'react-icons/fa';
import { FaPeopleGroup } from "react-icons/fa6";
import { MdWork, MdEngineering } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import CardSwap, { Card } from '@/components/CardSwap'
import ExploreWorkBar from '@/components/ExploreWorkBar'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className=" relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-24 lg:pb-35 relative z-10">
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
              Paper Theory Networks delivers enterprise IT solutions and strategic communications that move businesses forward. From SAP transformations to brand campaigns — we build what matters.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Link href="#services" className="bg-[#f99216] text-white px-8 py-4 rounded-lg text-[18px] sm:text-[20px] font-semibold hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform w-full sm:w-auto inline-flex items-center justify-center gap-4" onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                window.history.pushState(null, '', '#services');
              }}>
                <FaPeopleGroup className="w-5 h-5 text-black" />
                <span>Build With Us →</span>
              </Link>
              <Link href="/communication" className="flex items-center justify-center sm:justify-start gap-3 text-[#111111] font-medium text-[18px] hover:text-[#f99216] transition-colors duration-300 group">
                <MdWork className="w-5 h-5 text-black" />
                View our Work
                <span className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-base group-hover:bg-[#f99216] group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </Link>
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
