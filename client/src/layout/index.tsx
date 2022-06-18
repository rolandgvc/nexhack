import { useQuery, useMutation } from "@apollo/react-hooks";
import { Box } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import type { ReactNode } from "react";
import { useEffect } from "react";

import {
  GetUserByAddressDocument,
  RegisterUserAddressDocument,
} from "generated/graphql";

// import Footer from "./Footer";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { wallet, connected, publicKey } = useWallet();

  const { loading, data, refetch } = useQuery(GetUserByAddressDocument, {
    variables: { address: publicKey },
    fetchPolicy: "no-cache", // for debugging purposes
  });

  const [addUser] = useMutation(RegisterUserAddressDocument);

  // TODO: handle errors in next.js
  useEffect(() => {
    if (wallet) {
      if (connected) {
        if (!loading && !data) {
          console.log("Could not fetch user. Server might be offline.");
        }

        if (!loading && !data.getUserByAddress) {
          try {
            // console.log("registering user...");
            addUser({ variables: { address: publicKey } });
            // console.log("user registered");
          } catch (err) {
            console.log("Error registering user: ", err);
          }
        }
      }
    }
    //  else {
    //   console.log("Not connected to wallet");
    // }
  }, [wallet, connected, addUser, data, refetch, publicKey, loading]);

  return (
    <>
      <Header />
      <Box
        as="main"
        width="full"
        maxWidth={1200}
        margin="0 auto"
        pt={120}
        // background="gray.100"
      >
        {children}
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Layout;
