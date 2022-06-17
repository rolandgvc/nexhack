import {
  Box,
  Button,
  Center,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { queryClient } from "api";
import ContestCard from "components/contest/ContestCard";
import ContestCarousel from "components/contest/ContestCarousel";
import { GetContestsDocument } from "generated/graphql";

export async function getServerSideProps(context) {
  const { uid } = context.query;
  const { data } = await queryClient.query({
    query: GetContestsDocument,
    variables: { username: uid },
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

const MarketplacePage = ({ fetchedContests }) => {
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
        Explore Marketplace
      </Heading>

      {/* Tabs */}
      <Tabs align="center">
        <TabList>
          <Tab>Our Picks</Tab>
          <Tab>Trending</Tab>
          <Tab>Art</Tab>
          <Tab>Music</Tab>
          <Tab>Photography</Tab>
          <Tab>Sports</Tab>
          <Tab>Trading Cards</Tab>
          <Tab>Utility</Tab>
          <Tab>Metaverse</Tab>

          {/* Collections */}
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={3} spacing={10} pt={12}>
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
          </TabPanel>

          <TabPanel>
            <SimpleGrid columns={3} spacing={10} pt={12}>
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
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Center p={100}>
        <Button size="lg" onClick={createContest}>
          {" "}
          Create Collection
        </Button>
      </Center>
    </Box>
  );
};

export default MarketplacePage;
