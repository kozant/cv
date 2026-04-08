import type { CvProfile } from "./types";

/** Source: text from «FRONTEND - ANTON KAZLOU.pdf» (ANTON_KAZLOU_FRONTEND.pdf had no text layer). */

const sharedName = "Anton Kazlou";

const sharedLanguages = ["English", "Russian"];

const sharedContacts: CvProfile["contacts"] = [
  {
    label: "Email",
    value: "anton.s.kazlou@gmail.com",
    href: "mailto:anton.s.kazlou@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anton-kazlou-081838134",
    href: "https://www.linkedin.com/in/anton-kazlou-081838134",
  },
  {
    label: "Telegram",
    value: "@antonkozlovv",
    href: "https://t.me/antonkozlovv",
  },
];

const sharedEducation: CvProfile["education"] = [
  {
    place: "Belarusian State University, Minsk",
    degree: "Bachelor's degree",
    period: "2016 — 2020",
  },
];

export const cvProfile: CvProfile = {
  label: "Frontend",
  name: sharedName,
  title: "Frontend Engineer",
  headline:
    "React, Redux, TypeScript · High-Performance UI & Real-time Systems",
  summary: `Results-driven Middle Frontend Developer with 5+ years of experience building
modern, responsive, and user-friendly web applications.

Proficient in JavaScript, TypeScript, and modern frameworks, with strong
expertise in performance optimization and clean architecture.

Experienced in implementing new functionality from UI/UX designs,
maintaining stable codebases, and collaborating closely with cross-functional
teams.

Practical background in AI tools and AWS infrastructure.`,
  skills: [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "SCSS / CSS",
    "Responsive UI & Accessibility",
    "Unit Testing (Jest/Vitest)",
    "Git",
    "AWS",
    "CI/CD",
  ],
  languages: sharedLanguages,
  experience: [
    {
      role: "FRONTEND DEVELOPER",
      company: "Imbue Systems",
      period: "Dec 2020 - Jan 2026",
      highlights: [
        "Developed and implemented new user-centered features from UI/UX designs using ReactJS, enhancing user experience and increasing customer satisfaction",
        "Maintained and refactored existing codebase for performance and stability",
        "Actively facilitated collaboration between support, design, and development teams to clarify requirements and deliver cross-functional solutions",
        "Performed manual testing and debugging of new modules",
        "Worked with AWS services at an introductory level, including managing basic records in DynamoDB, checking pipeline and work ow statuses in CodePipeline and Step Functions",
      ],
    },
  ],
  education: sharedEducation,
  contacts: sharedContacts,
};
