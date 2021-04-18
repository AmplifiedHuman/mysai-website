import { Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MarkdownContent from '../components/MarkdownContent';
import Seo from '../components/SEO';
import RemoteImage from '../components/RemoteImage';
import { useColorModeValue } from '@chakra-ui/color-mode';

const BlogPage = ({ data }) => {
  const markdownRemark = data.markdownRemark;
  const { frontmatter } = markdownRemark;
  const px = ['0', '0', '0', '100px', '200px'];
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <Flex flexDir="column" mx="auto" maxW="5xl">
        <RemoteImage url={frontmatter.featured_image} alt='Featured Image'/>
      </Flex>
      <Flex flexDir="column" mx="auto" alignItems="left" px={px}>
        <Heading size="2xl" textAlign="left" my="8" lineHeight="1.2">
          {frontmatter.title}
        </Heading>
        <Text
          color={useColorModeValue('gray.600', 'gray.300')}
          letterSpacing={['normal', 'normal', 'wider', 'wider', 'wider']}
          fontSize={['sm', 'md', 'lg', 'lg', 'xl']}
        >
          {frontmatter.created_date} - {frontmatter.author} -{' '}
          {markdownRemark.timeToRead} min read
        </Text>
      </Flex>
      <MarkdownContent html={markdownRemark.htmlAst} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      timeToRead
      frontmatter {
        title
        featured_image
        author
        created_date(formatString: "Do MMM YYYY")
      }
    }
  }
`;

export default BlogPage;
