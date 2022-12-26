import { Divider, Flex, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { ContinentSlide } from "../components/ContinentSlide";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TravelTypes } from "../components/TravelTypes";
import { api } from "../services/api";

interface Continent {
  id: string;
  name: string;
  shortDescription: string;
  continentImage: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Header />
      <Hero />
      <Flex as="main" direction="column" maxWidth="1160px" w="100%" justify="center" mx="auto">
        <TravelTypes />
        <Divider mt="20" w="90px" mx="auto" borderWidth="2px" borderColor="dark.text" mb="3.25rem"/>

        <Text textAlign="center" fontSize="3.25rem" fontWeight="500" >
          Vamos nessa? <br/>
          Então escolha seu continente
        </Text>

        <ContinentSlide continents={continents}/>
      </Flex>
      
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(process.env.NEXT_API_URL!)

  const continents = response.data.map((continent: any) => {
    return {
      id: continent.id,
      name: continent.name,
      shortDescription: continent.shortDescription,
      continentImage: continent.continentImage,
    }
  })

  return {
    props: {
      continents,
    }
  }
}