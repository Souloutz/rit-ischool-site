"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // useSpring makes the bar move smoothly rather than "snapping"
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-100 origin-left"
      style={{ scaleX }}
    />
  );
}