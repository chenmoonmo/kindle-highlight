import { KindleHeader } from "@/components/kindle-header";
import { Search } from "@/components/search";
import { HighlightType, getClippings } from "@/utils";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export default async function SeachPage({
  searchParams: { text },
}: {
  searchParams: {
    text: string;
  };
}) {
  const books = await getClippings();
  const currentHighlights: (HighlightType & {
    bookId: number;
  })[] = [];
  books.forEach((book) => {
    book.highlights.forEach((highlight) => {
      if (highlight?.text?.includes(text)) {
        currentHighlights.push({
          ...highlight,
          bookId: book.id,
        });
      }
    });
  });

  return (
    <>
      <KindleHeader />
      <Search defaultValue={text} />
      <Flex
        px="2"
        direction="column"
        align="stretch"
        className="divide-y-2 flex-1 overflow-scroll scroll-smooth scroll-area"
      >
        {currentHighlights?.map((highlight) => {
          const showText =
            highlight.text?.replace(
              text,
              `<span class="bg-black text-white">${text}</span>`
            ) ?? "";
          return (
            <Link
              key={highlight.id}
              className="flex justify-between items-center p-2 pt-1 pr-1 sm:text-xs font-semibold cursor-pointer hover:bg-black hover:text-white w-full"
              href={`/book/${highlight.bookId}/#highlight${highlight.id}`}
            >
              <Flex direction="column" gap="1" className="flex-1">
                <Text
                  dangerouslySetInnerHTML={{
                    __html: showText,
                  }}
                ></Text>
                <Text style={{ zoom: 0.8, opacity: 0.8 }}>
                  《{highlight.title}》- {highlight.author}
                </Text>
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </>
  );
}
