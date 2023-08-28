import { getClippings } from "@/utils";
import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = headers().get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";

  const books = await getClippings();

  return [
    {
      url: `${protocol}://${host}/`,
      lastModified: new Date(),
    },
    {
      url: `${protocol}://${host}/about`,
      lastModified: new Date(),
    },
  ].concat(
    books.map(({ id }) => ({
      url: `${protocol}://${host}/books/${id}`,
      lastModified: new Date(),
    }))
  );
}
