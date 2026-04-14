"use client";

import { type Minors, type Course, CourseListSchema } from "@/lib/definitions";
import { useState } from "react";
import MinorCard from "./MinorCard";

export default function MinorDashboard({
  data,
}: {
  data: Minors;
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
          courses.map((course) => fetch(`api/course/courseID=${course}`)),
        );

        const jsonResults = await Promise.all(
          courseResponse.map(res => res.json()),
        );

        const parsedResults = CourseListSchema.parse(jsonResults);
        
        setCoursesData(prev => ({
          ...prev,
          [minorName]: parsedResults,
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
          <MinorCard
            key={minor.name}
            minor={minor}
            handleExpand={handleExpand}
            isExpanded={isExpanded}
            isLoading={isLoading}
            courses={courses}
          />
        );
      })}
    </div>
  );
}