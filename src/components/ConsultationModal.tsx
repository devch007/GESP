"use client";

import React, { useState } from "react";
import { X, ArrowRight, CheckCircle2, ShieldCheck, PhoneCall } from "lucide-react";
import confetti from "canvas-confetti";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    city: "Delhi NCR",
    board: "CBSE",
    grade: "Grade 9 / 10",
    sport: "Soccer / Tennis",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#EAECEF] my-6">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F2] text-[#E22E34] text-xs font-bold mb-2">
              <span>🇮🇳 GESP India Advisory Intake</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14171F] mb-1.5">
              Book India Advisory Consultation
            </h3>

            <p className="text-xs text-[#5E6470] mb-5">
              Personalized roadmap for U.S. boarding school admission, sports recruitment & visa processing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-[#14171F] block mb-1">
                  Parent / Guardian Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D0D5DD] text-xs text-[#14171F] bg-[#F8F9FB] focus:outline-none focus:border-[#E22E34]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#14171F] block mb-1">
                  Student Name & Current Grade *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma (Grade 9)"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D0D5DD] text-xs text-[#14171F] bg-[#F8F9FB] focus:outline-none focus:border-[#E22E34]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#14171F] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D0D5DD] text-xs text-[#14171F] bg-[#F8F9FB] focus:outline-none focus:border-[#E22E34]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#14171F] block mb-1">
                    Mobile / WhatsApp (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D0D5DD] text-xs text-[#14171F] bg-[#F8F9FB] focus:outline-none focus:border-[#E22E34]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#14171F] block mb-1">
                    City in India
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#D0D5DD] text-xs text-[#14171F] bg-[#F8F9FB] focus:outline-none focus:border-[#E22E34]"
                  >
                    <option>Delhi NCR</option>
                    <option>Mumbai</option>
                    <option>Bengaluru</option>
                    <option>Hyderabad</option>
                    <option>Chennai</option>
                    <option>Kolkata</option>
                    <option>Pune / Ahmedabad</option>
                    <option>Other Cities</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#14171F] block mb-1">
                    Current Board
                  </label>
                  <select
                    value={formData.board}
                    onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#D0D5DD] text-xs text-[#14171F] bg-[#F8F9FB] focus:outline-none focus:border-[#E22E34]"
                  >
                    <option>CBSE</option>
                    <option>ICSE / ISC</option>
                    <option>IB (MYP / DP)</option>
                    <option>Cambridge (IGCSE / A-Levels)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#E22E34] hover:bg-[#C92429] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                <span>Confirm Free India Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#14171F] mb-2">
              Consultation Scheduled, {formData.parentName}
            </h3>

            <p className="text-xs text-[#5E6470] max-w-sm mx-auto mb-6 leading-relaxed">
              Our India advisory director will connect with your family on WhatsApp ({formData.phone}) within 24 hours to coordinate your 1-on-1 diagnostic.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 rounded-xl bg-[#14171F] text-white text-xs font-bold uppercase tracking-wider"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
