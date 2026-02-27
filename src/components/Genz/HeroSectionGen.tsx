"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF6D6] flex items-center justify-center">

      {/* 🌈 Vibrant Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.35),transparent_40%)]" />

      {/* ================= CENTER TEXT ================= */}
      <div className="relative z-20 text-center max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-black leading-[0.95] text-black"
        >
          Good brands are remembered
          <br />
          <span className="text-yellow-500 drop-shadow-[4px_4px_0px_black]">
             Great brands are felt. 
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl text-black/70 max-w-2xl mx-auto"
        >
          We build brands Gen Z actually cares about.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Make Me Viral
          </button>
          <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
            Let’s Build Culture
          </button>
        </motion.div>
      </div>

      {/* ================= VIDEOS ================= */}

      {/* Left Top */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="hidden md:block absolute left-[5%] top-[15%] w-[380px] aspect-video rotate-[-8deg] rounded-3xl overflow-hidden shadow-2xl"
      >
        <iframe
          src="https://play.gumlet.io/embed/68010085fc3cb0b3238a62f0?autoplay=1&muted=1&loop=1"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      </motion.div>

      {/* Right Top */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="hidden md:block absolute right-[6%] top-[18%] w-[420px] aspect-video rotate-[8deg] rounded-3xl overflow-hidden shadow-2xl"
      >
        <iframe
          src="https://play.gumlet.io/embed/680100853ab3a7b826bb5392?autoplay=1&muted=1&loop=1"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      </motion.div>

      {/* Left Bottom */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="hidden md:block absolute left-[15%] bottom-[10%] w-[300px] aspect-video rotate-[6deg] rounded-2xl overflow-hidden shadow-xl"
      >
        <iframe
          src="https://play.gumlet.io/embed/680100853f934d7b33b2d511?autoplay=1&muted=1&loop=1"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      </motion.div>

      {/* Right Bottom (Different Ratio) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="hidden md:block absolute right-[18%] bottom-[12%] w-[340px] aspect-[135/76] rotate-[-6deg] rounded-2xl overflow-hidden shadow-xl"
      >
        <iframe
          src="https://play.gumlet.io/embed/680104cd3f934d7b33b2f50e?autoplay=1&muted=1&loop=1"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      </motion.div>

      {/* ================= TAGS ================= */}

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-[8%] left-[35%] bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg rotate-[-12deg]"
      >
        Real Ones Only ✌️
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-[18%] right-[32%] bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-md rotate-[8deg]"
      >
        No Filters 🔥
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-[45%] left-[10%] bg-black text-white px-3 py-1 rounded-full text-xs font-medium rotate-[15deg]"
      >
        100% Vibes
      </motion.div>

      {/* ================= ARROWS ================= */}

      <motion.svg
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-[22%] right-[28%] w-20 h-20 text-black"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      >
        <path d="M10 50 Q50 10 90 50" />
        <polyline points="75,35 90,50 75,65" />
      </motion.svg>

      {/* ================= SWIGGLY LINE ================= */}

      <motion.svg
        animate={{ x: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-[25%] left-[40%] w-32 h-16 text-pink-500"
        viewBox="0 0 200 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      >
        <path d="M0 25 Q25 0 50 25 T100 25 T150 25 T200 25" />
      </motion.svg>

    </section>
  );
}