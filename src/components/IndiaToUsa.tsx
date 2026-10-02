"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IndiaToUsa() {
  return (
    <section className="py-24 lg:py-36 bg-[#111111] text-[#F7F5F0] border-b border-[#222222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#C59B27] block">
              The Pathway
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight"
            >
              From India <br />
              to the right campus.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#C8C4B8] font-light leading-relaxed max-w-lg"
            >
              Explore a different kind of school experience — one built around academics, independence, community and opportunity.
            </motion.p>

            <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-6 text-xs font-mono text-[#A8A498]">
              <div>
                <span className="text-[#F7F5F0] font-semibold block mb-1">LOCAL PRESENCE</span>
                <span>Delhi • Mumbai • Bengaluru</span>
              </div>
              <div>
                <span className="text-[#F7F5F0] font-semibold block mb-1">U.S. HEADQUARTERS</span>
                <span>Easthampton, Massachusetts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Global Presence World Map Showcase */}
          <div className="lg:col-span-6">
            <div className="bg-[#181818] border border-white/10 p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-2xl">
              
              {/* Header inside Map Card */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FAB900] animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-[#F7F5F0] uppercase font-bold">
                    GLOBAL FOOTPRINT & ADMISSION HUBS
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#A8A498] hidden sm:inline">
                  50+ COUNTRIES CONNECTED
                </span>
              </div>

              {/* Real World Presence Map with Highlighted Hubs */}
              <div className="relative w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 p-4 sm:p-6 flex items-center justify-center">
                <img
                  src="/images/world-presence-map.png"
                  alt="GESP Global Presence and Network Map"
                  className="w-full h-auto object-contain max-h-[320px] drop-shadow-md filter brightness-105"
                />
              </div>

              {/* Bottom Context Details */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono text-[#A8A498]">
                <div>
                  <span className="text-[#FAB900] font-semibold block mb-0.5">ESTABLISHED REACH</span>
                  <span>U.S. • Europe • India • Latin America</span>
                </div>
                <div>
                  <span className="text-[#F7F5F0] font-semibold block mb-0.5">SEAMLESS TRANSITION</span>
                  <span>Admissions, F-1 Visa & On-Campus Care</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
