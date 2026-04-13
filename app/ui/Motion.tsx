"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type MotionDivProps = HTMLMotionProps<"div">
type MotionH1Props = HTMLMotionProps<"h1">
type MotionAProps = HTMLMotionProps<"a">
type MotionButtonProps = HTMLMotionProps<"button">

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

export function MotionH1({ children, ...props }: MotionH1Props) {
  return <motion.h1 {...props}>{children}</motion.h1>;
}

export function MotionA({ children, ...props }: MotionAProps) {
  return <motion.a {...props}>{children}</motion.a>;
}

export function MotionButton({ children, ...props }: MotionButtonProps) {
  return <motion.button {...props}>{children}</motion.button>
}