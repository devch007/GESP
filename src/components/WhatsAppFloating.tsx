"use client";

import React from "react";
import { MessageSquareText } from "lucide-react";

export default function WhatsAppFloating() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello GESP India team, I am an Indian parent interested in learning more about U.S. boarding schools and student-athlete admissions."
    );
    window.open(`https://wa.me/14135270000?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleWhatsApp}
        className="bg-[#111111] hover:bg-[#222222] text-[#F7F5F0] px-4 py-3 border border-white/20 shadow-xl flex items-center gap-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-300 hover:scale-105 cursor-pointer"
        aria-label="Talk to GESP India on WhatsApp"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <MessageSquareText className="w-4 h-4 text-[#25D366]" />
        <span>Talk to GESP India</span>
      </button>
    </div>
  );
}
