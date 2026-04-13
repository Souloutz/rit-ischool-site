import { MotionDiv } from "@/components/Motion";
import { PeopleSchema } from "@/lib/definitions";
import { fetchInitialData } from "@/lib/data";
import { UsersRound } from "lucide-react";
import DataFetchError from "@/components/DataFetchError";
import PeopleDashboard from "./PeopleDashboard";

export default async function Page() {
  const { success, data, error } = PeopleSchema.safeParse(await fetchInitialData("/people"));

  if (!success) {
    console.error("Failed to parse people data:", error);
    return (
      <DataFetchError />
    );
  }
  
  return (
    <div className="p-6 md:p-12 space-y-16 max-w-7xl mx-auto h-full flex flex-col">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center gap-4">
          <UsersRound className="w-10 h-10 text-primary" />
          Faculty and Staff
        </h1>
        <div className="h-1 w-18 bg-primary rounded-full" />
        <p className="text-muted-foreground text-lg max-w-2xl">
          Explore our top faculty and staff members who are dedicated to our students&apos; education and success.
        </p>
      </MotionDiv>

      <PeopleDashboard data={data} />
    </div>
  );
}