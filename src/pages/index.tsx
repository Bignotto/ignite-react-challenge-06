import {
  Text,
  Image,
  Flex,
  Box,
  HStack,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";
import { CategoryButton } from "../components/CategoryButton";
import { Header } from "../components/Header";

export default function Home() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w="100vw" h="100vh" align="center" direction="column">
      <Header />
      <Image src="/images/Background.png" objectFit="cover" w="100%" h={335} />
      <Flex mt={-250} maxW={1440} justifyContent="center">
        <HStack>
          <Box maxW={500}>
            <Text fontSize={36} color="gray.50">
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text fontSize={20} color="gray.50">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
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
        <HStack spacing="36">
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
        </HStack>
      </Flex>
    </Flex>
  );
}
