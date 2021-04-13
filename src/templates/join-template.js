import React from 'react';
import { graphql } from 'gatsby';
import JoinCard from '../components/JoinCard';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import MarkdownContent from '../components/MarkdownContent';

const JoinUsPage = ({ data }) => {
  const { markdownRemark } = data;
  const {
    frontmatter: { associate_application, ambassador_application },
  } = markdownRemark;
  return (
    <Layout>
      <Seo title="Join Us" />
      <JoinCard
        associateApplication={associate_application}
        ambassadorApplication={ambassador_application}
      />
      <MarkdownContent html={markdownRemark.htmlAst} />
    </Layout>
  );
};

export const data = graphql`
  query JoinQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "join-template" } }) {
      htmlAst
      frontmatter {
        associate_application {
          application_url
          is_open
        }
        ambassador_application {
          application_url
          is_open
        }
      }
    }
  }
`;

export default JoinUsPage;
