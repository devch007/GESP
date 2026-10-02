"use client";

import React, { useState } from "react";
import { FIT_FACTORS } from "@/data/landingData";
import { ArrowRight } from "lucide-react";

interface TheFitProps {
  onOpenConsultation: () => void;
}

export default function TheFit({ onOpenConsultation }: TheFitProps) {
  const [selectedFactor, setSelectedFactor] = useState(FIT_FACTORS[0]);

  return (
    <section id="fit" className="py-24 lg:py-36 bg-gradient-to-b from-[#FAF8F5] via-[#FFFFFF] to-[#FAF9F6] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="subline-tag block mb-3">
            EVALUATION METHODOLOGY
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[#333333] leading-tight">
            Not every great school is the right school.
          </h2>
          <p className="text-base text-[#5A5751] font-light mt-4 leading-relaxed max-w-2xl">
            We evaluate the complete individual rather than matching purely on arbitrary rankings. Select each factor to understand how GESP assesses a student&apos;s potential.
          </p>
        </div>

        {/* Dynamic Composition: Left Factors List + Right Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Factor Selector */}
          <div className="lg:col-span-6 divide-y divide-[#E8E4DA] border-y border-[#E8E4DA]">
            {FIT_FACTORS.map((factor) => {
              const isSelected = selectedFactor.id === factor.id;
              return (
                <div
                  key={factor.id}
                  onClick={() => setSelectedFactor(factor)}
                  onMouseEnter={() => setSelectedFactor(factor)}
                  className={`py-5 sm:py-6 cursor-pointer transition-colors px-2 flex items-center justify-between ${
                    isSelected ? "bg-[#FCFBF8]" : "hover:bg-[#FCFBF8]/60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono tracking-widest ${isSelected ? "text-[#FAB900]" : "text-[#858076]"}`}>
                      ●
                    </span>
                    <span className={`font-heading text-xl sm:text-2xl font-normal ${isSelected ? "text-[#0D2153] font-medium" : "text-[#69727D]"}`}>
                      {factor.name}
                    </span>
                  </div>

                  <span className={`text-xs font-mono uppercase ${isSelected ? "text-[#0D2153] font-bold" : "text-[#858076]"}`}>
                    {isSelected ? "Active" : "Explore →"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Dynamic Editorial Card with subtle roundness */}
          <div className="lg:col-span-6 bg-white border border-[#E9E9E9] p-8 sm:p-10 shadow-sm rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-full aspect-[16/10] overflow-hidden bg-[#EAE7DD] mb-6 rounded-lg border border-[#E9E9E9]">
                <img
                  key={selectedFactor.id}
                  src={selectedFactor.image}
                  alt={selectedFactor.headline}
                  className="w-full h-full object-cover filter contrast-[1.02] transition-opacity duration-500"
                />
              </div>

              <span className="text-[10px] font-mono tracking-widest uppercase text-[#0D2153] font-bold block mb-2">
                ASSESSMENT DIMENSION: {selectedFactor.name}
              </span>

              <h3 className="font-heading text-2xl font-normal text-[#333333] mb-3">
                {selectedFactor.headline}
              </h3>

              <p className="text-xs sm:text-sm text-[#69727D] font-light leading-relaxed mb-6">
                {selectedFactor.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E9E9E9]">
              <button
                onClick={onOpenConsultation}
                className="w-full py-4 bg-[#0D2153] hover:bg-[#041235] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-lg shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Discover Your Fit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FAB900]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
