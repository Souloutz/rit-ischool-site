"use client";

import Image from "next/image";
import { motion } from "motion/react";
import useSWR from "swr";
import { fetcher } from "@/lib/data";
import { About } from "@/lib/definitions";

export default function Home() {
  const { data, isLoading } = useSWR<About>("/api/about/", fetcher);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-[#F76902] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 md:p-12 space-y-16"
      >
        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-4xl overflow-hidden flex items-end p-8 md:p-16 shadow-2xl group">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/campus.jpg" 
              alt="University Campus"
              width={1200}
              height={960}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tight text-white"
            >
              RIT <span title="Golisano College of Computing and Information Sciences">GCCIS</span> ISCHOOL
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-1 w-24 bg-[#F76902] mb-6 rounded-full"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-lg flex flex-col gap-4"
          >
            <h2 className="text-zinc-700 dark:text-zinc-300 font-bold text-3xl">{data?.title}</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-light text-xl">
              {data?.description}
            </p>
          </motion.div>

          {/* Quote Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-zinc-300 dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-3xl border border-zinc-800/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 text-9xl font-serif select-none text-zinc-800/30 dark:text-zinc-200/30 leading-none">"</div>
            <blockquote className="relative z-10 text-2xl font-normal text-zinc-600 dark:text-zinc-100 italic mb-6 max-w-md">
              "{data?.quote}"
            </blockquote>
            <cite className="relative z-10 block text-[#F76902] font-semibold text-lg uppercase tracking-wider">
              — {data?.quoteAuthor}
            </cite>
          </motion.div>
        </div>
      </motion.div>
    </>
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}
