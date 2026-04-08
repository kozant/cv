import type { FC } from "react";

interface SkillsSectionProps {
  skills: string[];
}

export const SkillsSection: FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="block">
      <h2>Skills</h2>
      <ul className="tags">
        {skills.map((skill, index) => (
          <li key={`skill-${index}-${skill}`}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};
