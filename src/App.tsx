import { useCallback, useRef, useState } from "react";
import type { Lang } from "./cv/types";
import { cvProfiles } from "./cv/data";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { LanguagesSection } from "./components/LanguagesSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { PDF_FILENAMES, EXPORT_ERROR_MESSAGE } from "./constants";

export function App() {
  const sheetRef = useRef<HTMLElement>(null);
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lang, setLang] = useState<Lang>("EN");

  const handleChangeLang = useCallback((newLang: Lang) => {
    setLang(newLang);
  }, []);

  const handleExportPdf = useCallback(async () => {
    const el = sheetRef.current;
    if (!el) return;
    setExporting(true);
    setError(null);
    try {
      const { exportCvToPdf } = await import("./exportPdf");
      await exportCvToPdf(el, PDF_FILENAMES[lang]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : EXPORT_ERROR_MESSAGE;
      setError(errorMessage);
      console.error("PDF export failed:", err);
    } finally {
      setExporting(false);
    }
  }, []);

  const {
    name,
    title,
    headline,
    summary,
    skills,
    languages,
    experience,
    education,
    contacts,
  } = cvProfiles[lang];

  return (
    <div className="page">
      <Header
        isExporting={exporting}
        lang={lang}
        onChangeLang={handleChangeLang}
        onExportClick={handleExportPdf}
      />

      {error && (
        <div className="error-banner" role="alert">
          {error}
        </div>
      )}

      <main ref={sheetRef} className="sheet">
        <HeroSection
          name={name}
          title={title}
          headline={headline}
          summary={summary}
        />
        <SkillsSection skills={skills} lang={lang} />
        <LanguagesSection languages={languages} lang={lang} />
        <ExperienceSection experience={experience} lang={lang} />
        <EducationSection education={education} lang={lang} />
        <ContactSection contacts={contacts} lang={lang} />
      </main>
    </div>
  );
}
