import type { FC } from "react";
import type { ExperienceItem } from "../cv/types";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: FC<ExperienceSectionProps> = ({
  experience,
}) => {
  return (
    <section className="block">
      <h2>Experience</h2>
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
