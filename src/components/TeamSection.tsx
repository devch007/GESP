"use client";

import React, { useState } from "react";
import { TEAM_MEMBERS, TeamMember } from "@/data/gespData";
import { Users, X, MapPin, Award } from "lucide-react";

interface TeamSectionProps {
  onOpenConsultation: () => void;
}

export default function TeamSection({ onOpenConsultation }: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-20 bg-[#F8F9FB] border-b border-[#EAECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E22E34] text-xs font-bold mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Senior Advisory Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171F] tracking-tight">
            Learn and Partner with Experienced Prep Insiders
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-1">
            Former prep school deans, collegiate athletes, and championship coaches with decades of verified admissions relationships.
          </p>
        </div>

        {/* Rounded Team Grid (upGrad Mentors & Faculty Card Format) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.slice(0, 8).map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="upgrad-card p-6 flex flex-col justify-between cursor-pointer group bg-white"
            >
              <div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 bg-zinc-100 border border-[#EAECEF] group-hover:scale-105 transition-transform">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-[#E22E34] mb-1">
                  {member.role.split("&")[0]}
                </div>

                <h3 className="text-lg font-bold text-[#14171F] group-hover:text-[#E22E34] transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs text-[#5E6470] mt-1 mb-3 font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#5E6470]" />
                  <span>{member.location}</span>
                </p>

                <p className="text-xs text-[#383E49] line-clamp-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAECEF] flex items-center justify-between text-xs font-bold text-[#E22E34]">
                <span>View Full Profile</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Bio */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#EAECEF]">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-100 border border-[#EAECEF] shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#14171F]">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs font-bold text-[#E22E34] uppercase">
                    {selectedMember.role}
                  </p>
                  <p className="text-xs text-[#5E6470] mt-0.5">{selectedMember.location}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FB] border border-[#EAECEF] text-xs text-[#383E49] italic mb-6">
                &ldquo;{selectedMember.quote}&rdquo;
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#5E6470] mb-6">
                <p>{selectedMember.bio}</p>
                <div className="p-3.5 rounded-xl bg-[#FDF2F2] border border-[#FCDADA] text-[#E22E34] text-xs font-bold flex items-center gap-2">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>Credential: {selectedMember.experience}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedMember(null);
                  onOpenConsultation();
                }}
                className="w-full py-4 rounded-xl bg-[#E22E34] hover:bg-[#C92429] text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Schedule Consultation with {selectedMember.name.split(" ")[0]}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
