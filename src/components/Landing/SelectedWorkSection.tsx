export default function SelectedWorkSection() {
  const works = [
    {
      cat: 'IT · Mining & resources',
      title:
        'Field supply execution & blast scheduling automation for a global mining company',
      desc:
        'Automated blast scheduling, inbound delivery and field operations across 4 global regions using SAP BTP. Reduced a 16-step manual process to a single-click workflow.',
      region: 'Australia (AusPac)',
      tags: ['SAP BTP', 'CAPM', 'Fiori']
    },
    {
      cat: 'IT · AI & automation',
      title: 'PO-to-SO automation pipeline with AI document extraction',
      desc:
        'Reduced manual data entry by 90% and cut order processing time from hours to minutes using GenAI document intelligence and SAP BTP integration.',
      region: 'India',
      tags: ['GenAI', 'SAP BTP', 'UI5']
    },
    {
      cat: 'IT · ERP & analytics',
      title: 'Clean Core assessment dashboard for a global engineering firm',
      desc:
        'Classified 45,000+ custom SAP objects across 15+ ECC systems to accelerate S/4HANA cloud migration planning with 360° analytics dashboards.',
      region: 'Germany',
      tags: ['HANA Cloud', 'SAC', 'ABAP']
    },
    {
      cat: 'Communications · Brand',
      title: 'Gen Z brand campaigns for Maruti Suzuki, ICICI Bank & Mahindra',
      desc:
        'Scroll-stopping content strategies and viral brand campaigns that built real cultural traction with Gen Z audiences across digital platforms.',
      region: 'India',
      tags: ['Brand', 'Gen Z', 'Content']
    }
  ];

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-[#f99216] font-medium">Selected work</p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-[#111111]">
            Projects we are proud of
          </h2>

          <p className="mt-4 text-base text-[#555555] leading-relaxed">
            A snapshot of recent engagements across IT and communications.
          </p>
        </div>

        <div className="mt-8 flex gap-3">
          <button className="filter-btn px-4 py-2 rounded-md bg-[#111111] text-white text-sm">All</button>
          <button className="filter-btn px-4 py-2 rounded-md bg-white border text-sm">IT & technology</button>
          <button className="filter-btn px-4 py-2 rounded-md bg-white border text-sm">Communications</button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {works.map((w) => (
            <div key={w.title} className="work-card bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <div className="work-card-header">
                <div className="work-cat text-sm text-[#6b6b6b] font-medium">{w.cat}</div>
                <h4 className="mt-2 text-lg font-semibold text-[#111111]">{w.title}</h4>
                <p className="mt-3 text-sm text-[#6b6b6b]">{w.desc}</p>
              </div>

              <div className="work-card-footer mt-4 flex items-center justify-between">
                <span className="work-region text-sm text-[#6b6b6b]">📍 {w.region}</span>
                <div className="work-tags flex gap-2">
                  {w.tags.map((t) => (
                    <span key={t} className="work-tag text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded">{t}</span>
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
