import { ChakraProvider, localStorageManager } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import customTheme from "styles/customTheme";
import "focus-visible/dist/focus-visible";

interface ChakraProps {
  children: React.ReactNode;
}

const GlobalStyles = css`
  /*
    Hide the focus indicator on links
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

const ChakraThemeProvider = ({ children }: ChakraProps) => {
  return (
    <ChakraProvider colorModeManager={localStorageManager} theme={customTheme}>
      <Global styles={GlobalStyles} />
      {children}
    </ChakraProvider>
  );
};

export default ChakraThemeProvider;
