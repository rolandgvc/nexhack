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
  Text,
  FormHelperText,
  FormErrorMessage,
  useToast,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// import ChakraNextImage from "components/ChakraNextImage";
import { GetUserByAddressDocument } from "generated/graphql";
import FileUpload from "components/FileUpload";

const NewContestPage = () => {
  // connect wallet
  const { publicKey } = useWallet();

  /// HOOKS ///

  const { data: userData } = useQuery(GetUserByAddressDocument, {
    variables: { address: publicKey },
  });
  // const { refetch } = useQuery(GetUserByUsernameDocument);
  // const [updateProfile] = useMutation(UpdateUserProfileDocument);

  const toast = useToast();

  const router = useRouter();

  /// HANDLERS ///

  const onCreateContest = () => {
    router.push("/contests");

    // if (profileData.name === "") {
    //   const newProfileData = { ...profileData, name: profileData.username };
    //   updateProfile({ variables: newProfileData });
    //   setProfileData({ ...newProfileData });
    // } else {
    //   updateProfile({ variables: profileData });
    // }
    toast({
      title: "Contest created.",
      position: "bottom",
      status: "success",
      duration: 2000,
    });
  };

  // const onUsernameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const userInput: string = e.target.value;
  //   setProfileData({ ...profileData, username: userInput });

  //   // check username validity and availability
  //   const regEx = /^[a-zA-Z0-9_.-]+$/;
  //   const isValid = userInput.match(regEx) !== null;

  //   const fetch = await refetch({ username: userInput });
  //   const isAvailable = fetch.data.getUserByUsername === null;
  //   const isAuthor = !isAvailable
  //     ? fetch.data.getUserByUsername.address === publicKey?.toString()
  //     : false;

  //   if (!isValid) {
  //     setUsernameStatus({
  //       color: "red",
  //       message:
  //         userInput.length === 0 ? "Required" : "Username must be alphanumeric",
  //     });
  //   } else if (isValid && !isAvailable && !isAuthor) {
  //     setUsernameStatus({
  //       color: "red",
  //       message: "Username is taken",
  //     });
  //   } else if (isValid && isAvailable && !isAuthor) {
  //     setUsernameStatus({
  //       color: "green",
  //       message: "Available",
  //     });
  //   } else {
  //     setUsernameStatus({
  //       color: "green",
  //       message: "",
  //     });
  //   }
  // };

  // TODO: comparison is not correct, need to fix
  // const profileChanged = profileData === data?.getUserByAddress;
  // const inputIsEmpty = profileData.username === "";

  return (
    <Center display={{ sm: "flex", md: "flex" }}>
      <VStack spacing={8} w="60%" align="stretch">
        <Heading>New Contest</Heading>

        {/* title */}
        <FormControl isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            // value={profileData.username}
            placeholder="My Contest"
            h="50px"
          />
        </FormControl>

        {/* contest ID */}
        <FormControl isRequired>
          <FormLabel htmlFor="id">Contest ID</FormLabel>
          <Input
            id="id"
            // value={profileData.name}
            placeholder="my-contest"
            h="50px"
          />
        </FormControl>

        {/* description */}
        <FormControl isRequired>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            placeholder="This is my contest."
            h="100px"
          />
        </FormControl>

        {/* header */}
        <FormControl isRequired>
          <FormLabel htmlFor="header">Header Image</FormLabel>
          <FileUpload />
        </FormControl>

        {/* prizes */}
        <FormControl isRequired>
          <FormLabel htmlFor="prizes">
            Prize Distribution (these will be token baskets)
          </FormLabel>
          <SimpleGrid columns={2} spacing={2}>
            <Text>First Prize: </Text>
            <Input id="first-prize" placeholder="100 USDC" />
            <Text>Second Prize: </Text>
            <Input id="first-prize" placeholder="100 USDC" />
            <Text>Third Prize: </Text>
            <Input id="first-prize" placeholder="100 USDC" />
            <Text>Participation: </Text>
            <Input id="first-prize" placeholder="100 USDC" />
          </SimpleGrid>
        </FormControl>

        {/* NFT ticket */}
        <FormControl isRequired>
          <FormLabel htmlFor="nft">
            NFT Ticket: Image, Video, Audio or 3D Model
          </FormLabel>
          <FileUpload />
        </FormControl>

        {/* discord server */}
        <FormControl isRequired>
          <FormLabel htmlFor="discord">Discord Server</FormLabel>
          <Input
            id="discord"
            placeholder="https://discord.com/invite/123"
            h="50px"
          />
        </FormControl>

        <Box p="30px 0 100px 0">
          <Button
            onClick={onCreateContest}
            // disabled={userData.address}
            size="lg"
          >
            Create contest
          </Button>
        </Box>
      </VStack>
    </Center>
  );
};

export default NewContestPage;
