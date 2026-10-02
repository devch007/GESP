"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 40);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Simple active section tracker
      const sections = ["the-question", "gesp-process", "why-gesp", "boarding-experience", "student-athletes"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-4 sm:px-6 lg:px-8 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "pt-3.5" : "pt-5"}`}
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl px-5 sm:px-7 py-3 flex items-center justify-between ${
            scrolled
              ? "bg-[#FAF9F6]/95 backdrop-blur-xl border border-[#E6E2D8] shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              : "bg-[#041235]/40 backdrop-blur-md border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          }`}
        >
          {/* Brand Logo */}
          <div className="flex items-center gap-3.5">
            <a href="#" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="https://gespeducation.com/wp-content/uploads/2025/09/Logo_GESP_Education.png"
                alt="GESP Education"
                className={`h-8 sm:h-9 w-auto object-contain transition-all duration-300 ${
                  !scrolled ? "brightness-110 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]" : ""
                }`}
              />
            </a>
          </div>

          {/* Desktop Navigation Links with Pill Hover Effect */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-medium tracking-wide rounded-xl transition-all duration-300 ${
                    scrolled
                      ? isActive
                        ? "text-[#0D2153] font-bold bg-[#0D2153]/5"
                        : "text-[#4A4D55] hover:text-[#0D2153] hover:bg-black/5"
                      : isActive
                      ? "text-white font-bold bg-white/15"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#FAB900] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Hub */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Quick WhatsApp Connect */}
            <a
              href="https://wa.me/919810000000?text=Hi%20GESP%20team,%20I%20would%20like%20to%20learn%20more%20about%20U.S.%20boarding%20schools%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 border cursor-pointer ${
                scrolled
                  ? "border-[#25D366]/30 text-[#128C7E] bg-[#25D366]/5 hover:bg-[#25D366]/15 hover:border-[#25D366]"
                  : "border-[#25D366]/50 text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 hover:border-[#25D366]"
              }`}
              title="Chat with an advisor on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Primary Consultation Action */}
            <button
              onClick={onOpenConsultation}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] ${
                scrolled
                  ? "bg-[#0D2153] hover:bg-[#041235] text-white hover:ring-2 hover:ring-[#0D2153]/20"
                  : "bg-[#FAB900] hover:bg-[#E4B603] text-[#041235] hover:ring-2 hover:ring-[#FAB900]/40"
              }`}
            >
              <span>Talk With GESP</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${scrolled ? "text-[#FAB900]" : "text-[#041235]"}`} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border transition-colors ${
                scrolled
                  ? "text-[#111111] border-[#E6E2D8] hover:bg-black/5"
                  : "text-white border-white/20 hover:bg-white/10"
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#FAF9F6] pt-24 px-6 pb-8 flex flex-col justify-between lg:hidden border-b border-[#E8E4DA] overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="pb-3 border-b border-[#E8E4DA]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#858076] font-semibold">
                  Navigation
                </span>
              </div>

              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-heading text-2xl text-[#1A1A1A] hover:text-[#0D2153] hover:pl-2 transition-all py-2 border-b border-[#E8E4DA]/60"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#E8E4DA]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-4 bg-[#0D2153] text-white text-xs font-bold uppercase tracking-wider text-center rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <span>Talk With GESP</span>
                <ArrowRight className="w-4 h-4 text-[#FAB900]" />
              </button>

              <a
                href="https://wa.me/919810000000?text=Hi%20GESP%20team,%20I%20would%20like%20to%20learn%20more%20about%20U.S.%20boarding%20schools%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 border border-[#25D366]/40 bg-[#25D366]/10 text-[#128C7E] text-xs font-semibold uppercase tracking-wider text-center rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
