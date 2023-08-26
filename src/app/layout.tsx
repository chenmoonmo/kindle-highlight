import "./globals.css";
import "./theme-config.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { headers } from "next/headers";
import { KindleContainer } from "@/components";
import { Provider } from "./provider";

export const generateMetadata = async () => {
  const host = headers().get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const metadataBase = new URL(`${protocol}://${host}`);
  return {
    metadataBase,
    title: {
      template: `%s | ${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
      default: `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
    },
    description: `${process.env.NEXT_PUBLIC_USER} 的 Kindle 笔记。`,
    twitter: {
      card: "summary_large_image",
      title: `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
      description: `${process.env.NEXT_PUBLIC_USER} 的 Kindle 笔记。`,
    },
    openGraph: {
      title: `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
      description: `${process.env.NEXT_PUBLIC_USER} 的 Kindle 笔记。`,
      type: "website",
      locale: "zh_CN",
      url: "/",
    },
    icons: "/favicon.png",
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Provider>
            <main className="flex flex-col items-center justify-between sm:p-24">
              <KindleContainer>{children}</KindleContainer>
            </main>
          </Provider>
        </Theme>
      </body>
    </html>
  );
}
