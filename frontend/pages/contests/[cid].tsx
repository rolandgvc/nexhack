import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import { ImTicket } from "react-icons/im";

import { queryClient } from "api";
import { GetContestDocument } from "generated/graphql";

export async function getServerSideProps(context) {
  const { cid } = context.query;

  const { data } = await queryClient.query({
    query: GetContestDocument,
    variables: { contestId: cid },
  });

  if (data.getContest) {
    return {
      props: {
        fetchedContest: data.getContest,
      },
    };
  }
  return {
    notFound: true,
  };
}

const ContestPage = ({ fetchedContest }) => {
  return (
    <Container maxW="7xl">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded="md"
            alt="product image"
            src={fetchedContest.header}
            fit="cover"
            align="center"
            w="100%"
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as="header">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {fetchedContest.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize="xl"
            >
              ending on 15 June (3 weeks remaining)
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction="column"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize="2xl"
                fontWeight="300"
              >
                {fetchedContest.body}
              </Text>
              <Text fontSize="lg">{fetchedContest.body}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight="500"
                textTransform="uppercase"
                mb="4"
              >
                PRIZES
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>1st place</ListItem>
                  <ListItem>2nd place</ListItem>
                  <ListItem>3rd place</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>600 USDC + 5 NFT Lootboxes</ListItem>
                  <ListItem>300 USDC + 3 NFT Lootboxes</ListItem>
                  <ListItem>100 USDC + 1 NFT Lootbox</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight="500"
                textTransform="uppercase"
                mb="4"
              >
                CONTEST RULES
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as="span" fontWeight="bold">
                    Submissions:
                  </Text>{" "}
                  We accept submissions from teams up to 5 members. The
                  submitted NFTs have to be co-owned by the team members for the
                  correct automated reward distribution. No more than one
                  submission per team!
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Button
            leftIcon={<ImTicket />}
            borderRadius="lg"
            w="full"
            mt={8}
            size="lg"
            py="7"
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform="uppercase"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            CLAIM NFT
          </Button>
          <Button
            leftIcon={<FaDiscord />}
            borderRadius="lg"
            w="full"
            mt={8}
            size="lg"
            py="7"
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform="uppercase"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            JOIN THE SERVER
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ContestPage;
