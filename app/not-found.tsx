import { FrownIcon } from "lucide-react";
import { MotionDiv } from "@/components/Motion";

export default function NotFound() {
  return (
    <main className="h-full flex justify-center items-center">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full flex flex-row items-center justify-center gap-2"
      >
        <FrownIcon className="w-10 text-primary" />
        <h2 className="text-xl font-medium text-zinc-700 dark:text-zinc-200">404 Not Found</h2>
      </MotionDiv>
    </main>
  );
}