"use client";

import { cn } from "@/lib/utils";
import { Award, BookOpen, Briefcase, Copyright, Hexagon, Info, Users } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "About", icon: Info },
  { href: "/degrees", label: "Degrees", icon: Award },
  { href: "/minors", label: "Minors", icon: BookOpen },
  { href: "/employment", label: "Employment", icon: Briefcase },
  { href: "/people", label: "People", icon: Users },
];

export default function NavLinks() {
  const path = usePathname();

  return (
    <>
      {/* Sidebar Navigation (Desktop) / Topbar (Mobile) */}
      <motion.nav 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full md:w-64 bg-white dark:bg-zinc-900 dark:border-zinc-800 border-b md:border-b-0 md:border-r flex flex-col justify-between shrink-0 h-auto md:h-screen sticky top-0 z-50"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8 text-[#F76902]">
            <Hexagon size={32} className="fill-[#F76902]/20" />
            <h1 className="text-2xl font-black tracking-tighter uppercase">iSchool</h1>
          </div>
          
          <ul className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium whitespace-nowrap",
                      path === href 
                        ? "bg-[#F76902] text-white shadow-[0_0_20px_rgba(247,105,2,0.3)]" 
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                    )
                  }
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="hidden md:block p-6 text-xs text-zinc-600 dark:text-zinc-400">
          <p className="flex flex-row items-center gap-1"><Copyright width={16}/> {new Date().getFullYear()} RIT GCCIS</p>
          <p>School of Information</p>
        </div>
      </motion.nav>
    </>
  )
}