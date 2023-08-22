"use client";

import { TextField, Popover, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export const Search = () => {
  return (
    <div className="flex justify-between items-center gap-2 px-2 py-1 border-b-[1px] border-gray-300">
      <TextField.Root className="w-full">
        <TextField.Slot>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </TextField.Slot>
        <TextField.Input radius="full" placeholder="搜索 Kindle" />
      </TextField.Root>
      <Popover.Root>
        <Popover.Trigger>
          <div className="p-1 cursor-pointer hover:bg-gray-800 fill-current hover:fill-white">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Popover.Trigger>
        <Popover.Content
          align="start"
          alignOffset={-140}
          className="!rounded-none !border-2 !border-black w-40 blur-none sm:blur-[0.3px]"
        >
          <Flex direction="column">
            <Link
              href="/about"
              className="px-1 py-2 cursor-pointer hover:bg-black hover:text-white"
            >
              <Text size="2" weight="bold">
                关于
              </Text>
            </Link>
          </Flex>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};
