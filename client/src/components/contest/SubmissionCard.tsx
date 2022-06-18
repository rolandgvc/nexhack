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
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const SubmissionCard = ({
  title,
  body,
  header,
  slug,
}: {
  title?: string;
  body?: string;
  header?: string;
  slug?: string;
}) => {
  const router = useRouter();

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

  return (
    <Box
      w="full"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="lg"
      rounded="md"
      borderColor={useColorModeValue("gray.200", "gray.800")}
      borderWidth="1px"
      p={6}
      overflow="hidden"
    >
      <HStack spacing={4} align={"stretch"}>
        <Image src={header} width={400} height={400} />
        <VStack spacing={4} align="stretch">
          {/* title */}
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize="2xl"
            fontFamily="body"
          >
            {title}
          </Heading>

          {/* body */}
          <Text color="gray.500">{body}</Text>

          {/* properties */}
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize="xl"
            fontFamily="body"
            pt={4}
          >
            Properties
          </Heading>
          <HStack spacing={4}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </HStack>

          <Spacer />
          <Divider />
          <Text fontWeight={600}>Created by: @rolandgvc</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default SubmissionCard;
