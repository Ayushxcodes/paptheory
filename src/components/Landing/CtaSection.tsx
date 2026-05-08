import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="py-12 px-6">
          <p className="text-sm uppercase tracking-wide text-[#f99216] font-medium">Let&rsquo;s work together</p>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#111111]">
            Build something that matters
          </h2>

          <p className="mt-4 text-base text-[#555555] max-w-2xl mx-auto">
            Whether you need enterprise-grade engineering or culture-first
            communications, we design and deliver outcomes — not just deliverables.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#f99216] text-white px-8 py-3 rounded-md font-semibold hover:opacity-95 transition"
            >
              Get in touch
            </Link>

            <Link href="/works" className="text-[#111111] font-medium hover:text-[#f99216] transition">
              See our work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
