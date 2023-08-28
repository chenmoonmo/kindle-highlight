import { toObject } from "kindle-zhcn-clippings-to-json";

export type HighlightType = ReturnType<typeof toObject>[number] & {
  id: number;
  notes: ReturnType<typeof toObject>[number][];
};

type BookType = {
  title: string;
  author?: string;
  highlights: HighlightType[];
  id: number;
};

export async function getClippings() {
  const myClippings = process.env.MY_CLIPPINGS as string;
  const clippings = toObject(myClippings);
  const books: {
    [key: string]: BookType;
  } = {};
  const notes: any[] = [];
  let id = 0;
  let highlightId = 0;

  clippings.map((clipping) => {
    if (clipping.title) {
      if (!books[clipping.title]) {
        const book = {
          title: clipping.title,
          author: clipping.author,
          highlights: [],
          id: id++,
        };
        books[clipping.title] = book;
      }
      switch (clipping.type) {
        case "Highlight":
          books[clipping.title].highlights.push({
            ...clipping,
            id: highlightId++,
            notes: [],
          });
          break;
        case "Note":
          notes.push(clipping);
          break;
        default:
          break;
      }
    }
  });

  notes.map((note) => {
    const currentHighlight = books[note.title].highlights.find(
      (highlight) =>
        highlight.start &&
        highlight.end &&
        highlight.start <= note.start &&
        highlight.end >= note.start
    );
    currentHighlight?.notes.push(note);
  });

  return Object.values(books);
}
