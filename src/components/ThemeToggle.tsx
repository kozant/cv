import { useCallback, useEffect, useState } from "react";
import type { Theme } from "../cv/types";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const systemTheme = prefersDark ? "dark" : "light";

    setTheme(systemTheme);
    document.documentElement.dataset.theme = systemTheme;
  }, []);

  const handleChangeTheme = useCallback(() => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.dataset.theme = newTheme;
  }, [theme]);

  return (
    <div className="theme-toggle" onClick={handleChangeTheme}>
      {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </div>
  );
}
