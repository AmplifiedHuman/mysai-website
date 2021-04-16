const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      all_posts: allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      events: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "event-template" } } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      blog_posts: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-template" } } }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.all_posts.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          currentDate: getCurrentDate(),
        },
      });
    });

    // events pagination
    const events = result.data.events.edges;
    const eventsPerPage = 9;
    const numEventPages = Math.ceil(events.length / eventsPerPage);
    Array.from({ length: numEventPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/events/` : `/events/${i + 1}`,
        component: path.resolve('./src/templates/event-list-template.js'),
        context: {
          limit: eventsPerPage,
          skip: i * eventsPerPage,
          numPages: numEventPages,
          currentPage: i + 1,
        },
      });
    });

    // blog pagination
    const blogPosts = result.data.blog_posts.edges;
    const blogPerPage = 6;
    const numBlogPages = Math.ceil(blogPosts.length / blogPerPage);
    Array.from({ length: numBlogPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
        component: path.resolve('./src/templates/blog-list-template.js'),
        context: {
          limit: blogPerPage,
          skip: i * blogPerPage,
          numPages: numBlogPages,
          currentPage: i + 1,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      event_link: String,
    }
  `;
  createTypes(typeDefs);
};

// returns date in YYYY-MM-DD format
const getCurrentDate = () => {
  const d = new Date();
  let month = (d.getMonth() + 1).toString();
  if (month.length < 2) {
    month = `0${month}`;
  }
  let day = d.getDate().toString();
  if (day.length < 2) {
    day = `0${day}`;
  }
  return `${d.getFullYear()}-${month}-${day}`;
};
