import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import { queryClient } from "api";
import ChakraThemeProvider from "contexts/ChakraThemeProvider";
import WalletKitProvider from "contexts/WalletKitProvider";
import { MoralisProvider } from "react-moralis";
import Layout from "layout";

import "styles/globals.css";

require("../styles/wallet/styles.css");

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={queryClient}>
      <ChakraThemeProvider>
        <MoralisProvider
          serverUrl="https://xekzn8r9r5do.usemoralis.com:2053/server"
          appId="eCA94eOCsZn8PDxdDtbv2Xpr2MvoajZbKqDOHw0v"
        >
          <WalletKitProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WalletKitProvider>
        </MoralisProvider>
      </ChakraThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
