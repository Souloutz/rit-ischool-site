"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";
import { Toggle } from "@/app/ui/toggle";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle aria-label="Toggle theme" size="lg" variant="outline" className="bg-muted border border-border hover:border-primary rounded-full" onClick={toggleTheme}>
      {theme === "light" ? 
        <Moon strokeWidth={2.5} className="w-6 h-6 fill-muted" /> : 
        <Sun strokeWidth={2.5} className="w-6 h-6 fill-white" />}
    </Toggle>
  );
}