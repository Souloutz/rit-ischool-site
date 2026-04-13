import { type Course } from "@/lib/definitions";
import { MotionButton, MotionDiv } from "@/components/Motion";
import { Loader2 } from "lucide-react";
import { useModal } from "@/app/hooks/useModal";
import CourseModal from "./CourseModal";

export default function ExpandedCourses ({
  isLoading,
  courses,
}: {
  isLoading: boolean,
  courses: Course[],
}) {
  const { pushModal, popModal } = useModal();

  const handleOpen = (course: Course) => {
    pushModal(
      <CourseModal
        course={course}
        onClose={popModal}
      />
    );
  };

  return (
    <MotionDiv
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="border-t border-border bg-muted/20"
    >
      <div className="p-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-8 gap-3 text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
            Loading courses...
          </div>
        ) : (
          <div className="space-y-4">
            <h4 className="text-primary font-bold flex items-center gap-2 mb-6 uppercase tracking-wider text-sm">
              Curriculum
            </h4>
            {courses.map((course, index) => (
              <MotionButton
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleOpen(course)}
                className="bg-card rounded-none p-4 border border-border hover:border-primary shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold bg-muted text-muted-foreground px-2 py-1 rounded">
                    {course.courseID}
                  </span>
                  <h5 className="font-bold text-foreground">{course.title.replace(/&amp;/g, "&")}</h5>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
              </MotionButton>
            ))}
          </div>
        )}
      </div>
    </MotionDiv>
  );
}