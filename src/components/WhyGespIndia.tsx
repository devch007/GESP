"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Eye, Trophy, UserCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function WhyGespIndia() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  const pillars = [
    {
      number: "01",
      title: "The Right Fit",
      summary: "Beyond grades & applications",
      icon: Compass,
      quote: "We understand the student as a whole, not just a score sheet.",
      details: "Academic pace, community culture, emotional maturity, and personal interests are carefully weighed before any school is considered.",
      stat: "100%",
      statLabel: "Personalized Evaluation"
    },
    {
      number: "02",
      title: "Real Ground Experience",
      summary: "On-campus firsthand knowledge",
      icon: Eye,
      quote: "We walk the quads, visit dorms, and meet admissions deans in person.",
      details: "Our team spends continuous time on U.S. campuses observing classroom dynamics, faculty mentorship, and varsity training firsthand.",
      stat: "75+",
      statLabel: "Partner Schools"
    },
    {
      number: "03",
      title: "Academics × Athletics",
      summary: "Integrated student-athlete pathways",
      icon: Trophy,
      quote: "Where high-level competition meets rigorous scholarship.",
      details: "Competitive circuits like NEPSAC offer Olympic-caliber training, dedicated coaching staff, and direct NCAA recruitment exposure.",
      stat: "NCAA",
      statLabel: "Collegiate Pipelines"
    },
    {
      number: "04",
      title: "Senior Advisory Guidance",
      summary: "End-to-end family partnership",
      icon: UserCheck,
      quote: "Families have seasoned educators & mentors guiding every step.",
      details: "You work directly with senior advisors who have walked these pathways as former prep deans, varsity athletes, and international counselors.",
      stat: "1,700+",
      statLabel: "Global Placements"
    }
  ];

  return (
    <section id="why-gesp" className="py-24 lg:py-36 bg-transparent border-b border-[#E8E4DA]/80 relative overflow-hidden">
      
      {/* Ambient background blur glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FAB900]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0D2153]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="subline-tag block mb-3">
              GESP DIFFERENCE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] leading-[1.08] tracking-tight">
              We propose, they <span className="highlight-italic">choose.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5A5E66] font-light mt-4 leading-relaxed">
              Our network of 75+ boarding schools allows us to offer students the best options for them. Every student is unique, and that is why they need the school that best suits their needs.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#5A5E66] border-t lg:border-t-0 lg:border-l border-[#E8E4DA] pt-4 lg:pt-0 lg:pl-8">
            <div>
              <span className="text-[#0D2153] font-bold text-lg block">75+</span>
              <span>U.S. PREP CAMPUSES</span>
            </div>
            <div className="w-[1px] h-8 bg-[#E8E4DA]" />
            <div>
              <span className="text-[#0D2153] font-bold text-lg block">10+</span>
              <span>YEARS ON THE GROUND</span>
            </div>
          </div>
        </div>

        {/* 4 Interactive Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(idx)}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-400 cursor-pointer border group overflow-hidden ${
                  isHovered
                    ? "bg-white border-[#0D2153] shadow-xl ring-1 ring-[#0D2153]/15 -translate-y-1.5"
                    : "bg-[#FFFFFF]/70 border-[#E8E4DA] hover:border-[#0D2153]/40 shadow-xs"
                }`}
              >
                {/* Subtle top gold accent bar on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-[#FAB900] transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div>
                  {/* Card Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-heading text-4xl sm:text-5xl font-light text-[#1A1A1A] group-hover:text-[#0D2153] transition-colors">
                      {pillar.number}
                    </span>

                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isHovered
                          ? "bg-[#0D2153] text-[#FAB900] shadow-sm scale-110"
                          : "bg-[#FAF8F5] text-[#5A5E66] border border-[#E8E4DA]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Category */}
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#FAB900] font-bold block mb-1">
                    {pillar.summary}
                  </span>
                  <h3 className="font-heading text-2xl font-normal text-[#1A1A1A] mb-4 group-hover:text-[#0D2153] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Quote / Main Statement */}
                  <p className="text-sm font-medium text-[#1A1A1A] leading-relaxed">
                    &ldquo;{pillar.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-8 pt-5 border-t border-[#E8E4DA] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0D2153] block">
                      {pillar.stat}
                    </span>
                    <span className="text-[10px] font-mono text-[#838891] uppercase tracking-wider">
                      {pillar.statLabel}
                    </span>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-[#FAF8F5] group-hover:bg-[#0D2153] group-hover:text-white flex items-center justify-center transition-colors text-[#5A5E66]">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Interactive Guarantee Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-[#E8E4DA] rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0D2153]/5 border border-[#0D2153]/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#FAB900]" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-normal text-[#1A1A1A]">
                Unbiased, Direct Campus Placement
              </h4>
              <p className="text-xs sm:text-sm text-[#5A5E66] font-light">
                We represent students and their families to find the true best fit—not arbitrary sales quotas.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono tracking-wider text-[#0D2153] font-bold uppercase">
              75+ U.S. BOARDING SCHOOLS NETWORK
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
