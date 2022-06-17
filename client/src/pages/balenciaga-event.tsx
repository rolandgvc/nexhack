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
  Image,
  List,
  Input,
  ListItem,
  useColorModeValue,
  Stack,
  ListIcon,
} from "@chakra-ui/react";


import { queryClient } from "api";
import ContestCard from "components/contest/ContestCard";
import ContestFeature from "components/contest/ContestFeature";

import react, { ReactNode } from "react";
import { BiWalletAlt } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";

import { FaCheckCircle } from 'react-icons/fa';

const BalenciagaEvent = () => {
  return (
    <>
      <Box
        w="full"
        h="700px"
        // bgGradient="linear(to-r, #19012f, #39006f)"
        backgroundImage="/balenciaga-home.png"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        opacity={1}
        position="absolute"
        top={0}
        left={0}
        zIndex={-1} />

      <Box h="580px" />

      <Box
        display={{ md: "flex" }}
        alignItems="center"
        // minHeight="70vh"
        backgroundColor="black"
        w="full"
      >
        <Box w="full" pb={275} pt={275}>
          <VStack spacing={24} justify="center" align="center">
            <VStack spacing={8} justify="center" align="center">
              <Heading fontSize="6xl" color="white">
                BALENCIAGA
              </Heading>
              <Text color="white">
                Disbounded worlds. Apart. Frantic exposure.
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Box>

      <Box
        alignItems="center"
        minHeight="70vh"
        mt={-100}
        mb={8}
        w="full"
        zIndex="1"
        top="-100px"
        pb="-100"
      >
        <VStack spacing={8} justify="center" align="center">
          <HStack spacing={-10} alignItems="center">
            <ContestFeature
              key={"aa"}
              title={"aa"}
              body={"aa"}
              header={"/BA_0.png"}
              slug={"aa"}
              zIndex={"0"}
              mt={"10"} />

            <ContestFeature
              key={"aa"}
              title={"aa"}
              body={"aa"}
              header={"/BA_1.png"}
              slug={"aa"}
              zIndex={"1"}
              mt={"30"}
              isFeatured={"1"} />

            <ContestFeature
              key={"aa"}
              title={"aa"}
              body={"aa"}
              header={"/BA_2.png"}
              slug={"aa"}
              zIndex={"0"}
              mt={"10"} />

          </HStack>
        </VStack>

      </Box>

      <Box
        alignItems="center"
        minHeight="70vh"
        mt={-100}
        mb={8}
        w="full"
        zIndex="1"
        top="-100px"
        pb="-100"
      >
        <Box w="full" pb={275} pt={275}>
          <VStack spacing={24} justify="center" align="center">
            <VStack spacing={8} justify="center" align="center">
              <Heading fontSize="6xl" color="black">
                Expand the lore with your NFTs.
              </Heading>
              <Text color="black">
                Disbounded worlds. Apart. Frantic exposure.
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Box>

      <Box
        alignItems="center"
        minHeight="120vh"
        mt={-100}
        mb={8}
        w="full"
        zIndex="0"
        top="-100px"
        pb="-100"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        bgImage={"/BA_3_NEX.png"}
      >
      </Box>

      <Box
        alignItems="center"
        minHeight="70vh"
        mt={-100}
        mb={8}
        w="full"
        zIndex="1"
        top="-100px"
        pb="-100"
        bgColor={"black"}
      >
        <Box w="full" pb={275} pt={275}>
          <VStack spacing={24} justify="center" align="center">
            <Heading fontSize="6xl" color="white">Enter our legacy</Heading>
            <VStack spacing={5} justify="center" align="left">
              <HStack width={"1hv"}>
                <Text color="white" width={"20em"}>Tell us your email address</Text>
                <Input placeholder='example@nexbase.com' />
              </HStack>
              <HStack width={"1hv"}>
                <Text color="white" width={"20em"}>Show us your artwork</Text>
                <Input placeholder='https://opensea.io/assets/nexbase' />
              </HStack>
              <Box align={"center"} pt="10">
                <Button size="lg" h="60px">
                  Join the waitlist
                </Button>
              </Box>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default BalenciagaEvent;
