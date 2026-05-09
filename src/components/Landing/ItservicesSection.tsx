"use client";

import { useEffect, useState } from 'react';
import { FaPuzzlePiece, FaBrain } from 'react-icons/fa';
import { AiOutlineMobile } from 'react-icons/ai';
import { FiCloud, FiSettings, FiBarChart2, FiDroplet, FiTruck, FiServer, FiHeart, FiCreditCard, FiShoppingCart } from 'react-icons/fi';
import { GiFactory } from 'react-icons/gi';
import { LuPickaxe } from "react-icons/lu";

export default function ItservicesSection() {
  const services = [
    {
      title: 'ERP & SAP consulting',
      icon: <FaPuzzlePiece className="w-9 h-9" />,
      description:
        'S/4HANA migrations, BTP extensions, Clean Core assessments and SAP AI integration for enterprise clients.'
    },
    {
      title: 'AI & ML solutions',
      icon: <FaBrain className="w-9 h-9" />,
      description:
        'GenAI applications, RAG systems, predictive analytics, LLM integration and intelligent process automation.'
    },
    {
      title: 'Web & mobile development',
      icon: <AiOutlineMobile className="w-9 h-9" />,
      description:
        'Full stack web apps, iOS and Android apps, React, Node JS, MERN stack and cross-platform mobile solutions.'
    },
    {
      title: 'Cloud & DevOps',
      icon: <FiCloud className="w-9 h-9" />,
      description:
        'AWS, SAP BTP, Azure deployments, CI/CD pipelines, cloud architecture design and infrastructure management.'
    },
    {
      title: 'Automation & BPA',
      icon: <FiSettings className="w-9 h-9" />,
      description:
        'Business process automation, workflow design, document processing and end-to-end operational digitalization.'
    },
    {
      title: 'Data & analytics',
      icon: <FiBarChart2 className="w-9 h-9" />,
      description:
        'Real-time dashboards, SAP Analytics Cloud, HANA reporting and business intelligence solutions.'
    }
  ];

  const industries = [
    { label: 'Mining & resources', icon: <LuPickaxe className="w-4 h-4" /> },
    { label: 'Manufacturing', icon: <GiFactory className="w-4 h-4" /> },
    { label: 'Oil & gas', icon: <FiDroplet className="w-4 h-4" /> },
    { label: 'Logistics & supply chain', icon: <FiTruck className="w-4 h-4" /> },
    { label: 'Enterprise technology', icon: <FiServer className="w-4 h-4" /> },
    { label: 'Healthcare', icon: <FiHeart className="w-4 h-4" /> },
    { label: 'Finance & fintech', icon: <FiCreditCard className="w-4 h-4" /> },
    { label: 'E-commerce', icon: <FiShoppingCart className="w-4 h-4" /> }
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 ">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-widest text-[#f99216] font-semibold">IT services</p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Built to solve.<br />Designed to scale.
          </h2>

          <p className="mt-4 text-lg text-[#555555] leading-relaxed">
            Full-stack technology capability — from architecture to delivery. We cover every layer of the modern enterprise stack.
          </p>

          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-[#f99216] to-[#f99216]/30 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="svc-card group relative overflow-hidden bg-white border border-gray-300 rounded-1xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#f99216]/30"
            >
              {/* Large animated number (decorative) */}
              <NumberBadge
                value={i + 1}
                className="absolute top-6 right-6 text-[64px] md:text-[92px] font-normal text-[#f99216] opacity-50 pointer-events-none leading-none select-none"
                delay={150 * i}
              />
              {/* Background Accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#f99216]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl  text-[#f99216] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                  {/* Small visible counter for screen readers and quick read */}
                  
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
                key={ind.label}
                className="ind-pill group inline-flex items-center gap-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 hover:border-[#f99216]/40 hover:bg-[#fff7ed] transition-all duration-300 hover:text-[#f99216] cursor-pointer"
              >
                <span className="w-5 h-5 flex items-center justify-center text-[#f99216]">{ind.icon}</span>
                <span className="ml-2">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NumberBadge({ value, className = '', delay = 0 }: { value: number; className?: string; delay?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) {
      const t = window.setTimeout(() => setCount(value), 0);
      return () => clearTimeout(t);
    }
    const duration = 600; // ms
    let rafId: number | null = null;
    let startTime: number | null = null;

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

    const timeoutId = window.setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return (
    <span aria-hidden className={className} style={{ WebkitTextStroke: '1px #f99216', color: 'transparent' }}>
      {count.toString().padStart(2, '0')}
    </span>
  );
}
