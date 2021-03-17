import React from 'react';
import { Flex, ButtonGroup, Spacer, Box, Button } from '@chakra-ui/react';

import Logo from './Logo';
import Toggle from './Toggle';
import NavigationDrawer from './Drawer';

const NavBar = () => {
  const colorOptions = { variant: 'ghost', scheme: 'gray' };
  const iconOptions = { size: '30px', scheme: 'blue', variant: 'ghost' };
  const routes = ['Home', 'About Us', 'Events', 'Join Us'];
  let buttons = (
    <>
      {routes.map(route => {
        return (
          <Button
            key={route}
            variant={colorOptions.variant}
            colorScheme={colorOptions.scheme}
            size="md"
          >
            {route}
          </Button>
        );
      })}
      <Button variant='outline' colorScheme='blue' size='md'>Contact</Button>
      <Toggle icon={iconOptions} />
    </>
  );

  return (
    <Flex alignItems="center" boxShadow="md">
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
