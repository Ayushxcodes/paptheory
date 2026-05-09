"use client";
import { useState, useMemo } from 'react';

export default function SelectedWorkSection() {
  const [filter, setFilter] = useState('All');
  const works = useMemo(
    () => [
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
    ],
    []
  );

  const filteredWorks = useMemo(() => {
    return works.filter((w) => {
      if (filter === 'All') return true;
      if (filter === 'IT') return w.cat.includes('IT');
      if (filter === 'Communications') return w.cat.includes('Communications');
      return true;
    });
  }, [works, filter]);

  return (
    <section id="work" className="relative py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-widest text-[#f99216] font-semibold">Selected work</p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Projects we are proud of
          </h2>

          <p className="mt-4 text-lg text-[#555555] leading-relaxed">
            A snapshot of recent engagements across IT and communications.
          </p>

          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[#f99216] to-[#f99216]/30 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setFilter('All')}
            className={`filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
              filter === 'All'
                ? 'bg-[#111111] text-white'
                : 'bg-white border border-gray-700 text-gray-800 hover:border-[#f99216] hover:text-[#f99216] hover:bg-[#fff7ed] shadow-sm hover:shadow-md'
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter('IT')}
            className={`filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === 'IT'
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white border border-gray-700 text-gray-800 hover:border-[#f99216] hover:text-[#f99216] hover:bg-[#fff7ed] shadow-sm hover:shadow-md'
            }`}
          >
            IT & technology
          </button>

          <button
            onClick={() => setFilter('Communications')}
            className={`filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === 'Communications'
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white border border-gray-700 text-gray-800 hover:border-[#f99216] hover:text-[#f99216] hover:bg-[#fff7ed] shadow-sm hover:shadow-md'
            }`}
          >
            Communications
          </button>
        </div>

        {/* Work Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWorks.map((w) => (
            <div
              key={w.title}
              className="work-card group relative overflow-hidden bg-white border border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#f99216]/40"
            >
              {/* Background Accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#f99216]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <div className="work-card-header">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#f99216]/10 to-[#f99216]/5 rounded-full mb-4">
                    <span className="work-cat text-xs font-semibold text-[#f99216] uppercase tracking-wider">
                      {w.cat}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-3 text-xl font-bold text-[#111111] group-hover:text-[#f99216] transition-colors duration-300">
                    {w.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-4 text-sm text-[#6b6b6b] leading-relaxed">
                    {w.desc}
                  </p>
                </div>

                {/* Divider */}
                <div className="mt-6 h-px bg-gradient-to-r from-gray-200 to-transparent" />

                {/* Footer */}
                <div className="work-card-footer mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="work-region text-sm font-medium text-[#6b6b6b] flex items-center gap-2">
                    📍 <span className="text-[#111111] font-semibold">{w.region}</span>
                  </span>

                  <div className="work-tags flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="work-tag text-xs font-semibold px-3 py-1.5 bg-[#f99216]/10 text-[#f99216] rounded-full border border-[#f99216]/20 hover:bg-[#f99216]/20 transition-all duration-300 hover:scale-105"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#f99216] to-transparent group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>
              ))
          }
        </div>
      </div>
    </section>
  );
}
