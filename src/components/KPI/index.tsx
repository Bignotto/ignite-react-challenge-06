import { Text, VStack, Box, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

type KpiProps = {
  value: number;
  text: string;
  info?: string;
};

export function Kpi({ value, text, info }: KpiProps) {
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
          {`${text}  `}
          {info && (
            <Tooltip label={info}>
              <InfoOutlineIcon />
            </Tooltip>
          )}
        </Text>
      </Box>
    </VStack>
  );
}
