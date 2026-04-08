import type { FC } from "react";

interface LanguagesSectionProps {
  languages?: string[];
}

export const LanguagesSection: FC<LanguagesSectionProps> = ({ languages }) => {
  if (!languages || languages.length === 0) return null;

  return (
    <section className="block">
      <h2>Languages</h2>
      <ul className="tags">
        {languages.map((language, index) => (
          <li key={`language-${index}-${language}`}>{language}</li>
        ))}
      </ul>
    </section>
  );
};
