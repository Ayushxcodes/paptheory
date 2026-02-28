"use client";

import Link from "next/link";

export default function SelectedWorkSection() {
  // Array of Gumlet video URLs for the infinite loop - Top row
  const topVideoUrls = [
    "https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/6985d218742559dc5a11a435?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/6985d2184db88a967f203e86?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/6985d218924a60df4bf0fda8?autoplay=1&muted=1&loop=1&playsinline=1", // Duplicate for seamless loop
    "https://play.gumlet.io/embed/6985d218742559dc5a11a435?autoplay=1&muted=1&loop=1&playsinline=1", // Duplicate for seamless loop
    "https://play.gumlet.io/embed/6985d2184db88a967f203e86?autoplay=1&muted=1&loop=1&playsinline=1", // Duplicate for seamless loop
  ];

  // Array of Gumlet video URLs for the infinite loop - Bottom row (different order)
  const bottomVideoUrls = [
    "https://play.gumlet.io/embed/689b34a3e250086ff5bd6f56?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/680104cd3f934d7b33b2f50e?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/680102a1fc3cb0b3238a7589?autoplay=1&muted=1&loop=1&playsinline=1",
    "https://play.gumlet.io/embed/680100853ab3a7b826bb539a?autoplay=1&muted=1&loop=1&playsinline=1", // Duplicate for seamless loop
    
  ];

  return (
    <section className="relative py-20 md:py-40 bg-white overflow-hidden">
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
            <pattern id="grid4" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111111" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#111111" stopOpacity="0.05"/>
            </linearGradient>
          </defs>

          {/* Background gradient */}
          <rect width="100%" height="100%" fill="url(#gradient4)"/>

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

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-[#ff5a1f] font-medium">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#111111]">
            Selected Work
          </h2>

          <p className="mt-6 text-lg text-[#555555] leading-relaxed">
            Our work spans political communication, institutional
            narrative-building, and strategic creative campaigns. The examples
            below reflect how we apply strategic thinking across contexts —
            not a catalogue of outputs.
          </p>

          <div className="mt-10 h-px w-full bg-[#ff5a1f]/30" />
        </div>

        {/* Infinite Video Loop */}
        <div className="relative mt-16 overflow-hidden">
          <div
            className="flex scroll-animation"
          >
            {topVideoUrls.map((url, index) => (
              <div
                key={index}
                className="shrink-0 w-64 sm:w-80 h-36 sm:h-48 mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <iframe
                  src={url}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  loading="lazy"
                  title={`Work Video ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional static videos for seamless loop */}
        <div className="relative mt-4 sm:mt-8 overflow-hidden">
          <div
            className="flex scroll-animation-reverse"
          >
            {bottomVideoUrls.map((url, index) => (
              <div
                key={`reverse-${index}`}
                className="shrink-0 w-64 sm:w-80 h-36 sm:h-48 mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <iframe
                  src={url}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  loading="lazy"
                  title={`Work Video Reverse ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom CTA Bar */}
      <div className="absolute bottom-0 left-0 w-full h-7 bg-[#ff5a1f] flex items-center justify-center">
        <Link
          href="/works"
          className="text-white text-sm hover:opacity-80 transition"
        >
          Explore Our Work ↓
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .scroll-animation {
            animation: scroll var(--scroll-duration, 20s) linear infinite;
          }

          .scroll-animation-reverse {
            animation: scroll-reverse var(--scroll-duration-reverse, 15s) linear infinite;
          }

          /* Mobile styles - faster animations */
          @media (max-width: 640px) {
            .scroll-animation {
              --scroll-duration: 12s;
            }
            .scroll-animation-reverse {
              --scroll-duration-reverse: 10s;
            }
          }
        `
      }} />
    </section>
  );
}
