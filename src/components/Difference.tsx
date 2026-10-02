"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface DifferenceProps {
  onOpenConsultation: () => void;
}

export default function Difference({ onOpenConsultation }: DifferenceProps) {
  return (
    <section id="difference" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E2D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Split Grid: Large Statement on Left, Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-mono tracking-widest uppercase text-[#777777] block mb-4">
              Our Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-[1.12]">
              Choosing a school is about more than admission.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6 text-[#444444] text-base sm:text-lg font-light leading-relaxed">
            <p>
              It is about finding the right environment for who a student is today — and who they want to become.
            </p>
            <p className="text-sm sm:text-base text-[#666666]">
              At GESP, we don&apos;t match students through automated algorithms or corporate quotas. We work closely with families and schools to understand learning styles, personal maturity, athletic ambition, and campus cultures.
            </p>
          </div>

        </div>

        {/* 4 Editorial Columns (No Generic Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#E5E2D8]">
          
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#777777]">01</span>
            <h3 className="font-heading text-xl font-medium text-[#111111]">Fit</h3>
            <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
              Finding the right community scale, academic pace, and social environment.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-[#777777]">02</span>
            <h3 className="font-heading text-xl font-medium text-[#111111]">Experience</h3>
            <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
              Guidance from former prep athletic directors, coaches, and admissions leaders.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-[#777777]">03</span>
            <h3 className="font-heading text-xl font-medium text-[#111111]">Opportunity</h3>
            <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
              Direct access to head coaches, athletic combines, and university pipelines.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-[#777777]">04</span>
            <h3 className="font-heading text-xl font-medium text-[#111111]">Relationships</h3>
            <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
              Personal, round-the-clock advisory through every stage of the student&apos;s journey.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
