import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("dhr-theme") || "dark";
    document.documentElement.dataset.theme = saved;
    return saved;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("dhr-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  return { theme, toggleTheme };
}
