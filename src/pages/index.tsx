import {
  Text,
  Image,
  Flex,
  Box,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });

  console.log(isWide);
  return (
    <>
      <Header />
      <Image src="/images/Background.png" objectFit="cover" h="100%" />
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
    </>
  );
}
