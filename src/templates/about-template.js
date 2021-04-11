import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import CommitteeGrid from '../components/CommitteeGrid';
import { useColorModeValue } from '@chakra-ui/system';
import MarkdownContent from '../components/MarkdownContent';
import { Heading } from '@chakra-ui/layout';

const AboutPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <Layout>
      <Seo title="About" />
      <Heading
        size="xl"
        color={useColorModeValue('facebook.400', 'twitter.200')}
        textAlign="center"
      >
        About Us
      </Heading>
      <MarkdownContent html={markdownRemark.htmlAst} type="about" />
      <CommitteeGrid committees={frontmatter.committee_list} />
    </Layout>
  );
};

export const data = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "about-template" } }) {
      htmlAst
      frontmatter {
        committee_year
        committee_list {
          team_member {
            member_course
            member_name
            member_photo {
              childImageSharp {
                gatsbyImageData
              }
            }
            member_position
            member_school
          }
        }
        student_ambassadors {
          ambassador {
            ambassador_course
            ambassador_name
            ambassador_school
          }
        }
      }
    }
  }
`;

export default AboutPage;
