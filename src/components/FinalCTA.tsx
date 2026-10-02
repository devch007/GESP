"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export default function FinalCTA({ onOpenConsultation }: FinalCTAProps) {
  return (
    <section className="relative py-32 lg:py-44 bg-[#041235] text-white overflow-hidden">
      
      {/* Full-Screen Campus Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://gespeducation.com/wp-content/uploads/2026/10/Williston-Northampton-283-1024x576.jpg"
          alt="American preparatory campus grounds"
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041235] via-[#0D2153]/80 to-[#041235]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        
        <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight mb-6">
          It&apos;s your moment. <br className="hidden sm:inline" />
          <span className="highlight-italic-gold">Now or never.</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#EBE3D4] font-light max-w-xl mx-auto leading-relaxed mb-10">
          Tell us about your child, their academic and athletic goals, and the journey ahead.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#FAB900] hover:bg-[#E4B603] text-[#041235] text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer rounded-xl shadow-xl hover:shadow-2xl active:scale-[0.98]"
          >
            <span>Talk With GESP</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-4 rounded-xl border border-white/30 hover:border-[#FAB900] text-xs font-semibold tracking-wider uppercase text-white hover:text-[#FAB900] bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all pb-1 py-1 cursor-pointer"
          >
            <span>Schedule Initial Consultation</span>
          </button>
        </div>

        <p className="text-xs font-mono text-[#E9E9E9]/70 mt-12 pt-8 border-t border-white/10">
          Personal guidance for Indian families exploring U.S. boarding schools.
        </p>

      </div>
    </section>
  );
}
