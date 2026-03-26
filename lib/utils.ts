import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  // Efficiently merge Tailwind CSS classes and automatically resolves style conflicts
  return twMerge(clsx(inputs))
}