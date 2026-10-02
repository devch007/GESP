"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheQuestion from "@/components/TheQuestion";
import WhyGespIndia from "@/components/WhyGespIndia";
import BoardingExperience from "@/components/BoardingExperience";
import StudentAthletes from "@/components/StudentAthletes";
import TheJourney from "@/components/TheJourney";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LeadFormModal from "@/components/LeadFormModal";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleExploreExperience = () => {
    document.getElementById("boarding-experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-canvas text-[#111111] flex flex-col font-sans relative pb-16 md:pb-0">
      
      {/* Editorial Sticky Navigation */}
      <Navbar onOpenConsultation={handleOpenModal} />
      
      {/* 01 — HERO */}
      <Hero
        onOpenConsultation={handleOpenModal}
        onExploreExperience={handleExploreExperience}
      />

      {/* 02 — WHY THIS DECISION IS DIFFERENT */}
      <TheQuestion />

      {/* 03 — HOW GESP GUIDES YOU (GESP PROCESS) */}
      <section id="gesp-process">
        <TheJourney />
      </section>

      {/* 04 — GESP DIFFERENCE (WE PROPOSE, THEY CHOOSE) */}
      <WhyGespIndia />

      {/* 05 — EXPERIENCE THE SCHOOLS */}
      <BoardingExperience />

      {/* 06 — STUDENT × ACADEMICS × ATHLETICS */}
      <StudentAthletes onOpenConsultation={handleOpenModal} />

      {/* 07 — CONVERSION */}
      <FinalCTA onOpenConsultation={handleOpenModal} />
      
      {/* Minimal Footer */}
      <Footer />

      {/* Multi-Step Lead Intake Modal */}
      <LeadFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Subtle Floating WhatsApp Action */}
      <WhatsAppFloating />

      {/* Sticky Bottom Action for Mobile */}
      <StickyMobileBar onOpenConsultation={handleOpenModal} />

    </main>
  );
}
