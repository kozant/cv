import type { FC } from "react";
import type { Lang } from "../cv/types";
import { content } from "../cv/data";

interface LanguagesSectionProps {
  lang: Lang;
  languages?: string[];
}

export const LanguagesSection: FC<LanguagesSectionProps> = ({
  lang,
  languages,
}) => {
  if (!languages || languages.length === 0) return null;

  return (
    <section className="block">
      <h2>{content[lang].languagesSectionTitle}</h2>
      <ul className="tags">
        {languages.map((language, index) => (
          <li key={`language-${index}-${language}`}>{language}</li>
        ))}
      </ul>
    </section>
  );
};
