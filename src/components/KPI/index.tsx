import { Text, VStack } from "@chakra-ui/react";

type KpiProps = {
  value: number;
  text: string;
};

export function Kpi({ value, text }: KpiProps) {
  return (
    <VStack>
      <Text color="orange.500" fontSize={["3xl", "5xl"]}>
        {value}
      </Text>
      <Text color="gray.600" fontSize={["2xl", "3xl"]}>
        {text}
      </Text>
    </VStack>
  );
}
