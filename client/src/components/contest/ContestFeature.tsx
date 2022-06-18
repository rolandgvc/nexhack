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

const ContestFeature = ({
  image,
  zIndex,
  mt,
  isFeatured,
}: {
  image?: string;
  zIndex?: string;
  mt?: string;
  isFeatured?: string;
}) => {
  const router = useRouter();
  return (
    <Box
    // py={6}
    //   onClick={() => {
    //     router.push(`contests/${slug}`);
    //   }}
    >
      <Box
        //   maxW="445px"
        w="full"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow="lg"
        rounded="md"
        borderColor={useColorModeValue("gray.200", "gray.800")}
        borderWidth="1px"
        overflow="hidden"
        boxShadow={isFeatured ? "0px 1px 8px 1px gray" : "0px"}
        mt={mt}
        position="relative"
        zIndex={zIndex}
      >
        <Box
          h={isFeatured ? "650px" : "600px"}
          w="700px"
          h="800px"
          bg="gray.100"
          mt={-6}
          mx={-6}
          mb={-6}
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${image})`}
        />
      </Box>
    </Box>
  );
};

export default ContestFeature;
