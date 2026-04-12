import { type Course } from '@/lib/definitions';
import { MotionDiv } from '@/components/Motion';
import { X } from 'lucide-react';

export default function PeopleModal({
  selectedCourse,
  setSelectedCourse
}: {
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
}) {
  return selectedCourse && (
    <>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedCourse(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <MotionDiv
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          className="bg-card border border-border w-full max-w-3xl relative overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedCourse(null)}
            className="absolute top-6 right-6 p-2 bg-transparent text-muted-foreground rounded-full hover:text-foreground hover:bg-secondary transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10">
           <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2 leading-none">
                {selectedCourse.courseID}
              </h2>
              <div className="text-primary font-bold text-lg tracking-wide uppercase">
                {selectedCourse.title.replace(/&amp;/g, "&")}
              </div>
            </div>
            
            <div className="h-px w-full bg-border" />
            
            <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-12">
              <div className="space-y-4">
                {/* {selectedPerson.interestArea && (
                  <div className="flex gap-4 items-start group">
                    <Tag className="w-5 h-5 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Interest Area</div>
                      <div className="flex flex-col flex-wrap gap-2 md:flex-row text-foreground mt-2">
                        {selectedPerson.interestArea.split(" ").map((word) => {
                          return (
                            <span key={word} className="inline-block bg-muted text-secondary-foreground px-3.5 py-1 rounded-full text-xs font-medium border border-border">
                              {word.toUpperCase()}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )} */}
                
                {/* {selectedPerson.email && (
                  <div className="flex gap-4 items-start group">
                    <Mail className="w-5 h-5 text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                    <div>
                      <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Email</div>
                      <a href={`mailto:${selectedPerson.email}`} className="text-foreground hover:text-primary transition-colors underline decoration-border underline-offset-4">
                        {selectedPerson.email}
                      </a>
                    </div>
                  </div>
                )} */}

              </div>
            </div>
            </div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </>
  );
}