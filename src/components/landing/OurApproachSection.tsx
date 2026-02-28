"use client";

import ExploreWorkBar from "@/components/ExploreWorkBar";
import { motion } from "framer-motion";

export default function OurApproach() {

  return (
    <section className="relative bg-gradient-to-br from-white via-purple-50 to-orange-50 pt-20 pb-28 sm:pt-28 sm:pb-32 lg:pt-16 lg:pb-36 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,90,31,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(139,69,19,0.04),transparent_50%)]" />

      {/* SVG Background */}
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
            <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111111" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#111111" stopOpacity="0.05"/>
            </linearGradient>
          </defs>

          {/* Background gradient */}
          <rect width="100%" height="100%" fill="url(#gradient3)"/>

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

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[620px]"
          >
            
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#111111] tracking-[-0.5px]">
              Our Approach
            </h2>

            <div className="mt-8 sm:mt-10 space-y-6">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[18px] sm:text-[20px] leading-[30px] sm:leading-[34px] text-[#111111] font-medium"
              >
                We believe communication is not about volume or virality.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[18px] sm:text-[20px] leading-[30px] sm:leading-[34px] text-[#ff5a1f] font-semibold"
              >
                It is about trust, coherence, and restraint.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 sm:mt-12"
            >
              <p className="text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-[#6b6b6b]">
                Our work begins with understanding public sentiment, institutional context, and long-term consequences. From there, we design narratives and communication frameworks that align message, medium, and moment — ensuring credibility is built, not compromised.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 sm:mt-16 p-6 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-[#ff5a1f] rounded-r-lg"
            >
              <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#111111]">
                We do not react.
              </p>
              <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#ff5a1f] mt-2">
                We frame.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[500px] lg:ml-auto pt-40 hidden lg:block"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                loading="lazy"
                title="Our Approach Video"
                src="https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?autoplay=1&muted=1&loop=1&playsinline=1"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              />
            </div>
          </motion.div>

        </div>
      </div>

      
    </section>
  );
}
