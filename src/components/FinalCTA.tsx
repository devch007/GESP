"use client";

import React, { useState } from "react";
import { ArrowRight, MessageCircle, Calendar, Sparkles, CheckCircle2, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export default function FinalCTA({ onOpenConsultation }: FinalCTAProps) {
  const [selectedGrade, setSelectedGrade] = useState("Grade 9-10");
  const [selectedFocus, setSelectedFocus] = useState("Academics & Athletics");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const grades = [
    { label: "Grade 8 - 9", value: "Grade 8-9", note: "Early Prep & Foundation" },
    { label: "Grade 10 - 11", value: "Grade 10-11", note: "Direct Prep Placement" },
    { label: "Grade 12 / Post-Grad", value: "Grade 12 / PG", note: "Collegiate Readiness" },
  ];

  const focusAreas = [
    { label: "Academics & Athletics", icon: Sparkles },
    { label: "STEM & Honors", icon: CheckCircle2 },
    { label: "Arts & Leadership", icon: Shield },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-28 lg:py-36 bg-[#041235] text-white overflow-hidden"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60 z-1"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(250, 185, 0, 0.08), transparent 60%)`,
        }}
      />

      {/* Full-Screen Campus Background with Deep Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://gespeducation.com/wp-content/uploads/2026/10/Williston-Northampton-283-1024x576.jpg"
          alt="American preparatory campus quad"
          className="w-full h-full object-cover object-center filter brightness-[0.18] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041235] via-[#0D2153]/85 to-[#041235]/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Main Title */}
        <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight mb-6">
          It&apos;s your moment. <br className="hidden sm:inline" />
          <span className="highlight-italic-gold">Now or never.</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#EBE3D4] font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us about your child, their academic and athletic goals, and the journey ahead.
        </p>

        {/* Interactive Quick-Profile Customizer Box */}
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 mb-10 text-left shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Grade Selection */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FAB900] font-bold block mb-3">
                1. Select Current Grade
              </span>
              <div className="grid grid-cols-1 gap-2">
                {grades.map((g) => {
                  const isSelected = selectedGrade === g.value;
                  return (
                    <button
                      key={g.value}
                      type="button"
                      onClick={() => setSelectedGrade(g.value)}
                      className={`px-4 py-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between cursor-pointer border ${
                        isSelected
                          ? "bg-[#FAB900] text-[#041235] font-bold border-[#FAB900] shadow-md"
                          : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:border-white/25"
                      }`}
                    >
                      <span>{g.label}</span>
                      <span className={`text-[10px] font-mono ${isSelected ? "text-[#041235]/80" : "text-white/50"}`}>
                        {g.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Focus Selection */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FAB900] font-bold block mb-3">
                2. Primary Focus
              </span>
              <div className="grid grid-cols-1 gap-2">
                {focusAreas.map((f) => {
                  const Icon = f.icon;
                  const isSelected = selectedFocus === f.label;
                  return (
                    <button
                      key={f.label}
                      type="button"
                      onClick={() => setSelectedFocus(f.label)}
                      className={`px-4 py-2.5 rounded-xl text-left text-xs transition-all flex items-center gap-3 cursor-pointer border ${
                        isSelected
                          ? "bg-[#FAB900] text-[#041235] font-bold border-[#FAB900] shadow-md"
                          : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:border-white/25"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dynamic Personalized Result & Launch CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-[#EBE3D4]">
              <div className="w-2 h-2 rounded-full bg-[#FAB900] animate-ping" />
              <span>
                Personalizing evaluation for <strong className="text-white">{selectedGrade}</strong> ({selectedFocus})
              </span>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#FAB900] hover:bg-[#E4B603] text-[#041235] text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer rounded-xl shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              <span>Talk With GESP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Secondary Direct Contact Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl border border-white/25 hover:border-[#FAB900] text-xs font-semibold tracking-wider uppercase text-white hover:text-[#FAB900] bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule 1:1 Consultation</span>
          </button>

          <a
            href="https://wa.me/919810000000?text=Hi%20GESP%20team,%20I%20would%20like%20to%20learn%20more%20about%20U.S.%20boarding%20schools%20for%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-[#25D366]/40 hover:border-[#25D366] text-xs font-semibold tracking-wider uppercase text-[#25D366] hover:bg-[#25D366]/10 backdrop-blur-sm transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>

        {/* Live Status Pill */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-[#E9E9E9]/70">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Advisors active for India admissions • 75+ Partner Schools</span>
        </div>

      </div>
    </section>
  );
}
