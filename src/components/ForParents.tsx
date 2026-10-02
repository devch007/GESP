"use client";

import React from "react";
import { Shield, PhoneCall, Check } from "lucide-react";

interface ForParentsProps {
  onOpenConsultation: () => void;
}

export default function ForParents({ onOpenConsultation }: ForParentsProps) {
  return (
    <section id="parents" className="relative py-28 md:py-36 bg-[#08090C] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Reassuring Editorial Frame */}
        <div className="rounded-3xl glass-panel border border-white/[0.1] p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-gradient-to-r from-[#E2B755] to-transparent" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E2B755]">
                  Section 11 — Family Advisory
                </span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.12] mb-6">
                Because choosing a school <br />
                <span className="italic font-display font-light text-gold-gradient">
                  is a family decision.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                We guide families through one of the most critical turning points in a student&apos;s development. Our role is to protect your family&apos;s interests, provide unvarnished insights into campus cultures, and ensure peace of mind.
              </p>

              {/* Trust Points */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Direct Access to Senior Partners",
                    desc: "You will always have direct WhatsApp and cellular access to the partners managing your student's file."
                  },
                  {
                    title: "Objective Campus Reality",
                    desc: "We don't represent schools on quota. We represent your child and advise where they will truly flourish."
                  },
                  {
                    title: "Full Visa, Travel & Move-In Support",
                    desc: "From I-20 documentation and health compliance to hotel arrangements and accompanying your family on campus move-in day."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#E2B755]/15 border border-[#E2B755]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#E2B755]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-zinc-400 font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F5D78E] via-[#E2B755] to-[#C99C38] text-[#050608] text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(226,183,85,0.4)] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Schedule Confidential Family Discussion</span>
              </button>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl glass-panel-gold border border-[#E2B755]/40 relative shadow-2xl">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#E2B755]/15 border border-[#E2B755]/40 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#E2B755]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E2B755] block">
                      The GESP Guardian Standard
                    </span>
                    <span className="text-base font-semibold text-white">
                      Complete Family Peace of Mind
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 font-light leading-relaxed mb-6">
                  Sending a student across oceans to a boarding school is an act of immense trust. We become your family&apos;s advocates on the ground in the United States.
                </p>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-3 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center justify-between">
                    <span>Advisory Model:</span>
                    <span className="text-white">Family-First</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Active Support:</span>
                    <span className="text-white">Day 1 through Graduation</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Headquarters:</span>
                    <span className="text-white">Easthampton, MA</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-300 italic text-center font-editorial">
                  &ldquo;These people will take care of my child.&rdquo;
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
