"use client";

import React from "react";
import { INDIA_TRUST_PILLARS } from "@/data/gespIndiaData";
import { ShieldCheck, BookOpen, Award, Plane, CheckCircle2 } from "lucide-react";

export default function IndiaTrustPillars() {
  const icons = [
    <BookOpen key="1" className="w-6 h-6 text-[#E22E34]" />,
    <Award key="2" className="w-6 h-6 text-[#E22E34]" />,
    <Plane key="3" className="w-6 h-6 text-[#E22E34]" />,
    <ShieldCheck key="4" className="w-6 h-6 text-[#E22E34]" />,
  ];

  return (
    <section className="py-20 bg-[#F8F9FC] border-b border-[#EAECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E22E34] text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The GESP India Guardian Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171F] tracking-tight">
            Why Indian Families Trust GESP
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-1">
            Built specifically to solve the unique academic, athletic, and travel challenges of Indian students heading to the USA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDIA_TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="upgrad-card p-6 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FDF2F2] border border-[#FCDADA] flex items-center justify-center mb-4">
                  {icons[idx]}
                </div>

                <h3 className="text-lg font-bold text-[#14171F] mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#5E6470] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAECEF] flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified GESP Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
