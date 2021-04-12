import React from 'react';
import { Flex, ButtonGroup, Spacer, Box, Button } from '@chakra-ui/react';

import Logo from './Logo';
import Toggle from './Toggle';
import NavigationDrawer from './Drawer';
import { Link } from 'gatsby';

const NavBar = () => {
  const colorOptions = { variant: 'ghost', scheme: 'gray' };
  const iconOptions = { size: '30px', scheme: 'gray', variant: 'ghost' };
  const routes = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Events', link: '/events' },
    { name: 'Join Us', link: '/join' },
  ];
  let buttons = (
    <>
      {routes.map(route => {
        return (
          <Button
            key={route.name}
            variant={colorOptions.variant}
            colorScheme={colorOptions.scheme}
            size="md"
            as={Link}
            to={route.link}
          >
            {route.name}
          </Button>
        );
      })}
      <Button
        colorScheme={colorOptions.scheme}
        size="md"
        as={Link}
        to="/contact"
      >
        Contact
      </Button>
      <Toggle icon={iconOptions} />
    </>
  );

  return (
    <Flex alignItems="center" >
      <Logo />
      <Spacer />
      <ButtonGroup
        spacing="3"
        mr="4"
        display={['none', 'none', 'block', 'block']}
      >
        {buttons}
      </ButtonGroup>
      <Box display={['block', 'block', 'none', 'none']} mr="4">
        <NavigationDrawer color={colorOptions} icon={iconOptions}>
          {buttons}
        </NavigationDrawer>
      </Box>
    </Flex>
  );
};

export default NavBar;
