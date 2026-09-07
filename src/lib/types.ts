export interface PipelineStep {
  step: string;
  label: string;
  description: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle?: string;
  subtitle?: string;
  category: string;
  archiveCategory: "ai" | "fullstack" | "backend" | "mobile" | "hackathon" | "academic";
  year: string;
  duration: string;
  description: string;
  problem: string;
  built: string;
  technicalApproach: string;
  myContribution?: string;
  challenges?: string;
  outcome?: string;
  pipelineSteps?: PipelineStep[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  badge?: string;
  hackathonBadge?: string;
}

export interface ArchiveProject {
  id: string;
  title: string;
  category: string;
  archiveCategory: "ai" | "fullstack" | "backend" | "mobile" | "hackathon" | "academic";
  year: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: string;
}

export interface TechProjectMapping {
  tech: string;
  category: "languages" | "frameworks" | "ai" | "databases" | "mobile";
  projectIds: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    badge?: string;
    highlightProjects?: string[];
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  description?: string;
  focusAreas: string[];
}

export interface PublicationItem {
  title: string;
  year: string;
  authors: string;
  venue?: string;
  summary: string;
  award?: string;
  tags: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  year?: string;
  category: "hackathon" | "academic" | "competition" | "recognition";
  badgeText: string;
  details: string;
}
