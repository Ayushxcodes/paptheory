"use client";
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SelectedWorkSection() {
  const searchParams = useSearchParams();

  const initialFilter = (() => {
    const f = searchParams?.get('filter');
    if (f === 'IT') return 'IT';
    if (f === 'Communications') return 'Communications';
    return 'All';
  })();

  const [filter, setFilter] = useState(initialFilter);

  // Keep filter in sync if the search param changes, but avoid synchronous setState
  useEffect(() => {
    const f = searchParams?.get('filter');
    const mapped = f === 'IT' ? 'IT' : f === 'Communications' ? 'Communications' : 'All';
    if (mapped !== filter) {
      const id = window.setTimeout(() => setFilter(mapped), 0);
      return () => window.clearTimeout(id);
    }
    return;
  }, [searchParams, filter]);

  // Listen for custom events dispatched when the ExploreWorkBar is clicked so repeated clicks work
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent)?.detail;
      if (detail?.filter) setFilter(detail.filter);
    };
    window.addEventListener('pap-filter', handler as EventListener);
    return () => window.removeEventListener('pap-filter', handler as EventListener);
  }, []);
  const works = useMemo(
    () => [
      {
        cat: 'IT · Supply Chain · Intelligent Automation',
        title:
          'From delivery to warehouse — Smart delivery tracking & goods receipt automation for manufacturing plants',
        desc:
          'Built for a large-scale manufacturing operation — A smart field dashboard giving plant teams real-time visibility of incoming material deliveries and live status tracking. An embedded AI assistant lets operators complete goods receipts using plain language — no SAP knowledge needed.',
        region: 'India · Australia · Europe · North America',
        tags: ['SAP BTP', 'Joule AI', 'Supply Chain', 'S/4HANA']
      },
      {
        cat: 'IT · Mining & resources',
        title: 'Field operations platform for a global explosives & mining company',
        desc:
          'A live enterprise platform covering blast scheduling, forecasting, delivery automation, inventory management and customer portal — deployed across four global regions. Built on SAP BTP with AI assistance and mobile offline capability for remote field teams.',
        region: 'Australia · North America · EMEA · Asia',
        tags: ['SAP BTP', 'SAP S/4 HANA', 'Mining', 'Clean Core', 'AI', 'Mobile', 'Web App']
      },
      {
        cat: 'IT · Enterprise HR & Workforce Management',
        title: 'AI-powered workforce management & talent intelligence platform',
        desc:
          'An enterprise talent platform where employees own their profiles, managers get real-time workforce intelligence, resource teams match open roles to available talent instantly, and AI auto-generates CVs — all in one place. Built for 10,000+ users.',
        region: 'India',
        tags: ['MEAN Stack', 'GenAI', 'HR Tech', 'Workforce Management', 'Node.js']
      },
      {
        cat: 'IT · On-demand Services',
        title: 'On-demand services super-app for 25+ service categories',
        desc:
          'A consumer mobile app — built natively for iOS and Android — offering cab booking, food delivery, housekeeping, tutoring and 25+ on-demand services on a single platform. Real-time service matching, live tracking and seamless payments, all deployed on AWS cloud.',
        region: 'New Jersey, USA',
        tags: ['iOS', 'Android', 'Node.js', 'MongoDB', 'AWS']
      },
      {
        cat: 'IT · AI & Automation',
        title: 'Intelligent PO-to-Sales Order automation using AI document extraction',
        desc:
          'Large manufacturers receive dozens of POs daily via email — in different formats, from different vendors. This solution reads incoming POs, extracts data using AI and automatically creates Sales Orders in SAP — eliminating manual entry and cutting processing time from hours to minutes.',
        region: 'India',
        tags: ['GenAI', 'SAP BTP', 'Document AI', 'S/4HANA', 'Process Automation']
      },
      // keep one of the original entries
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
            onClick={() => {
              setFilter('All');
              if (typeof window !== 'undefined') {
                const url = new URL(window.location.href);
                url.searchParams.delete('filter');
                window.history.replaceState({}, '', url.toString());
              }
            }}
            className={`filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
              filter === 'All'
                ? 'bg-[#111111] text-white'
                : 'bg-white border border-gray-200 text-gray-800 hover:border-[#f99216] hover:text-[#f99216] hover:bg-[#fff7ed] shadow-sm hover:shadow-md'
            }`}
          >
            All
          </button>

          <button
            onClick={() => {
              setFilter('IT');
              if (typeof window !== 'undefined') {
                const url = new URL(window.location.href);
                url.searchParams.set('filter', 'IT');
                window.history.replaceState({}, '', url.toString());
                const el = document.querySelector('#work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === 'IT'
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white border border-gray-300 text-gray-800 hover:border-[#f99216] hover:text-[#f99216] hover:bg-[#fff7ed] shadow-sm hover:shadow-md'
            }`}
          >
            IT & technology
          </button>

          <button
            onClick={() => {
              setFilter('Communications');
              if (typeof window !== 'undefined') {
                const url = new URL(window.location.href);
                url.searchParams.set('filter', 'Communications');
                window.history.replaceState({}, '', url.toString());
                const el = document.querySelector('#work');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === 'Communications'
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white border border-gray-300 text-gray-800 hover:border-[#f99216] hover:text-[#f99216] hover:bg-[#fff7ed] shadow-sm hover:shadow-md'
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
              className="work-card group relative overflow-hidden bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#f99216]/40 h-full flex"
            >
              {/* Background Accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#f99216]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 flex-1 flex flex-col">
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
                <div className="work-card-footer mt-auto pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
