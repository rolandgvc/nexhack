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
  useToast,
  Center,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

import * as shelljs from 'shelljs'

// import ChakraNextImage from "components/ChakraNextImage";

import FileUpload from "components/FileUpload";
import { DeleteIcon } from "@chakra-ui/icons";

import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useRouter } from "next/router";
import { config } from "styles/customTheme/config";

import { queryClient } from "api";
import { GetNfTsDocument } from "generated/graphql";


import {CandyMachineConfigWithoutStorage, CreatorsConfig} from "@metaplex-foundation/js"

export const getServerSideProps = async () => {
  const { data } = await queryClient.query({
      query: GetNfTsDocument,
   });

  if (data.getNFTs) {
    return { 
      props: { fetchedNFTs: data.getNFTs },
    };
  } return {
    notFound: true,
  }
};

const CreatorInput = ({ idx }) => {
  return (
    <HStack key={idx} spacing="24px">
      <Text>Address {idx}: </Text>
      <Input id="creator-address" placeholder="2ovP...HGNk" w="300px" />
      <Text>Share (%): </Text>
      <Input id="creator-share" placeholder="25" w="100px" />
      <DeleteIcon
        color="red.500"
        mr="2"
        onClick={() => {
          // setCreators(...creators, {
          //   address: "xyz",
          //   share: 25,
          // });
        }}
      />
    </HStack>
  );
};

const NewSubmission = ({fetchedNFTs}) => {
  // connect wallet
  const { publicKey } = useWallet();

  // Check wallet is connected
  if (!publicKey) {
    return (
      <Center>
        <Text>Connect wallet to continue</Text>
      </Center>
    );
  }

  // Check wallet has ticket
  const [hasNFT, setHasNFT] = useState(false);
  const connection = new Connection("https://api.devnet.solana.com/");
  const pub = new PublicKey(publicKey);
  const metaplex = Metaplex.make(connection).use(
    walletAdapterIdentity({ publicKey: pub })
  );
  const mintAddress = new PublicKey(
    "6o3V9UoHArYfW4W7nxzdCyhYidUcFqEn5NoQywDkDyBv"
  );
  async function fetchNFT() {
    const nfts = await metaplex
      .nfts()
      .findByMint(mintAddress)
      .then(() => {
        setHasNFT(true);
      })
      .catch(() => {
        setHasNFT(false);
      });
  }

  async function createNFTs() {
    {
      shelljs.exec('npx ts-node ~/personal/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload \
      -e devnet \
    -k ~/personal/devnet.json \
    -cp ~/personal/dev/config.json \
    -c balenciaga_c \
    ~/personal/dev/assets2');
    }
      
    {
      shelljs.exec('npx ts-node ~/personal/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_upload \
      -e devnet \
      -k ~/personal/devnet.json \
      -c balenciaga_c');
    }

    for(var i = 0; i < 6; i++)
    {
      shelljs.exec('npx ts-node ~/personal/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts mint_one_token \
      -e mainnet-beta \
      -k ~/personal/devnet.json \
      -c balenciaga_c');
    }
  }

  useEffect(() => {
    fetchNFT();
  }, []);


  // if (!hasNFT) {
  //   return (
  //     <Center>Sorry, we couldn't find the NFT ticket in your wallet :(</Center>
  //   );
  // }

  /// HOOKS ///

  // const { data: userData } = useQuery(GetUserByAddressDocument, {
  // variables: { address: publicKey },
  // });
  // const { refetch } = useQuery(GetUserByUsernameDocument);
  // const [updateProfile] = useMutation(UpdateUserProfileDocument);

  /// HANDLERS ///

  const router = useRouter();

  const onSubmitNFT = () => {
    router.push("/submission-success");
  };

  return (
    <Center display={{ sm: "flex", md: "flex" }}>
      <VStack spacing={8} w="70%" align="stretch">
        <Heading>Submit NFT</Heading>

        {/* Image, Video, Audio or 3D Model */}
        <FormControl isRequired>
          <FormLabel htmlFor="header">
            Image, Video, Audio or 3D Model
          </FormLabel>
          <Text fontSize={14} pb={4}>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </Text>
          <FileUpload />
        </FormControl>

        {/* title */}
        <FormControl isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            // value={profileData.username}
            placeholder="NFT title"
            h="50px"
          />
        </FormControl>

        {/* description */}
        <FormControl isRequired>
          <FormLabel htmlFor="description">Lore</FormLabel>
          <Textarea
            id="description"
            placeholder="What is the story behind your NFT?"
            h="100px"
          />
        </FormControl>

        {/* creators */}
        <FormControl isRequired>
          <FormLabel htmlFor="creators">
            Who is your squad? What is the fractionalization of the NFT?
          </FormLabel>
          {/* Address Inputs */}
          <VStack spacing={4} alignItems={"left"}>
            <HStack key={1} spacing="24px">
              <Text>Address {1}: </Text>
              <Input
                id="creator-address"
                placeholder="2ovP...HGNk"
                value={publicKey.toString()}
                w="300px"
              />
              <Text>Share (%): </Text>
              <Input
                id="creator-share"
                placeholder="25"
                value={100}
                w="100px"
              />
            </HStack>

            <CreatorInput idx={"2"} />
            {/* <CreatorInput idx={"3"} /> */}

            {/* {creators.map((c) => (
              <creatorInput />
            ))} */}
          </VStack>
          <Button onClick={() => {}} size="md" mt="24px" ml="36%" w="20%">
            Add Memeber
          </Button>
        </FormControl>

        <Box p="30px 0 100px 0">
          <Button
            onClick={createNFTs}
            // disabled={userData.address}
            size="lg"
          >
            Submit NFT
          </Button>
        </Box>
      </VStack>
    </Center>
  );
};

export default NewSubmission;
