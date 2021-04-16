import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import UpcomingEvents from '../components/UpcomingEvents';
import NewBlogPosts from '../components/NewBlogPosts';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index;
  const image = frontmatter.main_image;
  const info = frontmatter.info;
  const upcomingEvents = data.upcoming_events.edges;
  const newPosts = data.new_posts.edges;
  return (
    <Layout>
      <Seo title="Home" />
      <Hero description={frontmatter.description} frontImage={image} />
      <Intro info={info} />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      <NewBlogPosts newPosts={newPosts} />
    </Layout>
  );
};

export const data = graphql`
  query IndexQuery($currentDate: Date!) {
    new_posts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-template" } } }
      sort: { fields: [frontmatter___created_date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt
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
    upcoming_events: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "event-template" }
          event_start: { gte: $currentDate }
        }
      }
      sort: { fields: [frontmatter___event_start], order: ASC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            event_start(formatString: "Do MMM YYYY h:mma")
            event_end(formatString: "Do MMM YYYY h:mma")
            location
            event_link
            featured_image
          }
        }
      }
    }
    index: markdownRemark(
      frontmatter: { templateKey: { eq: "index-template" } }
    ) {
      frontmatter {
        description
        main_image
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
