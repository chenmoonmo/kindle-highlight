"use client";
import { RecordType } from "@/utils";
import { Popover, Text } from "@radix-ui/themes";
import { useMemo } from "react";

type KindleHighlightProps = {
  data: RecordType;
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
    return <div id={`highlight${data.id}`}>{content}</div>;
  }

  return (
    <Popover.Root>
      <Popover.Trigger id={`highlight${data.id}`} className="cursor-pointer">
        <div>
          {content}{" "}
          <Text className="bg-black text-white align-text-top text-xs select-none">
            {data.notes.length}
          </Text>
        </div>
      </Popover.Trigger>
      <Popover.Content
        size="1"
        side="top"
        className="!rounded-none border-2 border-black blur-[0.1px] sm:blur-[0.3px]"
      >
        {data.notes.map((note, index) => (
          <Text key={index} weight="bold" className="text-md sm:text-xs">
            <Text weight="light">{index + 1}. </Text>
            {note.content}
          </Text>
        ))}
      </Popover.Content>
    </Popover.Root>
  );
};
