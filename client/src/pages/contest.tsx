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

import { FaCheckCircle } from "react-icons/fa";

const BalenciagaEvent = () => (
  <>
    <Box
      w="full"
      h="1000px"
      // bgGradient="linear(to-r, #19012f, #39006f)"
      backgroundImage="/b-home.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="absolute"
      top={0}
      left={0}
      zIndex={-1}
    />

    <Box h="1000px" />

    <Box
      w="full"
      display={{ md: "flex" }}
      backgroundColor="black"
      alignItems="center"
      h="1200px"
      // bgGradient="linear(to-r, #19012f, #39006f)"
      position="absolute"
      top={1000}
      left={0}
      zIndex={-1}
    />

    <Box w="full" display={{ md: "flex" }} alignItems="center">
      <Box h="690px" />

      <Box w="full">
        <Center>
          <Heading fontSize="4xl" color="white">
            Disbounded worlds. Apart. Frantic exposure.
          </Heading>
        </Center>
      </Box>
    </Box>

    {/* Images */}
    <VStack spacing={8} justify="center" align="center">
      <HStack spacing={-10} alignItems="center">
        <ContestFeature image={"/b3.jpeg"} zIndex={"0"} mt={"10"} />
        <ContestFeature
          image={"/b1.jpeg"}
          zIndex={"1"}
          mt={"30"}
          isFeatured={"1"}
        />
        <ContestFeature image={"/b2.jpeg"} zIndex={"0"} mt={"10"} />
      </HStack>
    </VStack>

    <Box alignItems="center" minHeight="70vh" w="full" zIndex="1">
      <Center w="full" pt={300}>
        <Heading fontSize="4xl" color="black">
          Expand the lore with your NFTs.
        </Heading>
      </Center>
    </Box>

    <Box
      w="full"
      h="1000px"
      // zIndex="0"
      top="3400px"
      left="0"
      position="absolute"
      bgImage={"/nexshop.jpg"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    />

    <Box
      w="full"
      h="1000px"
      top="4000px"
      left="0"
      zIndex={-1}
      position="absolute"
      bgColor={"black"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    />

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
      <Box w="full" pt={900}>
        <VStack spacing={24} justify="center" align="center">
          <Heading fontSize="6xl" color="white">
            Enter our legacy
          </Heading>
          <VStack spacing={5} justify="center" align="left">
            <HStack width={"1hv"}>
              <Text color="white" width={"20em"}>
                Tell us your email address
              </Text>
              <Input placeholder="example@nexbase.com" />
            </HStack>
            <HStack width={"1hv"}>
              <Text color="white" width={"20em"}>
                Show us your artwork
              </Text>
              <Input placeholder="https://opensea.io/assets/nexbase" />
            </HStack>
            <Box align="center" pt="10">
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

export default BalenciagaEvent;
