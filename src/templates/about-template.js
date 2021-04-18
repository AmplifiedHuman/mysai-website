import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import CommitteeGrid from '../components/CommitteeGrid';
import MarkdownContent from '../components/MarkdownContent';
import { Heading } from '@chakra-ui/layout';
import CommitteeList from '../components/CommitteeList';

const AboutPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <Layout>
      <Seo title="About" />
      <Heading size="2xl" textAlign="center">
        About Us
      </Heading>
      <MarkdownContent html={markdownRemark.htmlAst} type="about" />
      <CommitteeGrid committees={frontmatter.committee_list} />
      <CommitteeList departments={frontmatter.department} />
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
            member_photo
            member_position
            member_school
          }
        }
        department {
          department_name
          team_member {
            member_course
            member_name
            member_school
          }
        }
      }
    }
  }
`;

export default AboutPage;
