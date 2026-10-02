"use client";

import React, { useState } from "react";
import { SPORTS_PROGRAMS } from "@/data/gespData";
import { ArrowRight, Trophy, Sparkles, CheckCircle2 } from "lucide-react";

interface SportsSectionProps {
  onOpenConsultation: () => void;
}

export default function SportsSection({ onOpenConsultation }: SportsSectionProps) {
  const [selectedSportIndex, setSelectedSportIndex] = useState(0);
  const currentSport = SPORTS_PROGRAMS[selectedSportIndex];

  return (
    <section id="athletics" className="py-20 bg-white border-b border-[#EAECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E22E34] text-xs font-bold mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Varsity & Prep Athletics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171F] tracking-tight">
            Student-Athlete Placement & Collegiate Pathways
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-1">
            Connect directly with American prep coaches and gain immediate visibility for NCAA recruitment.
          </p>
        </div>

        {/* UpGrad Program Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Rounded Sport Category Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {SPORTS_PROGRAMS.map((sport, idx) => {
              const isActive = selectedSportIndex === idx;
              return (
                <button
                  key={sport.id}
                  onClick={() => setSelectedSportIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? "bg-[#14171F] border-[#14171F] text-white shadow-md"
                      : "bg-[#F8F9FB] border-[#EAECEF] text-[#383E49] hover:bg-zinc-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold ${isActive ? "text-[#E22E34]" : "text-[#5E6470]"}`}>
                      0{idx + 1}
                    </span>
                    <span className="font-bold text-base sm:text-lg">
                      {sport.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${isActive ? "text-zinc-300" : "text-[#5E6470]"}`}>
                      {sport.division.split("&")[0]}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? "text-[#E22E34]" : "text-[#5E6470]"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Rich Rounded Highlight Card */}
          <div className="lg:col-span-7">
            <div className="upgrad-card overflow-hidden border-2 border-[#EAECEF] bg-white">
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={currentSport.image}
                  alt={currentSport.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-[#E22E34] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block mb-2">
                    {currentSport.division}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {currentSport.name} Prep Program
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm text-[#383E49] leading-relaxed">
                  {currentSport.quote}
                </p>

                <div className="p-4 rounded-2xl bg-[#F8F9FB] border border-[#EAECEF] flex items-center gap-3 text-xs font-bold text-[#14171F]">
                  <CheckCircle2 className="w-5 h-5 text-[#E22E34] shrink-0" />
                  <span>{currentSport.stats}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="flex-1 py-3.5 rounded-xl bg-[#E22E34] hover:bg-[#C92429] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Connect with {currentSport.name} Coaches</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
