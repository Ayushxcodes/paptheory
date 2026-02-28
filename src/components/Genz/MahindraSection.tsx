"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GenZPaymentsSection() {
  return (
    <section className="bg-[#f3f3f3] py-12 md:py-20 lg:py-28">

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
        <div className="relative mt-8 md:mt-16">
          <div className="border-t border-black/20" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 text-black text-lg md:text-xl">
            ✦
          </div>
        </div>

        {/* TOP VISUAL BLOCK */}
        <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 h-[280px] sm:h-[320px] md:h-[420px] pt-10">

         

          {/* Right Video Side */}
          <div className="relative flex items-center justify-center overflow-hidden">
            {/* Video Container - Full Coverage */}
            <div className="relative w-full h-full">
              <iframe
                loading="lazy"
                title="Mahindra Video"
                src="https://play.gumlet.io/embed/680104cd3f934d7b33b2f50e?autoplay=1&muted=1&loop=1&playsinline=1"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              />
            </div>
          </div>

          {/* Desktop Text Block - Right Side */}
          <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 flex-col items-end text-right text-black max-w-md">
            <p className="text-lg md:text-xl mb-6 font-medium">
              Join the fastest growing financial platform.
              Faster payments processor and new benefits.
            </p>

            <div className="flex gap-4 flex-wrap justify-end">
              <Link href="/contact">
                <button className="bg-lime-400 hover:bg-lime-300 transition px-6 py-3 rounded-xl font-medium flex items-center gap-2 text-black">
                  Contact us →
                </button>
              </Link>

              <Link href="/works">
                <button className="bg-white text-black hover:bg-gray-100 transition px-6 py-3 rounded-xl font-medium">
                  How it works
                </button>
              </Link>
            </div>
          </div>

        </div>

        {/* Mobile Text Block - Below Video */}
        <div className="md:hidden mt-8 text-center">
          <p className="text-base sm:text-lg font-medium text-black max-w-md mx-auto px-4">
            Join the fastest growing financial platform.
            Faster payments processor and new benefits.
          </p>

          <div className="flex gap-3 flex-wrap justify-center mt-4 px-4">
            <Link href="/contact">
              <button className="bg-lime-400 hover:bg-lime-300 transition px-4 py-2 rounded-xl font-medium flex items-center gap-2 text-black text-sm">
                Contact us →
              </button>
            </Link>

            <Link href="/works">
              <button className="bg-white text-black hover:bg-gray-100 transition px-4 py-2 rounded-xl font-medium text-sm">
                How it works
              </button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        

        {/* Partner Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mt-8 md:mt-12">

          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex -space-x-2 md:-space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 border-2 border-white" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-400 border-2 border-white" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-500 border-2 border-white" />
            </div>
            
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 text-lg md:text-xl font-medium text-black justify-center md:justify-end">
            <span>Maruti Suzuki</span>
          </div>

        </div>

      </div>
    </section>
  );
}