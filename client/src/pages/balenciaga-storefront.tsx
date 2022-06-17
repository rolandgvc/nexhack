import {
    Box,
    Button,
    Center,
    Heading,
    HStack,
    SimpleGrid,
    VStack,
    Text,
    Spacer,
    Image,
    List,
    Input,
    ListItem,
    useColorModeValue,
    Circle,
    Stack,
    ListIcon,
  } from "@chakra-ui/react";
  
  
  import { queryClient } from "api";
  import ContestCard from "components/contest/ContestCard";
  import ContestFeature from "components/contest/ContestFeature";
  
  import react, { ReactNode } from "react";
  import { BiWalletAlt } from "react-icons/bi";
  import { FaBookReader } from "react-icons/fa";
  
  import { FaCheckCircle } from 'react-icons/fa';
  
  const renderContent = () => {
    let content = [];
    for (let i = 0; i < 12; i++) {
      content.push(<ContestCard
                  key={"aa"}
                  title={"aa"}
                  body={"aa"}
                  header={"/BA_0.png"}
                  slug={"aa"}/>)
    }
    return(
        content
        );
  };

  
  const BalenciagaStorefront = ({ fetchedContests }) => {
    return (
      <>
        <Box
          w="full"
          h="700px"
          // bgGradient="linear(to-r, #19012f, #39006f)"
          backgroundImage="/balenciaga-home.png"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          opacity={1}
          position="absolute"
          top={0}
          left={0}
          zIndex={-1} />
  
        <Box h="580px" />
  
        <Box
          display={{ md: "flex" }}
          alignItems="center"
          backgroundColor="white"
          w="full"
        >
          <Box w="full" pb={275} pt={150} alignItems="left">
            <HStack justify="center" align="left" pb={10}>
                <Circle size='50px' bg='gray' color='white'>
                    <Text fontSize={'7px'}>BALENCIAGA</Text>
                </Circle>
            </HStack>
            <VStack spacing={24} justify="center" align="center">
              <VStack spacing={8} justify="center" align="center">
                <Heading fontSize="3xl" color="black">
                  BALENCIAGA: CYBER Collection
                </Heading>
                <Text color="black">
                The basic story behind the collection with extended lore from the characters and coll
                </Text>
              </VStack>
            </VStack>
          </Box>
        </Box>
  
        <Box
          alignItems="center"
          minHeight="70vh"
          mt={-100}
          mb={8}
          w="full"
          zIndex="1"
          top="-100px"
          pb="-100"
        >
          <VStack spacing={8} justify="center" align="center">
            <SimpleGrid columns={3} spacing={10}>
            { renderContent() }
            </SimpleGrid>
          </VStack>
  
        </Box>
      </>
    );
  };
  
  export default BalenciagaStorefront;
  