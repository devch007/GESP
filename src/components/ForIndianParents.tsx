"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ForIndianParentsProps {
  onOpenConsultation: () => void;
}

export default function ForIndianParents({ onOpenConsultation }: ForIndianParentsProps) {
  const pillars = [
    {
      title: "ACADEMIC FIT",
      desc: "Course rigor, Harkness seminar discussions, AP/IB curriculums, and individualized college counseling."
    },
    {
      title: "ATHLETIC FIT",
      desc: "Collegiate-grade facilities, varsity coaching, strength training telemetry, and direct college scouting access."
    },
    {
      title: "FINANCIAL CONSIDERATIONS",
      desc: "Transparent breakdown of tuition, residential boarding fees, health insurance, and merit opportunities."
    },
    {
      title: "STUDENT EXPERIENCE",
      desc: "Secure 24/7 campus environments, faculty dorm parents, health centers, and international student integration."
    },
    {
      title: "LONG-TERM GOALS",
      desc: "University matriculation track records, Ivy League trajectories, and alumni network continuity."
    }
  ];

  return (
    <section className="py-24 lg:py-36 bg-gradient-to-b from-[#FAF8F5] via-[#FFFFFF] to-[#FAF9F6] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="subline-tag block">
              FOR INDIAN PARENTS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[#333333] leading-[1.08] tracking-tight">
              A big decision deserves personal guidance.
            </h2>
            <p className="text-base sm:text-lg text-[#69727D] font-light leading-relaxed">
              Choosing a boarding school abroad is a decision that affects far more than academics. We help families understand the schools, the environment, the opportunities and the journey ahead.
            </p>
            <button
              onClick={onOpenConsultation}
              className="px-7 py-4 bg-[#0D2153] hover:bg-[#041235] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 cursor-pointer rounded-lg shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Speak With a Senior Advisor</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FAB900]" />
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full aspect-[4/3] overflow-hidden bg-[#EAE7DD] relative rounded-xl border border-[#E9E9E9] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
                alt="Faculty discussion with student"
                className="w-full h-full object-cover filter contrast-[1.02]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 text-xs text-[#0D2153] font-mono rounded-lg border border-[#E9E9E9] shadow-sm">
                Dedicated residential advisory • Easthampton, Massachusetts
              </div>
            </div>
          </div>

        </div>

        {/* 5 Pillars Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-12 border-t border-[#E8E4DA]">
          {pillars.map((item, idx) => (
            <div key={item.title} className="space-y-3">
              <span className="font-mono text-xs text-[#858076]">0{idx + 1}</span>
              <h3 className="font-heading text-lg font-normal text-[#111111] tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-[#5A5751] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
