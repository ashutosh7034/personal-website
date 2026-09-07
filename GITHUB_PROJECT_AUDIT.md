# GITHUB PROJECT AUDIT REPORT — ASHUTOSH PANDEY (ashutosh7034)

**Audit Date:** September 2026  
**Auditor:** Antigravity AI  
**Scope:** Complete audit of all 49 public GitHub repositories on `https://github.com/ashutosh7034` + local hackathon submissions & presentation artifacts.

---

## 1. Executive Summary

A comprehensive, code-level inspection was performed across all repositories belonging to Ashutosh Pandey. The audit revealed a clear, authentic technical progression:
1. **2023–2024:** Foundational programming, algorithms, OOP, database CRUD, and cross-platform mobile development (Flutter/Dart).
2. **2024–2025:** Full-stack web architectures, REST APIs, geospatial filtering (QuickServe), and internship delivery (Creatalysis).
3. **2025–2026:** Advanced database engineering, Applied AI (RAG pipelines, LangChain, FAISS), institutional software leadership (TCET Specialization Tracker), and maritime geospatial AI (IIT Madras SIH 2026 Hackathon prototype).

---

## 2. SIH / IIT Madras Internal Hackathon Project Deep-Dive

### Project Identification
- **Project Name:** **OceanGuard AI** (SIH Problem Statement `SIH26143`)
- **Official Submission:** *SamadhanLabs — SIH 2026 IIT Madras BS Degree Internal Hackathon*
- **Team Composition:** SamadhanLabs (6 members)
  - Himanshu Pandey (Lead / System Architecture)
  - **Ashutosh Pandey (Member 2 — AIS & Data Engineering / Geospatial Tracking)**
  - Shitanshu Chaurasiya (Frontend / Visualization)
  - Zayan A K (Backend / Infrastructure)
  - Rounak Raj (Geospatial / Drift Modelling)
  - Shakthy K (Remote Sensing / Spill Detection)
- **Status:** Functional prototype with FastAPI backend, OpenCV detection engine, and historical AIS trajectory correlation.

### Technical Analysis
- **Problem Solved:** Satellite-based Synthetic Aperture Radar (SAR) detection can identify oil slicks on ocean surfaces (*WHERE*), but fails to establish vessel accountability (*WHO*). Marine investigators lacked an automated, explainable evidence chain linking slick origin windows with historical vessel trajectories under ocean drift.
- **Ashutosh Pandey's Concrete Contribution (AIS & Data Engineering):**
  - Engineered the AIS historical ingestion pipeline in Python (`backend/app/ais_data.py`) loading multi-ship telemetry (`MMSI`, `LAT`, `LON`, `SOG`, `COG`, `Heading`, `BaseDateTime`).
  - Implemented trajectory temporal grouping algorithms reconstructing waypoint paths for all candidate vessels.
  - Implemented the Haversine geodesic distance matrix and risk-decay scoring algorithm (`backend/app/vessel_matching.py`) classifying candidate vessels into `HIGH`, `MEDIUM`, and `LOW` risk tiers based on proximity to the slick's estimated origin centroid.
- **Tech Stack:** Python 3.11, FastAPI, OpenCV (morphological thresholding & contour extraction), Pandas, NumPy, Haversine Geodesics, REST APIs.
- **Limitations (Documented Authentically):** Relies on synthetic/sample AIS datasets for prototype demonstration; drift hindcasting simplified into radial decay zones rather than full hydrodynamic ocean current differential equations.
- **Outcome:** Successfully cleared IIT Madras BS Degree Programme Internal Hackathon review for SIH 2026 selection.

---

## 3. Complete Repository Categorization (All 49 Repositories)

### CATEGORY A: Flagship Projects (Featured on Portfolio)
1. **OceanGuard AI (SIH26143)** — Oil Spill Detection & Maritime Vessel Attribution [IIT Madras SIH 2026]
   - *Stack:* Python, FastAPI, OpenCV, Pandas, AIS Data Engineering, Geodesics
2. **RAG-Based AI Academic Assistant (`Academic_chat_bot`)** — Institutional Retrieval Pipeline
   - *Stack:* Python, LangChain, FAISS, LLM Integration, Semantic Search
3. **TCET Specialization Tracker (`specialization-tracker`)** — Full-Stack Academic Workflow System
   - *Stack:* PHP, MySQL, JavaScript, AJAX, HTML5/CSS3
4. **QuickServe (`Local-Service-Search-Engine`)** — Hyperlocal Service Discovery Platform
   - *Stack:* Node.js, Express.js, MongoDB, JavaScript, REST APIs
5. **QuizAI (`QuizAI`)** — Cross-Platform Adaptive Learning Mobile Application
   - *Stack:* Flutter, Dart, Firebase, AI Integration
6. **AI-First Healthcare CRM (`AI-First-Customer-Relationship-Management`)** — HCP Workflow System
   - *Stack:* JavaScript, Node.js, RESTful Architecture

---

### CATEGORY B: Good Supporting Projects (Project Archive)
7. **Maharashtra State Books Portal (`Mahabooks-` / `maharashtrabookpdf.netlify.app`)** — Vanilla JS textbook accessibility
8. **OneConnect Super-App (`OneConnect---Web-Application`)** — Java Servlet web dashboard
9. **Hyperlocal Multi-Vendor Delivery Marketplace (`Hyperlocal-Delivery-Marketplace`)** — React, Express, MySQL
10. **Zoho Personalized Bulk Email Dispatcher (`zoho-personalized-bulk-mailer`)** — PHP CLI, SMTP RPA Automation

---

### CATEGORY C: Academic & Institutional Projects (Project Archive)
11. **Learning Management System (`learning_management_system`)** — PHP, MySQL role-based portal
12. **Smart Digital Library Portal (`Smart-Digital-Library-Portal`)** — PHP, MySQL library management
13. **TCET NEP Saarthi Website (`TCET_Nep_Saarthi_website`)** — Academic reform outreach portal
14. **IP Assignment (`IP_Assignment`)** — Java OOP systems design

---

### CATEGORY D: Learning & Practice Projects (Project Archive)
15. **Gender & Age Estimation (`gender-age-detection`)** — Python, OpenCV deep neural network
16. **Curfew E-Pass Management System (`Curfew-E-pass-Management-System`)** — PHP/JS request workflow
17. **Online Security Guard Hiring System (`Online-Security-Guard-Hiring-System`)** — PHP/JS booking portal
18. **BookMyTurf (`BookMyTurf`)** — JS turf slot booking system
19. **PasteBoard (`PasteBoard`)** — C++ clipboard utility
20. **Tourism Management System (`Tourism-Management-System`)** — Web UI
21. **IFSC Code Finder (`IFSC-Code-Finder-Project`)** — API lookup helper
22. **Age Calculator (`Age-Calculator`)** — Accessible vanilla JS web app

---

### CATEGORY E: Prototypes & Experimental Code
23. **Google Form Automation (`Google-Form-Automation-`)** — Python desktop helper
24. **Scribe (`scribe`)** — Python text processing
25. **Build-Your-Own-Audi (`Build-Your-Own-Audi`)** — Dynamic JS customizer
26. **Fit Gym (`Fit_Gym`)** — Responsive CSS interface

---

### CATEGORY F: Old, Incomplete, or Redundant Repositories (Excluded from Prominence)
27. `college_academic_support_chatgpt` (Merged into `Academic_chat_bot`)
28. `quizbuddy` (Empty repository, superseded by `QuizAI`)
29. `BookMyDoctor` (Empty repository)
30. `teamproject-` (Incomplete scratch repository)
31. `test-repo`, `test` (Testing scratch repositories)
32. `Portfolio-Website`, `personal-website` (Previous iterations of portfolio)
33. `Maid-Hiring-Management-System` (Superseded by QuickServe)

---

### CATEGORY G: Collaborative & Team Repositories
34. `amitanandanurag/tcet_specialization_tracker` (Team collaboration remote)
35. `SamadhanLabs / oil-spill-attribution` (SIH Hackathon team repository)

---

### CATEGORY H: Foundational Learning Exercises (Excluded from Public Portfolio)
36–49. Early 2023 one-file learning scripts (`create_array-in-javascript`, `return_sum`, `multiplication_table`, `php-greaterno`, `react.js-application`, `react.js`, `database-todo`, `databasesales`, `calculatetheage`, `python-even-`, `PRODIGY_WD_01` to `04`).

---

## 4. Portfolio Architecture Updates Planned

1. **Flagship Projects Expansion:**
   - Add **OceanGuard AI (SIH 2026 IIT Madras Hackathon)** as Flagship Case Study #2 with dedicated satellite $\rightarrow$ AIS trajectory $\rightarrow$ Haversine spatial correlation visual architecture pipeline.
2. **Project Deep-Dive Modal:**
   - Visitors can click any flagship project to open an in-depth case study modal covering:
     - Problem Statement
     - Solution & Innovation
     - Ashutosh's Specific Technical Role
     - System Architecture Pipeline
     - Technical Decisions & Challenges
     - Verified Outcome & Code Link
3. **Comprehensive Project Archive Section & Filter:**
   - Filterable drawer/grid allowing visitors to explore all Category A, B, C, and D projects across: `All`, `Applied AI`, `Full Stack`, `Backend / Databases`, `Mobile`, `Hackathons`, and `Academic`.
4. **Interactive Skill Ecosystem Update:**
   - Connect the newly audited projects (`OceanGuard AI`, `AI-First CRM`, `Zoho Mailer`, `Hyperlocal Marketplace`) to their respective skill tags.
