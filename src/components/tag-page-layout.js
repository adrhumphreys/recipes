import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import SEO from "./seo";
import RecipeTile from "./recipe-tile";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.allMdx;

  const recipeList = edges.map(({ node: { frontmatter: { title, slug } } }) => (
    <RecipeTile title={title} slug={slug} key={slug} />
  ));

  return (
    <Layout>
      <SEO title={`${tag} - Recipes`} />
      <h1 className="list">{tag}</h1>
      <div className="recipe-tiles">{recipeList}</div>
    </Layout>
  );
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
