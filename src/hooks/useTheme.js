import { useState, useEffect } from "react";

/**
 * useTheme — manages dark/light theme with localStorage persistence.
 * Applies data-theme attribute to <html> element.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Prefer stored preference, fall back to OS preference
    const stored = localStorage.getItem("portfolio-theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
