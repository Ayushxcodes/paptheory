export default function ItservicesSection() {
  const services = [
    {
      title: 'ERP & SAP consulting',
      icon: '🧩',
      description:
        'S/4HANA migrations, BTP extensions, Clean Core assessments and SAP AI integration for enterprise clients.'
    },
    {
      title: 'AI & ML solutions',
      icon: '🧠',
      description:
        'GenAI applications, RAG systems, predictive analytics, LLM integration and intelligent process automation.'
    },
    {
      title: 'Web & mobile development',
      icon: '📱',
      description:
        'Full stack web apps, iOS and Android apps, React, Node JS, MERN stack and cross-platform mobile solutions.'
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      description:
        'AWS, SAP BTP, Azure deployments, CI/CD pipelines, cloud architecture design and infrastructure management.'
    },
    {
      title: 'Automation & BPA',
      icon: '⚙️',
      description:
        'Business process automation, workflow design, document processing and end-to-end operational digitalization.'
    },
    {
      title: 'Data & analytics',
      icon: '📈',
      description:
        'Real-time dashboards, SAP Analytics Cloud, HANA reporting and business intelligence solutions.'
    }
  ];

  const industries = [
    'Mining & resources',
    'Manufacturing',
    'Oil & gas',
    'Logistics & supply chain',
    'Enterprise technology',
    'Healthcare',
    'Finance & fintech',
    'E-commerce'
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 ">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-widest text-[#f99216] font-semibold">IT services</p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            End-to-end technology solutions
          </h2>

          <p className="mt-4 text-lg text-[#555555] leading-relaxed">
            Built for businesses that want real outcomes, not just software. We
            cover the full stack — from architecture to delivery.
          </p>

          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[#f99216] to-[#f99216]/30 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="svc-card group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#f99216]/30"
            >
              {/* Background Accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#f99216]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fff7ed] to-[#ffe6d5] text-[#f99216] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {s.icon}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-[#111111] mb-3 group-hover:text-[#f99216] transition-colors duration-300">
                  {s.title}
                </h4>

                <p className="text-sm text-[#6b6b6b] leading-relaxed flex-grow">
                  {s.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-[#f99216] to-transparent group-hover:w-8 transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Industries we serve */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-sm uppercase tracking-widest text-[#f99216] font-semibold mb-6">Industries we serve</p>

          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <div
                key={ind}
                className="ind-pill group inline-flex items-center gap-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 hover:border-[#f99216]/40 hover:bg-[#fff7ed] transition-all duration-300 hover:text-[#f99216] cursor-pointer"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
