"use client";

import React from "react";
import { TIMELINE_STEPS } from "@/data/gespData";

interface JourneyProps {
  onOpenConsultation: () => void;
}

export default function Journey({ onOpenConsultation }: JourneyProps) {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 bg-[#F3F1EC] border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        
        <div className="max-w-xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B38622] block mb-2">
            06 • Timeline
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#141517]">
            The Journey
          </h2>
          <p className="text-zinc-600 text-sm mt-2 font-light">
            From first consultation to first day on campus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TIMELINE_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-white border border-zinc-200/80 light-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#B38622]">
                    PHASE {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-editorial text-xl text-[#141517] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 text-[11px] text-zinc-400 font-mono">
                {step.details}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
