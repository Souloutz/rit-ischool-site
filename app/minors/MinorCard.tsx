"use client";

import { type Minors, type Course, CourseListSchema } from "@/lib/definitions";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "motion/react";
import Courses from "./Courses";
import { cn } from "@/lib/utils";

export default function MinorDashboard({
  data,
}: {
  data: Minors
}) {
  const [expandedMinors, setExpandedMinors] = useState<string[]>([]);
  const [coursesData, setCoursesData] = useState<Record<string, Course[]>>({});
  const [loadingCourses, setLoadingCourses] = useState<string | null>(null);

  const handleExpand = async (minorName: string, courses: string[]) => {
    if (expandedMinors.includes(minorName)) {
      setExpandedMinors(expandedMinors.filter((name) => name !== minorName));
      return;
    }

    setExpandedMinors([...expandedMinors, minorName]);

    if (!coursesData[minorName]) {
      setLoadingCourses(minorName);
      
      try {    
        const courseResponse = await Promise.all(
          courses.map((course) => fetch(`api/course/courseID=${course}`))
        );

        const jsonResults = await Promise.all(
          courseResponse.map(res => res.json())
        );

        const parsedResults = CourseListSchema.parse(jsonResults);
        
        setCoursesData(prev => ({
          ...prev,
          [minorName]: parsedResults
        }));

        console.log("Fetched courses for minor:", minorName, parsedResults);
      } catch (e) {
        console.error("Failed to load courses: ", e);
      } finally {
        setLoadingCourses(null);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.UgMinors.map((minor) => {
        const isExpanded = expandedMinors.includes(minor.name);
        const isLoading = loadingCourses === minor.name;
        const courses = coursesData[minor.name];

        return (
          <motion.div
            key={minor.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, ease: "easeInOut" }}
            className="bg-card border border-border shadow-md max-h-fit md:min-h-72 flex flex-col"
          >
            <button
              onClick={() => handleExpand(minor.name, minor.courses)}
              className="w-full text-left p-8 flex items-start justify-between group hover:bg-muted/50 transition-colors"
            >
              <div className="">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {minor.title.split("(")[0]}
                  </h3>
                  <h2 className="text-xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                    {`(${minor.title.split("(")[1]}`}
                  </h2>
                </div>
                <motion.p
                  initial={{ height: 100 }}
                  animate={{ height: isExpanded ? "auto" : 100 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "ellipsis" }}
                  className="text-muted-foreground text-ellipsis"
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
                <Courses 
                  isLoading={isLoading}
                  courses={courses || []}
                /> 
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}