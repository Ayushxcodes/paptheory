import { motion } from "framer-motion";
import Link from "next/link";


export default function WhoWeWorkWith() {
  return (
    <section className="relative py-16 md:py-32 bg-[#F7F6F4] overflow-hidden">
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Label */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-300 bg-white text-sm text-neutral-600 shadow-sm">
          Context
        </div>

        {/* Title */}
        <h2 className="mt-8 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          Who We Work With
        </h2>

        {/* Copy */}
        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 leading-relaxed">
          Paper Theory Network works with organisations whose decisions and 
          actions are visible, scrutinised, and consequential.
        </p>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl border border-neutral-200 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.12)] p-12 text-left"
        >
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

            <div className="flex items-start gap-4">
              <div className="mt-2 w-2 h-2 rounded-full bg-neutral-900" />
              <p className="text-neutral-800 text-lg">
                Governments and public institutions
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-2 w-2 h-2 rounded-full bg-neutral-900" />
              <p className="text-neutral-800 text-lg">
                Political leadership and senior advisors
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-2 w-2 h-2 rounded-full bg-neutral-900" />
              <p className="text-neutral-800 text-lg">
                Corporations operating under public and regulatory scrutiny
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-2 w-2 h-2 rounded-full bg-neutral-900" />
              <p className="text-neutral-800 text-lg">
                Financial, infrastructure, healthcare, education, and legacy institutions
              </p>
            </div>

          </div>
        </motion.div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-neutral-900 flex items-center justify-center">
        <Link href="/capabilities" className="text-white text-sm hover:text-neutral-300 transition">
          Explore Our Work ↓
        </Link>
      </div>
    </section>
  );
}
