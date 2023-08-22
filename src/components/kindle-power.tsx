"use client";
import { isOnAtom } from "@/atom";
import { useAtom } from "jotai";

export const KindlePower = () => {
  const [isOn, setIsOn] = useAtom(isOnAtom);

  return (
    <div
      className="kindle-button cursor-pointer"
      onClick={() => setIsOn(!isOn)}
    />
  );
};
