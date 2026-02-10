"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <header className="w-full bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-6 h-[72px] flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg cursor-pointer">
          <div className="flex gap-[3px]">
            <span className="w-[6px] h-[14px] bg-black rounded-sm" />
            <span className="w-[6px] h-[20px] bg-black rounded-sm" />
            <span className="w-[6px] h-[10px] bg-black rounded-sm self-end" />
          </div>
          <span className="tracking-tight">Paper Theory</span>
        </div>

        {/* Desktop Nav links shifted to right */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700 relative">
          <NavItem
            label="Platform"
            items={["Overview", "Research", "Prototypes", "Analytics"]}
          />
          <NavItem
            label="Solutions"
            items={["Product teams", "UX research", "Enterprise"]}
          />
          <NavItem
            label="Resources"
            items={["Blog", "Guides", "Help center"]}
          />
          <NavItem
            label="Customers"
            items={["Case studies", "Testimonials"]}
          />
          <a href="#" className="hover:text-neutral-900 transition">
            Pricing
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
              items={["Overview", "Research", "Prototypes", "Analytics"]}
            />
            <MobileNavItem
              label="Solutions"
              items={["Product teams", "UX research", "Enterprise"]}
            />
            <MobileNavItem
              label="Resources"
              items={["Blog", "Guides", "Help center"]}
            />
            <MobileNavItem
              label="Customers"
              items={["Case studies", "Testimonials"]}
            />
            <a href="#" className="block py-2 text-sm text-neutral-700 hover:text-neutral-900">
              Pricing
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
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
                  href="#"
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
                href="#"
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
