import { Image, Box } from "@chakra-ui/react";

export function Logo() {
  return (
    <Box>
      <Image src="/images/Logo.svg" boxSize={[150, 188]} objectFit="contain" />
    </Box>
  );
}
