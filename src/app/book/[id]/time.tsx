"use client";
import { Text } from "@radix-ui/themes";
import { useFormatedTime } from "@/hooks/use-formated-time";
import { memo } from "react";
import NoSSR from "react-no-ssr";

export const Time = memo(() => {
  const time = useFormatedTime();
  return (
    <NoSSR>
      <Text
        style={{
          zoom: 0.8,
        }}
      >
        {time}
      </Text>
    </NoSSR>
  );
});
Time.displayName = "Time";
