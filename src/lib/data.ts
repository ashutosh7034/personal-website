import {
  Project,
  ArchiveProject,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  PublicationItem,
  AchievementItem,
  TechProjectMapping,
} from "./types";

export const PERSONAL_INFO = {
  name: "Ashutosh Pandey",
  title: "Software Developer",
  tagline: "I build software that turns ideas into useful systems.",
  aboutQuote:
    "I learn by building. Most of my work starts with a problem that is still a little messy. I've built full-stack applications, mobile products, RAG systems, computer-vision prototypes, and research projects. I enjoy understanding how a system works from end to end — from the data and backend to the interface someone actually uses.",
  location: "Mumbai, India",
  email: "ashutosh3276s16@gmail.com",
  phone: "+91 9702420582",
  github: "https://github.com/ashutosh7034",
  linkedin: "https://www.linkedin.com/in/ashutoshpandey34/",
  portfolioUrl: "https://ashutoshpandey34.netlify.app",
  resumePdf: "/Ashutosh_Pandey_Resume.pdf",
  mcaCgpa: "9.14",
  iitCgpa: "7.67",
  bscCgpa: "9.09",
  cetPercentile: "97.80",
};

// ========================================================
// TOP 3 BEST FLAGSHIP PROJECTS (HOMEPAGE HIGHLIGHTS)
// ========================================================
export const FEATURED_PROJECTS: Project[] = [
  {
    id: "oceanguard-sih-attribution",
    number: "01",
    title: "OceanGuard AI",
    shortTitle: "OceanGuard AI",
    subtitle: "Maritime Oil Spill Attribution",
    category: "Geospatial Telemetry & Vision",
    archiveCategory: "hackathon",
    year: "2026",
    duration: "Aug 2026 – Sep 2026",
    badge: "Smart India Hackathon 2026 Prototype",
    description:
      "A geospatial AI and vessel trajectory tracking prototype built for Smart India Hackathon (SIH26143) to backtrack satellite-detected marine oil spills to candidate responsible ships.",
    problem:
      "Satellite radar (SAR) imagery can detect where an oil slick is floating in the ocean, but cannot identify which vessel caused it. Maritime patrol teams lacked an automated way to backtrack historical vessel trajectories against the spill origin timestamp.",
    built:
      "Developed a Python and FastAPI telemetry engine connecting OpenCV satellite contour segmentation with multi-ship Automatic Identification System (AIS) spatio-temporal logs. Calculated geodesic proximity decay using the Haversine equation to rank potential ships by likelihood.",
    myContribution:
      "Built the AIS data engineering pipeline in `ais_data.py`, historical trajectory interpolation, and the geodesic distance decay scoring engine in `vessel_matching.py`.",
    technicalApproach:
      "Grouped vessel AIS telemetry (MMSI, coordinates, speed over ground, heading) across the spill origin time window and scored closeness to estimated slick centroid.",
    outcome:
      "Selected in the IIT Madras BS Degree Programme Internal Hackathon evaluation for SIH 2026.",
    pipelineSteps: [
      {
        step: "01",
        label: "SAR Slick Segmentation",
        description: "Adaptive thresholding and morphological filtering to isolate oil slick contours.",
      },
      {
        step: "02",
        label: "Origin & Time Extraction",
        description: "Calculate centroid coordinates, satellite pass timestamp, and estimated spill boundaries.",
      },
      {
        step: "03",
        label: "Historical AIS Ingestion",
        description: "Parse vessel telemetry (MMSI, lat/long, SOG, COG) across the origin time window.",
      },
      {
        step: "04",
        label: "Geodesic Trajectory Matching",
        description: "Compute Haversine distance decay to score vessel proximity against spill origin.",
      },
      {
        step: "05",
        label: "Ranked Candidate Attribution",
        description: "Output ranked vessel logs categorized into high, medium, and low risk tiers.",
      },
    ],
    techStack: ["Python", "FastAPI", "OpenCV", "Pandas", "NumPy", "AIS Telemetry", "Geodesics"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    featured: true,
  },
  {
    id: "rag-academic-assistant",
    number: "02",
    title: "RAG Academic Assistant",
    shortTitle: "RAG Assistant",
    subtitle: "Conversational Document Retrieval",
    category: "Applied AI & Vector Search",
    archiveCategory: "ai",
    year: "2026",
    duration: "Jan 2026 – Mar 2026",
    badge: "Published Research Prototype",
    description:
      "An end-to-end Retrieval-Augmented Generation (RAG) assistant designed to resolve student academic queries by retrieving factual context from college syllabi, regulations, and circulars.",
    problem:
      "College circulars, course syllabi, and academic regulations were scattered across dozens of unstructured PDFs, making manual lookup slow and search queries keyword-limited.",
    built:
      "Engineered an automated document chunking and vector embedding workflow in Python using LangChain and FAISS. Created prompt synthesis guardrails connecting retrieved text chunks to an LLM for verified answers.",
    myContribution:
      "Designed the LangChain ingestion script, semantic chunking boundaries, FAISS vector indexing, prompt engineering templates, and similarity search scoring.",
    technicalApproach:
      "Evaluated chunk overlap sizes against benchmark test questions to optimize retrieval accuracy before augmenting the prompt.",
    outcome:
      "Served as the experimental foundation for published research in AI in Education with verified query resolution.",
    pipelineSteps: [
      {
        step: "01",
        label: "Document Parsing",
        description: "Extract text from college PDFs and circulars with metadata tagging.",
      },
      {
        step: "02",
        label: "Semantic Chunking",
        description: "Split text into coherent sections with intentional chunk overlap.",
      },
      {
        step: "03",
        label: "FAISS Vector Indexing",
        description: "Generate dense mathematical embeddings and store in high-speed vector index.",
      },
      {
        step: "04",
        label: "Similarity Retrieval",
        description: "Retrieve top-k relevant document fragments matching the user question.",
      },
      {
        step: "05",
        label: "Context Generation",
        description: "Synthesize structured prompts to return accurate, grounded responses.",
      },
    ],
    techStack: ["Python", "LangChain", "FAISS", "LLM Integration", "Vector Embeddings", "Prompt Design"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    featured: true,
  },
  {
    id: "tcet-specialization-tracker",
    number: "03",
    title: "TCET Specialization Tracker",
    shortTitle: "Specialization Tracker",
    subtitle: "Academic Workflow & Allocation Portal",
    category: "Full-Stack Enterprise Systems",
    archiveCategory: "fullstack",
    year: "2026",
    duration: "Apr 2026 – Jun 2026",
    badge: "Institutional System",
    description:
      "A database-driven institutional workflow portal managing student specialization track selection, course allocations, and departmental approvals.",
    problem:
      "Managing student elective preferences across 150+ candidates using spreadsheets led to data conflicts, missing records, and slow manual approval loops.",
    built:
      "Architected a normalized MySQL database schema with role-based access control (Student, Faculty, Admin). Implemented secure authentication, session management, and dynamic reporting in PHP and JavaScript.",
    myContribution:
      "Designed the relational database schema, administrative review dashboard, role-based access control, and asynchronous form validation.",
    technicalApproach:
      "Applied relational integrity constraints, parameterized SQL queries, and AJAX updates for instant record synchronization without full page refreshes.",
    outcome:
      "Streamlined track selection and consolidated departmental records into a single authoritative dashboard.",
    pipelineSteps: [
      {
        step: "01",
        label: "Student Submission",
        description: "Students submit ranked specialization choices through validated forms.",
      },
      {
        step: "02",
        label: "Relational Storage",
        description: "Preferences stored in normalized MySQL tables with foreign key constraints.",
      },
      {
        step: "03",
        label: "Admin Review",
        description: "Department chairs filter, evaluate, and allocate tracks based on cohort rules.",
      },
      {
        step: "04",
        label: "Live Status Sync",
        description: "Instant allocation status updates published to student portals via AJAX.",
      },
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap", "HTML/CSS", "Apache"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    featured: true,
  },
];

// ========================================================
// COMPLETE AUDITED GITHUB PROJECT ARCHIVE (ALL PROJECTS)
// ========================================================
export const PROJECT_ARCHIVE: ArchiveProject[] = [
  {
    id: "oceanguard-sih-2026",
    title: "OceanGuard AI (SIH26143)",
    category: "Geospatial Data & Computer Vision",
    archiveCategory: "hackathon",
    year: "2026",
    description: "Marine oil spill attribution prototype matching SAR satellite contours with AIS vessel trajectories.",
    techStack: ["Python", "FastAPI", "OpenCV", "Pandas", "Geodesics"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    highlight: "IIT Madras Internal Hackathon Selection",
  },
  {
    id: "rag-academic-chat-bot",
    title: "RAG Academic Assistant",
    category: "Applied AI & Vector Search",
    archiveCategory: "ai",
    year: "2026",
    description: "Document retrieval conversational assistant using LangChain and FAISS vector embeddings.",
    techStack: ["Python", "LangChain", "FAISS", "LLM APIs"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    highlight: "Published Research Prototype",
  },
  {
    id: "tcet-specialization",
    title: "TCET Specialization Tracker",
    category: "Enterprise Workflow & Database",
    archiveCategory: "fullstack",
    year: "2026",
    description: "Academic elective and specialization track management system with role-based access control.",
    techStack: ["PHP", "MySQL", "JavaScript", "AJAX"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    highlight: "Institutional Portal",
  },
  {
    id: "quickserve-platform",
    title: "QuickServe — Local Services Search Engine",
    category: "Full-Stack Web & Geospatial",
    archiveCategory: "fullstack",
    year: "2025",
    description: "Hyperlocal service marketplace with MongoDB geospatial radius search, provider verifications, and JWT auth.",
    techStack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
    githubUrl: "https://github.com/ashutosh7034/Local-Service-Search-Engine",
    highlight: "Geospatial Indexing",
  },
  {
    id: "quizai-flutter",
    title: "QuizAI — Adaptive Learning App",
    category: "Cross-Platform Mobile Application",
    archiveCategory: "mobile",
    year: "2025",
    description: "Cross-platform mobile quiz application with Cloud Firestore real-time synchronization and topic mastery tracking.",
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Provider"],
    githubUrl: "https://github.com/ashutosh7034/QuizAI",
    highlight: "Real-time State Sync",
  },
  {
    id: "jobportal-yt",
    title: "Full-Stack Job Portal System",
    category: "Full-Stack Systems",
    archiveCategory: "fullstack",
    year: "2025",
    description: "Recruitment portal with applicant tracking, employer job postings, role-based auth middleware, and resume uploads.",
    techStack: ["Node.js", "Express.js", "MongoDB", "React", "JWT"],
    githubUrl: "https://github.com/ashutosh7034/jobportal-yt",
  },
  {
    id: "healthcare-crm",
    title: "AI-First Healthcare CRM (HCP Module)",
    category: "Backend & Systems",
    archiveCategory: "backend",
    year: "2025",
    description: "Healthcare professional CRM tracking medical interactions, doctor scheduling, and compliance audit logs.",
    techStack: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    githubUrl: "https://github.com/ashutosh7034/AI-First-Customer-Relationship-Management",
  },
  {
    id: "age-gender-detection",
    title: "Gender & Age Estimation AI",
    category: "Applied AI / Computer Vision",
    archiveCategory: "ai",
    year: "2025",
    description: "Deep learning facial attribute classification using OpenCV Caffe models and convolutional neural networks.",
    techStack: ["Python", "OpenCV", "Deep Learning", "CNN"],
    githubUrl: "https://github.com/ashutosh7034/gender-age-detection",
  },
  {
    id: "mahabooks-portal",
    title: "Maharashtra State Books Portal",
    category: "Frontend Web & Accessibility",
    archiveCategory: "fullstack",
    year: "2025",
    description: "Educational portal hosting Maharashtra State Board textbooks to improve free digital curriculum accessibility.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    githubUrl: "https://github.com/ashutosh7034/Mahabooks-",
    liveUrl: "https://maharashtrabookpdf.netlify.app",
  },
  {
    id: "oneconnect-superapp",
    title: "OneConnect Super-App",
    category: "Enterprise Java Architecture",
    archiveCategory: "backend",
    year: "2024",
    description: "Unified web services dashboard built with Java Servlets, JSP, and relational MySQL database backend.",
    techStack: ["Java", "Servlets", "JSP", "MySQL", "Apache Tomcat"],
    githubUrl: "https://github.com/ashutosh7034/OneConnect---Web-Application",
  },
  {
    id: "hyperlocal-delivery",
    title: "Hyperlocal Multi-Vendor Delivery Marketplace",
    category: "Full-Stack E-Commerce",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Multi-vendor food and grocery delivery engine with live cart calculations and vendor order management.",
    techStack: ["React", "Node.js", "Express.js", "MySQL"],
    githubUrl: "https://github.com/ashutosh7034/Hyperlocal-Delivery-Marketplace",
  },
  {
    id: "zoho-personalized-mailer",
    title: "Zoho Personalized Bulk Email Dispatcher",
    category: "CLI & Backend Automation",
    archiveCategory: "backend",
    year: "2024",
    description: "Automated CLI tool for personalized transactional outreach using SMTP and Zoho Mail servers.",
    techStack: ["PHP", "CLI", "SMTP", "RPA Automation"],
    githubUrl: "https://github.com/ashutosh7034/zoho-personalized-bulk-mailer",
  },
  {
    id: "learning-management-system",
    title: "Learning Management System (LMS)",
    category: "Academic & Institutional",
    archiveCategory: "academic",
    year: "2024",
    description: "Modular LMS platform for course material distribution, assignment submissions, and student grading.",
    techStack: ["PHP", "MySQL", "HTML5/CSS3", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/learning_management_system",
  },
  {
    id: "smart-digital-library",
    title: "Smart Digital Library Portal",
    category: "Academic & Institutional",
    archiveCategory: "academic",
    year: "2024",
    description: "Library book cataloging, barcode tracking, borrowing lifecycle, and overdue penalty system.",
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/ashutosh7034/Smart-Digital-Library-Portal",
  },
  {
    id: "tcet-nep-saarthi-portal",
    title: "TCET NEP Saarthi Outreach Website",
    category: "Institutional Portal",
    archiveCategory: "academic",
    year: "2026",
    description: "Official institutional web platform promoting National Education Policy student initiatives and academic events.",
    techStack: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    githubUrl: "https://github.com/ashutosh7034/TCET_Nep_Saarthi_website",
  },
  {
    id: "curfew-epass-system",
    title: "Curfew E-Pass Management System",
    category: "Workflow & Governance",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Emergency movement authorization system with applicant document verification and QR pass generation.",
    techStack: ["PHP", "MySQL", "JavaScript", "QR APIs"],
    githubUrl: "https://github.com/ashutosh7034/Curfew-E-pass-Management-System",
  },
  {
    id: "online-security-guard-system",
    title: "Online Security Guard Hiring System",
    category: "Service Booking Platform",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Security personnel allocation portal with shift scheduling, rate calculation, and client contract management.",
    techStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/Online-Security-Guard-Hiring-System",
  },
  {
    id: "bookmyturf-app",
    title: "BookMyTurf Slot Booking System",
    category: "Web Application",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Sports turf slot reservation platform with interactive calendar grids and automated confirmation receipts.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    githubUrl: "https://github.com/ashutosh7034/BookMyTurf",
  },
  {
    id: "pasteboard-cpp",
    title: "PasteBoard Clipboard Utility",
    category: "Systems Programming",
    archiveCategory: "backend",
    year: "2024",
    description: "Lightweight cross-application clipboard history manager with quick keyboard shortcuts.",
    techStack: ["C++", "Data Structures", "Memory Management"],
    githubUrl: "https://github.com/ashutosh7034/PasteBoard",
  },
  {
    id: "tourism-management",
    title: "Tourism Management System",
    category: "Frontend Web Application",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Travel package catalog with itinerary planning and tour booking inquiry workflows.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/Tourism-Management-System",
  },
  {
    id: "ifsc-finder",
    title: "IFSC Code Finder Utility",
    category: "API & Utility",
    archiveCategory: "backend",
    year: "2024",
    description: "Banking branch locator fetching bank names, branch addresses, and RTGS codes via public banking APIs.",
    techStack: ["JavaScript", "REST APIs", "JSON"],
    githubUrl: "https://github.com/ashutosh7034/IFSC-Code-Finder-Project",
  },
];

// ========================================================
// TECHNOLOGY TO PROJECT MAPPINGS (FOR PROJECT MAPPING VIEW)
// ========================================================
export const TECH_PROJECT_MAPPINGS: TechProjectMapping[] = [
  {
    tech: "Python",
    category: "languages",
    projectIds: [
      "OceanGuard AI (SIH26143)",
      "RAG Academic Assistant",
      "Gender & Age Estimation AI",
    ],
  },
  {
    tech: "LangChain & RAG",
    category: "ai",
    projectIds: ["RAG Academic Assistant"],
  },
  {
    tech: "FAISS Vector DB",
    category: "ai",
    projectIds: ["RAG Academic Assistant"],
  },
  {
    tech: "FastAPI",
    category: "frameworks",
    projectIds: ["OceanGuard AI (SIH26143)"],
  },
  {
    tech: "OpenCV",
    category: "ai",
    projectIds: ["OceanGuard AI (SIH26143)", "Gender & Age Estimation AI"],
  },
  {
    tech: "Node.js & Express",
    category: "frameworks",
    projectIds: [
      "QuickServe — Local Services",
      "Full-Stack Job Portal",
      "AI-First Healthcare CRM",
      "Hyperlocal Delivery Marketplace",
    ],
  },
  {
    tech: "PHP & Apache",
    category: "languages",
    projectIds: [
      "TCET Specialization Tracker",
      "Learning Management System",
      "Smart Digital Library",
      "Curfew E-Pass System",
      "Online Security Guard System",
      "Zoho Bulk Mailer",
    ],
  },
  {
    tech: "MySQL",
    category: "databases",
    projectIds: [
      "TCET Specialization Tracker",
      "OneConnect Super-App",
      "Learning Management System",
      "Smart Digital Library",
      "Hyperlocal Delivery Marketplace",
      "Curfew E-Pass System",
    ],
  },
  {
    tech: "MongoDB",
    category: "databases",
    projectIds: [
      "QuickServe — Local Services",
      "Full-Stack Job Portal",
      "AI-First Healthcare CRM",
    ],
  },
  {
    tech: "Flutter & Dart",
    category: "mobile",
    projectIds: ["QuizAI — Adaptive Learning App"],
  },
  {
    tech: "Java",
    category: "languages",
    projectIds: ["OneConnect Super-App"],
  },
  {
    tech: "Firebase Firestore",
    category: "databases",
    projectIds: ["QuizAI — Adaptive Learning App"],
  },
  {
    tech: "C++",
    category: "languages",
    projectIds: ["PasteBoard Clipboard Utility"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    description: "Core programming languages used for systems, scripting, and backend logic.",
    skills: [
      { name: "Java", badge: "Core" },
      { name: "Python", badge: "AI & Data" },
      { name: "JavaScript", badge: "Web & Node" },
      { name: "SQL", badge: "Relational" },
      { name: "C", badge: "Foundational" },
      { name: "Dart", badge: "Mobile" },
    ],
  },
  {
    title: "Full-Stack & Backend",
    icon: "Layers",
    description: "Server architecture, RESTful API design, and client-side interfaces.",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PHP" },
      { name: "Next.js / React" },
      { name: "REST APIs" },
      { name: "HTML5 / CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Applied AI & Data",
    icon: "Brain",
    description: "LLM integration, document retrieval pipelines, and telemetry math.",
    skills: [
      { name: "LangChain" },
      { name: "RAG Architecture" },
      { name: "FAISS Vector DB" },
      { name: "OpenCV" },
      { name: "Pandas & NumPy" },
      { name: "Prompt Design" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational and document storage systems.",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "SQLite" },
      { name: "Firebase Firestore" },
    ],
  },
  {
    title: "Mobile & Tools",
    icon: "Smartphone",
    description: "Cross-platform mobile frameworks and developer workflow tools.",
    skills: [
      { name: "Flutter" },
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Android Studio" },
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Android / Web Application Developer",
    company: "Creatalysis",
    location: "Remote",
    period: "Dec 2024 – Jul 2025",
    type: "Internship",
    description:
      "Collaborated with the engineering team on core application features, responsive layouts, API endpoints, and clean component architecture.",
    highlights: [
      "Contributed to cross-platform mobile and web application features with focused bug resolution.",
      "Collaborated on API integrations and state management workflows.",
      "Participated in agile code reviews and feature refinement.",
    ],
    skills: ["Flutter", "Dart", "JavaScript", "REST APIs", "Git"],
  },
  {
    role: "Software Development Intern",
    company: "Prodigy InfoTech",
    location: "Remote",
    period: "Jun 2024 – Jul 2024",
    type: "Internship",
    description:
      "Completed software engineering tasks including interactive web modules, data validation scripts, and responsive user interfaces.",
    highlights: [
      "Built multiple functional software assignments adhering to clean coding standards.",
      "Strengthened asynchronous JavaScript, DOM manipulation, and responsive design fundamentals.",
    ],
    skills: ["JavaScript", "HTML/CSS", "Web Development", "Git"],
  },
  {
    role: "Campus Ambassador",
    company: "Google Gemini AI Program",
    location: "TCET Mumbai",
    period: "Mar 2026 – Present",
    type: "Leadership",
    description:
      "Representing Google Gemini on campus, organizing student workshops on generative AI, prompt engineering, and LLM application development.",
    highlights: [
      "Conducted developer sessions introducing peers to Gemini APIs and multimodal workflows.",
      "Mentored student teams on building applied AI hackathon prototypes.",
    ],
    skills: ["Generative AI", "Gemini API", "Prompt Engineering", "Technical Mentorship"],
  },
  {
    role: "Student Ambassador",
    company: "NEP Saarthi (UGC Initiative)",
    location: "Mumbai",
    period: "Jan 2026 – Present",
    type: "Institutional",
    description:
      "Selected as student ambassador promoting the National Education Policy provisions, interdisciplinary learning, and academic tech adoption.",
    highlights: [
      "Engaged student cohorts in educational technology discussions and institutional policy initiatives.",
    ],
    skills: ["Leadership", "Communication", "Academic Advocacy"],
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "AI-Driven Adaptive Learning Frameworks in Higher Education",
    year: "2026",
    authors: "Ashutosh Pandey, et al.",
    venue: "MULTICON-W 2026 (International Conference)",
    summary:
      "Investigates the integration of retrieval-augmented generation and adaptive feedback loops in university curricula to improve individualized student outcomes.",
    award: "Best Paper Award @ MULTICON-W 2026",
    tags: ["Artificial Intelligence", "Education Technology", "RAG", "Adaptive Systems"],
  },
  {
    title: "Predictive Analytics and Student Track Allocation Systems",
    year: "2026",
    authors: "Ashutosh Pandey, et al.",
    venue: "Published Book Chapter — Emerging Trends in Computational Sciences",
    summary:
      "Details relational workflow architectures and algorithmic optimization techniques for handling complex departmental elective allocations across large student cohorts.",
    tags: ["Database Systems", "Optimization", "Enterprise Architecture"],
  },
  {
    title: "Conversational Information Retrieval in Academic Document Archives",
    year: "2026",
    authors: "Ashutosh Pandey, et al.",
    venue: "Published Book Chapter — Applied AI & Intelligent Computing",
    summary:
      "A comprehensive review of dense vector indexing (FAISS), recursive semantic chunking strategies, and hallucination reduction in specialized technical archives.",
    tags: ["Information Retrieval", "Vector Embeddings", "FAISS", "LangChain"],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Thakur College of Engineering and Technology (TCET)",
    location: "Mumbai, India",
    period: "Sep 2025 – Present",
    score: "9.14",
    scoreType: "CGPA",
    description: "Specializing in Software Engineering, Advanced Database Systems, and Applied AI.",
    focusAreas: ["Software Architecture", "Relational & NoSQL Databases", "Distributed Systems"],
  },
  {
    degree: "BS in Data Science & Applications",
    institution: "Indian Institute of Technology, Madras (IITM)",
    location: "Remote",
    period: "Sep 2025 – Present",
    score: "7.67",
    scoreType: "CGPA",
    description: "Rigorous coursework in Mathematical Foundations, Machine Learning, and Big Data.",
    focusAreas: ["Linear Algebra & Statistics", "Data Engineering", "Machine Learning"],
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Thakur Ramnarayan College of Arts & Commerce",
    location: "Mumbai, India",
    period: "Jul 2022 – May 2025",
    score: "9.09",
    scoreType: "CGPA",
    description: "Graduated with distinction. Core focus on Algorithms, Data Structures, and Web Technologies.",
    focusAreas: ["Data Structures & Algorithms", "Java & Python", "Database Management"],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Best Paper Award",
    organization: "MULTICON-W 2026 International Conference",
    year: "2026",
    category: "academic",
    badgeText: "Best Paper",
    details: "Awarded top research paper honors for work on AI-driven academic support systems.",
  },
  {
    title: "Finalist — Mumbai Hacks",
    organization: "Mumbai Hacks Hackathon",
    year: "2025",
    category: "hackathon",
    badgeText: "Finalist",
    details: "Built an innovative software prototype selected among the top finalist teams.",
  },
  {
    title: "Finalist — IIT Bombay Hackathon",
    organization: "IIT Bombay",
    year: "2025",
    category: "hackathon",
    badgeText: "Finalist",
    details: "Selected as finalist in competitive collegiate engineering hackathon at IIT Bombay.",
  },
  {
    title: "2nd Runner-up — BUILD BATTLE 2026",
    organization: "Build Battle Hackathon",
    year: "2026",
    category: "competition",
    badgeText: "2nd Runner-up",
    details: "Recognized for high-velocity software engineering prototype development.",
  },
  {
    title: "Final Round — 20th Aavishkar Research Convention",
    organization: "University of Mumbai",
    year: "2025",
    category: "academic",
    badgeText: "Final Round",
    details: "Selected for state-level university research convention representing original engineering research.",
  },
  {
    title: "MAH MCA CET 2025 — 97.80 Percentile",
    organization: "State Common Entrance Test Cell, Maharashtra",
    year: "2025",
    category: "academic",
    badgeText: "97.80%ile",
    details: "Ranked in top 2.2% statewide in post-graduate MCA entrance examination.",
  },
];
