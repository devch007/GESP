"use client";

import React, { useRef } from "react";
import { VISITED_SCHOOLS } from "@/data/landingData";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface SchoolVisitsProps {
  onOpenConsultation: () => void;
}

export default function SchoolVisits({ onOpenConsultation }: SchoolVisitsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -440 : 440;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="school-visits" className="py-24 lg:py-36 bg-gradient-to-b from-[#FAF9F6] via-[#FFFFFF] to-[#FAF8F5] border-b border-[#E8E4DA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="subline-tag block mb-3">
              GROUND PRESENCE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[#333333] leading-tight">
              We don&apos;t just recommend schools. <br className="hidden sm:inline" />
              We experience them.
            </h2>
            <p className="text-base text-[#5A5751] font-light mt-4 leading-relaxed">
              Our team spends time on the ground — meeting deans, observing classroom dynamics, and evaluating athletic facilities across the United States.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3.5 border border-[#0D2153] bg-transparent text-[#0D2153] hover:bg-[#0D2153] hover:text-white transition-colors cursor-pointer rounded-lg shadow-sm"
              aria-label="Previous School"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3.5 border border-[#0D2153] bg-transparent text-[#0D2153] hover:bg-[#0D2153] hover:text-white transition-colors cursor-pointer rounded-lg shadow-sm"
              aria-label="Next School"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory"
        >
          {VISITED_SCHOOLS.map((school) => (
            <div
              key={school.name}
              className="snap-start shrink-0 w-[300px] sm:w-[400px] lg:w-[440px] flex flex-col justify-between"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#EAE7DD] mb-6 relative rounded-xl border border-[#E9E9E9] shadow-sm">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-full object-cover img-zoom filter contrast-[1.02]"
                />
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#0D2153] font-bold uppercase tracking-wider block mb-1">
                  {school.location}
                </span>

                <h3 className="font-heading text-2xl font-normal text-[#333333] mb-2">
                  {school.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#69727D] font-light leading-relaxed mb-4">
                  {school.experience}
                </p>

                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#69727D] uppercase tracking-wider pt-3 border-t border-[#E9E9E9]">
                  {school.tags.map((tag) => (
                    <span key={tag} className="border border-[#E9E9E9] px-2.5 py-1 rounded-md bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 pt-8 border-t border-[#E9E9E9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#69727D] font-light">
            GESP arranges customized campus visit itineraries and coach meetings for visiting Indian families.
          </p>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-[#0D2153] hover:bg-[#041235] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shrink-0 rounded-lg shadow-sm"
          >
            <span>Explore Campus Visits</span>
            <ArrowUpRight className="w-4 h-4 text-[#FAB900]" />
          </button>
        </div>

      </div>
    </section>
  );
}
