import { Input, useColorModeValue } from "@chakra-ui/react";

const Search = () => {
  return (
    <Input
      border="1px"
      rounded="20"
      width="xs"
      height="40px"
      borderColor={useColorModeValue("gray.300", "gray.400")}
      _hover={{
        backgroundColor: useColorModeValue("gray.100", "gray.700"),
      }}
      placeholder="Search..."
      _placeholder={{
        opacity: 1,
        color: useColorModeValue("gray.500", "gray.400"),
      }}
      display={{ base: "none", md: "flex" }}
    />
  );
};

export default Search;
