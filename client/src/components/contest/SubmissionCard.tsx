import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  HStack,
  Spacer,
  Image,
  VStack,
  Flex,
  CloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const SubmissionCard = ({
  title,
  description,
  image,
  creators,
  shares,
  timestamp,
}: {
  title?: string;
  description?: string;
  image?: string;
  creators?: [string];
  shares?: [string];
  timestamp?: string;
}) => {
  const PropertyCard = () => {
    return (
      <VStack
        bg="blue.100"
        borderColor={"blue.500"}
        borderWidth="1px"
        borderRadius={10}
        width={"120px"}
        alignItems="center"
        justifyContent={"center"}
        p={2}
      >
        <Text color={"blue.500"} fontSize="12px">
          ENVIRONMENT
        </Text>
        <Text>CITY</Text>
      </VStack>
    );
  };

  const [toggle, setToggle] = useState(true);
  const toggleCard = () => {
    setToggle(!toggle);
  };

  return (
    <Box
      w="full"
      // bg={useColorModeValue("white", "gray.900")}
      boxShadow="lg"
      rounded="md"
      borderColor={useColorModeValue("gray.200", "gray.800")}
      borderWidth="1px"
      p={8}
      height={toggle ? "auto" : "100px"}
      bgColor={toggle ? "auto" : "gray.500"}
      overflow="hidden"
    >
      <HStack spacing={4} align={"stretch"}>
        <Image
          src={image}
          width={"60%"}
          height={400}
          fit="cover"
          align="center"
          display={toggle ? "block" : "none"}
        />

        <VStack spacing={4} align="stretch" w="40%" pl={4}>
          {/* title */}
          <Flex>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize="2xl"
            >
              {title}
            </Heading>
            <Spacer />
          </Flex>

          {/* description */}
          <Text color="gray.500">{description}</Text>

          {/* properties */}
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize="xl"
            pt={4}
          >
            Properties
          </Heading>
          <HStack spacing={4}>
            <PropertyCard />
            <PropertyCard />
            {/* <PropertyCard /> */}
          </HStack>
          <Spacer />
          <Divider />
          <Flex>
            <Text fontWeight={600}>Created by: @rolandgvc</Text>
            <Spacer />
            <Text fontWeight={600}>{"20:40, 06/17/22"}</Text>
          </Flex>
        </VStack>
        <Spacer />
        <CloseButton onClick={toggleCard} />
      </HStack>
    </Box>
  );
};

export default SubmissionCard;
