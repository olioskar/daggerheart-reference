import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("dhr-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("dhr-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  return { theme, toggleTheme };
}
