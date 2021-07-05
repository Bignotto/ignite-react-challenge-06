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
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

import { Header } from "../../components/Header";

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
      <Flex bg="red.200" maxWidth={1440} direction="column">
        <Text
          color="gray.50"
          fontSize={["3xl", "7xl"]}
          fontWeight="bold"
          mt={-100}
        >
          {continent.Name}
        </Text>
        <Flex direction={["column", "row"]}>
          <Box bg="green.300" w="100%">
            <Text fontSize={[14, 24]}>{continent.Text}</Text>
          </Box>
          <Box bg="yellow.300" w="100%" height={300}></Box>
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

/*
    <>
      <Flex direction="column" justifyContent="center" bg="blue.200">
        <Header />
        <Image
          src={continent.Image}
          height={500}
          width="100%"
          objectFit="cover"
        />

        <Flex mt={-100} alignItems="flex-start">
          <Text color="gray.50" fontSize={["3xl", "7xl"]} fontWeight="bold">
            {continent.Name}
          </Text>
        </Flex>
        <Flex bg="gray.100" maxWidth="1440" justifyContent="center">
          <Text fontSize={14} px="4" py="6">
            {continent.Text}
          </Text>
        </Flex>
      </Flex>
    </>
*/
