"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Nested children can subscribe to context and grab theme
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = window.document.documentElement; // <html> tag
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}