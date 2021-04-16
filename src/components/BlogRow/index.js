import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { Link as GatsbyLink } from 'gatsby';

const BlogRow = ({ title, createdDate, excerpt, timeToRead, slug }) => {
  return (
    <Flex w="full" alignItems="center" justifyContent="center" my="4">
      <Box mx="auto" py={4}>
        <Box mt={2}>
          <Heading
            size="lg"
            color={useColorModeValue('stripe.400', 'stripe.100')}
            fontWeight="700"
            _hover={{
              color: useColorModeValue('stripe.500', 'stripe.50'),
              textDecor: 'none',
            }}
            as={GatsbyLink}
            to={slug}
          >
            {title}
          </Heading>
          <chakra.p
            mt={2}
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            {excerpt}
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text color={useColorModeValue('gray.700', 'gray.200')} mx="1">
              {createdDate}
            </Text>
          </Flex>
          <Text color={useColorModeValue('gray.700', 'gray.200')}>
            {timeToRead} min read
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default BlogRow;
