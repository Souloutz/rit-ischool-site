import { MotionDiv } from "./ui/Motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full min-h-screen">
      <MotionDiv
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 border-4 border-[#F76902] border-t-transparent rounded-full"
      />
    </div>
  );
}