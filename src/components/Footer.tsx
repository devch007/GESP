"use client";

import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#041235] text-[#EBE3D4] text-xs border-t border-[#0D2153] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <img
              src="https://gespeducation.com/wp-content/uploads/2025/07/logo_gesp-1024x424.png"
              alt="GESP Education"
              className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90"
            />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#FAB900] block">
              GLOBAL EDUCATION &amp; SPORTS PARTNERS • INDIA
            </span>
            <p className="text-xs text-[#E9E9E9]/75 font-light leading-relaxed max-w-sm pt-2">
              Personalized guidance for Indian families exploring U.S. boarding schools, student-athlete recruitment, and collegiate pathways.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase text-white font-semibold block mb-2">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li><a href="#why-gesp" className="hover:text-[#FAB900] transition-colors">Why GESP</a></li>
              <li><a href="#boarding-experience" className="hover:text-[#FAB900] transition-colors">Boarding Schools</a></li>
              <li><a href="#student-athletes" className="hover:text-[#FAB900] transition-colors">Student-Athletes</a></li>
              <li><a href="#fit" className="hover:text-[#FAB900] transition-colors">The Fit</a></li>
              <li><a href="#journey" className="hover:text-[#FAB900] transition-colors">The Journey</a></li>
              <li><a href="#school-visits" className="hover:text-[#FAB900] transition-colors">School Visits</a></li>
              <li><a href="#parents" className="hover:text-[#FAB900] transition-colors">For Indian Parents</a></li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase text-white font-semibold block mb-2">
              Advisory Offices
            </span>
            
            <div className="space-y-2 font-light text-xs text-[#EBE3D4]">
              <div>
                <strong className="text-white block">Global Headquarters:</strong>
                <span>Easthampton, Massachusetts, United States</span>
              </div>

              <div className="pt-2">
                <strong className="text-white block">India Operations:</strong>
                <span>New Delhi • Mumbai • Bengaluru</span>
              </div>

              <div className="pt-2">
                <a href="mailto:india@gespeducation.com" className="text-[#FAB900] hover:underline transition-colors font-mono">
                  india@gespeducation.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono text-[#E9E9E9]/60">
          <div>© {new Date().getFullYear()} GESP — Global Education &amp; Sports Partners LLC. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/gesp.team/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FAB900] transition-colors">Instagram: @gesp.team</a>
            <span>Family Confidentiality</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
