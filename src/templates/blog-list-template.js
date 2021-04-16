import { Divider, Heading, HStack } from '@chakra-ui/layout';
import React from 'react';
import BlogHero from '../components/BlogHero';
import BlogRow from '../components/BlogRow';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/SEO';
import { AiFillPushpin } from '@react-icons/all-files/ai/AiFillPushpin';
import { AiOutlinePaperClip } from '@react-icons/all-files/ai/AiOutlinePaperClip';
import Icon from '@chakra-ui/icon';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/button';

const BlogPage = ({ data, pageContext }) => {
  const allPosts = data.all_posts.edges;
  const pinnedPosts = data.pinned_posts.edges;
  // pagination
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/${currentPage + 1}`;
  return (
    <Layout>
      <Seo title="Blog" />
      <BlogHero heroPost={allPosts[0]} />
      {isFirst ? (
        <>
          <Heading mb={4} mt={8}>
            Pinned{' '}
            <Icon
              boxSize={10}
              mb="2"
              as={AiFillPushpin}
              aria-hidden="true"
              fill="red.500"
            />
          </Heading>
          <Divider />
        </>
      ) : (
        ''
      )}
      {isFirst
        ? pinnedPosts.map(
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
                <BlogRow
                  key={id}
                  title={frontmatter.title}
                  createdDate={frontmatter.created_date}
                  excerpt={excerpt}
                  timeToRead={timeToRead}
                  slug={slug}
                />
              );
            }
          )
        : ''}
      <Heading mb={4} mt={8}>
        Blog Posts{' '}
        <Icon
          boxSize={10}
          mb="2"
          as={AiOutlinePaperClip}
          aria-hidden="true"
          fill={useColorModeValue('gray.600', 'gray.300')}
        />
      </Heading>
      <Divider />
      {allPosts.map(
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
            <BlogRow
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
      <HStack justifyContent="center" mt="10">
        {!isFirst && (
          <>
            <Button as={Link} to={prevPage} rel="prev">
              ←
            </Button>
            <Button as={Link} to={prevPage}>
              {currentPage - 1}
            </Button>
          </>
        )}
        <Button
          as={Link}
          to={`/events/${currentPage === 1 ? '' : currentPage}`}
          bgGradient="linear(to-r, stripe.400,stripe.600)"
          color="white"
        >
          {currentPage}
        </Button>
        {!isLast && (
          <>
            <Button as={Link} to={nextPage}>
              {currentPage + 1}
            </Button>
            <Button as={Link} to={nextPage} rel="next">
              →
            </Button>
          </>
        )}
      </HStack>
    </Layout>
  );
};

export const data = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    all_posts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-template" } } }
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___created_date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            featured_image
            created_date(formatString: "Do MMM YYYY")
          }
        }
      }
    }

    pinned_posts: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-template" }
          is_pinned: { eq: true }
        }
      }
      sort: { fields: [frontmatter___created_date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            created_date(formatString: "Do MMM YYYY")
          }
        }
      }
    }
  }
`;

export default BlogPage;
