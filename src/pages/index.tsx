import {
  Text,
  Image,
  Flex,
  Box,
  HStack,
  useBreakpointValue,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

import Link from "next/link";

import { CategoryButton } from "../components/CategoryButton";
import { Header } from "../components/Header";
import { GetServerSideProps } from "next";
import { api } from "../services/api";

type Continent = {
  id: number;
  Name: string;
  Description: string;
  Continent: string;
  imageUrl: string;
};

interface HomeProps {
  continents: Continent[];
}

SwiperCore.use([Navigation]);

export default function Home({ continents }: HomeProps) {
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex align="center" direction="column">
      <Header />
      {/* <Image src="/images/Background.png" objectFit="cover" w="100%" h={335} /> */}
      <Flex justifyContent="center" bgImage="/images/Background.png" w="100%">
        <HStack spacing="40" height={335}>
          <Box mx="4" maxWidth={475}>
            <Text fontSize={[30, 36]} color="gray.50">
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text fontSize={20} color="gray.50">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          {isWide && (
            <Box>
              <Image
                src="/images/Airplane.png"
                objectFit="contain"
                maxW={417}
              />
            </Box>
          )}
        </HStack>
      </Flex>
      <Flex w="100%" maxW={1440} justifyContent="center" mt={[8, 20]}>
        <SimpleGrid
          columns={[2, 5]}
          spacing={[10, 24]}
          p="3"
          w="100%"
          maxWidth={1000}
          justifyContent="space-between"
        >
          <CategoryButton
            category="vida noturna"
            image="/images/cocktail.svg"
            isWide={isWide}
          />
          <CategoryButton
            category="praia"
            image="/images/surf.svg"
            isWide={isWide}
          />
          <CategoryButton
            category="moderno"
            image="/images/building.svg"
            isWide={isWide}
          />
          <CategoryButton
            category="clássico"
            image="/images/museum.svg"
            isWide={isWide}
          />
          <CategoryButton
            category="e mais..."
            image="/images/earth.svg"
            isWide={isWide}
          />
        </SimpleGrid>
      </Flex>
      <Box w="80px" h="0.5" bg="gray.600" mt="10"></Box>
      <Flex mt="10" align="center" flexDirection="column">
        <Text mt="2" fontSize={["xl", "3xl"]}>
          Vamos nessa?
        </Text>
        <Text mt="2" fontSize={["xl", "3xl"]}>
          Então escolha seu continente
        </Text>
      </Flex>

      <Flex w="100%" maxWidth="1240px" mx="auto" h={["250px", "450px"]} mt="10">
        <Swiper
          slidesPerView={1} // uma imagem exibida somente
          navigation
          pagination={{ clickable: true }}
          style={{ width: "100%", flex: "1" }}
        >
          {continents.map(continent => (
            <SwiperSlide key={continent.id}>
              <ChakraLink as={Link} href={`/continent/${continent.Continent}`}>
                <Flex
                  bgSize="cover"
                  w="100%"
                  h="100%"
                  alignItems="center"
                  justify="center"
                  direction="column"
                  position="relative"
                >
                  <Image src={continent.imageUrl} />
                  <Box position="absolute">
                    <Text
                      color="green.50"
                      fontSize={["3xl", "7xl"]}
                      fontWeight="bold"
                    >
                      {continent.Name}
                    </Text>
                    <Text color="green.50" fontSize={["1xl", "4xl"]}>
                      {continent.Description}
                    </Text>
                  </Box>
                </Flex>
              </ChakraLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await api.get("/continents");

  const continents: Continent[] = response.data;

  return {
    props: {
      continents,
    },
  };
};
