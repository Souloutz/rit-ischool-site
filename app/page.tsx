import Image from "next/image";
import { fetchInitialData } from "@/lib/data";
import { AboutSchema } from "@/lib/definitions";
import { MotionDiv, MotionH1 } from "@/components/Motion";
import DataFetchError from "@/components/DataFetchError";


export default async function Home() {
  const { success, data, error} = AboutSchema.safeParse(await fetchInitialData("/about"));

  if (!success) {
    console.error("Failed to fetch '/about' data:", error);
    return (
      <DataFetchError />
    );
  }

  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pb-16 md:pt-4 mx-auto space-y-16 max-w-350"
      >
        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-2xl border-2 border-accent overflow-hidden flex items-end p-8 md:p-12 shadow-xl group">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/campus.jpg" 
              alt="University Campus"
              width={1200}
              height={960}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
              loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-800 via-zinc-950/60 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <MotionH1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-normal text-white"
            >
              School of Information
            </MotionH1>
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="h-1 w-24 bg-primary mb-6 rounded-full"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 md:py-8 items-start max-w-6xl px-8 lg:px-4 mx-auto relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 30,
              mass: 1.5,
              delay: 0.3,
            }}
            className="prose prose-lg flex flex-col gap-8 justify-center text-foreground"
          >
            <h2 className="font-semibold text-2xl">{data.title}</h2>
            <p className="leading-relaxed tracking-tight text-xl">
              {data.description}
            </p>
          </MotionDiv>

          {/* Quote Block */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 40,
              mass: 2,
              delay: 0.8,
            }}
            className="bg-card text-card-foreground p-10 backdrop-blur-md shadow-xl border-l-4 border-primary relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 text-7xl font-serif select-none text-zinc-800/30 dark:text-zinc-200/30 leading-none">&quot;</div>
            <blockquote className="relative z-10 text-lg font-normal italic mb-6 max-w-md">
              &ldquo;{data.quote}&rdquo;
            </blockquote>
            <cite className="relative z-10 block text-primary font-bold text-lg uppercase tracking-wider">
              — {data.quoteAuthor}
            </cite>
          </MotionDiv>
        </div>
      </MotionDiv>
    </>
  );
}
