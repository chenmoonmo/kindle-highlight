"use client";
import Image from "next/image";
import { Variants, motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { isOnAtom } from "@/atom";

const MotionImage = motion(Image);
const variants: Variants = {
  visible: {
    opacity: 1,
    pointerEvents: "auto",
  },
  hidden: {
    opacity: 0,
    pointerEvents: "none",
  },
};

export const Cover = () => {
  const isOn = useAtomValue(isOnAtom);

  return (
    <MotionImage
      src="/covers/cover-1.webp"
      fill
      priority
      alt="kindle cover"
      className="absolute z-[100] blur-none sm:blur-[0.02vh]"
      animate={isOn ? "visible" : "hidden"}
      variants={variants}
      transition={{
        delay: 0.3,
        duration: 1,
      }}
    />
  );
};
