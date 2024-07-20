import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"light-mode" | "dark-mode">("dark-mode");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-mode" ? "dark-mode" : "light-mode"
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, toggleTheme };
};