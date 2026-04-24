import type { FC } from "react";
import type { Lang, EducationItem } from "../cv/types";
import { content } from "../cv/data";

interface EducationSectionProps {
  lang: Lang;
  education: EducationItem[];
}

export const EducationSection: FC<EducationSectionProps> = ({
  education,
  lang,
}) => {
  return (
    <section className="block">
      <h2>{content[lang].educationSectionTitle}</h2>
      <ul className="plain">
        {education.map((item, index) => (
          <li key={`education-${index}-${item.place}`}>
            <strong>{item.place}</strong> — {item.degree}
            <span className="muted"> · {item.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
