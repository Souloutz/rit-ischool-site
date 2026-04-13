import DataFetchError from "@/components/DataFetchError";
import { fetchInitialData } from "@/lib/data";
import { EmploymentSchema } from "@/lib/definitions";
import { MotionDiv } from "@/components/Motion";
import { Briefcase } from "lucide-react";
import EmploymentDashboard from "./EmploymentDashboard";

export default async function Employment() {
  const { success, data, error } = EmploymentSchema.safeParse(await fetchInitialData("/employment"));

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
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-4">
          <Briefcase className="w-12 h-12 text-primary" />
          Careers & Co-op
        </h1>
        <div className="h-1 w-18 bg-primary rounded-full" />
        <p className="text-muted-foreground text-lg max-w-2xl">
          Discover the pathways our students take, backed by real-world statistics and industry partnerships.
        </p>
      </div>

      <EmploymentDashboard data={data} />
    </MotionDiv>
  );
}