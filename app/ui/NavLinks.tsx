"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/degrees", label: "Degrees" },
  { href: "/minors", label: "Minors" },
  { href: "/employment", label: "Employment" },
  { href: "/people", label: "People" },
];

export default function NavLinks() {
  const path = usePathname();

  return (
    <>
      <nav className="border-t border-border bg-background/85 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-350 mx-auto px-4">
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-1 md:gap-8 py-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    cn(
                      "text-lg font-semibold tracking-wide px-2 md:px-0 py-2 md:py-4 transition-colors relative flex items-center gap-1 hover:text-primary",
                      path === href ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )
                  }
                >
                  {label}

                  {path === href &&
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1.5 left-0 right-0 h-0.5 bg-primary hidden md:block"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  }
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}