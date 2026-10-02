"use client";

import React, { useRef } from "react";
import { CAMPUS_EXPERIENCES } from "@/data/landingData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BoardingExperience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="boarding-experience" className="py-24 lg:py-36 bg-transparent border-b border-[#E8E4DA]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-semibold text-[#1A1A1A] leading-[1.12] mb-4">
              Imagine their school being a <span className="highlight-italic">community.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5A5E66] font-normal leading-relaxed">
              Living on campus fosters intellectual curiosity, personal accountability, and lifelong friendships across a global peer group.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3.5 border border-[#0D2153] bg-transparent text-[#0D2153] hover:bg-[#0D2153] hover:text-white transition-colors cursor-pointer rounded-lg shadow-sm"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3.5 border border-[#0D2153] bg-transparent text-[#0D2153] hover:bg-[#0D2153] hover:text-white transition-colors cursor-pointer rounded-lg shadow-sm"
              aria-label="Next image"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Editorial Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory items-stretch"
        >
          {/* Featured Live Campus Video Card */}
          <div className="snap-start shrink-0 w-[320px] sm:w-[440px] lg:w-[500px] flex flex-col justify-between group">
            <div className="w-full aspect-[4/3] overflow-hidden bg-[#041235] relative mb-6 rounded-2xl border border-[#0D2153] shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/campus-aerial.jpg"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
              >
                <source src="https://pub-58af4468e0534537944d00a8c62a6275.r2.dev/aislate/sp.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#041235]/90 via-transparent to-black/20 pointer-events-none" />

              {/* Live Video Indicator Badge */}
              <div className="absolute top-4 left-4 bg-[#0D2153]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-[#FAB900]/40 shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FAB900] animate-pulse" />
                <span>CAMPUS TOUR • LIVE FOOTAGE</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono text-[#FAB900] uppercase tracking-wider block">Historic Quad & Sports Fields</span>
                <span className="font-heading text-lg font-normal">Everyday life on a U.S. boarding campus</span>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-normal text-[#333333] group-hover:text-[#0D2153] transition-colors mb-2">
                Partner School
              </h3>
              <p className="text-xs sm:text-sm text-[#69727D] font-light leading-relaxed">
                Experience the living quadrangles, dynamic Harkness seminar discussions, and world-class athletic facilities firsthand.
              </p>
            </div>
          </div>

          {CAMPUS_EXPERIENCES.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[300px] sm:w-[420px] lg:w-[480px] flex flex-col justify-between group"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#EAE7DD] relative mb-6 rounded-2xl border border-[#E9E9E9] shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover img-zoom filter contrast-[1.02]"
                />
                
                {/* Tiny Minimalist Metadata Label */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0D2153] text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-[#E9E9E9] shadow-sm">
                  {item.category}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-normal text-[#333333] group-hover:text-[#0D2153] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#69727D] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
