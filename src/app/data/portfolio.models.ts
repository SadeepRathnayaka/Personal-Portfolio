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
  researchInterests?: string[];
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

/**
 * A YouTube video shown in a project's video gallery.
 * `youtube` accepts a full link (youtu.be/…, youtube.com/watch?v=…, /shorts/…, /embed/…)
 * or just the 11-character video ID. Leave it as '' to show a "Video coming soon" placeholder.
 */
export interface ProjectVideo {
  youtube: string;
  /** Optional caption shown on the tile and in the full-size player. */
  title?: string;
  /** Defaults to 'portrait' for /shorts/ links and 'landscape' otherwise. */
  orientation?: 'landscape' | 'portrait';
  /** Optional small badge, e.g. '1.5×' for sped-up footage. */
  note?: string;
}

export interface Project {
  slug: string;
  category: ProjectCategory;
  title: string;
  summary: string;
  image: string;
  tech: string[];
  links: ProjectLink[];
  /** First video is the large featured one; the rest play alongside it. */
  videos?: ProjectVideo[];
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

export interface Achievement {
  title: string;
  event: string;
  year: string;
  description: string;
  icon: string;
  link?: { url: string; label: string };
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
  achievements: Achievement[];
  contact: ContactInfo;
  footerSocial: SocialLink[];
  copyrightYear: number;
}
