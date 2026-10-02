"use client";

import React from "react";
import { GLOBAL_EVENTS } from "@/data/gespData";
import { ArrowUpRight } from "lucide-react";

interface GlobalEventsProps {
  onOpenConsultation: () => void;
}

export default function GlobalEvents({ onOpenConsultation }: GlobalEventsProps) {
  return (
    <section id="events" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E2D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#777777] block mb-3">
            International Showcases & Combines
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-tight">
            From around the world to the right school.
          </h2>
          <p className="text-[#555555] text-sm sm:text-base mt-4 font-light max-w-2xl leading-relaxed">
            Through international combines and showcases, GESP connects student-athletes directly with U.S. boarding school coaches and admissions directors.
          </p>
        </div>

        {/* Editorial Events List */}
        <div className="divide-y divide-[#E5E2D8] border-y border-[#E5E2D8]">
          {GLOBAL_EVENTS.map((event) => (
            <div
              key={event.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[#FAF9F5] px-4 transition-colors"
            >
              <div className="md:col-span-3">
                <span className="text-xs font-mono text-[#B8860B] uppercase block mb-1">
                  {event.city}, {event.country}
                </span>
                <span className="text-sm font-mono text-[#777777]">{event.date}</span>
              </div>

              <div className="md:col-span-6 space-y-1">
                <h3 className="font-heading text-2xl font-normal text-[#111111]">
                  {event.title}
                </h3>
                <p className="text-xs font-mono text-[#777777] uppercase">{event.type}</p>
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed pt-2">
                  {event.description}
                </p>
              </div>

              <div className="md:col-span-3 flex md:justify-end items-center pt-2 md:pt-0">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-[#B8860B] transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire for Event</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
