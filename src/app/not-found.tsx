import { KindleHeader } from "@/components";
import { Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <KindleHeader />
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap="5"
        className="flex-1"
      >
        <Heading size="9">404</Heading>
        <Link href="/" className="hover:bg-black hover:text-white">
          返回首页
        </Link>
      </Flex>
    </>
  );
}
