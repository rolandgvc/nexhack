import "../styles/globals.css";
import ChakraThemeProvider from "../components/Theme";
import SolanaWalletProvider from "../components/Wallet";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraThemeProvider>
      <SolanaWalletProvider>
        <Component {...pageProps} />
      </SolanaWalletProvider>
    </ChakraThemeProvider>
  );
}

export default MyApp;
