import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  Box,
  HStack,
  VStack,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import ChakraNextImage from "components/ChakraNextImage";
import {
  GetUserByAddressDocument,
  GetUserByUsernameDocument,
  UpdateUserProfileDocument,
} from "generated/graphql";

const sideMenu = [
  {
    tag: "Edit profile",
    active: true,
  },
  {
    tag: " Manage NFTs",
    active: false,
  },
  {
    tag: "Account",
    active: false,
  },
  {
    tag: "Wallets",
    active: false,
  },
];

const SideMenu = ({ tag, active }: { tag?: string; active?: boolean }) => (
  <Button
    borderRadius={5}
    justifyContent="flex-start"
    variant="ghost"
    fontWeight={active ? "bold" : "normal"}
    fontSize="lg"
    h="50px"
  >
    {tag}
  </Button>
);

const EditProfilePage = () => {
  // connect wallet
  const { publicKey } = useWallet();

  /// HOOKS ///

  const { data } = useQuery(GetUserByAddressDocument, {
    variables: { address: publicKey },
    fetchPolicy: "no-cache",
  });
  const { refetch } = useQuery(GetUserByUsernameDocument);
  const [updateProfile] = useMutation(UpdateUserProfileDocument);

  const toast = useToast();
  const [usernameStatus, setUsernameStatus] = useState({
    color: "",
    message: "",
  });
  const [profileData, setProfileData] = useState({
    address: publicKey,
    avatar: "",
    username: "",
    name: "",
    bio: "",
  });
  const router = useRouter();

  useEffect(() => {
    // if user is not logged in, redirect to home
    if (publicKey === null) {
      router.push("/");
    }

    if (data) {
      // if different user, redirect to home
      if (publicKey?.toString() !== data?.getUserByAddress.address) {
        router.push("/");
      }
      // if user exists, retrieve profile data
      setProfileData(data?.getUserByAddress);
    }
  }, [data, publicKey, router]);

  /// HANDLERS ///

  const onUpdateProfle = () => {
    // if name not provided, set it to username
    if (profileData.name === "") {
      const newProfileData = { ...profileData, name: profileData.username };
      updateProfile({ variables: newProfileData });
      setProfileData({ ...newProfileData });
    } else {
      updateProfile({ variables: profileData });
    }
    toast({
      title: "Profile updated.",
      position: "bottom",
      status: "success",
      duration: 2000,
    });
  };

  const onUsernameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput: string = e.target.value;
    setProfileData({ ...profileData, username: userInput });

    // check username validity and availability
    const regEx = /^[a-zA-Z0-9_.-]+$/;
    const isValid = userInput.match(regEx) !== null;

    const fetch = await refetch({ username: userInput });
    const isAvailable = fetch.data.getUserByUsername === null;
    const isAuthor = !isAvailable
      ? fetch.data.getUserByUsername.address === publicKey?.toString()
      : false;

    if (!isValid) {
      setUsernameStatus({
        color: "red",
        message:
          userInput.length === 0 ? "Required" : "Username must be alphanumeric",
      });
    } else if (isValid && !isAvailable && !isAuthor) {
      setUsernameStatus({
        color: "red",
        message: "Username is taken",
      });
    } else if (isValid && isAvailable && !isAuthor) {
      setUsernameStatus({
        color: "green",
        message: "Available",
      });
    } else {
      setUsernameStatus({
        color: "green",
        message: "",
      });
    }
  };

  // TODO: comparison is not correct, need to fix
  const profileChanged = profileData === data?.getUserByAddress;
  const inputIsEmpty = profileData.username === "";

  return (
    <Box
      display={{ sm: "flex", md: "flex" }}
      minHeight="70vh"
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
          <VStack w="40%" align="stretch">
            <Button
              // h="60px"
              w="110px"
              onClick={() => {
                router.push(`/${profileData.username}`);
              }}
            >
              ⬅ Back
            </Button>
            <VStack minW="200px" p="8" spacing={4} align="stretch">
              {sideMenu.map((item) => (
                <SideMenu key={item.tag} tag={item.tag} active={item.active} />
              ))}
            </VStack>
          </VStack>
          <VStack
            spacing={4}
            w="full"
            // h="40%"
            align="stretch"
          >
            <Heading>Edit profile</Heading>
            <HStack spacing={4} w="full" align="center" p="30px 0 30px 0">
              <ChakraNextImage
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="descriptive"
                width="100px"
                height="100px"
              />
              <Box fontWeight="bold">Upload profile photo</Box>
            </HStack>
            <FormControl isRequired>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                value={profileData.username}
                onChange={onUsernameChange}
                placeholder="Enter your username..."
                h="50px"
              />
              {!inputIsEmpty ? (
                <FormHelperText color={usernameStatus.color}>
                  {usernameStatus.message}
                </FormHelperText>
              ) : (
                <FormErrorMessage>Required</FormErrorMessage>
              )}
            </FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              value={profileData.name}
              onChange={(e) => {
                setProfileData({ ...profileData, name: e.target.value });
              }}
              placeholder="Enter your name..."
              h="50px"
            />
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <Textarea
              id="bio"
              value={profileData.bio}
              onChange={(e) => {
                setProfileData({ ...profileData, bio: e.target.value });
              }}
              placeholder="Enter your bio..."
              h="100px"
            />

            <Box pt="30px">
              <Button onClick={onUpdateProfle} disabled={profileChanged}>
                Update Profile
              </Button>
            </Box>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default EditProfilePage;
