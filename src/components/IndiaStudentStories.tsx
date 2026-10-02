"use client";

import React, { useState } from "react";
import { INDIA_STUDENT_STORIES } from "@/data/gespIndiaData";
import { ArrowLeft, ArrowRight, Award, Quote, CheckCircle2, GraduationCap } from "lucide-react";

export default function IndiaStudentStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = INDIA_STUDENT_STORIES[activeIdx];

  return (
    <section id="stories" className="py-20 bg-white border-b border-[#EAECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E22E34] text-xs font-bold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Real Indian Student Journeys</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171F] tracking-tight">
              From Indian Schools to U.S. Campuses
            </h2>
            <p className="text-sm sm:text-base text-[#5E6470] mt-1 max-w-2xl">
              How students from Delhi, Mumbai, and Hyderabad transitioned from CBSE, ICSE, and IB boards into top American boarding schools and Ivy/NCAA programs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveIdx((activeIdx - 1 + INDIA_STUDENT_STORIES.length) % INDIA_STUDENT_STORIES.length)}
              className="p-3 rounded-xl border border-[#EAECEF] bg-white hover:bg-zinc-100 text-[#14171F] transition-colors cursor-pointer shadow-xs"
              aria-label="Previous Student"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveIdx((activeIdx + 1) % INDIA_STUDENT_STORIES.length)}
              className="p-3 rounded-xl border border-[#EAECEF] bg-white hover:bg-zinc-100 text-[#14171F] transition-colors cursor-pointer shadow-xs"
              aria-label="Next Student"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Student Card (upGrad Alumni Success Stories format) */}
        <div className="upgrad-card p-6 sm:p-10 bg-[#F8F9FC] border border-[#EAECEF] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Student Image */}
          <div className="lg:col-span-4 aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-200 relative shadow-sm">
            <img
              src={current.image}
              alt={current.student}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-xs">
              <span className="text-[10px] font-bold text-[#E22E34] uppercase tracking-wider block">
                {current.board}
              </span>
              <div className="font-extrabold text-sm text-[#14171F]">{current.student}</div>
              <div className="text-[11px] text-[#5E6470]">{current.city}</div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAECEF] text-xs font-bold text-[#14171F] mb-4">
                <GraduationCap className="w-3.5 h-3.5 text-[#E22E34]" />
                <span>Placement: {current.school}</span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#E22E34] mb-2">
                Outcome & Achievement
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#14171F] mb-4">
                {current.outcome}
              </h3>

              <blockquote className="text-sm sm:text-base text-[#383E49] leading-relaxed italic bg-white p-5 rounded-2xl border border-[#EAECEF] shadow-xs">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            <div className="pt-4 border-t border-[#EAECEF] flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                {INDIA_STUDENT_STORIES.map((s, idx) => (
                  <button
                    key={s.student}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeIdx === idx ? "w-8 bg-[#E22E34]" : "w-2.5 bg-zinc-300"
                    }`}
                    aria-label={`Student story ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="text-xs text-[#5E6470] font-medium">
                Focus Discipline: <strong className="text-[#14171F]">{current.sportOrMajor}</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
