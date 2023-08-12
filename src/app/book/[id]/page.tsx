import { Text } from "@radix-ui/themes";
import books from "@/mock/books.json";

export default function Book({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const book = books.find((book) => book.id === Number(id));

  return (
    <>
      <div
        className="absolute top-0 left-0 flex justify-center w-full px-2 py-1 text-sm font-semibold !bg-[#fffffd] z-20 sm:text-xs"
        style={{
          zoom: 0.8,
        }}
      >
        <Text>下午 5:02</Text>
      </div>
      <div className="scroll-area flex flex-col flex-auto overflow-scroll p-2 py-4 divide-y-2 divide-dotted space-y-5 sm:space-y-3 scroll-smooth snap-y">
        {book?.records.map((record) => (
          <div key={record.start + record.time}>
            <Text className="bg-gray-200 font-medium drop-shadow-sm scorll-mt-2 snap-start leading-8 text-md sm:text-xs">
              {record.text}
            </Text>
          </div>
        ))}
      </div>
      <Text
        size="1"
        className="absolute bottom-0 left-2 py-1 w-full text-xs font-bold !bg-[#fffffd]"
        style={{
          zoom: 0.8,
        }}
      >
        <Text className="block w-[80%] whitespace-nowrap text-ellipsis overflow-hidden">
          {book?.title}
        </Text>
      </Text>
    </>
  );
}
