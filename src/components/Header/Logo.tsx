import { Image, Flex, Center } from "@chakra-ui/react";

export function Logo() {
  return (
    <Center>
      <Image src="/images/Logo.svg" w={[81, 184]} objectFit="contain" />
    </Center>
  );
}
