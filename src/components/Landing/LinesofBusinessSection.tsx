export default function LinesofBusinessSection() {
  const items = [
    {
      title: 'IT services & consulting',
      featured: true,
      new: true,
      description:
        'Enterprise software, ERP, AI/ML, automation, cloud and digital transformation for mid-market and global clients. We design, build and deliver — end to end.',
      tags: ['SAP BTP', 'AI & ML', 'Web & Mobile', 'Cloud', 'ERP', 'Automation'],
      icon: '⚙️',
      color: 'bg-[#e6f0ff] text-[#1b4fd8]'
    },
    {
      title: 'Strategic communications',
      featured: false,
      new: false,
      description:
        'Brand strategy, Gen Z campaigns, political communication and content that resonates and drives real cultural impact. Affiliated with IPCL — India Public Communications Lab.',
      tags: ['Brand strategy', 'Gen Z marketing', 'Political comms', 'Content creation'],
      icon: '📣',
      color: 'bg-[#fff7ed] text-[#b85a00]'
    }
  ];

  return (
    <section id="lob" className="relative py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-widest text-[#f99216] font-semibold">
            Lines of business
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Lines of business
          </h2>

          <p className="mt-4 text-lg text-[#555555] leading-relaxed">
            We bring together technical delivery and cultural communications to
            build products, platforms and stories that move organizations.
          </p>

          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[#f99216] to-[#f99216]/30 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className={`lob-card group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                it.featured
                  ? 'lg:col-span-1 bg-gradient-to-br from-[#f99216]/10 to-transparent border-2 border-[#f99216]/30 shadow-xl hover:shadow-2xl hover:border-[#f99216]/60'
                  : 'bg-white border border-[#b85a00]/20 shadow-md hover:shadow-xl hover:border-[#b85a00]/40'
              }`}
            >
              {/* Background Accent */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                it.featured ? 'bg-[#f99216]' : 'bg-[#b85a00]'
              }`} />

              <div className="relative p-8 md:p-10">
                {/* Icon Container */}
                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 group-hover:scale-110 ${it.color} shadow-lg`}>
                  <span className="text-3xl">{it.icon}</span>
                </div>

                {/* Title & Badge */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-xl font-bold text-[#111111] flex items-center gap-3 mb-2">
                    {it.title}
                    {it.new && (
                      <span className="ml-auto inline-flex items-center px-3 py-1 rounded-full bg-[#f99216] text-white text-xs font-semibold shadow-md">
                        ✨ New
                      </span>
                    )}
                  </h3>
                  {it.featured && (
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#f99216] to-transparent rounded-full mt-3" />
                  )}
                </div>

                {/* Description */}
                <p className="text-base text-[#6b6b6b] leading-relaxed mb-6">
                  {it.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {it.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105 ${
                        it.featured
                          ? 'bg-[#1b4fd8]/10 text-[#1b4fd8] border border-[#1b4fd8]/20 hover:bg-[#1b4fd8]/20'
                          : 'bg-[#b85a00]/10 text-[#b85a00] border border-[#b85a00]/20 hover:bg-[#b85a00]/20'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
