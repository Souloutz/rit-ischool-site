import { GraduationCap, Code, Server, Smartphone, BookMarked, Cpu } from "lucide-react";
import { DegreesSchema } from "@/lib/definitions";
import { fetchInitialData } from "@/lib/data";
import { MotionDiv } from "../ui/Motion";

export default async function Page() {
  const { success, data, error } = DegreesSchema.safeParse(await fetchInitialData("/degrees"))
  const icons = [Code, Server, Smartphone, Cpu, BookMarked, GraduationCap];

  if (!success) {
    console.error("Failed to parse degrees data:", error);
    return (
      <div className="flex items-center justify-center h-full min-h-screen">
        <p className="text-red-500 text-lg">Failed to load data. Please try again later.</p>
      </div>
    );
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 md:p-12 space-y-16 max-w-7xl mx-auto"
    >
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white flex items-center gap-4">
          <GraduationCap className="w-12 h-12 text-[#F76902]" />
          Our Degrees
        </h1>
        <div className="h-1 w-24 bg-[#F76902] rounded-full" />
        <p className="text-zinc-400 text-lg max-w-2xl">
          Explore our undergraduate and graduate programs designed to prepare you for the future of technology.
        </p>
      </div>

      <div className="space-y-12">
        {/* Undergraduate */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-zinc-200 uppercase tracking-wider">Undergraduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.undergraduate.map((degree, index) => {
              const Icon = icons[index % icons.length];
              return (
                <MotionDiv
                  key={degree.degreeName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#F76902]/50 transition-all duration-300 group shadow-lg"
                >
                  <div className="bg-zinc-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F76902] transition-colors">
                    <Icon className="w-8 h-8 text-[#F76902] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{degree.title}</h3>
                  <p className="text-zinc-400 mb-6">{degree.description}</p>
                  
                  {degree.concentrations && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {degree.concentrations.map((conc: string) => (
                        <span key={conc} className="text-xs font-medium px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                          {conc}
                        </span>
                      ))}
                    </div>
                  )}
                </MotionDiv>
              );
            })}
          </div>
        </div>

        {/* Graduate */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-zinc-200 uppercase tracking-wider">Graduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.graduate.map((degree, index) => {
              const Icon = icons[(index + 3) % icons.length];
              return (
                <MotionDiv
                  key={degree.degreeName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#F76902]/50 transition-all duration-300 group shadow-lg"
                >
                  <div className="bg-zinc-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F76902] transition-colors">
                    <Icon className="w-8 h-8 text-[#F76902] group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{degree.title}</h3>
                  <p className="text-zinc-400 mb-6">{degree.description}</p>
                  
                  {degree.concentrations && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {degree.concentrations.map((conc: string) => (
                        <span key={conc} className="text-xs font-medium px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                          {conc}
                        </span>
                      ))}
                    </div>
                  )}
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
