import React from 'react';
import { Stack, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import BlogCard from '../BlogCard';

const NewBlogPosts = ({ newPosts }) => {
  return (
    <Stack mt="80px" mb="15">
      <Heading mb={10}>
        Recent Posts{' '}
        <Text mx="2" display="inline-block">
          <span role="img" aria-label="paper">
            🔖
          </span>
        </Text>
      </Heading>
      <SimpleGrid
        minChildWidth="350px"
        spacing="30px"
        gap="30px"
        justifyItems="center"
      >
        {newPosts.map(
          ({
            node: {
              excerpt,
              timeToRead,
              frontmatter,
              id,
              fields: { slug },
            },
          }) => {
            return (
              <BlogCard
                key={id}
                title={frontmatter.title}
                createdDate={frontmatter.created_date}
                excerpt={excerpt}
                timeToRead={timeToRead}
                slug={slug}
              />
            );
          }
        )}
      </SimpleGrid>
    </Stack>
  );
};

export default NewBlogPosts;
