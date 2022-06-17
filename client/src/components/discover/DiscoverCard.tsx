import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Divider,
  HStack,
  Spacer,
  Image,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import ChakraNextImage from "components/ChakraNextImage";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const DiscoverCard = ({
  owner,
  collection,
  title,
  image,
  slug,
}: {
  owner?: string;
  title?: string;
  collection?: string;
  image?: string;
  slug?: string;
}) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => {
        // router.push(`contests/${slug}`);
      }}
    >
      <Box
        maxW="445px"
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="md"
        rounded="xl"
        borderColor={useColorModeValue("gray.100", "gray.800")}
        borderWidth="1px"
        p={0}
        overflow="hidden"
        _hover={{
          // transform: "translateY(-2px)",
          boxShadow: "lg",
          cursor: "pointer",
        }}
      >
        <Flex p="4" align="center">
          <ChakraNextImage
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="descriptive"
            width="30px"
            height="30px"
          />
          <Text ml={2} fontWeight="bold">
            {owner}
          </Text>
        </Flex>
        <Box
          h="450px"
          pos="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${image})`}
        />
        <VStack align="stretch" p="4" spacing={0}>
          <Flex align="center">
            <VStack align="stretch" spacing={0}>
              <Text fontSize="sm" color="gray.500">
                {collection}
              </Text>
              <Text
                color={useColorModeValue("gray.700", "white")}
                fontSize="xl"
                fontWeight="bold"
              >
                {title}
              </Text>
            </VStack>
            <Spacer />
            <VStack align="stretch" spacing={0}>
              <Text fontSize="sm" color="gray.500">
                Last sold
              </Text>
              <Text
                color={useColorModeValue("gray.700", "white")}
                fontSize="xl"
                fontWeight="bold"
              >
                2 ETH
              </Text>
            </VStack>
          </Flex>
          <HStack pt={8} align="center">
            <FaHeart />
            <Text fontWeight={600}>5 likes</Text>
            <Spacer />
            <Text color="gray.500">5 comments</Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default DiscoverCard;
