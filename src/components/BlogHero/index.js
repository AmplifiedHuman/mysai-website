import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import RemoteImage from '../RemoteImage';

const BlogHero = ({
  heroPost: {
    node: {
      excerpt,
      timeToRead,
      frontmatter: { title, featured_image },
      fields: { slug },
    },
  },
}) => {
  return (
    <Box
      marginTop={{ base: '1', sm: '1' }}
      display="flex"
      flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
        my="10"
      >
        <Box
          width={{ base: '100%', sm: '85%' }}
          zIndex="2"
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop="5%"
        >
          <Link
            textDecoration="none"
            _hover={{ textDecoration: 'none', transform: '' }}
            as={GatsbyLink}
            to={slug}
          >
            <RemoteImage
              borderRadius="lg"
              url={featured_image}
              alt={title}
              objectFit="contain"
            />
          </Link>
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              'radial(stripe.600 1px, transparent 1px)',
              'radial(stripe.300 1px, transparent 1px)'
            )}
            backgroundSize="20px 20px"
            opacity="0.6"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '3' }}
        marginLeft={{ base: '3', sm: '3' }}
      >
        <Text
          px={3}
          py={1}
          bg="stripe.400"
          color="white"
          fontSize="sm"
          fontWeight="700"
          rounded="md"
          width="55px"
          mb="2"
        >
          Blog
        </Text>
        <Heading marginTop="1">
          <Link
            color={useColorModeValue('gray.700', 'white')}
            fontWeight="700"
            _hover={{
              color: useColorModeValue('gray.600', 'gray.300'),
              textDecor: 'none',
            }}
            as={GatsbyLink}
            to={slug}
          >
            {title}
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
        >
          {excerpt}
        </Text>
        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            color={useColorModeValue('stripe.600', 'stripe.200')}
            _hover={{ textDecor: 'underline' }}
            as={GatsbyLink}
            to={slug}
            fontSize="lg"
          >
            Read more
          </Link>
          <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="lg">
            {timeToRead} min read
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default BlogHero;
