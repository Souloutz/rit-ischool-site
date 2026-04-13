import { cn } from "@/lib/utils";
import { Filter, Search } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { Input } from "@headlessui/react";

export default function Filters({
  activeTab,
  setActiveTab,
  handleSearch
}: {
  activeTab: "faculty" | "staff",
  setActiveTab: (tab: "faculty" | "staff") => void,
  handleSearch: (search: string) => void
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-background z-30 w-full md:w-64 shrink-0 space-y-4 md:sticky md:top-25 md:self-start"
    >
      <div className="flex items-center gap-3 text-muted-foreground mb-6 font-bold tracking-widest text-sm uppercase">
        <Filter size={16} /> Filter
      </div>
      <div className="flex flex-col gap-8 overflow-x-auto pb-4 md:pb-0">
        <div className="flex md:flex-col gap-3">
        {["faculty", "staff"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "faculty" | "staff")}
            className={cn(
              "px-6 py-3 rounded-none text-left font-bold uppercase tracking-wide transition-all duration-300 w-full whitespace-nowrap border",
              activeTab === tab
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-card text-muted-foreground border-border hover:bg-muted hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
        </div>

        <div className="relative flex flex-row items-center rounded-none w-full whitespace-nowrap border">
          <Input
            name="Search"
            type="text"
            placeholder="Search"
            className="w-full h-full px-4 py-3 transition-all duration-300 text-left font-normal" 
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Search size={20} strokeWidth={1} className="text-foreground absolute right-2"/>
        </div>
      </div>
    </MotionDiv>
  );
}