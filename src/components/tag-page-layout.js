import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "./layout";
import SEO from "./seo";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.allMdx;

  return (
    <Layout>
      <SEO title={`${tag} - Recipes`} />
      <h1>{tag}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { title, slug } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={`/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
