import { Flex, Image, Text } from "@chakra-ui/react";

interface CategoryButtonProps {
  image: string;
  category: string;
  isWide?: boolean;
}

export function CategoryButton({
  image,
  category,
  isWide,
}: CategoryButtonProps) {
  if (isWide) {
    return (
      <Flex direction="column" alignItems="center">
        <Image src={image} w={85} />
        <Text mt="6" fontSize="md" fontWeight="bold">
          {category}
        </Text>
      </Flex>
    );
  }
  return (
    <Flex
      direction="column"
      alignItems="center"
      flexDirection="row"
      justify="center"
    >
      <Image src="/images/bullet.svg" w="3" />
      <Text mt="1" fontSize="sm" fontWeight="bold" px="2">
        {category}
      </Text>
    </Flex>
  );
}
