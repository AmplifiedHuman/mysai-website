import React from 'react';
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react';
export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  );
};
