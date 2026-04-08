import type { FC } from "react";

interface HeaderProps {
  isExporting: boolean;
  onExportClick: () => void;
}

export const Header: FC<HeaderProps> = ({ isExporting, onExportClick }) => {
  return (
    <header className="top">
      <div className="top-inner">
        <p className="brand">CV</p>
        <div className="top-actions">
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
