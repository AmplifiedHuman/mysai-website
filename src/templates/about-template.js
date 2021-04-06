import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import CommitteeGrid from '../components/CommitteeGrid';

const AboutPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <Layout>
      <Seo title="About" />
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
