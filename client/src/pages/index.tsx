import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";

import { queryClient } from "api";
import ContestCard from "components/contest/ContestCard";
import { GetContestsDocument } from "generated/graphql";
import { BiWalletAlt } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";

/*
export async function getServerSideProps(context) {
  const { data } = await queryClient.query({
    query: GetContestsDocument,
  });

  if (data.getContests) {
    return {
      props: {
        fetchedContests: data.getContests,
      },
    };
  }
  return {
    notFound: true,
  };
}
*/

const HomePage = () => (
  <>
    <Box
      w="full"
      h="1000px"
      backgroundImage="/b-blur.png"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      opacity={1}
      position="absolute"
      top={0}
      left={0}
      zIndex={-1}
    />
    <Box display={{ md: "flex" }} minHeight="70vh" w="full">
      <Box w="full" pb={100}>
        <VStack pt={160} spacing={24} justify="center" align="center">
          {/* Header */}
          <HStack spacing={8}>
            <VStack spacing={24} justify="center" align="center" w="50%">
              <Heading color="black" fontSize="4xl">
                BALENCIAGA: CYBERNATION
              </Heading>
              <Heading color="black" textAlign={"center"} fontSize="2xl">
                A new contest arrives from CYBER, a dystopian take on fashion
                and day-to-day life.
              </Heading>
              <Heading color="black" size="lg">
                LEARN MORE
              </Heading>
            </VStack>
            <Image
              src={"b-home.jpg"}
              // width={"50%"}
              height={400}
              rounded="40"
              fit="cover"
              align="center"
              boxShadow="2xl"
            />
          </HStack>

          {/* Make some space */}
          <Box h="50px" />

          {/* How it works */}
          <VStack justify="center" spacing={16} w="80%" pt={300}>
            <Heading>HOW IT WORKS</Heading>
            <HStack spacing={24}>
              <VStack spacing={8} w={300} align="center" justify={"center"}>
                <Image src={"team.svg"} height={250} />
                <Text fontSize={"xl"} textAlign="center">
                  Nexbase Contests provide a framework for brands and creators
                  to collaborate on utility-first NFT collections.
                </Text>
              </VStack>
              <VStack spacing={8} w={300} align="center" justify={"center"}>
                <Image src={"market.svg"} height={250} />
                <Text fontSize={"xl"} textAlign="center">
                  At the end of a contest, a new storefront is generated where
                  the crowdsourced collection becomes available for minting.
                </Text>
              </VStack>
              <VStack spacing={8} w={300} align="center" justify={"center"}>
                <Image src={"winners.svg"} height={250} />
                <Text fontSize={"xl"} textAlign="center">
                  For the first time, brands and fans can be partners in the
                  ownership of the content. When brands win, everyone wins.
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* Wallet */}
          <VStack justify="center" spacing={16} w="80%" pt={250}>
            <Heading>YOUR WALLET. YOUR IDENTITY</Heading>
            <Text fontSize="xl">
              We're building a web3 social platform and marketplace for the next
              generation of brands and creators. You won't need a username and
              password. Instead, you'll use a self-custody crypto wallet as your
              digital passport to join contests, earn reputation, transact and
              store NFTs.
            </Text>
            <HStack spacing={8}>
              <Button
                size="lg"
                h="60px"
                bg="purple.700"
                color="white"
                leftIcon={<BiWalletAlt />}
              >
                Get Phantom Wallet
              </Button>
              <Button size="lg" h="60px" leftIcon={<FaBookReader />}>
                Learn More
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  </>
);

export default HomePage;
