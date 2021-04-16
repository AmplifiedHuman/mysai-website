import { Divider } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../components/Layout';
import '@fontsource/merriweather';

const EventPage = ({ data }) => {
  return (
    <Layout>
      {/* <Seo title={frontmatter.title} /> */}
      <Divider />
      {/* <MarkdownContent html={markdownRemark.htmlAst} /> */}
    </Layout>
  );
};

export default EventPage;
