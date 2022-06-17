import {
  Box,
  Button,
  Center,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { queryClient } from "api";
import ContestCard from "components/contest/ContestCard";
import ContestCarousel from "components/contest/ContestCarousel";
import { GetContestsDocument } from "generated/graphql";

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

const ContestsPage = ({ fetchedContests }) => {
  const router = useRouter();

  const createContest = () => {
    console.log("createContest");
    router.push("/contests/new-contest");
  };

  return (
    <Box
      // display={{ md: "flex" }}
      // alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <Heading textAlign="center" pb="50px">
        Explore Contests
      </Heading>

      {/* Featured Contests */}
      <ContestCarousel />

      {/* Active Contests */}
      <Heading size="lg" pt="100px">
        ⏳ Active Contests
      </Heading>
      <SimpleGrid columns={3} spacing={10} pt={6}>
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

      <Center p={100}>
        <Button size="lg" onClick={createContest}>
          {" "}
          Create Contest
        </Button>
      </Center>
    </Box>
  );
};

export default ContestsPage;
