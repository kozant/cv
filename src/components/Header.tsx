import type { FC } from "react";
import type { Lang } from "../cv/types";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { content } from "../cv/data";

interface HeaderProps {
  lang: Lang;
  isExporting: boolean;
  onChangeLang: (newLang: Lang) => void;
  onExportClick: () => void;
}

export const Header: FC<HeaderProps> = ({
  isExporting,
  lang,
  onChangeLang,
  onExportClick,
}) => {
  return (
    <header className="top">
      <div className="top-inner">
        <p className="brand">{content[lang].cvSectionTitle}</p>
        <div className="top-actions">
          <LanguageToggle value={lang} onChange={onChangeLang} />
          <ThemeToggle />
          <button
            type="button"
            className="btn-export"
            onClick={onExportClick}
            disabled={isExporting}
            aria-busy={isExporting}
          >
            {isExporting ? "Exporting…" : "Export PDF"}
          </button>
        </div>
      </div>
    </header>
  );
};
