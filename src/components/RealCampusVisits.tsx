"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, MapPin, CheckCircle2, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";

interface RealCampusVisitsProps {
  onOpenConsultation?: () => void;
}

const VISIT_PHOTOS = [
  {
    id: "track-overlook",
    title: "Varsity Athletic Complex & Track",
    category: "Athletics",
    caption: "GESP advisory team inspecting championship track and soccer fields during a fall visit.",
    image: "/images/real-visits/visit-track-overlook.jpg",
    aspect: "landscape",
    meta: "New England Campus"
  },
  {
    id: "chapel",
    title: "Historic Campus Assembly & Chapel",
    category: "Community",
    caption: "Meeting with admissions faculty and international students in the central gathering hall.",
    image: "/images/real-visits/visit-chapel.jpg",
    aspect: "portrait",
    meta: "Community Gathering"
  },
  {
    id: "gym",
    title: "Strength & Conditioning Center",
    category: "Athletics",
    caption: "Evaluating varsity weight room facilities and athletic trainer support for student-athletes.",
    image: "/images/real-visits/visit-gym.jpg",
    aspect: "portrait",
    meta: "Training Facility"
  },
  {
    id: "stadium",
    title: "Full Collegiate Turf Stadium",
    category: "Athletics",
    caption: "Collegiate-grade competition grounds surrounded by scenic preparatory school woodland.",
    image: "/images/real-visits/visit-stadium.jpg",
    aspect: "portrait",
    meta: "Competitive Circuit"
  },
  {
    id: "dining",
    title: "Student Dining Commons",
    category: "Student Life",
    caption: "Assessing daily residential dining variety, nutrition quality, and student social spaces.",
    image: "/images/real-visits/visit-dining.jpg",
    aspect: "landscape",
    meta: "Daily Campus Life"
  },
];

const CATEGORIES = ["All", "Athletics", "Community", "Student Life"];

export default function RealCampusVisits({ onOpenConsultation }: RealCampusVisitsProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const filteredPhotos = activeCategory === "All"
    ? VISIT_PHOTOS
    : VISIT_PHOTOS.filter((p) => p.category === activeCategory);

  const handleNext = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="campus-visits" className="py-24 lg:py-36 bg-transparent border-b border-[#E8E4DA]/80 relative overflow-hidden">
      
      {/* Ambient Light Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FAB900]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0D2153]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] leading-[1.08] tracking-tight">
              Every campus vetted <span className="highlight-italic">in person.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5A5E66] font-light mt-4 leading-relaxed">
              We don&apos;t just read brochures. Our team regularly tours U.S. boarding schools to inspect dorms, dining, training facilities, and meet admissions faculty face-to-face.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-[#0D2153] text-[#FAB900] border-[#0D2153] shadow-sm font-semibold"
                    : "bg-white/80 text-[#5A5E66] border-[#E8E4DA] hover:bg-white hover:text-[#0D2153] hover:border-[#C8C4B8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Bento / Masonry Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              layout
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedPhoto(idx)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DA] shadow-xs hover:shadow-xl hover:border-[#0D2153]/30 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with smooth zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D2153]/5">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                />
                
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041235]/80 via-transparent to-black/10 opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Location Pill */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-mono border border-white/20">
                  <MapPin className="w-3 h-3 text-[#FAB900]" />
                  <span>{photo.meta}</span>
                </div>

                {/* Click to Inspect Icon on Hover */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#0D2153] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Photo Description Card */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0D2153] font-bold block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-[#1A1A1A] group-hover:text-[#0D2153] transition-colors mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#5A5E66] font-light leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E4DA]/60 flex items-center justify-between text-[11px] font-mono text-[#838891]">
                  <span>Vetted by GESP Advisory</span>
                  <span className="text-[#0D2153] font-semibold group-hover:translate-x-0.5 transition-transform">
                    View Photo →
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Trust Highlight Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E8E4DA] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0D2153] text-[#FAB900] flex items-center justify-center shrink-0 shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-base font-semibold text-[#1A1A1A]">
                Want firsthand advice on specific partner schools?
              </h4>
              <p className="text-xs text-[#5A5E66] font-light mt-0.5">
                Our advisors share direct feedback on campus culture, dorm living, dining, and coaching staff.
              </p>
            </div>
          </div>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="w-full md:w-auto px-6 py-3 bg-[#0D2153] hover:bg-[#041235] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
            >
              Ask Our Advisors
            </button>
          )}
        </div>

      </div>

      {/* Lightbox Modal for Full-Resolution Photo Inspection */}
      <AnimatePresence>
        {selectedPhoto !== null && filteredPhotos[selectedPhoto] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#041235]/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#111111] rounded-2xl overflow-hidden shadow-2xl border border-white/20 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer border border-white/20"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Image */}
              <div className="relative max-h-[70vh] flex items-center justify-center bg-black/80 overflow-hidden">
                <img
                  src={filteredPhotos[selectedPhoto].image}
                  alt={filteredPhotos[selectedPhoto].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />

                {/* Left/Right Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black text-white border border-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black text-white border border-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Footer Details */}
              <div className="p-6 bg-[#181818] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-[#FAB900] uppercase tracking-widest font-bold block mb-1">
                    {filteredPhotos[selectedPhoto].meta} • {filteredPhotos[selectedPhoto].category}
                  </span>
                  <h3 className="font-heading text-xl font-normal text-white">
                    {filteredPhotos[selectedPhoto].title}
                  </h3>
                  <p className="text-xs text-[#EBE3D4] font-light mt-1 max-w-xl">
                    {filteredPhotos[selectedPhoto].caption}
                  </p>
                </div>

                <div className="text-xs font-mono text-white/50 shrink-0">
                  {selectedPhoto + 1} / {filteredPhotos.length}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
