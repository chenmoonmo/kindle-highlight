import { useEffect, useState } from "react";

export const useSystemInfo = () => {
  const [battery, setBattery] = useState(0);

  const getBattery = async () => {
    // @ts-ignore
    // const battery = await navigator.getBattery();
    // setBattery(battery.level * 100);
  };

  useEffect(() => {
    getBattery();
  }, []);

  return {
    battery,
  };
};
