"use client";
import { useEffect, useState, useRef } from 'react';
import { FaCalendarAlt, FaProjectDiagram, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export default function About() {
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === statsRef.current && entry.isIntersecting) {
            setStatsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-20 md:py-32" style={{ background: 'radial-gradient(circle at 20% 80%, rgba(249, 146, 22, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249, 146, 22, 0.03) 0%, transparent 30%)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-widest text-[#f99216] font-semibold">
            About us
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Numbers that speak.<br />People who deliver.
          </h2>

          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[#f99216] to-[#f99216]/30 rounded-full" />
        </div>

        {/* Stats grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6"
          style={{ marginLeft: 'calc(50% - 40vw)', marginRight: 'calc(50% - 40vw)' }}
        >
          {[12, 45, 4, 20].map((val, i) => {
            const icons = [FaCalendarAlt, FaProjectDiagram, FaMapMarkerAlt, FaUsers];
            const Icon = icons[i];
            const suffixes = ['+', '+', '', '+'];
            const suffix = suffixes[i];
            const labels = [
              'Over a decade of combined delivery experience — from early-stage product builds to large-scale enterprise transformations across four continents',
              '45 enterprise projects delivered — spanning ERP transformations, AI-native products, consumer apps and operational automation across industries',
              'Four global regions with boots-on-the-ground delivery — India, Australia, Germany and the United States',
              "20 active clients across IT consulting and strategic communications — from India's leading brands to global mining and manufacturing enterprises"
            ];
            return (
              <div
                key={i}
                className={`group bg-white border border-gray-200  p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#f99216]/30 relative overflow-hidden ${
                  statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: statsInView ? `${i * 150}ms` : '0ms' }}
              >
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#f99216]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f99216]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#000000]" />
                  </div>
                  <div className="flex-1">
                    <StatCounter value={val} suffix={suffix} className="text-4xl font-bold text-[#f99216]" delay={i * 200} />
                    <span className="block mt-2 text-sm text-[#555555]">
                      {labels[i]}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ value, suffix = '', className = '', delay = 0 }: { value: number; suffix?: string; className?: string; delay?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) {
      const t = setTimeout(() => setCount(value), delay);
      return () => clearTimeout(t);
    }
    const duration = 2000; // ms
    let rafId: number | null = null;
    let startTime: number | null = null;

    const startAnimation = () => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * value);
        setCount(current);
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      rafId = requestAnimationFrame(step);
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, delay]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k';
    }
    return num.toString();
  };

  return (
    <span className={className}>
      {formatNumber(count)}{suffix && <sup>{suffix}</sup>}
    </span>
  );
}