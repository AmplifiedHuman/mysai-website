import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Stack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Link } from 'gatsby';
import React from 'react';
import RemoteImage from '../RemoteImage';

const Hero = props => {
  const { description, frontImage } = props;
  return (
    <Stack
      alignItems="center"
      direction={['column', 'column', 'column', 'row', 'row']}
      spacing={['1', '1', '1', '16', '16']}
    >
      <Box>
        <Box
          pos="relative"
          pb={[8, 16, 20, 28, 32]}
          maxW={{ lg: '6xl' }}
          w={{ lg: 'full' }}
          zIndex={1}
        >
          <Box
            mx="auto"
            maxW={{ base: '7xl' }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: 'center', lg: 'left' }}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                fontSize={['3xl', '4xl', '4xl', '4xl', '5xl']}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue('gray.900', 'white')}
              >
                <Text display={{ base: 'block', xl: 'inline' }}>
                  Malaysian Student Association of {}
                </Text>
                <Text
                  display={{ base: 'block', xl: 'inline' }}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  Ireland
                </Text>
              </Box>
              <Text
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: 'lg', md: 'xl' }}
                maxW={{ sm: 'xl' }}
                mx={{ sm: 'auto', lg: 0 }}
                color="gray.500"
              >
                {description}
              </Text>
              <Stack
                direction="row"
                justify={['left', 'center', 'center', 'left', 'left']}
                spacing={4}
                mt={{ base: 5, sm: 8 }}
                fontWeight="extrabold"
              >
                <Button
                  bgGradient="linear(to-r, red.400,pink.400)"
                  variant="solid"
                  size="lg"
                  color={'white'}
                  _hover={{
                    bgGradient: 'linear(to-r, red.400,pink.400)',
                    boxShadow: 'xl',
                  }}
                  as={Link}
                  to="/events"
                >
                  Our Events
                </Button>
                <Button
                  colorScheme="pink"
                  variant="outline"
                  size="lg"
                  _hover={{
                    boxShadow: 'xl',
                  }}
                  as={Link}
                  to="/about"
                >
                  About Us
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="full" maxW="650px">
        <RemoteImage
          url={frontImage}
          alt="MYSAI Photo"
          style={{ borderRadius: '5px' }}
        />
      </Box>
    </Stack>
  );
};

export default Hero;
