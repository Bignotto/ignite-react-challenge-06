import { Flex, Image, Text } from "@chakra-ui/react";

interface CategoryButtonProps {
  image: string;
  category: string;
}

export function CategoryButton({ image, category }: CategoryButtonProps) {
  return (
    <Flex direction="column" alignItems="center">
      <Image src={image} w={85} />
      <Text mt="6" fontSize="md" fontWeight="bold">
        {category}
      </Text>
    </Flex>
  );
}
