import { fetchInitialData } from "@/lib/data";
import { MinorsSchema } from "@/lib/definitions";
import DataFetchError from "@/components/DataFetchError";
import { MotionDiv } from "@/components/Motion";
import { BookOpen } from "lucide-react";
import MinorDashboard from "./MinorDashboard";

export default async function Page() {
  const { success, data, error } = MinorsSchema.safeParse(await fetchInitialData("/minors"));
  
  if (!success) {
    console.error("Failed to parse people data:", error);
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
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight text-foreground flex items-center gap-4">
          <BookOpen className="w-12 h-12 text-primary" />
          School of Information Minors
        </h1>
        <div className="h-1 w-18 bg-primary rounded-full" />
        <p className="text-muted-foreground text-lg max-w-2xl">
          Enhance your major with specialized minors. Click on any minor to explore its curriculum on-demand.
        </p>
      </div>

      <MinorDashboard data={data} />
    </MotionDiv>
  );
}