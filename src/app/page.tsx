import { Flex, Text } from "@radix-ui/themes";
import { KindleHeader } from "@/components";
import Link from "next/link";
import { Search } from "./search";
import { getClippings } from "@/utils";

export default async function Home() {
  const books = await getClippings();

  return (
    <>
      <KindleHeader />
      <Search />
      <div className="divide-y-2 px-2 mt-1">
        {books?.map((book) => {
          return (
            <Link
              key={book.title + book.author}
              className="flex justify-between items-center p-2 pt-1 pr-1 sm:text-xs font-semibold cursor-pointer hover:bg-black hover:text-white"
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
            </Link>
          );
        })}
      </div>
    </>
  );
}
