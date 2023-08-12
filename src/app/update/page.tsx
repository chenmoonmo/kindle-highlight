import { KindleHeader, KindleSubHeader } from "@/components";
import { Button, Flex, Text, TextFieldInput } from "@radix-ui/themes";

export default function Update() {
  return (
    <>
      <KindleHeader />
      <KindleSubHeader title="更新我的书摘" />
      <Flex direction="column" p="8" gap="4"></Flex>
    </>
  );
}
