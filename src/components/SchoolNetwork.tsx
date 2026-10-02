"use client";

import React, { useState } from "react";
import { SCHOOL_NETWORK, SchoolPartner } from "@/data/gespData";
import { ArrowRight, MapPin, Sparkles, Star, Trophy, Users, X, Check } from "lucide-react";

interface SchoolNetworkProps {
  onOpenConsultation: () => void;
}

export default function SchoolNetwork({ onOpenConsultation }: SchoolNetworkProps) {
  const [selectedState, setSelectedState] = useState<string>("All");
  const [activeModalSchool, setActiveModalSchool] = useState<SchoolPartner | null>(null);

  const states = ["All", "Massachusetts", "Connecticut", "Pennsylvania", "Virginia", "Ohio"];

  const filteredSchools =
    selectedState === "All"
      ? SCHOOL_NETWORK
      : SCHOOL_NETWORK.filter((s) => s.state.toLowerCase().includes(selectedState.toLowerCase()));

  return (
    <section id="schools" className="py-20 bg-[#F8F9FB] border-b border-[#EAECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (upGrad Browse Programs Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E22E34] text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Independent Institutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171F] tracking-tight">
              Featured U.S. Boarding Schools
            </h2>
            <p className="text-sm text-[#5E6470] mt-1">
              Top prep schools, championship sports academies, and historic New England institutions.
            </p>
          </div>

          {/* Filter Pills (upGrad Rounded Pills) */}
          <div className="flex flex-wrap gap-2">
            {states.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedState === st
                    ? "bg-[#14171F] text-white shadow-xs"
                    : "bg-white text-[#5E6470] border border-[#E2E6EC] hover:bg-zinc-100 hover:text-[#14171F]"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Rounded Card Grid (upGrad Course Card Format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school) => (
            <div
              key={school.id}
              onClick={() => setActiveModalSchool(school)}
              className="upgrad-card overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Image Banner with Badge */}
                <div className="h-52 overflow-hidden relative bg-zinc-100">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#14171F] shadow-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E22E34]" />
                    <span>{school.state}</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-[#14171F]/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-mono text-white">
                    Est. {school.founded}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#E22E34] mb-1">
                    {school.campusVibe}
                  </div>

                  <h3 className="text-xl font-bold text-[#14171F] group-hover:text-[#E22E34] transition-colors line-clamp-1 mb-2">
                    {school.name}
                  </h3>

                  <p className="text-xs text-[#5E6470] line-clamp-2 leading-relaxed mb-4">
                    {school.highlight}
                  </p>

                  {/* Sports Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#EAECEF]">
                    {school.sportsStrong.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-medium bg-[#F1F4F9] text-[#383E49] px-2.5 py-1 rounded-lg"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 py-4 bg-[#FAFBFD] border-t border-[#EAECEF] flex items-center justify-between text-xs font-bold text-[#14171F] group-hover:text-[#E22E34]">
                <span>View Full School Dossier</span>
                <div className="w-7 h-7 rounded-full bg-white border border-[#EAECEF] flex items-center justify-center group-hover:bg-[#E22E34] group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal */}
        {activeModalSchool && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#EAECEF]">
              <button
                onClick={() => setActiveModalSchool(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-[#E22E34] uppercase mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeModalSchool.state} • Founded {activeModalSchool.founded}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14171F] mb-3">
                {activeModalSchool.name}
              </h3>

              <div className="h-52 rounded-2xl overflow-hidden mb-4 bg-zinc-100">
                <img
                  src={activeModalSchool.image}
                  alt={activeModalSchool.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#5E6470] mb-6">
                <p><strong>Campus Atmosphere:</strong> {activeModalSchool.campusVibe}</p>
                <p><strong>Curriculum:</strong> {activeModalSchool.type}</p>
                <p><strong>Key Highlights:</strong> {activeModalSchool.highlight}</p>
                <div>
                  <strong className="block text-[#14171F] mb-1.5">Varsity Athletic Strengths:</strong>
                  <div className="flex flex-wrap gap-2">
                    {activeModalSchool.sportsStrong.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-lg bg-[#FDF2F2] text-[#E22E34] text-xs font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveModalSchool(null);
                  onOpenConsultation();
                }}
                className="w-full py-4 rounded-xl bg-[#E22E34] hover:bg-[#C92429] text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Check Admission & Scholarship Eligibility
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
