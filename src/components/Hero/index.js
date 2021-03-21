import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Stack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "index-template" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              description
              main_image {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allMarkdownRemark;
  const { frontmatter } = edges[0].node;
  const image = getImage(frontmatter.main_image);
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
              <Text
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
                  color={useColorModeValue('blue.400', 'blue.600')}
                >
                  Ireland
                </Text>
              </Text>
              <Text
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: 'lg', md: 'xl' }}
                maxW={{ sm: 'xl' }}
                mx={{ sm: 'auto', lg: 0 }}
                color="gray.500"
              >
                {frontmatter.description}
              </Text>
              <Stack
                direction="row"
                justify={['left', 'center', 'center', 'left', 'left']}
                spacing={4}
                mt={{ base: 5, sm: 8 }}
                fontWeight="extrabold"
              >
                <Button colorScheme="blue" variant="solid">
                  Our Events
                </Button>
                <Button colorScheme="blue" variant="outline">
                  About Us
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="full" maxW="650px">
        <GatsbyImage
          image={image}
          alt="MYSAI Photo"
          style={{ borderRadius: '5px' }}
        />
      </Box>
    </Stack>
  );
};

export default Hero;
