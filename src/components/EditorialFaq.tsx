"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/landingData";
import { Plus, Minus } from "lucide-react";

export default function EditorialFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 lg:py-36 bg-gradient-to-b from-[#FAF9F6] via-[#FFFFFF] to-[#FAF8F5] border-b border-[#E8E4DA]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="subline-tag block mb-3">
            QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-normal text-[#333333] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#69727D] font-light mt-3 leading-relaxed">
            Direct, transparent insights for families considering U.S. boarding school options.
          </p>
        </div>

        {/* Clean Editorial Accordion List with subtle rounded cards */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={item.question} 
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-white border-[#0D2153]/20 shadow-sm" 
                    : "bg-white/60 border-[#E9E9E9] hover:border-[#0D2153]/40 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer group"
                >
                  <span className="font-heading text-xl sm:text-2xl font-normal text-[#333333] group-hover:text-[#0D2153] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-colors shrink-0 mt-0.5 ${isOpen ? "bg-[#0D2153] text-white" : "text-[#69727D] group-hover:text-[#0D2153] bg-black/5"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-10 text-sm sm:text-base text-[#69727D] font-light leading-relaxed border-t border-[#E9E9E9] mt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
