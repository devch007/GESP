"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, GraduationCap, Trophy, Users, ShieldCheck } from "lucide-react";

interface FitDimension {
  id: string;
  label: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlight: string;
  image: string;
  badge: string;
}

const FIT_DIMENSIONS: FitDimension[] = [
  {
    id: "individual",
    label: "How They Learn",
    tagline: "Academics & Classroom Style",
    icon: GraduationCap,
    description: "We look at your child's favorite subjects, study habits, and future goals to find schools where teachers give them personal attention.",
    highlight: "Personalized Evaluation",
    image: "/images/campus-aerial.jpg",
    badge: "Academics"
  },
  {
    id: "campus",
    label: "Campus Life",
    tagline: "Daily Life & Community Feel",
    icon: Compass,
    description: "Boarding school is a second home. We help pick a friendly, welcoming campus where your child makes friends from around the world and feels safe.",
    highlight: "50+ Nationalities",
    image: "/images/campus-lawn.jpg",
    badge: "Campus Life"
  },
  {
    id: "athletics",
    label: "Sports & Arts",
    tagline: "Coaching, Teams & Passions",
    icon: Trophy,
    description: "Whether your child plays competitive sports or loves music, art, and robotics, we connect you to schools with great facilities and dedicated coaches.",
    highlight: "Top Coaching & Facilities",
    image: "/images/student-athlete-soccer.jpg",
    badge: "Sports & Arts"
  },
  {
    id: "family",
    label: "Family Needs",
    tagline: "Location, Safety & Budget",
    icon: ShieldCheck,
    description: "We factor in easy travel routes from India, 24/7 campus care, trusted health and safety support, and your family's budget.",
    highlight: "24/7 Student Care",
    image: "/images/campus-entrance.jpg",
    badge: "Family Peace of Mind"
  }
];

export default function TheQuestion() {
  const [activeTab, setActiveTab] = useState<string>("individual");
  const activeFit = FIT_DIMENSIONS.find((d) => d.id === activeTab) || FIT_DIMENSIONS[0];

  return (
    <section id="the-question" className="py-24 lg:py-36 bg-transparent border-b border-[#E8E4DA]/80 overflow-hidden relative">
      
      {/* Subtle Background Accent Texture */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FAB900]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D2153]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-normal text-[#111111] leading-[1.08] tracking-tight">
            Finding the right school starts with <br className="hidden sm:inline" />
            understanding the <span className="highlight-italic">student.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A5751] font-light mt-5 leading-relaxed">
            Every child is different. The right school is the one where they feel happy, supported, and excited to learn every day.
          </p>
        </div>

        {/* Interactive 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Interactive Dimension Cards / Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5">
            {FIT_DIMENSIONS.map((dim) => {
              const Icon = dim.icon;
              const isActive = activeTab === dim.id;

              return (
                <button
                  key={dim.id}
                  type="button"
                  onClick={() => setActiveTab(dim.id)}
                  onMouseEnter={() => setActiveTab(dim.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 sm:gap-5 group relative overflow-hidden ${
                    isActive
                      ? "bg-white border-[#0D2153] shadow-lg ring-1 ring-[#0D2153]/20"
                      : "bg-[#F7F5F0]/80 border-[#E9E9E9] hover:bg-white hover:border-[#C8C4B8] hover:shadow-xs"
                  }`}
                >
                  {/* Active Indicator Strip */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFitStrip"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FAB900]"
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#0D2153] text-[#FAB900] shadow-sm"
                        : "bg-white text-[#69727D] group-hover:text-[#0D2153] group-hover:bg-[#F7F5F0] border border-[#E9E9E9]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-heading text-lg sm:text-xl font-normal transition-colors mb-1 ${
                        isActive ? "text-[#0D2153] font-semibold" : "text-[#333333] group-hover:text-[#0D2153]"
                      }`}
                    >
                      {dim.label}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#69727D] font-light leading-relaxed mb-2">
                      {dim.tagline}
                    </p>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-2 border-t border-[#E9E9E9] text-xs text-[#333333] font-normal leading-relaxed"
                      >
                        {dim.description}
                      </motion.div>
                    )}
                  </div>
                </button>
              );
            })}

            {/* Bottom Trust Meta */}
            <div className="pt-4 border-t border-[#E9E9E9] flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#69727D]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FAB900]" />
                <span className="text-[#333333] font-bold">10+ YEARS EXPERIENCE</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#0D2153]" />
                <span className="text-[#333333] font-bold">1,700+ GLOBAL PLACEMENTS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Cinematic Clean Image Card */}
          <div className="lg:col-span-6 relative flex flex-col">
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[540px] rounded-2xl overflow-hidden border border-[#E9E9E9] bg-[#041235] shadow-xl group flex flex-col justify-end">
              
              {/* Crossfading Visual Imagery */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFit.image}
                  src={activeFit.image}
                  alt={activeFit.label}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-[1.03]"
                />
              </AnimatePresence>

              {/* Dynamic Contrast Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041235]/90 via-[#0D2153]/25 to-transparent pointer-events-none" />

              {/* Bottom Clean Editorial Content Card */}
              <div className="relative z-10 p-6 sm:p-8 text-white">
                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-white mb-2">
                  {activeFit.tagline}
                </h3>
                <p className="text-xs sm:text-sm text-[#EBE3D4] font-light leading-relaxed max-w-lg">
                  {activeFit.description}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
