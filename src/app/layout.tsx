import "./globals.css";
import type { Metadata } from "next";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { KindleContainer } from "@/components";
import { Provider } from "./provider";
import "./theme-config.css";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
  description: `${process.env.NEXT_PUBLIC_USER} 的 Kindle 笔记。`,
  twitter: {
    card: "summary",
    title: `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
    description: `${process.env.NEXT_PUBLIC_USER} 的 Kindle 笔记。`,
  },
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
    description: `${process.env.NEXT_PUBLIC_USER} 的 Kindle 笔记。`,
    type: "website",
    locale: "zh_CN",
  },
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
