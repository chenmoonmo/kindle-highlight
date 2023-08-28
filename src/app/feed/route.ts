import { getClippings } from "@/utils";
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
    const { title, author, id } = book;
    feed.item({
      title: `「${title} - ${author}」的书摘`,
      url: `${protocol}://${host}/books/${id}`,
      date: new Date().toUTCString(),
      description: book.highlights
        .map((highlight) => highlight.text)
        .join("\n"),
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "content-type": "application/xml;charset=UTF-8",
      "cache-control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
