import { getClippings } from "@/utils";
import dayjs from "dayjs";
import { headers } from "next/headers";
import RSS from "rss";

export async function GET(res: Request) {
  const host = headers().get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";

  const books = await getClippings();

  const feed = new RSS({
    title: `${process.env.NEXT_PUBLIC_USER} 的 Kindle 书摘`,
    site_url: `${protocol}://${host}`,
    feed_url: `${protocol}://${host}/feed`,
    language: "zh-cn",
    ttl: 86400,
  });

  books.forEach((book) => {
    const { title, author, id, highlights } = book;
    feed.item({
      title: `书摘 -《${title}》- ${author}`,
      url: `${protocol}://${host}/books/${id}`,
      date: dayjs(highlights.at(-1)?.time).toDate(),
      description: highlights
        .map((highlight) => {
          const note = highlight?.notes[0]?.text;
          const noteText = note
            ? `<p>【笔记：${note}】</p>`
            : "";
          return `<p>${highlight.text}${noteText}</p>`;
        })
        .join("<div>-------------------</div>"),
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "content-type": "application/xml;charset=UTF-8",
      "cache-control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
