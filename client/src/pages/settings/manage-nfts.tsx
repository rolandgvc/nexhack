import {
  Box,
  Flex,
  HStack,
  VStack,
  Center,
  Button,
  Spacer,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { ProfilePic } from "components/profile";

const EditProfilePage = () => {
  const router = useRouter();

  const updateProfile = () => {
    // e.preventDefault();
    router.push("/profile");
  };

  return (
    <Box
      display={{ sm: "flex", md: "flex" }}
      minHeight="70vh"
      pt={120}
      w="full"
      // bg="blue"
    >
      <HStack
        spacing={4}
        align="stretch"
        w="80%"
        // h="full"
        // bg="yellow"
      >
        <HStack spacing={4} w="full" align="stretch">
          <VStack w="30%" p="8">
            <Box>Edit profile</Box>
            <Box>Manage NFTs</Box>
            <Box>Account</Box>
            <Box>Wallets</Box>
          </VStack>
          <VStack
            spacing={4}
            w="full"
            // h="40%"
            align="stretch"
          >
            <Heading>Edit profile</Heading>
            <HStack spacing={4} w="full" align="center" p="30px 0 30px 0">
              <ProfilePic
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="descriptive"
                width="100px"
                height="100px"
              />
              <Box fontWeight="bold">👈 Upload profile photo</Box>
            </HStack>
            <FormControl isRequired>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                placeholder="Enter your username..."
                h="50px"
              />
            </FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" placeholder="Enter your name..." h="50px" />
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <Textarea id="bio" placeholder="Enter your bio..." h="100px" />

            <Box pt="30px">
              <Button onClick={updateProfile}>Update Profile</Button>
            </Box>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default EditProfilePage;
