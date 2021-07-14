import { useRouter } from "next/router";
import { Flex, HStack, Text, Button } from "@chakra-ui/react";
import { BackButton } from "./BackButton";
import { Logo } from "./Logo";

export function Header() {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.back();
  };

  return (
    <Flex w={1100} h="20" mt="4" px="6" justify="center" align="center">
      <HStack w="100%" justifyContent="space-between">
        {router.asPath === "/" ? (
          <Text>{` `}</Text>
        ) : (
          <Button variant="link" onClick={handleClick}>
            <BackButton />
          </Button>
        )}
        <Logo />
        <Text>{` `}</Text>
      </HStack>
    </Flex>
  );
}
