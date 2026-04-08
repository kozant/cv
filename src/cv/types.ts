export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  place: string;
  degree: string;
  period: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface CvProfile {
  label: string;
  name: string;
  title: string;
  headline: string;
  summary: string;
  skills: string[];
  languages?: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  contacts: ContactItem[];
}
