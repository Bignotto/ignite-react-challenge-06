import { GetServerSideProps } from "next";
import {
  Center,
  Text,
  Image,
  Flex,
  Box,
  HStack,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Kpi } from "../../components/KPI";
import { CityCard } from "../../components/CityCard";
import { api } from "../../services/api";

type City = {
  id: number;
  city: string;
  country: string;
  arrivals: number;
  continent: string;
  continentId: number;
  code: string;
  flag: string;
};

type Continent = {
  id: number;
  imageUrl: string;
  continent: string;
  name: string;
  description: string;
  qtdCountries: number;
  text: string;
  cities: City[];
};

interface ContinentPageProps {
  continent: Continent;
}

export default function ContinentPage({ continent }: ContinentPageProps) {
  console.log(continent.cities);
  return (
    <Center flexDirection="column">
      <Header />
      <Image
        src={continent.imageUrl}
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
          {continent.name}
        </Text>
        <Flex direction={["column", "row"]} marginTop={["10", "20"]}>
          <Box w="100%">
            <Text fontSize={[14, 24]}>{continent.text}</Text>
          </Box>
          <Flex
            w="100%"
            justify={["flex-start", "center"]}
            marginTop={["6", "4"]}
          >
            <HStack gridGap={[2, 8]}>
              <Kpi value={continent.qtdCountries} text="países" />
              <Spacer />
              <Kpi value={78} text="idiomas" />
              <Spacer />
              <Kpi value={continent.cities.length} text="cidades +100" />
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
          {continent.cities.map(city => (
            <CityCard
              key={city.id}
              name={city.city}
              country={city.country}
              cityImageUrl="/images/cities/london.jpg"
              flagUrl={city.flag.toLocaleLowerCase()}
            />
          ))}
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
  const response = await api.get(
    `/continents?continent=${continent}&_embed=cities`
  );
  const continentData: Continent = response.data;
  return {
    props: {
      continent: continentData[0],
    },
  };
};
