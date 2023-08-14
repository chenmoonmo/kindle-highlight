import dayjs from "dayjs";
import { useEffect, useState } from "react";

const getFormatedTime = () => {
  const zhA = {
    AM: "上午",
    PM: "下午",
  };
  const A = dayjs().format("A") as keyof typeof zhA;
  const time = dayjs().format("HH:mm");
  return `${zhA[A]} ${time}`;
};

export const useFormatedTime = () => {
  const [time, setTime] = useState(getFormatedTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormatedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};
