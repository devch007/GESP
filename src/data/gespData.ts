export interface SchoolVisit {
  id: string;
  name: string;
  location: string;
  quote: string;
  image: string;
  tags: string[];
  notes: string;
  badge?: string;
}

export interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

export interface SportItem {
  id: string;
  name: string;
  division: string;
  quote: string;
  image: string;
  stats: string;
}

export interface TimelineStep {
  number: string;
  title: string;
  duration: string;
  summary: string;
  details: string;
}

export interface SchoolPartner {
  id: string;
  name: string;
  state: string;
  founded: string;
  type: string;
  highlight: string;
  image: string;
  sportsStrong: string[];
  campusVibe: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  bio: string;
  image: string;
  experience: string;
}

export interface GlobalEvent {
  id: string;
  title: string;
  city: string;
  country: string;
  coordinates: { x: number; y: number }; // percentage on map
  date: string;
  type: string;
  description: string;
  image: string;
}

export interface StudentStory {
  id: string;
  student: string;
  country: string;
  sport: string;
  school: string;
  headline: string;
  journey: string;
  quote: string;
  image: string;
  badge: string;
}

// -------------------------------------------------------------
// DATA COLLECTIONS
// -------------------------------------------------------------

export const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "FIT",
    subtitle: "Finding the right environment.",
    description: "A great school is only great if it serves who the student is today—intellectually, emotionally, and socially. We go beyond rankings to discover true belonging.",
    bullets: ["Academic pace & learning style", "Community scale & cultural nuance", "Faculty mentorship ratios"]
  },
  {
    number: "02",
    title: "EXPERIENCE",
    subtitle: "Guidance from boarding school insiders.",
    description: "Our advisors walked these pathways as former prep athletes, admissions directors, and varsity coaches. We know the realities behind the glossy brochures.",
    bullets: ["Former prep directors & coaches", "Decades of admissions relationships", "Unfiltered perspective on culture"]
  },
  {
    number: "03",
    title: "OPPORTUNITY",
    subtitle: "Direct access to schools, sports & pathways.",
    description: "Opening doors directly to head coaches, athletic directors, and deans of admission through verified showcases and personal introductions.",
    bullets: ["NCAA college athletic trajectory", "Direct dialogue with varsity coaches", "Exclusive campus visitation access"]
  },
  {
    number: "04",
    title: "RELATIONSHIPS",
    subtitle: "Personal support throughout the journey.",
    description: "We work with a strictly capped cohort of families each year to guarantee direct, round-the-clock advisory from first conversation to graduation day.",
    bullets: ["Capped family advisory roster", "Visa, travel, & boarding logistics", "Multi-year mentor continuity"]
  }
];

export const SCHOOL_VISITS: SchoolVisit[] = [
  {
    id: "marianapolis",
    name: "Marianapolis Preparatory School",
    location: "Thompson, Connecticut",
    badge: "Recent On-Site Visit",
    quote: "An inside look at campus life, championship athletics, and the faculty who shape character.",
    notes: "Historic 150-acre New England hilltop campus featuring rigorous Golden Knight honors and a tight-knit residential culture where international scholars flourish.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85",
    tags: ["Campus", "Championship Athletics", "Student Life", "Community"]
  },
  {
    id: "williston",
    name: "Williston Northampton School",
    location: "Easthampton, Massachusetts",
    badge: "Featured Partner",
    quote: "Exceptional balance of academic rigor, athletic tradition, and visionary arts in the Pioneer Valley.",
    notes: "Walking through the Lossone ice rink and the humanities hall reveals an environment where students explore bold ambitions without fear of failure.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85",
    tags: ["NEPSAC Class A", "Pioneer Valley", "Honor Code", "Leadership"]
  },
  {
    id: "wilbraham",
    name: "Wilbraham & Monson Academy",
    location: "Wilbraham, Massachusetts",
    badge: "Global Leadership Focus",
    quote: "Founded in 1804. Home to the Center for Entrepreneurship, Economics & Global Leadership.",
    notes: "Students from 30+ nations run real investment portfolios and engage with world leaders right on their tranquil historic campus.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85",
    tags: ["Entrepreneurship", "Global Diversity", "Tradition", "Collegiate Prep"]
  },
  {
    id: "kiski",
    name: "The Kiski School",
    location: "Saltsburg, Pennsylvania",
    badge: "Athletic Powerhouse",
    quote: "A transformative brotherhood and co-ed boarding experience cultivating resilient leaders.",
    notes: "Legendary soccer and basketball programs combined with rigorous STEM and individualized faculty mentorship atop 350 scenic wooded acres.",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1400&q=85",
    tags: ["350 Wooded Acres", "Varsity Soccer", "Character Focus", "Resilience"]
  },
  {
    id: "christchurch",
    name: "Christchurch School",
    location: "Christchurch, Virginia",
    badge: "Waterfront Campus",
    quote: "Learning along the Rappahannock River: hands-on marine science and world-class sailing.",
    notes: "A place where the outdoors becomes a vibrant laboratory and character is forged both in the classroom and on open water.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=85",
    tags: ["Riverfront Campus", "Sailing", "Place-Based Ecology", "Close Community"]
  }
];

export const SPORTS_PROGRAMS: SportItem[] = [
  {
    id: "soccer",
    name: "Soccer",
    division: "NEPSAC & Prep National Champions",
    quote: "Elite development combining tactical European coaching philosophies with direct NCAA collegiate pipelines.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=85",
    stats: "38+ GESP Athletes placed in top NCAA D1 & D3 programs"
  },
  {
    id: "basketball",
    name: "Basketball",
    division: "National Prep Circuit",
    quote: "Championship prep circuits that regularly draw NBA scouts, NCAA Division I coaches, and national broadcasters.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1400&q=85",
    stats: "Regular national tournament exposure and collegiate showcases"
  },
  {
    id: "tennis",
    name: "Tennis",
    division: "All-Court Academy Training",
    quote: "Integrated UTR training regimens that balance intense tournament travel with pristine academic standards.",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1400&q=85",
    stats: "Full indoor/outdoor training facilities and dedicated performance coaches"
  },
  {
    id: "swimming",
    name: "Swimming & Water Polo",
    division: "Olympic-Length Natatoriums",
    quote: "State-of-the-art aquatic complexes fostering endurance, discipline, and record-breaking times.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=85",
    stats: "Personalized dryland conditioning and elite stroke telemetry"
  },
  {
    id: "track",
    name: "Track & Field / Cross Country",
    division: "All-Terrain & Tartan Tracks",
    quote: "Dedicated speed laboratories and scenic cross-country trails spanning hundreds of private campus acres.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
    stats: "State and regional champion pedigree across distance & sprints"
  },
  {
    id: "rowing",
    name: "Rowing / Crew",
    division: "Historic Boathouses",
    quote: "Legendary river traditions on the Connecticut, Charles, and Rappahannock rivers with collegiate Ivy recruitment.",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=1400&q=85",
    stats: "Premier access to prestigious regattas including Head of the Charles"
  },
  {
    id: "skiing",
    name: "Alpine Skiing",
    division: "USSA / FIS Circuits",
    quote: "Private mountain training venues in Vermont and New Hampshire with customized academic schedules for winter racers.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1400&q=85",
    stats: "On-snow coaching daily with year-round strength and video analysis"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: "01",
    title: "Get to Know You",
    duration: "Week 1 - 2",
    summary: "Deep personal consultation with both student and parents.",
    details: "We evaluate academic curiosity, athletic film, character traits, personal passions, and family values to establish an authentic baseline."
  },
  {
    number: "02",
    title: "Understand Your Goals",
    duration: "Week 3",
    summary: "Mapping out short-term growth and long-term collegiate visions.",
    details: "Aligning academic tracks (AP, IB, Honors), NCAA aspirations, geographic preferences, and financial criteria into a clear strategic framework."
  },
  {
    number: "03",
    title: "Find the Right Schools",
    duration: "Week 4 - 6",
    summary: "Curating a tailored portfolio from 400+ vetted institutions.",
    details: "Selecting reach, target, and foundation boarding schools where the student's unique personality and talent will be actively celebrated."
  },
  {
    number: "04",
    title: "Build Your Applications",
    duration: "Week 7 - 12",
    summary: "Crafting narratives that showcase the real human being.",
    details: "Polishing compelling student essays, athletic highlight reels, interview simulations, and ensuring recommendations resonate with admission deans."
  },
  {
    number: "05",
    title: "Make the Decision",
    duration: "Decision Month",
    summary: "Evaluating offers, financial aid, and campus visits together.",
    details: "We walk alongside your family as acceptances arrive, dissecting scholarship packages and facilitating final revisits before committing."
  },
  {
    number: "06",
    title: "Prepare for the Journey",
    duration: "Summer Transition",
    summary: "From F-1 student visas to dorm room move-in day.",
    details: "Complete logistical and emotional preparation: course registration, athletic pre-season camps, health compliance, and your student's first step on campus."
  }
];

export const SCHOOL_NETWORK: SchoolPartner[] = [
  {
    id: "williston",
    name: "Williston Northampton School",
    state: "Massachusetts",
    founded: "1841",
    type: "Co-ed Boarding (Grades 9-12, PG)",
    highlight: "Exceptional robotics, championship ice hockey & squash, vibrant campus village.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Ice Hockey", "Soccer", "Squash", "Lacrosse"],
    campusVibe: "Historic New England Academic Hub"
  },
  {
    id: "wilbraham",
    name: "Wilbraham & Monson Academy",
    state: "Massachusetts",
    founded: "1804",
    type: "Co-ed Boarding & Day (Grades 6-12, PG)",
    highlight: "Home to the Center for Entrepreneurship and trading floor simulations.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Basketball", "Rugby", "Track", "Golf"],
    campusVibe: "Global & Entrepreneurial"
  },
  {
    id: "kiski",
    name: "The Kiski School",
    state: "Pennsylvania",
    founded: "1888",
    type: "Co-ed Boarding (Grades 9-12, PG)",
    highlight: "350 pristine wooded acres, world-renowned boys' and girls' prep athletic programs.",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Soccer", "Basketball", "Swimming", "Baseball"],
    campusVibe: "Traditional & Brotherhood-Bonded"
  },
  {
    id: "christchurch",
    name: "Christchurch School",
    state: "Virginia",
    founded: "1921",
    type: "Co-ed Boarding (Grades 9-12)",
    highlight: "Rappahannock waterfront learning, national sailing champions, place-based science.",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Sailing", "Lacrosse", "Cross Country", "Crew"],
    campusVibe: "Coastal & Ecological"
  },
  {
    id: "andrews-osborne",
    name: "Andrews Osborne Academy",
    state: "Ohio",
    founded: "1910",
    type: "Co-ed Boarding (Grades PK-12)",
    highlight: "300 acres near Lake Erie with elite equestrian center and athletic academies.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Equestrian", "Soccer", "Tennis", "Basketball"],
    campusVibe: "Expansive & Focused"
  },
  {
    id: "spire",
    name: "SPIRE Academy",
    state: "Geneva, Ohio",
    founded: "2009",
    type: "Co-ed Sports Boarding High School",
    highlight: "Official Olympic and Paralympic training partner with world-class facilities.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Swimming", "Track & Field", "Basketball", "Esports"],
    campusVibe: "High-Performance Athletic"
  },
  {
    id: "linsly",
    name: "The Linsly School",
    state: "West Virginia",
    founded: "1814",
    type: "Co-ed Boarding & Day (Grades 5-12)",
    highlight: "Rigorous 100% college acceptance track with time-honored character traditions.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Football", "Tennis", "Cheer", "Swimming"],
    campusVibe: "Heritage & Academic Honor"
  },
  {
    id: "fay",
    name: "Fay School",
    state: "Southborough, Massachusetts",
    founded: "1866",
    type: "Junior Boarding (Grades K-9)",
    highlight: "The oldest junior boarding school in the US, nurturing foundational leadership.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Soccer", "Field Hockey", "Alpine Skiing", "Squash"],
    campusVibe: "Junior Excellence & Mentorship"
  },
  {
    id: "hyde",
    name: "Hyde School",
    state: "Bath, Maine",
    founded: "1966",
    type: "Co-ed Character Boarding",
    highlight: "Pioneering character-first education where courage and integrity lead the curriculum.",
    image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Lacrosse", "Basketball", "Track", "Wrestling"],
    campusVibe: "Character & Courage Driven"
  },
  {
    id: "st-thomas-more",
    name: "St. Thomas More School",
    state: "Oakdale, Connecticut",
    founded: "1962",
    type: "Co-ed Boarding (Grades 8-12, PG)",
    highlight: "100-acre lakefront campus, legendary championship basketball alumni.",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=900&q=80",
    sportsStrong: ["Basketball", "Soccer", "Baseball", "Cross Country"],
    campusVibe: "Structured & Transformational"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "matt-kokoszka",
    name: "Matt Kokoszka",
    role: "Founder & Chief Executive Officer",
    location: "Easthampton, MA",
    quote: "Built around relationships. We don't just place students; we stay in their corner long after move-in day.",
    bio: "Former collegiate athlete and lifelong boarding school advocate with two decades of trusted relationships across prep school deans and athletic directors across the United States.",
    experience: "15+ Years in Prep School Placement",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "john-chiavaroli",
    name: "John Chiavaroli",
    role: "Managing Director of Athletic Placement",
    location: "Connecticut, USA",
    quote: "Athletic recruiting at the prep level is nuanced. You need an advocate who speaks the language of collegiate scouts.",
    bio: "Decades of expertise in varsity athletic coaching, recruiting, and evaluating high-performance prospects for prep school and NCAA trajectories.",
    experience: "Former Prep Athletic Director & Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kelly-alves",
    name: "Kelly Alves",
    role: "Director of Family Advisory & Admissions",
    location: "Boston, MA",
    quote: "For a parent, handing your child's journey to someone else is daunting. My role is to make sure every question is answered with clarity.",
    bio: "Specializes in helping international families navigate academic testing, language transition programs, and residential community integration.",
    experience: "Admissions & Residential Dean Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "jonty-lukes",
    name: "Jonty Lukes",
    role: "European Operations & Showcase Director",
    location: "London / Madrid",
    quote: "Connecting the finest European student-athletes directly with American prep institutions.",
    bio: "Leads international showcase events in Spain, Italy, and the UK, identifying standout academic and sporting talent.",
    experience: "International Scout & Event Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "noah-giovannelli",
    name: "Noah Giovannelli",
    role: "Senior Educational Consultant",
    location: "New York, USA",
    quote: "Finding the right school is about finding where a student feels recognized and empowered to lead.",
    bio: "Focuses on curriculum alignment, honors tracks, and personal statement mentoring for students targeting elite universities.",
    experience: "Curriculum & Academic Specialist",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mark-viser",
    name: "Mark Viser",
    role: "Director of International Partnerships",
    location: "Milan, Italy",
    quote: "Trust is the currency of our work. Families know we personally visit every single school we propose.",
    bio: "Cultivates relationships with international schools, sports academies, and educational federations worldwide.",
    experience: "Global Educational Strategy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "owen-finberg",
    name: "Owen Finberg",
    role: "Athletic Advisory Specialist",
    location: "Massachusetts, USA",
    quote: "A championship coach looks for resilience, coachability, and character. That is what we prepare our students to show.",
    bio: "Decorated prep coach with multiple New England championship titles and a vast network across college coaches.",
    experience: "Multi-Time NEPSAC Champion Coach",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "jordan-carver",
    name: "Jordan Carver",
    role: "Student Experience & Transition Coordinator",
    location: "Connecticut, USA",
    quote: "The journey doesn't stop at acceptance. The dorm move-in, roommate dynamic, and orientation are where real success begins.",
    bio: "Guides international students through the emotional and logistical realities of living independently abroad.",
    experience: "Student Mentorship & Cultural Transition",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "darlenia-kokoszka",
    name: "Darlenia Kokoszka",
    role: "Director of Client Relations & Logistics",
    location: "Easthampton, MA",
    quote: "Every detail matters—from campus tour itineraries to visa paperwork. We treat every family like our own.",
    bio: "Manages GESP's premier family experience, private travel coordination, campus revisit scheduling, and compliance.",
    experience: "Luxury Family Hospitality & Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "heidi-nydam",
    name: "Heidi Nydam",
    role: "Admissions Strategist & Former Dean",
    location: "New England, USA",
    quote: "Admissions committees read thousands of files. Our job is to let the student's authentic spark shine through cleanly.",
    bio: "Brings over twenty years of direct boarding school admissions committee experience evaluating thousands of domestic and international applicants.",
    experience: "20+ Years Boarding School Admissions Dean",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
  }
];

export const GLOBAL_EVENTS: GlobalEvent[] = [
  {
    id: "spain-showcase",
    title: "GESP Mediterranean Showcase & Combine",
    city: "Barcelona & Madrid",
    country: "Spain",
    coordinates: { x: 48, y: 38 },
    date: "November 2026",
    type: "Athletic Combine & School Fair",
    description: "Bringing top US boarding school athletic directors and admissions officers to evaluate elite European talent on-pitch and in private interviews.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "italy-symposium",
    title: "Milan Global Education Roundtable",
    city: "Milan",
    country: "Italy",
    coordinates: { x: 52, y: 35 },
    date: "January 2027",
    type: "Family Advisory & Head of School Panels",
    description: "Exclusive gathering for families seeking dual academic and athletic excellence in New England prep environments.",
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bermuda-forum",
    title: "Bermuda Student-Athlete Invitational",
    city: "Hamilton",
    country: "Bermuda",
    coordinates: { x: 33, y: 44 },
    date: "February 2027",
    type: "Scholarship & Identification Camp",
    description: "Longstanding partnership camp connecting premier Bermudian athletes with US boarding school scholarships and leadership grants.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "brazil-academy",
    title: "São Paulo Prep Summit",
    city: "São Paulo",
    country: "Brazil",
    coordinates: { x: 36, y: 72 },
    date: "March 2027",
    type: "International Showcase & Seminar",
    description: "Comprehensive multi-sport evaluation camp and parent seminar on US boarding school admissions and collegiate pathways.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "usa-final-camp",
    title: "New England Campus Revisit & Summer Combine",
    city: "Easthampton, MA",
    country: "USA",
    coordinates: { x: 28, y: 36 },
    date: "July 2027",
    type: "On-Campus Preparation & Revisit",
    description: "Immersive 4-day prep orientation where incoming students familiarize themselves with campus life, strength training, and faculty expectations.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
  }
];

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: "mateo-silva",
    student: "Mateo Silva",
    country: "Madrid, Spain",
    sport: "Varsity Soccer",
    school: "Williston Northampton School",
    headline: "From Madrid academy to NEPSAC Class A Champions & Ivy League recruit.",
    journey: "Mateo had great technical soccer skills but felt restricted by traditional Spanish curricula that forced students to choose between university prep and sports. GESP introduced Mateo to New England prep schools where he became team captain while maintaining a 3.9 GPA.",
    quote: "GESP didn't just give me a list of schools. Matt and the team actually drove me to the campus, introduced me to the coach, and made my family feel completely at peace.",
    badge: "Class of 2024 • Committed to Dartmouth",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "chiara-rossi",
    student: "Chiara Rossi",
    country: "Milan, Italy",
    sport: "Competitive Tennis & Violin",
    school: "Wilbraham & Monson Academy",
    headline: "Balancing conservatory-level music and varsity tennis on one historic campus.",
    journey: "Chiara needed a school that respected her twin passions for violin performance and competitive all-court tennis. GESP arranged direct auditions with arts faculty and court sessions with the head tennis coach before application.",
    quote: "In Italy, schools couldn't accommodate both my tournaments and my recitals. GESP found a school in Massachusetts where both are celebrated every single week.",
    badge: "Class of 2025 • High Honors Scholar",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "andre-albuquerque",
    student: "André Albuquerque",
    country: "Rio de Janeiro, Brazil",
    sport: "Basketball & STEM",
    school: "The Kiski School",
    headline: "Finding brotherhood, collegiate athletic exposure, and engineering honors.",
    journey: "Coming from Brazil, adjusting to cold winters and boarding life was André's biggest concern. GESP connected his parents with an alumni family and paired him with an upperclassman mentor months before his arrival.",
    quote: "Kiski became my second family. The discipline I learned here transformed my game and helped me earn a scholarship to an NCAA program.",
    badge: "Class of 2023 • NCAA Division I Athlete",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80"
  }
];
