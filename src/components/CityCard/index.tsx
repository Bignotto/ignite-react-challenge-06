import { Text, VStack, Box, Image, Flex } from "@chakra-ui/react";

interface CityCardProps {
  name: string;
  country: string;
  flagUrl: string;
  cityImageUrl: string;
}

export function CityCard({
  name,
  country,
  flagUrl,
  cityImageUrl,
}: CityCardProps) {
  return (
    <Box
      w="246px"
      h="279px"
      overflow="hidden"
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
    >
      <Flex direction="column" align="center" gridGap="0">
        <Image src={cityImageUrl} height={173} width={256} objectFit="cover" />
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
            <Text>{name}</Text>
            <Text>{country}</Text>
          </Flex>
          <Image
            src={flagUrl.toLowerCase()}
            borderRadius="full"
            boxSize="30px"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
