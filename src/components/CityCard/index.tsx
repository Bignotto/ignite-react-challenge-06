import { Text, VStack, Box, Image, Flex } from "@chakra-ui/react";

export function CityCard() {
  return (
    <Box w="246px" h="279px" bg="blue.200">
      <VStack align="center">
        <Image
          src="/images/cities/london.jpg"
          height={173}
          width={256}
          objectFit="cover"
        />
        <Flex
          bg="yellow.400"
          direction="row"
          width="100%"
          justify="space-between"
          align="center"
          marginTop="8"
          height="100%"
        >
          <Flex direction="column" bg="green.200">
            <Text>City name</Text>
            <Text>Country</Text>
          </Flex>
          <Text>FLAG</Text>
        </Flex>
      </VStack>
    </Box>
  );
}
