import type { FC } from "react";
import type { Lang } from "../cv/types";
import { content } from "../cv/data";

interface SkillsSectionProps {
  lang: Lang;
  skills: string[];
}

export const SkillsSection: FC<SkillsSectionProps> = ({ lang, skills }) => {
  return (
    <section className="block">
      <h2>{content[lang].skillsSectionTitle}</h2>
      <ul className="tags">
        {skills.map((skill, index) => (
          <li key={`skill-${index}-${skill}`}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};
