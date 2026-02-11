import { motion } from "framer-motion";
import Link from "next/link";

export default function OurApproach() {
  return (
    <section className="relative py-16 md:py-32 bg-[#F7F6F4] overflow-hidden">

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-300 bg-white text-sm text-neutral-600 shadow-sm">
          Our Philosophy
        </div>

        {/* Title */}
        <h2 className="mt-8 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
          Our Approach
        </h2>

        {/* Core Copy */}
        <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed">
          We believe communication is not about volume or virality.  
          It is about trust, coherence, and restraint.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-600 leading-relaxed">
          Our work begins with understanding public sentiment, institutional context,
          and long-term consequences. From there, we design narratives and
          communication frameworks that align message, medium, and moment —
          ensuring credibility is built, not compromised.
        </p>

        <p className="mt-6 text-xl font-medium text-neutral-900">
          We do not react. We frame.
        </p>

        {/* Feature Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">

          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-lg font-semibold text-neutral-900">
              Context First
            </h3>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Every mandate begins with a structured assessment of institutional
              history, stakeholder perception, and public climate.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-lg font-semibold text-neutral-900">
              Narrative Architecture
            </h3>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              We design disciplined communication frameworks that align
              leadership voice, institutional goals, and external expectations.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-lg font-semibold text-neutral-900">
              Strategic Restraint
            </h3>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              In environments shaped by scrutiny, credibility is preserved
              through coherence, timing, and disciplined execution.
            </p>
          </motion.div>

        </div>

      </div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-neutral-900 flex items-center justify-center">
        <Link href="/capabilities" className="text-white text-sm hover:text-neutral-300 transition">
          Explore Our Work ↓
        </Link>
      </div>
    </section>
  );
}
