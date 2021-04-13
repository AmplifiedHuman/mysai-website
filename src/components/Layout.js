import React from 'react';
import PropTypes from 'prop-types';
import { ChakraProvider, Container, Flex, Spacer } from '@chakra-ui/react';

import NavBar from '../components/Navbar';
import Footer from './Footer';
import theme from '../@chakra-ui/gatsby-ui/theme';

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" height="100vh">
        <NavBar />
        <Container maxW="7xl" my="8" px="10">
          {children}
        </Container>
        <Spacer />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
