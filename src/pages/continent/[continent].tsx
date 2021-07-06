import { GetServerSideProps } from "next";
import {
  Center,
  Text,
  Image,
  Flex,
  Box,
  HStack,
  useBreakpointValue,
  SimpleGrid,
  VStack,
  Spacer,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Kpi } from "../../components/KPI";

type Continent = {
  Continent: string;
  Name: string;
  Description: string;
  Image: string;
  Text: string;
};

interface ContinentPageProps {
  continent: Continent;
}

export default function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <Center flexDirection="column" bg="blue.200">
      <Header />
      <Image
        src={continent.Image}
        height={[150, 400]}
        width="100%"
        objectFit="cover"
      />
      <Flex
        bg="red.200"
        maxWidth={1440}
        direction="column"
        px="2"
        align={["center", "flex-start"]}
      >
        <Text
          color="gray.50"
          fontSize={["3xl", "5xl"]}
          fontWeight="bold"
          mt={[-45, -108]}
        >
          {continent.Name}
        </Text>
        <Flex direction={["column", "row"]} marginTop={["6", "20"]}>
          <Box bg="green.300" w="100%">
            <Text fontSize={[14, 24]}>{continent.Text}</Text>
          </Box>
          <Flex bg="yellow.300" w="100%" justify={["flex-start", "center"]}>
            <HStack gridGap={[2, 8]}>
              <Kpi value={50} text="países" />
              <Spacer />
              <Kpi value={50} text="países" />
              <Spacer />
              <Kpi value={27} text="cidades +100" />
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { continent } = params;

  const continentProp: Continent = {
    Continent: "europa",
    Name: "Europa",
    Description: "O continente mais antigo",
    Image: "/images/continents/europe04.jpg",
    Text: "A Europa é um continente que está localizado no hemisfério norte do globo terrestre. Compreende uma área total de 10.498.000 km2 e possui uma população de 744,7 milhões de habitantes.",
  };
  return {
    props: {
      continent: continentProp,
    },
  };
};
