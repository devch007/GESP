export interface CampusExperience {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface SportFeature {
  id: string;
  name: string;
  division: string;
  summary: string;
  image: string;
}

export interface FitFactor {
  id: string;
  name: string;
  headline: string;
  description: string;
  image: string;
}

export interface JourneyStep {
  number: string;
  title: string;
  summary: string;
}

export interface VisitedSchool {
  name: string;
  location: string;
  experience: string;
  tags: string[];
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CAMPUS_EXPERIENCES: CampusExperience[] = [
  {
    id: "campus-lawn",
    title: "Partner School",
    category: "CAMPUS & COMMUNITY",
    description: "Centuries of academic tradition set across vast wooded acres, living quadrangles, and vibrant student community life.",
    image: "/images/campus-lawn.jpg"
  },
  {
    id: "campus-aerial",
    title: "Partner School",
    category: "QUADRANGLE & ACADEMICS",
    description: "Panoramic historic prep school campuses with state-of-the-art libraries, innovation labs, and modern residential halls.",
    image: "/images/campus-aerial.jpg"
  },
  {
    id: "campus-entrance",
    title: "Partner School",
    category: "CAMPUS LIFE",
    description: "Historic architecture and welcoming student pathways fostering academic ambition, integrity, and lifelong global networks.",
    image: "/images/campus-entrance.jpg"
  },
  {
    id: "campus-athletics",
    title: "Partner School",
    category: "ATHLETICS & PERFORMANCE",
    description: "Championship varsity soccer pitches, Olympic-grade athletic complexes, and dedicated collegiate coaching staff.",
    image: "/images/student-athlete-soccer.jpg"
  },
  {
    id: "perkiomen-school",
    title: "Partner School",
    category: "ACADEMICS & INNOVATION",
    description: "Innovative medical and entrepreneurship institutes, Harkness discussions, and comprehensive college preparatory curricula.",
    image: "https://gespeducation.com/wp-content/uploads/2025/09/perkiomen_school_cover-scaled-1.jpeg"
  },
  {
    id: "rabun-gap",
    title: "Partner School",
    category: "COMMUNITY & CULTURE",
    description: "Scenic mountain campus fostering global diversity with students from over 50 nations and residential faculty mentors.",
    image: "https://gespeducation.com/wp-content/uploads/2025/09/Rabun-Gap-2-1536x1024-1.jpg"
  }
];

export const SPORTS_FEATURES: SportFeature[] = [
  {
    id: "soccer",
    name: "Soccer",
    division: "NEPSAC & National Prep Circuit",
    summary: "Competitive varsity programs with direct recruitment pipelines to NCAA Division I and III college rosters.",
    image: "/images/student-athlete-soccer.jpg"
  },
  {
    id: "basketball",
    name: "Basketball",
    division: "National Prep Circuit",
    summary: "High-intensity competition, dedicated strength trainers, and national tournament exposure for student-athletes.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "tennis",
    name: "Tennis",
    division: "All-Court Academy Circuits",
    summary: "Year-round indoor and outdoor tennis complexes, UTR tournament scheduling, and individualized athletic coaching.",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "swimming",
    name: "Swimming",
    division: "Olympic Natatorium Regimens",
    summary: "State-of-the-art aquatic centers combining dryland performance telemetry with high-caliber competitive meets.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "track",
    name: "Track & Field",
    division: "All-Terrain & Tartan Tracks",
    summary: "Championship distance trails and sprint complexes supported by sports medicine and athletic performance staff.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "rowing",
    name: "Rowing / Crew",
    division: "Historic River Boathouses",
    summary: "Prestigious water traditions with direct pathways to Ivy League and top collegiate crew recruitment.",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "volleyball",
    name: "Volleyball",
    division: "Varsity Prep Championships",
    summary: "Championship prep courts, video review technology, and competitive inter-scholastic regional tournaments.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "skiing",
    name: "Skiing",
    division: "Alpine & USSA Circuit",
    summary: "Private mountain training venues with customized academic schedules for winter racers.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "baseball",
    name: "Baseball",
    division: "Varsity Prep Leagues",
    summary: "Turf complexes, indoor batting tunnels, and direct scouting exposure for collegiate programs.",
    image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1600&q=85"
  }
];

export const FIT_FACTORS: FitFactor[] = [
  {
    id: "academics",
    name: "ACADEMICS",
    headline: "Learning Pace & Intellectual Environment",
    description: "Aligning learning styles, course offerings (AP, IB, Honors, advanced electives), and faculty mentorship ratios to ensure the student feels challenged and supported.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "athletics",
    name: "ATHLETICS",
    headline: "Competition Level & Coach Dynamics",
    description: "Evaluating varsity schedules, athletic facility quality, coach philosophy, and whether the student seeks national competition or recreational participation.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "personality",
    name: "PERSONALITY",
    headline: "Social Ecosystem & Campus Vibe",
    description: "Matching whether a student thrives in a large, dynamic community or a close-knit, intimate environment where every student and faculty member knows each other by name.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "goals",
    name: "GOALS",
    headline: "University Trajectory & Future Ambitions",
    description: "Mapping out specific college counseling capabilities, track records of Ivy League and NCAA placements, and the alumni network of the institution.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "community",
    name: "COMMUNITY",
    headline: "Diversity, Values & Residential Care",
    description: "Understanding residential life, weekend activities, cultural diversity, and how international students from India are welcomed and integrated.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "family-priorities",
    name: "FAMILY PRIORITIES",
    headline: "Geography, Security & Family Values",
    description: "Factoring in accessibility to major international airports (Boston, NYC), safety protocols, financial considerations, and family preferences.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=85"
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "GET TO KNOW THE STUDENT",
    summary: "Personal consultation evaluating academic curiosity, sports abilities, interests, and family values."
  },
  {
    number: "02",
    title: "UNDERSTAND THE GOALS",
    summary: "Clarifying university ambitions, athletic aspirations, and developmental milestones."
  },
  {
    number: "03",
    title: "CURATE SCHOOL OPTIONS",
    summary: "Presenting a carefully curated portfolio of schools aligned with the student's unique personality."
  },
  {
    number: "04",
    title: "BUILD THE APPLICATION",
    summary: "Essay strategy, athletic portfolio presentation, and authentic interview preparation."
  },
  {
    number: "05",
    title: "MAKE THE DECISION",
    summary: "Reviewing admissions offers, financial terms, and campus revisit feedback alongside the family."
  },
  {
    number: "06",
    title: "PREPARE FOR THE JOURNEY",
    summary: "F-1 visa procedures, course selection, pre-season camps, and dormitory transition support."
  }
];

export const VISITED_SCHOOLS: VisitedSchool[] = [
  {
    name: "Partner School",
    location: "New England, USA",
    experience: "Walked the quad, athletic complexes, and historic academic buildings. Exceptional balance of rigorous scholarship and high-performance prep traditions.",
    tags: ["NEPSAC Class A", "Historic Quad", "Holistic Character"],
    image: "/images/campus-lawn.jpg"
  },
  {
    name: "Partner School",
    location: "Northeast, USA",
    experience: "Comprehensive aerial view across modern libraries, Harkness discussion rooms, and university-preparatory residential quadrangle.",
    tags: ["Innovation Labs", "Collegiate Pathways", "Campus Quad"],
    image: "/images/campus-aerial.jpg"
  },
  {
    name: "Partner School",
    location: "Mid-Atlantic, USA",
    experience: "Historic entrance and active student pathways fostering deep international community integration and faculty mentorship.",
    tags: ["Historic Architecture", "Global Peer Group", "Advisory Mentorship"],
    image: "/images/campus-entrance.jpg"
  },
  {
    name: "Partner School",
    location: "Pennsylvania, USA",
    experience: "State-of-the-art Medical Institute, Artificial Intelligence labs, Harkness seminars, and collegiate athletic training facilities.",
    tags: ["Medical Institute", "AI & Innovation", "Athletics"],
    image: "https://gespeducation.com/wp-content/uploads/2025/09/perkiomen_school_cover-scaled-1.jpeg"
  },
  {
    name: "Partner School",
    location: "Georgia, USA",
    experience: "1,400-acre mountain campus with students from 50+ countries, Cirque program, varsity athletics, and AP/Honors curricula.",
    tags: ["Mountain Campus", "Global Diversity", "Arts & Athletics"],
    image: "https://gespeducation.com/wp-content/uploads/2025/09/Rabun-Gap-2-1536x1024-1.jpg"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is a U.S. boarding school?",
    answer: "A U.S. boarding school is an independent preparatory high school (typically grades 9–12 and post-graduate) where students live on campus in residential communities. They combine rigorous academic curricula (AP, IB, Honors), university-level athletics, arts facilities, and 24/7 faculty mentorship, preparing students directly for top universities and collegiate athletic recruitment."
  },
  {
    question: "Is boarding school suitable for Indian students?",
    answer: "Yes. Thousands of international students, including many from India, thrive in American boarding schools. They offer small class sizes (typically 10–14 students), discussion-based learning, world-class athletic facilities, and a secure residential environment with dedicated house parents and advisors looking after daily welfare."
  },
  {
    question: "What sports opportunities are available for student-athletes?",
    answer: "American prep schools participate in competitive leagues such as the NEPSAC and MAPL, featuring top-tier facilities, dedicated varsity coaches, strength trainers, and direct exposure to college coaches. Sports include soccer, basketball, tennis, swimming, track & field, rowing, golf, volleyball, squash, and skiing."
  },
  {
    question: "How does GESP help students find the right school?",
    answer: "GESP is relationship-driven. Rather than merely submitting applications, our team personally visits schools, meets athletic directors and admissions deans, and evaluates campus cultures from the inside. We work closely with families to understand the student's unique academic, athletic, and personal profile to identify where they will truly flourish."
  },
  {
    question: "When should Indian families start the process?",
    answer: "The ideal timeline begins 12 to 18 months prior to the desired entry term (typically August/September). Applications are generally submitted between November and January of the preceding academic year, though mid-year entry and rolling admissions are considered on a case-by-case basis."
  },
  {
    question: "How does the application and visa process work?",
    answer: "The application involves transcripts, teacher recommendations, student essays, interview simulations, and athletic highlight portfolios if applicable. Once accepted, schools issue an I-20 document, and GESP guides the family through the F-1 student visa documentation, consulate interviews, and pre-departure logistics."
  },
  {
    question: "How does GESP support families after acceptance?",
    answer: "Our guidance extends from the first conversation through move-in day. We assist with course selection, dorm registration, health compliance, athletic pre-season camps, and continue to serve as a resource for the family throughout the student's school years."
  }
];
