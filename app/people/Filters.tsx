import { cn, type SortType } from "@/lib/utils";
import { ArrowDown, ArrowUp, Filter, Search, X } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { Input, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Filters({
  activeTab,
  setActiveTab,
  handleSearch,
  activeFilter,
  handleFilter
}: {
  activeTab: "faculty" | "staff",
  setActiveTab: (tab: "faculty" | "staff") => void,
  handleSearch: (search: string) => void,
  activeFilter: SortType,
  handleFilter: (filter: SortType) => void
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-background z-30 w-full md:w-64 shrink-0 space-y-4 md:sticky md:top-25 md:self-start"
    >
      <div className="flex items-center gap-4">
        <Menu>
          <MenuButton className="focus:outline-none">
            <div className="flex items-center gap-3 text-muted-foreground font-bold tracking-widest text-sm uppercase">
              <Filter size={16} /> Filter
            </div>
          </MenuButton>
          <MenuItems
            anchor="bottom"
            transition
            className="z-50 max-w-fit origin-top-right rounded-xl border border-border bg-card mt-4 text-sm shadow-lg focus:outline-none transition duration-200 ease-out data-closed:opacity-0"
          >
            <MenuItem>
              <div
                className="flex items-center gap-2 w-full text-md px-4 py-3 tracking-wide hover:bg-primary/10"
                onClick={() => handleFilter(activeFilter === "AZ" ? "DEFAULT" : "AZ")}
              >
                <ArrowUp size={20} />
                A-Z
              </div>
            </MenuItem>
            <MenuItem>
              <div
                className="flex items-center gap-2 w-full text-md px-4 py-3 tracking-wide hover:bg-primary/10"
                onClick={() => handleFilter(activeFilter === "ZA" ? "DEFAULT" : "ZA")}
              >
                <ArrowDown size={20} />
                Z-A
              </div>
            </MenuItem>
          </MenuItems>
        </Menu>

        {(activeFilter === "DEFAULT") ? "" : 
          (
            <span 
              onClick={() => handleFilter("DEFAULT")}
              className="flex justify-center items-center gap-2 border rounded-2xl bg-muted text-md text-foreground font-medium px-2 py-1 hover:bg-primary/10"
            >
              {activeFilter}
              <X size={18} />
            </span>
          )
        }
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