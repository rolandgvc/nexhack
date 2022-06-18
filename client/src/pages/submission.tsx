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
import { Connection, PublicKey } from "@solana/web3.js";
import { useRouter } from "next/router";
import { CreateNftDocument } from "../generated/graphql";

const NewSubmission = () => {
  // connect wallet
  const { publicKey } = useWallet();
  const [hasNFT, setHasNFT] = useState(false);
  const [submission, setSubmission] = useState({
    image: "cyber/5.jpg",
    title: "",
    description: "",
    addresses: [],
    shares: [],
  });
  const [createNFT] = useMutation(CreateNftDocument);

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
    setSubmission({
      ...submission,
      addresses: [publicKey?.toString()],
      shares: ["100"],
    });
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
    // console.log(submission);
    // createNFT({ variables: submission });
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

  // Hacky components
  const AddressField = ({ id, address, share }) => {
    return (
      <HStack key={id} spacing="24px">
        <Text>Address {id}: </Text>
        <Input
          id="creator-address"
          placeholder="2ovP...HGNk"
          onChange={(e) => {}}
          value={address}
          w="300px"
        />
        <Text>Share (%): </Text>
        <Input
          id="creator-share"
          placeholder="25"
          onChange={(e) => {
            // const newShr = [...submission.shares[:-1], e.target.value];
            // const newShr = [...submission.shares].splice(-1, 1, e.target.value);
            // setSubmission({ ...submission, shares: newShr });
          }}
          value={share}
          w="100px"
        />
      </HStack>
    );
  };

  return (
    <Center display={{ sm: "flex", md: "flex" }}>
      <VStack spacing={8} w="70%" align="stretch">
        <Heading>Submit NFT</Heading>

        {/* Image, Video, Audio or 3D Model */}
        <FormControl isRequired>
          <FormLabel htmlFor="image">Image, Video, Audio or 3D Model</FormLabel>
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
            value={submission.title}
            onChange={(e) => {
              setSubmission({ ...submission, title: e.target.value });
            }}
            placeholder="NFT title"
            h="50px"
          />
        </FormControl>

        {/* description */}
        <FormControl isRequired>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            value={submission.description}
            onChange={(e) => {
              setSubmission({ ...submission, description: e.target.value });
            }}
            placeholder="What is the story behind your NFT?"
            h="100px"
          />
        </FormControl>

        {/* creators */}
        <FormControl isRequired>
          <FormLabel htmlFor="creators">Who is your squad?</FormLabel>
          {/* Address Inputs */}
          <VStack spacing={4} alignItems={"left"}>
            {submission.addresses.map((address, idx) => (
              <AddressField key={idx} id={idx} address={address} share={100} />
            ))}
          </VStack>

          <HStack pt={4}>
            <Button
              onClick={() => {
                const newAddresses = [...submission.addresses, "0x"];
                const newShares = [...submission.shares, "0"];
                setSubmission({
                  ...submission,
                  addresses: newAddresses,
                  shares: newShares,
                });
              }}
              size="md"
            >
              Add
            </Button>
            <Button
              bg={"red.100"}
              onClick={() => {
                let filterAddr = submission.addresses.filter(
                  (item, idx) => idx !== submission.addresses.length - 1
                );

                let filterShr = submission.shares.filter(
                  (item, idx) => idx !== submission.shares.length - 1
                );
                setSubmission({
                  ...submission,
                  addresses: filterAddr,
                  shares: filterShr,
                });
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
