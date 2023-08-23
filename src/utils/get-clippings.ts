import { toObject } from "kindle-zhcn-clippings-to-json";
import { headers } from "next/headers";

type NoteType = {
  start: number;
  end: number;
  content: string;
};

export type RecordType = ReturnType<typeof toObject>[number] & {
  id: number;
  notes: NoteType[];
};

type BookType = {
  title: string;
  author?: string;
  records: RecordType[];
  id: number;
};

export async function getClippings() {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const myClippings = await fetch(`${protocal}://${host}/My Clippings.txt`, {
    method: "GET",
    next: {
      revalidate: false,
    },
  }).then((response) => {
    return response.text();
  });

  const json = toObject(myClippings);
  const books: {
    [key: string]: BookType;
  } = {};
  const notes: any[] = [];
  let id = 0;
  let recordId = 0;

  json.map((record) => {
    if (record.title) {
      if (!books[record.title]) {
        const book = {
          title: record.title,
          author: record.author,
          records: [],
          id: id++,
        };
        books[record.title] = book;
      }
      if (record.type === "Note") {
        notes.push(record);
      } else {
        books[record.title].records.push({
          ...record,
          id: recordId++,
          notes: [],
        });
      }
    }
  });

  notes.map((note) => {
    books[note.title].records.forEach((record) => {
      if (
        record.start &&
        record.end &&
        record.start <= note.start &&
        record.end >= note.start
      ) {
        record.notes.push({
          start: note.start,
          end: note.end,
          content: note.text,
        });
      }
    });
  });

  return Object.values(books);
}
