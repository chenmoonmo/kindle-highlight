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
        className="absolute top-0 left-0 flex justify-center w-full px-2 pb-1 text-xs font-semibold !bg-[#fffffd] z-20"
        style={{
          zoom: 0.8,
        }}
      >
        <span>下午 5:02</span>
      </div>
      <div className="flex flex-col flex-auto overflow-scroll p-2 pb-4 divide-y-2 divide-dotted space-y-3 scroll-smooth snap-y">
        {book?.records.map((record) => (
          <div key={record.start + record.end + record.time}>
            <Text
              className="bg-gray-200 font-medium text-sm drop-shadow-sm scorll-mt-2  snap-start"
              size="1"
            >
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
        <div className="w-[80%] whitespace-nowrap text-ellipsis overflow-hidden">
          {book?.title}
        </div>
      </Text>
    </>
  );
}
