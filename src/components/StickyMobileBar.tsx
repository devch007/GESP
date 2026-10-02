"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface StickyMobileBarProps {
  onOpenConsultation: () => void;
}

export default function StickyMobileBar({ onOpenConsultation }: StickyMobileBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-t border-[#E8E4DA] p-3 md:hidden flex items-center justify-between gap-3">
      <div className="flex flex-col pl-2">
        <span className="font-heading text-xs font-semibold text-[#111111] leading-none">
          GESP India
        </span>
        <span className="text-[10px] font-mono text-[#858076]">
          U.S. Boarding Advisory
        </span>
      </div>

      <button
        onClick={onOpenConsultation}
        className="px-5 py-3 bg-[#111111] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
      >
        <span>Start Your Journey</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
