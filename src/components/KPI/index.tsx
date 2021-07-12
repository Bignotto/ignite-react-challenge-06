import { Text, VStack, Box } from "@chakra-ui/react";

type KpiProps = {
  value: number;
  text: string;
};

export function Kpi({ value, text }: KpiProps) {
  return (
    <VStack align={["flex-start", "center"]}>
      <Box>
        <Text color="orange.500" fontSize={["3xl", "5xl"]} lineHeight="shorter">
          {value}
        </Text>
      </Box>
      <Box>
        <Text
          color="gray.600"
          fontSize={["xl", "2xl"]}
          lineHeight="shorter"
          fontWeight={["normal", "bold"]}
        >
          {text}
        </Text>
      </Box>
    </VStack>
  );
}
