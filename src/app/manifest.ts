import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${process.env.NEXT_PUBLIC_USER} 的 Kindle 书摘`,
    short_name: `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
    description: `${process.env.NEXT_PUBLIC_USER} 的 Kindle 书摘`,
    start_url: "/",
    display: "standalone",
    background_color: "#fffffd",
    theme_color: "#fffffd",
    icons: [
      {
        src: "/favicon.png",
        type: "image/png",
        sizes: "any",
      },
    ],
  };
}
