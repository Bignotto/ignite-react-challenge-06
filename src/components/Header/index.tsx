import { Flex } from "@chakra-ui/react";
import { BackButton } from "./BackButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <BackButton />
      <Logo />
    </Flex>
  );
}
