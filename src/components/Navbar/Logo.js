import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useColorMode, Box } from '@chakra-ui/react';

const Logo = () => {
  const { colorMode } = useColorMode();
  const data = useStaticQuery(graphql`
    query {
      lightImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      darkImage: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const light = data.lightImage.childImageSharp.gatsbyImageData;
  const dark = data.darkImage.childImageSharp.gatsbyImageData;
  return (
    <Link to="/">
      <Box w="40" px="4" py="2">
        <GatsbyImage
          image={colorMode === 'light' ? light : dark}
          alt="MYSAI logo"
        />
      </Box>
    </Link>
  );
};

export default Logo;
