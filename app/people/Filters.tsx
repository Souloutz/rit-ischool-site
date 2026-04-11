import { cn } from "@/lib/utils";
import { Filter } from "lucide-react";
import { MotionDiv } from "@/components/Motion";

export default function Filters({
  activeTab,
  setActiveTab,
}: {
  activeTab: "faculty" | "staff";
  setActiveTab: (tab: "faculty" | "staff") => void;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full md:w-64 shrink-0 space-y-4"
    >
      <div className="flex items-center gap-3 text-muted-foreground mb-6 font-bold tracking-widest text-sm uppercase">
        <Filter size={16} /> Filter
      </div>
      <div className="flex md:flex-col gap-3 overflow-x-auto pb-4 md:pb-0">
        {["faculty", "staff"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "faculty" | "staff")}
            className={cn(
              "px-6 py-4 rounded-none text-left font-bold uppercase tracking-wider transition-all duration-300 w-full whitespace-nowrap border",
              activeTab === tab
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </MotionDiv>
  );
}