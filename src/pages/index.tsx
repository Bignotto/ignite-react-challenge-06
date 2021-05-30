import {
  Text,
  Image,
  Flex,
  Box,
  HStack,
  useBreakpointValue,
  Spacer,
  Stack,
  SimpleGrid,
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
      <Flex justifyContent="center" bgImage="/images/Background.png" w="100%">
        <HStack spacing="40" height={335}>
          <Box mx="4" maxWidth={475}>
            <Text fontSize={[30, 36]} color="gray.50">
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
      <Flex w="100%" maxW={1440} justifyContent="center" mt={[8, 20]}>
        <SimpleGrid
          columns={[2, 5]}
          spacing={[10, 24]}
          p="3"
          w="100%"
          maxWidth={1000}
        >
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
            category="e mais..."
            image="/images/earth.svg"
            isWide={isWide}
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

/**
         <Stack direction={isWide ? "row" : "column"} spacing={[12, 36]}>
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
            category="e mais..."
            image="/images/earth.svg"
            isWide={isWide}
          />
        </Stack>
 */
