import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import { queryClient } from "api";
import ChakraThemeProvider from "contexts/ChakraThemeProvider";
import WalletKitProvider from "contexts/WalletKitProvider";
import Layout from "layout";

import "styles/globals.css";

require("../styles/wallet/styles.css");

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={queryClient}>
      <ChakraThemeProvider>
        <WalletKitProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WalletKitProvider>
      </ChakraThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
