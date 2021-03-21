import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import { getImage } from 'gatsby-plugin-image';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const image = getImage(frontmatter.main_image);
  const info = frontmatter.info;
  return (
    <Layout>
      <SEO title="Home" />
      <Hero description={frontmatter.description} frontImage={image} />
      <Intro info={info} />
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  );
};

export const data = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-template" } }) {
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
        info {
          info_item {
            info_item_description
            info_title
          }
        }
      }
    }
  }
`;

export default IndexPage;
