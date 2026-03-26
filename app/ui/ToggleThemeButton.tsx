"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";
import { Toggle } from "@/app/ui/toggle";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle aria-label="Toggle theme" size="lg" variant="outline" className="bg-secondary border border-primary" onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Toggle>
  )
}