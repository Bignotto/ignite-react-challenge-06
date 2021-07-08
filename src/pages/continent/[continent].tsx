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
import { CityCard } from "../../components/CityCard";

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
    <Center flexDirection="column">
      <Header />
      <Image
        src={continent.Image}
        height={[150, 400]}
        width="100%"
        objectFit="cover"
      />
      <Flex
        maxWidth={1159}
        direction="column"
        px="2"
        align={["center", "flex-start"]}
      >
        <Text
          color="gray.50"
          fontSize={["3xl", "5xl"]}
          fontWeight="bold"
          mt={[-75, -108]}
        >
          {continent.Name}
        </Text>
        <Flex direction={["column", "row"]} marginTop={["10", "20"]}>
          <Box w="100%">
            <Text fontSize={[14, 24]}>{continent.Text}</Text>
          </Box>
          <Flex
            w="100%"
            justify={["flex-start", "center"]}
            marginTop={["6", "4"]}
          >
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
      <Flex
        align="flex-start"
        width="100%"
        maxWidth={1159}
        marginTop={["10", "20"]}
        px="2"
      >
        <Text color="gray.600" fontSize={["xl", "4xl"]}>
          Cidades +100
        </Text>
      </Flex>
      <Flex justify="center" width="100%" maxWidth={1159} marginTop="10" px="2">
        <SimpleGrid columns={[1, 4]} spacing="45px">
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </SimpleGrid>
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
