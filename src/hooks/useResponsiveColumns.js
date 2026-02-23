import { useState, useEffect } from "react";

export function useResponsiveColumns(breakpoint = 800) {
  const [isTwoColumn, setIsTwoColumn] = useState(
    () => window.matchMedia(`(min-width: ${breakpoint}px)`).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handler = (e) => setIsTwoColumn(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return isTwoColumn;
}
