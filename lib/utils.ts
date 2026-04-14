import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Faculty, type Staff } from "@/lib/definitions";

export function cn(...inputs: ClassValue[]) {
  // Efficiently merge Tailwind CSS classes and automatically resolves style conflicts
  return twMerge(clsx(inputs));
}

export const SortLogic = {
  AZ: (a: Faculty | Staff, b: Faculty | Staff) => a.name.localeCompare(b.name),
  ZA: (a: Faculty | Staff, b: Faculty | Staff) => -(a.name.localeCompare(b.name)),
  DEFAULT: () => 0, // No sorting
};

export type SortType = keyof typeof SortLogic;