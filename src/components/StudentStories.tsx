"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const stories = [
  {
    student: "Mateo Silva",
    country: "Spain",
    sport: "Varsity Soccer",
    school: "Williston Northampton",
    outcome: "Class of 2024 • Committed to Dartmouth",
    quote: "GESP drove me to campus, introduced me to the varsity coach, and made my family feel completely at peace.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80"
  },
  {
    student: "Chiara Rossi",
    country: "Italy",
    sport: "Tennis & Violin",
    school: "Wilbraham & Monson",
    outcome: "Class of 2025 • High Honors",
    quote: "GESP found a Massachusetts campus where both my tournaments and my recitals are celebrated.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
  },
  {
    student: "André Albuquerque",
    country: "Brazil",
    sport: "Basketball",
    school: "The Kiski School",
    outcome: "Class of 2023 • NCAA D1 Athlete",
    quote: "The discipline I learned here transformed my game and helped me earn an NCAA scholarship.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80"
  }
];

export default function StudentStories() {
  const [index, setIndex] = useState(0);
  const current = stories[index];

  return (
    <section id="stories" className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-t border-zinc-200">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B38622] block mb-2">
            09 • Student Stories
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#141517]">
            Real Journeys
          </h2>
        </div>

        {/* Clean Light Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 light-card border border-zinc-200/80 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
          <div className="sm:col-span-4 aspect-square rounded-2xl overflow-hidden bg-zinc-100">
            <img src={current.image} alt={current.student} className="w-full h-full object-cover" />
          </div>

          <div className="sm:col-span-8 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B38622] bg-[#FAF9F6] px-2.5 py-1 rounded border border-zinc-200 inline-block mb-3">
                {current.outcome}
              </span>
              <p className="font-editorial text-xl sm:text-2xl text-[#141517] italic leading-snug">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
              <div>
                <h4 className="font-medium text-sm text-[#141517]">{current.student}</h4>
                <p className="text-xs text-zinc-500 font-mono">{current.country} • {current.school}</p>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIndex((index - 1 + stories.length) % stories.length)}
                  className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-50"
                  aria-label="Previous"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-zinc-700" />
                </button>
                <button
                  onClick={() => setIndex((index + 1) % stories.length)}
                  className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-50"
                  aria-label="Next"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
