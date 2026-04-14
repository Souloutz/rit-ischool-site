import { CourseSchema, type Course } from "@/lib/definitions";
import { MotionDiv } from "@/components/Motion";
import { X } from "lucide-react";

export default function CourseModal({
  course,
  onClose,
  handleOpen,
}: {
  course: Course;
  onClose: () => void;
  handleOpen: (course: Course) => void;
}) {
  const parts = course.description.split(/(ISTE-[0-9]{3})/);

  const handleOpenNested = async (course: string) => {
    const courseReponse = await fetch(`api/course/courseID=${course}`);
    const json: unknown = await courseReponse.json();
    const { success, data } = CourseSchema.safeParse(json);

    if (success) handleOpen(data);
  };

  return (
    <MotionDiv
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0, y: 20 }}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      className="bg-card border border-border w-full max-w-3xl relative overflow-hidden shadow-2xl"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-transparent text-muted-foreground rounded-full hover:text-foreground hover:bg-secondary transition-colors z-10"
      >
        <X size={20} />
      </button>

      {/* Content */}
      <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2 leading-none">
              {course.courseID}
            </h2>
            <div className="text-primary font-bold text-lg tracking-wide uppercase">
              {course.title.replace(/&amp;/g, "&")}
            </div>
          </div>
        
          <div className="h-px w-full bg-border" />
        
          <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-12">
            <div className="space-y-4">
              <p>
                {parts[0]}
                {parts.slice(1, parts.length - 1).map((prerequiste, index) => 
                  (
                    <a 
                      key={index}
                      onClick={() => handleOpenNested(prerequiste)}
                      className="text-foreground hover:text-primary transition-colors underline decoration-border underline-offset-4"
                    >
                      {prerequiste}
                    </a>
                  ),
                )}
                {parts[parts.length - 1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}