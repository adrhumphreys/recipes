import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import RecipeTile from "../components/recipe-tile";

const IndexPage = () => {
  const {
    recipesGroup: { edges: recipes }
  } = useStaticQuery(
    graphql`
      query {
        recipesGroup: allMdx {
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
    `
  );

  const recipeList = recipes.map(
    ({
      node: {
        frontmatter: { title, slug }
      }
    }) => <RecipeTile title={title} slug={slug} key={slug} />
  );

  return (
    <Layout>
      <SEO title="Recipes" />
      <h1>all recipes</h1>
      {recipeList}
    </Layout>
  );
};

export default IndexPage;
