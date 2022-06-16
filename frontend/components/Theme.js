import { ChakraProvider, localStorageManager } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import "focus-visible/dist/focus-visible";

const GlobalStyles = css`
  /*
    Hide the focus indicator on links
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

const ChakraThemeProvider = ({ children }) => {
  return (
    <ChakraProvider colorModeManager={localStorageManager}>
      <Global styles={GlobalStyles} />
      {children}
    </ChakraProvider>
  );
};

export default ChakraThemeProvider;
