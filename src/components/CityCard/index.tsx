import { Text, VStack, Box, Image, Flex } from "@chakra-ui/react";

export function CityCard() {
  return (
    <Box
      w="246px"
      h="279px"
      overflow="hidden"
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
    >
      <Flex direction="column" align="center" gridGap="0">
        <Image
          src="/images/cities/london.jpg"
          height={173}
          width={256}
          objectFit="cover"
        />
        <Flex
          direction="row"
          width="100%"
          height="106px"
          justify="space-between"
          align="center"
          borderBottomRightRadius="lg"
          borderBottomLeftRadius="lg"
          borderLeftColor="orange.500"
          borderBottomColor="orange.500"
          borderRightColor="orange.500"
          borderWidth="1px"
          overflow="hidden"
          px="3"
        >
          <Flex direction="column">
            <Text>London</Text>
            <Text>United Kingdom</Text>
          </Flex>
          <Image
            src={`https://restcountries.eu/data/GBR.svg`.toLowerCase()}
            borderRadius="full"
            boxSize="30px"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
