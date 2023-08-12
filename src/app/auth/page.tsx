import { KindleHeader, KindleSubHeader } from "@/components";
import { Button, Flex, Text, TextFieldInput } from "@radix-ui/themes";

export default function AuthPage() {
  return (
    <>
      <KindleHeader />
      <KindleSubHeader title="登录" />
      <Flex direction="column" p="6" gap="4">
        <Flex direction="column" gap="1" asChild>
          <label>
            <Text size="1" weight="bold">电子邮箱</Text>
            <TextFieldInput size="2"></TextFieldInput>
          </label>
        </Flex>
        <Flex direction="column" gap="1" asChild>
          <label>
          <Text size="1" weight="bold">用户名</Text>

            <TextFieldInput size="2"></TextFieldInput>
          </label>
        </Flex>
        <Flex direction="column" gap="1" asChild>
          <label>
            <Text size="1" weight="bold">密码</Text>
            <TextFieldInput size="2" type="password"></TextFieldInput>
          </label>
        </Flex>
        <Button>登录</Button>
      </Flex>
    </>
  );
}
