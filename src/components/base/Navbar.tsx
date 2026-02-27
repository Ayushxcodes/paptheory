"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <header className="absolute top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6 h-[72px] flex items-center justify-between">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2 font-semibold text-lg cursor-pointer">
          <div className="flex gap-[3px]">
            <span className="w-[6px] h-[14px] bg-black rounded-sm" />
            <span className="w-[6px] h-[20px] bg-black rounded-sm" />
            <span className="w-[6px] h-[10px] bg-black rounded-sm self-end" />
          </div>
          <span className="tracking-tight">Paper Theory</span>
        </a>

        {/* Desktop Nav links shifted to right */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700 relative">
          <NavItem
            label="Platform"
            items={["Homepage", "Our Works", "Teams"]}
          />
          <NavItem
            label="Our Approach"
            items={["Solutions", "Resources", "Customers"]}
          />
          <a href="/genz" className="hover:text-neutral-900 transition">
            GenZ
          </a>
          <a href="/contact" className="hover:text-neutral-900 transition">
            Contact Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-6 py-4 space-y-4">
            <MobileNavItem
              label="Platform"
              items={["Homepage", "Our Works", "Teams"]}
            />
            <MobileNavItem
              label="Our Approach"
              items={["Solutions", "Resources", "Customers"]}
            />
            <a href="/genz" className="block py-2 text-sm text-neutral-700 hover:text-neutral-900">
              GenZ
            </a>
            <a href="/contact" className="block py-2 text-sm text-neutral-700 hover:text-neutral-900">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setOpen(false), 150); // 150ms delay
    setTimeoutId(id);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 hover:text-neutral-900 transition">
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 mt-[1px] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-3 w-48 rounded-xl border border-neutral-200 bg-white shadow-lg">
          <ul className="py-2">
            {items.map((item) => (
              <li key={item}>
                <a
                  href={
                    item.toLowerCase() === 'homepage' ? '/' :
                    item.toLowerCase() === 'our works' ? '/works' :
                    `/${item.toLowerCase()}`
                  }
                  className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-2 text-sm text-neutral-700 hover:text-neutral-900"
        onClick={() => setOpen(!open)}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="pl-4 mt-2 space-y-1">
          {items.map((item) => (
            <li key={item}>
              <a
                href={
                  item.toLowerCase() === 'homepage' ? '/' :
                  item.toLowerCase() === 'our works' ? '/works' :
                  `/${item.toLowerCase()}`
                }
                className="block py-1 text-sm text-neutral-600 hover:text-neutral-900"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
