import "./globals.css";
import type { Metadata } from "next";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { KindleContainer } from "@/components";

export const metadata: Metadata = {
  title: "moon 的 Kindle",
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
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <KindleContainer>{children}</KindleContainer>
          </main>
        </Theme>
      </body>
    </html>
  );
}
