"use client";

import React, { useState } from "react";
import { ArrowRight, BookOpen, Sparkles, Target, Trophy, Users, Heart } from "lucide-react";

interface FitSectionProps {
  onOpenConsultation: () => void;
}

export default function FitSection({ onOpenConsultation }: FitSectionProps) {
  const [selectedSport, setSelectedSport] = useState("Soccer");
  const [selectedGrade, setSelectedGrade] = useState("Grade 10");
  const [selectedTrack, setSelectedTrack] = useState("STEM / Honors");

  const sports = ["Soccer", "Basketball", "Tennis", "Swimming", "Rowing", "Alpine Skiing", "Track"];
  const grades = ["Grade 9", "Grade 10", "Grade 11", "Post-Graduate Year"];
  const tracks = ["STEM / Honors", "Humanities & Pre-Law", "Fine Arts & Music", "Business / Entrepreneurship"];

  return (
    <section id="fit-finder" className="py-20 bg-[#F8F9FB] border-b border-[#EAECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E22E34] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Eligibility & Fit Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171F] tracking-tight">
            Find the School That Fits the Student
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-1">
            We evaluate the complete individual rather than matching purely on arbitrary rankings.
          </p>
        </div>

        {/* Diagnostic Tool (upGrad Course Recommender Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Selectors in Rounded Card */}
          <div className="lg:col-span-7 upgrad-card p-6 sm:p-8 bg-white space-y-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#14171F] block mb-3">
                01 • Select Primary Athletic or Activity Focus
              </label>
              <div className="flex flex-wrap gap-2">
                {sports.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSport(s)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedSport === s
                        ? "bg-[#E22E34] text-white shadow-xs"
                        : "bg-[#F1F4F9] text-[#383E49] hover:bg-zinc-200"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#14171F] block mb-3">
                02 • Target Entry Grade Level
              </label>
              <div className="flex flex-wrap gap-2">
                {grades.map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGrade(g)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedGrade === g
                        ? "bg-[#E22E34] text-white shadow-xs"
                        : "bg-[#F1F4F9] text-[#383E49] hover:bg-zinc-200"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#14171F] block mb-3">
                03 • Academic Specialization Track
              </label>
              <div className="flex flex-wrap gap-2">
                {tracks.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTrack(t)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedTrack === t
                        ? "bg-[#E22E34] text-white shadow-xs"
                        : "bg-[#F1F4F9] text-[#383E49] hover:bg-zinc-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Diagnostic Recommendation Card */}
          <div className="lg:col-span-5 upgrad-card p-6 sm:p-8 bg-[#14171F] text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E22E34] bg-[#E22E34]/10 px-2.5 py-1 rounded-full border border-[#E22E34]/30">
                  Custom Fit Blueprint
                </span>
                <span className="text-xs text-zinc-400 font-mono">GESP Match Engine</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2">
                Target Profile Match
              </h3>

              <div className="space-y-3 py-4 my-4 border-y border-white/10 text-xs text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Athletic Path:</span>
                  <strong className="text-white">{selectedSport}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Entry Grade:</span>
                  <strong className="text-white">{selectedGrade}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Academic Focus:</span>
                  <strong className="text-white">{selectedTrack}</strong>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-normal mb-6">
                Based on these parameters, GESP identifies 4-6 target prep institutions with direct coaching staff connections and relevant academic honors programs.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-4 rounded-xl bg-[#E22E34] hover:bg-[#C92429] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Get Matched School Recommendations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
