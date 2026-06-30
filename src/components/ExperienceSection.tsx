import type { FC } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import type { Lang, ExperienceItem } from "../cv/types";
import { content } from "../cv/data";

interface ExperienceSectionProps {
  lang: Lang;
  isPet?: boolean;
  experience: ExperienceItem[];
}

export const ExperienceSection: FC<ExperienceSectionProps> = ({
  lang,
  isPet = false,
  experience,
}) => {
  const titleKey = isPet
    ? "petExperienceSectionTitle"
    : "commercialExperienceSectionTitle";

  return (
    <section className="block">
      <h2>{content[lang][titleKey]}</h2>
      <ul className="timeline">
        {experience.map((job, index) => (
          <li key={`job-${index}-${job.company}`}>
            <div className="job-head">
              <span className="job-title">
                {job.role}
                {isPet && (
                  <a
                    className="job-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/kozant/task-manager"
                  >
                    <OpenInNewIcon fontSize="small" />
                  </a>
                )}
              </span>
              <span className="job-meta">
                {!isPet && `${job.company} ·`} {job.period}
              </span>
            </div>
            <div className="job-description">{job.description}</div>
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
