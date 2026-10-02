"use client";

import React, { useRef } from "react";
import { SCHOOL_VISITS } from "@/data/gespData";
import { ArrowLeft, ArrowRight, Camera, MapPin, Eye } from "lucide-react";

interface CampusVisitsProps {
  onOpenConsultation: () => void;
}

export default function CampusVisits({ onOpenConsultation }: CampusVisitsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const offset = dir === "left" ? -420 : 420;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="campus-visits" className="py-20 bg-white border-b border-[#EAECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E22E34] text-xs font-bold mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Ground Presence & School Tours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171F] tracking-tight">
              We Don&apos;t Just Recommend Schools. We Visit Them.
            </h2>
            <p className="text-sm sm:text-base text-[#5E6470] mt-1 max-w-2xl">
              Our partners physically visit campuses, meet deans of admission, and evaluate daily student life.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-xl border border-[#EAECEF] bg-white hover:bg-zinc-100 text-[#14171F] transition-colors cursor-pointer shadow-xs"
              aria-label="Previous"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-xl border border-[#EAECEF] bg-white hover:bg-zinc-100 text-[#14171F] transition-colors cursor-pointer shadow-xs"
              aria-label="Next"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Rounded Horizontal Card Carousel (upGrad Project/Campus Tour Format) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory"
        >
          {SCHOOL_VISITS.map((visit) => (
            <div
              key={visit.id}
              className="snap-start shrink-0 w-[300px] sm:w-[380px] lg:w-[420px] upgrad-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-56 overflow-hidden relative bg-zinc-100">
                  <img
                    src={visit.image}
                    alt={visit.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#14171F]/80 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E22E34]" />
                    <span>{visit.location}</span>
                  </div>

                  {visit.badge && (
                    <div className="absolute top-3 right-3 bg-[#E22E34] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {visit.badge}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#14171F] mb-1.5 line-clamp-1">
                    {visit.name}
                  </h3>
                  <p className="text-xs text-[#5E6470] italic mb-3">
                    &ldquo;{visit.quote}&rdquo;
                  </p>
                  <p className="text-xs text-[#383E49] leading-relaxed line-clamp-3">
                    {visit.notes}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex flex-wrap gap-1.5">
                {visit.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium bg-[#F1F4F9] text-[#383E49] px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F8F9FB] border border-[#EAECEF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#14171F]">
              Planning a U.S. Boarding School Tour or Revisit?
            </h4>
            <p className="text-xs text-[#5E6470] mt-0.5">
              GESP arranges customized campus itineraries, coach meetings, and private family accompaniments across New England.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-xl bg-[#14171F] hover:bg-[#E22E34] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            Explore Campus Tour Packages
          </button>
        </div>

      </div>
    </section>
  );
}
