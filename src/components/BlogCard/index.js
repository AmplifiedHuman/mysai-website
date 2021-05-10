import React from 'react';
import {
  Box,
  Text,
  useColorModeValue,
  Flex,
  chakra,
  Link,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

export default function BlogCard({
  title,
  createdDate,
  excerpt,
  timeToRead,
  slug,
}) {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      rounded="md"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="md"
        boxShadow="2xl"
        bg={useColorModeValue('white', 'gray.900')}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {createdDate}
          </chakra.span>
          <Text
            px={3}
            py={1}
            bg="stripe.400"
            color="white"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
          >
            Blog
          </Text>
        </Flex>

        <Box mt={2}>
          <Link
            fontSize="xl"
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
          <chakra.p mt={2} color={useColorModeValue('gray.500', 'gray.300')}>
            {excerpt}
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            color={useColorModeValue('stripe.600', 'stripe.200')}
            _hover={{ textDecor: 'underline' }}
            as={GatsbyLink}
            to={slug}
          >
            Read more
          </Link>
          <Text color={useColorModeValue('gray.600', 'gray.300')}>
            {timeToRead} min read
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
