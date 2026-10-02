export interface IndiaCityTour {
  city: string;
  venue: string;
  date: string;
  status: "Registrations Open" | "Filling Fast" | "Completed";
  highlight: string;
}

export interface IndiaStudentStory {
  student: string;
  city: string;
  school: string;
  sportOrMajor: string;
  outcome: string;
  quote: string;
  image: string;
  board: string; // e.g. "CBSE to NEPSAC Honors", "ICSE to Ivy Track"
}

export const INDIA_CITY_TOURS: IndiaCityTour[] = [
  {
    city: "New Delhi",
    venue: "The Oberoi / India Habitat Centre",
    date: "November 14 - 16, 2026",
    status: "Registrations Open",
    highlight: "Direct meetings with New England Prep Athletic Directors & Deans"
  },
  {
    city: "Mumbai",
    venue: "BKC St. Regis / Taj Lands End",
    date: "November 18 - 20, 2026",
    status: "Filling Fast",
    highlight: "Student-Athlete Showcase Combine & 1-on-1 Family Diagnostic"
  },
  {
    city: "Bengaluru",
    venue: "The Leela Palace, Indiranagar",
    date: "November 22 - 24, 2026",
    status: "Registrations Open",
    highlight: "STEM + Competitive Sports Boarding Prep Track Symposium"
  },
  {
    city: "Hyderabad",
    venue: "ITC Kohenur, HITEC City",
    date: "November 26 - 27, 2026",
    status: "Registrations Open",
    highlight: "Ivy League & NCAA Division I Prep School Roadmapping"
  }
];

export const INDIA_STUDENT_STORIES: IndiaStudentStory[] = [
  {
    student: "Aarav Sharma",
    city: "New Delhi (DPS R.K. Puram)",
    school: "Williston Northampton School, MA",
    sportOrMajor: "Varsity Tennis & Robotics",
    outcome: "Class of 2025 • High Honors • Dartmouth Commit",
    quote: "Transitioning from CBSE in Delhi to boarding in Massachusetts felt intimidating. GESP's Delhi team guided my parents step-by-step and arranged my court tryout with the varsity coach before I even stepped on a plane.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    board: "CBSE to NEPSAC Class A Champions"
  },
  {
    student: "Ananya Deshmukh",
    city: "Mumbai (Cathedral & John Connon)",
    school: "Wilbraham & Monson Academy, MA",
    sportOrMajor: "Competitive Swimming & Economics",
    outcome: "Class of 2024 • Center for Entrepreneurship Scholar",
    quote: "In Mumbai, juggling national swim training with board exams was impossible. GESP matched me with a New England prep academy with an Olympic natatorium right beside my dorm. It transformed my trajectory.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    board: "ICSE to Global Honors Boarding"
  },
  {
    student: "Kabir Reddy",
    city: "Hyderabad (Oakridge International)",
    school: "The Kiski School, PA",
    sportOrMajor: "Varsity Soccer & Engineering",
    outcome: "Class of 2023 • NCAA Division I Athlete",
    quote: "My father and I met Matt and John at the Hyderabad GESP showcase. Within 4 months, my prep school application, varsity roster spot, and US visa were locked in seamlessly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    board: "IB World School to Prep National Circuit"
  }
];

export const INDIA_TRUST_PILLARS = [
  {
    title: "CBSE / ICSE / IB to U.S. Credit Mapping",
    desc: "Seamless transcript conversion, AP/Honors course selection, and academic leveling tailored for Indian curriculum students."
  },
  {
    title: "1-on-1 Coach Evaluations & Highlight Reels",
    desc: "We analyze Indian district/national athletic film and pitch directly to U.S. prep head coaches who recruit actively."
  },
  {
    title: "Complete F-1 Visa & Pre-Departure Concierge",
    desc: "End-to-end guidance through DS-160, Mumbai/Delhi consulate interview simulations, and accompanied dorm move-in."
  },
  {
    title: "Local India Presence with U.S. Ground Team",
    desc: "Advisors physically on the ground in Delhi, Mumbai, and Bengaluru, paired with our headquarters in Easthampton, Massachusetts."
  }
];
