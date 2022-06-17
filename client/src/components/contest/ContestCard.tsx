import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Divider,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const ContestCard = ({
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
  return (
    <Box
      // py={6}
      onClick={() => {
        router.push(`contests/${slug}`);
      }}
    >
      <Box
        maxW="445px"
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="lg"
        rounded="md"
        borderColor={useColorModeValue("gray.200", "gray.800")}
        borderWidth="1px"
        p={6}
        overflow="hidden"
        _hover={{
          // transform: "translateY(-2px)",
          boxShadow: "2xl",
          cursor: "pointer",
        }}
      >
        <Box
          h="210px"
          bg="gray.100"
          mt={-6}
          mx={-6}
          mb={6}
          pos="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${header})`}
        />
        <Stack p="0px 0px 20px 0px">
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize="2xl"
            fontFamily="body"
          >
            {title}
          </Heading>
          <Text color="gray.500">{body}</Text>
        </Stack>
        <Divider />
        <HStack mt={6} spacing={4} align="center">
          <Text fontWeight={600}>1,000+ USDC</Text>
          <Spacer />
          <Text color="gray.500">3 weeks to go</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default ContestCard;
