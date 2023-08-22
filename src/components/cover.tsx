"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
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
      alt={""}
      className="absolute z-[100] blur-[0.1px] sm:blur-[0.3px]"
      animate={isOn ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
    />
  );
};
