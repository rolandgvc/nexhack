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
      zIndex={2}
    >
      <Flex
        maxWidth="1100"
        margin="0 auto"
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack spacing={8} alignItems="center">
          <NextLink href="/">nexbase</NextLink>
          <Search />
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.name} name={link.name} link={link.to} />
            ))}
          </HStack>
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
          {/* <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              <Avatar
                size="sm"
                src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuDivider />
              <MenuItem>Link 2</MenuItem>
            </MenuList>
          </Menu> */}
          <ThemeToggle />
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink key={link.name} name={link.name} link={link.to} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
