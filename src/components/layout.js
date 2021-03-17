import React from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Spacer, Box } from '@chakra-ui/react';

import NavBar from '../components/Navbar';


const Layout = ({ children }) => {
  return (
    <Flex direction="column" height='100vh'>
      <NavBar />
      <Container maxW="6xl" my="8">
        {children}
      </Container>
      <Spacer />
      <Box>
        <footer>Sample Footer</footer>
      </Box>
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
