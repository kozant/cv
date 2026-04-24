import type { FC } from "react";
import type { Lang, ExperienceItem } from "../cv/types";
import { content } from "../cv/data";

interface ExperienceSectionProps {
  lang: Lang;
  experience: ExperienceItem[];
}

export const ExperienceSection: FC<ExperienceSectionProps> = ({
  lang,
  experience,
}) => {
  return (
    <section className="block">
      <h2>{content[lang].experienceSectionTitle}</h2>
      <ul className="timeline">
        {experience.map((job, index) => (
          <li key={`job-${index}-${job.company}`}>
            <div className="job-head">
              <span className="job-title">{job.role}</span>
              <span className="job-meta">
                {job.company} · {job.period}
              </span>
            </div>
            <ul className="bullets">
              {job.highlights.map((highlight, hIndex) => (
                <li key={`highlight-${index}-${hIndex}`}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
