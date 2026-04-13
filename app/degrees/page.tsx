import { GraduationCap, Code, Server, Smartphone, BookMarked, Cpu, Network, Tickets } from "lucide-react";
import { DegreesSchema } from "@/lib/definitions";
import { fetchInitialData } from "@/lib/data";
import { MotionDiv } from "@/components/Motion";
import DataFetchError from "@/components/DataFetchError";
import DegreeCard from "./DegreeCard";


export default async function Page() {
  const { success, data, error } = DegreesSchema.safeParse(await fetchInitialData("/degrees"));
  const icons = [Code, Server, Smartphone, Cpu, BookMarked, Network, Tickets];

  if (!success) {
    console.error("Failed to parse degrees data:", error);
    return (
      <DataFetchError />
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
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center gap-4">
          <GraduationCap className="w-12 h-12 text-primary" />
          School of Information Degrees
        </h1>
        <div className="h-1 w-18 bg-primary rounded-full" />
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore our undergraduate and graduate programs designed to prepare you for the future of technology.
        </p>
      </div>

      <div className="space-y-16">
        {/* Undergraduate */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-foreground tracking-tight border-b border-border pb-4">Undergraduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.undergraduate.map((degree, index) => {
              const Icon = icons[index % icons.length];
              return (
                <DegreeCard
                  key={degree.degreeName}
                  Icon={Icon}
                  degree={degree}
                  index={index}
                />
              );
            })}
          </div>
        </div>

        {/* Graduate */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-foreground tracking-tight border-b border-border pb-4">Graduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.graduate.map((degree, index) => {
              const Icon = icons[(index + 3) % icons.length];
              return (
                <DegreeCard
                  key={degree.degreeName}
                  Icon={Icon}
                  degree={degree}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
