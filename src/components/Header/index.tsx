import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { BackButton } from "./BackButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as="header"
      maxWidth={1440}
      h="20"
      mt="4"
      px="6"
      align="center"
      justify="center"
    >
      <SimpleGrid columns={3} flex="1" w="100%">
        <BackButton />
        <Logo />
        <Text>{` `}</Text>
      </SimpleGrid>
    </Flex>
  );
}
