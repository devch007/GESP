"use client";

import React, { useState } from "react";
import { TEAM_MEMBERS, TeamMember } from "@/data/gespData";
import { X, ArrowRight } from "lucide-react";

interface PeopleSectionProps {
  onOpenConsultation: () => void;
}

export default function PeopleSection({ onOpenConsultation }: PeopleSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const founder = TEAM_MEMBERS[0];
  const partners = TEAM_MEMBERS.slice(1, 7);

  return (
    <section id="about" className="py-24 lg:py-36 bg-[#FCFBF8] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#858076] block mb-3">
            Advisory Leadership
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal text-[#111111] leading-tight">
            People make the difference.
          </h2>
          <p className="text-base text-[#5A5751] font-light mt-4 leading-relaxed max-w-2xl">
            We are former boarding school deans, collegiate athletes, varsity coaches, and international educators. Families work directly with senior leadership.
          </p>
        </div>

        {/* Editorial Portrait Layout: Featured Portrait + Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Featured Founder Portrait */}
          <div
            onClick={() => setSelectedMember(founder)}
            className="lg:col-span-5 bg-white border border-[#E8E4DA] p-6 lg:p-8 cursor-pointer hover:border-[#111111] transition-colors"
          >
            <div className="w-full aspect-[4/5] overflow-hidden bg-[#EAE7DD] mb-6">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-top grayscale-[25%] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <span className="text-[10px] font-mono tracking-widest uppercase text-[#C59B27] block mb-1">
              FOUNDER & CHIEF EXECUTIVE OFFICER
            </span>
            <h3 className="font-heading text-3xl font-normal text-[#111111] mb-2">
              {founder.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5751] font-light leading-relaxed mb-4">
              &ldquo;{founder.quote}&rdquo;
            </p>
            <span className="text-xs font-mono text-[#111111] underline underline-offset-4">
              View Biography →
            </span>
          </div>

          {/* Surrounding Partners Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partners.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="bg-white border border-[#E8E4DA] p-5 cursor-pointer hover:border-[#111111] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 overflow-hidden bg-[#EAE7DD] mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top grayscale-[30%]"
                    />
                  </div>
                  <h4 className="font-heading text-xl font-normal text-[#111111]">
                    {member.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#858076] uppercase mt-0.5 mb-2">
                    {member.role.split("&")[0]}
                  </p>
                  <p className="text-xs text-[#5A5751] font-light line-clamp-2">
                    {member.bio}
                  </p>
                </div>

                <span className="text-[11px] font-mono text-[#111111] pt-3 border-t border-[#E8E4DA] mt-4 block">
                  {member.location} • Read more →
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Biography */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div className="bg-[#FAF9F5] border border-[#E8E4DA] max-w-lg w-full p-8 relative shadow-2xl">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 text-[#111111]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 overflow-hidden bg-[#EAE7DD] shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-normal text-[#111111]">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs font-mono text-[#C59B27] uppercase">
                    {selectedMember.role}
                  </p>
                  <span className="text-xs text-[#858076]">{selectedMember.location}</span>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm italic text-[#444444] bg-white border border-[#E8E4DA] p-4 mb-6">
                &ldquo;{selectedMember.quote}&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-[#5A5751] font-light leading-relaxed mb-6">
                {selectedMember.bio}
              </p>

              <button
                onClick={() => {
                  setSelectedMember(null);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-[#111111] text-white hover:bg-[#222222] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Connect With {selectedMember.name.split(" ")[0]}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
