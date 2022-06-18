import {
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import { queryClient } from "api";
import SubmissionCard from "components/contest/SubmissionCard";
import ContestFeature from "components/contest/ContestFeature";

const renderContent = () => {
  let content = [];
  for (let i = 0; i < 12; i++) {
    content.push(
      <SubmissionCard
        key={i}
        title={"A new dawn #0001"}
        body={
          "In the chaos, corporations fill the vacuum of power amidst a collapsing social order. Technological advances, unbridled from government oversight or ethical limitations, lead to hundreds of new inventions. As time wears on, some corporations become as powerful as the countries they are housed in. Ultimately, four corporate wars have occurred by 2023, each one becoming more overt and deadly than the last. "
        }
        header={"/BA_0.png"}
        slug={"aa"}
      />
    );
  }
  return content;
};

const BalenciagaSubmissions = () => {
  return (
    <Box alignItems="center" minHeight="70vh" mt={50} mb={10} w="full">
      <Heading fontSize="3xl">Contest Entries</Heading>
      <VStack spacing={8} justify="center" align="center" pt={10}>
        {renderContent()}
      </VStack>
    </Box>
  );
};

export default BalenciagaSubmissions;
