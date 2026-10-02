"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface FindYourFitProps {
  onOpenConsultation: () => void;
}

export default function FindYourFit({ onOpenConsultation }: FindYourFitProps) {
  const [sport, setSport] = useState("Soccer");
  const [grade, setGrade] = useState("Grade 10");
  const [track, setTrack] = useState("STEM / Honors");

  const sports = ["Soccer", "Basketball", "Tennis", "Swimming", "Rowing", "Alpine Skiing", "Track"];
  const grades = ["Grade 9", "Grade 10", "Grade 11", "Post-Graduate"];
  const tracks = ["STEM / Honors", "Humanities & Arts", "Entrepreneurship", "General Prep"];

  return (
    <section id="fit-finder" className="py-24 px-6 md:px-12 bg-[#F3F1EC] border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        
        <div className="max-w-xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B38622] block mb-2">
            04 • Profile Assessment
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#141517]">
            Find Your Fit
          </h2>
          <p className="text-zinc-600 text-sm mt-2 font-light">
            We match based on personal interests, athletic ambition, and academic pace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl light-card space-y-6">
            <div>
              <label className="text-xs font-mono uppercase text-zinc-500 block mb-2.5">
                Select Sport or Activity
              </label>
              <div className="flex flex-wrap gap-2">
                {sports.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSport(s)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      sport === s
                        ? "bg-[#141517] text-white"
                        : "bg-[#FAF9F6] text-zinc-700 border border-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-zinc-500 block mb-2.5">
                Target Grade
              </label>
              <div className="flex flex-wrap gap-2">
                {grades.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGrade(g)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      grade === g
                        ? "bg-[#141517] text-white"
                        : "bg-[#FAF9F6] text-zinc-700 border border-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-zinc-500 block mb-2.5">
                Academic Track
              </label>
              <div className="flex flex-wrap gap-2">
                {tracks.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTrack(t)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      track === t
                        ? "bg-[#141517] text-white"
                        : "bg-[#FAF9F6] text-zinc-700 border border-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-[#FAF9F6] border border-zinc-300 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B38622] block mb-2">
                Personalized Blueprint
              </span>
              <h3 className="font-editorial text-2xl text-[#141517] mb-4">
                Tailored Advisory Match
              </h3>

              <div className="space-y-2.5 text-xs text-zinc-600 border-y border-zinc-200 py-4 mb-5">
                <div className="flex justify-between">
                  <span>Athletic Focus:</span>
                  <strong className="text-[#141517]">{sport}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Entry Level:</span>
                  <strong className="text-[#141517]">{grade}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Specialization:</span>
                  <strong className="text-[#141517]">{track}</strong>
                </div>
              </div>

              <p className="text-xs text-zinc-500 mb-6 font-light leading-relaxed">
                GESP curates a bespoke portfolio of 4-6 target boarding schools matching this profile.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3.5 rounded-full bg-[#141517] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#B38622] transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
