import { useQuery } from "@apollo/react-hooks";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Center,
  Button,
  Spacer,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import { useState } from "react";

import { queryClient } from "api";
import ChakraNextImage from "components/ChakraNextImage";
import { GetUserByUsernameDocument } from "generated/graphql";

export async function getServerSideProps(context) {
  const { uid } = context.query;
  const { data } = await queryClient.query({
    query: GetUserByUsernameDocument,
    variables: { username: uid },
  });
  if (data.getUserByUsername) {
    return {
      props: {
        fetchedProfileData: data.getUserByUsername,
      },
    };
  }
  return {
    notFound: true,
  };
}

const sideMenu = [
  {
    tag: "Owned",
    count: "0",
    active: true,
  },
  {
    tag: "Created",
    count: "0",
    active: false,
  },
  {
    tag: "Liked",
    count: "0",
    active: false,
  },
  {
    tag: "Hidden",
    count: "0",
    active: false,
  },
];

const SideMenu = ({
  tag,
  count,
  active,
}: {
  tag?: string;
  count?: string;
  active?: boolean;
}) => (
  <Button
    borderRadius={5}
    w="full"
    minW="200px"
    variant="ghost"
    fontWeight={active ? "bold" : "normal"}
    fontSize="lg"
    h="50px"
    // alignItems="center"
    // justifyContent="space-between"
  >
    <Box p="4">{tag}</Box>
    <Spacer />
    <Box p="4">{count}</Box>
  </Button>
);

const FollowOrEditButton = ({
  myAddress,
  profileAddress,
}: {
  myAddress?: string;
  profileAddress?: string;
}) => {
  const router = useRouter();
  const editProfile = () => {
    router.push("/settings/profile");
  };
  const followProfile = () => {
    // TODO: follow profile
  };

  if (myAddress === profileAddress) {
    return <Button onClick={editProfile}>Edit Profile</Button>;
  }
  return (
    <Button
      onClick={followProfile}
      bg="blue.500"
      textColor="white"
      _hover={{
        bg: "blue.600",
      }}
      _active={{
        bg: "blue.700",
      }}
    >
      Follow
    </Button>
  );
};

const ProfilePage = ({ fetchedProfileData }) => {
  const { publicKey } = useWallet();
  const [profileData] = useState(fetchedProfileData);

  const shortAddress = `${profileData?.address.slice(
    0,
    4
  )}..${profileData.address.slice(-4)}`;

  return (
    <Box
      display={{ sm: "flex", md: "flex" }}
      minHeight="70vh"
      w="full"
      // backgroundColor="blue"
    >
      <VStack
        spacing={4}
        align="stretch"
        // backgroundColor="yellow"
        w="full"
      >
        <HStack
          spacing={4}
          h="40%"
          align="stretch"
          // backgroundColor="orange"
        >
          <Center w="25%">
            <ChakraNextImage
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="descriptive"
              width="200px"
              height="200px"
            />
          </Center>
          <VStack w="40%" align="left">
            <Heading>{profileData.name}</Heading>
            <Text>{`@${profileData.username}`}</Text>
            <Box>
              {1} Followers &nbsp;&nbsp; {2} Following
            </Box>
            <Text>{profileData.bio}</Text>
            <Link>{shortAddress}</Link>
          </VStack>

          <Flex w="30%">
            <Spacer />
            <FollowOrEditButton
              myAddress={publicKey?.toString()}
              profileAddress={profileData.address}
            />
          </Flex>
        </HStack>
        <HStack
          spacing={4}
          align="stretch"
          // backgroundColor="orange"
        >
          <VStack w="25%" p="8">
            {sideMenu.map((item) => (
              <SideMenu
                key={item.tag}
                tag={item.tag}
                count={item.count}
                active={item.active}
              />
            ))}
          </VStack>
          <Box
            w="full"
            borderWidth="2px"
            borderRadius="25px"
            overflow="hidden"
            borderColor="gray.200"
          >
            <Center>NFTs</Center>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProfilePage;
