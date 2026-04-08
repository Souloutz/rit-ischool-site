import Image from "next/image";
import { fetchInitialData } from "@/lib/data";
import { AboutSchema } from "@/lib/definitions";
import { MotionDiv, MotionH1 } from "@/app/ui/Motion";

export default async function Home() {
  const { success, data, error} = AboutSchema.safeParse(await fetchInitialData("/about"));

  if (!success) {
    console.error("Failed to fetch '/about' data:", error);
    return (
      <div className="flex items-center justify-center h-full min-h-screen">
        <p className="text-red-500 text-lg">Failed to load data. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <MotionDiv
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
            <MotionH1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tight text-white"
            >
              RIT <span title="Golisano College of Computing and Information Sciences">GCCIS</span> ISCHOOL
            </MotionH1>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-1 w-24 bg-[#F76902] mb-6 rounded-full"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-lg flex flex-col gap-4"
          >
            <h2 className="text-zinc-700 dark:text-zinc-300 font-bold text-3xl">{data.title}</h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-light text-xl">
              {data.description}
            </p>
          </MotionDiv>

          {/* Quote Block */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-zinc-300 dark:bg-zinc-900/50 backdrop-blur-md p-10 rounded-3xl border border-zinc-800/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 text-9xl font-serif select-none text-zinc-800/30 dark:text-zinc-200/30 leading-none">&quot;</div>
            <blockquote className="relative z-10 text-2xl font-normal text-zinc-600 dark:text-zinc-100 italic mb-6 max-w-md">
              &ldquo;{data.quote}&rdquo;
            </blockquote>
            <cite className="relative z-10 block text-[#F76902] font-semibold text-lg uppercase tracking-wider">
              — {data.quoteAuthor}
            </cite>
          </MotionDiv>
        </div>
      </MotionDiv>
    </>
  );
}
