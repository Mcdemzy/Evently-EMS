import { useEffect, useState } from "react";

// Custom hook for handling dark mode
function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedPreference = localStorage.getItem("dark-mode");
    return storedPreference
      ? storedPreference === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const bodyClass = document.body.classList;
    if (isDarkMode) {
      bodyClass.add("dark");
    } else {
      bodyClass.remove("dark");
    }
    localStorage.setItem("dark-mode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return [isDarkMode, toggleDarkMode] as const;
}

export default useDarkMode;
