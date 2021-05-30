import {
  Text,
  Image,
  Flex,
  Box,
  HStack,
  useBreakpointValue,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { CategoryButton } from "../components/CategoryButton";
import { Header } from "../components/Header";

export default function Home() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex align="center" direction="column">
      <Header />
      {/* <Image src="/images/Background.png" objectFit="cover" w="100%" h={335} /> */}
      <Flex justifyContent="center">
        <HStack spacing="40">
          <Box bgImage="/images/Background.png">
            <Text fontSize={36} color="gray.50">
              5 Continentes, infinitas
              <br />
              possibilidades.
            </Text>
            <Text fontSize={20} color="gray.50">
              Chegou a hora de tirar do papel
              <br />a viagem que você sempre sonhou.
            </Text>
          </Box>
          {isWide && (
            <Box>
              <Image
                src="/images/Airplane.png"
                objectFit="contain"
                maxW={417}
              />
            </Box>
          )}
        </HStack>
      </Flex>
      <Flex w="100%" maxW={1440} justifyContent="center" mt="20">
        <Stack direction={isWide ? "row" : "column"} spacing="36">
          <CategoryButton
            category="vida noturna"
            image="/images/cocktail.svg"
            isWide={isWide}
          />
          <CategoryButton
            category="praia"
            image="/images/surf.svg"
            isWide={isWide}
          />
          <CategoryButton
            category="moderno"
            image="/images/building.svg"
            isWide={isWide}
          />
          <CategoryButton
            category="clássico"
            image="/images/museum.svg"
            isWide={isWide}
          />
          <CategoryButton
            category="e mais"
            image="/images/earth.svg"
            isWide={isWide}
          />
        </Stack>
      </Flex>
    </Flex>
  );
}
