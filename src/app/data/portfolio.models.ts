export type ProjectCategory = 'software' | 'robotics' | 'ml';

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  variant?: 'linkedin' | 'github' | 'email' | 'cv' | 'instagram' | 'whatsapp';
}

export interface Profile {
  name: string;
  titles: string[];
  bio: string;
  image: string;
  cvUrl: string;
  socialLinks: SocialLink[];
}

export interface TimelineHighlight {
  icon: string;
  text: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  highlights?: TimelineHighlight[];
  link?: { url: string; label: string };
}

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'demo' | 'linkedin' | 'details';
}

export interface DetailSection {
  title: string;
  content?: string;
  bullets?: string[];
  cards?: { title: string; items: string[] }[];
  videoUrl?: string;
  videoCaption?: string;
}

export interface Project {
  slug: string;
  category: ProjectCategory;
  title: string;
  summary: string;
  image: string;
  tech: string[];
  links: ProjectLink[];
  detailSections?: DetailSection[];
  badge?: 'current';
}

export interface SkillItem {
  name: string;
  icon: string;
  iconType?: 'devicon' | 'boxicon' | 'custom';
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface ContactInfo {
  email: string;
  whatsapp: { display: string; url: string };
}

export interface NavItem {
  label: string;
  fragment: string;
}

export interface PortfolioData {
  profile: Profile;
  navItems: NavItem[];
  timeline: TimelineEvent[];
  projects: Project[];
  skillCategories: SkillCategory[];
  contact: ContactInfo;
  footerSocial: SocialLink[];
  copyrightYear: number;
}
