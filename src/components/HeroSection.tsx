import type { FC } from "react";

interface HeroSectionProps {
  name: string;
  title: string;
  headline: string;
  summary: string;
}

export const HeroSection: FC<HeroSectionProps> = ({
  name,
  title,
  headline,
  summary,
}) => {
  return (
    <section className="hero">
      <h1>{name}</h1>
      <p className="role">{title}</p>
      <p className="headline">{headline}</p>
      <p className="summary">{summary}</p>
    </section>
  );
};
