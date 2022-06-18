import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";

import Search from "../components/header/Search";
import ThemeToggle from "../components/header/ThemeToggle";
import { WalletMultiButton } from "components/wallet";

const links = [
  {
    name: "Discover",
    to: "/discover",
  },
  {
    name: "Contests",
    to: "/contests",
  },
  {
    name: "Marketplace",
    to: "/marketplace",
  },
];

const NavLink = ({ name, link }: { name: string; link: string }) => (
  <NextLink key={name} href={link} passHref>
    <Link
      key={name}
      px={2}
      py={1}
      _hover={{
        textDecoration: "none",
      }}
    >
      {name}
    </Link>
  </NextLink>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      px={4}
      boxShadow="md"
      pos="fixed"
      width="full"
      zIndex={10}
    >
      <Flex
        maxWidth="1100"
        margin="0 auto"
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack spacing={8}>
          <NextLink href="/">nexbase</NextLink>
          <NextLink href="/contest">contest</NextLink>
          <NextLink href="/submission">submission</NextLink>
          <NextLink href="/curation">curation</NextLink>
          <NextLink href="/storefront">storefront</NextLink>
        </HStack>

        <HStack spacing={8} alignItems="center" marginLeft="auto">
          <IconButton
            size="md"
            icon={<SearchIcon />}
            aria-label="Search"
            display={{ md: "none" }}
          />
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            onClick={isOpen ? onClose : onOpen}
            display={{ md: "none" }}
          />
          <WalletMultiButton />
          <ThemeToggle />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
