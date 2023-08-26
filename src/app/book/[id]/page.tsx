import { Flex } from "@radix-ui/themes";
import { KindleHighlight, KindleSubHeader } from "@/components";
import { Time } from "./time";
import { getClippings } from "@/utils";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {

  const books = await getClippings();
  const book = books.find((book) => book.id === Number(id));

  return {
    title: book?.title,
    twitter: {
      card: "summary_large_image",
      title: `${book?.title} - ${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
      description: `共 ${book?.highlights.length} 条摘录`,
    },
    openGraph: {
      title: `${book?.title} - ${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
      description: `共 ${book?.highlights.length} 条摘录`,
      url: `/book/${id}`,
    },
  };
};

export const generateStaticParams = async () => {
  const books = await getClippings();
  return books.map((book) => ({
    params: {
      id: book.id.toString(),
    },
  }));
};

export default async function Book({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const books = await getClippings();
  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    notFound();
  }

  return (
    <>
      <Flex
        direction="column"
        align="center"
        className="sticky top-0 left-0 flex justify-center w-full text-sm font-semibold !bg-[#fffffd] z-20 sm:text-xs"
      >
        <Time />
        <KindleSubHeader title={book?.title} className="!pt-0" />
      </Flex>
      <div className="scroll-area flex flex-col flex-auto overflow-scroll p-2 py-2 divide-y-2 divide-dotted space-y-5 sm:space-y-3 scroll-smooth snap-y">
        {book?.highlights.map((highlight) => (
          <KindleHighlight key={highlight.id} data={highlight} />
        ))}
      </div>
      {/* <Text
        size="1"
        as="div"
        align="right"
        className=" sticky bottom-0 left-0 py-1 px-2 w-full text-xs font-bold !bg-[#fffffd]"
        style={{
          zoom: 0.8,
        }}
      >
        剩余 1 分
      </Text> */}
    </>
  );
}
