import { GetServerSideProps } from "next";
import {
  Text,
  Image,
  Flex,
  Box,
  HStack,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";

type Continent = {
  Continent: string;
  Name: string;
  Description: string;
};

interface ContinentPageProps {
  continent: Continent;
}

export default function ContinentPage({ continent }: ContinentPageProps) {
  return (
    <>
      <Header />

      <Text fontSize="larger">This is {continent.Name} page!</Text>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { continent } = params;

  const continentProp: Continent = {
    Continent: "europa",
    Name: String(continent),
    Description: "O continente mais antigo",
  };
  return {
    props: {
      continent: continentProp,
    },
  };
};
