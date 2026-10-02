"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreExperience: () => void;
}

export default function Hero({ onOpenConsultation, onExploreExperience }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-36 pb-12 overflow-hidden bg-[#111111]">
      
      {/* Cinematic Background Video with Fallback Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/campus-aerial.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05] scale-[1.02]"
        >
          <source src="https://pub-58af4468e0534537944d00a8c62a6275.r2.dev/aislate/20132260-uhd_3840_2160_60fps.mp4" type="video/mp4" />
        </video>
        {/* Clean Neutral Dark Cinematic Vignette (Zero Blue Tint) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-[#111111]/65" />
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full my-auto py-10">
        <div className="max-w-3xl">
          
          {/* Headline Appearing Line by Line */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl lg:text-[68px] font-semibold text-white leading-[1.08] tracking-tight"
            >
              Find the <span className="highlight-italic-gold">Right</span> U.S. Boarding School for Your Child.
            </motion.h1>
          </div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg lg:text-xl text-[#EBE3D4] font-normal max-w-2xl leading-relaxed mb-10"
          >
            Global Education &amp; Sports Partners (GESP) helps Indian families identify boarding schools where their child can thrive—based on academic profile, interests, athletic ambitions, and family priorities.
          </motion.p>

          {/* Primary & Secondary Action CTAs with subtle roundness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-5"
          >
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#FAB900] hover:bg-[#E4B603] text-[#041235] text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group cursor-pointer rounded-lg shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <span>Talk With GESP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreExperience}
              className="px-6 py-4 rounded-lg border border-white/30 hover:border-[#FAB900] text-xs font-semibold tracking-wider uppercase text-white hover:text-[#FAB900] bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Boarding Schools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Real Statistics from gespeducation.com */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-[#EBE3D4]"
      >
        <div className="grid grid-cols-3 gap-6 sm:gap-12">
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#FAB900]">1,700+</div>
            <div className="text-[11px] font-mono tracking-wider text-[#E9E9E9]/80 uppercase">Placements Since 2020</div>
          </div>
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#FAB900]">75+</div>
            <div className="text-[11px] font-mono tracking-wider text-[#E9E9E9]/80 uppercase">Partner Boarding Schools</div>
          </div>
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-bold text-[#FAB900]">30+</div>
            <div className="text-[11px] font-mono tracking-wider text-[#E9E9E9]/80 uppercase">Countries Represented</div>
          </div>
        </div>

        <a
          href="#the-question"
          className="inline-flex items-center gap-2 text-white hover:text-[#FAB900] transition-colors font-mono text-xs uppercase"
        >
          <span>Discover the GESP Fit</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FAB900]" />
        </a>
      </motion.div>

    </section>
  );
}
