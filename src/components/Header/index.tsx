import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { BackButton } from "./BackButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mt="4"
      px="6"
      align="center"
      justify="center"
    >
      <SimpleGrid columns={3} flex="1">
        <BackButton />
        <Logo />
        <Text>{` `}</Text>
      </SimpleGrid>
    </Flex>
  );
}
