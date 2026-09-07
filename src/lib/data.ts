import {
  Project,
  ArchiveProject,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  PublicationItem,
  AchievementItem,
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
// 3 BEST FEATURED PROJECTS (FLAGSHIP SYSTEMS)
// ========================================================
export const FEATURED_PROJECTS: Project[] = [
  {
    id: "oceanguard-sih-attribution",
    number: "01",
    title: "OceanGuard AI",
    shortTitle: "OceanGuard AI",
    subtitle: "Maritime Oil Spill Attribution & Telemetry Tracking",
    category: "Geospatial Data Engineering & Vision",
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
        description: "Adaptive thresholding and morphological filtering on SAR imagery to isolate oil slick contours.",
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
    techStack: ["Python", "FastAPI", "OpenCV", "Pandas", "NumPy", "AIS Data Engineering", "Geodesics"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    featured: true,
  },
  {
    id: "rag-academic-assistant",
    number: "02",
    title: "RAG-Based AI Academic Assistant",
    shortTitle: "RAG Assistant",
    subtitle: "Conversational Document Retrieval & Grounded Generation",
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
        label: "Document Ingestion",
        description: "Extract text from college PDFs and circulars with structured metadata tagging.",
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
    subtitle: "Enterprise Departmental Workflow & Track Allocation Portal",
    category: "Full-Stack Enterprise Systems",
    archiveCategory: "fullstack",
    year: "2026",
    duration: "Apr 2026 – Jun 2026",
    badge: "Institutional System",
    description:
      "A database-driven institutional workflow portal managing student specialization track selection, course allocations, and departmental approvals for 150+ students.",
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
// COMPLETE PROJECT ARCHIVE (EXTRACTED FROM GITHUB)
// ========================================================
export const PROJECT_ARCHIVE: ArchiveProject[] = [
  {
    id: "oceanguard-sih-2026",
    title: "OceanGuard AI (SIH26143)",
    category: "Geospatial Data & Computer Vision",
    archiveCategory: "hackathon",
    year: "2026",
    description: "Marine oil spill attribution prototype matching SAR satellite contours with historical AIS vessel trajectories via Haversine scoring.",
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
    description: "Document retrieval conversational assistant using LangChain, recursive semantic chunking, and FAISS vector embeddings.",
    techStack: ["Python", "LangChain", "FAISS", "LLM APIs"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    highlight: "Research Prototype",
  },
  {
    id: "tcet-specialization",
    title: "TCET Specialization Tracker",
    category: "Enterprise Workflow & Database",
    archiveCategory: "fullstack",
    year: "2026",
    description: "Institutional academic elective and specialization track management system with role-based access for 150+ students.",
    techStack: ["PHP", "MySQL", "JavaScript", "AJAX"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    highlight: "Institutional Portal",
  },
  {
    id: "quickserve-platform",
    title: "QuickServe Local Services Search Engine",
    category: "Full-Stack Web App",
    archiveCategory: "fullstack",
    year: "2025",
    description: "Hyperlocal service discovery marketplace featuring MongoDB geospatial $near radius queries, provider verification, and JWT auth.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    githubUrl: "https://github.com/ashutosh7034/Local-Service-Search-Engine",
  },
  {
    id: "quizai-flutter",
    title: "QuizAI Mobile App",
    category: "Cross-Platform Mobile",
    archiveCategory: "mobile",
    year: "2025",
    description: "Adaptive computer science quiz mobile application with Cloud Firestore real-time synchronization, timers, and offline caching.",
    techStack: ["Flutter", "Dart", "Firebase Firestore", "Provider"],
    githubUrl: "https://github.com/ashutosh7034/QuizAI",
  },
  {
    id: "jobportal-yt",
    title: "Full-Stack Recruitment Portal",
    category: "Full-Stack Systems",
    archiveCategory: "fullstack",
    year: "2025",
    description: "Recruitment portal with applicant tracking workflows, recruiter job postings, resume uploads, and role auth middleware.",
    techStack: ["Node.js", "Express.js", "MongoDB", "React"],
    githubUrl: "https://github.com/ashutosh7034/jobportal-yt",
  },
  {
    id: "healthcare-crm",
    title: "Healthcare Professional (HCP) CRM",
    category: "Backend & Systems",
    archiveCategory: "backend",
    year: "2025",
    description: "Healthcare CRM tracking medical interactions, doctor scheduling, compliance logs, and patient communication pipelines.",
    techStack: ["Node.js", "Express.js", "REST APIs", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/AI-First-Customer-Relationship-Management",
  },
  {
    id: "mahabooks-portal",
    title: "Maharashtra State Books Portal",
    category: "Frontend Web",
    archiveCategory: "fullstack",
    year: "2025",
    description: "Digital textbook repository built to improve curriculum accessibility for Maharashtra State Board students.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/Mahabooks-",
    liveUrl: "https://maharashtrabookpdf.netlify.app",
  },
  {
    id: "oneconnect-superapp",
    title: "OneConnect Super-App Dashboard",
    category: "Enterprise Backend",
    archiveCategory: "backend",
    year: "2025",
    description: "Enterprise Java web application with servlet-based controller pipelines, session management, and modular service tiles.",
    techStack: ["Java", "Java Servlets", "JSP", "MySQL"],
    githubUrl: "https://github.com/ashutosh7034/OneConnect---Web-Application",
  },
  {
    id: "hyperlocal-marketplace",
    title: "Hyperlocal Multi-Vendor Delivery System",
    category: "Full-Stack Systems",
    archiveCategory: "fullstack",
    year: "2025",
    description: "Multi-vendor catalog and ordering system with real-time merchant inventory updates and relational order states.",
    techStack: ["React", "Node.js", "Express.js", "MySQL"],
    githubUrl: "https://github.com/ashutosh7034/Hyperlocal-Delivery-Marketplace",
  },
  {
    id: "zoho-bulk-mailer",
    title: "Zoho Personalized Bulk Email Dispatcher",
    category: "Backend & Automation",
    archiveCategory: "backend",
    year: "2025",
    description: "CLI batch email automation tool utilizing custom SMTP sockets, rate limiting, and template personalization tags.",
    techStack: ["PHP", "SMTP", "CLI Automation"],
    githubUrl: "https://github.com/ashutosh7034/zoho-personalized-bulk-mailer",
  },
  {
    id: "age-gender-detection",
    title: "Deep Learning Age & Gender Detection",
    category: "Applied AI / Computer Vision",
    archiveCategory: "ai",
    year: "2025",
    description: "Computer vision pipeline predicting age group and gender classification from video feeds using OpenCV and CNN models.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Keras"],
    githubUrl: "https://github.com/ashutosh7034/gender-age-detection",
  },
  {
    id: "lms-portal",
    title: "Learning Management System (LMS)",
    category: "Academic & Institutional",
    archiveCategory: "academic",
    year: "2024",
    description: "Role-based course management portal supporting student assignments, grading rubrics, and syllabus tracking.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/ashutosh7034/learning_management_system",
  },
  {
    id: "smart-library-portal",
    title: "Smart Digital Library Portal",
    category: "Academic & Institutional",
    archiveCategory: "academic",
    year: "2024",
    description: "Institutional library book cataloging and automated fine-calculation system with relational database schemas.",
    techStack: ["PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/ashutosh7034/Smart-Digital-Library-Portal",
  },
  {
    id: "tcet-nep-saarthi",
    title: "TCET NEP Saarthi Outreach Portal",
    category: "Academic & Institutional",
    archiveCategory: "academic",
    year: "2026",
    description: "Official student ambassador outreach website for National Education Policy implementation at TCET.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/TCET_Nep_Saarthi_website",
  },
  {
    id: "curfew-epass",
    title: "Curfew E-Pass Management System",
    category: "Full-Stack Systems",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Administrative verification portal managing digital emergency travel permits with document upload verification.",
    techStack: ["PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/Curfew-E-pass-Management-System",
  },
  {
    id: "security-guard-hiring",
    title: "Security Guard Hiring Management System",
    category: "Full-Stack Systems",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Client booking portal for on-demand security personnel recruitment, duty scheduling, and invoicing.",
    techStack: ["PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/Online-Security-Guard-Hiring-System",
  },
  {
    id: "bookmyturf",
    title: "BookMyTurf Slot Booking Engine",
    category: "Frontend & Web",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Interactive sports turf reservation web interface with real-time hourly slot selection and date pickers.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/ashutosh7034/BookMyTurf",
  },
  {
    id: "pasteboard-cpp",
    title: "PasteBoard Clipboard Utility",
    category: "Systems & Utilities",
    archiveCategory: "backend",
    year: "2024",
    description: "Lightweight C++ desktop utility for managing multi-entry clipboard history and fast buffer search.",
    techStack: ["C++", "Systems Programming"],
    githubUrl: "https://github.com/ashutosh7034/PasteBoard",
  },
  {
    id: "ifsc-finder",
    title: "IFSC Code & Bank Branch Finder",
    category: "Web & Utilities",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Banking API integration utility resolving branch addresses, MICR codes, and clearing locations.",
    techStack: ["JavaScript", "REST APIs", "CSS3"],
    githubUrl: "https://github.com/ashutosh7034/IFSC-Code-Finder-Project",
  },
  {
    id: "google-form-automation",
    title: "Google Form Automation Tool",
    category: "Scripting & Automation",
    archiveCategory: "ai",
    year: "2024",
    description: "Python automation script parsing tabular CSV datasets and dispatching programmatic form responses.",
    techStack: ["Python", "Automation", "Selenium"],
    githubUrl: "https://github.com/ashutosh7034/Google-Form-Automation-",
  },
  {
    id: "build-audi-customizer",
    title: "Dynamic Vehicle Visual Customizer",
    category: "Interactive Frontend",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Dynamic DOM-based interactive configuration interface for visual styling and accessory selection.",
    techStack: ["JavaScript", "CSS3", "DOM APIs"],
    githubUrl: "https://github.com/ashutosh7034/Build-Your-Own-Audi",
  },
  {
    id: "ip-assignment-oop",
    title: "IP Assignment OOP Systems Design",
    category: "Academic & Systems",
    archiveCategory: "backend",
    year: "2024",
    description: "Object-oriented software engineering assignment implementing polymorphic models and design patterns in Java.",
    techStack: ["Java", "OOP", "Data Structures"],
    githubUrl: "https://github.com/ashutosh7034/IP_Assignment",
  },
];

// ========================================================
// SKILL TO PROJECT CONNECTOR MAP (INTERACTIVE MAPPING)
// ========================================================
export interface SkillProjectMapping {
  skillName: string;
  category: string;
  projects: {
    title: string;
    description: string;
    roleOrHighlight: string;
    link?: string;
  }[];
}

export const SKILL_PROJECT_MAPPINGS: Record<string, SkillProjectMapping> = {
  Python: {
    skillName: "Python",
    category: "Languages & Applied AI",
    projects: [
      {
        title: "OceanGuard AI (SIH26143 Prototype)",
        description: "Built the AIS historical data ingestion pipeline, geodesic Haversine distance decay matrix, and FastAPI backend.",
        roleOrHighlight: "AIS & Data Engineering",
        link: "#projects",
      },
      {
        title: "RAG Academic Assistant",
        description: "Engineered recursive semantic chunking, vector embedding generation, and FAISS indexing with LangChain.",
        roleOrHighlight: "Applied AI Pipeline",
        link: "#projects",
      },
      {
        title: "Deep Learning Age & Gender Detection",
        description: "Implemented convolutional neural network models and OpenCV image preprocessing pipelines.",
        roleOrHighlight: "Computer Vision",
      },
      {
        title: "Google Form Automation Tool",
        description: "Automated tabular data extraction and submission workflows via Python scripting.",
        roleOrHighlight: "Automation Scripting",
      },
    ],
  },
  LangChain: {
    skillName: "LangChain",
    category: "Applied AI",
    projects: [
      {
        title: "RAG Academic Assistant",
        description: "Constructed retrieval chains, semantic document splitters, and contextual prompt synthesis guardrails.",
        roleOrHighlight: "RAG Architecture",
        link: "#projects",
      },
    ],
  },
  "FAISS Vector DB": {
    skillName: "FAISS Vector DB",
    category: "Applied AI & Vector Search",
    projects: [
      {
        title: "RAG Academic Assistant",
        description: "Indexed dense mathematical embeddings for high-speed similarity search across institutional document archives.",
        roleOrHighlight: "Vector Store Engineering",
        link: "#projects",
      },
    ],
  },
  OpenCV: {
    skillName: "OpenCV",
    category: "Computer Vision",
    projects: [
      {
        title: "OceanGuard AI",
        description: "Applied adaptive thresholding and morphological filtering to isolate satellite SAR oil slick contours.",
        roleOrHighlight: "Satellite Image Processing",
        link: "#projects",
      },
      {
        title: "Age & Gender Detection",
        description: "Performed face detection, bounding box normalization, and video frame inference.",
        roleOrHighlight: "Facial Analysis",
      },
    ],
  },
  "Pandas & NumPy": {
    skillName: "Pandas & NumPy",
    category: "Data Engineering",
    projects: [
      {
        title: "OceanGuard AI",
        description: "Handled multi-ship telemetry data frames (MMSI, lat/long, SOG, COG) and computed vectorized distance matrices.",
        roleOrHighlight: "Telemetry Mathematics",
        link: "#projects",
      },
    ],
  },
  PHP: {
    skillName: "PHP",
    category: "Full-Stack Backend",
    projects: [
      {
        title: "TCET Specialization Tracker",
        description: "Designed core server logic, role-based session auth, and administrative allocation endpoints.",
        roleOrHighlight: "Institutional Core",
        link: "#projects",
      },
      {
        title: "Learning Management System",
        description: "Built course assignment and grading rubrics workflows with MySQL backend.",
        roleOrHighlight: "Academic Portal",
      },
      {
        title: "Zoho Bulk Mailer",
        description: "Engineered CLI batch automation with SMTP socket handlers.",
        roleOrHighlight: "CLI Automation",
      },
    ],
  },
  MySQL: {
    skillName: "MySQL",
    category: "Relational Databases",
    projects: [
      {
        title: "TCET Specialization Tracker",
        description: "Architected relational schema with foreign key constraints tracking 150+ students across tracks.",
        roleOrHighlight: "Relational Modeling",
        link: "#projects",
      },
      {
        title: "Smart Digital Library Portal",
        description: "Designed book cataloging, checkout logs, and automated fine calculation queries.",
        roleOrHighlight: "Relational Storage",
      },
      {
        title: "OneConnect Super-App",
        description: "Managed relational tables for enterprise Java servlet dashboards.",
        roleOrHighlight: "Enterprise DB",
      },
    ],
  },
  "Node.js": {
    skillName: "Node.js",
    category: "Backend Architecture",
    projects: [
      {
        title: "QuickServe Local Services",
        description: "Built Express.js REST APIs with JWT authentication and geospatial querying.",
        roleOrHighlight: "Backend Architecture",
        link: "#projects",
      },
      {
        title: "Job Portal System",
        description: "Implemented recruiter and applicant routing middleware with MongoDB.",
        roleOrHighlight: "RESTful Endpoints",
      },
      {
        title: "Healthcare CRM (HCP Module)",
        description: "Created interaction logging and compliance audit APIs.",
        roleOrHighlight: "CRM Systems",
      },
    ],
  },
  MongoDB: {
    skillName: "MongoDB",
    category: "NoSQL Databases",
    projects: [
      {
        title: "QuickServe Local Services",
        description: "Applied $nearSphere 2dsphere indexing for location radius discovery.",
        roleOrHighlight: "Geospatial Indexing",
        link: "#projects",
      },
      {
        title: "Job Portal System",
        description: "Document schema modeling for user profiles, resumes, and job applications.",
        roleOrHighlight: "Document Modeling",
      },
    ],
  },
  Flutter: {
    skillName: "Flutter",
    category: "Mobile Engineering",
    projects: [
      {
        title: "QuizAI Mobile App",
        description: "Built modular widget trees, Provider state management, and Cloud Firestore synchronization.",
        roleOrHighlight: "Cross-Platform Mobile",
        link: "#projects",
      },
      {
        title: "Creatalysis Mobile Delivery",
        description: "Contributed to production application features and responsive mobile UI.",
        roleOrHighlight: "Internship Delivery",
      },
    ],
  },
  Java: {
    skillName: "Java",
    category: "Core Languages",
    projects: [
      {
        title: "OneConnect Super-App",
        description: "Engineered Java Servlets, session filters, and MVC architecture.",
        roleOrHighlight: "Enterprise Servlets",
      },
      {
        title: "IP Assignment OOP Systems",
        description: "Applied object-oriented design patterns, polymorphic models, and robust error handling.",
        roleOrHighlight: "OOP Architecture",
      },
    ],
  },
  JavaScript: {
    skillName: "JavaScript",
    category: "Web & Systems",
    projects: [
      {
        title: "TCET Specialization Tracker",
        description: "Asynchronous AJAX form submissions and real-time DOM status updates.",
        roleOrHighlight: "AJAX & DOM",
        link: "#projects",
      },
      {
        title: "QuickServe Platform",
        description: "Client-side filtering, map interfaces, and asynchronous data fetching.",
        roleOrHighlight: "Client Engineering",
        link: "#projects",
      },
      {
        title: "Maharashtra State Books Portal",
        description: "Engineered dynamic textbook catalog search and filter interface.",
        roleOrHighlight: "Vanilla JS UI",
      },
    ],
  },
  "Next.js / React": {
    skillName: "Next.js / React",
    category: "Frontend & Full-Stack",
    projects: [
      {
        title: "Personal Portfolio (V2)",
        description: "Engineered this human-first editorial portfolio with App Router, TypeScript, and Tailwind CSS.",
        roleOrHighlight: "Next.js 15 App Router",
        link: "#",
      },
      {
        title: "Hyperlocal Delivery Marketplace",
        description: "Built dynamic multi-vendor marketplace client interfaces with React.",
        roleOrHighlight: "React UI",
      },
    ],
  },
};

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
