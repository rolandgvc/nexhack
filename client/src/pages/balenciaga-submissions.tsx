import {
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Button,
} from "@chakra-ui/react";

import { queryClient } from "api";
import SubmissionCard from "components/contest/SubmissionCard";
import { GetNfTsDocument } from "generated/graphql";

export const getServerSideProps = async () => {
  const { data } = await queryClient.query({
    query: GetNfTsDocument,
  });

  if (data.getNFTs) {
    return {
      props: { fetchedNFTs: data.getNFTs },
    };
  }
  return {
    notFound: true,
  };
};

const BalenciagaSubmissions = ({ fetchedNFTs }) => {
  return (
    <Box alignItems="center" minHeight="70vh" mt={50} mb={10} w="full">
      <Heading fontSize="3xl">Contest Entries</Heading>
      <VStack spacing={8} justify="center" align="center" pt={10}>
        {fetchedNFTs.map((nft) => (
          <SubmissionCard
            key={nft.id}
            image={nft.image}
            title={nft.title}
            description={nft.description}
            creators={nft.addresses}
            shares={nft.shares}
            timestamp={nft.timestamp}
          />
        ))}
      </VStack>
      <Center p={20}>
        <Button fontSize={"2xl"} p={8}>
          Mint Collection
        </Button>
      </Center>
    </Box>
  );
};

export default BalenciagaSubmissions;
