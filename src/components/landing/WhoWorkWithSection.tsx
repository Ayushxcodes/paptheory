import ReflectiveCard from '@/components/ReflectiveCard';
import ExploreWorkBar from '@/components/ExploreWorkBar';
import { motion } from 'framer-motion';

export default function WhoWeWorkWith() {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-orange-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,90,31,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(17,17,17,0.05),transparent_60%)]" />

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
            <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111111" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#111111" stopOpacity="0.05"/>
            </linearGradient>
          </defs>

          {/* Background gradient */}
          <rect width="100%" height="100%" fill="url(#gradient2)"/>

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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-0 items-center">
          
          {/* LEFT SIDE — Hidden below lg */}
          {/* LEFT SIDE — Pyramid Videos */}
<div className="hidden lg:flex justify-start">
  <div className="w-full max-w-[520px]">

    {/* TOP VIDEO */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <iframe
        loading="lazy"
        title="Video 1"
        src="https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?autoplay=1&muted=1&loop=1&playsinline=1"
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      />
    </motion.div>

    {/* BOTTOM ROW */}
    <div className="mt-6 grid grid-cols-2 gap-6">
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <iframe
          loading="lazy"
          title="Video 2"
          src="https://play.gumlet.io/embed/6985d218742559dc5a11a435?autoplay=1&muted=1&loop=1&playsinline=1"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <iframe
          loading="lazy"
          title="Video 3"
          src="https://play.gumlet.io/embed/6985d2184db88a967f203e86?autoplay=1&muted=1&loop=1&playsinline=1"
          className="absolute inset-0 w-full h-full border-0 object-cover"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        />
      </motion.div>

    </div>

  </div>
</div>

          {/* CENTER CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[580px] mx-auto text-center lg:text-left"
          >
            
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#111111] tracking-[-0.5px]">
              Who We Work With
            </h2>

            <p className="mt-6 sm:mt-8 text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] text-[#6b6b6b]">
              Paper Theory Network works with organisations whose decisions 
              and actions are visible, scrutinised, and consequential.
            </p>

            <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4 justify-center lg:justify-start group"
              >
                <span className="mt-2 w-3 h-3 bg-[#ff5a1f] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-[15px] sm:text-[16px] text-[#111111] group-hover:text-[#ff5a1f] transition-colors duration-300">
                  Governments and public institutions
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 justify-center lg:justify-start group"
              >
                <span className="mt-2 w-3 h-3 bg-[#ff5a1f] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-[15px] sm:text-[16px] text-[#111111] group-hover:text-[#ff5a1f] transition-colors duration-300">
                  Political leadership and senior advisors
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4 justify-center lg:justify-start group"
              >
                <span className="mt-2 w-3 h-3 bg-[#ff5a1f] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-[15px] sm:text-[16px] text-[#111111] group-hover:text-[#ff5a1f] transition-colors duration-300">
                  Corporations operating under public and regulatory scrutiny
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4 justify-center lg:justify-start group"
              >
                <span className="mt-2 w-3 h-3 bg-[#ff5a1f] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <p className="text-[15px] sm:text-[16px] text-[#111111] group-hover:text-[#ff5a1f] transition-colors duration-300">
                  Financial, infrastructure, healthcare, education, and legacy institutions
                </p>
              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT SIDE — Empty for balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
     
    </section>
  );
}
