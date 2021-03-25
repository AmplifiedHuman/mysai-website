import React from 'react';
import { Stack, Heading, Center } from '@chakra-ui/react';
import BlogCard from '../BlogCard';

const NewBlogPosts = () => {
  return (
    <Stack mt="50">
      <Heading mb={10}>Blog Posts</Heading>
      <Center>
        <Stack
          direction={['column', 'column', 'column', 'row', 'row']}
          spacing="30"
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Stack>
      </Center>
    </Stack>
  );
};

export default NewBlogPosts;
