"use client";

import React, { useState } from "react";
import { SPORTS_FEATURES } from "@/data/landingData";
import { ArrowRight } from "lucide-react";

interface StudentAthletesProps {
  onOpenConsultation: () => void;
}

export default function StudentAthletes({ onOpenConsultation }: StudentAthletesProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = SPORTS_FEATURES[activeIdx];

  return (
    <section id="student-athletes" className="py-24 lg:py-36 bg-transparent border-b border-[#E8E4DA]/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-semibold text-[#1A1A1A] leading-[1.12] mb-4">
            Where sport becomes part of the <span className="highlight-italic">education.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A5E66] font-normal leading-relaxed max-w-2xl">
            For student-athletes, school isn&apos;t just about the classroom. It&apos;s where competition, discipline, friendships and personal growth become part of everyday life.
          </p>
        </div>

        {/* Hero Sports Image + Horizontal Crossfade Sports Navigation */}
        <div className="space-y-8">
          
          {/* Main Large Cinematic Sports Hero Image */}
          <div className="w-full aspect-[16/9] max-h-[580px] overflow-hidden bg-[#0D2153] relative border border-[#E9E9E9] rounded-2xl shadow-xl">
            <img
              key={current.id}
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover filter contrast-[1.05]"
            />
            {/* Dark contrast gradient to ensure typography is crisp */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#041235]/95 via-[#0D2153]/25 to-transparent pointer-events-none" />
            
            {/* Overlay Editorial Description */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-white z-10">
              <div className="max-w-xl">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#FAB900] font-bold block mb-1">
                  {current.division}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-normal mb-2">
                  {current.name} Pathway
                </h3>
                <p className="text-xs sm:text-sm text-[#EBE3D4] font-light leading-relaxed">
                  {current.summary}
                </p>
              </div>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#FAB900] hover:bg-[#E4B603] text-[#041235] text-xs font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 cursor-pointer self-start sm:self-auto shrink-0 shadow-lg rounded-xl"
              >
                <span>Explore Student-Athlete Pathways</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Clean Horizontal Sports Selector List (Crossfade on Hover) */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E9E9E9]">
            {SPORTS_FEATURES.map((sport, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={sport.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer border ${
                    isActive
                      ? "bg-[#0D2153] text-white border-[#0D2153] font-bold"
                      : "bg-white text-[#69727D] border-[#E9E9E9] hover:border-[#0D2153] hover:text-[#0D2153]"
                  }`}
                >
                  {sport.name}
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
