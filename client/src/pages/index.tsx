import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Text,
  Spacer,
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
      h="700px"
      bgGradient="linear(to-r, #19012f, #39006f)"
      opacity={1}
      position="absolute"
      top={0}
      left={0}
      zIndex={-1}
    />
    <Box
      display={{ md: "flex" }}
      // alignItems="center"
      minHeight="70vh"
      // gap={8}
      // mb={8}
      w="full"
    >
      <Box w="full" pb={100}>
        <VStack pt={160} spacing={24} justify="center" align="center">
          {/* Header */}
          <VStack spacing={8} justify="center" align="center">
            <Heading fontSize="6xl" color="white">
              Hustle. Create. Connect.
            </Heading>
            <Button size="lg" h="60px">
              Discover your feed
            </Button>
          </VStack>

          {/* Make some space */}
          <Box h="200px" />

          {/* Collections */}
          {/* <VStack justify="center" spacing={1}>
            <Heading>Explore collections</Heading>
            <Text fontSize="lg">
              Stories and collections that inform, help and inspire. Explore our
              curations, handpicked for you.
            </Text>
            <SimpleGrid columns={3} spacing={10} pt={8}>
              {fetchedContests.map((c) => (
                <ContestCard
                  key={c.id}
                  title={c.title}
                  body={c.body}
                  header={c.header}
                  slug={c.slug}
                />
              ))}
            </SimpleGrid>
          </VStack> */}

          {/* Wallet */}
          <VStack justify="center" spacing={8} w="80%">
            <Heading>Your wallet. Your identity.</Heading>
            <Text fontSize="lg">
              We're building a social platform and marketplace powered by web3.
              You won't need a username and password. Instead, you'll use a
              self-custody crypto wallet as your digital passport to compete in
              contests, earn reputation transact and store NFTs.
            </Text>
            <HStack>
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
