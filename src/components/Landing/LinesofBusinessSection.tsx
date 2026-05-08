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
    <section id="lob" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-[#f99216] font-medium">
            Lines of business
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#111111]">
            Lines of business
          </h2>

          <p className="mt-4 text-base text-[#555555] leading-relaxed">
            We bring together technical delivery and cultural communications to
            build products, platforms and stories that move organizations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className={`lob-card p-6 rounded-xl border border-gray-100 shadow-sm ${
                it.featured ? 'bg-white' : 'bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-md ${it.color}`}>
                  <span className="text-xl">{it.icon}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#111111] flex items-center gap-3">
                    {it.title}
                    {it.new && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded bg-[#f7efde] text-[#b85a00] text-xs font-semibold">
                        New
                      </span>
                    )}
                  </h3>

                  <p className="mt-3 text-sm text-[#6b6b6b]">{it.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {it.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`lob-tag inline-block text-xs font-medium px-3 py-1 rounded ${
                          it.featured ? 'bg-[#eef6ff] text-[#1b4fd8]' : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
