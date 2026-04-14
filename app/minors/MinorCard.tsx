import { type UndergraduateMinor, type Course } from "@/lib/definitions";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ExpandedCourses from "./ExpandedCourses";

export default function MinorCard({
  minor,
  handleExpand,
  isExpanded,
  isLoading,
  courses,
}: {
  minor: UndergraduateMinor;
  handleExpand: (minorName: string, courses: string[]) => void;
  isExpanded: boolean;
  isLoading: boolean;
  courses: Course[];
}) {
  return (
    <motion.div
      key={minor.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3, scale: 1.01, transition: {
        type: "spring", stiffness: 300, damping: 20, mass: 1,
      } }}
      transition={{ delay: 0.3, ease: "easeInOut" }}
      className="bg-card border border-border shadow-md max-h-fit md:min-h-72 flex flex-col hover:border-primary"
    >
      <button
        onClick={() => handleExpand(minor.name, minor.courses)}
        className="w-full text-left p-8 flex items-start justify-between group transition-colors"
      >
        <div className="">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              {minor.title.split("(")[0]}
            </h3>
            <h2 className="text-xl font-semibold mb-6 text-foreground">
              {`(${minor.title.split("(")[1]}`}
            </h2>
          </div>
          <motion.p
            initial={{ height: 100 }}
            animate={{ height: isExpanded ? "auto" : 100 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            className="text-muted-foreground"
          >
            {minor.description}
          </motion.p>
        </div>
        <div className={`mt-2 p-2 rounded-full transition-transform duration-300 ${isExpanded ? "rotate-180 bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <ExpandedCourses 
            isLoading={isLoading}
            courses={courses || []}
          /> 
        )}
      </AnimatePresence>
    </motion.div>
  );
}