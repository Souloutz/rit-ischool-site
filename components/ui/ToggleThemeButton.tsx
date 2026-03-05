"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Toggle } from "./toggle";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle aria-label="Toggle theme" size="lg" variant="outline" onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Toggle>
  )
}