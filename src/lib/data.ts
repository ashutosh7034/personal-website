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
  summary:
    "MCA candidate and full-stack software developer with hands-on experience building web, mobile, backend, and database-driven systems. Actively developing applied AI pipelines including LLM integrations, RAG architectures, LangChain, FAISS, and maritime geospatial data pipelines.",
  location: "Mumbai, India",
  email: "ashutosh3276s16@gmail.com",
  phone: "+91 9702420582",
  github: "https://github.com/ashutosh7034",
  linkedin: "https://www.linkedin.com/in/ashutoshpandey34/",
  portfolioUrl: "https://ashutoshpandey34.netlify.app",
  resumePdf: "/Ashutosh_Pandey_Resume.pdf",
  availableForWork: true,
  statusMessage: "Available for select software engineering roles & applied AI work",
};

export const PROJECTS: Project[] = [
  {
    id: "rag-academic-assistant",
    number: "01",
    title: "RAG-Based AI Academic Assistant",
    shortTitle: "RAG Academic Assistant",
    category: "Applied AI & Information Retrieval",
    archiveCategory: "ai",
    year: "2026",
    duration: "Jan 2026 – Mar 2026",
    description:
      "An end-to-end Retrieval-Augmented Generation (RAG) pipeline engineered to resolve student academic queries with high contextual accuracy across institutional document archives.",
    problem:
      "Traditional keyword search over college regulations, syllabi, and administrative notices produced fragmented results. Students lacked an accurate conversational interface capable of retrieving relevant context across multi-document repositories.",
    built:
      "Engineered an automated document ingestion and semantic chunking pipeline in Python using LangChain, generating dense vector embeddings stored in a high-speed FAISS vector store. Designed an augmented prompt synthesis workflow connecting to an LLM to deliver grounded, citation-backed answers.",
    technicalApproach:
      "Evaluated semantic chunk size and overlap ratios against benchmark query sets. Implemented similarity search algorithms with threshold scoring to eliminate hallucinated context prior to prompt augmentation.",
    myContribution:
      "Designed and implemented the complete LangChain ingestion pipeline, FAISS vector indexing, prompt engineering templates, and semantic retrieval evaluation benchmark.",
    challenges:
      "Balancing retrieval latency against chunk granularity across heterogeneous PDF tables and unstructured syllabus documents.",
    outcome:
      "Achieved significant answer relevance improvement over baseline keyword search in internal evaluation tests; established foundation for published AI in Education research.",
    pipelineSteps: [
      {
        step: "01",
        label: "Document Processing",
        description: "Parse PDF/Text institutional archives & apply recursive semantic chunking with metadata tagging.",
      },
      {
        step: "02",
        label: "Vector Embedding",
        description: "Generate dense mathematical embeddings and index into a high-dimensional FAISS vector database.",
      },
      {
        step: "03",
        label: "Semantic Retrieval",
        description: "Query similarity search retrieves top-k relevant document fragments with distance scoring.",
      },
      {
        step: "04",
        label: "Context Assembly",
        description: "Synthesize structured prompts with context injection, system guards, and citation parameters.",
      },
      {
        step: "05",
        label: "LLM Generation",
        description: "Stream coherent, factual, and verified answers directly to the user interface.",
      },
    ],
    techStack: ["Python", "LangChain", "FAISS", "LLM Integration", "Semantic Search", "Prompt Engineering"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    featured: true,
  },
  {
    id: "oceanguard-sih-attribution",
    number: "02",
    title: "OceanGuard AI — Maritime Oil Spill Attribution",
    shortTitle: "OceanGuard AI (SIH26143)",
    category: "Geospatial Data Engineering & Computer Vision",
    archiveCategory: "hackathon",
    year: "2026",
    duration: "Aug 2026 – Sep 2026",
    hackathonBadge: "IIT Madras SIH 2026 Prototype",
    description:
      "A geospatial AI & telemetry correlation system developed for Smart India Hackathon (SIH26143) to backtrack satellite-detected marine oil slicks and attribute responsibility to candidate vessels.",
    problem:
      "Satellite Synthetic Aperture Radar (SAR) imagery detects WHERE an oil slick is located, but cannot identify WHO is responsible. Maritime authorities lacked an automated system to connect slick origin time windows with historical vessel trajectories under ocean currents.",
    built:
      "Engineered an automated pipeline combining OpenCV dark-region segmentation on satellite imagery with an AIS (Automatic Identification System) spatio-temporal tracking engine in Python and FastAPI. Reconstructed multi-ship trajectory paths and computed geodesic distance decay risk scores.",
    technicalApproach:
      "Built historical AIS data ingestion handling MMSI, coordinates, speed (SOG), heading, and timestamps with Pandas. Implemented Haversine geodesic matrix math to score vessel proximity and classify candidate ships into HIGH, MEDIUM, and LOW risk tiers.",
    myContribution:
      "Led the AIS Data Engineering and Backend Geospatial Correlation modules: developed `ais_data.py` trajectory grouping, `vessel_matching.py` Haversine scoring engine, and FastAPI REST endpoints.",
    challenges:
      "Correlating multi-vessel telemetry across discontinuous AIS data timestamps and handling vessel position interpolation near slick coordinates.",
    outcome:
      "Successfully developed working prototype for Team SamadhanLabs; selected in the IIT Madras BS Degree Programme Internal Hackathon evaluation for SIH 2026.",
    pipelineSteps: [
      {
        step: "01",
        label: "Satellite Slick Segmentation",
        description: "Apply Gaussian blur, adaptive thresholding & morphological filtering on SAR imagery to isolate oil slick contours.",
      },
      {
        step: "02",
        label: "Origin & Metadata Extraction",
        description: "Extract centroid coordinates, acquisition timestamp, sensor specs, and slick area metrics.",
      },
      {
        step: "03",
        label: "Historical AIS Ingestion",
        description: "Ingest and structure multi-ship telemetry (MMSI, SOG, COG, Heading, Lat/Lon) across the origin time window.",
      },
      {
        step: "04",
        label: "Geodesic Trajectory Matching",
        description: "Execute Haversine distance matrix algorithms to score vessel proximity against the spill origin coordinates.",
      },
      {
        step: "05",
        label: "Evidence-Based Vessel Ranking",
        description: "Output ranked candidate vessels with categorized risk tiers (HIGH/MEDIUM/LOW) and trajectory logs.",
      },
    ],
    techStack: ["Python", "FastAPI", "OpenCV", "Pandas", "NumPy", "AIS Data Engineering", "Geodesic Math"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    featured: true,
  },
  {
    id: "tcet-specialization-tracker",
    number: "03",
    title: "TCET Specialization Tracker",
    shortTitle: "Specialization Tracker",
    category: "Full-Stack Enterprise Systems",
    archiveCategory: "fullstack",
    year: "2026",
    duration: "Apr 2026 – Jun 2026",
    description:
      "A database-driven institutional workflow system managing student academic tracks, specialized course allocations, and departmental records institution-wide.",
    problem:
      "Department administrators relied on fragmented spreadsheets and manual cross-checks to track student specializations, resulting in data synchronization bottlenecks and scheduling conflicts.",
    built:
      "Led a development team to build a centralized, role-based web application with dynamic AJAX frontends and an optimized relational MySQL schema. Features real-time validation, multi-tier permissions, and automated record generation.",
    technicalApproach:
      "Designed normalized relational tables with indexing on student IDs and track codes. Utilized asynchronous AJAX queries to deliver real-time validation without full-page reloads.",
    myContribution:
      "Team lead and core backend developer: architected the relational MySQL schema, built backend PHP controllers, and integrated asynchronous AJAX frontend modules.",
    outcome:
      "Delivered a working institutional management platform adopted for tracking student specialization allocations across departments.",
    techStack: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML5/CSS3", "Database Architecture"],
    githubUrl: "https://github.com/ashutosh7034/specialization-tracker",
    featured: true,
  },
  {
    id: "quickserve-local-search",
    number: "04",
    title: "QuickServe — Hyperlocal Service Discovery",
    shortTitle: "QuickServe Engine",
    category: "Backend & Web Platforms",
    archiveCategory: "backend",
    year: "2025",
    duration: "Feb 2025 – May 2025",
    description:
      "A full-stack hyperlocal platform connecting residents with verified local service professionals including electricians, plumbers, mechanics, and tutors.",
    problem:
      "Finding verified local tradespeople quickly in specific neighborhood zones suffered from lack of price transparency, disorganized directories, and poor mobile accessibility.",
    built:
      "Architected RESTful API endpoints using Node.js and Express.js with MongoDB for scalable multi-category service provider listings, geospatial filtering, and responsive search UI.",
    technicalApproach:
      "Structured schema models with category tags and geo-coordinates. Implemented server-side request validation, clean routing controllers, and responsive CSS UI.",
    myContribution:
      "Designed the entire REST API suite in Express.js, configured MongoDB collections and indexing, and developed the client-side location search interface.",
    outcome:
      "Created a fast, responsive hyperlocal platform demonstrating end-to-end full-stack JavaScript architecture.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Full-Stack"],
    githubUrl: "https://github.com/ashutosh7034/Local-Service-Search-Engine",
    featured: true,
  },
  {
    id: "quizai-app",
    number: "05",
    title: "QuizAI — Adaptive Learning Platform",
    shortTitle: "QuizAI Mobile App",
    category: "Mobile & Adaptive AI",
    archiveCategory: "mobile",
    year: "2024",
    duration: "Sep 2024 – Nov 2024",
    description:
      "A cross-platform mobile application with AI-assisted dynamic quiz generation, adaptive difficulty scaling, real-time leaderboards, and detailed user analytics.",
    problem:
      "Static quiz applications offer repetitive question banks without personalizing difficulty to the learner's evolving skill level or tracking granular topic strengths.",
    built:
      "Built a Flutter/Dart application with Firebase real-time database sync, dynamic category generators, adaptive difficulty logic, and interactive performance dashboards.",
    technicalApproach:
      "Leveraged Flutter's reactive widget tree for fluid 60fps animations. Implemented Firebase auth, Firestore real-time listeners for live leaderboards, and structured error boundaries.",
    myContribution:
      "Sole developer: developed full Flutter UI, adaptive algorithmic scoring, Firebase authentication, and cloud data synchronization.",
    outcome:
      "Published open-source Flutter project demonstrating cross-platform mobile development and state management.",
    techStack: ["Flutter", "Dart", "Firebase", "AI Integration", "Cross-Platform Mobile"],
    githubUrl: "https://github.com/ashutosh7034/QuizAI",
    featured: true,
  },
  {
    id: "ai-first-crm",
    number: "06",
    title: "AI-First Healthcare CRM (HCP Module)",
    shortTitle: "AI-First CRM",
    category: "Full-Stack Intelligent Workflows",
    archiveCategory: "fullstack",
    year: "2026",
    duration: "Jul 2026",
    description:
      "An enterprise-grade, AI-first customer relationship management module built for Healthcare Professionals (HCPs) featuring dynamic prioritization and contextual engagement tracking.",
    problem:
      "Healthcare sales and medical liaisons lack streamlined, intelligent systems to organize high-volume stakeholder interactions and prioritize critical follow-ups.",
    built:
      "Developed a modern web application module with intelligent contact routing, structured interaction logs, responsive client interfaces, and REST API communication.",
    technicalApproach:
      "Engineered modular JavaScript architecture with clear separation between business logic, data models, and presentation layers.",
    techStack: ["JavaScript", "Node.js", "REST APIs", "Modern Web Architecture"],
    githubUrl: "https://github.com/ashutosh7034/AI-First-Customer-Relationship-Management",
    featured: true,
  },
];

export const PROJECT_ARCHIVE: ArchiveProject[] = [
  {
    id: "oceanguard-ai",
    title: "OceanGuard AI — Oil Spill Attribution",
    category: "Maritime AI & Geospatial Tracking",
    archiveCategory: "hackathon",
    year: "2026",
    description: "SIH 2026 IIT Madras internal hackathon prototype correlating satellite SAR slick segmentation with historical AIS vessel trajectories.",
    techStack: ["Python", "FastAPI", "OpenCV", "Pandas", "AIS Data", "Geodesics"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    highlight: "SIH 2026 IITM Selection",
  },
  {
    id: "rag-academic-bot",
    title: "RAG-Based AI Academic Assistant",
    category: "Applied AI / Information Retrieval",
    archiveCategory: "ai",
    year: "2026",
    description: "End-to-end RAG pipeline using LangChain, FAISS vector embeddings, and LLM augmentation for institutional knowledge query resolution.",
    techStack: ["Python", "LangChain", "FAISS", "LLM", "Prompt Engineering"],
    githubUrl: "https://github.com/ashutosh7034/Academic_chat_bot",
    highlight: "Research Published",
  },
  {
    id: "tcet-tracker",
    title: "TCET Specialization Tracker",
    category: "Full-Stack Enterprise Systems",
    archiveCategory: "fullstack",
    year: "2026",
    description: "Database-driven institutional tracking system managing student course specializations and academic records with AJAX.",
    techStack: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML/CSS"],
    githubUrl: "https://github.com/ashutosh7034/specialization-tracker",
    highlight: "Institutional Production",
  },
  {
    id: "ai-crm",
    title: "AI-First Healthcare CRM (HCP Module)",
    category: "Enterprise Web Platforms",
    archiveCategory: "fullstack",
    year: "2026",
    description: "Enterprise-grade CRM module for Healthcare Professionals with interaction tracking and intelligent workflow prioritization.",
    techStack: ["JavaScript", "Node.js", "REST APIs", "Modular Architecture"],
    githubUrl: "https://github.com/ashutosh7034/AI-First-Customer-Relationship-Management",
  },
  {
    id: "zoho-mailer",
    title: "Zoho Personalized Bulk Mail Dispatcher",
    category: "Automation & CLI Tools",
    archiveCategory: "backend",
    year: "2026",
    description: "RPA-style CLI bulk email automation engine with personalized templating, rate limiting, and secure Zoho SMTP integration.",
    techStack: ["PHP", "CLI", "SMTP", "RPA Automation"],
    githubUrl: "https://github.com/ashutosh7034/zoho-personalized-bulk-mailer",
  },
  {
    id: "lms-portal",
    title: "Learning Management System (LMS)",
    category: "Academic Web Systems",
    archiveCategory: "academic",
    year: "2026",
    description: "Multi-tier LMS with role-based access control for Students, Teachers, Admins, and Super Admins with course progress tracking.",
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/learning_management_system",
  },
  {
    id: "quickserve",
    title: "QuickServe (Local Service Search Engine)",
    category: "Hyperlocal Backend Platforms",
    archiveCategory: "backend",
    year: "2025",
    description: "Hyperlocal service discovery platform connecting users with nearby electricians, plumbers, and mechanics with location querying.",
    techStack: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/ashutosh7034/Local-Service-Search-Engine",
  },
  {
    id: "hyperlocal-marketplace",
    title: "HyperLocal Multi-Vendor Marketplace",
    category: "Full-Stack E-Commerce",
    archiveCategory: "fullstack",
    year: "2026",
    description: "Full-stack multi-vendor hyperlocal marketplace for local merchants, catalog management, and order routing.",
    techStack: ["React", "Node.js", "Express", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/ashutosh7034/Hyperlocal-Delivery-Marketplace",
  },
  {
    id: "oneconnect",
    title: "OneConnect Super-App Web Platform",
    category: "Web Platforms",
    archiveCategory: "fullstack",
    year: "2026",
    description: "Java Servlet based super-app portal providing a unified dashboard for service discovery, bookmarking, and tools.",
    techStack: ["Java Servlets", "JavaScript", "HTML5/CSS3"],
    githubUrl: "https://github.com/ashutosh7034/OneConnect---Web-Application",
  },
  {
    id: "quizai",
    title: "QuizAI — Adaptive Learning Platform",
    category: "Cross-Platform Mobile Apps",
    archiveCategory: "mobile",
    year: "2024",
    description: "Cross-platform Flutter app with dynamic quiz generation, adaptive difficulty, leaderboards, and performance dashboards.",
    techStack: ["Flutter", "Dart", "Firebase", "Realtime DB"],
    githubUrl: "https://github.com/ashutosh7034/QuizAI",
  },
  {
    id: "smart-library",
    title: "Smart Digital Library Portal",
    category: "Database Systems",
    archiveCategory: "academic",
    year: "2025",
    description: "Database-driven library management portal with catalog search, borrowing tracking, and member administration.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/ashutosh7034/Smart-Digital-Library-Portal",
  },
  {
    id: "mahabooks",
    title: "Maharashtra State Books Accessibility Portal",
    category: "Educational Web Platform",
    archiveCategory: "academic",
    year: "2024",
    description: "Lightweight, zero-dependency digital textbook portal facilitating fast textbook access for state curriculum students.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Web Performance"],
    liveUrl: "https://maharashtrabookpdf.netlify.app",
  },
  {
    id: "gender-age",
    title: "Deep Learning Age & Gender Detection",
    category: "Computer Vision & AI",
    archiveCategory: "ai",
    year: "2025",
    description: "Deep neural network computer vision pipeline in Python and OpenCV for real-time facial age and gender classification.",
    techStack: ["Python", "OpenCV", "Deep Learning", "Caffe Models"],
    githubUrl: "https://github.com/ashutosh7034/gender-age-detection",
  },
  {
    id: "nep-saarthi-portal",
    title: "TCET NEP Saarthi Student Initiative Portal",
    category: "Institutional Web Platform",
    archiveCategory: "academic",
    year: "2026",
    description: "Official campus outreach website for National Education Policy (NEP 2020) student ambassador initiative.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/ashutosh7034/TCET_Nep_Saarthi_website",
  },
  {
    id: "google-form-assistant",
    title: "Google Form Automation Desktop Helper",
    category: "Desktop Utilities",
    archiveCategory: "backend",
    year: "2026",
    description: "Windows desktop assistant built in Python for structured workflow navigation and desktop automation.",
    techStack: ["Python", "Tkinter", "Automation"],
    githubUrl: "https://github.com/ashutosh7034/Google-Form-Automation-",
  },
  {
    id: "curfew-epass",
    title: "Curfew E-Pass Verification Portal",
    category: "Management Systems",
    archiveCategory: "backend",
    year: "2024",
    description: "Web application for emergency travel pass application, approval tracking, and verification workflows.",
    techStack: ["PHP", "JavaScript", "MySQL", "HTML/CSS"],
    githubUrl: "https://github.com/ashutosh7034/Curfew-E-pass-Management-System",
  },
  {
    id: "bookmyturf",
    title: "BookMyTurf Sports Booking System",
    category: "Interactive Web Systems",
    archiveCategory: "fullstack",
    year: "2024",
    description: "Sports turf slot reservation platform with interactive time grid, pricing calculations, and confirmation.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/ashutosh7034/BookMyTurf",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    description: "Core languages used for systems development, scripting, mobile, and backend services.",
    skills: [
      { name: "Python", badge: "Applied AI", highlightProjects: ["rag-academic-assistant", "oceanguard-sih-attribution"] },
      { name: "Java", badge: "Core", highlightProjects: ["tcet-specialization-tracker"] },
      { name: "JavaScript", badge: "Full-Stack", highlightProjects: ["quickserve-local-search", "ai-first-crm", "tcet-specialization-tracker"] },
      { name: "Dart", badge: "Mobile", highlightProjects: ["quizai-app"] },
      { name: "PHP", badge: "Backend", highlightProjects: ["tcet-specialization-tracker", "zoho-personalized-bulk-mailer"] },
      { name: "C", badge: "Fundamentals" },
      { name: "SQL", badge: "Databases", highlightProjects: ["tcet-specialization-tracker"] },
    ],
  },
  {
    title: "Frameworks & Backend Architecture",
    icon: "layers",
    description: "Server runtimes, application frameworks, and API development technologies.",
    skills: [
      { name: "FastAPI", badge: "High-Speed", highlightProjects: ["oceanguard-sih-attribution"] },
      { name: "Node.js", highlightProjects: ["quickserve-local-search", "ai-first-crm"] },
      { name: "Express.js", highlightProjects: ["quickserve-local-search"] },
      { name: "Flask", highlightProjects: ["rag-academic-assistant"] },
      { name: "LangChain", badge: "AI Framework", highlightProjects: ["rag-academic-assistant"] },
      { name: "Flutter", badge: "Cross-Platform", highlightProjects: ["quizai-app"] },
      { name: "RESTful APIs", highlightProjects: ["quickserve-local-search", "oceanguard-sih-attribution", "ai-first-crm"] },
    ],
  },
  {
    title: "Applied AI, Vision & Data Engineering",
    icon: "cpu",
    description: "Vector search, prompt engineering, RAG pipelines, AIS telemetry, and OpenCV.",
    skills: [
      { name: "RAG Architecture", badge: "Specialty", highlightProjects: ["rag-academic-assistant"] },
      { name: "FAISS Vector Store", badge: "Retrieval", highlightProjects: ["rag-academic-assistant"] },
      { name: "AIS Data Engineering", badge: "Geospatial", highlightProjects: ["oceanguard-sih-attribution"] },
      { name: "OpenCV", badge: "Vision", highlightProjects: ["oceanguard-sih-attribution"] },
      { name: "Pandas & NumPy", highlightProjects: ["oceanguard-sih-attribution"] },
      { name: "Prompt Engineering", highlightProjects: ["rag-academic-assistant", "quizai-app"] },
      { name: "Google Gemini AI", badge: "Ambassador" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: "database",
    description: "Relational, NoSQL, and vector storage engines.",
    skills: [
      { name: "MySQL", badge: "Relational", highlightProjects: ["tcet-specialization-tracker"] },
      { name: "MongoDB", badge: "NoSQL", highlightProjects: ["quickserve-local-search"] },
      { name: "SQLite", badge: "Embedded", highlightProjects: ["quizai-app"] },
      { name: "FAISS", badge: "Vector DB", highlightProjects: ["rag-academic-assistant"] },
      { name: "Firebase", badge: "Real-time", highlightProjects: ["quizai-app"] },
    ],
  },
  {
    title: "Engineering Tools & Environments",
    icon: "terminal",
    description: "Version control, IDEs, debugging workflows, and cloud notebooks.",
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Android Studio" },
      { name: "IntelliJ IDEA" },
      { name: "Google Colab" },
      { name: "SDLC & Agile" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Android / Web Application Developer",
    company: "Creatalysis",
    location: "Remote",
    period: "Dec 2024 – Jul 2025",
    type: "Internship / Engagement (8 Mos)",
    description:
      "Collaborated in a distributed engineering team across the full software development lifecycle (SDLC) for both Android and web applications.",
    highlights: [
      "Engineered, tested, and maintained feature modules from requirements gathering to staging deployment.",
      "Participated actively in Agile sprints, structured peer code reviews, and root-cause debugging cycles.",
      "Maintained version control workflows and release tracking using Git/GitHub.",
    ],
    skills: ["Android Dev", "Web Dev", "Git", "Agile Sprints", "Code Reviews", "Debugging"],
  },
  {
    role: "Software Development Intern",
    company: "Prodigy InfoTech",
    location: "Remote",
    period: "Jun 2024 – Jul 2024",
    type: "Internship",
    description:
      "Completed hands-on software development tasks and programming assignments under engineering mentorship.",
    highlights: [
      "Built clean, well-documented code solutions adhering to core software engineering best practices.",
      "Enhanced problem-solving speed through structured debugging and collaborative code feedback sessions.",
    ],
    skills: ["Software Engineering", "Algorithms", "Debugging", "Team Collaboration"],
  },
  {
    role: "Campus Ambassador",
    company: "Google Gemini AI Program",
    location: "Mumbai, India",
    period: "Mar 2026 – Present",
    type: "Leadership & Community",
    description:
      "Selected as Google Student Ambassador to champion practical AI literacy and adoption of Google Gemini AI tools across campus.",
    highlights: [
      "Conducted on-campus interactive workshops and demos guiding students through prompt engineering and real-world AI applications.",
      "Coordinated student engagement in structured AI trials and gathered user feedback for program coordinators.",
    ],
    skills: ["Google Gemini AI", "Prompt Engineering", "Technical Workshops", "Outreach"],
  },
  {
    role: "Student Ambassador, NEP Saarthi",
    company: "TCET / NEP 2020 Reforms Initiative",
    location: "Mumbai, India",
    period: "Jan 2026 – Present",
    type: "Institutional Leadership",
    description:
      "Appointed under the National Education Policy (NEP 2020) initiative to lead student engagement regarding academic reforms and multidisciplinary frameworks.",
    highlights: [
      "Organized orientation sessions and facilitated cross-departmental communication between faculty and students.",
      "Represented student perspectives during curriculum development and academic tracking reviews.",
    ],
    skills: ["Stakeholder Management", "Academic Operations", "Public Speaking", "Coordination"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Thakur College of Engineering & Technology (TCET)",
    location: "Mumbai, India",
    period: "Sep 2025 – Jun 2027",
    score: "9.14",
    scoreType: "CGPA",
    description: "Postgraduate studies focused on Advanced Software Engineering, Distributed Systems, Web Architectures, and Applied Machine Learning.",
    focusAreas: ["Data Structures & Algorithms", "DBMS & SQL", "Cloud & Web Architectures", "Machine Learning"],
  },
  {
    degree: "BS in Data Science & Applications",
    institution: "Indian Institute of Technology, Madras (IITM)",
    location: "Remote",
    period: "Jan 2026 – May 2029",
    score: "7.67",
    scoreType: "CGPA",
    description: "Rigorous mathematical foundation and application-oriented curriculum covering statistical modeling, data structures, and big data systems.",
    focusAreas: ["Linear Algebra & Statistics", "Data Science Algorithms", "Python Programming", "Big Data Analytics"],
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Mumbai (Thakur Ramnarayan College)",
    location: "Mumbai, India",
    period: "Jul 2022 – Apr 2025",
    score: "9.09",
    scoreType: "CGPA",
    description: "Graduated with top academic standing. Served as Placement Cell Volunteer coordinating recruitment drives and student onboarding.",
    focusAreas: ["Object-Oriented Programming", "Operating Systems", "Database Systems", "Software Engineering"],
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "The Role of Artificial Intelligence and Automation in Transforming Higher Education: An Interdisciplinary Perspective",
    year: "2026",
    authors: "Ashutosh Pandey et al.",
    venue: "Peer-Reviewed Academic Publication",
    summary:
      "Investigates the integration of intelligent tutoring systems, automated evaluation pipelines, and generative AI within tertiary education ecosystems, analyzing cognitive impact and governance frameworks.",
    tags: ["AI in Education", "Automation", "Higher Education Reforms", "Pedagogical Systems"],
  },
  {
    title: "Artificial Intelligence in Education — Reshaping Learning in the Digital Age",
    year: "2026",
    authors: "Ashutosh Pandey et al.",
    venue: "Academic Research Conference Paper",
    summary:
      "Explores adaptive learning architectures, real-time learner diagnostics, and the pedagogical role of retrieval-augmented educational chatbots in modern digital learning environments.",
    tags: ["Adaptive Learning", "RAG Systems", "AI Pedagogy", "Educational Technology"],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Smart India Hackathon (SIH 2026)",
    organization: "IIT Madras BS Degree Internal Hackathon",
    year: "2026",
    category: "hackathon",
    badgeText: "SIH 2026 Selected Prototype",
    details: "Co-developed OceanGuard AI for maritime oil spill attribution (SIH26143), leading AIS data engineering and trajectory spatial correlation.",
  },
  {
    title: "Mumbai Hacks Hackathon",
    organization: "Mumbai Hacks",
    year: "2026",
    category: "hackathon",
    badgeText: "Finalist",
    details: "Ranked among top finalist teams for developing an impactful real-world software prototype under tight 24-hour sprint conditions.",
  },
  {
    title: "IIT Bombay Hackathon",
    organization: "IIT Bombay",
    year: "2025",
    category: "hackathon",
    badgeText: "Finalist",
    details: "Selected as finalist in competitive collegiate software development challenge at IIT Bombay.",
  },
  {
    title: "MULTICON-W 2026 International Conference",
    organization: "TCET / MULTICON-W",
    year: "2026",
    category: "academic",
    badgeText: "Best Paper Award",
    details: "Awarded Best Paper for outstanding research methodology and domain contribution in AI in Education.",
  },
  {
    title: "20th Aavishkar Research Convention",
    organization: "University of Mumbai",
    year: "2025/2026",
    category: "recognition",
    badgeText: "Final Round Selection",
    details: "Selected for the final competitive round of the university-wide research convention evaluating student technical innovations.",
  },
  {
    title: "BUILD BATTLE Coding Event 2026",
    organization: "Engineering Coding Contest",
    year: "2026",
    category: "competition",
    badgeText: "2nd Runner-up",
    details: "Secured 2nd Runner-up place in rapid technical problem solving and algorithmic implementation.",
  },
  {
    title: "MCA CET Examination",
    organization: "State Common Entrance Test Cell",
    year: "2025",
    category: "academic",
    badgeText: "97.80 Percentile",
    details: "Achieved top 2.2% rank statewide in competitive MCA entrance examination.",
  },
];

export const CERTIFICATIONS = [
  { name: "Data Structures and Algorithms using Java", issuer: "Infosys Springboard" },
  { name: "Programming using Java", issuer: "Infosys Springboard" },
  { name: "Machine Learning with AI using Python", issuer: "Microsoft" },
  { name: "Introduction to Big Data", issuer: "SWAYAM / NPTEL" },
  { name: "AI Tools Proficiency", issuer: "Freedom With AI" },
  { name: "Java Programming Fundamentals", issuer: "Technical Certification" },
  { name: "Introduction to Database Management Systems (DBMS)", issuer: "Academic Certification" },
  { name: "Google Gemini AI Program Training", issuer: "Google Student Ambassador Program" },
];
