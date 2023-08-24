"use client";
import { HighlightType } from "@/utils";
import { Popover, Text } from "@radix-ui/themes";
import { useMemo } from "react";

type KindleHighlightProps = {
  data: HighlightType;
};

export const KindleHighlight = ({ data }: KindleHighlightProps) => {
  const content = useMemo(
    () => (
      <Text className="bg-gray-200 font-medium drop-shadow-sm scorll-mt-2 snap-start leading-8 text-md sm:text-xs">
        {data.text}
      </Text>
    ),
    [data.text]
  );

  if (!data.notes.length) {
    return (
      <div id={`highlight${data.id}`} className="pt-2">
        {content}
      </div>
    );
  }

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div id={`highlight${data.id}`} className="pt-2 cursor-pointer">
          {content}{" "}
          <Text className="bg-black text-white align-text-top text-xs select-none">
            {data.notes.length}
          </Text>
        </div>
      </Popover.Trigger>
      <Popover.Content
        size="1"
        side="top"
        sideOffset={-8}
        className="!rounded-none border-2 border-black blur-none sm:blur-[0.02vh]"
      >
        {data.notes.map((note, index) => (
          <Text key={index} weight="bold" className="text-md sm:text-xs">
            <Text weight="light">{index + 1}. </Text>
            {note.text}
          </Text>
        ))}
      </Popover.Content>
    </Popover.Root>
  );
};
