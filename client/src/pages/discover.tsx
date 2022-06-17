import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

import ChakraNextImage from "components/ChakraNextImage";
import ContestCard from "components/contest/ContestCard";
import DiscoverCard from "components/discover/DiscoverCard";

const DiscoverPage = () => {
  return (
    <Box
      display={{ sm: "flex", md: "flex" }}
      minHeight="70vh"
      w="full"
      pb="100px"
    >
      <HStack w="full" spacing={4} align="stretch">
        {/* Feed */}
        <VStack w="65%" spacing={8} align="stretch">
          <VStack spacing={1} align="stretch">
            <Text fontWeight="bold">👍 Roland just liked</Text>
            <DiscoverCard
              owner="andrew"
              title="Ape #420"
              collection="BoredApesYachtClub"
              image="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
            />
          </VStack>

          <VStack spacing={1} align="stretch">
            <Text fontWeight="bold">💸 Roland just acquired</Text>
            <DiscoverCard
              owner="roland"
              title="Ape #420"
              collection="BoredApesYachtClub"
              image="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
            />
          </VStack>

          <VStack spacing={1} align="stretch">
            <Text fontWeight="bold">
              🏆 Roland and 5 others joined a contest
            </Text>
            <ContestCard
              title="Contest 1"
              body="This is contest 1"
              header="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
            />
          </VStack>
        </VStack>

        {/* Trending */}
        <VStack w="35%" spacing={12} align="stretch">
          {/* Contests */}
          <VStack spacing={2} align="stretch">
            <Flex align="center" justify="center">
              <Heading size="md">Hot Contests</Heading>
              <Spacer />
              <Button
                fontWeight="bold"
                rightIcon={<FaArrowRight />}
                variant="ghost"
              >
                See all
              </Button>
            </Flex>
            <VStack spacing={4} align="stretch">
              <HStack spacing={4}>
                <ChakraNextImage
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                  alt="descriptive"
                  width="40px"
                  height="40px"
                  objectFit="cover"
                  borderRadius={6}
                />
                <Text fontWeight="bold">Contest 1</Text>
              </HStack>
              <HStack spacing={4}>
                <ChakraNextImage
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                  alt="descriptive"
                  width="40px"
                  height="40px"
                  objectFit="cover"
                  borderRadius={6}
                />
                <Text fontWeight="bold">Contest 2</Text>
              </HStack>
              <HStack spacing={4}>
                <ChakraNextImage
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                  alt="descriptive"
                  width="40px"
                  height="40px"
                  objectFit="cover"
                  borderRadius={6}
                />
                <Text fontWeight="bold">Contest 3</Text>
              </HStack>
            </VStack>
          </VStack>

          {/* Collections */}
          <VStack spacing={2} align="stretch">
            <Flex align="center" justify="center">
              <Heading size="md">Trending Collections</Heading>
              <Spacer />
              <Button
                fontWeight="bold"
                rightIcon={<FaArrowRight />}
                variant="ghost"
              >
                See all
              </Button>
            </Flex>
            <VStack spacing={4} align="stretch">
              <HStack spacing={4}>
                <ChakraNextImage
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                  alt="descriptive"
                  width="40px"
                  height="40px"
                  objectFit="cover"
                  borderRadius={6}
                />
                <Text fontWeight="bold">BoredApesYachtClub</Text>
              </HStack>
              <HStack spacing={4}>
                <ChakraNextImage
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                  alt="descriptive"
                  width="40px"
                  height="40px"
                  objectFit="cover"
                  borderRadius={6}
                />
                <Text fontWeight="bold">MoonBirds</Text>
              </HStack>
              <HStack spacing={4}>
                <ChakraNextImage
                  src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                  alt="descriptive"
                  width="40px"
                  height="40px"
                  objectFit="cover"
                  borderRadius={6}
                />
                <Text fontWeight="bold">Yeezys</Text>
              </HStack>
            </VStack>
          </VStack>

          {/* People */}
          <VStack spacing={2} align="stretch">
            <Flex align="center" justify="center">
              <Heading size="md">Hustlers to Follow</Heading>
              <Spacer />
              <Button
                fontWeight="bold"
                rightIcon={<FaArrowRight />}
                variant="ghost"
              >
                See all
              </Button>
            </Flex>
            <VStack spacing={4} align="stretch">
              <HStack spacing={4}>
                <ChakraNextImage
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="descriptive"
                  width="40px"
                  height="40px"
                  objectFit="cover"
                  borderRadius={6}
                />
                <Text fontWeight="bold">roland</Text>
              </HStack>
              <HStack spacing={4}>
                <ChakraNextImage
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="descriptive"
                  width="40px"
                  height="40px"
                  objectFit="cover"
                  borderRadius={6}
                />
                <Text fontWeight="bold">andrew</Text>
              </HStack>
              <HStack spacing={4}>
                <ChakraNextImage
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="descriptive"
                  width="40px"
                  height="40px"
                  objectFit="cover"
                  borderRadius={6}
                />
                <Text fontWeight="bold">paul</Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default DiscoverPage;
