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
    <section id="services" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-[#f99216] font-medium">IT services</p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#111111]">
            End-to-end technology solutions
          </h2>

          <p className="mt-4 text-base text-[#555555] leading-relaxed">
            Built for businesses that want real outcomes, not just software. We
            cover the full stack — from architecture to delivery.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="svc-card bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-[#f3f7ff] text-[#1b4fd8] flex items-center justify-center text-lg">
                  {s.icon}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#111111]">{s.title}</h4>
                  <p className="mt-2 text-sm text-[#6b6b6b]">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries we serve */}
        <div className="mt-30">
          <p className="text-sm uppercase tracking-wide text-[#f99216] font-medium">Industries we serve</p>

          <div className="mt-4 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <div
                key={ind}
                className="ind-pill inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm"
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
