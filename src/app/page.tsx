// import { ClippingsRead } from "./clippings-read";
import { Flex, Text } from "@radix-ui/themes";
// @ts-ignore
import { KindleHeader } from "@/components";
import books from "@/mock/books.json";
import Link from "next/link";
import { Search } from "./search";

export default function Home() {
  return (
    <>
      <KindleHeader />
      <Search />
      <div className="divide-y-2 px-2 mt-1">
        {books.map((book) => {
          return (
            <Link
              key={book.title + book.author}
              className="flex justify-between items-center p-2 pt-1 pr-1 md:text-xs font-semibold hover:bg-gray-200 cursor-pointer"
              href={`/book/${book.id}`}
            >
              <Flex direction="column" gap="1" className="flex-1 max-w-[90%]">
                <Text className="text-ellipsis whitespace-nowrap overflow-hidden">
                  {book.title}
                </Text>
                <Text
                  style={{
                    zoom: 0.8,
                  }}
                >
                  {book.author}
                </Text>
              </Flex>
              <div className="rounded-full p-1 hover:bg-gray-400">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
