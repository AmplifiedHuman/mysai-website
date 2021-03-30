import React from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Spacer } from '@chakra-ui/react';

import NavBar from '../components/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Flex direction="column" height="100vh">
      <NavBar />
      <Container maxW="7xl" my="8" px='10'>
        {children}
      </Container>
      <Spacer />
      <Footer />
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
