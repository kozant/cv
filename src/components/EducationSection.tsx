import type { FC } from "react";
import type { EducationItem } from "../cv/types";

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection: FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="block">
      <h2>Education</h2>
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
