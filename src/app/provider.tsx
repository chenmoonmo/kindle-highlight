"use client";

import { ReactNode, useLayoutEffect } from "react";

export const Provider = ({ children }: { children: ReactNode }) => {
  useLayoutEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
  }, []);

  return <>{children} </>;
};
