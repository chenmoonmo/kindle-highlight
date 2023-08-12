import { KindleHeader, KindleSubHeader } from "@/components";
import { Button, Flex, Text, TextFieldInput } from "@radix-ui/themes";

export default function About() {
  return (
    <>
      <KindleHeader />
      <KindleSubHeader title="关于" />
      <Flex direction="column" p="8" gap="4">
      </Flex>
    </>
  );
}
