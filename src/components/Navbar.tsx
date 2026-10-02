"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled past top
      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setVisible(false); // scrolling down
        } else {
          setVisible(true); // scrolling up
        }
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Clean, sleek, streamlined navigation matching the 7 core experiences
  const navLinks = [
    { label: "The Decision", href: "#the-question" },
    { label: "Process", href: "#gesp-process" },
    { label: "GESP Difference", href: "#why-gesp" },
    { label: "Schools", href: "#boarding-experience" },
    { label: "Athletics", href: "#student-athletes" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E9E9E9] py-3.5 shadow-sm"
            : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="https://gespeducation.com/wp-content/uploads/2025/09/Logo_GESP_Education.png"
              alt="GESP Education"
              className={`h-9 sm:h-10 w-auto object-contain transition-all duration-300 ${
                !scrolled ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" : ""
              }`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FAB900] hover:after:w-full after:transition-all after:duration-300 ${
                  scrolled 
                    ? "text-[#333333] hover:text-[#0D2153]" 
                    : "text-white/90 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Clean Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer rounded-lg shadow-sm hover:shadow active:scale-[0.98] ${
                scrolled
                  ? "bg-[#0D2153] hover:bg-[#041235] text-white"
                  : "bg-[#FAB900] hover:bg-[#E4B603] text-[#041235] shadow-lg"
              }`}
            >
              <span>Talk With GESP</span>
              <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${scrolled ? "text-[#FAB900]" : "text-[#041235]"}`} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                scrolled ? "text-[#111111] hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F7F5F0] pt-24 px-8 pb-10 flex flex-col justify-between md:hidden border-b border-[#E8E4DA]">
          <div className="space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#858076]">
              Navigation
            </span>
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-heading text-2xl text-[#111111] border-b border-[#E8E4DA] pb-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#E8E4DA]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-4 bg-[#0D2153] text-white text-xs font-semibold uppercase tracking-wider text-center rounded-xl shadow-md"
            >
              Talk With GESP →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
