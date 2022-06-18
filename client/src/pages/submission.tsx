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
  Center,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

import FileUpload from "components/FileUpload";
import { DeleteIcon } from "@chakra-ui/icons";

import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useRouter } from "next/router";

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

const AddressField = ({ id, address, share }) => {
  return (
    <HStack key={id} spacing="24px">
      <Text>Address {id}: </Text>
      <Input
        id="creator-address"
        placeholder="2ovP...HGNk"
        value={address}
        w="300px"
      />
      <Text>Share (%): </Text>
      <Input id="creator-share" placeholder="25" value={share} w="100px" />
    </HStack>
  );
};

const NewSubmission = () => {
  // connect wallet
  const { publicKey } = useWallet();
  const [hasNFT, setHasNFT] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const router = useRouter();

  const connection = new Connection("https://ssc-dao.genesysgo.net");
  // const connection = new Connection("https://api.devnet.solana.com/");

  // Fetch contest ticket
  const mintAddress = new PublicKey(
    "6o3V9UoHArYfW4W7nxzdCyhYidUcFqEn5NoQywDkDyBv"
  );
  async function fetchNFT() {
    if (publicKey) {
      const pub = new PublicKey(publicKey!);
      const metaplex = Metaplex.make(connection).use(
        walletAdapterIdentity({ publicKey: pub })
      );
      await metaplex
        .nfts()
        .findByMint(mintAddress)
        .then(() => {
          setHasNFT(true);
        })
        .catch(() => {
          setHasNFT(false);
        });
    }
  }

  useEffect(() => {
    setAddresses([
      {
        address: publicKey?.toString(),
        share: "100",
      },
    ]);
    fetchNFT();
  }, [publicKey]);

  if (!hasNFT) {
    return (
      <Center>
        Sorry, we can't find the contest ticket NFT in your wallet :(
      </Center>
    );
  }

  const onSubmitNFT = () => {
    router.push("/submission-success");
  };

  // Check wallet is connected
  if (!publicKey) {
    return (
      <Center>
        <Text>Connect wallet to continue</Text>
      </Center>
    );
  }

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
            File types supported: JPG, PNG, GIF, SVG, MP4, MP3, WAV. Max size:
            100 MB
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
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            placeholder="What is the story behind your NFT?"
            h="100px"
          />
        </FormControl>

        {/* creators */}
        <FormControl isRequired>
          <FormLabel htmlFor="creators">Who is your squad?</FormLabel>
          {/* Address Inputs */}
          <VStack spacing={4} alignItems={"left"}>
            {addresses.map((address, idx) => (
              <AddressField
                key={idx}
                id={idx}
                address={address.address}
                share={address.share}
              />
            ))}
          </VStack>

          <HStack pt={4}>
            <Button
              onClick={() => {
                setAddresses((prev) => [...prev, { address: "", share: "" }]);
              }}
              size="md"
            >
              Add
            </Button>
            <Button
              bg={"red.100"}
              onClick={() => {
                let filter = addresses.filter(
                  (item) => item !== addresses[addresses.length - 1]
                );
                setAddresses(filter);
              }}
              size="md"
            >
              Remove
            </Button>
          </HStack>
        </FormControl>

        <Box p="30px 0 100px 0">
          <Button onClick={onSubmitNFT} size="lg">
            Submit NFT
          </Button>
        </Box>
      </VStack>
    </Center>
  );
};

export default NewSubmission;
