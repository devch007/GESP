"use client";

import React from "react";
import { INDIA_CITY_TOURS } from "@/data/gespIndiaData";
import { Calendar, MapPin, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface IndiaToursProps {
  onOpenConsultation: () => void;
}

export default function IndiaTours({ onOpenConsultation }: IndiaToursProps) {
  return (
    <section id="india-tour" className="py-20 bg-white border-b border-[#EAECEF] relative overflow-hidden">
      
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E22E34] text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In-Person India Showcase & Symposium</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171F] tracking-tight">
              GESP India City Tour 2026
            </h2>
            <p className="text-sm sm:text-base text-[#5E6470] mt-1 max-w-2xl">
              Meet senior U.S. boarding school directors and varsity coaches in person across Delhi, Mumbai, Bengaluru, and Hyderabad.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-2xl bg-[#E22E34] hover:bg-[#C92429] text-white text-xs font-bold uppercase tracking-wider transition-all self-start md:self-auto flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Reserve Pass for Your City</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 City Cards in modern rounded format with smooth hover elevations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDIA_CITY_TOURS.map((tour) => (
            <div
              key={tour.city}
              className="upgrad-card p-6 flex flex-col justify-between bg-[#F8F9FC] border border-[#EAECEF] hover:bg-white group cursor-pointer"
              onClick={onOpenConsultation}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#E22E34] bg-[#FDF2F2] px-2.5 py-1 rounded-full border border-[#FCDADA]">
                    {tour.status}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#EAECEF] flex items-center justify-center text-[#14171F] group-hover:bg-[#E22E34] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#14171F] mb-1 group-hover:text-[#E22E34] transition-colors">
                  {tour.city}
                </h3>

                <div className="space-y-2 my-4 text-xs text-[#5E6470]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#E22E34] shrink-0" />
                    <span className="font-semibold text-[#14171F]">{tour.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E22E34] shrink-0" />
                    <span>{tour.venue}</span>
                  </div>
                </div>

                <p className="text-xs text-[#383E49] leading-relaxed pt-2 border-t border-[#EAECEF]">
                  {tour.highlight}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EAECEF] flex items-center justify-between text-xs font-bold text-[#E22E34]">
                <span>Register Family Slot</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
