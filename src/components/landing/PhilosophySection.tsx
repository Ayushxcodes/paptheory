"use client";

export default function PhilosophySection() {
  return (
    <section className="w-full bg-black text-white py-32">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        {/* Icon / Emblem */}
        <div className="mx-auto mb-10 flex h-10 w-10 items-center justify-center border border-white/60">
          <div className="grid grid-cols-3 gap-[2px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className="h-[4px] w-[4px] border border-white/60"
              />
            ))}
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-sm uppercase tracking-[0.18em] text-white/70">
          Our Philosophy
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-24 bg-white/30" />

        {/* Main Copy */}
        <p className="mt-10 text-[20px] leading-8 text-white max-w-[640px] mx-auto">
          Communication shapes how power is understood and exercised.
        </p>

        <p className="mt-6 text-[15px] leading-7 text-white/70 max-w-[600px] mx-auto">
          We believe institutions have a responsibility to communicate clearly,
          ethically, and with restraint. Our work exists to strengthen public
          trust, not exploit attention.
        </p>
      </div>
    </section>
  );
}
