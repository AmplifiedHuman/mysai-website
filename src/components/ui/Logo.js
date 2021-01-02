import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useColorMode, Box } from '@chakra-ui/react';

const Logo = () => {
  const { colorMode } = useColorMode();
  const data = useStaticQuery(graphql`
    query {
      lightImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      darkImage: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const light = data.lightImage.childImageSharp.fluid;
  const dark = data.darkImage.childImageSharp.fluid;
  return (
    <Box w='44' px='4' py='2'>
      <Img
        fluid={colorMode === 'light' ? light : dark}
      />
    </Box>
  );
};

export default Logo;
