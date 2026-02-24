import { useState, useEffect } from "react";

export function useLocale() {
  const [locale, setLocale] = useState(
    () => localStorage.getItem("dhr-locale") || "en"
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("dhr-locale", locale);
  }, [locale]);

  const toggleLocale = () => setLocale(l => l === "en" ? "is" : "en");

  return { locale, toggleLocale };
}
