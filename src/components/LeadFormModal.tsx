"use client";

import React, { useState } from "react";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [role, setRole] = useState<"Parent" | "Student">("Parent");
  const [age, setAge] = useState("14 - 15 years old (Grade 9 / 10)");
  const [academicInterest, setAcademicInterest] = useState("STEM / Honors / Pre-Engineering");
  const [sport, setSport] = useState("Soccer");
  const [intake, setIntake] = useState("Fall 2027 (Standard Admission)");
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#041235]/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#F7F5F0] border border-[#E9E9E9] rounded-2xl max-w-xl w-full p-8 sm:p-12 relative shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#69727D] hover:text-[#0D2153] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            
            {/* Progress Indicator 01 — 06 */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E9E9E9] text-xs font-mono text-[#69727D]">
              <span className="text-[#0D2153] font-bold">GET IN TOUCH WITH GESP</span>
              <span className="text-[#0D2153] font-bold bg-[#FAB900]/20 px-2.5 py-0.5 rounded-md">Step {step} of 6</span>
            </div>

            {/* Step 1: Who are you? */}
            {step === 1 && (
              <div className="space-y-6">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#858076] block">
                  STEP 01
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#111111]">
                  Who is filling this out?
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5751] font-light">
                  Please let us know so we can personalize our guidance.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {(["Parent", "Student"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setRole(opt)}
                      className={`p-5 text-left border cursor-pointer transition-all rounded-xl shadow-xs ${
                        role === opt
                          ? "bg-[#0D2153] text-white border-[#0D2153] shadow-md ring-2 ring-[#FAB900]/40"
                          : "bg-white text-[#333333] border-[#E9E9E9] hover:border-[#0D2153] hover:bg-[#FCFBF8]"
                      }`}
                    >
                      <span className="font-heading text-lg block mb-1">{opt}</span>
                      <span className={`text-xs ${role === opt ? "text-[#EBE3D4]" : "text-[#69727D]"}`}>
                        {opt === "Parent" ? "I am looking for my child" : "I am looking for myself"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Student's Age */}
            {step === 2 && (
              <div className="space-y-6">
                <span className="subline-tag block">
                  STEP 02
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#333333]">
                  What class or age is the student in right now?
                </h3>

                <div className="space-y-2.5 pt-2">
                  {[
                    "Class 7 or 8 (Age 12 - 13)",
                    "Class 9 or 10 (Age 14 - 15)",
                    "Class 11 or 12 (Age 16 - 17)",
                    "Finished High School (Gap Year / Post-Grad)"
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setAge(item)}
                      className={`w-full p-4 text-left border text-xs sm:text-sm cursor-pointer transition-all rounded-xl shadow-xs ${
                        age === item
                          ? "bg-[#0D2153] text-white border-[#0D2153] font-medium shadow-sm ring-2 ring-[#FAB900]/40"
                          : "bg-white text-[#333333] border-[#E9E9E9] hover:border-[#0D2153] hover:bg-[#FCFBF8]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Academic Interests */}
            {step === 3 && (
              <div className="space-y-6">
                <span className="subline-tag block">
                  STEP 03
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#333333]">
                  What subjects does the student enjoy most?
                </h3>

                <div className="space-y-2.5 pt-2">
                  {[
                    "Math, Science & Coding (STEM)",
                    "Business, Economics & Entrepreneurship",
                    "English, History & Law",
                    "Art, Design, Music & Theatre",
                    "Open to All Subjects / General Studies"
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setAcademicInterest(item)}
                      className={`w-full p-4 text-left border text-xs sm:text-sm cursor-pointer transition-all rounded-xl shadow-xs ${
                        academicInterest === item
                          ? "bg-[#0D2153] text-white border-[#0D2153] font-medium shadow-sm ring-2 ring-[#FAB900]/40"
                          : "bg-white text-[#333333] border-[#E9E9E9] hover:border-[#0D2153] hover:bg-[#FCFBF8]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Sport */}
            {step === 4 && (
              <div className="space-y-6">
                <span className="subline-tag block">
                  STEP 04
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#333333]">
                  Does the student play any sports?
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {[
                    "Soccer", "Tennis", "Basketball", "Swimming", 
                    "Badminton / Squash", "Athletics / Running", "Golf", "Cricket", 
                    "No Sports (Focus on Academics)"
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSport(item)}
                      className={`p-3.5 text-center border text-xs font-mono uppercase tracking-wider cursor-pointer transition-all rounded-lg shadow-xs ${
                        sport === item
                          ? "bg-[#0D2153] text-white border-[#0D2153] font-bold ring-2 ring-[#FAB900]/40"
                          : "bg-white text-[#69727D] border-[#E9E9E9] hover:border-[#0D2153] hover:text-[#0D2153]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Preferred Intake */}
            {step === 5 && (
              <div className="space-y-6">
                <span className="subline-tag block">
                  STEP 05
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#333333]">
                  When are you looking to start school?
                </h3>

                <div className="space-y-2.5 pt-2">
                  {[
                    "Next Year (August / September 2027)",
                    "Year After Next (2028 - Early Planning)",
                    "As Soon As Possible (Mid-Year Entry)",
                    "Not Sure Yet (Just Looking at Options)"
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setIntake(item)}
                      className={`w-full p-4 text-left border text-xs sm:text-sm cursor-pointer transition-all rounded-xl shadow-xs ${
                        intake === item
                          ? "bg-[#0D2153] text-white border-[#0D2153] font-medium shadow-sm ring-2 ring-[#FAB900]/40"
                          : "bg-white text-[#333333] border-[#E9E9E9] hover:border-[#0D2153] hover:bg-[#FCFBF8]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Contact Information */}
            {step === 6 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="subline-tag block mb-1">
                    STEP 06
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#333333]">
                    Where can we reach you?
                  </h3>
                  <p className="text-xs text-[#69727D] font-light mt-1">
                    We will share school options and details directly with you.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[11px] font-mono uppercase text-[#0D2153] font-bold block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E9E9E9] rounded-lg text-xs text-[#333333] focus:outline-none focus:border-[#0D2153] focus:ring-1 focus:ring-[#0D2153] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-mono uppercase text-[#0D2153] font-bold block mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#E9E9E9] rounded-lg text-xs text-[#333333] focus:outline-none focus:border-[#0D2153] focus:ring-1 focus:ring-[#0D2153] transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase text-[#0D2153] font-bold block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#E9E9E9] rounded-lg text-xs text-[#333333] focus:outline-none focus:border-[#0D2153] focus:ring-1 focus:ring-[#0D2153] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase text-[#0D2153] font-bold block mb-1">
                      City in India *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Delhi NCR, Mumbai, Bengaluru, Hyderabad..."
                      value={contact.city}
                      onChange={(e) => setContact({ ...contact, city: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#E9E9E9] rounded-lg text-xs text-[#333333] focus:outline-none focus:border-[#0D2153] focus:ring-1 focus:ring-[#0D2153] transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 mt-2 bg-[#FAB900] hover:bg-[#E4B603] text-[#041235] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  <span>Get School Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Stepper Navigation Buttons (for Steps 1-5) */}
            {step < 6 && (
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#E9E9E9]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-xs font-mono font-bold text-[#69727D] hover:text-[#0D2153] flex items-center gap-1.5 cursor-pointer px-3 py-2 rounded-lg hover:bg-black/5 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>BACK</span>
                  </button>
                ) : <div />}

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3.5 bg-[#0D2153] hover:bg-[#041235] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 cursor-pointer rounded-xl shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                  <span>NEXT</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FAB900]" />
                </button>
              </div>
            )}

          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-[#FAB900]/20 border border-[#FAB900] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-[#0D2153]" />
            </div>

            <h3 className="font-heading text-3xl font-normal text-[#333333] mb-2">
              Thank You, {contact.name || "Family"}!
            </h3>

            <p className="text-xs sm:text-sm text-[#69727D] font-light max-w-sm mx-auto leading-relaxed mb-6">
              We have received your details. Our team will reach out directly on WhatsApp/Phone ({contact.phone || "+91"}) within 24 hours to guide you.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-8 py-3 bg-[#0D2153] hover:bg-[#041235] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xl shadow-md cursor-pointer"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
